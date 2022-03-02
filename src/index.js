import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import beepBoop from './boop.js';
import $ from 'jquery';

//UI Logic
$(document).ready(function(){
  $(".btn").click(function(event) {
  event.preventDefault();
  let number = parseInt($("#number").val());
  $("#output").text(beepBoop(number));
  
  });
});


