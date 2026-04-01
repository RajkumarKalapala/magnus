import { ThumbsUp } from 'lucide-react';

function CssProperties() {
    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-12 flex items-center gap-3">
                <ThumbsUp size={32} /> CSS Properties Demo
            </h1>
            <div className="grid grid-cols-2 gap-8 text-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-40 rounded-3xl flex items-center justify-center text-white text-2xl font-bold">Gradient + Flex</div>
                <div className="animate-pulse bg-gray-800 h-40 rounded-3xl flex items-center justify-center text-white text-2xl">CSS Animation</div>
            </div>
        </div>
    );
}

export default CssProperties;
