/*
* The MIT License (MIT)
*
* Copyright (c) 2003-2019 Aspose Pty Ltd
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/

import { expect } from "chai";
import "mocha";
import * as TestContext from "../test_context";
import { TestFile } from "../test_file";
import { GetSupportedConversionTypesRequest, ConvertDocumentRequest, ConvertSettings, DocxConvertOptions } from "../../src/model";

describe("test_conversion_api", () => {
    
    before(async () => {
        process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = "0"
        await TestContext.uploadTestFiles();
    });

    afterEach(async function() {
        await TestContext.cleanupTempFiles();
    });

    describe("test_get_supported_conversion_types", () => {

        it("should return list of supported formats", () => {            
            const api = TestContext.getConversionApi();
            var request = new GetSupportedConversionTypesRequest();
            return api.getSupportedConversionTypes(request)
                .then((result) => {     
                    expect(result.length).greaterThan(0);              
                    for (const format of result) {
                        expect(format.sourceFormat).to.not.equal("");
                        expect(format.targetFormats.length).greaterThan(0);  
                    }
                });
        });
    });

    describe("test_convert_document", () => {

        it("convert document", () => {            
            const api = TestContext.getConversionApi();
            var options = new DocxConvertOptions();
            var settings = new ConvertSettings();
            settings.filePath =TestFile.FourPagesDocx.GetPath();
            settings.format = "pdf";
            settings.outputPath = TestContext.OUT_FOLDER;
            settings.convertOptions = options;
            var request = new ConvertDocumentRequest(settings);
            return api.convertDocument(request)
                .then((result) => {     
                    expect(result.length).equal(1);
                    expect(result[0].size).greaterThan(0);
                });
        });
    });
    
    describe("test_convert_document_download", () => {

        it("convert document download", () => {            
            const api = TestContext.getConversionApi();
            var options = new DocxConvertOptions();
            var settings = new ConvertSettings();
            settings.filePath =TestFile.FourPagesDocx.GetPath();
            settings.format = "pdf";
            settings.convertOptions = options;
            var request = new ConvertDocumentRequest(settings);
            return api.convertDocumentDownload(request)
                .then((result) => {     
                    expect(result.length).greaterThan(0);
                });
        });          
    });
    
});
