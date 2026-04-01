import { ThumbsUp } from 'lucide-react';

function MenuDemo() {
    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 flex items-center gap-3">
                <ThumbsUp size={32} /> Menu Demo
            </h1>
            <div className="bg-gray-900 rounded-3xl p-8">
                <nav className="flex flex-col gap-2">
                    <a href="#" className="flex items-center gap-4 px-6 py-5 hover:bg-gray-800 rounded-2xl text-lg">Home</a>
                    <a href="#" className="flex items-center gap-4 px-6 py-5 hover:bg-gray-800 rounded-2xl text-lg">Employees</a>
                    <div className="pl-8">
                        <a href="#" className="flex items-center gap-4 px-6 py-4 hover:bg-gray-800 rounded-2xl">Sub Menu 1</a>
                        <a href="#" className="flex items-center gap-4 px-6 py-4 hover:bg-gray-800 rounded-2xl">Sub Menu 2</a>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default MenuDemo;
