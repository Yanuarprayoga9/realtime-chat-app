import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
	try {
        const loggedInUserId =req.user._id       
        console.log(req.user._id)
        const filteredUsers =await User.findById(loggedInUserId).select("-password");
        console.log(filteredUsers)
		res.status(200).json(filteredUsers);
	} catch (error) {
		console.error("Error in getUsersForSidebar: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};
