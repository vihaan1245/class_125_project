leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('Posenet is not initialized, congrats on failing!');
}

function draw()
{
    background('#C0FF00');
    text("Vihaan", 150, 200);
    textSize(difference)

    document.getElementById("name_side").innerHTML = "The height and width of the text is = " + difference+"px";
    fill('#32CD32');
    stroke('#FFA500');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
      console.log(results);

      leftWristX = results[0].pose.leftWrist.x;
      rightWristX = results[0].pose.rightWrist.x;
      difference = floor(leftWristX - rightWristX);
      console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
  }
}