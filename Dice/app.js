let player1 = "Player 1";
let player2 = "Player 2";

function editNames(){
    player1 = prompt("Change Player1 name:");
    player2 = prompt("Change player2 name:");

    document.querySelector("p.player1").innerHTML = player1;
    document.querySelector("p.player2").innerHTML = player2;
} 
function rollTheDice(){
    const randNumber1 = Math.floor(Math.random()*6)+1;
    const diceImg1 = `imgs/dice${randNumber1}.png`;
    document.querySelector(".img1").setAttribute('src',diceImg1);
    document.getElementById('text1').innerText = randNumber1;

    const randNumber2 = Math.floor(Math.random()*6)+1;
    const diceImg2 = `imgs/dice${randNumber2}.png`;
    document.querySelector(".img2").setAttribute('src',diceImg2);
    document.getElementById('text2').innerText = randNumber2;

    if(randNumber1 > randNumber2){
        document.querySelector("h1").innerHTML = `${player1} wins!`;
        document.querySelector("h1").style.color ="red";

    }
    else if(randNumber1 < randNumber2){
        document.querySelector("h1").innerHTML = `${player2} wins!`;
        document.querySelector("h1").style.color ="green";
    }
    else{
        document.querySelector("h1").innerHTML = "Its a Tie!";
    }

}

// document.getElementById('form').addEventListener('submit',enter);
// function enter(e){
//     const p1 = document.getElementById('py1').value;
//     const p2 = document.getElementById('py2').value;
//     document.getElementById('p1').innerText = p1;
//     document.getElementById('p2').innerText = p2;
//     console.log(p1);
//     console.log(p2);
//     e.preventDefault();

//     const randNumber1 = Math.floor(Math.random()*6)+1;
//     const diceImg1 = `imgs/dice${randNumber1}.png`;
//     const img1 = document.querySelector(".img1");
//     img1.setAttribute('src',diceImg1);
//     document.getElementById('text1').innerText = randNumber1;


//     const randNumber2 = Math.floor(Math.random()*6)+1;
//     const diceImg2 = `imgs/dice${randNumber2}.png`;
//     const img2 = document.querySelector(".img2");
//     img2.setAttribute('src',diceImg2);
//     document.getElementById('text2').innerText = randNumber2;

//     if(randNumber1 > randNumber2){
//         document.querySelector("h1").innerHTML = "Palyer 1 won!";
//     }
//     else if(randNumber1 < randNumber2){
//         document.querySelector("h1").innerHTML = "Palyer 2 won!";
//     }
//     else{
//         document.querySelector("h1").innerHTML = "Tie!";
//     }
// }

