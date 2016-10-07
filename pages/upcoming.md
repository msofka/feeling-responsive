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
- 1st International Workshop on Technical Debt Analytics ([TDA2016](https://tda2016.bitbucket.io), organizer)
- 4th International Workshop on Patterns Promotion and Anti-patterns Prevention ([PPAP 2017](http://ppap.soccerlab.polymtl.ca/), organizer)
- 17th IEEE International Working Conference on Source Code Analysis and Manipulation ([SCAM 2017](http://www.ieee-scam.org/2017/), steering committee)
- 33rd IEEE International Conference on Software Maintenance and Evolution ([ICSME 2017](https://icsme2017.github.io/))
---
<ul>
    {% for item in page.upcoming %}
    <li>{{ item | markdownify | remove: '<p>' | remove: '</p>' }}</li>
    {% endfor %}
</ul>
Consider submitting a paper and/or attending!
