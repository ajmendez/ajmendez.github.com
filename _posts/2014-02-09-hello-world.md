---
layout: post
title:  "Hello World"
date:   2014-02-09 16:26:33
categories: site update
---

Rather than just starting this blog off with "hello world" and calling it good, I thought I would try something a bit different.
On each github user profile there is a calendar that highlights the user's public contributions to different projects as a grid of pixels that roughly spans a year.
My [github account][github] looks like the following, and mainly contains a grid of pixels that is an empty canvas ripe for artful commits.

![github contributions]({{ site.baseurl }}/assets/helloworld_github.png)

So I hacked together [visual git][visgit], a simple script that uses the GitHub API to commit a file on specific days to write messages on the github contribution calendar.
There are three main steps in the creation of the below hello world pixel banner.
First convert a string of text into set of binary pixel locations with some offsets.
Second, use these pixels to determine which dates to preform commits.
Third, for each of these dates, make a commit to a repo.
The results are committed to the [DangerZone][dangerzone]

![Hello World]({{ site.baseurl }}/assets/helloworld_finished.png) 


After writing this script, I found a number of projects (e.g. [Gitfiti][gitfiti], [GitHubp Profile Cheat][gpc]) that do something similar, but generally at the git level.
This project does not compete with these projects, and mainly just a fun weekend project.
I think that I could clean up the code a bit to turn it into a nice example of using the github api to make a commit like [Pithub][pithub].  


[visgit]:     https://github.com/ajmendez
[visgit]:     https://github.com/ajmendez/visualgit
[gitfiti]:    https://github.com/gelstudios/gitfiti
[gpc]:        https://github.com/will/githubprofilecheat
[pithub]:     http://www.pqpq.de/2011/07/pithub-how-to-commit-new-file-via.html
[dangerzone]: https://github.com/pxddn