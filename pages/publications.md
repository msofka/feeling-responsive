---
layout: page
show_meta: false
title: "Publications"
subheadline: ""
teaser: "This part of the site is currently under development. In the meantime, I refer to the list of my publications that is <a href='http://www.simula.no/people/leon'>available via Simula</a>."
header:
   image_fullwidth: "header_unsplash_forest.jpg"
permalink: "/publications/"
---
<ul>
    {% for post in site.categories.publications %}
    <li><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>
