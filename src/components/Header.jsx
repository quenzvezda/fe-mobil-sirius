// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-blue-500 text-white p-4 sticky top-0 z-50">
            <nav>
                <ul className="flex space-x-4">
                    <li><Link to="/mobil" className="hover:underline">Home</Link></li>
                    <li><Link to="/mobil/new" className="hover:underline">Tambah Mobil</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
