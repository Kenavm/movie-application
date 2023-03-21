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

//gets comment by id
//GET api/comments/:id
export const getCommentByID = async (req, res, next) => {
	try {
		const comments = await Comment.findById(req.params.id);
		if (!comments) {
			return res.status(400).json({ success: false });
		}
		res.status(200).json({
			success: true,
			count: comments.length,
			data: comments,
			msg: `displaying comment with ID ${req.params.id}`,
		});
	} catch (err) {
		res.status(400).json({ success: false });
	}
};
