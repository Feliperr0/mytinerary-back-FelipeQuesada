import User from '../../models/User.js';

let deleteUserById = async (req, res, next) => {
  try {
    let idQuery = req.params.id;
    let deletedUser = await User.findByIdAndDelete(idQuery);

    return res.status(200).json({
      success: true,
      message: 'User deleted successfully',
      user: deletedUser
    });
  } catch (error) {
    next(error);
  }
};

export default deleteUserById;
