import React, { createContext, useContext, useState } from "react";
import { comments_API } from "../utils/consts";
import axios from "axios";

const commentsContext = createContext();

export function useCommentContext() {
  return useContext(commentsContext);
}

const CommentsContext = ({ children }) => {
  const [comments, setComments] = useState([]);

  async function getComments() {
    const { data } = await axios(comments_API);
    setComments(data);
  }

  async function addComment(newData) {
    await axios.post(comments_API, newData);
    getComments();
  }

  const value = {
    comments,
    getComments,
    addComment,
  };
  return (
    <commentsContext.Provider value={value}>
      {children}
    </commentsContext.Provider>
  );
};

export default CommentsContext;
