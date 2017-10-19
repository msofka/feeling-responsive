---
layout: page
show_meta: false
title: "News"
subheadline: ""
teaser: "An overview of older and newer news in reverse chronological order"
header:
   image_fullwidth: "header_unsplash_dawn.jpg"
permalink: "/projects/news/"
news:

-  "4/27/2017 Paper on our work accepted to [MICCAI 2017](http://http://www.miccai2017.org/)."
-  "3/15/2017 Paper on learning discretizations via convex optimization accepted to the Machine Learning journal."
-  "2/15/2017 Butterfly Network sponsors 2017 Medical Image Computing and Computer Assisted Intervention (MICCAI) conference."
-  "10/17/2017 Butterfly Network sponsors Deep Learning in Medical Imaging at MICCAI 2016."

---

<ul>
    {% for item in page.news %}
    <li>{{ item | markdownify | remove: '<p>' | remove: '</p>' }}</li>
    {% endfor %}
</ul>
