import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const Skill = ({ level, color, trailColor }) => {
  const [value, setValue] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(v => v + 1);
      setPercentage(p => {
        if (p === level - 1) {
          clearInterval(interval);
        }
        return p + 1;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [level]);

  return (
    <CircularProgressbar
      value={value}
      text={`${percentage}%`}
      styles={buildStyles({
        rotation: 0,
        strokeLinecap: 'round',
        textSize: '27px',
        pathTransitionDuration: 0.5,
        pathColor: `${color}`,
        textColor: `${color}`,
        trailColor: `${trailColor}`,
      })}
    />
  );
};
