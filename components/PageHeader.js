import styles from './css/pageHeader.scss';
import classNames from 'classnames';

const PageHeader = (props) => (

  <div className={classNames('afg-row', styles.headerRow)}>
    <div className="afg-col-xs-9 spectrum-Article">
      <h1 className={classNames('spectrum-Heading1--display', styles.pageHeading)}>{props.title}</h1>
    </div>
  </div>

)

export default PageHeader
