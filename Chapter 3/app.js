var age = "13"
birthyear = "2007"

alert("I am " + age + " years-old")

// It tells you the number based on how many times you have opened the index.html file(NOT BY REFRESHING)
function visitCount() {
    var visits = Number(localStorage.getItem('visitCount'));
    var current = Boolean(sessionStorage.getItem('session'));
  
    if (!current) {
      visits++;
    }
  
    localStorage.setItem('visitCount', visits);
    sessionStorage.setItem('session', true);
  
    return alert("You have visited this site " + visits + " time(s)");
  }

  document.getElementById("birth").innerHTML = "My birth year is" + birthyear;
