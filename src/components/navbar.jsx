"use client";
import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function Headercomponents() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState("");

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <Navbar fluid rounded>
            <Navbar.Brand>
                <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Button>Masuk</Button>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Link to={'/'} onClick={() => handleLinkClick('/')}>
                    <Navbar.Link href="#" active={activeLink === '/'}>Beranda</Navbar.Link>
                </Link>
                <Link to={'/laporan'} onClick={() => handleLinkClick('/laporan')}>
                    <Navbar.Link active={activeLink === '/laporan'}>Laporan</Navbar.Link>
                </Link>
                <Link to={'/edukasi'} onClick={() => handleLinkClick('/edukasi')}>
                    <Navbar.Link active={activeLink === '/edukasi'}>Edukasi</Navbar.Link>
                </Link>
                <Link to={'/tentang'} onClick={() => handleLinkClick('/tentang')}>
                    <Navbar.Link active={activeLink === '/tentang'}>Tentang</Navbar.Link>
                </Link>
                <Link to={'/kontak'} onClick={() => handleLinkClick('/kontak')}>
                    <Navbar.Link active={activeLink === '/kontak'}>Kontak</Navbar.Link>
                </Link>
                <Link to={'/bantuan'} onClick={() => handleLinkClick('/bantuan')}>
                    <Navbar.Link active={activeLink === '/bantuan'}>Bantuan</Navbar.Link>
                </Link>
            </Navbar.Collapse>
        </Navbar>
    )
}


export default Headercomponents;