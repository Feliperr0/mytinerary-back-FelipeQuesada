import mongoose from 'mongoose';

const validate_Id_Format = (req, res, next) => {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid ID format.' });
    }
    next();
};

export default validate_Id_Format;
