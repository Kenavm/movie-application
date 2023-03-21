import { Comment } from "../model/Comment.js";

// get all comments
// api/comments

export const getComments = async (req, res, next) => {
	try {
		const comments = await Comment.find();

		if (!comments) {
			res.status(400).json({ success: false });
		}

		res.status(200).json({
			sucess: true,
			count: comments.length,
			data: comments,
			msg: `showing all comments`,
		});
	} catch (err) {
		resizeTo.status(400).json({ success: false });
	}
};
