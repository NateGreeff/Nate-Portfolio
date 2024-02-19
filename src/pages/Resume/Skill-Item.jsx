import { useState } from 'react';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function SkillItem({ skill }) {
  const [color, setColor] = useState('white');
  const [borderColor, setBorderColor] = useState('white');

  const handleMouseEnter = () => {
    setColor(getRandomColor());
    setBorderColor(getRandomColor());
  };

  return (
    <div 
      style={{ color: color, borderColor: borderColor }}
      className="skill"
      onMouseEnter={handleMouseEnter}
    >
      {skill.icon}
      {skill.technology}
    </div>
  );
}

export default SkillItem;