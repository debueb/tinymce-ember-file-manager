# TinyMCE Ember File-Manager

This is an [Ember](http://emberjs.com/) application intended to be used as a file manager for the WYSIWYG HTML Editor [TinyMCE](https://www.tinymce.com/). It currently supports the following:
- images only (image/png, image/jpeg, image/jpg)
- allows for folder browsing and file uploads
- displays preview imagse with image size 

![overview-1](https://raw.githubusercontent.com/debueb/tinymce-ember-file-manager/master/github/file-manager-1.png)
![overview-2](https://raw.githubusercontent.com/debueb/tinymce-ember-file-manager/master/github/file-manager-2.png)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone https://github.com/debueb/tinymce-ember-file-manager.git`
* `cd tinymce-ember-file-manager.git`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying / Integrating into existing website

Since tinymce will most likely already be integrated into your website, we need a way to initialize the Ember app in an existing website.

* `ember build --environment=production`
* copy the generated `dist/*.js` and `dist/*.css` files to your web application
* on the page where you have added tinymce, add the following
    ```html
    <meta name="file-manager/config/environment" content="%7B%22modulePrefix%22%3A%22file-manager%22%2C%22environment%22%3A%22production%22%2C%22rootURL%22%3A%22/%22%2C%22locationType%22%3A%22none%22%2C%22EmberENV%22%3A%7B%22FEATURES%22%3A%7B%7D%7D%2C%22APP%22%3A%7B%22name%22%3A%22file-manager%22%2C%22version%22%3A%220.0.0+117f8b00%22%7D%2C%22ember-cli-mirage%22%3A%7B%22usingProxy%22%3Afalse%2C%22useDefaultPassthroughs%22%3Atrue%7D%2C%22exportApplicationGlobal%22%3Atrue%7D"></meta>
    <div id="file-manager"></div>
    ```
    - The value of the `meta` tag is a url encoded json string that contains initialization info for the ember app. For reference, it url decodes to
    ```json
    {"modulePrefix":"file-manager","environment":"production","rootURL":"/","locationType":"none","EmberENV":{"FEATURES":{}},"APP":{"name":"file-manager","version":"0.0.0 117f8b00"},"ember-cli-mirage":{"usingProxy":false,"useDefaultPassthroughs":true},"exportApplicationGlobal":true}
    ```
    - The `file-manager` div acts as a placeholder in which the ember application will be rendered
* in your `tinymce.init()` call, add the following :
    ```javascript
    file_picker_types: 'image',
    file_picker_callback: function(callback, value, meta) {
        if (meta.filetype === 'image') {
            $('#file-manager').data({
                'basePath': '/admin/files',
                'onFileSelect': function(url){
                    callback(url);
                }
            });
            
            //this will initialize the ember app
            $('head').append('<script src="/filemanager/vendor.js"></script>');
            $('head').append('<script src="/filemanager/file-manager.js"></script>');
            $('head').append('<link href="/filemanager/vendor.css" rel="stylesheet"/>');
            $('head').append('<link href="/filemanager/file-manager.css" rel="stylesheet"/>');
        }
    },
    ```
    `basePath` is the URL to the endpoint that handles file browsing and upload. More specifically, you need to implement these two endpoints:
    - GET `{basePath}/list`, produces `application/json` in the following format
       ```json
        [
            {
                "type": "folder",
                "name": "test folder"
            },
            {
              "type": "file",
              "name": "0807b54693809fc90800b45b77b10a35b6cc59d1cff54ae5970d6d6e27805d0d",
              "url": "https://www.google.de/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
              "fileSize": "6"
            }
        ]
       ```
    - POST `{basePath}/upload`, consumes `multipart/form-data`
        - handles image optimization and persistence for single `file` parameter
        - returns String containing the URL to the image

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
