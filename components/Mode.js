import React, { useReducer, useState } from 'react';

import { initialState, reducer } from '../lib/reducer';
import { MODES } from '../constants';
import BackButton from './BackButton';
import createCountriesRoster from '../lib/createCountriesRoster';
import FinishedRoundInfo from './FinishedRoundInfo';
import getRandomNumber from '../lib/getRandomNumber';
import Grid from './Grid';
import ModeBody from './ModeBody';
import NavigationBar from '../components/NavigationBar';
import RegionSelection from '../components/RegionSelection';
import SideInfo from './SideInfo';
import Timer from '../components/Timer';
import WelcomeContent from '../components/WelcomeContent';

const Mode = () => {
  const [modeName, updateModeName] = useState(null);
  const [region, setRegion] = useState(null);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [isRoundEnded, updateIsRoundEnded] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { score, mistake, currentRound } = state;

  const isRoundFinished =
    (currentRound === 5 &&
      (modeName === MODES.GUESS_FLAG || modeName === MODES.GUESS_COUNTRY)) ||
    isRoundEnded;

  const handleCountryPick = name => {
    if (name === currentItem.name) {
      dispatch({ type: 'correctPick' });
    } else {
      dispatch({ type: 'incorrectPick' });
    }
  };

  const resetGame = () => {
    dispatch({ type: 'reset' });
    updateIsRoundEnded(false);
  };

  if (!modeName) {
    return (
      <>
        <WelcomeContent />
        <NavigationBar modeName={null} updateModeName={updateModeName} />
      </>
    );
  }

  if (!region) {
    return (
      <RegionSelection setRegion={setRegion} updateModeName={updateModeName} />
    );
  }

  if (!isTimerActive && modeName === MODES.TIMER_MODE) {
    return (
      <Timer
        updateIsRoundEnded={updateIsRoundEnded}
        isTimerActive={isTimerActive}
        setIsTimerActive={setIsTimerActive}
      />
    );
  }

  if (isRoundFinished) {
    return (
      <FinishedRoundInfo
        mistake={mistake}
        resetGame={resetGame}
        score={score}
        updateModeName={updateModeName}
        setRegion={setRegion}
      />
    );
  }

  const roster = createCountriesRoster(4, region);
  const currentItem = roster[getRandomNumber(3)];

  return (
    <Grid hasAnimation>
      <ModeBody
        currentItem={currentItem}
        roster={roster}
        handleCountryPick={handleCountryPick}
        isGuessCountry={modeName === MODES.GUESS_COUNTRY}
        currentRound={currentRound}
      />
      <SideInfo
        score={score}
        modeName={modeName}
        updateIsRoundEnded={updateIsRoundEnded}
        isTimerActive={isTimerActive}
        currentRound={currentRound}
        region={region}
      />
      <BackButton
        onClick={() => {
          setRegion(null);
          resetGame();
        }}
      />
    </Grid>
  );
};

export default Mode;
