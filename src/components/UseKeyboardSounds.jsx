
import { useEffect } from 'react';
import Thoc1 from '../assets/Thoc1.mp3';
import Unthoc1 from '../assets/Unthoc1.mp3';
import Unthoc2 from '../assets/Unthoc2.mp3';
import Unthoc3 from '../assets/Unthoc3.mp3';

export default function useKeyboardSounds() {
  useEffect(() => {
    const keyDownAudio = new Audio(Thoc1);

    const unthocSounds = [
      new Audio(Unthoc1),
      new Audio(Unthoc2),
      new Audio(Unthoc3),
    ];

    const handleKeyDown = () => {
      keyDownAudio.currentTime = 0;
      keyDownAudio.play();
    };

    const handleKeyUp = () => {
      const randomIndex = Math.floor(Math.random() * unthocSounds.length);
      const selectedAudio = unthocSounds[randomIndex];
      selectedAudio.currentTime = 0;
      selectedAudio.play();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);
}