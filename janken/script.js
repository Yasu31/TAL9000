prepareAudio = new Audio('audio/prepare.mp3')
loseSound = new Audio('audio/lose_sound.mp3')
winSound = new Audio('audio/win_sound.mp3')

for (var i=0; i <3; i++) {
  document.getElementsByClassName("hand")[i].addEventListener("click", function(e){
    document.body.classList = []
    userHand = e.target.getAttribute('data-hand');
    displayUserHand(userHand)
    machineHand = Math.floor( Math.random() * (3))
    result = (userHand - machineHand + 3) % 3
    prepareAudio.play();
    var waitTime = 2000
    setTimeout(displayMachineHand, waitTime, machineHand)
  }, false);
}
prepareAudio.addEventListener('ended',
  judgeResult, false);

function judgeResult(){
  if (result == 0){
    alert("あいこ！もう一回勝負！")
  } else if (result == 1 ) {
    loseSound.play()
    document.body.classList.add("lose")
  } else {
    winSound.play()
    document.body.classList.add("win")
  }
}

function displayUserHand(u_hand){
  var user_hand_area = document.getElementById("user_hand_area")
  var u_hands = ["✊", "✌️", "✋"]
  user_hand_area.textContent = u_hands[u_hand]
}

function displayMachineHand(m_hand){
  var machine_hand_area = document.getElementById("machine_hand_area")
  var imagePrefix = "images/"
  var m_hands = ["rock.jpg", "scissors.jpg", "paper.jpg"]
  machine_hand_area.children[0].src = imagePrefix + m_hands[m_hand]
}
