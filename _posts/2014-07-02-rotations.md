---
layout: post
title:  "Robotlandia"
date:   2014-7-2
categories: camera mount
---
<script>
 (function(d, t) {
    var g = d.createElement(t),
        s = d.getElementsByTagName(t)[0];
    g.src = 'http://assets.gfycat.com/js/gfyajax-0.517d.js';
    // g.src = '{{ site.baseurl }}/js/gfycat.js';  // paused version
    s.parentNode.insertBefore(g, s);
}(document, 'script'));

</script>
<img class="gfyitem" data-id="RemoteSneakyAkitainu" />

[Larger](http://www.gfycat.com/RipeDismalBunny#?speed=2)

A few months ago I picked up a Celeston NextStar SLT mount. Slowly, with 
a huge backlog of things that I should be doing, I have decoded the
serial commands for the two PIC uControllers that run the altitude and azimuth 
motors.  The uC's control the two DC motors that drive a worm and large 
gear to rotate the axis which then through an optical encoder gives feedback 
on the current location for precise motion control.  

Originally I was going to build a full tilt/pan system with steppers, however 
this system is robust enough and much cheaper.  The plan now is to write some
python to pull down Astrometry data to align the scope using a raspberry pi and
a teensy to do the decoding and joystick control.  My longest lens is a 200mm
so I think I can keep the full astrometry catalog at that scale on a sd card
on the pi to do lookups. I think most of my shots will still be with very wide
lenses so I can get away with quick astrometry lookups. So far I have decoded the 
[packet system][packet], but I am failing at grabbing all of the telescope 
responses due to an issue with CTS/RTS flow control, I think.

Nathan was over yesterday so while I was drinking some tea I thought I would 
capture the above time lapse of robotlandia.  I set my camera to take a picture
every 7 seconds, 5 waiting for the system to damp down, and 2 seconds of motion.
During the 2 seconds 15% of the time was moving both axes, and then the other 
85% I moved the azimuth only.  This made for a larger pan and only a small 
vertical motion.  

The camera is not directly aligned to the rotational axes of the alt/az which 
may cause an issue when doing work on the sky, however for now it adds nice 
dynamic motion through the scene.  I will be adjusting my [current mount][mount]
to one with a quick release and possibly a ball head which will make setup easier.

Right now my workflow is contained to the command line.  Odd, I know.  Roughly 
it revolves around [gifsicle][gifsicle] and sips:

    # Resize the images (wrapper around sips that I wrote a while ago)
    # gifsicle now has the ability as you can see to do this as you can see
    # below.
    shrink -r 750 -o small *
    
    # convert to gif
    sips -s format gif ./small/*.JPG --out small
    
    # Combine into a single gif
    gifsicle --resize-height=500 --delay=4 --loop ./small/*.gif >> rotate_small.gif

From here it is off to [gfycat][gfycat] to reticulate the splines into HTML5 video.

Here are some others:

  * [Sunset from my balcony][balcony]
    * 8mm Rokinon fisheye lens adds some fun distortion.
  * [The lights go into the night][lights]
    * 11-16mm Tokina at 16mm set to manual.  Gets dark at the end.
  * [A full rotation last night][rotation]
    * 8mm Rokinon fisheye spinning around the room.  I should get cord wrap working.

<!-- <img height="200" class="gfyitem" data-id="CircularActiveAustraliansilkyterrier" /> -->

[gfycat]:     https://www.gfycat.com/
[packet]:     https://github.com/ajmendez/graffito
[mount]:      https://www.flickr.com/photos/pxddn/14252117420/
[balcony]:    http://www.gfycat.com/ShockedFocusedCuckoo
[rotation]:   http://www.gfycat.com/IllustriousFairInvisiblerail
[room]:       http://www.gfycat.com/CircularActiveAustraliansilkyterrier
[lights]:     http://www.gfycat.com/ImpishSillyKookaburra



