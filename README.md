# GroupDocs.Conversion Cloud Node.js SDK
Node.js module for communicating with the GroupDocs.Conversion Cloud API

## Installation

A package `groupdocs-conversion-cloud` is available at [npmjs.com](https://www.npmjs.com/package/groupdocs-conversion-cloud). You can install it with:

```shell
npm install groupdocs-conversion-cloud
```    

## Getting Started

Please follow the [installation](#installation) procedure and then run the following JavaScript code:

```js
// load the module
var GroupDocs = require('groupdocs-conversion-cloud');

// get your appSid and appKey at https://dashboard.groupdocs.cloud (free registration is required).
var appSid = "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX";
var appKey = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

// construct ConversionApi
var conversionApi = GroupDocs.ConversionApi.fromKeys(appSid, appKey);
var request = new GroupDocs.GetSupportedConversionTypesRequest();
// retrieve supported conversion types
conversionApi.getSupportedConversionTypes(request)
    .then(function (response) {
        console.log("Supported file-formats:")
        response.forEach(function (format) {
            console.log(format.sourceFormat + ": [" + format.targetFormats.join(", ") + "]");
        });
    })
    .catch(function (error) {
        console.log("Error: " + error.message)
    });
```

Or compile and run same written in TypeScript:

```ts
// load the module
import { ConversionApi, GetSupportedConversionTypesRequest } from "groupdocs-conversion-cloud";

// get your appSid and appKey at https://dashboard.groupdocs.cloud (free registration is required).
const appSid: string = "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX";
const appKey: string = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

// construct ConversionApi
const conversionApi: ConversionApi = ConversionApi.fromKeys(appSid, appKey);

const request: GetSupportedConversionTypesRequest = new GetSupportedConversionTypesRequest();

// retrieve supported file-formats
conversionApi.getSupportedConversionTypes(request)
    .then((result) => {
        console.log("Supported file-formats:");
        result.forEach((format) => {
            console.log(format.sourceFormat + ": [" + format.targetFormats.join(", ") + "]");
        });
    })
    .catch((error) => {
        console.log("Error: " + error.message);
    });
```


## Licensing
GroupDocs.Conversion Cloud Node.js SDK licensed under [MIT License](LICENSE).

## Resources
+ [**Website**](https://www.groupdocs.cloud)
+ [**Product Home**](https://products.groupdocs.cloud/conversion)
+ [**Documentation**](https://docs.groupdocs.cloud/display/conversioncloud/Home)
+ [**Free Support Forum**](https://forum.groupdocs.cloud/c/conversion)
+ [**Blog**](https://blog.groupdocs.cloud/category/conversion)

## Contact Us
Your feedback is very important to us. Please feel free to contact us using our [Support Forums](https://forum.groupdocs.cloud/c/conversion).