import Document, {Html, Head, Main, NextScript} from 'next/document';
import classNames from 'classnames';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
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
          <script src="//www.adobe.com/marketingtech/main.min.js">
          </script>
          <script dangerouslySetInnerHTML={{
            __html: `
              digitalData._set('page.pageInfo.siteSection', 'Spectrum CSS Document Site');
              digitalData._set('page.pageInfo.template', 'default template');
              digitalData._set('page.pageInfo.language', 'en-US');
              digitalData._set('page.pageInfo.geoRegion', 'US');
              digitalData._set('page.pageInfo.issueDate', '2018-03-02');
              digitalData._set('page.pageInfo.breadCrumbs', ["Home"]);
              digitalData._set('page.pageInfo.legacyMarketSegment', 'com');
              digitalData._set('page.pageInfo.productName', 'Spectrum CSS');
            `
          }}>
          </script>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        <div className={'flexContainer'}>
          <div className={classNames('afg-container-fluid', 'site-mainContainer', 'footerContainer')}>
            <div className={classNames('afg-row')}>
              <div className="afg-col-xs-12 afg-col-sm-12">
                <div id="footer_global">
                </div>
              </div>
            </div>
          </div>
        </div>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.adobeGlobalnavConfig = {
                  locale: 'en',
                  footer: {
                      target: document.getElementById('footer_global'),
                      theme:{
                          backgroundColor:'#FFFFFF',
                          columnTitleColor: '#00FF00',
                          linkColor: '#4B4B4B',
                          linkHoverColor: '#2C2C2C',
                          separatorColor: '',
                          caretColor: ''
                      },
                      excludeNavigation: true
                  }
                }`
          }}>
        </script>
        {
          process.env.environment === 'production' ?
            <script
              src="//wwwimages2.adobe.com/etc/beagle/public/globalnav/adobe-globalnav/latest/adobe-globalnav.min.js">
            </script>
            :
            <script
              src="//wwwimages2.stage.adobe.com/etc/beagle/public/globalnav/adobe-globalnav/latest/adobe-globalnav.min.js">
            </script>
        }
        </body>
      </Html>
    )
  }
}

export default MyDocument
