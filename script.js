const clock = document.getElementById("clock");

function runClock() {
  var time = new Date();
  let hr = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  var txt = "AM";

  if (hr >= 12) {
    txt = "PM";
    if (hr > 12) {
      hr = hr - 12;
    }
  } else if (hr === 0) {
    hr = 12;
    txt = "AM";
  }

  hr = hr.toString().padStart(2, "0");
  min = min.toString().padStart(2, "0");
  sec = sec.toString().padStart(2, "0");

  clock.innerHTML = `${hr} : ${min} : ${sec} ${txt}`;
}

runClock();
setInterval(runClock, 1000);
