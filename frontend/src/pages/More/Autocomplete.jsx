import { useState, useEffect } from 'react';
import { ThumbsUp, Search } from 'lucide-react';

const suggestions = ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind', 'MERN', 'JavaScript', 'TypeScript', 'Docker', 'AWS'];

function Autocomplete() {
    const [query, setQuery] = useState('');
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        if (query.length < 1) {
            setFiltered([]);
            return;
        }
        const results = suggestions.filter(item =>
            item.toLowerCase().includes(query.toLowerCase())
        );
        setFiltered(results);
    }, [query]);

    return (
        <div className="max-w-xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 flex items-center gap-3">
                <ThumbsUp size={32} /> Autocomplete
            </h1>
            <div className="relative">
                <div className="flex items-center bg-gray-900 rounded-3xl px-6 py-4">
                    <Search size={24} className="text-gray-400" />
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Type to search (React, Node...)"
                        className="flex-1 ml-4 bg-transparent outline-none text-lg"
                    />
                </div>

                {filtered.length > 0 && (
                    <div className="absolute mt-2 w-full bg-gray-900 rounded-3xl shadow-2xl max-h-80 overflow-auto">
                        {filtered.map((item, i) => (
                            <div key={i} onClick={() => { setQuery(item); setFiltered([]); }}
                                className="px-8 py-5 hover:bg-gray-800 cursor-pointer border-b border-gray-700 last:border-none">
                                {item}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Autocomplete;
