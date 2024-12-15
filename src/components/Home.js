import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const titles = ['Frontend Developer', 'Mentor', 'Creator'];
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prevTitle) => (prevTitle + 1) % titles.length);
    }, 2000); // Change every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      <div className="home-content">
        <h1>Hello, I'm Muh'sin Adebayo</h1>
        <p className="animated-title">{titles[currentTitle]}</p>
        <button>View Projects</button>
      </div>
      <div className="home-image">
      <img src="https://scontent.flos1-2.fna.fbcdn.net/v/t39.30808-6/380539779_274245682143108_1176496881372830516_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeE8j_9pId7w5uPF5JoyRBXEue-tqvljzOG5762q-WPM4S5ZjIwdKDswEX1ViWaFQNeumNfLLGJe3pKtXEH9a689&_nc_ohc=vrs2n-xoexwQ7kNvgFNdWHK&_nc_zt=23&_nc_ht=scontent.flos1-2.fna&_nc_gid=AjmqHcfJVvSVaXobj5uQXQK&oh=00_AYCeIz9jkPFf6b9AXzvWy8iw-ETqT_-9pCo4vpmp3f0PhA&oe=6764F69C" alt="Muh'sin Adebayo" />

</div>
</div>
);
};

export default Home;
