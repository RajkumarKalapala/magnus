import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';

function Dashboard() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    useEffect(() => {
        const loggedIn = localStorage.getItem('isLoggedIn');
        if (!loggedIn) setIsLoggedIn(false);
    }, []);

    if (!isLoggedIn) {
        return <Navigate to="/" />;
    }

    return (
        <div className="flex h-screen bg-gray-950 text-white">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col">
                <Navbar />

                {/* This is where all More pages will render */}
                <div className="flex-1 p-8 overflow-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
