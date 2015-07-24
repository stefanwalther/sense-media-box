After installing the Visualization Extension and dropping it onto a sheet in Qlik Sense follow these steps:

### Define the media type

Depending on the selected media type you'll then see different options in the property panel:

#### Media type _Html_

* **HTML** - Define either inline HTML or reference to a field  
Example:  
`=only(HTML)`<br/>or<br/>`='<div style="font-weight:bold;">inline HTML</div>'`


*Example:*

```bash
Html:
LOAD * INLINE [
    HTML, HtmlAsset
    'This is some <b>bold</b> test', 'Some Html'
    'This is another test<br/><br/>with breaks<br/>and<br/>another break', 'Some Html with breaks'
    '<div style="font-weight:bold;color:red;">Inline style</div>', 'Some Html with inline style'
];
```

then use

```bash
=only(HTML)
```


#### Media type _Image_

* **Image Source (Url)** - Define the Url for the image to be embedded

#### Media type _Video_

* **Video type** - Define the type of the video to be embedded, possible values: `MP4` 
* **Video poster image** - Define the preview image for the video, possible values: any valid URL to a .png/.jpeg file
* **Video Url** - Url to the video 

#### Media type _Website_

* **Web site (Url)** - Url of the website to be embedded, any valid website Url
* **Scrollbars** - Behavior of scrollbars, `Auto`, `Always On`
* **Interaction** - Define whether interaction with the website should be possible or not, defaults to `Off`

### Testing the visualization extension

Here are some samples how to test if the MediaBox works for you:

**Image:**  
http://video-js.zencoder.com/oceans-clip.png  

**Video:**  
Video poster image: http://video-js.zencoder.com/oceans-clip.png  
Video source: http://video-js.zencoder.com/oceans-clip.mp4  