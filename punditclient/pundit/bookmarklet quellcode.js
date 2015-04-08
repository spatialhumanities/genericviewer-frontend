/**
 * Created by felixlange on 23.01.14.
 */

javascript:(function(){var baseURL='http://www.spatialhumanities.de/fileadmin/bookmarklet/';
var h=document.getElementsByTagName('head')[0];
var i=document.createElement('script');
i.type='text/javascript';
i.src='http://code.jquery.com/jquery-latest.js';
i.async=false;
h.appendChild(i);
var k=document.createElement('script');
k.type='text/javascript';
k.src=baseURL+'InitBookmarklet.js?'+Math.random()*4;
k.async=false;
h.appendChild(k);
})()
