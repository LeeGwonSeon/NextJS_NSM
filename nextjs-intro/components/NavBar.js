import Link from "next/link";
import { useRouter } from "next/router";
import css from "styled-jsx/css";

const { className, styles } = css.resolve`
  a {
    text-decoration: none;
  }
`;

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/" className={className}>
        Home
      </Link>
      <Link href="/about" className={className}>
        About
      </Link>
      <style jsx>{`
        nav {
          background-color: tomato;
          color: yellow;
        }
      `}</style>
      {styles}
    </nav>
  );
}
