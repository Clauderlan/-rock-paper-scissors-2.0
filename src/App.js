import React, { useState } from 'react';

import './App.css';
import github from './assets/github.svg';
import instagram from './assets/instagram.svg';
import linkedin from './assets/LinkedIn.svg';
import rock from './assets/rock.svg';
import paper from './assets/paper.svg';
import scissor from './assets/scissor.svg';

function App() {
    let [playerName, setName] = useState("");
    const [scoreBlue, setScoreBlue] = useState(0);
    const [scoreRed, setScoreRed] = useState(0);
    const comando = document.getElementById('commands');
    function checkAnswer(parametro){
        /*Resposta da MAQUINA */
        const machineAnswer = Math.floor(Math.random() * (4 - 1) + 1);
        switch(parametro){ 
            case 1://"player-selection-paper"
                if (machineAnswer == 3){
                    comando.innerText = 'A Máquina colocou pedra , você GANHOU essa rodada !';
                    setScoreRed(scoreRed + 1);
                    checkScore();
                }
                else if (machineAnswer == 2){
                    comando.innerText = 'A Máquina colocou tesoura, você PERDEU essa rodada ! F.';
                    setScoreBlue(scoreBlue + 1);
                    checkScore();
                }
                else {
                    comando.innerText = 'A máquina também colocou papel, segue.';
                }
                break;
            case 2: //"player-selection-scissor"
                if (machineAnswer == 1){
                    comando.innerText = 'A Máquina colocou papel, você GANHOU essa rodada !';
                    setScoreRed(scoreRed + 1);
                    checkScore();
                }
                else if (machineAnswer == 3){
                    comando.innerText = 'A Máquina colocou pedra, você PERDEU essa rodada ! F.';
                    setScoreBlue(scoreBlue + 1);
                    checkScore();
                }
                else {
                    comando.innerText = 'A máquina também colocou tesoura, segue.';
                }
                break;
            case 3: //"player-selection-rock"
                if (machineAnswer == 2){
                    comando.innerText = 'A Máquina colocou tesoura, você GANHOU essa rodada !';
                    setScoreRed(scoreRed + 1);
                    checkScore();
                }
                else if (machineAnswer == 1){
                    comando.innerText = 'A Máquina colocou papel, você PERDEU essa rodada ! F.';
                    setScoreBlue(scoreBlue + 1);
                    checkScore();
                }
                else{
                    comando.innerText = 'A máquina também colocou pedra, segue.';
                }
                break;
        }
    }
    function checkScore(){
        if (scoreBlue > 2 ){
            comando.innerText = 'Caraca, você perdeu para a máquina.';
            let myGreeting = setTimeout(resultFinal, 1000);
            return 'Machine';
        }
        
        else if (scoreRed > 2){
            comando.innerText = 'Tu é brabo, ganhou da máquina !';
            const nome = document.getElementById('input-name');
            let myGreeting = setTimeout(resultFinal, 2000);
            return playerName;
        }
        
    }
    function resultFinal(){
        /* Remove o jogo para mostrar o score.*/
        const mainGame = document.getElementsByClassName('game')[0];
        const mainResult = document.getElementsByClassName('result')[0];
        mainGame.style.display = 'none';
        mainResult.style.display = 'block';
    }
    return (
        <div className="App">
            <h1 id="principal-text">ROCK PAPER SCISSOR</h1>
            <section className="home">
                <div className="log">
                    <h1>Welcome to the game</h1>
                    <div id="form">
                        <input type="text" id="input-name" placeholder="Nome" />
                        <button id="submit-name" onClick={() => {
                            setName(playerName = document.getElementById("input-name").value.toUpperCase())
                            const screenName = document.getElementsByClassName('log')[0];
                            screenName.style.display = 'none';
                            const screenGame = document.getElementsByClassName('game')[0];
                            screenGame.style.display = 'flex';
                        }}>
                            START
                        </button>
                    </div>
                </div>
                <div className="game">
                    <div className="red">
                        <p id="player-name">{playerName}</p>
                        <p id="placar-red">{scoreRed}</p>
                        <div id="game-tools">
                            <button
                                id="player-selection-paper"
                                onClick = {() => {checkAnswer(1)}}
                            >
                                <img src={paper} alt="Paper" />
                            </button>
                            <button
                                id="player-selection-scissor"
                                onClick={() => {checkAnswer(2)}}
                            >
                                <img src={scissor} alt="scissor" />
                            </button>
                            <button
                                id="player-selection-rock"
                                onClick={() => {checkAnswer(3)}}
                            >
                                <img src={rock} alt="rock" />
                            </button>
                        </div>
                    </div>
                    <p id="vs">VS</p>
                    <div className="blue">
                        <p id="player-computer">COMPUTER</p>
                        <p id="placar-blue">{scoreBlue}</p>
                        <div id="game-tools-computer">
                            <button id="computer-selection-paper">
                                <img src={paper} alt="Paper" />
                            </button>
                            <button id="computer-selection-scissor">
                                <img src={scissor} alt="scissor"/>
                            </button>
                            <button id="computer-selection-rock">
                                <img src={rock} alt="rock" />
                            </button>
                        </div>
                    </div>
                    <div className="analytics-text">
                        <p id="commands">
                            Clique na imagem referente a sua jogada.
                        </p>
                    </div>
                </div>
                <div className="result">
                    <div className="mainScore">
                        <div className="redScore">
                            <p id="playerName">{playerName}</p>
                            <h1 id="redScore">{scoreRed}</h1>
                            <h1>SCORE</h1>
                        </div>
                        <div className="blueScore">
                            <p id="machine">MACHINE</p>
                            <h1 id="blueScore">{scoreBlue}</h1>
                            <h1>SCORE</h1>
                        </div>
                    </div>
                    <div className="score">
                        <p id="finalScore">{checkScore()} WIN !!!</p>
                    </div>
                    <div className="aboutme">
                        <p>Made by Clauderlan Batista</p>
                        <div className="brands">
                            <div className="brand-item" >
                                <a href="https://www.linkedin.com/in/clauderlan-batista-alves-5a62921aa/" target="_blank">
                                <img src={linkedin} alt="LinkedIn Brand"/>
                                </a>
                            </div>
                            <div className="brand-item">
                                <a href="https://github.com/Clauderlan" target="_blank">
                                <img src={github} alt="github brand"/>
                                </a>
                            </div>
                            <div className="brand-item">
                                <a href="https://www.instagram.com/cbatista.07/" target="_blank">
                                <img src={instagram} alt="instagram brand"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default App
