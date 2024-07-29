import React, { useEffect, useRef, useState } from "react";
import "./CommentSection.css";
import { Rating } from "@mui/material";
import comments from "../assets/comments-data/comments";

export default function CommentSection({ productID }) {
  const commentAreaRef = useRef(null);
  const [rating, setRating] = useState(0);
  const localStoragedComments = JSON.parse(
    localStorage.getItem("local-comments-store")
  );
  const [localComments, setLocalComments] = useState(() => {
    if (localStoragedComments == null) {
      return [];
    }
    return localStoragedComments;
  });
  const localStorageUsers = JSON.parse(localStorage.getItem("users"));
  const [localUsers, setLocalUsers] = useState(() => {
    if (localStorageUsers == null) {
      return [];
    }
    return localStorageUsers;
  });

  const getUserInfo = (info) => {
    let tempLocalUsers = localUsers.filter((user) => user.login);

    switch (info) {
      case "name":
        return tempLocalUsers[0].name;
      case "image":
        return tempLocalUsers[0].img;
    }
  };

  const addComment = () => {
    setLocalComments([
      {
        id: Date(),
        productID: productID,
        name: getUserInfo("name"),
        image: getUserInfo("image"),
        comment: commentAreaRef.current.value,
        rating: rating,
      },
      ...localComments,
    ]);
    setRating(0);
    clearComment();
  };

  const clearComment = () => {
    commentAreaRef.current.value = "";
  };

  const IsLoggedIn = () => {
    let userLoggedIn = false;

    localUsers.map((item) => {
      if (item.login) {
        userLoggedIn = true;
      }
    });
    return userLoggedIn;
  };

  const clearLocalStorage = () => {
    localStorage.clear();
    window.location.reload();
  };

  useEffect(() => {
    localStorage.setItem("local-comments-store", JSON.stringify(localComments));
  }, [localComments]);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(localUsers));
  }, [localUsers]);

  return (
    <div className="comment-section">
      <h1 className="comment-title">Comments</h1>
      <hr className="title-bar" />

      <button onClick={clearLocalStorage}>Clear local storage</button>
      {!IsLoggedIn() ? null : (
        <div className="comment-text-area">
          <textarea
            ref={commentAreaRef}
            name="comment"
            id="commentTextArea"
          ></textarea>
          <div className="comment-text-area-right">
            <Rating
              className="comment-add-rating"
              value={rating}
              onChange={(event, value) => {
                setRating(value);
              }}
              sx={{ p: 2 }}
            />
            <button onClick={clearComment} className="text-area-btn-top">
              clear
            </button>
            <button onClick={addComment} className="text-area-btn-bottom">
              add comment
            </button>
          </div>
        </div>
      )}

      {localComments &&
        localComments.map((comment, index) => {
          if (comment.productID == productID) {
            return (
              <CommentCard
                name={comment.name}
                image={comment.image}
                comment={comment.comment}
                key={comment.name + index}
                rating={comment.rating}
              />
            );
          }
        })}

      {productID &&
        comments[productID - 1].comments.map((comment, index) => (
          <CommentCard
            name={comment.name}
            image={comment.image}
            comment={comment.comment}
            key={comment.name + index}
            rating={comment.rating}
          />
        ))}
    </div>
  );
}

function CommentCard({ name, image, comment, rating }) {
  return (
    <div className="comment">
      <div className="comment-top">
        <img className="comment-image" src={image} alt="" />
        <h2>{name}</h2>
      </div>

      <p className="comment-comment">{comment}</p>
      <div className="comment-bottom">
        <Rating value={rating} className="comment-rating" readOnly />
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
  );
}
