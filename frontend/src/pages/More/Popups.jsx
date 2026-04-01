import { useState } from 'react';
import { X } from 'lucide-react';

function Popups() {
    const [modalType, setModalType] = useState(null); // alert | confirm | form
    const [formData, setFormData] = useState({ name: '', email: '' });

    const openModal = (type) => setModalType(type);
    const closeModal = () => setModalType(null);

    // Business Logic: Handle different modal types
    const handleConfirm = () => {
        alert('✅ You confirmed the action!');
        closeModal();
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert(`✅ Form submitted!\nName: ${formData.name}\nEmail: ${formData.email}`);
        closeModal();
        setFormData({ name: '', email: '' });
    };

    return (
        <div>
            <h1 className="text-4xl font-bold mb-8">Popups / Modals Demo</h1>
            <div className="grid grid-cols-3 gap-6">

                <button
                    onClick={() => openModal('alert')}
                    className="bg-blue-600 hover:bg-blue-700 px-8 py-6 rounded-xl text-white font-semibold text-lg"
                >
                    Alert Modal
                </button>

                <button
                    onClick={() => openModal('confirm')}
                    className="bg-amber-600 hover:bg-amber-700 px-8 py-6 rounded-xl text-white font-semibold text-lg"
                >
                    Confirm Modal
                </button>

                <button
                    onClick={() => openModal('form')}
                    className="bg-green-600 hover:bg-green-700 px-8 py-6 rounded-xl text-white font-semibold text-lg"
                >
                    Form Modal
                </button>
            </div>

            {/* Modal Component - Business Logic Here */}
            {modalType && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
                    <div className="bg-gray-900 w-full max-w-md mx-4 rounded-2xl shadow-2xl overflow-hidden">

                        {/* Header */}
                        <div className="px-6 py-4 border-b border-gray-700 flex justify-between items-center">
                            <h3 className="text-xl font-semibold">
                                {modalType === 'alert' && 'Alert'}
                                {modalType === 'confirm' && 'Confirmation'}
                                {modalType === 'form' && 'Form Popup'}
                            </h3>
                            <button onClick={closeModal} className="text-gray-400 hover:text-white">
                                <X size={24} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-6">
                            {modalType === 'alert' && (
                                <p className="text-gray-300 text-lg">This is a simple alert popup with important information.</p>
                            )}

                            {modalType === 'confirm' && (
                                <p className="text-gray-300 text-lg">Are you sure you want to delete this record? This action cannot be undone.</p>
                            )}

                            {modalType === 'form' && (
                                <form onSubmit={handleFormSubmit} className="space-y-4">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 bg-gray-800 rounded-lg text-white"
                                        required
                                    />
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 bg-gray-800 rounded-lg text-white"
                                        required
                                    />
                                </form>
                            )}
                        </div>

                        {/* Footer Buttons */}
                        <div className="px-6 py-4 border-t border-gray-700 flex justify-end gap-3">
                            <button
                                onClick={closeModal}
                                className="px-6 py-3 text-gray-400 hover:text-white font-medium"
                            >
                                Cancel
                            </button>

                            {modalType === 'confirm' && (
                                <button
                                    onClick={handleConfirm}
                                    className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-lg text-white font-semibold"
                                >
                                    Yes, Delete
                                </button>
                            )}

                            {modalType === 'form' && (
                                <button
                                    onClick={handleFormSubmit}
                                    className="px-8 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-white font-semibold"
                                >
                                    Submit
                                </button>
                            )}

                            {modalType === 'alert' && (
                                <button
                                    onClick={closeModal}
                                    className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold"
                                >
                                    OK
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Popups;
