import { useState, useEffect } from 'react';
import { Upload, Trash2, Eye, ThumbsUp } from 'lucide-react';
import axios from 'axios';

function Images() {
    const [images, setImages] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(false);

    // Fetch all images
    const fetchImages = async () => {
        try {
            const res = await axios.get('/api/images');
            setImages(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchImages();
    }, []);

    // Business Logic: File preview before upload
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    // Upload image
    const handleUpload = async () => {
        if (!selectedFile) return alert('Please select a file');

        setLoading(true);
        const formData = new FormData();
        formData.append('image', selectedFile);

        try {
            await axios.post('/api/images/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            alert('✅ Image uploaded successfully!');
            setSelectedFile(null);
            setPreview(null);
            fetchImages();
        } catch (err) {
            alert('❌ ' + (err.response?.data?.message || 'Upload failed'));
        } finally {
            setLoading(false);
        }
    };

    // Delete image
    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this image?')) return;

        try {
            await axios.delete(`/api/images/${id}`);
            fetchImages();
        } catch (err) {
            alert('Delete failed');
        }
    };

    return (
        <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 flex items-center gap-3">
                <ThumbsUp size={32} /> Images (Full CRUD Demo)
            </h1>

            {/* Upload Section */}
            <div className="bg-gray-900 p-8 rounded-3xl mb-12">
                <h2 className="text-2xl font-semibold mb-6">Upload New Image</h2>

                <div className="flex gap-8 items-center">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="file:mr-4 file:py-3 file:px-6 file:bg-blue-600 file:text-white file:rounded-xl"
                    />

                    {preview && (
                        <img src={preview} alt="Preview" className="w-40 h-40 object-cover rounded-xl border" />
                    )}

                    <button
                        onClick={handleUpload}
                        disabled={loading || !selectedFile}
                        className="flex items-center gap-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 px-8 py-4 rounded-2xl text-white font-semibold"
                    >
                        <Upload size={24} />
                        {loading ? 'Uploading...' : 'Upload Image'}
                    </button>
                </div>
            </div>

            {/* Images Grid - Read + Delete */}
            <h2 className="text-2xl font-semibold mb-6">Uploaded Images ({images.length})</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {images.map((img) => (
                    <div key={img._id} className="bg-gray-900 rounded-3xl overflow-hidden group">
                        <img
                            src={`http://localhost:5000/${img.path}`}
                            alt={img.originalName}
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-4">
                            <p className="text-sm text-gray-400 truncate">{img.originalName}</p>
                            <div className="flex justify-between items-center mt-3">
                                <button
                                    onClick={() => window.open(`http://localhost:5000/${img.path}`, '_blank')}
                                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
                                >
                                    <Eye size={18} /> View
                                </button>
                                <button
                                    onClick={() => handleDelete(img._id)}
                                    className="flex items-center gap-2 text-red-400 hover:text-red-300"
                                >
                                    <Trash2 size={18} /> Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Images;
