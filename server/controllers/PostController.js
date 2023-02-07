import mongoose from "mongoose";

import PostModel from "../models/Post.js";

// get post
export const getPost = async (req, res) => {
    const id = req.params.id;

    try {
        const post = await PostModel.findById(id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
}

// create new post
export const createPost = async (req, res) => {
    const newPost = new PostModel(req.body);

    try {
        await newPost.save();
        res.status(200).json('Post created');
    } catch (error) {
        res.status(500).json(error);
    }
}


export const updatePost = async (req, res) => {
    const postId = req.params.id;
    const { userId } = req.body;

    try {
        const post = await PostModel.findById(postId);
        if (post.userId === userId) {
            await post.updateOne({ $set: req.body });
            res.status(200).json('Post updated');
        } else {
            res.status(403).json('Action forbidden');
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

// delete post
export const deletePost = async (req, res) => {
    const id = req.params.id;
    const userId = req.body;

    try {
        const post = await PostModel.findById(id);
        
        if (post.userId === userId) {
            await post.deleteOne();
            res.status(200).json('Post deleted successfully');
        } else {
            res.status(403).json('Action forbidden');
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

// like & dislike post
export const likePost = async (req, res) => {
    const id = req.params.id;
    const { userId } = req.body;

    try {
        const post = await PostModel.findById(id);

        if (!post.likes.includes(userId)) {
            await post.updateOne({ $push: { likes: userId } });
            res.status(200).json('Post liked');
        } else {
            // dislike
            await post.updateOne({ $pull: { likes: userId } });
            res.status(200).json('Post unliked');
        }
    } catch (error) {
        res.status(500).json(error);
    }
}