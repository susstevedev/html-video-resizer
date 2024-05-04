# html-video-resizer
Resizes HTML5 video via Javascript and classnames.

# Setup
Download the `video_resizer.js` and `video_resizer.css`, then link them like so: 
`<link rel="stylesheet" href="video_resizable.css">` 
`<script src="video_resizable.js"></script>` 
Now you can add your video. Use the ID `video`. Example: 
`<video width="320" height="240" controls id="video" class="hover round"> 
    <source src="video.mp4" type="video/mp4"> 
</video>` 
Then, add an HTML `range` element with the id of `slider`. Example: 
`<input type='range' class="round" min='10' max='1000' step='10' id='slider' value='10' />` 
Next make a button with an onclick attribute of `vid()`. Example: 
`<button class="hover round" onclick="vid();">Resize</button>` 

Okay, so now it should all look something like this: 
```
<link rel="stylesheet" href="video_resizable.css"> 
<script src="video_resizable.js"></script> 
	<video width="320" height="240" controls id="video" class="hover round"> 
		<source src="video.mp4" type="video/mp4"> 
	</video> 
<input type='range' class="round" min='10' max='1000' step='10' id='slider' value='10' /> 
<button class="hover round" onclick="vid();">Resize</button> 
```

# Enjoy!
HTML video resizing was hard; until now! Enjoy!
