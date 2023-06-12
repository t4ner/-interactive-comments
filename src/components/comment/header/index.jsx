import React from "react";
import { useComment } from "../useComment";

function Header() {
  const {
    onEdit,
    onDelete,
    onReply,
    currentUser,
    comment: {
      createdAt,
      user: { image, username },
    },
  } = useComment();
  const ownedByCurrentUser = currentUser.username === username;
  return (
    <div className="flex items-center gap-2">
      <div>
        <img className="w-9 h-9 rounded-full object-cover" src={image.png} />
      </div>
      <h1 className="font-medium text-sm text-blue-600">{username}</h1>
      {ownedByCurrentUser && (
        <span className="bg-blue-600 py-0.5 px-2 text-xs text-white rounded-sm">
          you
        </span>
      )}
      <div className="text-gray-400 text-sm">{createdAt}</div>
      <div className="ml-auto flex">
        {ownedByCurrentUser ? (
          <>
            {" "}
            <button onClick={onDelete} className="text-red-600 header-btn">
              <img src="./images/icon-delete.svg" className="mr-1" />
              Delete
            </button>
            <button onClick={onEdit} className="text-purple-600 header-btn">
              <img src="./images/icon-edit.svg" className="mr-1" />
              Edit
            </button>
          </>
        ) : (
          <button onClick={onReply} className="text-purple-600 header-btn">
            <img src="./images/icon-reply.svg" className="mr-1" />
            Reply
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
