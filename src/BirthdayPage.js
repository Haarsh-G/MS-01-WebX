import React, { useState, useEffect } from "react";
import "./BirthdayPage.css";
import SurpriseModal from "./SurpriseModal";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

function BirthdayPage() {
  const [showModal, setShowModal] = useState(false);
  const [confetti, setConfetti] = useState(false);

  const { width, height } = useWindowSize();

  // const preUploadedImage = "/images/bg.jpg"; // Path to the background image
  const preUploadedMusic = "/images/music1.mp3"; // Path to the music file
  const preDefinedName = "Tanvi"; // Predefined name

  const currentTime = new Date().getHours();
  let greetingMessage = "";

  if (currentTime < 12) {
    greetingMessage = "Good Morning, Happy Birthday Radhe";
  } else if (currentTime < 18) {
    greetingMessage = "Good Afternoon, Happy Birthday Tanu";
  } else {
    greetingMessage = "Good Evening, Happy Birthday Tanvi";
  }

  const handleOpenModal = () => {
    setConfetti(true);
    setTimeout(() => {
      setConfetti(false);
      setShowModal(true);
    }, 2000);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div
      className="birthday-container"
      style={{
        // backgroundImage: `url(${preUploadedImage})`,
      }}
    >
      <div className="glass-overlay">
        {confetti && <Confetti width={width} height={height} />}
        <h1 className="birthday-title">{greetingMessage} 🎉</h1>
        <p className="birthday-question">Do you want to see a surprise?</p>
        <button className="birthday-button" onClick={handleOpenModal}>
          Yes
        </button>
        <SurpriseModal
          show={showModal}
          onClose={handleCloseModal}
          name={preDefinedName}
          musicFile={preUploadedMusic}
        />
      </div>
    </div>
  );
}

export default BirthdayPage;
