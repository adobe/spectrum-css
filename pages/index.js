import Layout from '../components/MyLayout';
import Link from 'next/link';
import Provider from '@react/react-spectrum/Provider';
import Sidebar from '../components/Sidebar';
import Button from '@react/react-spectrum/Button';
import {Helmet} from "react-helmet";

const pathPrefix = process.env.NODE_ENV === 'production'
  ? '/spectrum-css'
  : '';

<<<<<<< HEAD
const PostLink = ({post}) => (<li>
  <Link href="/components/[id]" as={`${pathPrefix}/components/${post.id}`}>
    <a>{post.title}</a>
  </Link>
</li>);
=======
function getPosts() {
  return [
    { id: 'checkbox', title: 'Checkbox' },
    { id: 'barloader', title: 'Barloader' },
    { id: 'accordion', title: 'Accordion' },
    { id: 'button-primary', title: 'Button (Primary)' },
  ];
}

const PostLink = ({ post }) => (
  <li>
    <Link href="/components/[id]" as={`${pathPrefix}/components/${post.id}`}>
      <a>{post.title}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: 'Arial';
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
);
>>>>>>> ab9182cf98a919eecb17cddd13d33edcd077bbb9

export default function Blog() {
  return (<Layout>
    <Helmet>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport"/>
      <link rel="icon" type="image/x-icon" href="/static/favicon.png"/>
      <link type="text/css" rel="stylesheet" href="https://wwwimages2.adobe.com/etc/beagle/public/globalnav/adobe-globalnav/latest/adobe-globalnav.min.css"/>
    </Helmet>
    <Provider theme="light" scale='medium' typekitId="uma8ayv">
      <Sidebar/>
    </Provider>
  </Layout>);
}
