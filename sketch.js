let video;
let model;
let name = '';

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  // video.size(320,240)//비디오 사이즈 변경
  video.hide();
  model = ml5.imageClassifier('MobileNet', video, ready);
}


function draw(){
  image(video, 0, 0); // 비디오 그리기
  stroke(0);
  strokeWeight(3);
  fill('#FFFF00');
  textSize(25);
  text(name, 10, height-130);
}

function ready(){
  console.log('모델 준비완료');
  model.classify(video, gotResult);
  
}

function gotResult(err, result){
  if(result[0].confidence > 0.5){
    name = result[0].label;
  }
  model.classify(video, gotResult);
}