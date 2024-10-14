const express = require('express');
const { createPost, deletePost, updatePost, getAllUserPost, getSingleUserPost, addComment, getSinglePostComments, updateLike,deleteComment} = require('../controllers/postController');
const checkToken = require('../middleware/checkToken');
const router =express.Router();

router.post('/create',checkToken,createPost);
router.delete('/delete/:_id',deletePost);
router.put('/update/:_id',updatePost);
router.get('/getall',getAllUserPost);

router.get('/getSingleUser/',checkToken,getSingleUserPost);
router.put('/updatelike/:postId',checkToken,updateLike);
router.post('/addComment/:postId',checkToken,addComment);
//  router.get('/getComment/:postId',getSinglePostComments);
  router.delete('/deletecomment/:postId/:commentId',deleteComment)

module.exports = router