import Link from 'next/link';

export default function Home() {
  return (
    <ul>
      <li>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href='/my/account'>
          <a>My Account</a>
        </Link>
      </li>
      <li>
        <Link href='/my/info'>
          <a>My Info</a>
        </Link>
      </li>
    </ul>
  );
}
