---
layout: page
show_meta: false
title: "Upcoming"
subheadline: ""
teaser: "This part of the site is currently under development."
header:
   image_fullwidth: "header_unsplash_balloons.jpg"
permalink: "/activities/upcoming/"
---
<ul>
    {% for post in site.categories.events %}
    <li><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>
