import React from 'react';
import { useHistory } from 'react-router-dom';

const LogoutButton = () => {
    const history = useHistory();

    const handleLogout = () => {
        // Remove auth_token from localStorage
        localStorage.removeItem('auth_token');

        // Redirect to login page
        history.push('/login');
    };

    return (
        <button onClick={handleLogout}>
            Logout
        </button>
    );
};

export default LogoutButton;
