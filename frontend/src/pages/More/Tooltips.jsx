import { ThumbsUp } from 'lucide-react';

function Tooltips() {
    return (
        <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-12 flex items-center justify-center gap-3">
                <ThumbsUp size={32} /> Tooltips Demo
            </h1>
            <div className="flex flex-wrap justify-center gap-8 text-2xl">
                <div className="group relative">
                    <button className="bg-blue-600 px-8 py-4 rounded-2xl">Hover me</button>
                    <div className="absolute hidden group-hover:block bg-gray-900 text-white text-sm px-4 py-2 rounded-xl -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
                        This is a tooltip with business logic
                    </div>
                </div>
                <div className="group relative">
                    <button className="bg-green-600 px-8 py-4 rounded-2xl">Another tooltip</button>
                    <div className="absolute hidden group-hover:block bg-gray-900 text-white text-sm px-4 py-2 rounded-xl -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
                        Positioned above with delay
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tooltips;
