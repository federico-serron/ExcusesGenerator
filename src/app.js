/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  function generateExcuse(who, action, what, when) {
    let sentence = "";
    sentence =
      who[Math.floor(Math.random() * who.length)] +
      " " +
      action[Math.floor(Math.random() * who.length)] +
      " " +
      what[Math.floor(Math.random() * who.length)] +
      " " +
      when[Math.floor(Math.random() * who.length)];

    document.getElementById("excuse").innerHTML = sentence;
  }

  document.getElementById("btn").onclick = function() {
    generateExcuse(who, action, what, when);
  };
};
