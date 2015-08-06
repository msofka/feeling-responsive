---
layout: page
show_meta: false
title: "Upcoming"
subheadline: ""
header:
   image_fullwidth: "header_unsplash_balloons.jpg"
permalink: "/activities/upcoming/"
---
<ul>
    {% for post in site.categories.events %}
    <li><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>
