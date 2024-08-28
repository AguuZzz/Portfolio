import React, { useState, useEffect } from 'react';
import { FaPython, FaReact, FaTerminal, FaCss3, FaHtml5, FaLinux } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

const technologies = [
  { name: 'Python', Icon: FaPython, color: '#3776AB' },
  { name: 'React', Icon: FaReact, color: '#61DBFB1' },
  { name: 'JavaScript', Icon: IoLogoJavascript, color: '#F7DF1E' },
  { name: 'Terminal', Icon: FaTerminal, color: '#4D4D4D' },
  { name: 'CSS', Icon: FaCss3, color: '#264DE4' },
  { name: 'HTML', Icon: FaHtml5, color: '#E34F26' },
  { name: 'Linux', Icon: FaLinux, color: '#264DE4' },
];

const useInfoHoverEffect = () => {
  const [hoverColor, setHoverColor] = useState(null);

  useEffect(() => {
    const infoElement = document.querySelector('.technology');
    if (infoElement) {
      if (hoverColor) {
        infoElement.style.boxShadow = `0 0 30px 15px rgba(${hoverColor}, 0.3)`;
      } else {
        infoElement.style.boxShadow = 'none';
      }
    }
  }, [hoverColor]);

  return setHoverColor;
};

export function Technology() {
  const setHoverColor = useInfoHoverEffect();

  return (
    <div className="technology">
      {technologies.map(({ name, Icon, color }) => (
        <div 
          key={name}
          className={`logo ${name.toLowerCase()}`}
          onMouseEnter={() => setHoverColor(color)}
          onMouseLeave={() => setHoverColor(null)}
        >
          <Icon />
          <h1>{name}</h1>
        </div>
      ))}
    </div>
  );
}