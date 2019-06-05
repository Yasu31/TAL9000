prepareAudio = new Audio('audio/prepare.mp3')

for (var i=0; i <3; i++) {
  document.getElementsByClassName("hand")[i].addEventListener("click", function(e){
    document.body.classList = []
    userHand = e.target.getAttribute('data-hand');
    displayUserHand(userHand)
    machineHand = Math.floor( Math.random() * (3))
    result = (userHand - machineHand + 3) % 3
    prepareAudio.src = 'audio/prepare.mp3'
    machine_hand_area.children[0].src = "images/prepare.jpg"
    prepareAudio.play();
  }, false);
}

prepareAudio.addEventListener('ended',
  judgeResult, false);

function judgeResult(){
  displayMachineHand(machineHand)
  if (result == 0){
    // if alert() is called immediately, Sazaesan picture won't update before the alert and it is confusing for the user.
    // So, wait 100 ms before the alert and let the picture update.
    setTimeout(alert, 100, "あいこ！もう一回勝負！")
  } else if (result == 1 ) {
    prepareAudio.src = 'audio/lose_sound.mp3'
    prepareAudio.play()
    document.body.classList.add("lose")
  } else if (result == 2){
    prepareAudio.src = 'audio/win_sound.mp3'
    prepareAudio.play()
    document.body.classList.add("win")
  }
  result = -1
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
