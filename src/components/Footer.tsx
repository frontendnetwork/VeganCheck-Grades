import Link from "next/link";

export default function Footer(): JSX.Element {
  return (
    <footer>
      <div className="footertext">
        &copy; {new Date().getFullYear()} Veganify &amp; Contributors
      </div>
      <ul>
        <li>
          <Link href="Developers">API for Developers</Link>
        </li>
        <li>
          <a href="https://veganify.app">Veganify</a>
        </li>
        <li>
          <Link href="Legal">Legal</Link>
        </li>
      </ul>
    </footer>
  );
}
