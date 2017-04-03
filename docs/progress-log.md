### Day 1

At first, I thought jInvertScroll would work. It does work as intended, meaning it does scroll horizontally when you move the track pad vertically. However, I wasn't able to figure out how to transition back to vertical again within a reasonable amount of time.

After some digging around and a google search looking up 'scroll path,' I found a jQuery plugin by Joel Besada that might accomplish what I'm wanting to do. I also found a generic code done in jQuery that could possibly accomplish the same goal, but I haven't sat down to parse the code (http://jsfiddle.net/ARTsinn/EaUeF/). Things to note about the plain jQuery version, I would have to make it compatible with arrow keys. The first solution, the scrollpath plugin, could work, but the cons for his plugin is that it requires jQuery 1.7+. This means that if I wanted to migrate my interactive resume onto my jQuery lite, this solution isn't plausible, which makes the second solution ideal, but I'd have to parse through the code.

At the present moment, Joel Besada's plugin seems to be the most straight forward, so in the interest of time, I'll give that a go first.

Also, in my scrolling research, I may have found a good plugin for animating based on scroll position: (http://scrollmagic.io/)

Result of scrollpath:
![ScrollPath][scrollpath]

### Day 2

Next step is to determine how I can record the scroll position everytime I scroll so that at any point, I can specify an animation to take place. As soon as I can confirm this, I'll start implementing a first "panel" of the story. A couple jQuery methods I'm looking into include `.offSet()`, `.scroll()` and `.scrollTop()`.

I've kind of hit a road block in trying to record the scroll position.


[scrollpath]: ./images/scroll-path.gif
