import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SurpriseModal.css";

function SurpriseModal({ show, onClose, name, musicFile }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  let audio;

  useEffect(() => {
    if (musicFile) {
      audio = new Audio(musicFile);
      if (isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    }
    return () => audio && audio.pause();
  }, [musicFile, isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const images = Array.from(
    { length: 25 },
    (_, index) => `/images/${index + 1}.jpg`
  ); // Path to images in public/images

  // Corresponding text for each image
  const imageTexts = [
    "Happy Birthday! This is our 1st meet in school, truly loved roaming with you meeting our teachers (especially Arun Sir hehe) 🎉",
    "Beautiful flowers for you just like you! 💖",
    "May your year be filled with happiness and love! Hehe Miss. Tanu-sore. Best Independence day till now 🌟",
    "Yelo aur phool ✨",
    "Our first meetinggg.. Januu you are soo cutuuu I love youuuuu I lovedd it soo much seeing you come down stairss.. 🛣️",
    "Aapkii Aakhee 💕💕💕 Aaye hayeee! 📸",
    "Actual Green Flag hehe, with Govind Earings 💖💖 ",
    "Cutiieee Happy 16th Birthdayy (legally)! 🎂",
    "To the best Wifie ever! Happy Birthday! 🎁",
    "I love you beyond measure! my gulabb jamunnnn 💕",
    "Aapke allen wale din were goldenn muahhh 🕺💃",
    "Hehe u my jaaan 💌",
    "🌈🌈🌈",
    "My beautiful pretty sweettuu babyy soo beautiful in kurtaa my world 🌍",
    "One of the most amazing one yet! Tanvi Mahadev lol 💫",
    "Muuaahh 🎉",
    "Very good photo 😂",
    "Here's to celebrating YOU! Meri World ka Birthday he aajjj 🥳",
    "May your heart always be as full as thiss dayy (i wont be late again)! 💓",
    "Happy moments, happy memories, happy YOU! 🌻",
    "a new beginnings and endless possibilities! all started this dayyy 🌱",
    "A day as amazing as you are! 💥",
    "To the wonderful person you are, Happy Birthday! 💝",
    "Let's make today unforgettable! 💫",
    "A new year of life, love, and laughter! 🎈",
    "Here's to an unforgettable celebration of YOU! 🥳",
    "Wishing you happiness that lasts forever! 💖",
  ];

  // Open the letter modal
  const handleOpenLetter = () => setShowLetter(true);

  const handleCloseLetter = () => setShowLetter(false);

  return (
    <Modal
      show={show}
      onHide={onClose}
      centered
      fullscreen
      className="surprise-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>🎉 Happy Birthday, {name}! 🎉</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <button onClick={togglePlay} className="music-button">
          {isPlaying ? "Pause Music" : "Play Music"}
        </button>

        <Carousel>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={image}
                alt={`Slide ${index + 1}`}
              />
              <Carousel.Caption>
                <h3>{imageTexts[index]}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>

        <button onClick={handleOpenLetter} className="letter-button">
          Open My Letter
        </button>
      </Modal.Body>

      {/* Modal for the letter */}
      <Modal show={showLetter} onHide={handleCloseLetter} centered>
        <Modal.Header closeButton>
          <Modal.Title>❤️ A Special Letter Just for You ❤️</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Dear {name},<br />
            <br />
            I hope your day is filled with love, laughter, and everything that
            makes you happiest. You mean the world to me, and I’m so thankful
            for your presence in my life. Here's to many more years of amazing
            moments and cherished memories. Have a wonderful birthday and may
            all your dreams come true! Baki ka insta pe :)
            <br />
            <br />
            With all my love,
            <br />
            Aapka Govind
          </p>
        </Modal.Body>
      </Modal>
    </Modal>
  );
}

export default SurpriseModal;
