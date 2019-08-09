import Layout from '../components/MyLayout';
import Link from 'next/link';

const pathPrefix = process.env.NODE_ENV === 'production' ? '/spectrum-css' : '';

function getPosts() {
  return [
    { id: 'checkbox', title: 'Checkbox' },
    { id: 'barloader', title: 'Barloader' }
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

export default function Blog() {
  return (
    <Layout>
      <h1>Spectrum Components</h1>
      <ul>
        {getPosts().map(post => (
          <PostLink key={post.id} post={post} />
        ))}
      </ul>
      <style jsx>{`
        h1,
        a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }
      `}</style>
    </Layout>
  );
}
