import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import VideoPlaylist from "../components/VideoPlaylist";
import VideoInfo from "../components/VideoInfo";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Player() {
  const navigate = useNavigate();

  // The videos data should come from your own data source
  const [videos, setVideos] = useState([]); 
  const [currentVideo, setCurrentVideo] = useState(null);

  const handleVideoSelect = (video) => {
    setCurrentVideo(video);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (!currentUser) navigate("/login");
    });

    return unsubscribe;
  }, [navigate]);

  return (
    <div>
      <Navbar className="navbar-fixed"/>
      <Container>
        <div className="player">
          <div className="back">
            <BsArrowLeft onClick={() => navigate(-1)} />
          </div>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/0YjsgU-bYvY"
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="playlist-info">
          <VideoPlaylist videos={videos} onVideoSelect={handleVideoSelect} />
        </div>
        <div calssName="video-info">
        <VideoInfo video={currentVideo} />
        </div>
      </Container>
      <Footer className="footer-fixed"/>
    </div>
  );
}


const Container = styled.div`
  display: grid;
  grid-template-areas:
    "player playlist"
    "video-info playlist";
  grid-template-columns: 70% 30%;
  grid-template-rows: 70% 30%;
  max-width: 2560px; // Set a maximum width for ultra-wide screens
  width: 100%;
  height: calc(100vh - 100px);
  padding-top: 100px;
  margin: 0 auto; // Center the content for ultra-wide screens

  .player {
    grid-area: player;
    position: relative;

    .back {
      position: absolute;
      padding: 2rem;
      z-index: 1;

      svg {
        font-size: 3rem;
        cursor: pointer;
      }
    }

    iframe {
      height: 100%;
      width: 100%;
    }
  }

  .playlist-info {
    grid-area: playlist;
    overflow-y: auto;
  }

  .video-info {
    grid-area: video-info;
    overflow-x: auto;
  }

  .navbar-fixed {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 2;
  }

  // Adjust the layout for smartphone screens
  @media (max-width: 768px) {
    grid-template-areas:
      "player"
      "playlist"
      "video-info";
    grid-template-columns: 1fr;
    grid-template-rows: 40% 30% 30%; // Adjust these values as needed
  }
`;
