/*
* The MIT License (MIT)
*
* Copyright (c) 2003-2021 Aspose Pty Ltd
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
import { GetSupportedConversionTypesRequest,
        GetDocumentMetadataRequest,
        ConvertDocumentRequest,
        ConvertDocumentDirectRequest,
        ConvertSettings,
        PdfConvertOptions,
        JpgConvertOptions } from "../../src/model";

describe("test_conversion_api", () => {
    
    before(async () => {
        process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = "0"
        await TestContext.uploadTestFiles();
    });

    afterEach(async function() {
        await TestContext.cleanupTempFiles();
    });

    describe("test_get_document_metadata", () => {

        it("should return document metadata", () => {            
            const api = TestContext.getInfoApi();
            var request = new GetDocumentMetadataRequest(TestFile.FourPagesDocx.GetPath());
            return api.getDocumentMetadata(request)
                .then((result) => {     
                    expect(result.pageCount).equal(4);
                });
        });
    });

    it("test_get_info_returns_file_not_found", async () => {
        try {
            let response = await TestContext.getInfoApi().getDocumentMetadata(new GetDocumentMetadataRequest(TestFile.NotExist.GetPath()));
            expect(response.pageCount).equal(1);
        } catch (error) {
            expect(error.message).to.be.a('string').and.satisfy((msg: string) => msg.startsWith('AmazonS3 Storage exception: The specified key does not exist.'));
        }
    });                 

    describe("test_get_supported_conversion_types", () => {

        it("should return list of supported formats", () => {            
            const api = TestContext.getInfoApi();
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
            const api = TestContext.getConvertApi();
            var options = new JpgConvertOptions();
            var settings = new ConvertSettings();
            settings.filePath = TestFile.FourPagesDocx.GetPath();
            settings.format = "jpg";
            settings.outputPath = TestContext.OUT_FOLDER;
            settings.convertOptions = options;
            var request = new ConvertDocumentRequest(settings);
            return api.convertDocument(request)
                .then((result) => {     
                    expect(result.length).equal(4);
                    expect(result[0].size).greaterThan(0);
                });
        });
    });
    
    describe("test_convert_document_download", () => {

        it("convert document download", () => {            
            const api = TestContext.getConvertApi();
            var options = new PdfConvertOptions();
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
    
    describe("test_convert_document_direct", () => {

        it("convert document direct", () => {            
            const api = TestContext.getConvertApi();
            var format = "pdf";
            let filebuf = TestContext.getTestFileBuffer(TestFile.FourPagesDocx);

            var request = new ConvertDocumentDirectRequest(format, filebuf);
            return api.convertDocumentDirect(request)
                .then((result) => {     
                    expect(result.length).greaterThan(0);
                });
        });          
    });

});
