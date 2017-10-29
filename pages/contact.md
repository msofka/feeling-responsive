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
<div class="container">
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
      <div id="map" style="width:500px;height:400px;"></div>
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

### Electronic

My unified email address is [michal.sofka@gmail.com][email].

You can find me on Twitter as [@MichalSofka][twitter] and my main web address is [http://www.sofka.com/][web].

[email]: mailto:michal.sofka@gmail.com
[twitter]: https://twitter.com/MichalSofka
[web]: http://www.sofka.com/
