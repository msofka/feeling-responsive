---
layout: page
show_meta: false
title: "Upcoming"
subheadline: ""
teaser: "I'm involved in the following upcoming conferences and events:"
header:
   image_fullwidth: "header_unsplash_balloons.jpg"
permalink: "/activities/upcoming/"
upcoming:

- "Medical Computer Vision Workshop @ CVPR June 16, 2019 ([CVPR MVC 2019](https://sites.google.com/view/cvprmcv19/home))."

---

<ul>
    {% for item in page.upcoming %}
    <li>{{ item | markdownify | remove: '<p>' | remove: '</p>' }}</li>
    {% endfor %}
</ul>

