import axios from "axios";
import { useState, useEffect } from 'react'
import React from 'react'
// import dotenv from 'dotenv'
import { createClient } from 'pexels';
import Button from 'react-bootstrap/Button';
import { ScrollRestoration } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import gif from '../321-count-down.gif'

const client = createClient('XRED6LegsN79wJHnL9al2BepoyiYr3DVV6jyuLlhdXLsfwMuiJ3yzUzO');

// program to get a random item from an array
function getRandomItem(arr) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);
    // get random item
    const item = arr[randomIndex];
    //console.log(item)
    return item;
}

let player1Score = 0
let player2Score = 0

const GameBoard = () => {

    const [gamePieces, setGamePieces] = useState([])
    const [player1Piece, setPlayer1Piece] = useState('')

    const [player2Piece, setPlayer2Piece] = useState('')
    const [outcome, setOutcome] = useState('')

    const [isBattling, setIsBattling] = useState(false)


    useEffect(() => {

        const getObjects = async () => {
            try {
                const response = await axios.get('https://rps101.pythonanywhere.com/api/v1/objects/all');
                // console.log(response.data);
                setGamePieces(response.data)
                setPlayer1Piece(getRandomItem(response.data))
                setPlayer2Piece(getRandomItem(response.data))

            } catch (error) {
                console.error(error);
            }
        }
        getObjects()



    }, [])


    const battle = async () => {
        //e.preventDefault()
        setIsBattling(true)
        const response = await axios.get(`https://rps101.pythonanywhere.com/api/v1/match?object_one=${player1Piece}&object_two=${player2Piece}`)
        const outcome = await response.data
        setTimeout( () => {
            setIsBattling(false)
            setOutcome(response.data)
            if (outcome.winner === player1Piece) {
                player1Score += 1
               // setPlayer2Piece('')
            }
            else {
                player2Score += 1
               // setPlayer1Piece('')
            }
        }, 4000)

    }
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col text-center">
                        <h5>Player 1</h5>
                        <h6>{`Score ${player1Score}`}</h6>
                        <h6>Game Piece</h6>
                        <h1>{player1Piece}</h1>
                        {/* <img alt={player1Piece} src={player1Img} className="img-thumbnail" /> */}

                    </div>
                    <div className="col text-center">
                        <h5>Player 2</h5>
                        <h6>{`Score ${player2Score}`}</h6>

                        <h6>Game Piece</h6>
                        <h1>{player2Piece}</h1>
                        {/* <img alt={player2Piece} src={player2Img} className="img-thumbnail" /> */}
                    </div>


                    <Button className="mt-5 " onClick={battle}>Battle</Button>
                </div>
            </div>
            <div className="text-center mt-5 container">
                <div className="row">
                    { isBattling ? <img src={gif} className="thumbnail"/>
                     : (
                        "") }
                { outcome ? (
                    <>
                        <h1>{`The Winner is ${outcome.winner}`}</h1>
                        <h4>{outcome.winner + " " + outcome.outcome + " " + outcome.loser}</h4>
                    </>
                ) : ("")}
                <Button className="btn-info" style={{marginTop: '10rem'}} onClick={() => {
                    setOutcome('')
                    setPlayer1Piece(getRandomItem(gamePieces))
                    setPlayer2Piece(getRandomItem(gamePieces))
                }}>Rematch</Button>
                </div>
            </div>
        </>
    )
}

export default GameBoard
