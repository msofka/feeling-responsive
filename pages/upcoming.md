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
- 32rd IEEE International Conference on Software Maintenance and Evolution ([ICSME 2016](https://icsme2016.github.io/), program committee)
- 15th IEEE International Working Conference on Source Code Analysis and Manipulation ([SCAM 2015](http://www.ieee-scam.org/2015/), steering committee)
- 2nd High Integrity Systems Symposium ([HISS 2015](https://high-integrity-systems.no/), organizer)
- 22nd IEEE International Conference on Software Analysis, Evolution, and Reengineering ([SANER 2015](http://saner.soccerlab.polymtl.ca/doku.php?id=en:start), program committee)
- 23nd IEEE International Conference on Program Comprehension ([ICPC 2015](https://dibt.unimol.it/ICPC15/Home.html), program committee)
- 2nd Workshop on Patterns Promotion and Anti-patterns Prevention ([PPAP 2014](http://ppap.soccerlab.polymtl.ca/), steering committee)

---
<ul>
    {% for item in page.upcoming %}
    <li>{{ item | markdownify | remove: '<p>' | remove: '</p>' }}</li>
    {% endfor %}
</ul>
Consider submitting a paper and/or attending!
