import { ThumbsUp, ExternalLink } from 'lucide-react';

function Links() {
    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 flex items-center gap-3">
                <ThumbsUp size={32} /> Links Demo
            </h1>
            <div className="space-y-6">
                <a href="https://jalaacademy.com" target="_blank" className="flex items-center gap-4 text-blue-400 hover:text-blue-300 text-2xl">
                    <ExternalLink /> External Link (opens in new tab)
                </a>
                <a href="#" className="flex items-center gap-4 text-blue-400 hover:text-blue-300 text-2xl">Internal Navigation Link</a>
            </div>
        </div>
    );
}

export default Links;
