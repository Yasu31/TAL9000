var audioManager = new Audio();
var canAudioPlay = true;

function playSound(src) {
  if (!canAudioPlay) {return;}
  audioManager.src = "audio/" + src
  audioManager.play()
}

function setEventHandler() {
  audioManager.addEventListener('ended',
    processWithResult, false);

  $hands = document.getElementsByClassName("hand")
  for (var i=0; i < $hands.length; i++) {
    $hands[i].addEventListener("click", function(e){
      // reset the state
      document.body.classList = []
      machine_hand_area.children[0].src = "images/prepare.jpg"
      canAudioPlay = true

      // jenken process
      userHand = e.target.getAttribute('data-hand');
      machineHand = Math.floor( Math.random() * (3))
      displayUserHand(userHand)
      result = (userHand - machineHand + 3) % 3
      playSound('prepare.mp3')
    }, false);
  }
}

function processWithResult(){
  displayMachineHand(machineHand)
  if (result == 0){
    // Wait 100 ms to let the result picture update before alert.
    setTimeout(alert, 100, "あいこ！もう一回勝負！")
  } else if (result == 1 ) {
    playSound('lose_sound.mp3')
    document.body.classList.add("lose")
  } else if (result == 2){
    playSound('win_sound.mp3')
    document.body.classList.add("win")
  }
  canAudioPlay = false
}

function displayUserHand(u_hand){
  var user_hand_area = document.getElementById("user_hand_area")
  var u_hands = ["✊", "✌️", "✋"]
  user_hand_area.textContent = u_hands[u_hand]
}

function displayMachineHand(m_hand){
  var machine_hand_area = document.getElementById("machine_hand_area")
  var dirPrefix = "images/"
  var m_hands = ["rock.jpg", "scissors.jpg", "paper.jpg"]
  machine_hand_area.children[0].src = dirPrefix + m_hands[m_hand]
}

setEventHandler()
