import classNames from 'classnames';
import ReactMarkdown from 'react-markdown/with-html';
import Link from '@react/react-spectrum/Link';
import styles from './css/markdown.scss';



const link = props => {
  let buttonText = props.children[0].props.children
  if(buttonText.indexOf("button-CTA") > -1 || buttonText.indexOf("button-Primary") > -1 ) {
    let className = buttonText.indexOf("button-CTA") > -1 ? 'spectrum-Button--cta' : 'spectrum-Button--primary';
    buttonText = buttonText.replace("button-CTA:", "").replace("button-Primary:", "");
    return (
      props.href.indexOf('http://') == 0 || props.href.indexOf('https://') == 0 ?
      <a href={props.href} target="_blank" className={classNames("spectrum-Button", className)}>{buttonText}</a> :
      <a href={props.href} className={classNames("spectrum-Button", className)}>{buttonText}</a>
    )
  } else {
    return (
      props.href.indexOf('http://') == 0 || props.href.indexOf('https://') == 0 ?
      <Link href={props.href} target="_blank">{props.children}</Link> :
      <Link href={props.href}>{props.children}</Link>
    )
  } 
  
}
const paragraph = props => <p className={'spectrum-Body3'}>{props.children}</p>
const table = props => <table className={classNames('spectrum-Table spectrum-Table--quiet', styles.table)}>{props.children}</table>
const tableHead = props => <thead className={'spectrum-Table-head'}>{props.children}</thead>
const tableRow = props => <tr className={'spectrum-Table-row'}>{props.children}</tr>
const tableBody = props => <tbody className="spectrum-Table-body">{props.children}</tbody>
const list = props => <ul className={styles.list}>{props.children}</ul>

const tableCell = props => {
  return (
    props.isHeader ? <th className={'spectrum-Table-headCell'}>{props.children}</th>
    : <td align={props.align} className={classNames('spectrum-Table-cell')}>{props.children}</td>
  )
}




const Markdown = (props) => (
  <div>
      <ReactMarkdown escapeHtml={false} source={props.source} renderers={{link, paragraph, table, tableHead,tableCell, tableRow, tableBody, list}} />

  </div>
)

export default Markdown
