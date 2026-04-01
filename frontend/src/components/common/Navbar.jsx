import { LogOut, User } from 'lucide-react';
import MoreMenu from './MoreMenu';

function Navbar() {
    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        window.location.href = '/';
    };

    return (
        <div className="bg-gray-900 border-b border-gray-800 px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <h2 className="text-xl font-semibold">JALA Academy - Magnus Demo</h2>
            </div>

            <div className="flex items-center gap-6">
                <MoreMenu />

                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <User size={18} />
                    </div>
                    <div>
                        <p className="text-sm font-medium">Training User</p>
                        <p className="text-xs text-gray-500">Candidate</p>
                    </div>
                </div>

                <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 text-gray-400 hover:text-white"
                >
                    <LogOut size={20} />
                </button>
            </div>
        </div>
    );
}

export default Navbar;
