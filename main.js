function setup()
{
    canvas=createCanvas(600,700);
    canvas.position(50,50);
    video=createCapture(VIDEO)//used to access the Webcam.
    video.hide();
}
function draw()
{

  circle(500,100,80)
  fill(0,0,128)
  stroke(0,0,128)

  circle(50, 100, 80);
  fill(0,0,128)
  stroke(0,0,128)

  circle(500, 400, 80);
  fill(0,0,120)
  stroke(0,0,128)

  circle(50, 400, 80);
  fill(0,0,120)
  stroke(0,0,128)


  rect(130, 20, 300, 55);
  fill(0,0,120)
  stroke(0,0,128)

  rect(130, 420, 300, 55);
  fill(0,0,120)
  stroke(0,0,128)

  


    image(video ,100,100,350,300);//used to load an image on the canvas.
    


}
function take_snapshot()
{
    save("my_first_filter.png")
}