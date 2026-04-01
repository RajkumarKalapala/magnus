import { Home, Users, Calendar, DollarSign, Settings } from 'lucide-react';

function Sidebar() {
    return (
        <div className="w-64 bg-gray-900 border-r border-gray-800 p-4 flex flex-col">
            <div className="flex items-center gap-3 mb-10 px-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">M</span>
                </div>
                <h1 className="text-2xl font-bold">Magnus</h1>
            </div>

            <nav className="space-y-2">
                <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-800 text-white">
                    <Home size={20} /> Dashboard
                </a>
                <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 text-gray-300">
                    <Users size={20} /> Employees
                </a>
                <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 text-gray-300">
                    <Calendar size={20} /> Leave
                </a>
                <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 text-gray-300">
                    <DollarSign size={20} /> Payroll
                </a>
                <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 text-gray-300">
                    <Settings size={20} /> Settings
                </a>
            </nav>
        </div>
    );
}

export default Sidebar;
