---
layout: page
show_meta: false
title: "News"
subheadline: ""
teaser: "An overview of older and newer news in reverse chronological order"
header:
   image_fullwidth: "header_unsplash_dawn.jpg"
permalink: "/research/news/"
news:
-  "Summer 2015: New website up and running: moved from an overloaded shared Wordpress hosting service to DSL generated content GitHub Pages"
-  "I will give a keynote at [BENEVOL 2014](http://benevol.cwi.nl/2014/) in Amsterdam, the Netherlands"
-  "New article ``[Towards Evidence-Based Recommendations to Guide the Evolution of Component-Based Product Families](https://www.simula.no/publications/towards_evidence-based_recommendations)'' accepted in [SCP](http://www.sciencedirect.com/science/article/pii/S0167642313002931)"
-  "Our paper ``[Assembling Multiple-Case Studies: Potential, Principles and Practical Considerations](https://www.simula.no/publications/Simula.simula.1916)'' (with Aiko Yamashita) was accepted at [EASE 2014](http://ease2014.org/)"

---

<ul>
    {% for item in page.news %}
    <li>{{ item | markdownify | remove: '<p>' | remove: '</p>' }}</li>
    {% endfor %}
</ul>
