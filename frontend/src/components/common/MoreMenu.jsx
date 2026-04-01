import { useState } from 'react';
import { ChevronDown, ThumbsUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const moreItems = [
    { name: "Multiple Tabs", path: "/dashboard/more/tabs" },
    { name: "Menu", path: "/dashboard/more/menu" },
    { name: "Autocomplete", path: "/dashboard/more/autocomplete" },
    { name: "Collapsible Content", path: "/dashboard/more/collapsible" },
    { name: "Images", path: "/dashboard/more/images" },
    { name: "Slider", path: "/dashboard/more/slider" },
    { name: "Tooltips", path: "/dashboard/more/tooltips" },
    { name: "Popups", path: "/dashboard/more/popups" },
    { name: "Links", path: "/dashboard/more/links" },
    { name: "CSS Properties", path: "/dashboard/more/css" },
    { name: "iFrames", path: "/dashboard/more/iframes" },
];

function MoreMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleClick = (path) => {
        setIsOpen(false);
        navigate(path);
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-800 rounded-lg text-white"
            >
                <ThumbsUp size={20} />
                More
                <ChevronDown size={18} className={`transition ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl py-2 z-50">
                    {moreItems.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => handleClick(item.path)}
                            className="w-full text-left px-6 py-3 hover:bg-gray-800 text-gray-300 hover:text-white flex items-center gap-3"
                        >
                            <ThumbsUp size={18} className="text-blue-500" />
                            {item.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default MoreMenu;
