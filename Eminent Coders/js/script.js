function toggleMenu() {
  // let x = document.getElementById('mobile');
  var menu = document.getElementById("menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }  
}

function goals(){ 
  var goals = document.getElementById("goals-text");
  var goalPlus = document.getElementById("goal-plus");
  var goalMinus = document.getElementById("goal-minus");
  var mission = document.getElementById("mission-text");
  if (goals.style.display === "block") {
    goals.style.display = "none";
    goalPlus.style.display = "block";
    goalMinus.style.display = "none";
  } else {
    goals.style.display = "block";
    goalPlus.style.display = "none";
    goalMinus.style.display = "block";
    mission.style.display = "none";
  }
}

function mission(){ 
  var mission = document.getElementById("mission-text");
  var missionPlus = document.getElementById("mission-plus");
  var missionMinus = document.getElementById("mission-minus");
  var goals = document.getElementById("goals-text");
  if (mission.style.display === "block") {
    mission.style.display = "none";
    missionPlus.style.display = "block";
    missionMinus.style.display = "none";
  } else { 
    mission.style.display = "block";
    missionPlus.style.display = "none";
    missionMinus.style.display = "block";
    goals.style.display = "none";
  }
}


function serviceMenu(){
  var hasDrop = document.getElementById("has-dropdown");
  // var serviceAfter = document.getElementById("Service > a:after")
  if (hasDrop.style.display === "block") {
    hasDrop.style.display = "none";
  } else {
    hasDrop.style.display = "block";
  }
}




















