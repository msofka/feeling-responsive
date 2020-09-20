---
layout: page
show_meta: false
title: "News"
subheadline: ""
teaser: "An overview of older and newer news in reverse chronological order"
header:
   image_fullwidth: "header_unsplash_dawn.jpg"
permalink: "/projects/news/"
news:

-  "9/19/2020 Looking forward to representing Hyperfine in an upcoming keynote ``Point-of-Care MRI: low-cost and portable system for low field dMRI anywhere anytime'' at the [MICCAI 2020 International Workshop on Computational Diffusion MRI](http://cmic.cs.ucl.ac.uk/cdmri/programme.html)."
-  "8/12/2020 Abstract on [``Deep Learning MRI Reconstruction in Application to Point-of-Care MRI''](https://msofka.github.io/pdfs/schlemper-ismrm20.pdf) presented by Jo S. at [ISMRM](https://www.ismrm.org/20/program_files/O57.htm)."
-  "7/28/2020 [Released a podcast](https://alldus.com/blog/podcasts/aiinaction-michal-sofka-hyperfine/) where I speak about the role of deep learning in delivering Hyperfine's MRI systems. [Transcript](2020/07/28/Deep-Learning-at-Hyperfine) also available."
-  "12/6/2019 Hyperfine featured the bedside scanners at RSNA (presentations and scanning on the exhibition floor and [nVidia showcase](https://www.businesswire.com/news/home/20191201005195/en/Hyperfine-Research-Teams-NVIDIA-Next-Generation-Point-of-Care-MRI)). Anonounced [collaboration with UPenn Medicine](https://www.businesswire.com/news/home/20191202005138/en/Hyperfine-Penn-Medicine-Announce-Partnership-Image-Hydrocephalus)."
-  "8/27/2019 Hyperfine will showcase the technology at the [ACEP conference](https://www.acep.org/acep19/generalinfo/about-acep-sa/) in Denver on Oct 27-30. Come and see us."
-  "6/16/2019 Presented invited talk on ``Bringing MRI to the Patient's Bedside: Deep Learning for Image Acquisition and Image Interpretation'' at Medical Computer Vision Workshop ([CVPR MVC 2019](https://sites.google.com/view/cvprmcv19/home))."
-  "6/4/2019 Our paper on ``Nonuniform Variational Network: Deep Learning for Accelerated Nonuniform MR Image Reconstruction'' was accepted and will be presented at the [MICCAI 2019](https://www.miccai2019.org) conference in Shenzhen."
-  "3/11/2019 The [video](https://www.youtube.com/watch?v=2djGATBc_eE) of my talk on our work on ``Deep MR image reconstruction across k­-space and image domain'' has been posted on [i2i Workshop](http://cai2r.net/i2i) 2018 web site."
-  "3/4/2019 Hyperfine launches a new website. The company envisions MR systems that are portable at the Point of Care. Imagine MR directly at the bedside - no need for a shielded room."
-  "2/28/2019 I am presenting a talk on ``Deep Learning and Medical Imaging for Streamlining MRI Exams'' at Stony Brook's Biomedical Informatics Grand Rounds."
-  "8/20/2018 Hyperfine Research will present in the ``Maximum overdrive: the AI revolution'' session at the [i2i Workshop](http://cai2r.net/i2i) in NYC."
-  "6/17/2018 Butterfly Network exhibits at [Computer Vision and Pattern Recognition (CVPR) 2018](http://cvpr2018.thecvf.com/) conference."
-  "5/15/2018 Hyperfine Research sponsors [Deep Learning at Medical Image Analysis Workshop](https://cs.adelaide.edu.au/~dlmia4/) at [MICCAI 2018](http://www.miccai2018.org/)."
-  "3/16/2018 Butterfly launches iQ, world's first whole body imaging ultrasound platform that plugs into an iPhone and costs under $2,000." 
-  "4/27/2017 Paper on our work accepted to [MICCAI 2017](http://http://www.miccai2017.org/)."
-  "3/15/2017 Paper on learning discretizations via convex optimization accepted to the Machine Learning journal."
-  "2/15/2017 Butterfly Network sponsors 2017 Medical Image Computing and Computer Assisted Intervention (MICCAI) conference."
-  "10/17/2017 Butterfly Network sponsors Deep Learning in Medical Imaging at MICCAI 2016."

---

<ul>
    {% for item in page.news %}
    <li>{{ item | markdownify | remove: '<p>' | remove: '</p>' }}</li>
    {% endfor %}
</ul>

