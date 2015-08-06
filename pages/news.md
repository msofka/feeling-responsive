---
layout: page
show_meta: false
title: "News"
subheadline: ""
teaser: "This part of the site is currently under development."
header:
   image_fullwidth: "header_unsplash_beach.jpg"
permalink: "/research/news/"
---
<ul>
    {% for post in site.categories.news %}
    <li><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>
