import { useState, useEffect } from 'react';
import { Plus, X, ThumbsUp } from 'lucide-react';

function MultipleTabs() {
    const [tabs, setTabs] = useState([
        { id: 1, title: 'Home', content: 'Welcome to the dashboard home tab.' },
        { id: 2, title: 'Profile', content: 'This is your profile information tab.' },
    ]);
    const [activeTab, setActiveTab] = useState(1);
    const [newTabName, setNewTabName] = useState('');
    const [showAddInput, setShowAddInput] = useState(false);

    // Business Logic: Load tabs from localStorage on first load
    useEffect(() => {
        const savedTabs = localStorage.getItem('magnusTabs');
        if (savedTabs) {
            const parsed = JSON.parse(savedTabs);
            setTabs(parsed);
            setActiveTab(parsed[0]?.id || 1);
        }
    }, []);

    // Business Logic: Save tabs whenever they change
    useEffect(() => {
        localStorage.setItem('magnusTabs', JSON.stringify(tabs));
    }, [tabs]);

    const addNewTab = () => {
        if (!newTabName.trim()) return;

        // Business Logic: Prevent duplicate tab names
        const exists = tabs.some(tab => tab.title.toLowerCase() === newTabName.toLowerCase());
        if (exists) {
            alert('❌ Tab with this name already exists!');
            return;
        }

        const newTab = {
            id: Date.now(),
            title: newTabName.trim(),
            content: `This is the content of ${newTabName} tab. You can put any component here.`,
        };

        setTabs([...tabs, newTab]);
        setActiveTab(newTab.id);
        setNewTabName('');
        setShowAddInput(false);
    };

    const closeTab = (id) => {
        // Business Logic: Prevent closing the last tab
        if (tabs.length === 1) {
            alert('❌ You cannot close the last remaining tab.');
            return;
        }

        // Business Logic: Confirm before closing
        if (!window.confirm('Are you sure you want to close this tab?')) return;

        const filteredTabs = tabs.filter(tab => tab.id !== id);
        setTabs(filteredTabs);

        // If active tab is closed, switch to first tab
        if (activeTab === id) {
            setActiveTab(filteredTabs[0].id);
        }
    };

    const activeTabData = tabs.find(tab => tab.id === activeTab);

    return (
        <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-4xl font-bold flex items-center gap-3">
                    <ThumbsUp size={32} /> Multiple Tabs Demo
                </h1>
                <button
                    onClick={() => setShowAddInput(!showAddInput)}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-white font-medium"
                >
                    <Plus size={20} />
                    Add New Tab
                </button>
            </div>

            {/* Tabs Header */}
            <div className="flex border-b border-gray-700 mb-6 overflow-x-auto">
                {tabs.map(tab => (
                    <div
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`group flex items-center gap-3 px-6 py-4 border-b-4 cursor-pointer transition-all ${activeTab === tab.id
                            ? 'border-blue-500 text-white'
                            : 'border-transparent text-gray-400 hover:text-gray-200'
                            }`}
                    >
                        {tab.title}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                closeTab(tab.id);
                            }}
                            className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-400"
                        >
                            <X size={18} />
                        </button>
                    </div>
                ))}
            </div>

            {/* Add New Tab Input */}
            {showAddInput && (
                <div className="mb-8 flex gap-3">
                    <input
                        type="text"
                        value={newTabName}
                        onChange={(e) => setNewTabName(e.target.value)}
                        placeholder="New tab name"
                        className="flex-1 bg-gray-800 text-white px-5 py-3 rounded-xl focus:outline-none"
                        onKeyDown={(e) => e.key === 'Enter' && addNewTab()}
                    />
                    <button
                        onClick={addNewTab}
                        className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-xl text-white font-medium"
                    >
                        Add
                    </button>
                    <button
                        onClick={() => { setShowAddInput(false); setNewTabName(''); }}
                        className="bg-gray-700 hover:bg-gray-600 px-8 py-3 rounded-xl text-white font-medium"
                    >
                        Cancel
                    </button>
                </div>
            )}

            {/* Tab Content Area */}
            <div className="bg-gray-900 p-10 rounded-3xl min-h-[400px]">
                <h2 className="text-2xl font-semibold mb-4">{activeTabData?.title}</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                    {activeTabData?.content}
                </p>
                <div className="mt-10 text-sm text-gray-500">
                    Business Logic Implemented:<br />
                    • Prevent duplicate tab names<br />
                    • Cannot close last tab<br />
                    • Confirm before closing<br />
                    • Tabs persist after refresh (localStorage)
                </div>
            </div>
        </div>
    );
}

export default MultipleTabs;
