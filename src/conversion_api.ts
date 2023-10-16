/*
* The MIT License (MIT)
*
* Copyright (c) 2003-2023 Aspose Pty Ltd
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

import axios = require("axios");
import FormData = require("form-data");
import { addQueryParameterToUrl, invokeApiMethod } from "./api_client";
import { Configuration } from "./configuration";
import * as model from "./model";
import { Serializer } from "./serializer";

export * from "./model";
export * from "./configuration";

/**
 * GroupDocs.Conversion Cloud API 
 */
export class ConvertApi {
    
    /**
     * Creates new instance of ConvertApi
     * @param appSid Application identifier (App SID).
     * @param appKey Application private key (App Key).
     */
    public static fromKeys(appSid: string, appKey: string) {
        const config = new Configuration(appSid, appKey);
        return new ConvertApi(config);
    }

    /**
     * Creates new instance of ConvertApi
     * @param config API configuration.
     */
    public static fromConfig(config: Configuration) {
        return new ConvertApi(config);
    }

    /**
     * Configuration
     */
    private configuration: Configuration;

    /**
     * @param config Configuration.
     */
    private constructor(config: Configuration) {
        this.configuration = config;
    }

    /**
     * Converts specified input document to format specified in the convertSettings with specified options
     * @param requestObj contains request parameters
     */
    public async convertDocument(requestObj: model.ConvertDocumentRequest): Promise<Array<model.StoredConvertedResult>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling convertDocument.');
        }

        const localVarPath = this.configuration.getServerUrl() + "/conversion";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.convertSettings' is not null or undefined
        if (requestObj.convertSettings === null || requestObj.convertSettings === undefined) {
            throw new Error('Required parameter "requestObj.convertSettings" was null or undefined when calling convertDocument.');
        }
        
        const requestOptions: axios.AxiosRequestConfig = {
            method: "POST",
            params: queryParameters,
            url: localVarPath,
            data: Serializer.serialize(requestObj.convertSettings, requestObj.convertSettings.constructor.name === "Object" ? "ConvertSettings" : requestObj.convertSettings.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.data, "Array<StoredConvertedResult>");
        return Promise.resolve(result);
    }

    /**
     * Converts specified input document to format specified in the convertSettings with specified options
     * @param requestObj contains request parameters
     */
    public async convertDocumentDownload(requestObj: model.ConvertDocumentRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling convertDocument.');
        }

        const localVarPath = this.configuration.getServerUrl() + "/conversion";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.convertSettings' is not null or undefined
        if (requestObj.convertSettings === null || requestObj.convertSettings === undefined) {
            throw new Error('Required parameter "requestObj.convertSettings" was null or undefined when calling convertDocument.');
        }        

        const requestOptions: axios.AxiosRequestConfig = {
            method: "POST",
            params: queryParameters,
            url: localVarPath,
            data: Serializer.serialize(requestObj.convertSettings, requestObj.convertSettings.constructor.name === "Object" ? "ConvertSettings" : requestObj.convertSettings.constructor.name),
        };
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.data, "Buffer");
        return Promise.resolve(result);
    }

    /**
     * Converts input document file to format specified
     * @param requestObj contains request parameters
     */
    public async convertDocumentDirect(requestObj: model.ConvertDocumentDirectRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling convertDocumentDirect.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/conversion";
        const queryParameters: any = {};
        const formParams = new FormData();

        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling convertDocumentDirect.');
        }

        // verify required parameter 'requestObj.file' is not null or undefined
        if (requestObj.file === null || requestObj.file === undefined) {
            throw new Error('Required parameter "requestObj.file" was null or undefined when calling convertDocumentDirect.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fromPage", requestObj.fromPage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "pagesCount", requestObj.pagesCount);
        if (requestObj.file !== undefined) {
            formParams.append("File", requestObj.file, { filename: "file.name" });
        }

        if (requestObj.loadOptions !== undefined) {
            formParams.append("loadOptions", JSON.stringify(requestObj.loadOptions));
        }

        if (requestObj.convertOptions !== undefined) {
            formParams.append("convertOptions", JSON.stringify(requestObj.convertOptions));
        }

        const requestOptions: axios.AxiosRequestConfig = {
            method: "PUT",
            params: queryParameters,
            url: localVarPath,
            responseType: "arraybuffer",
            responseEncoding: null,
            data: formParams,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.data, "Buffer");
        return Promise.resolve(result);
    }

}
/**
 * GroupDocs.Conversion Cloud API 
 */
export class FileApi {
    
    /**
     * Creates new instance of FileApi
     * @param appSid Application identifier (App SID).
     * @param appKey Application private key (App Key).
     */
    public static fromKeys(appSid: string, appKey: string) {
        const config = new Configuration(appSid, appKey);
        return new FileApi(config);
    }

