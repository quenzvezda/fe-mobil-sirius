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
                    Merk
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Jenis Kendaraan
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
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Fitur
                </th>
            </tr>
            </thead>
            <tbody>
            {mobils.map((mobil) => (
                <tr key={mobil.mobilId}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {mobil.noRangka}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {mobil.merk}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {mobil.jenisMobil}
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
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <ul>
                            {mobil.panjangBodi && (
                                <li>Panjang Bodi: {mobil.panjangBodi}</li>
                            )}
                            {mobil.tipeAtap && (
                                <li>Tipe Atap: {mobil.tipeAtap}</li>
                            )}
                            {mobil.kapasitasPenumpang && (
                                <li>Kapasitas Penumpang: {mobil.kapasitasPenumpang}</li>
                            )}
                            {mobil.groundClearance && (
                                <li>Ground Clearance: {mobil.groundClearance}</li>
                            )}
                            {mobil.kecepatanMaksimal && (
                                <li>Kecepatan Maksimal: {mobil.kecepatanMaksimal} km/h</li>
                            )}
                            {mobil.tipeSuspensi && (
                                <li>Tipe Suspensi: {mobil.tipeSuspensi}</li>
                            )}
                            {mobil.tipeMesin && (
                                <li>Tipe Mesin: {mobil.tipeMesin}</li>
                            )}
                            {mobil.kapasitasTangkiBahanBakar && (
                                <li>Kapasitas Tangki Bahan Bakar: {mobil.kapasitasTangkiBahanBakar} liter</li>
                            )}
                        </ul>
                    </td>

                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default MobilTable;
