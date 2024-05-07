import { useState } from 'react';
import './Navbar.scss';

const links = [
    { to: '/', title: 'Home' },
    { to: '/about', title: 'About' },
    { to: '/contact', title: 'Contact' },
    { to: '/agents', title: 'Agents' },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="navbar">
            <div className="leftPart">
                <a className="logo">
                    <img src="/logo.png" alt="Logo" width={50} />
                    <span>Mykola</span>
                </a>
                <div className="links">
                    {links.map(link => (
                        <a href={link.to} key={link.title}>
                            {link.title}
                        </a>
                    ))}
                </div>
            </div>
            <div className="rightPart">
                <a href="/login">Sign in</a>
                <a href="/register">Sign up</a>
                <div className="menuIcon">
                    <img
                        src="/menu.png"
                        alt="Menu"
                        onClick={() => setOpen(!open)}
                    />
                </div>
                {/* MOBILE MENU */}
                <div className={open ? 'menu active' : 'menu'}>
                    {links.map(link => (
                        <a href={link.to} key={link.title}>
                            {link.title}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
