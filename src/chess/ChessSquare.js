import React from 'react';
import styles from './ChessSquare.css';

export default function ChessSquare(props) {

    function boardTypeClass() {
        return (props.x.charCodeAt(0) - 96 + parseInt(props.y, 10)) % 2 === 0 ? 'square-beige' : 'square-white';
    }
       
    return (
        <div className={boardTypeClass()}></div>
    );
}