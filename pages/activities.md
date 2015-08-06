---
layout: page
show_meta: false
title: "Activities"
subheadline: ""
teaser: "This part of the site is currently under development."
header:
   image_fullwidth: "header_unsplash_fuji.jpg"
permalink: "/activities/"
---
<ul>
    {% for post in site.categories.events %}
    <li><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>
