import { useState } from 'react';

function getRandomColor() {
  const hex = '6789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 10)];
  }
  return color;
}

function SkillItem({ skill }) {
  const [color, setColor] = useState('#fff');
  const [borderColor, setBorderColor] = useState('#fff');

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