import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    return(<>
    <div className="header">
        <Link to="/">
            <img src="assets/img/logo.svg" alt="logo" />
        </Link>
    </div>
    </>
    );
}