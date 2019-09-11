import Header from './Header'
import {Helmet} from "react-helmet";
import Provider from '@react/react-spectrum/Provider';

export default function Layout(props) {
  return (
    <div>{props.children}</div>
  )
}
