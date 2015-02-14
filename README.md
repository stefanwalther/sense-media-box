# Media Box for Qlik Sense
Include web pages, videos, images and much more into your Qlik Sense app.


# Note, work is not finished yet ... stay tuned ...

---
---

## Purpose and Description

The idea of this extension is to bundle the usage of several media-types into one Visualization Extension to be used within Qlik Sense.

As of now the following media types are supported:
* Video
* Web sites
* Images

## Screenshots

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

#### Media type _Website_

#### Media type _Image_

#### Media type _Video_

## Contributing
Contributing to this project is welcome. The process to do so is outlined below:

1. Create a fork of the project
2. Work on whatever bug or feature you wish
3. Create a pull request (PR)

I cannot guarantee that I will merge all PRs but I will evaluate them all.

## Roadmap & Todos

**Media type _Website_**
- [ ] Allow the user to select the [security settings for the embedded website](http://www.w3schools.com/tags/att_iframe_sandbox.asp) (now hardcoded)

**Media type _Image_**
- [ ] Aspect ratio for the image

**Media type _Video_**

## Author

**Stefan Walther**
* http://www.yourwebsite.com
* http://github.com/yourname


## Change Log

See [CHANGELOG.md](CHANGELOG.md)

## License & Copyright
The software is made available "AS IS" without any warranty of any kind under the MIT License (MIT).

See [Additional license information for this solution.](LICENSE.md)
