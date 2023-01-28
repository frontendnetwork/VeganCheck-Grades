import { Link, NavLink } from 'react-router-dom';

export default function Footer() {
    return(<>
    <footer>
        <div className="footertext">&copy; {new Date().getFullYear()} VeganCheck.me &amp; Contributors</div>
        <ul>
            <li><Link to="developers">API for Developers</Link></li>
            <li><a href="https://vegancheck.me">VeganCheck.me</a></li>
            <li><Link to="legal">Legal</Link></li>
        </ul>
    </footer>
    </>
    );
}