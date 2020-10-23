import { fabric } from "./fabric";

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