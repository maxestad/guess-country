import Head from 'next/head';

const PageHead = ({ title, description }) => (
  <div>
    <Head>
      <meta charSet="UTF-8" />
      <title>{title ? title : 'Guess Country'}</title>
      <meta
        name="description"
        content={
          description
            ? description
            : 'Website for learning flags of different countries in different modes.'
        }
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  </div>
);

export default PageHead;
