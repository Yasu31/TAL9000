for (var i=0; i <3; i++) {
  document.getElementsByClassName("hand")[i].addEventListener("click", function(e){
    document.body.classList = []
    userHand = e.target.getAttribute('data-hand');
    displayUserHand(userHand)
    machineHand = Math.floor( Math.random() * (3))
    result = (userHand - machineHand + 3) % 3
    new Audio('audio/prepare.mp3').play();
    var waitTime = 2000
    setTimeout(displayMachineHand, waitTime, machineHand)
    setTimeout(judgeResult, waitTime+100, result)
  }, false);
}

function judgeResult(result){
  if (result == 0){
    alert("あいこ！もう一回勝負！")
  } else if (result == 1 ) {
    new Audio('audio/lose_sound.mp3').play();
    document.body.classList.add("lose")
  } else {
    new Audio('audio/win_sound.mp3').play();
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
  var m_hands = ["images/rock.jpg", "images/scissors.jpg", "images/paper.jpg"]
  machine_hand_area.children[0].src = m_hands[m_hand]
}
