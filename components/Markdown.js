/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import Link from '@react/react-spectrum/Link';
import ReactMarkdown from 'react-markdown/with-html';
import classNames from 'classnames';
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
