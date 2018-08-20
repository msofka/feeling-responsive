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

-  "8/20/2018 Hyperfine Research will present in the "Maximum overdrive: the AI revolution" session at the [i2i Workshop](http://cai2r.net/i2i) in NYC.
-  "6/17/2018 Butterfly Network exhibits at [Computer Vision and Pattern Recognition (CVPR) 2018](http://cvpr2018.thecvf.com/) conference."
-  "5/15/2018 Hyperfine Research sponsors [Deep Learning at Medical Image Analysis Workshop](https://cs.adelaide.edu.au/~dlmia4/) at [MICCAI 2018](http://www.miccai2018.org/)."
-  "3/16/2018 Butterfly launches iQ, world's first whole body imaging ultrasound platform that plugs into an iPhone and costs under $2,000." 

---

<ul>
    {% for item in page.news %}
    <li>{{ item | markdownify | remove: '<p>' | remove: '</p>' }}</li>
    {% endfor %}
</ul>
