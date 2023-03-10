import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { StyledPost, StyledLink } from "./styled";

export default function Post({ id, post, user_image, username, post_url, id_user }) {
  const [linkPreviewInfos, setLinkPreviewInfos] = useState({title: "", images: [], description: ""});

  async function getLinkInfos() {
    try {
      const request = await axios.post(`${process.env.REACT_APP_API_URL}/url_fetch`, { url: post_url });
      setLinkPreviewInfos(request.data);
    } catch (_) {
      setLinkPreviewInfos({
        title: post_url,
        images: [
          "https://i.pinimg.com/originals/9d/1a/a7/9d1aa76c041ff6bf890a90aa92addd76.png"
        ],
        description: post_url,
      });
    }
  }

  useEffect(() => {
    getLinkInfos();
  }, []);

  return (
    <StyledPost>
      <img src={user_image} alt="imagem" />
      <div>
        <Link to={`/user/${id_user}`}>{username}</Link>
        <h3>{post}</h3>
        <StyledLink>
          <div>
            <h2>{linkPreviewInfos.title}</h2>
            <p>
              {linkPreviewInfos.description}
            </p>
            <p>{post_url}</p>
          </div>

          <img
            src={linkPreviewInfos.images.length > 0 ? linkPreviewInfos.images[Math.floor(Math.random() * linkPreviewInfos.images.length)] : "https://i.pinimg.com/originals/9d/1a/a7/9d1aa76c041ff6bf890a90aa92addd76.png"}
            alt="imagem"
          />
        </StyledLink>
      </div>
    </StyledPost>
  );
}
