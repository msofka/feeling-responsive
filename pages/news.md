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

-  "3/11/2019 The [video](https://www.youtube.com/watch?v=2djGATBc_eE) of my talk on our work on ``Deep MR image reconstruction across k­-space and image domain'' has been posted on [i2i Workshop](http://cai2r.net/i2i) 2018 web site."
-  "3/4/2019 Hyperfine launches a new website. The company envisions MR systems that are portable at the Point of Care. Imagine MR directly at the bedside - no need for a shielded room."
-  "2/28/2019 I am presenting a talk on ``Deep Learning and Medical Imaging for Streamlining MRI Exams'' at Stony Brook's Biomedical Informatics Grand Rounds."
-  "8/20/2018 Hyperfine Research will present in the ``Maximum overdrive: the AI revolution'' session at the [i2i Workshop](http://cai2r.net/i2i) in NYC."
-  "6/17/2018 Butterfly Network exhibits at [Computer Vision and Pattern Recognition (CVPR) 2018](http://cvpr2018.thecvf.com/) conference."
-  "5/15/2018 Hyperfine Research sponsors [Deep Learning at Medical Image Analysis Workshop](https://cs.adelaide.edu.au/~dlmia4/) at [MICCAI 2018](http://www.miccai2018.org/)."
-  "3/16/2018 Butterfly launches iQ, world's first whole body imaging ultrasound platform that plugs into an iPhone and costs under $2,000." 
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

