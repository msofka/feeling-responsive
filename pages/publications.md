---
layout: pagewide
show_meta: false
title: "Publications"
subheadline: ""
teaser: ""
header:
   image_fullwidth: "publications.png"
   noname: true
permalink: "/publications/"
header_image_set: true
---
My publications on <a href="https://scholar.google.com/citations?user=fyN2FbgAAAAJ">Google Scholar</a> and <a href="http://dblp.uni-trier.de/pers/hd/s/Sofka:Michal">DBLP</a>.
<div>
  <ul class="nav nav-tabs no-marg">
    <li class="active tab"><a data-toggle="tab" href="#patents"><h3 class="size-readjuster">Patents</h3></a></li>
    <li class="tab"><a data-toggle="tab" href="#papers"><h3 class="size-readjuster">Papers</h3></a></li>
  </ul>
  <div class="tab-content margin-adj-collectn">
    <div id="patents" class="tab-pane fade in active">
     <h2>Patents</h2>

    {% bibliography --template bibtemplate-patents --query @misc %}
    </div>
      <div id="papers" class="tab-pane fade">

        <ul class="top-margin">
          <li>
            <a href="#jpapers">Journal</a>
          </li>
          <li>
            <a href="#bpapers">Book Chapters</a>
          </li>
          <li>
            <a href="#cpapers">Conference</a>
          </li>
        </ul>
        All publications in <a href="http://www.cs.rpi.edu/~sofka/pdfs/sofka-publications.bib" target="_blank">one bibtex</a> file.
       <h2 id="jpapers">Journal Papers</h2>

      {% bibliography --query @article %}

       <h2 id="bpapers">Book Chapters</h2>

      {% bibliography --query @incollection %}

       <h2 id="cpapers">Conference Papers</h2>

      {% bibliography --query @inproceedings %}
      </div>

</div>
</div>



<script src="https://bibbase.org/show?bib=https%3A%2F%2Fmsofka.github.io%2Fassets%2Fsofka-publications.bib&jsonp=1"></script>
