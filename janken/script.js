for (var i=0; i <3; i++) {
  document.getElementsByClassName("hand")[i].addEventListener("click", function(e){
    document.body.classList = []
    userHand = e.target.getAttribute('data-hand');
    machineHand = Math.floor( Math.random() * (3))
    var handMap = ["rock","scissors","paper"];
    result = (userHand - machineHand) % 3
    new Audio('audio/prepare.mp3').play();
    var waitTime = 2000
    setTimeout(displayHands, waitTime, userHand, machineHand)
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

function displayHands(u_hand, m_hand){
  var user_hand_area = document.getElementById("user_hand_area")
  var machine_hand_area = document.getElementById("machine_hand_area")
  var u_hands = ["✊", "✌️", "✋"]
  var m_hands = ["images/rock.jpg", "images/scissors.jpg", "images/paper.jpg"]
  user_hand_area.textContent = u_hands[u_hand]
  machine_hand_area.children[0].src = m_hands[m_hand]
}
