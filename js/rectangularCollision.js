rectangularCollision = ({rectangle1, rectangle2}) => {return (
    rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x &&
    rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width &&
    rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y &&
    rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height 
)}

determineWinner = ({player, enemy, timerId}) =>{
 clearTimeout(timerId);
 document.querySelector("#displayText").style.display = 'flex';
 if(player.health == enemy.health){
     document.querySelector("#displayText").innerHTML = 'Tie';
 }
 else if(player.health > enemy.health){
     document.querySelector("#displayText").innerHTML = 'Player one wins';

 }
 else if(player.health < enemy.health){
     document.querySelector("#displayText").innerHTML = 'Player one wins';

 }
}


let timer = 50;
let timerId;
decreaseTimer = () =>{
 
 if(timer > 0) {
     timer--;
     timerId= setTimeout(decreaseTimer, 1000)
     document.querySelector("#timer").innerHTML = timer;
 }

 if(timer ==0){
    
     determineWinner({player, enemy, timerId});
 }
 
}