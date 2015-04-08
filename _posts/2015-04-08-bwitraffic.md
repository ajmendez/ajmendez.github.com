---
layout: post
title:  "ADS-B BWI Traffic"
date:   2015-4-8
categories: SDR ADS-B radio maryland
---
<script>
 (function(d, t) {
    var g = d.createElement(t),
        s = d.getElementsByTagName(t)[0];
    // g.src = 'http://assets.gfycat.com/js/gfyajax-0.517d.js'; // 
    g.src = '{{ site.baseurl }}/js/gfycat.js';  // paused version
    s.parentNode.insertBefore(g, s);
}(document, 'script'));
</script>
<img class="gfyitem" data-id="KindThreadbareLcont" />

[Larger](http://www.gfycat.com/KindThreadbareLcont)

Now in the third dimension! The axes might not be an exact km represenation,
but are good enough for this video. The figure shows ADS-B lat/long data in the
Maryland / Baltimore Washington Internation (BWI) airport area. The blue square
shows my receiver location, and the points shows ADS-B MSG 3 locations of
aircraft relative to the receiver and color coded by their altitude. The
stratification at high altitudes (>6km, red/orange) are cross-country flights.
The aircraft points at middle altitudes (~5km, green/cyan) show flights in a
holding pattern or aircraft that are starting their decent or climb. Aircraft
points below low altitudes (<2km, blue) show flights landing and taking off
from the BWI airport. Projecting this down onto lat/long the low-altitude
flights trace the two main BWI runways.

My goal is to incorporate a map and some indiciation of flights landing or
taking off in the next version.



