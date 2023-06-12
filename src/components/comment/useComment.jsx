import React, { createContext, useContext, useMemo, useState } from "react";
const CommentContext = createContext();
function CommentContextProvider({ children, data }) {
  const [comment, setComment] = useState(data.comment);
  const [isReplying, setReplying] = useState(false);
  const [isEditing, setEditing] = useState(false);
  const onReply = () => {
    setReplying(!isReplying);
  };
  const onEdit = () => {
    setEditing(!isEditing);
  };
  const onDelete = () => {
    setComment(null);
  };
  const onUpdate = (newComment) => {
    setComment({
      ...comment,
      content: newComment,
    }),
      onEdit();
  };
  const onNewReply = (newComment) => {
    setComment({
      ...comment,
      replies: [
        ...(comment.replies ?? []),
        {
          content: newComment,
          createdAt: new Date().toLocaleDateString(),
          id: Math.floor(Math.random() * 100),
          user: data.currentUser,
          score: 0,
          replyingTo: comment.user.username,
        },
      ],
    });

    onReply();
  };
  const onPositiveReaction = () => {
    setComment({
      ...comment,
      score: comment.score + 1,
    });
  };
  const onNegativeReaction = () => {
    setComment({
      ...comment,
      score: comment.score - 1,
    });
  };
  const contextData = useMemo(
    () => ({
      onPositiveReaction,
      onNegativeReaction,
      onNewReply,
      comment,
      currentUser: data.currentUser,
      isReplying,
      onReply,
      onEdit,
      onUpdate,
      isEditing,
      onDelete,
    }),
    [isReplying, isEditing, comment]
  );
  return (
    <CommentContext.Provider value={contextData}>
      {children}
    </CommentContext.Provider>
  );
}
function useComment() {
  const context = useContext(CommentContext);
  if (!context) {
    throw new Error("There is no Comment Context Provider");
  }
  return context;
}
export { useComment, CommentContextProvider };
