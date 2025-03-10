import { useState } from 'react';
import styles from './ColoredButton.module.css';

interface ColoredButtonProps {
    children?: React.ReactNode;
}

export default function ColoredButton({ children }: ColoredButtonProps) {

    const [ isBlue, setColor ] = useState(true);

    return (
        <>
            <button
                className={`${styles.colored_button} ${isBlue ? styles.colored_button__blue : styles.colored_button__red}`}
                onClick={() => setColor(v => !v)}
            >
                { children }
            </button>
        </>
    );
}