import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
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

                <div className="flex-1 p-8 overflow-auto">
                    <h1 className="text-4xl font-bold mb-4">Welcome to Magnus</h1>
                    <p className="text-gray-400 text-lg">
                        This is your dashboard. Click on <strong>More</strong> in the top right to see all UI components.
                    </p>

                    <div className="mt-12 bg-gray-900 p-8 rounded-xl">
                        <h2 className="text-2xl font-semibold mb-6">Project Progress</h2>
                        <p className="text-gray-300">Phase 2 Completed ✅</p>
                        <p className="text-gray-400 mt-2">Now we will implement all 11 features under More menu one by one.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
