import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return {...initialProps}
  }

  render() {
    return (
      <Html>
        <Head>
          <script dangerouslySetInnerHTML={{
            __html: `
            window.marketingtech = {
              adobe: {
                launch: {
                  property: 'global',
                  environment: '${process.env.adobeLaunchEnv || 'stage'}'
                },
                target: false,
                audienceManager: false
              }
            };
            `
          }}>
          </script>
          <script src="https://www.adobe.com/marketingtech/main.min.js"></script>
          <script dangerouslySetInnerHTML={{
            __html: `
              //dom is ready, window.onload fires later
              digitalData._set('page.pageInfo.siteSection', 'Spectrum Document Site Page');
              digitalData._set('page.pageInfo.template', 'default template');
              digitalData._set('page.pageInfo.language', 'en-US');
              digitalData._set('page.pageInfo.geoRegion', 'US');
              digitalData._set('page.pageInfo.issueDate', '2018-03-02');
              digitalData._set('page.pageInfo.breadCrumbs', ["Home"]);
              digitalData._set('page.pageInfo.legacyMarketSegment', 'com');
              digitalData._set('page.pageInfo.productName', 'Spectrum Design System');
            `
          }}>
          </script>
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    )
  }
}

export default MyDocument
