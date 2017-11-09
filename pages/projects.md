---
layout: pagewide
title: "Projects"
subheadline: ""
show_meta: false
teaser: ""
permalink: "/projects/"
header:
    image_fullwidth: "header_unsplash_coffee_beans.jpg"
---
<div>
  <ul class="nav nav-tabs no-marg">
    <li class="active tab"><a data-toggle="tab" href="#imga"><h3 class="size-readjuster">Image Analysis</h3></a></li>
    <li class="tab"><a data-toggle="tab" href="#nwsecu"><h3 class="size-readjuster">Network Security</h3></a></li>
  </ul>
  <div class="tab-content margin-adj-collectn">
    <div id="nwsecu" class="tab-pane fade">
         <div class="cf">
           <a href="/projects/malware/"><h3 class="no-marg">Malicious Network Traffic Detection</h3></a>
           <p class="down-margin">Malware is constantly evolving and changing. One way to identify malware is by analyzing the communication that the malware performs on the network. Using machine learning, these traffic patterns can be utilized to identify malicious software.</p>
         </div>
      </div>
    <div id="imga" class="tab-pane fade in active">
      <div class="cf ">
          <div class="col-md-4"><img src="/assets/img/knee_not-segmented.jpg" class="thumb">
          <img src="/assets/img/knee_segmented.jpg" class="thumb"></div>
        <div class="col-md-8">
        <a href="/projects/i2i/"><h3 class="no-marg">Image Analysis for the Orthopedic Applications</h3></a>
        <p class="down-margin">This line of work focuses on building tools for automatic bone segmentation and landmark detection for joint replacement surgery. Using a 3D medical image of a target joint region of a patient, bone structures are automatically segmented and a set of landmarks are automatically detected. The boundaries of segmented bone structures can then be interactively refined based on user inputs.</p>
      </div></div>
      <br>
      <div class="cf ">
        <div class="col-md-4"><img src="/assets/img/segmented_organs.jpg" class="thumb">
        <img src="/assets/img/lung_segmentation.jpg" class="thumb"></div>
      <div class="col-md-8">
      <a href="/projects/organs/"><h3 class="no-marg">Whole Body Organ Segmentation</h3></a>
      <p class="down-margin">We present a novel generic segmentation system for the fully automatic multi-organ segmentation from 3D medical images. The system combines the advantages of learning-based approaches on point cloud-based shape representation, such a speed, robustness, point correspondences, with those of PDE-optimization-based level set approaches, such as high accuracy and the straightforward prevention of segment overlaps. The proposed system yields segmentation accuracies of 1-3mm average surface errors depending on the segmented organ.</p>
    </div></div>
    <br>
      <div class="cf ">
        <div class="col-md-4"><img src="/assets/img/cad_server.jpg" class="thumb">
        <img src="/assets/img/jpip_client.jpg" class="thumb"></div>
      <div class="col-md-8">
      <a href="/projects/dic/"><h3 class="no-marg">Progressive Data Transmission for Hierarchical Detection in a Cloud</h3></a>
      <p class="down-margin">The inherent problem of limited bandwidth between a (thin) client, Data Center, and Data Analysis server is addressed by a hierarchical detection algorithm that obtains data by progressively transmitting only image regions required for processing. The technique provides at least 50 times bandwidth reduction while achieving similar accuracy when compared to an algorithm using the original data.</p>
    </div></div>
    <br>
      <div class="cf ">
        <div class="col-md-4"><img src="/assets/img/la-example.jpg" class="thumb">
        <img src="/assets/img/la-order.jpg" class="thumb"></div>
      <div class="col-md-8">
      <a href="/projects/hdn/"><h3 class="no-marg">Hierarchical Detection Network (HDN)</h3></a>
      <p class="down-margin">The interdependence of object poses and strong prior information embedded in the domain of medical images results in better performance than detecting the objects individually. The approach relies on Sequential Estimation techniques to detect the objects in order, one-by-one. The posterior distribution of the object pose is approximated at each step by sequential Monte Carlo. The samples are propagated within the sequence across multiple objects and hierarchical levels.</p>
    </div></div>
    <br>
      <div class="cf ">
        <div class="col-md-4"><img src="/assets/img/nodule-moving.jpg" class="thumb">
        <img src="/assets/img/nodule-fixed.jpg" class="thumb"></div>
      <div class="col-md-8">
      <a href="/projects/lrr/"><h3 class="no-marg">Location Registration and Recognition (LRR)</h3></a>
      <p class="down-margin">Given are (a) two temporally separated CT scans,I<sub>1</sub> ￼ and ￼,I<sub>2</sub> and (b) a series of locations in I<sub>1</sub>￼. The goal is to produce, for each location, an affine transformation mapping the locations and their immediate neighborhood from I<sub>1</sub>￼ to I<sub>2</sub>￼. The system essentially "recognizes" the neighborhoods at near interactive speeds.</p>
    </div></div>
    <br>
      <div class="cf ">
        <div class="col-md-4"><img src="/assets/img/090-ear_back-init.gif" class="thumb">
        <img src="/assets/img/090-ear_back-aligned.gif" class="thumb"></div>
      <div class="col-md-8">
      <a href="/projects/cdc/"><h3 class="no-marg">Covariance Driven Correspondences (CDC)</h3></a>
      <p class="down-margin">The uncertainty of point correspondences is derived from the covariance matrices of the individual point locations and from the covariance matrix of the estimated transformation parameters. Based on this uncertainty, CDC uses a robust objective function and an EM-like algorithm to simultaneously estimate the transformation.</p>
    </div></div>
    <br>
      <div class="cf ">
        <div class="col-md-4"><img src="/assets/img/sofka63.jpg" class="thumb">
        <img src="/assets/img/sofka65.gif" class="thumb"></div>
      <div class="col-md-8"><a href="/projects/vessels/"><h3 class="no-marg">Retinal Vessel Centerline Extraction</h3></a>
      <p class="down-margin">We propose a new technique motivated by the goals of improving detection of low-contrast and narrow vessels and eliminating false detections at non-vascular structures. Novel low level vesselness measure is embedded into a vessel tracing framework, resulting in an efficient and effective vessel centerline extraction algorithm.</p>
    </div></div>
    <br>
      <div class="cf ">
        <div class="col-md-4"><img src="/assets/img/winter-summer.jpg" class="thumb">
        <img src="/assets/img/eo-ir2.jpg" class="thumb"></div>
      <div class="col-md-8"><h3 class="no-marg">Automated registration of challenging image pairs (GDBICP)</h3>
      <p class="down-margin">Our goal is an automated registration algorithm capable of aligning image pairs having some combination of low overlap, substantial orientation and scale differences, large illumination differences (e.g. day and night), substantial scene changes, and different modalities.</p>
    </div></div>
  </div>
  </div>
</div>
