//

const validate_Id_Format = (req, res, next) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ message: 'Invalid ID format, please enter a valid number.' });
  }
  next();
};

export default validate_Id_Format;