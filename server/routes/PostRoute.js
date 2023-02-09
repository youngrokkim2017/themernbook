import express from 'express';

import { createPost, deletePost, getPost, getTimelinePosts, likePost, updatePost } from '../controllers/PostController.js';

const router = express.Router();

router.get('/:id', getPost);
router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);
router.put('/:id/like', likePost);
router.get('/:id/timeline', getTimelinePosts);

export default router;