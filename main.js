
noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
diffrence=0;

function setup(){
canvas=createCanvas(550,550);
canvas.position(550,150);
video=createCapture(VIDEO);
video.size(550,500);
background("grey");
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}

function modelLoaded(){
    console.log("modelLoaded!!");
}

function gotPoses(results){
if(results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    diffrence=floor(leftWristX-rightWristX);
}
}
function draw(){
    background("grey");
    document.getElementById("square_side").innerHTML="width and height of the text will be= "+diffrence+"px";
    textSize(diffrence);
    fill("pink")
    text("Aadya", 50,200)
    
}