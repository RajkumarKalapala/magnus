import { ThumbsUp } from 'lucide-react';

function Iframes() {
    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 flex items-center gap-3">
                <ThumbsUp size={32} /> iFrames Demo
            </h1>
            <iframe
                src="https://www.google.com"
                className="w-full h-[600px] border border-gray-700 rounded-3xl"
                title="iFrame Demo"
            />
        </div>
    );
}

export default Iframes;
