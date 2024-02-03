import { useEffect, useRef } from 'react';
import styles from './styles.module.css';

const STRINGS = [
    "Hey I'm Pat",
    "I'm a Software Developer",
    "Founder",
    "Human"
];

function LiveTypePage() {
    const elementRef = useRef(null);
    useEffect(() => {
        var stringIndex = 0;
        var characterIndex = 0;
        var forwards = true;
        var delayBeforeDelete = 15;
        var currentDelayBeforeDelete = 0;
        var speed = 50;

        const interval = setInterval(() => {
            const currentString = STRINGS[stringIndex % STRINGS.length];

            if (forwards && characterIndex >= currentString.length) {
                // We've reached the end of the string.
                // We'll leave it there for a bit.
                currentDelayBeforeDelete += 1;

                if (currentDelayBeforeDelete >= delayBeforeDelete) {
                    // Start deleting characters on next pass.
                    forwards = false;
                    // Reset the delay.
                    currentDelayBeforeDelete = 0;
                }
            } else if (!forwards && characterIndex === 0) {
                // We've reached the beginning of the string, time to move onto next string.
                forwards = true;
                stringIndex += 1;
                characterIndex = 0;
            }

            elementRef.current.textContent = currentString.substring(0, characterIndex);

            characterIndex += forwards ? 1 : -1;
        }, speed);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div ref={elementRef} className={styles.liveType}>Hi Mom</div>
    );
}

export default LiveTypePage;