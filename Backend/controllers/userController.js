



const {addUserService} = require("../service/userService")
const addUserController = async (req, res) => {}
const addUser = await addUserService(req);
const getAllUserController = async (req, res) => {}
const getAllUser = await getAllUserService( );
const getUserByIdController = async (req, res) => {
    await getUserByIdService(req);
}
const deleteUserController = async (req, res) =>  {}
const deleteUser = await deleteUserService(req);

const {id} = req.params;
const userById =await userModels.findById(id);
 if (!userById)
    {
return {statuscode: 404, message: "user not found"};
return userById;}




res.json (AllUser)
res.json(userById)
res.json (addUser)
res.json (deleteUser)










module.exports = {getUserByIdController, getAllUserController, updateUserController, deleteUserController, adduserController};