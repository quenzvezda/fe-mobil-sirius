// src/components/MobilTable.jsx
import React, { useState, useEffect } from 'react';
import axios from '../axios.js';

const MobilTable = () => {
    const [mobils, setMobils] = useState([]);

    useEffect(() => {
        const fetchMobils = async () => {
            try {
                const response = await axios.get('/mobil');
                setMobils(response.data);
            } catch (error) {
                console.error('Terjadi kesalahan saat mengambil data mobil:', error);
            }
        };

        fetchMobils();
    }, []);

    return (
        <table className="min-w-full leading-normal">
            <thead>
            <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    No Rangka
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Tahun
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Warna
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Status
                </th>
                {/* Tambahkan lebih banyak kolom sesuai dengan data yang ingin ditampilkan */}
            </tr>
            </thead>
            <tbody>
            {mobils.map((mobil) => (
                <tr key={mobil.mobilId}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {mobil.noRangka}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {mobil.tahun}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {mobil.warna}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {mobil.status}
                    </td>
                    {/* Tampilkan data lainnya di sini */}
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default MobilTable;
