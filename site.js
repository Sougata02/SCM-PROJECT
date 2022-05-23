
let questions = [
  {
    question: "What is the value of 5!?",
    answer: "3.  120",
    options: [
      "1.  130",
      "2.  135",
      "3.  120",
      "4.  150"
    ]
  },
  {
    question: "5+4=?",
    answer: "2.  9",
    options: [
      "1.  8",
      "2.  9",
      "3.  7",
      "4.  10"
    ]
  },
  {
    question: "What is value of sin0?",
    answer: "1.  0",
    options: [
      "1.  0",
      "2.  1",
      "3.  1.5",
      "4.  None of these"
    ]
  }
];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time",`${minutes} minutes and ${seconds} seconds`);
    location.href = "end.html";
  }

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${questions[count].options[0]}</li>
  <li class="option">${questions[count].options[1]}</li>
  <li class="option">${questions[count].options[2]}</li>
  <li class="option">${questions[count].options[3]}</li>

  `;
 currentAnswer();
}

function currentAnswer() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
let dt = new Date(new Date().setTime(0));
let ctime = dt.getTime();
let seconds = Math.floor((ctime % (1000 * 60))/ 1000);
let minutes = Math.floor((ctime % (1000 * 60 * 60))/( 1000 * 60));
console.log(seconds, minutes);
let time = 0;
let mytime = setInterval(function(){
        time++;
        
        if(seconds < 59) {
            seconds++;
        } else {
            seconds = 0;
            minutes++;
        }
        let formatted_sec = seconds < 10 ? `0${seconds}`: `${seconds}`;
        let formatted_min = minutes < 10 ? `0${minutes}`: `${minutes}`
        document.querySelector("span.time").innerHTML = `${formatted_min} : ${formatted_sec}`;
    }, 1000);