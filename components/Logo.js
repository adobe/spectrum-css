import Link from "next/link";
import classNames from "classnames";
import styles from "./css/logo.scss";
import { withRouter } from "next/router";

class Logo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Link href="/" as={`${process.env.BACKEND_URL}/`}>
        <a className={styles.headerLink}>
          <div className={styles.logoContainer} tabIndex="-1">

          <div className={styles.title} >

            <img
              className={styles.svgLogo}
              src={`${process.env.BACKEND_URL}/static/adobe_logo-2.svg`}
              alt="Adobe Logo"
              className={styles.logo}
            />
            <div>
              <h2
                className={classNames(
                  styles.titleText,
                  "spectrum-Site-title",
                  "spectrum-Heading3"
                )}
              >
                Spectrum CSS
              </h2>
              {process.env.build === "internal" ||
              process.env.build === "both" ? (
                <div className={styles.internal}>ADOBE INTERNAL</div>
              ) : (
                undefined
              )}
            </div>
            </div>
          </div>
        </a>
      </Link>
    );
  }
}

export default withRouter(Logo);
