

canvas = new fabric.Canvas("myCanvas");//defining a fabric based canvas

//Variables
var block_img_width = 30;
var block_img_height = 30;

let player_obj = "";
let block_img_obj = "";

let player_x = 10;
let player_y = 10;

function player_update(){
    fabric.Image.fromURL("player.png",function(img){ //fetching the image
        player_obj = img;
        player_obj.scaleToWidth(150); //make the width
        player_obj.scaleToHeight(140); //height
        player_obj.set({ //putting the y and x of the image
            top: player_y,
            left: player_x
        });
        canvas.add(player_obj);
    });
}

function new_Image(get_Image){
    fabric.Image.fromURL(get_Image,function(img){
        block_img_obj = img;
        block_img_obj.scaleToHeight(block_img_height);
        block_img_obj.scaleToWidth(block_img_width);
        block_img_obj.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_img_obj);
    });
}

window.addEventListener("keydown",function(e){
    keyPressed = e.keyCode;
    console.log(keyPressed)
    if(e.shiftKey == true && keyPressed == "80"){
        block_img_height = block_img_height + 10;
        console.log("P and shift is pressed together.");
        block_img_width = block_img_width + 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }
    if(e.shiftKey == true && keyPressed == "77"){
        block_img_height = block_img_height - 10;
        console.log("M and shift is pressed together.");
        block_img_width = block_img_width - 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }
    if(keyPressed == "38"){
        //up();
        console.log("Up");
    }
    if(keyPressed == "40"){
        //up();
        console.log("Down");
    }
    if(keyPressed == "37"){
        //up();
        console.log("Left");
    }
    if(keyPressed == "39"){
        //up();
        console.log("Right");
    }
    if(keyPressed == "66"){
        new_Image("brick.jpg");
        console.log("Brick block is placed");
    }
    if(keyPressed == "68"){
        new_Image("dirt.png");
        console.log("dirt block is placed");
    }
    if(keyPressed == "76"){
        new_Image("light green wool.png");
        console.log("Wool block is placed");
    }
    if(keyPressed == "78"){
        new_Image("netherrack.jpg");
        console.log("Netherack block is placed");
    }
    if(keyPressed == "79"){
        new_Image("oak leave.png");
        console.log("Oak Leaf block is placed");
    }
    if(keyPressed == "87"){
        new_Image("wood.jpg");
        console.log("Wood block is placed");
    }
    if(keyPressed == "83"){
        new_Image("stone.jpg");
        console.log("Stone block is placed");
    }
    if(keyPressed == "85"){
        new_Image("unique.png");
        console.log("Unique block is placed");
    }
    if(keyPressed == "89"){
        new_Image("yellow_brick.png");
        console.log("Yellow Brick  block is placed");
    }
});

