const Image = require('../models/Image');
const multer = require('multer');
const path = require('path');

// Multer setup - Business Logic: File validation
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (extname && mimetype) {
        return cb(null, true);
    } else {
        cb(new Error('Only JPG, JPEG, PNG & GIF files are allowed!'));
    }
};

const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max
    fileFilter: fileFilter
}).single('image');

// Create uploads folder
const fs = require('fs');
if (!fs.existsSync('uploads')) fs.mkdirSync('uploads');

// GET all images
exports.getImages = async (req, res) => {
    try {
        const images = await Image.find().sort({ uploadDate: -1 });
        res.json(images);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// POST upload image
exports.uploadImage = (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ message: err.message });
        }
        try {
            const newImage = new Image({
                filename: req.file.filename,
                originalName: req.file.originalname,
                path: req.file.path,
                size: req.file.size
            });
            await newImage.save();
            res.status(201).json(newImage);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    });
};

// DELETE image
exports.deleteImage = async (req, res) => {
    try {
        const image = await Image.findById(req.params.id);
        if (!image) return res.status(404).json({ message: 'Image not found' });

        // Delete file from disk
        const fs = require('fs');
        fs.unlink(image.path, (err) => { if (err) console.error(err); });

        await image.deleteOne();
        res.json({ message: 'Image deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
