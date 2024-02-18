// src/components/ActionButtons.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../axios.js';
import PropTypes from 'prop-types';

const ActionButtons = ({ mobilId, onDelete }) => {
    const navigate = useNavigate();

    const handleEdit = () => {
        // Redirect ke halaman edit dengan mobilId
        navigate(`/mobil/${mobilId}/edit`);
    };

    const handleDelete = async () => {
        // Logika untuk menghapus mobil
        try {
            await axios.delete(`/mobil/${mobilId}`);
            alert('Mobil berhasil dihapus');
            onDelete(mobilId); // Memperbarui state di MobilTable
        } catch (error) {
            console.error('Terjadi kesalahan saat menghapus mobil:', error);
        }
    };

    return (
        <div>
            <button onClick={handleEdit} className="mr-2 text-blue-500 hover:text-blue-700">Edit</button>
            <button onClick={handleDelete} className="text-red-500 hover:text-red-700">Delete</button>
        </div>
    );
};

ActionButtons.propTypes = {
    mobilId: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
};


export default ActionButtons;
