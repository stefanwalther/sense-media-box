# Media Box for Qlik Sense

> Include web pages, videos, images and much more into your Qlik Sense app.

![](http://serve.mod.bz/branch/)

***

## Table of Contents

<!-- toc -->

***

## Purpose and Description

The idea of this solution is to bundle the usage of several media-types into one Visualization Extension to be used within Qlik Sense.

As of now the following media types are currently supported:

* HTML (+CSS)
* Images
* Video
* Web sites

## Screenshots

### HTML

![](https://raw.githubusercontent.com/stefanwalther/qsMediaBox/master/docs/images/qsMediaBox_Html.png)

### Image

![](https://raw.githubusercontent.com/stefanwalther/qsMediaBox/master/docs/images/qsMediaBox_Image.png)

### Video

![](https://raw.githubusercontent.com/stefanwalther/qsMediaBox/master/docs/images/qsMediaBox_Video_MP4.png)

### Website

![](https://raw.githubusercontent.com/stefanwalther/qsMediaBox/master/docs/images/qsMediaBox_WebSite.png)

## Installation

1. Download the [latest version](https://github.com/stefanwalther/qsMediaBox/raw/master/build/MediaBox_latest.zip)
2. Qlik Sense Desktop
  - To install, copy all files in the .zip file to folder "C:\Users%USERNAME%\Documents\Qlik\Sense\Extensions\MediaBox"
* Qlik Sense Server
  - See instructions [how to import an extension on Qlik Sense Server](http://help.qlik.com/sense/en-US/online/#../Subsystems/Qlik_Management_Console_help/Content/QMC_Resources_Extensions_AddingExtensions.htm?Highlight=extension)

## Configuration

After installing the Visualization Extension and dropping it onto a sheet in Qlik Sense follow these steps:

### 1. Define the media type

Depending on the selected media type you'll then see different options in the property panel:

#### Media type _Html_

| Property | Description | Example | 
|  | **HTML**
 | Define either inline HTML or reference to a field | `=only(HTML)`<br/>or<br/>`='<div style="font-weight:bold;">inline HTML</div>'` |

_Example:_

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

```=only(HTML)
```
#### Media type _Image_

| Property | Description | Values | 
|  | **Image Source (Url)**
 | Define the Url for the image to be embedded |

#### Media type _Video_

| Property | Description | Values | 
|  | **Video type**
 | Define the type of the video to be embedded | Possible types:<br/>`MP4` - Any valid Url to a MP4 video (e.g. )<br/> |
|  | **Video poster image**
 | Define the preview image for the video |
|  | **Video Url**
 | Url to the video |

#### Media type _Website_

| Property | Description | Values | 
|  | **Web site (Url)**
 | Url of the website to be embedded | Any valid website Url |
|  | **Scrollbars**
 | Behavior of scrollbars | `Auto` - <br/>`Always On` - <br/>`Always Hidden` - |
|  | **Interaction**
 | Define whether interaction with the website should be possible or not | (Default: `Off`) |

## Contributing

Contributing to this project is welcome. The process to do so is outlined below:

1. Create a fork of the project
2. Work on whatever bug or feature you wish
3. Create a pull request (PR)

I cannot guarantee that I will merge all PRs but I will evaluate them all.

## Testing the visualization extension

Here are some samples how to test if the MediaBox works for you:

**Image:**

http://video-js.zencoder.com/oceans-clip.png

**Video:**

Video poster image: http://video-js.zencoder.com/oceans-clip.png

Video source: http://video-js.zencoder.com/oceans-clip.mp4

## Roadmap & Todos

The following features are planned to be implemented:

**Media type _HTML_**

* [ ] Allow definition of an external style-sheet

**Media type _Website_**

* [ ] Allow the user to select the [security settings for the embedded website](http://www.w3schools.com/tags/att_iframe_sandbox.asp) (now hardcoded)
* [ ] Display an error if a website doesn't allow to be embedded, e.g. http://www.google.com

**Media type _Image_**

* [ ] Settings to control the images' aspect ratio
* [ ] Vertical alignment

**Media type _Video_**

* [ ] Support for Video type _YouTube_

* [ ] Support for Video type _Vimeo_

* [X] Support for a preview image

Any further ideas, please let me know!

## Known Issues

* Video doesn't work in Qlik Sense Desktop but in local browser or Qlik Sense server.

## Author

**Stefan Walther**

+ [qliksite.io](http://qliksite.io)
* [twitter/waltherstefan](http://twitter.com/waltherstefan)
* [github.com/stefanwalther](http://github.com/stefanwalther)

## Change Log

See [CHANGELOG](CHANGELOG.yml)

## License & Copyright

The software is made available "AS IS" without any warranty of any kind under the MIT License (MIT).

See [Additional license information for this solution.](LICENSE.md)