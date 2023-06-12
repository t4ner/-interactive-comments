import React, { useState } from "react";
import Comment from "../comment";
import NewCommnetEditor from "../new-comment-editor";
import Data from "../../../data.json";
import { CommentContextProvider } from "../comment/useComment";
function Conversation() {
  const [comments, setComments] = useState(Data.comments);
  const handleNewComment = (newComment) => {
    setComments([
      ...comments,

      {
        content: newComment,
        createdAt: new Date().toLocaleDateString(),
        id: Math.floor(Math.random() * 100),
        user: Data.currentUser,
        score: 0,
      },
    ]);
  };
  return (
    <div className="flex flex-col gap-6 ">
      {comments.map((comment) => (
        <CommentContextProvider
          key={comment.id}
          data={{ comment, currentUser: Data.currentUser }}
        >
          <Comment />
        </CommentContextProvider>
      ))}

      <NewCommnetEditor
        onClick={handleNewComment}
        image={Data.currentUser.image.png}
      />
    </div>
  );
}

export default Conversation;
