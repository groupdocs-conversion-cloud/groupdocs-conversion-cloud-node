# GroupDocs.Conversion Cloud Node.js SDK

This repository contains GroupDocs.Conversion Cloud SDK for Node.js source code. This SDK has been developed to help you get started with using our document conversion REST API, allowing to seamlessly convert your documents to any format you need. With this single API, you can convert back and forth between over 50 types of documents and images, including all Microsoft Office and OpenDocument file formats, PDF documents, HTML, CAD, raster images and many more.

## Installation

A package `groupdocs-conversion-cloud` is available at [npmjs.com](https://www.npmjs.com/package/groupdocs-conversion-cloud). You can install it with:

```shell
npm install groupdocs-conversion-cloud
```

### Create an account
Creating an account is very simple. Go to Dashboard to create a free account.
We’re using Single Sign On across our websites, therefore, if you already have an account with our services, you can use it to also access the [Dashboard](https://dashboard.groupdocs.cloud).

### Create an API client app
Before you can make any requests to GroupDocs Cloud API you need to get a Client Id and a Client Secret. This will be used to invoke GroupDocs Cloud API. You can get it by creating a new [Application](https://dashboard.groupdocs.cloud/applications).

## Convert document

```js
"use strict";
global.conversion_cloud = require("groupdocs-conversion-cloud");
global.fs = require("fs");

global.clientId = "XXXX-XXXX-XXXX-XXXX";
global.clientSecret = "XXXXXXXXXXXXXXXX";

const config = new conversion_cloud.Configuration(clientId, clientSecret);
config.apiBaseUrl = "https://api.groupdocs.cloud";

global.convertApi = conversion_cloud.ConvertApi.fromConfig(config);

(async () => {
    let file = fs.readFileSync('./myFile.docx');
    let request = new conversion_cloud.ConvertDocumentDirectRequest("pdf", file);
    let result = await convertApi.convertDocumentDirect(request);
    console.log("Document converted: " + result.length);
})();
```

## Convert document using cloud storage

```js
"use strict";
global.conversion_cloud = require("groupdocs-conversion-cloud");
global.fs = require("fs");

global.clientId = "XXXX-XXXX-XXXX-XXXX";
global.clientSecret = "XXXXXXXXXXXXXXXX";

const config = new conversion_cloud.Configuration(clientId, clientSecret);
config.apiBaseUrl = "https://api.groupdocs.cloud";

global.convertApi = conversion_cloud.ConvertApi.fromConfig(config);
global.fileApi = conversion_cloud.FileApi.fromConfig(config);

(async () => {
    // Upload file to cloud storage
    let file = fs.readFileSync('./myFile.docx');
    var uploadRequest = new conversion_cloud.UploadFileRequest("myFile.docx", file);
    await fileApi.uploadFile(uploadRequest);

    // Convert
    let settings = new conversion_cloud.ConvertSettings();
    settings.filePath = "myFile.docx";
    settings.format = "pdf";
    settings.outputPath = "converted";

    let result = await convertApi.convertDocument(new conversion_cloud.ConvertDocumentRequest(settings));
    console.log("Document converted: " + result[0].url);

    // Download result
    var response = await fileApi.downloadFile(new conversion_cloud.DownloadFileRequest("converted/myFile.pdf", null))
    console.log("Expected response type is Stream: " + response.length);
})();
```


## Licensing

GroupDocs.Conversion Cloud Node.js SDK licensed under [MIT License](LICENSE).

## Resources
+[**Website**](https://www.groupdocs.cloud)
+[**Product Home**](https://products.groupdocs.cloud/conversion)
+[**Documentation**](https://docs.groupdocs.cloud/conversion)
+[**Free Support Forum**](https://forum.groupdocs.cloud/c/conversion)
+[**Blog**](https://blog.groupdocs.cloud/category/conversion)

## Contact Us

Your feedback is very important to us. Please feel free to contact us using our [Support Forums](https://forum.groupdocs.cloud/c/conversion).
