/*********************************************************************
*  #### Twitter Post Fetcher v13.1 ####
*  Coded by Jason Mayes 2015. A present to all the developers out there.
*  www.jasonmayes.com
*  Please keep this disclaimer with my code if you use it. Thanks. :-)
*  Got feedback or questions, ask here:
*  http://www.jasonmayes.com/projects/twitterApi/
*  Github: https://github.com/jasonmayes/Twitter-Post-Fetcher
*  Updates will be posted to this site.
*********************************************************************/
(function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():t()})(this,function(){function e(e){if(null===w){for(var t=e.length,i=0,n=document.getElementById(a),s="<ul>";t>i;)s+="<li>"+e[i]+"</li>",i++
s+="</ul>",n.innerHTML=s}else w(e)}function t(e){return e.replace(/<b[^>]*>(.*?)<\/b>/gi,function(e,t){return t}).replace(/class=".*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi,"")}function i(e){for(var t=e.getElementsByTagName("a"),i=t.length-1;i>=0;i--)t[i].setAttribute("target","_blank")}function n(e,t){for(var i=[],n=RegExp("(^| )"+t+"( |$)"),s=e.getElementsByTagName("*"),a=0,l=s.length;l>a;a++)n.test(s[a].className)&&i.push(s[a])
return i}function s(e){if(void 0!==e){var t=e.innerHTML.match(/data-srcset="([A-z0-9%_\.-]+)/i)[0]
return decodeURIComponent(t).split('"')[1]}}var a="",l=20,r=!0,o=[],d=!1,c=!0,m=!0,u=null,h=!0,v=!0,w=null,p=!0,g=!0,f=!1,b=!0,y="en",T=!0,k=null,x={fetch:function(e){if(void 0===e.maxTweets&&(e.maxTweets=20),void 0===e.enableLinks&&(e.enableLinks=!0),void 0===e.showUser&&(e.showUser=!0),void 0===e.showTime&&(e.showTime=!0),void 0===e.dateFunction&&(e.dateFunction="default"),void 0===e.showRetweet&&(e.showRetweet=!0),void 0===e.customCallback&&(e.customCallback=null),void 0===e.showInteraction&&(e.showInteraction=!0),void 0===e.showInteractionText&&(e.showInteractionText=!0),void 0===e.showImages&&(e.showImages=!1),void 0===e.linksInNewWindow&&(e.linksInNewWindow=!0),void 0===e.showPermalinks&&(e.showPermalinks=!0),d)o.push(e)
else{d=!0,a=e.domId,l=e.maxTweets,r=e.enableLinks,m=e.showUser,c=e.showTime,v=e.showRetweet,u=e.dateFunction,w=e.customCallback,p=e.showInteraction,g=e.showInteractionText,f=e.showImages,b=e.linksInNewWindow,T=e.showPermalinks
var t=document.getElementsByTagName("head")[0]
null!==k&&t.removeChild(k),k=document.createElement("script"),k.type="text/javascript",k.src="https://cdn.syndication.twimg.com/widgets/timelines/"+e.id+"?&lang="+(e.lang||y)+"&callback=twitterFetcher.callback&suppress_response_codes=true&rnd="+Math.random(),t.appendChild(k)}},callback:function(a){var w=document.createElement("div")
w.innerHTML=a.body,void 0===w.getElementsByClassName&&(h=!1)
var y=[],k=[],C=[],E=[],N=[],_=[],I=[],B=0
if(h)for(var A=w.getElementsByClassName("tweet");B<A.length;)N.push(A[B].getElementsByClassName("retweet-credit").length>0?!0:!1),(!N[B]||N[B]&&v)&&(y.push(A[B].getElementsByClassName("e-entry-title")[0]),_.push(A[B].getAttribute("data-tweet-id")),k.push(A[B].getElementsByClassName("p-author")[0]),C.push(A[B].getElementsByClassName("dt-updated")[0]),I.push(A[B].getElementsByClassName("permalink")[0]),E.push(void 0!==A[B].getElementsByClassName("inline-media")[0]?A[B].getElementsByClassName("inline-media")[0]:void 0)),B++
else for(var A=n(w,"tweet");B<A.length;)y.push(n(A[B],"e-entry-title")[0]),_.push(A[B].getAttribute("data-tweet-id")),k.push(n(A[B],"p-author")[0]),C.push(n(A[B],"dt-updated")[0]),I.push(n(A[B],"permalink")[0]),E.push(void 0!==n(A[B],"inline-media")[0]?n(A[B],"inline-media")[0]:void 0),N.push(n(A[B],"retweet-credit").length>0?!0:!1),B++
y.length>l&&(y.splice(l,y.length-l),k.splice(l,k.length-l),C.splice(l,C.length-l),N.splice(l,N.length-l),E.splice(l,E.length-l),I.splice(l,I.length-l))
for(var L=[],B=y.length,P=0;B>P;){if("string"!=typeof u){var R=C[P].getAttribute("datetime"),F=new Date(C[P].getAttribute("datetime").replace(/-/g,"/").replace("T"," ").split("+")[0]),M=u(F,R)
if(C[P].setAttribute("aria-label",M),y[P].innerText)if(h)C[P].innerText=M
else{var H=document.createElement("div"),U=document.createTextNode(M)
H.appendChild(U),H.setAttribute("aria-label",M),C[P]=H}else C[P].textContent=M}var W=""
r?(b&&(i(y[P]),m&&i(k[P])),m&&(W+='<div class="user">'+t(k[P].innerHTML)+"</div>"),W+='<div class="tweet">'+t(y[P].innerHTML)+"</div>",c&&(W+=T?'<div class="timePosted"><a href="'+I[P]+'">'+C[P].getAttribute("aria-label")+"</a></div>":'<div class="timePosted">'+C[P].getAttribute("aria-label")+"</div>")):y[P].innerText?(m&&(W+='<div class="user">'+k[P].innerText+"</div>"),W+='<div class="tweet">'+y[P].innerText+"</div>",c&&(W+='<div class="timePosted">'+C[P].innerText+"</div>")):(m&&(W+='<div class="user">'+k[P].textContent+"</div>"),W+='<div class="tweet">'+y[P].textContent+"</div>",c&&(W+='<div class="timePosted">'+C[P].textContent+"</div>"))
var j="Reply",q="Retweet",z="Favorite"
if(!g)var j="",q="",z=""
p&&(W+='<ul class="interact"><li><a href="https://twitter.com/intent/tweet?in_reply_to='+_[P]+'" class="twitter_reply_icon"'+(b?' target="_blank">':">")+j+'</a></li><li><a href="https://twitter.com/intent/retweet?tweet_id='+_[P]+'" class="twitter_retweet_icon"'+(b?' target="_blank">':">")+q+'</a></li><li><a href="https://twitter.com/intent/favorite?tweet_id='+_[P]+'" class="twitter_fav_icon"'+(b?' target="_blank">':">")+z+"</a></li></ul>"),f&&void 0!==E[P]&&(W+='<div class="media"><img src="'+s(E[P])+'" alt="Image from tweet" /></div>'),L.push(W),P++}e(L),d=!1,o.length>0&&(x.fetch(o[0]),o.splice(0,1))}}
return window.twitterFetcher=x,x})