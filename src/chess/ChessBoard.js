import React from 'react';
import ChessSquare from './ChessSquare';
import styles from './ChessBoard.css';

export default function ChessBoard() {

    const xCords = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const yCords = ['1', '2', '3', '4', '5', '6', '7', '8'];
       
    return (
        <div>
        {xCords.map(x => {
            return <div key={`${x}`}>{yCords.map(y => {
                return <ChessSquare key={`${x},${y}`} x={x} y ={y}></ChessSquare>;
            })}</div>
        })}</div>
    );
}