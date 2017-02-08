export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */

  this.namespace = '/admin/files';
  this.timing = 500;

  this.post('/upload', function(){
      return "/image/bla";
  });

  this.get('/list', function(db, request) {
    if (request.queryParams.path === 'summernoteImages'){
      return [
        {"type": "folder",
        "name": "test folder"},
            {
              "type": "file",
              "name": "0807b54693809fc90800b45b77b10a35b6cc59d1cff54ae5970d6d6e27805d0d",
              "url": "https://www.google.de/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
              "fileSize": "6"
            },
            {
              "type": "file",
              "name": "092eca2085616fbd81d3cf1ea2d4b0e16df6319b31391602764b9055f61cff9e",
              "url": "https://www.google.de/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
              "fileSize": "155"
            },
            {
              "type": "file",
              "name": "0a73a9b0e972181789dfec5ce1d5aa9250d59c80aaac8c4f32eb873fb511d5c8",
              "url": "https://www.google.de/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
              "fileSize": "84"
            },
            {
              "type": "file",
              "name": "1307727551aba667c69a3c4a9e1efdb4e0159c07d3789063e891cc8ab79131bc",
              "url": "https://www.google.de/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
              "fileSize": "242"
            },
            {
              "type": "file",
              "name": "2686ef35d14c25a9ae66a795c1054b93dd57d085e2375212117ebacedf563c49",
              "url": "https://www.google.de/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
              "fileSize": "166"
            },
            {
              "type": "file",
              "name": "28cb1da82015c3c1a3a9873eb2837a5d33a14452a1ae36da582007a680defb51",
              "url": "https://www.google.de/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
              "fileSize": "27"
            },
            {
              "type": "file",
              "name": "2f0e26920ba84dac6b7d9136570c9b428bf0d5722e17dbb3eb77d6e3e118ff43",
              "url": "https://www.google.de/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
              "fileSize": "56"
            },
            {
              "type": "file",
              "name": "310f53c9d3987aa7f28f68c471f43cab1c3cc8c1d67bcc6d072d6cf825c90641",
              "url": "https://www.google.de/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
              "fileSize": "35"
            },
            {
              "type": "file",
              "name": "392ff51569d4a6f7f438bbdc79d5ffa817477815b9caf27a036becbf9f18592b",
              "url": "https://www.google.de/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
              "fileSize": "42"
            },
            {
              "type": "file",
              "name": "3a60212c8fc5c55e098b819aa207c48e4b0033a26b4faa87c831122c92510c8f",
              "url": "https://www.google.de/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
              "fileSize": "66"
            },
            {
              "type": "file",
              "name": "3f8eb45fd17949e934b8d1446fec5d8de8b6e23941d610ae8a35e08421376756",
              "url": "https://www.google.de/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
              "fileSize": "36"
            },
            {
              "type": "file",
              "name": "52946d53c2ad0b72d96fb8778fbde460ba6351e37bfd55734f3b9f53c3a7cfc5",
              "url": "https://www.google.de/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
              "fileSize": "2"
            },
            {
              "type": "file",
              "name": "55216d22a0b47fc59a4212267a24dac44010e5bbf7130bdfb3939fa550b93449",
              "url": "https://www.google.de/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
              "fileSize": "54"
            },
            {
              "type": "file",
              "name": "5e35fa75afe8e3b64d417dd725c87fe2c555f6382adf383b219002d31e3d591d",
              "url": "https://www.google.de/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
              "fileSize": "89"
            },
            {
              "type": "file",
              "name": "6638d409fe099b5f2f37c3c0c11d78adc7d6e0cfd3a124db1171339f1943ab9c",
              "url": "https://www.google.de/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
              "fileSize": "72"
            },
            {
              "type": "file",
              "name": "72c6ac4399868a20160609bcc4f252563cf46fdfd7f0c396f9ec99d8fde330b1",
              "url": "https://www.google.de/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
              "fileSize": "35"
            },
            {
              "type": "file",
              "name": "80d734605f7697da95a7440436883a6d10221db8d0be9abadfd332a0346be20b",
              "url": "https://www.google.de/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
              "fileSize": "19"
            },
            {
              "type": "file",
              "name": "866c400c9e6705daa35b20ce64b4ed22a8c8fe3c59dacf71be644d7d3663c4c2",
              "url": "https://www.google.de/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
              "fileSize": "1"
            },
            {
              "type": "file",
              "name": "88819d89ac583eb17f7f51221f670e4e6c8003c0547c2746614774a3a808647c",
              "url": "https://www.google.de/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
              "fileSize": "22"
            },
            {
              "type": "file",
              "name": "89adf8aa01f0abaa1f8e02c46c4b84a4dcd43bb3408e7a4c02891ed5095d9798",
              "url": "https://www.google.de/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
              "fileSize": "31"
            },
            {
              "type": "file",
              "name": "9df846f9d734a7a6144fb7f24e083ee8db1359d968770dc115d7444dd73e4277",
              "url": "https://www.google.de/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
              "fileSize": "47"
            },
            {
              "type": "file",
              "name": "dfaa3a91947bdf2acae9ce1ae5cc10144ba8da39d35d0a3ed9489e1b2c33bfe2",
              "url": "https://www.google.de/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
              "fileSize": "99"
            },
            {
              "type": "file",
              "name": "e60c2acbeb7ed972514457c49ecfbaed0a5ad76253be3593e673bbd6cd7c4f42",
              "url": "https://www.google.de/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
              "fileSize": "2"
            },
            {
              "type": "file",
              "name": "f15517fe90a65b4ae1a9895d614caa466ed0cac3fcbc7462242db5aaedae91b5",
              "url": "https://www.google.de/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
              "fileSize": "111"
            },
            {
              "type": "file",
              "name": "f5b1d5707abc1ef6be34682c85e2105b802a901b9c6431cf58e1d6b7f7a95e46",
              "url": "https://www.google.de/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
              "fileSize": "129"
            },
            {
              "type": "file",
              "name": "fb5776671685f5d4e0b72f31a1f1a2898a4c21d4e688958c0756db50d02b156e",
              "url": "https://www.google.de/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
              "fileSize": "17"
            },
            {
              "type": "file",
              "name": "feed673dada3da01433a01b96b172e7e52212fa27f39185cca02535355fc7e0f",
              "url": "https://www.google.de/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
              "fileSize": "131"
            }
        ];
    } else if (request.queryParams.path) {
      return [{
            "type": "file",
            "name": "feed673dada3da01433a01b96b172e7e52212fa27f39185cca02535355fc7e0f",
            "url": "https://www.google.de/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
            "fileSize": "131"
          }
      ];
    } else {
    return [
      {
        "type": "folder",
        "name": "cloudflare",
        "url": null,
        "fileSize": null
      },
      {
        "type": "folder",
        "name": "images",
        "url": null,
        "fileSize": null
      },
      {
        "type": "folder",
        "name": "css",
        "url": null,
        "fileSize": null
      },
      {
        "type": "folder",
        "name": "less",
        "url": null,
        "fileSize": null
      },
      {
        "type": "folder",
        "name": "maintenance",
        "url": null,
        "fileSize": null
      },
      {
        "type": "folder",
        "name": "Test 123",
        "url": null,
        "fileSize": null
      },
      {
        "type": "folder",
        "name": "test 123",
        "url": null,
        "fileSize": null
      },
      {
        "type": "folder",
        "name": "adfa",
        "url": null,
        "fileSize": null
      },
      {
        "type": "folder",
        "name": "profilePictures",
        "url": null,
        "fileSize": null
      },
      {
        "type": "folder",
        "name": "staffImages",
        "url": null,
        "fileSize": null
      },
      {
        "type": "folder",
        "name": "summernoteImages",
        "url": null,
        "fileSize": null
      },
      {
        "type": "folder",
        "name": "touchIconImages",
        "url": null,
        "fileSize": null
      },
      {
        "type": "folder",
        "name": "asdfaaa",
        "url": null,
        "fileSize": null
      },
      {
        "type": "folder",
        "name": "asdfff",
        "url": null,
        "fileSize": null
      }
    ];
  }
  });
}
