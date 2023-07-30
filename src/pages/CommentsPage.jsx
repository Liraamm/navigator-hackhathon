import React, { useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useCommentContext } from "../contexts/CommentsContext";
import { useNavigatorContext } from "../contexts/NavigatorContext";
import Comments from "../components/Comments";
import { CircularProgress } from "@mui/material";

const CommentsPage = () => {
  const { getOnePlace, place } = useNavigatorContext();
  const { getComments, comments } = useCommentContext();
  const { user } = useAuthContext();
  const [userAbout, setUserAbout] = useState(null);
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    setUserAbout(user);
  }, [user]);

  useEffect(() => {
    getOnePlace(id);
  }, []);

  useEffect(() => {
    if (place) {
      setItem(place);
    }
  }, [place]);

  return (
    <div>
      {!item ? (
        <div>
          <CircularProgress
            sx={{ mx: "auto", mt: 5, displaY: "block" }}
            size={100}
          />
        </div>
      ) : (
        <Comments item={item} />
      )}
    </div>
  );
};

export default CommentsPage;
