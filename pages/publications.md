---
layout: page
show_meta: false
title: "Publications"
subheadline: ""
teaser: "An onsite overview of my publications is currently under development. In the meantime, I refer to the list of my publications that is <a target='_blank' href='http://www.simula.no/people/leon'>available via Simula</a> or my <a target='_blank' href='https://www.mendeley.com/profiles/leon-moonen/'>Mendeley homepage.</a>"
header:
   image_fullwidth: "header_unsplash_forest.jpg"
permalink: "/publications/"
---
<ul>
    {% for post in site.categories.publications %}
    <li><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>
