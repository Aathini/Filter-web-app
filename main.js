function preload() {
    lipstick = loadImage("https://i.postimg.cc/PxFvYgkv/l1.png")
function setup() {
canvas_var = createCanvas(300,300);
canvas_var.center();
video_var = createCapture(VIDEO);
video_var.size(300,300);
video_var.hide();

poseNet_var = ml5.poseNet(video_var, modelLoaded);
poseNet_var.on('pose',gotPoses);

}
function modelLoaded() {
    console.log('PoseNet Is Initialized');
}
function gotPoses(results) {
    if(results.length>0) {
        console.log(results);
        noseX=results[0].pose.nose.x;
        console.log("The nose x coordinates are:"+noseX);
        noseY=results[0].pose.nose.y;
        console.log("The nose y coordinates are"+noseY);

    }
}
function draw() {
image(video_var, 0,0, 300,300);
}}