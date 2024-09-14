import React from 'react';
import Image from 'next/image';
import styles from './BlinkingRobot.module.css';
import robotLogo from '../images/robot.png';
import robotBlinkLogo from '../images/robot-blink.png';

const BlinkingRobot: React.FC = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className={styles.robotContainer}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={isHovered ? robotBlinkLogo : robotLogo}
        alt="Robot Logo"
        layout="fill"
        objectFit="contain"
        className={styles.robotImage}
      />
    </div>
  );
};

export default BlinkingRobot;
