---
layout: pageclone
title: "Contact"
meta_title: "Contact information and visiting address"
show_meta: false
subheadline: ""
permalink: "/contact/"
header:
   image_fullwidth: "header_unsplash_sea_night.jpg"
---

<h1>{{ page.title }}</h1>
<br>
<div class="container-fluid">
  <div class="row">
    <div class="col-md-6">
      <p><strong>Michal Sofka</strong></p>
      <hr>
      <p>4Catalyzer</p>
      <hr>
      <p>251 W 30th St</p>
      <hr>
      <p>New York, NY 10001</p>
      <hr>
      <p><strong>tel:</strong> (000)000-0000</p>
      <hr>
      <p><strong>email:</strong>&nbsp; <a href="mailto:michal.sofka@gmail.com">michal.sofka@gmail.com</a></p>
      <hr>
    </div>
    <div class="col-md-6">
      <div id="map"></div>
      <script>
        function initMap() {
          var uluru = {lat: 40.7494549, lng: -73.9964549};
          var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: uluru
          });
          var marker = new google.maps.Marker({
            position: uluru,
            map: map
          });
        }
      </script>
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAnd_Ha5qah8EPh6VY47gWbabvhsiTbrWg&callback=initMap">
      </script>
    </div>
  </div>
</div>

<div class="container-fluid">
  <div class="row">
    <div class="col-md-6">
      <h2 class="down-margin">Get in touch</h2>
      <div class="text-center" id="outerform">
          <input class="half" type="text" placeholder="First Name" id="fname" required />
          <input class="half" type="text" placeholder="Last Name" id="lname" required />
          <br>
          <br>
          <input class="" type="text" placeholder="Email Address" id="email-id" required />
          <br>
          <br>
          <textarea class="long" type="text" placeholder="Message" id="msg" required ></textarea>
          <br>
          <br>
        <a class="btn btn-primary" id="send" onclick="form_submit()">Submit</a>
      </div>
      <h4 id="response" style="display: none">Thanks for getting in touch. we'll get back to you soon.</h4>
    </div>
  </div>
</div>


<script>
var xmlhttp = new XMLHttpRequest();
function form_submit() {
$("#outerform").css("display","none");
$("#response").css("display","block");
var form_fname = document.getElementById("fname").value;
var form_lname = document.getElementById("lname").value;
var form_email = document.getElementById("email-id").value;
var form_msg = document.getElementById("msg").value;
var a = "https://docs.google.com/forms/d/e/1FAIpQLScZAMo9ERTOTxT00GrfPHQaLgt9vVceV2H6iScWHySrms_P6A/formResponse?emailAddress="+form_email+"&entry.2005620554="+form_fname+"&entry.900168775="+form_lname+"&entry.839337160="+form_msg;
xmlhttp.open("POST", a, false);
xmlhttp.send();
}


</script>
