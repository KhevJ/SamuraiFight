const canvas = document.querySelector('canvas');
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

c.fillRect(0, 0,canvas.width, canvas.height);
const gravity = 0.2;

class Sprite{
    constructor({position, velocity}){
        this.position = position;   
        this.velocity = velocity;     
        this.height = 150;
        this.lastKey;
    }

    draw(){
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, 50, 150);
    }

    update(){
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        if(this.position.y + this.height + this.velocity.y >= canvas.height){
            this.velocity.y = 0;
        }
        else{
            this.velocity.y += gravity;
        }

    }
}

const player = new Sprite({
    position:{ 
        x:0,
        y:0
    },
    velocity:{
        x:0,
        y:0
    }
    });



const enemy = new Sprite({
    position:{ 
        x:400,
        y:100
    },
    velocity:{
        x:0,
        y:0
    }
})



const keys = {
    a:{
        pressed: false
    },
    d:{
        pressed: false
    },
    ArrowRight:{
        pressed: false
    },
    ArrowLeft:{
        pressed:false
    }
}

let lastKey;

animate = ()=>{
    
    window.requestAnimationFrame(animate);
    
    c.fillStyle = "black";
    c.fillRect(0,0, canvas.width, canvas.height);
    player.update();
    enemy.update();
    player.velocity.x = 0;
    //player movemnet
    if(keys.a.pressed && lastKey === 'a'){
        player.velocity.x = -1;
    }

    else if(keys.d.pressed && lastKey === 'd'){
        player.velocity.x = 1;
    }

    //enemy movement
    if(keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft'){
        enemy.velocity.x = -1;
    }

    else if(keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRightjjjjj'){
        enemy.velocity.x = 1;
    }

    
}

animate();

window.addEventListener("keydown", (event) =>{
    switch(event.key){
        case 'd':
            keys.d.pressed = true;
            lastKey = 'd';
            break
        case 'a':
            keys.a.pressed = true;
            lastKey = 'a';
            break

        case 'w':
            player.velocity.y = -10;
            break
        
        case 'ArrowRight':
            keys.ArrowRight.pressed = true;
            enemy.lastKey = "ArrowRight";
            break

        case 'ArrowLeft':
            keys.ArrowLeft.pressed = true;
            enemy.lastKey = "ArrowLeft";
            break
    
        case 'ArrowUp':
            enemy.velocity.y = -10;
            break
    }
    
})

window.addEventListener("keyup", (event) =>{
    switch(event.key){
        case 'd':
            keys.d.pressed = false;
            break
        case 'a':
            keys.a.pressed = false;
            break
        case 'w':
            keys.w.pressed = false;
            break

    }

    switch(event.key){
        case 'ArrowRight':
            keys.ArrowRight.pressed = false;
            break;
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false;
            break;
    }

    console.log(event.key);
})