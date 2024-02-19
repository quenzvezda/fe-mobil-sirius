// src/components/MobilForm.jsx
import React, { useState } from 'react';
import axios from '../axios.js';

const MobilForm = () => {
    const [mobil, setMobil] = useState({
        noRangka: '',
        tahun: '',
        warna: '',
        status: '',
        jenisMobil: '', // 'Sedan' atau 'SUV'
        merk: '', // 'Porche' atau 'Ford'
        panjangBodi: '', // untuk Sedan
        tipeAtap: '', // untuk Sedan
        kapasitasPenumpang: '', // untuk SUV
        groundClearance: '', // untuk SUV
        kecepatanMaksimal: '', // untuk Porche
        tipeSuspensi: '', // untuk Porche
        tipeMesin: '', // untuk Ford
        kapasitasTangkiBahanBakar: '', // untuk Ford
        jumlahRoda: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        let newValue;
        if (name === 'tahun' || name === 'panjangBodi' || name === 'kapasitasPenumpang' || name === 'groundClearance' || name === 'kecepatanMaksimal' || name === 'kapasitasTangkiBahanBakar') {
            newValue = Number(value);
        } else {
            newValue = value;
        }

        if (name === 'jenisMobil') {
            setMobil({
                ...mobil,
                [name]: newValue,
                panjangBodi: '',
                tipeAtap: '',
                kapasitasPenumpang: '',
                groundClearance: '',
            });
        } else if (name === 'merk') {
            setMobil({
                ...mobil,
                [name]: newValue,
                kecepatanMaksimal: '',
                tipeSuspensi: '',
                tipeMesin: '',
                kapasitasTangkiBahanBakar: '',
            });
        } else {
            setMobil({ ...mobil, [name]: newValue });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            noRangka: mobil.noRangka,
            tahun: mobil.tahun,
            warna: mobil.warna,
            status: mobil.status,
            jenisMobil: mobil.jenisMobil,
            merk: mobil.merk,
            panjangBodi: mobil.panjangBodi,
            tipeAtap: mobil.tipeAtap,
            kapasitasPenumpang: mobil.kapasitasPenumpang,
            groundClearance: mobil.groundClearance,
            kecepatanMaksimal: mobil.kecepatanMaksimal,
            tipeSuspensi: mobil.tipeSuspensi,
            tipeMesin: mobil.tipeMesin,
            kapasitasTangkiBahanBakar: mobil.kapasitasTangkiBahanBakar,
            jumlahRoda: mobil.jumlahRoda,
        };

        try {
            const response = await axios.post('/mobil/new', data);
            alert('Data mobil berhasil ditambahkan!');
            console.log(response.data);
            window.location = '/mobil';
        } catch (error) {
            console.error('Terjadi kesalahan saat mengirim data:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto my-8">
            <div className="flex flex-wrap -mx-3 mb-6">
                {/* Input fields untuk Mobil */}
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label htmlFor="noRangka" className="block mb-2 text-sm font-medium text-gray-900">No Rangka</label>
                    <input
                        type="text"
                        id="noRangka"
                        name="noRangka"
                        value={mobil.noRangka}
                        onChange={handleInputChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                        placeholder={"P0001..etc"}
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="tahun" className="block mb-2 text-sm font-medium text-gray-900">Tahun</label>
                    <input
                        type="number"
                        id="tahun"
                        name="tahun"
                        value={mobil.tahun}
                        onChange={handleInputChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                        placeholder={"2020"}
                    />
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label htmlFor="warna" className="block mb-2 text-sm font-medium text-gray-900">Warna</label>
                    <input
                        type="text"
                        id="warna"
                        name="warna"
                        value={mobil.warna}
                        onChange={handleInputChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                        placeholder={"Merah,Kuning,..etc"}
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900">Status</label>
                    <input
                        type="text"
                        id="status"
                        name="status"
                        value={mobil.status}
                        onChange={handleInputChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                        placeholder={"Terjual, Tersedia"}
                    />
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
                {/* Pilihan Jenis Mobil */}
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <span className="block mb-2 text-sm font-medium text-gray-900">Jenis Mobil</span>
                    <select
                        id="jenisMobil"
                        name="jenisMobil"
                        value={mobil.jenisMobil}
                        onChange={handleInputChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                    >
                        <option value="">Pilih Jenis Mobil</option>
                        <option value="sedan">Sedan</option>
                        <option value="suv">SUV</option>
                    </select>
                </div>
                {/* Pilihan Merk Mobil */}
                <div className="mb-6">
                    <span className="block mb-2 text-sm font-medium text-gray-900">Merk Mobil</span>
                    <select
                        id="merk"
                        name="merk"
                        value={mobil.merk}
                        onChange={handleInputChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                    >
                        <option value="">Pilih Merk Mobil</option>
                        <option value="porche">Porsche</option>
                        <option value="ford">Ford</option>
                    </select>
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
                {/* Conditional input fields berdasarkan pilihan jenis dan merk */}
                {/* Input fields untuk Sedan */}
                {mobil.jenisMobil === 'sedan' && (
                    <>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label htmlFor="panjangBodi" className="block mb-2 text-sm font-medium text-gray-900">Panjang
                                Bodi</label>
                            <input
                                type="number"
                                id="panjangBodi"
                                name="panjangBodi"
                                value={mobil.panjangBodi}
                                onChange={handleInputChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required
                                placeholder={"2.5, 1.6 (meter)"}
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label htmlFor="tipeAtap" className="block mb-2 text-sm font-medium text-gray-900">Tipe
                                Atap</label>
                            <input
                                type="text"
                                id="tipeAtap"
                                name="tipeAtap"
                                value={mobil.tipeAtap}
                                onChange={handleInputChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required
                                placeholder={"sunroof, panorama,..etc"}
                            />
                        </div>
                    </>
                )}
                {/* Input fields untuk SUV */}
                {mobil.jenisMobil === 'suv' && (
                    <>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label htmlFor="kapasitasPenumpang"
                                   className="block mb-2 text-sm font-medium text-gray-900">Kapasitas Penumpang</label>
                            <input
                                type="number"
                                id="kapasitasPenumpang"
                                name="kapasitasPenumpang"
                                value={mobil.kapasitasPenumpang}
                                onChange={handleInputChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required
                                placeholder={"1-10"}
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label htmlFor="groundClearance" className="block mb-2 text-sm font-medium text-gray-900">Ground
                                Clearance</label>
                            <input
                                type="number"
                                id="groundClearance"
                                name="groundClearance"
                                value={mobil.groundClearance}
                                onChange={handleInputChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required
                                placeholder={"100-150 (mm)"}
                            />
                        </div>
                    </>
                )}

                {/* Input fields untuk Porsche */}
                {mobil.merk === 'porche' && (
                    <>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label htmlFor="kecepatanMaksimal" className="block mb-2 text-sm font-medium text-gray-900">Kecepatan
                                Maksimal</label>
                            <input
                                type="number"
                                id="kecepatanMaksimal"
                                name="kecepatanMaksimal"
                                value={mobil.kecepatanMaksimal}
                                onChange={handleInputChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required
                                placeholder={"km/h"}
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label htmlFor="tipeSuspensi" className="block mb-2 text-sm font-medium text-gray-900">Tipe
                                Suspensi</label>
                            <input
                                type="text"
                                id="tipeSuspensi"
                                name="tipeSuspensi"
                                value={mobil.tipeSuspensi}
                                onChange={handleInputChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required
                                placeholder={"sport, race, tune,..etc"}
                            />
                        </div>
                    </>
                )}
                {/* Input fields untuk Ford */}
                {mobil.merk === 'ford' && (
                    <>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label htmlFor="tipeMesin" className="block mb-2 text-sm font-medium text-gray-900">Tipe
                                Mesin</label>
                            <input
                                type="text"
                                id="tipeMesin"
                                name="tipeMesin"
                                value={mobil.tipeMesin}
                                onChange={handleInputChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required={mobil.merk === 'ford'}
                                placeholder={"Compact, Medium, Luxury..."}
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label htmlFor="kapasitasTangkiBahanBakar"
                                   className="block mb-2 text-sm font-medium text-gray-900">Kapasitas Tangki Bahan
                                Bakar</label>
                            <input
                                type="number"
                                id="kapasitasTangkiBahanBakar"
                                name="kapasitasTangkiBahanBakar"
                                value={mobil.kapasitasTangkiBahanBakar}
                                onChange={handleInputChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required={mobil.merk === 'ford'}
                                placeholder={"50-80 (L)"}
                            />
                        </div>
                    </>
                )}

                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label htmlFor="jumlahRoda" className="block mb-2 text-sm font-medium text-gray-900">Jumlah
                        Roda</label>
                    <select
                        id="jumlahRoda"
                        name="jumlahRoda"
                        value={mobil.jumlahRoda}
                        onChange={handleInputChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                        defaultValue={4}
                    >
                        <option value="">Pilih Jumlah Roda</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                    </select>
                </div>
            </div>


            <button type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Tambah
                Mobil
            </button>
        </form>
    );
};

export default MobilForm;
