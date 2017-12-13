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
    <li class="active tab"><a data-toggle="tab" href="#papers"><h3 class="size-readjuster">Papers</h3></a></li>
    <li class="tab"><a data-toggle="tab" href="#patents"><h3 class="size-readjuster">Patents</h3></a></li>
  </ul>
  <div class="tab-content margin-adj-collectn">
      <div id="papers" class="tab-pane fade in active">

        <ul class="top-margin">
          <li>
            <a href="#jpapers">Journal</a>
          </li>
          <li>
            <a href="#bpapers">Book Chapters</a>
          </li>
          <li>
            <a href="#upapers">Unpublished Manuscripts</a>
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

      <h2 id="upapers">Unpublished Manuscripts</h2>

      {% bibliography --query @unpublished %}

      <h2 id="cpapers">Conference Papers</h2>

      {% bibliography --query @inproceedings %}
      </div>
        <div id="patents" class="tab-pane fade">
        <ul class="top-margin">
          <li>
            <a href="#gpatents">Granted</a>
          </li>
          <li>
            <a href="#ppatents">Pending</a>
          </li>
        </ul>

        <h2 id="gpatents">Granted</h2>
      
        <br> 
        <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=0&p=1&f=S&l=50&Query=in%2FMichal+and+%0D%0Ain%2FSofka&d=PTXT">USPTO Granted</a>
 
        {% bibliography --style apa --template bibtemplate-patents --query @misc[howpublished !~ US\w\w\w\w\w\w\w\w\w\w\w] %}
       
        <h2 id="ppatents">Pending</h2>

        <br>       
        <a href="http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&p=1&f=S&l=50&Query=in%2FSofka+and+in%2FMichal&d=PG01">USPTO Applications</a>
 
        {% bibliography --style apa --template bibtemplate-patents --query @misc[howpublished ^= US\w\w\w\w\w\w\w\w\w\w\w] %}
        </div>

</div>
</div>


