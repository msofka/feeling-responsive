---
layout: page
show_meta: false
title: "Selected Publications"
subheadline: ""
teaser: "Selected conference and jurnal publications"
header:
   image_fullwidth: "header_unsplash_balloons.jpg"
permalink: "/publications/selected/"
selected:

- "``Nonuniform Variational Network: Deep Learning for Accelerated Nonuniform MR Image Reconstruction'', MICCAI 2019."

---

<ul>
    {% for item in page.selectec %}
    <li>{{ item | markdownify | remove: '<p>' | remove: '</p>' }}</li>
    {% endfor %}
</ul>

