import { Comment } from "../model/Comment.js";

// get all comments
// GET api/comments
export const getComments = async (req, res, next) => {
	const perPage = 10;
	const page = req.query.page;

	if (page !== undefined) {
		const count = await Comment.countDocuments();

		const totalPages = Math.ceil(count / perPage);
		const comments = await Comment.find()
			.skip((page - 1) * perPage)
			.limit(perPage);
		res.json({ comments, totalPages });
	}
	else if (req.query.movieId !== undefined) {
		const movieId = req.query.movieId;
		try {
			const comments = await Comment.find({ movie_id: movieId });
			if (!comments) {
				res.status(400).json({ success: false });
			}
			res.status(200).json({
				success: true,
				data: comments,
				msg: `displaying comment for movie_id${movieId}`,
			});
		} catch (err) {
			res.status(400).json({ success: false });
		}
	} else if (req.query.name !== undefined) {
		const commentName = req.query.name;
		try {
			const comments = await Comment.find({
				name: { $regex: commentName, $options: "i" },
			});
			if (!comments) {
				res.status(400).json({ success: false });
			}
			res.status(200).json({
				success: true,
				data: comments,
				msg: `displaying comment from ${commentName}`,
			});
		} catch (err) {
			res.status(400).json({ success: false });
		}
	} else {
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
			res.status(400).json({ success: false });
		}
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

//creates a new comment
// POST api/comments
export const createComment = async (req, res, next) => {
	try {
		const comments = await Comment.create(req.body);
		if (!comments) {
			res.status(400).json({ success: false });
		}
		res.status(200).json({ success: true, msg: `comment created` });
	} catch (err) {
		res.status(400).json({ success: false });
	}
};
