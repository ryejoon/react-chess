import React from 'react';

export default function ChessSquare(props) {

    function getColor() {
        return (props.x.charCodeAt(0) - 96 + parseInt(props.y, 10)) % 2 === 0 ? 'black' : 'white';
    }
       
    return (
        <span>{getColor()}</span>
    );
}