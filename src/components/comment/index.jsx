import React from "react";
import Reactions from "./reactions";
import Header from "./header";
import Body from "./body";
import { CommentContextProvider, useComment } from "./useComment";
import NewCommnetEditor from "../new-comment-editor";

function Comment() {
  const {
    isReplying,
    currentUser,
    comment,
    onNewReply
  } = useComment();
  if (!comment) {
    return null;
  }
  return (
    <>
      <div className="flex gap-4 bg-white p-3 rounded-lg">
        <Reactions />
        <div className="flex flex-col flex-1">
          <Header />
          <Body />
        </div>
      </div>
      {comment?.replies?.length > 0 && (
        <div className="flex relative flex-col gap-6 ml-20 before:absolute before:top-0 before:-left-12 before:bottom-0 before:content-'' before:w-1 before:bg-gray-300 before:rounded-md">
          {comment.replies.map((reply) => (
            <CommentContextProvider
              key={reply.id}
              data={{ comment: reply, currentUser }}
            >
              <Comment />
            </CommentContextProvider>
          ))}
        </div>
      )}
      {isReplying && <NewCommnetEditor onClick={onNewReply} isReply image={currentUser.image.png} />}
    </>
  );
}

export default Comment;
