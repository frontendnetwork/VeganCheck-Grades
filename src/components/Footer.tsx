import Link from "next/link";

export default function Footer(): JSX.Element{
  return (
    <>
      <footer>
        <div className="footertext">
          &copy; {new Date().getFullYear()} VeganCheck.me &amp; Contributors
        </div>
        <ul>
          <li>
            <Link href="Developers">API for Developers</Link>
          </li>
          <li>
            <a href="https://vegancheck.me">VeganCheck.me</a>
          </li>
          <li>
            <Link href="Legal">Legal</Link>
          </li>
        </ul>
      </footer>
    </>
  );
}
