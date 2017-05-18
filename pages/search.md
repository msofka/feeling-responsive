---
layout: page
show_meta: false
meta_title: "Search the contents of this site via Google..."
title: "Search"
teaser: "Search the contents of this site via Google..."
permalink: "/search/"
header:
   image_fullwidth: "header_unsplash_mist.jpg"
---

{% include google_search %}

<form style="padding-bottom: 200px;" onsubmit="google_search()" >
  <input type="text" id="google-search" placeholder="{{ site.data.language.enter_search_term }}">
</form>
