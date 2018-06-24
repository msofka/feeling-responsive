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

-  "6/17/2018 Butterfly Network exhibits at Computer Vision and Pattern Recognition (CVPR) 2018 conference."
-  "5/15/2018 Hyperfine Research sponsors Deep Learning at Medical Image Analysis Workshop at MICCAI 2018."
-  "3/16/2018 Butterfly launches iQ, world's first whole body imaging ultrasound platform that plugs into an iPhone and costs under $2,000." 

---

<ul>
    {% for item in page.news %}
    <li>{{ item | markdownify | remove: '<p>' | remove: '</p>' }}</li>
    {% endfor %}
</ul>
