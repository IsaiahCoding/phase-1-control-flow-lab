function scuberGreetingForFeet(ride) {
  if (ride <= 400) {
    return "This one is on me!";
  } else if (ride > 400 && ride <= 2000) {
    return "That will be twenty bucks.";
  } else if (ride > 2500) {
    return "No can do.";
  } else {
    return "I will gladly take your thirty bucks.";
  }
}

function ternaryCheckCity(city){
  return city === "NYC" ? "Ok, sounds good." : "No go."
}


function switchOnCharmFromTip(tip){
  let message;
  if (tip === "generous") {
    message = "Thank you so much.";
  } else if (tip === "not as generous") {
    message = "Thank you.";
  } else {
    message = "Bye.";
  }
  return message;
}