import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../src/css/styles.css';
import beepBoop from './js/boop.js';
import $ from 'jquery';

//UI Logic
$(document).ready(function(){
  $(".btn").click(function(event) {
  event.preventDefault();
  let number = parseInt($("#number").val());
  $("#output").text(beepBoop(number));
  
  });
});


