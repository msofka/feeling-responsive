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
- 3rd International Workshop on (Meta)modelling for Healthcare Systems ([MMHS 2016](http://mmhs.hib.no/2016/call-for-papers/), program committee)
- 16th IEEE International Working Conference on Source Code Analysis and Manipulation ([SCAM 2016](http://www.ieee-scam.org/2016/), program committee, steering committee)
- 32rd IEEE International Conference on Software Maintenance and Evolution ([ICSME 2016](https://icsme2016.github.io/), program committee)
- 24th International Conference on Program Comprehension ([ICPC 2016](http://www.program-comprehension.org/icpc16/), program committee)
- 3rd Workshop on Patterns Promotion and Anti-patterns Prevention ([PPAP 2016](http://ppap.soccerlab.polymtl.ca/), organizer)
---
<ul>
    {% for item in page.upcoming %}
    <li>{{ item | markdownify | remove: '<p>' | remove: '</p>' }}</li>
    {% endfor %}
</ul>
Consider submitting a paper and/or attending!
