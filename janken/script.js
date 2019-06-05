for (var i=0; i <3; i++) {
  document.getElementsByClassName("hand")[i].addEventListener("click", function(e){
    document.body.classList = []
    userHand = e.target.getAttribute('data-hand');
    machineHand = Math.floor( Math.random() * (3))
    machineHand = 0
    var handMap = ["rock","scissors","paper"];
    console.log(handMap[userHand]);
    console.log(handMap[machineHand]);
    result = (userHand - machineHand) % 3
    new Audio('audio/prepare.mp3').play();
    var waitTime = 2000
    setTimeout(displayHands, waitTime, userHand, machineHand)
    setTimeout(judgeResult, waitTime+100, result)
  }, false);
}

function judgeResult(result){
  if (result == 0){
    console.log("aiko");
    alert("あいこ！もう一回勝負！")
  } else if (result == 1 ) {
    console.log("you lose");
    new Audio('audio/lose_sound.mp3').play();
    document.body.classList.add("lose")
  } else {
    console.log("you win");
    new Audio('audio/win_sound.mp3').play();
    document.body.classList.add("win")
  }
}

function displayHands(u_hand, m_hand){
  user_hand_area = document.getElementById("user_hand_area")
  machine_hand_area = document.getElementById("machine_hand_area")
  u_hands = ["✊", "✌️", "✋"]
  m_hands = ["images/rock.jpg", "images/scissors.jpg", "images/paper.jpg"]
  user_hand_area.textContent = u_hands[u_hand]
  machine_hand_area.children[0].src = m_hands[m_hand]
}
