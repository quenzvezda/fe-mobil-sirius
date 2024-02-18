// src/pages/MobilPage.jsx
import React from 'react';
import MobilTable from '../components/MobilTable';

const MobilPage = () => {
    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Daftar Mobil</h1>
            <MobilTable/>
        </div>
    );
};

export default MobilPage;
