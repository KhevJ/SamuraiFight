class Fighter extends Sprite{
    constructor({position, velocity, color= "red",  imageSrc, scale = 1, frames = 1, offset = {x:0, y:0}, sprites}){
        super({
            position,
            imageSrc,
            scale ,
            frames ,
            offset,
        });
         
        this.velocity = velocity; 
        this.width = 50;    
        this.height = 150;
        this.lastKey;
        this.color = color;
        this.attackBox ={
            position: {
                x:this.position.x,
                y:this.position.y
            } ,
            offset, //same thing as saying offset = offset
            width:100,
            height:50,

        };
        this.isAttacking;
        this.health = 100;
        this.framesCurrent = 0;
        this.framesElapsed= 0;
        this.framesHold = 5;
        this.sprites = sprites;
        
        for (const sprite in this.sprites) {
            sprites[sprite].image = new Image()
            sprites[sprite].image.src = sprites[sprite].imageSrc
        }

         
        
    }
    
    // draw(){
    //     c.fillStyle = this.color;
    //     c.fillRect(this.position.x, this.position.y, this.width, this.height);
    //     //attack box
    //     if(this.isAttacking){
    //         c.fillStyle = 'green';
    //         c.fillRect(this.attackBox.position.x, this.attackBox.position.y, this.attackBox.width, this.attackBox.height);
    //     }
        
    // }

    update(){
        this.draw();
        this.animateFrames();
        this.attackBox.position.x = this.position.x + this.attackBox.offset.x;
        this.attackBox.position.y = this.position.y;
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        if(this.position.y + this.height + this.velocity.y >= canvas.height - 96){
            this.velocity.y = 0;
        }
        else{
            this.velocity.y += gravity;
        }

    }

    attack(){
        this.isAttacking = true;
        setTimeout(() =>{
            this.isAttacking = false;
        }, 100) //after 100 milliseconds isAttacking is gonna be false
    }
}
