import React from "react";
import commentsData from "../assets/comments.json";
import "./CommentSection.css";
import pic from "../assets/profile-pic.jpg";
import { Rating } from "@mui/material";

export default function CommentSection() {
  return (
    <div className="comment-section">
      <h1 className="comment-title">Comments</h1>
      <hr className="title-bar" />

      <div className="comment-text-area">
        <textarea name="comment" id="commentTextArea"></textarea>
        <div className="comment-text-area-right">
          <button className="text-area-btn-top">clear</button>
          <button className="text-area-btn-bottom">add comment</button>
        </div>
      </div>

      {commentsData.map((comment, index) => (
        <div key={comment.name + index} className="comment">
          <div className="comment-top">
            <img className="comment-image" src={comment.image} alt="" />
            <h2>{comment.name}</h2>
          </div>

          <p className="comment-comment">{comment.comment}</p>
          <div className="comment-bottom">
            <Rating
              value={comment.rating}
              className="comment-rating"
              readOnly
            />
            <div className="comment-thumbs">
              <span className="material-symbols-outlined animated-icon">
                thumb_up
              </span>
              <span className="material-symbols-outlined animated-icon">
                thumb_down
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
