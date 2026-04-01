import { useState } from 'react';
import { ChevronDown, ThumbsUp } from 'lucide-react';

function Collapsible() {
    const [openSections, setOpenSections] = useState([1]);

    const toggleSection = (id) => {
        setOpenSections(prev =>
            prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
        );
    };

    return (
        <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 flex items-center gap-3">
                <ThumbsUp size={32} /> Collapsible Content (Accordion)
            </h1>
            <div className="space-y-4">
                {[1, 2, 3].map(id => (
                    <div key={id} className="bg-gray-900 rounded-3xl overflow-hidden">
                        <button
                            onClick={() => toggleSection(id)}
                            className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-800"
                        >
                            <span className="text-xl font-semibold">Section {id} - Important Information</span>
                            <ChevronDown className={`transition ${openSections.includes(id) ? 'rotate-180' : ''}`} />
                        </button>
                        {openSections.includes(id) && (
                            <div className="px-8 pb-8 text-gray-300">
                                This section demonstrates collapsible content with smooth animation and state management.
                                Business logic: Multiple sections can be open at the same time.
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Collapsible;