    /**
     * Creates new instance of FileApi
     * @param config API configuration.
     */
    public static fromConfig(config: Configuration) {
        return new FileApi(config);
    }

    /**
     * Configuration
     */
    private configuration: Configuration;

    /**
     * @param config Configuration.
     */
    private constructor(config: Configuration) {
        this.configuration = config;
    }

    /**
     * Copy file
     * @param requestObj contains request parameters
     */
    public async copyFile(requestObj: model.CopyFileRequest): Promise<axios.AxiosResponse> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling copyFile.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/conversion/storage/file/copy/{srcPath}"
            .replace("{" + "srcPath" + "}", String(requestObj.srcPath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.srcPath' is not null or undefined
        if (requestObj.srcPath === null || requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was null or undefined when calling copyFile.');
        }

        // verify required parameter 'requestObj.destPath' is not null or undefined
        if (requestObj.destPath === null || requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was null or undefined when calling copyFile.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", requestObj.destPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", requestObj.srcStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", requestObj.destStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);
        const requestOptions: axios.AxiosRequestConfig = {
            method: "PUT",
            params: queryParameters,
            url: localVarPath,
            responseType: "json",
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Delete file
     * @param requestObj contains request parameters
     */
    public async deleteFile(requestObj: model.DeleteFileRequest): Promise<axios.AxiosResponse> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFile.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/conversion/storage/file/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling deleteFile.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);
        const requestOptions: axios.AxiosRequestConfig = {
            method: "DELETE",
            params: queryParameters,
            url: localVarPath,
            responseType: "json",
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Download file
     * @param requestObj contains request parameters
     */
    public async downloadFile(requestObj: model.DownloadFileRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling downloadFile.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/conversion/storage/file/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling downloadFile.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);
        const requestOptions: axios.AxiosRequestConfig = {
            method: "GET",
            params: queryParameters,
            url: localVarPath,
            responseType: "arraybuffer",
            responseEncoding: null,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.data, "Buffer");
        return Promise.resolve(result);
    }

    /**
     * Move file
     * @param requestObj contains request parameters
     */
    public async moveFile(requestObj: model.MoveFileRequest): Promise<axios.AxiosResponse> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling moveFile.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/conversion/storage/file/move/{srcPath}"
            .replace("{" + "srcPath" + "}", String(requestObj.srcPath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.srcPath' is not null or undefined
        if (requestObj.srcPath === null || requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was null or undefined when calling moveFile.');
        }

        // verify required parameter 'requestObj.destPath' is not null or undefined
        if (requestObj.destPath === null || requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was null or undefined when calling moveFile.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", requestObj.destPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", requestObj.srcStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", requestObj.destStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);
        const requestOptions: axios.AxiosRequestConfig = {
            method: "PUT",
            params: queryParameters,
            url: localVarPath,
            responseType: "json",
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Upload file
     * @param requestObj contains request parameters
     */
    public async uploadFile(requestObj: model.UploadFileRequest): Promise<model.FilesUploadResult> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling uploadFile.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/conversion/storage/file/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};
        const formParams = new FormData();

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling uploadFile.');
        }

        // verify required parameter 'requestObj.file' is not null or undefined
        if (requestObj.file === null || requestObj.file === undefined) {
            throw new Error('Required parameter "requestObj.file" was null or undefined when calling uploadFile.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        if (requestObj.file !== undefined) {
            formParams.append("File", requestObj.file, { filename: "file.name" });
        }

        const requestOptions: axios.AxiosRequestConfig = {
            method: "PUT",
            params: queryParameters,
            url: localVarPath,
            responseType: "json",
            data: formParams,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.data, "FilesUploadResult");
        return Promise.resolve(result);
    }

}
/**
 * GroupDocs.Conversion Cloud API 
 */
export class FolderApi {
    
    /**
     * Creates new instance of FolderApi
     * @param appSid Application identifier (App SID).
     * @param appKey Application private key (App Key).
     */
    public static fromKeys(appSid: string, appKey: string) {
        const config = new Configuration(appSid, appKey);
        return new FolderApi(config);
    }

    /**
     * Creates new instance of FolderApi
     * @param config API configuration.
     */
    public static fromConfig(config: Configuration) {
        return new FolderApi(config);
    }

    /**
     * Configuration
     */
    private configuration: Configuration;

    /**
     * @param config Configuration.
     */
    private constructor(config: Configuration) {
        this.configuration = config;
    }

    /**
     * Copy folder
     * @param requestObj contains request parameters
     */
    public async copyFolder(requestObj: model.CopyFolderRequest): Promise<axios.AxiosResponse> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling copyFolder.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/conversion/storage/folder/copy/{srcPath}"
            .replace("{" + "srcPath" + "}", String(requestObj.srcPath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.srcPath' is not null or undefined
        if (requestObj.srcPath === null || requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was null or undefined when calling copyFolder.');
        }

        // verify required parameter 'requestObj.destPath' is not null or undefined
        if (requestObj.destPath === null || requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was null or undefined when calling copyFolder.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", requestObj.destPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", requestObj.srcStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", requestObj.destStorageName);
        const requestOptions: axios.AxiosRequestConfig = {
            method: "PUT",
            params: queryParameters,
            url: localVarPath,
            responseType: "json",
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Create the folder
     * @param requestObj contains request parameters
     */
    public async createFolder(requestObj: model.CreateFolderRequest): Promise<axios.AxiosResponse> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling createFolder.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/conversion/storage/folder/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling createFolder.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: axios.AxiosRequestConfig = {
            method: "PUT",
            params: queryParameters,
            url: localVarPath,
            responseType: "json",
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Delete folder
     * @param requestObj contains request parameters
     */
    public async deleteFolder(requestObj: model.DeleteFolderRequest): Promise<axios.AxiosResponse> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFolder.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/conversion/storage/folder/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling deleteFolder.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "recursive", requestObj.recursive);
        const requestOptions: axios.AxiosRequestConfig = {
            method: "DELETE",
            params: queryParameters,
            url: localVarPath,
            responseType: "json",
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Get all files and folders within a folder
     * @param requestObj contains request parameters
     */
    public async getFilesList(requestObj: model.GetFilesListRequest): Promise<model.FilesList> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFilesList.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/conversion/storage/folder/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling getFilesList.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: axios.AxiosRequestConfig = {
            method: "GET",
            params: queryParameters,
            url: localVarPath,
            responseType: "json",
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.data, "FilesList");
        return Promise.resolve(result);
    }

    /**
     * Move folder
     * @param requestObj contains request parameters
     */
    public async moveFolder(requestObj: model.MoveFolderRequest): Promise<axios.AxiosResponse> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling moveFolder.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/conversion/storage/folder/move/{srcPath}"
            .replace("{" + "srcPath" + "}", String(requestObj.srcPath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.srcPath' is not null or undefined
        if (requestObj.srcPath === null || requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was null or undefined when calling moveFolder.');
        }

        // verify required parameter 'requestObj.destPath' is not null or undefined
        if (requestObj.destPath === null || requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was null or undefined when calling moveFolder.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", requestObj.destPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", requestObj.srcStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", requestObj.destStorageName);
        const requestOptions: axios.AxiosRequestConfig = {
            method: "PUT",
            params: queryParameters,
            url: localVarPath,
            responseType: "json",
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

}
/**
 * GroupDocs.Conversion Cloud API 
 */
export class InfoApi {
    
    /**
     * Creates new instance of InfoApi
     * @param appSid Application identifier (App SID).
     * @param appKey Application private key (App Key).
     */
    public static fromKeys(appSid: string, appKey: string) {
        const config = new Configuration(appSid, appKey);
        return new InfoApi(config);
    }

    /**
     * Creates new instance of InfoApi
     * @param config API configuration.
     */
    public static fromConfig(config: Configuration) {
        return new InfoApi(config);
    }

    /**
     * Configuration
     */
    private configuration: Configuration;

    /**
     * @param config Configuration.
     */
    private constructor(config: Configuration) {
        this.configuration = config;
    }

    /**
     * Returns metadata for provided document
     * @param requestObj contains request parameters
     */
    public async getDocumentMetadata(requestObj: model.GetDocumentMetadataRequest): Promise<model.DocumentMetadata> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentMetadata.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/conversion/info";
        const queryParameters: any = {};
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "filePath", requestObj.filePath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: axios.AxiosRequestConfig = {
            method: "GET",
            params: queryParameters,
            url: localVarPath,
            responseType: "json",
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.data, "DocumentMetadata");
        return Promise.resolve(result);
    }

    /**
     * Returns all supported conversion types
     * @param requestObj contains request parameters
     */
    public async getSupportedConversionTypes(requestObj: model.GetSupportedConversionTypesRequest): Promise<Array<model.SupportedFormat>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSupportedConversionTypes.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/conversion/formats";
        const queryParameters: any = {};
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "filePath", requestObj.filePath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        const requestOptions: axios.AxiosRequestConfig = {
            method: "GET",
            params: queryParameters,
            url: localVarPath,
            responseType: "json",
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.data, "Array<SupportedFormat>");
        return Promise.resolve(result);
    }

}
/**
 * GroupDocs.Conversion Cloud API 
 */
export class LicenseApi {
    
    /**
     * Creates new instance of LicenseApi
     * @param appSid Application identifier (App SID).
     * @param appKey Application private key (App Key).
     */
    public static fromKeys(appSid: string, appKey: string) {
        const config = new Configuration(appSid, appKey);
        return new LicenseApi(config);
    }

    /**
     * Creates new instance of LicenseApi
     * @param config API configuration.
     */
    public static fromConfig(config: Configuration) {
        return new LicenseApi(config);
    }

    /**
     * Configuration
     */
    private configuration: Configuration;

    /**
     * @param config Configuration.
     */
    private constructor(config: Configuration) {
        this.configuration = config;
    }

    /**
     * Get license consumption
     * @param requestObj contains request parameters
     */
    public async getConsumptionCredit(): Promise<model.ConsumptionResult> {

        const localVarPath = this.configuration.getServerUrl() + "/conversion/consumption";
        const queryParameters: any = {};
        
        const requestOptions: axios.AxiosRequestConfig = {
            method: "GET",
            params: queryParameters,
            url: localVarPath,
            responseType: "json",
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.data, "ConsumptionResult");
        return Promise.resolve(result);
    }

    /**
     * Get license information
     * @param requestObj contains request parameters
     */
    public async getLicenseInfo(): Promise<model.LicenseInfo> {

        const localVarPath = this.configuration.getServerUrl() + "/conversion/license";
        const queryParameters: any = {};
        
        const requestOptions: axios.AxiosRequestConfig = {
            method: "GET",
            params: queryParameters,
            url: localVarPath,
            responseType: "json",
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.data, "LicenseInfo");
        return Promise.resolve(result);
    }

}
/**
 * GroupDocs.Conversion Cloud API 
 */
export class StorageApi {
    
    /**
     * Creates new instance of StorageApi
     * @param appSid Application identifier (App SID).
     * @param appKey Application private key (App Key).
     */
    public static fromKeys(appSid: string, appKey: string) {
        const config = new Configuration(appSid, appKey);
        return new StorageApi(config);
    }

    /**
     * Creates new instance of StorageApi
     * @param config API configuration.
     */
    public static fromConfig(config: Configuration) {
        return new StorageApi(config);
    }

    /**
     * Configuration
     */
    private configuration: Configuration;

    /**
     * @param config Configuration.
     */
    private constructor(config: Configuration) {
        this.configuration = config;
    }

    /**
     * Get disc usage
     * @param requestObj contains request parameters
     */
    public async getDiscUsage(requestObj: model.GetDiscUsageRequest): Promise<model.DiscUsage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDiscUsage.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/conversion/storage/disc";
        const queryParameters: any = {};
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: axios.AxiosRequestConfig = {
            method: "GET",
            params: queryParameters,
            url: localVarPath,
            responseType: "json",
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.data, "DiscUsage");
        return Promise.resolve(result);
    }

    /**
     * Get file versions
     * @param requestObj contains request parameters
     */
    public async getFileVersions(requestObj: model.GetFileVersionsRequest): Promise<model.FileVersions> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFileVersions.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/conversion/storage/version/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling getFileVersions.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: axios.AxiosRequestConfig = {
            method: "GET",
            params: queryParameters,
            url: localVarPath,
            responseType: "json",
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.data, "FileVersions");
        return Promise.resolve(result);
    }

    /**
     * Check if file or folder exists
     * @param requestObj contains request parameters
     */
    public async objectExists(requestObj: model.ObjectExistsRequest): Promise<model.ObjectExist> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling objectExists.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/conversion/storage/exist/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling objectExists.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);
        const requestOptions: axios.AxiosRequestConfig = {
            method: "GET",
            params: queryParameters,
            url: localVarPath,
            responseType: "json",
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.data, "ObjectExist");
        return Promise.resolve(result);
    }

    /**
     * Check if storage exists
     * @param requestObj contains request parameters
     */
    public async storageExists(requestObj: model.StorageExistsRequest): Promise<model.StorageExist> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling storageExists.');
        }

        const localVarPath = this.configuration.getServerUrl() + "/conversion/storage/{storageName}/exist"
            .replace("{" + "storageName" + "}", String(requestObj.storageName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.storageName' is not null or undefined
        if (requestObj.storageName === null || requestObj.storageName === undefined) {
            throw new Error('Required parameter "requestObj.storageName" was null or undefined when calling storageExists.');
        }
        
        const requestOptions: axios.AxiosRequestConfig = {
            method: "GET",
            params: queryParameters,
            url: localVarPath,
            responseType: "json",
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.data, "StorageExist");
        return Promise.resolve(result);
    }

}
