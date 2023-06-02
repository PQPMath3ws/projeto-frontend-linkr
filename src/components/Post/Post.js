import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ReactTagify } from "react-tagify";
import { VscHeart, VscHeartFilled } from "react-icons/vsc";
import { BiRepost } from "react-icons/bi";
import {
  StyledPost,
  StyledLink,
  StyledIcon,
  StyledRightDiv,
  StyledContainer,
  StyledSendIcon,
  StyledLeftDiv,
  StyledCommentsContainer,
  StyledNewComments,
  StyledComment,
  RepostedBy,
  BlockIfReposted,
} from "./styled.js";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { AiOutlineComment } from "react-icons/ai";
import Context from "../../context/Context.js";
import Repost from "../Repost/Repost.js";

export default function Post(props) {
  const [msgAberto, setMsgAberto] = useState(false);
  const [newComment, setNewComment] = useState("");
  const { token } = useContext(Context);
  const config = {
    headers: {
      Authorization: `Bearer ${token || localStorage.getItem("token")}`,
    },
  };
  const {
    id,
    post,
    user_image,
    username,
    likes,
    likedByUser,
    usersLiked,
    post_url,
    likeDislikePost,
    comments_count,
    allcomments,
    post_id_user,
    getAllUsersPosts,
    reposts,
    repostedBy,
    userId,
    repostedById,
    route,
    follows,
  } = props;
  const navigate = useNavigate();
  let listLikes = "";
  const [linkPreviewInfos, setLinkPreviewInfos] = useState({
    title: "",
    images: [],
    description: "",
  });

  if (usersLiked) {
    if (likedByUser === false) {
      if (usersLiked.length > 2) {
        listLikes =
          usersLiked[0] +
          ", " +
          usersLiked[1] +
          " e outras " +
          (usersLiked.length - 2) +
          " pessoas";
      } else if (usersLiked.length === 2) {
        listLikes = usersLiked[0] + " e " + usersLiked[1];
      } else if (usersLiked.length === 2) {
        listLikes = usersLiked[0];
      }
    }
    if (likedByUser === true) {
      if (usersLiked.length === 1) {
        listLikes = "Você";
      } else if (usersLiked.length === 2) {
        listLikes = "Você e " + usersLiked[0];
      } else if (usersLiked.length > 2) {
        listLikes =
          "Você, " +
          usersLiked[1] +
          " e outras " +
          (usersLiked.length - 2) +
          " pessoas";
      }
    }
  }

  async function getLinkInfos() {
    try {
      const request = await axios.post(
        `${process.env.REACT_APP_API_URL}/url_fetch`,
        { url: post_url }
      );
      setLinkPreviewInfos(request.data);
    } catch (_) {
      setLinkPreviewInfos({
        title: post_url,
        images: [
          "https://i.pinimg.com/originals/9d/1a/a7/9d1aa76c041ff6bf890a90aa92addd76.png",
        ],
        description: post_url,
      });
    }
  }

  useEffect(() => {
    getLinkInfos();
  }, []);

  const tagStyle = {
    color: "#fff",
    fontWeight: 700,
    cursor: "pointer",
  };

  async function sendComment() {
    if (newComment) {
      const body = { comment: newComment };
      const URL = `${process.env.REACT_APP_API_URL}/comment/${id}`;
      try {
        await axios.post(URL, body, config);
        setNewComment("");
        getAllUsersPosts();
      } catch (_) {
        alert(
          "An error occured while trying to comment the post, please refresh the page"
        );
      }
    }
  }

  return (
    <StyledContainer key={id} data-test="post">
      <StyledPost isReposted={repostedBy}>
        {repostedBy && <BlockIfReposted />}

        {repostedBy && (
          <RepostedBy>
            <BiRepost />
            <h4>Re-posted by {repostedById === userId ? "you" : repostedBy}</h4>
          </RepostedBy>
        )}

        <StyledLeftDiv>
          <img src={user_image} alt="imagem" />
          <StyledIcon
            data-test="like-btn"
            likedByUser={likedByUser}
            onClick={() => likeDislikePost(id, likedByUser)}
          >
            {likedByUser === true ? <VscHeartFilled /> : <VscHeart />}
          </StyledIcon>

          <p
            data-test="counter"
            data-tooltip-id={id}
            className="like-count"
            data-tooltip-content={listLikes}
            data-tooltip-variant="light"
          >
            {likes} likes
          </p>
          <div data-test="tooltip">
            <Tooltip
              id={id}
              place="bottom"
              data-test="tooltip"
              style={{ "font-size": "11px" }}
            />
          </div>

          <StyledIcon data-test="comment-btn">
            <AiOutlineComment
              onClick={() =>
                msgAberto ? setMsgAberto(false) : setMsgAberto(true)
              }
            />
          </StyledIcon>
          <p data-test="comment-counter">{comments_count} comments</p>

          <Repost id={id} reposts={reposts} route={route} />
        </StyledLeftDiv>

        <StyledRightDiv>
          <Link to={`/user/${id}`} data-test="username">
            {username}
          </Link>
          <ReactTagify
            tagStyle={tagStyle}
            tagClicked={(tag) => {
              const cutTag = tag.slice(1, tag.length);
              return navigate(`/hashtag/${cutTag}`);
            }}
          >
            {post !== "" && <h3 data-test="description">{post}</h3>}
          </ReactTagify>
          <StyledLink to={post_url} target="_blank" data-test="link">
            <div className="link">
              <h2>{linkPreviewInfos.title}</h2>
              <p>{linkPreviewInfos.description}</p>
              <p>{post_url}</p>
            </div>
            <img
              src={
                linkPreviewInfos.images.length > 0
                  ? linkPreviewInfos.images[
                  Math.floor(Math.random() * linkPreviewInfos.images.length)
                  ]
                  : "https://i.pinimg.com/originals/9d/1a/a7/9d1aa76c041ff6bf890a90aa92addd76.png"
              }
              alt="imagem"
            />
          </StyledLink>
        </StyledRightDiv>
      </StyledPost>

      {msgAberto && (
        <StyledCommentsContainer data-test="comment-box">
          {allcomments?.map((c) => (
            <StyledComment key={c.id} data-test="comment">
              <img src={c.user_image} alt="imagem" />
              <div>
                <div className="authorComment">
                  <h2>{c.username}</h2>

                  {post_id_user === c.id_user && <h3>• post’s author</h3>}
                  <h3>{follows.includes(c.id_user) && "• following"}</h3>
                </div>

                <p>{c.comment}</p>
              </div>
            </StyledComment>
          ))}
          <StyledNewComments>
            <img src={user_image} alt="imagem" />
            <input
              data-test="comment-input"
              placeholder="write a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            ></input>
            <StyledSendIcon data-test="comment-submit" onClick={sendComment} />
          </StyledNewComments>
        </StyledCommentsContainer>
      )}
    </StyledContainer>
  );
}
