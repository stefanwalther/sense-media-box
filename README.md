# Media Box for Qlik Sense
Include web pages, videos, images and much more into your Qlik Sense app.

## Purpose and Description

The idea of this solution is to bundle the usage of several media-types into one Visualization Extension to be used within Qlik Sense.

As of now the following media types are currently supported:
* Video
* Web sites
* Images

## Screenshots

### Image



### Video

### Website

## Installation

1. Download the latest version
2. Qlik Sense Desktop
	* To install, copy all files in the .zip file to folder "C:\Users\%USERNAME%\Documents\Qlik\Sense\Extensions\MediaBox"
3. Qlik Sense Server
	* See instructions [how to import an extension on Qlik Sense Server](http://help.qlik.com/sense/en-US/online/#../Subsystems/Qlik_Management_Console_help/Content/QMC_Resources_Extensions_AddingExtensions.htm?Highlight=extension)

## Configuration

After installing the Visualization Extension and dropping it onto a sheet in Qlik Sense follow these steps:

### 1. Define the media type

Depending on the selected media type you'll then see different options in the property panel:

#### Media type _Image_

Property 				| Description 						| Values
-----------------------	| ---------------------------------	| --------------------------
**Image Source (Url)**	| 

#### Media type _Video_

Property 				| Description 						| Values
-----------------------	| ---------------------------------	| --------------------------
**Video type**			| Define the type of the video to be embedded | Possible types:<br/>`MP4` - Any valid Url to a MP4 video (e.g. )<br/>
**Video preview**		| Define the preview image for the video	|

#### Media type _Website_

Property 				| Description 						| Values
-----------------------	| ---------------------------------	| --------------------------
**Web site (Url)** 		| Url of the website to be embedded	| Any valid website Url
**Scrollbars**			| Behavior of scrollbars			| `Auto` - <br/>`Always On` - <br/>`Always Hidden` - 
**Interaction**			| Define whether interaction with the website should be possible or not	| (Default: `Off`)


## Contributing
Contributing to this project is welcome. The process to do so is outlined below:

1. Create a fork of the project
2. Work on whatever bug or feature you wish
3. Create a pull request (PR)

I cannot guarantee that I will merge all PRs but I will evaluate them all.

## Roadmap & Todos

The following features are planned to be implemented:

**Media type _Website_**
- [ ] Allow the user to select the [security settings for the embedded website](http://www.w3schools.com/tags/att_iframe_sandbox.asp) (now hardcoded)

**Media type _Image_**
- [ ] Settings to control the images' aspect ratio

**Media type _Video_**
- [ ] Support for Video type _YouTube_
- [ ] Support for Video type _Vimeo_
- [X] Support for a preview image

Any further ideas, please let me know!

## Author

**Stefan Walther**
* [qlikblog.at](http://www.qlikblog.at)
* [twitter/waltherstefan](http://twitter.com/waltherstefan)
* [github.com/stefanwalther](http://github.com/stefanwalther)


## Change Log

See [CHANGELOG.md](CHANGELOG.md)

## License & Copyright
The software is made available "AS IS" without any warranty of any kind under the MIT License (MIT).

See [Additional license information for this solution.](LICENSE.md)
