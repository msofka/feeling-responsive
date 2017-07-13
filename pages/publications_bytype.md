layout: page
show_meta: false
title: "Publications"
subheadline: ""
teaser: ""
header:
   image_fullwidth: "header_unsplash_forest.jpg"
permalink: "/publications_bytype/"
---


<div class="pure-g-r" id="layout">
  <div class="pure-u-1-2">
    <div class="l-left">
    <h1> Publications</h1>
    </div>
  </div>
    <div class="pure-u-1-2">
      <div class="l-right">
        <p>
          <a class="pure-button" href="{{site.baseurl}}/publications/">By Year</a>
          <a class="pure-button" href="{{site.baseurl}}/publications_bytype/">By Type</a>
      </p>
      </div>
    </div>
<div class="pure-u-1">

<div class="pure-u-1">
{% bibliography_bytype --query @article %}
</div>


<div class="pure-u-1">
{% bibliography_bytype --query @inproceedings %}
</div>

<div class="pure-u-1">
{% bibliography_bytype --query @book %}
</div>


<div class="pure-u-1">
{% bibliography_bytype --query @incollection %}
</div>

<div class="pure-u-1">
{% bibliography_bytype --query @techreport %}
</div>


</div>
</div>

