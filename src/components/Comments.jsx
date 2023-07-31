import React, { useEffect, useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { Comment, Form, Header } from "semantic-ui-react";
import { Image } from "semantic-ui-react";
import { useCommentContext } from "../contexts/CommentsContext";
import { useParams } from "react-router-dom";
import { Button, TextField } from "@mui/material";

const Comments = ({ item }) => {
  const { user } = useAuthContext();
  const { comments, getComments, addComment } = useCommentContext();
  const [userAbout, setUserAbout] = useState({});
  const [commentVal, setCommentVal] = useState("");
  const { id } = useParams();

  function handleSubmit(e) {
    e.preventDefault();
    if (!commentVal.trim()) {
      return;
    }

    const NewComment = {
      placeId: id,
      body: commentVal,
    };
    addComment(NewComment);
    setCommentVal("");
  }

  function handleChange(e) {
    setCommentVal(e.target.value);
  }

  useEffect(() => {
    setUserAbout(user);
  }, [user]);

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div>
      <form style={{ margin: "50px" }} onSubmit={handleSubmit}>
        <h3>Leave a comment</h3>
        <TextField
          fullWidth
          id="standard-basic"
          label="Comment..."
          variant="outlined"
          onChange={handleChange}
        />
        <Button sx={{ marginTop: "20px" }}>Submit</Button>
      </form>
      <Comment.Group size="large">
        {comments
          .filter((item) => id == item.placeId)
          .map((item) => {
            return (
              <Comment
                style={{
                  marginBottom: "100px",
                  marginLeft: "50px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Comment.Content>
                  <Comment.Avatar as="a" src={user.photoURL} />
                  <Comment.Author as="a">{user.email}</Comment.Author>
                  <Comment.Metadata>
                    <span>{item.date}</span>
                  </Comment.Metadata>
                  <Comment.Text>{item.body}</Comment.Text>
                </Comment.Content>
                <Header dividing></Header>
              </Comment>
            );
          })}
      </Comment.Group>
    </div>
  );
};

export default Comments;
