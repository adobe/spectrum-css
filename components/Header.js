import Link from 'next/link'

const pathPrefix = process.env.NODE_ENV === 'production' ? '/spectrum-css' : '';

const linkStyle = {
  marginRight: 15
}

export default function Header() {
  return (
    <div>
      <Link href={`${pathPrefix}/`}>
        <a style={linkStyle}>Home</a>
      </Link>
    </div>
  )
}
