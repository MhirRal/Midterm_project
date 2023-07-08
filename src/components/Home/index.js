import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CustomNav from "../CustomNav";
import { userData } from "../../functions";


const Home = () => {
  const { username } = userData();
  const [showWelcome, setShowWelcome] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Show the Welcome message for a short period and then fade it out
    setShowWelcome(true);
    const timeout = setTimeout(() => {
      setShowWelcome(false);
    }, 2000);

    // Clean up the timeout on unmount
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div>
      <CustomNav />
      <div>
        {showWelcome && (
          <h5 className="welcome-message">Welcome {username}🎉</h5>
        )}
        <h1 className="centered-text">
          Gotta List 'Em All: The Complete Pokemon Encyclopedia
        </h1>
      </div>
    </div>
  );
};

export default Home;
