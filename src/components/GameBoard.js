import axios from "axios";
import { useState, useEffect } from 'react'
import React from 'react'
// import dotenv from 'dotenv'
import { createClient } from 'pexels';
import Button from 'react-bootstrap/Button';


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


const GameBoard = () => {

    const [player1Piece, setPlayer1Piece] = useState('')
    const [player2Piece, setPlayer2Piece] = useState('')
    const [outcome, setOutcome] = useState('')


    useEffect(() => {

        const getObjects = async () => {
            try {
                const response = await axios.get('https://rps101.pythonanywhere.com/api/v1/objects/all');
               // console.log(response.data);
                //setGamePieces(response.data)
                setPlayer1Piece(getRandomItem(response.data))
                setPlayer2Piece(getRandomItem(response.data))

            } catch (error) {
                console.error(error);
            }
        }
        getObjects()



    }, [] )


const battle = async (e) => {
//e.preventDefault()
    const response = await axios.get(`https://rps101.pythonanywhere.com/api/v1/match?object_one=${player1Piece}&object_two=${player2Piece}`)
    const outcome = await response.data
    setOutcome(response.data)
   // console.log(outcome)

}

    return (
        <>
        <div className="container mt-5">
            <div className="row">
                <div className="col text-center">
                    <h5>Player 1</h5>
                    <h6>Game Piece</h6>
                    <h1>{player1Piece}</h1>
                    {/* <img alt={player1Piece} src={player1Img} className="img-thumbnail" /> */}


                </div>
                <div className="col text-center">
                    <h5>Player 2</h5>
                    <h6>Game Piece</h6>
                    <h1>{player2Piece}</h1>
                    {/* <img alt={player2Piece} src={player2Img} className="img-thumbnail" /> */}

                </div>
                    <Button className="mt-5 " onClick={battle}>Battle</Button>
            </div>
        </div>
        <div className="container text-center mt-5">
          {outcome?(
                    <>
                        <h1>{`The Winner is ${outcome.winner}`}</h1>
                        <h4>{outcome.winner + " " + outcome.outcome + " " + outcome.loser}</h4>
                    </>
          ):("")}
        </div>

        </>

    )
}

export default GameBoard
