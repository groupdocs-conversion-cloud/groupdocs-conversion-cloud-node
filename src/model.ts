/*
* The MIT License (MIT)
*
* Copyright (c) Aspose Pty Ltd
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

// tslint:disable: completed-docs
export class ApiError {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "code",
            baseName: "code",
            type: "string",
        },        
        {
            name: "message",
            baseName: "message",
            type: "string",
        },        
        {
            name: "description",
            baseName: "description",
            type: "string",
        },        
        {
            name: "dateTime",
            baseName: "dateTime",
            type: "Date",
        },        
        {
            name: "innerError",
            baseName: "innerError",
            type: "ApiError",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ApiError.attributeTypeMap;
    }

    public code: string;
    
    public message: string;
    
    public description: string;
    
    public dateTime: Date;
    
    public innerError: ApiError;
    
    public constructor(init?: Partial<ApiError>) {
        
        Object.assign(this, init);
    }        
}

// tslint:disable: completed-docs
export class ApiErrorResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "requestId",
            baseName: "requestId",
            type: "string",
        },        
        {
            name: "error",
            baseName: "error",
            type: "ApiError",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ApiErrorResponse.attributeTypeMap;
    }

    public requestId: string;
    
    public error: ApiError;
    
    public constructor(init?: Partial<ApiErrorResponse>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Metered license consumption information
 */
// tslint:disable: completed-docs
export class ConsumptionResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "credit",
            baseName: "credit",
            type: "number",
        },        
        {
            name: "quantity",
            baseName: "quantity",
            type: "number",
        },        
        {
            name: "billedApiCalls",
            baseName: "billedApiCalls",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ConsumptionResult.attributeTypeMap;
    }

    /**
     * Amount of used credits
     */
    public credit: number;
    
    /**
     * Amount of MBs processed
     */
    public quantity: number;
    
    /**
     * Billed API calls number
     */
    public billedApiCalls: number;
    
    public constructor(init?: Partial<ConsumptionResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * ConvertOptions base
 */
// tslint:disable: completed-docs
export class ConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "fromPage",
            baseName: "fromPage",
            type: "number",
        },        
        {
            name: "pagesCount",
            baseName: "pagesCount",
            type: "number",
        },        
        {
            name: "pages",
            baseName: "pages",
            type: "Array<number>",
        },        
        {
            name: "watermarkOptions",
            baseName: "watermarkOptions",
            type: "WatermarkOptions",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ConvertOptions.attributeTypeMap;
    }

    /**
     * Start conversion from FromPage page
     */
    public fromPage: number;
    
    /**
     * Number of pages to convert
     */
    public pagesCount: number;
    
    /**
     * Convert specific pages. The list contains the page indexes of the pages to be converted
     */
    public pages: Array<number>;
    
    /**
     * Watermark specific options
     */
    public watermarkOptions: WatermarkOptions;
    
    public constructor(init?: Partial<ConvertOptions>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Defines conversion request
 */
// tslint:disable: completed-docs
export class ConvertSettings {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "storageName",
            baseName: "storageName",
            type: "string",
        },        
        {
            name: "filePath",
            baseName: "filePath",
            type: "string",
        },        
        {
            name: "format",
            baseName: "format",
            type: "string",
        },        
        {
            name: "loadOptions",
            baseName: "loadOptions",
            type: "LoadOptions",
        },        
        {
            name: "convertOptions",
            baseName: "convertOptions",
            type: "ConvertOptions",
        },        
        {
            name: "outputPath",
            baseName: "outputPath",
            type: "string",
        },        
        {
            name: "fontsPath",
            baseName: "fontsPath",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ConvertSettings.attributeTypeMap;
    }

    /**
     * StorageName which contains the file
     */
    public storageName: string;
    
    /**
     * Gets or sets absolute path to a file in the storage
     */
    public filePath: string;
    
    /**
     * Gets or sets requested conversion format
     */
    public format: string;
    
    /**
     * Gets or sets format specific load options for source file
     */
    public loadOptions: LoadOptions;
    
    /**
     * Gets or sets format specific convert options for output file
     */
    public convertOptions: ConvertOptions;
    
    /**
     * Gets or sets converted file save path
     */
    public outputPath: string;
    
    /**
     * The path to directory containing custom fonts in storage
     */
    public fontsPath: string;
    
    public constructor(init?: Partial<ConvertSettings>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Class for disc space information.
 */
// tslint:disable: completed-docs
export class DiscUsage {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "usedSize",
            baseName: "usedSize",
            type: "number",
        },        
        {
            name: "totalSize",
            baseName: "totalSize",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return DiscUsage.attributeTypeMap;
    }

    /**
     * Application used disc space.
     */
    public usedSize: number;
    
    /**
     * Total disc space.
     */
    public totalSize: number;
    
    public constructor(init?: Partial<DiscUsage>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Contains a document metadata 
 */
// tslint:disable: completed-docs
export class DocumentMetadata {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "fileType",
            baseName: "fileType",
            type: "string",
        },        
        {
            name: "pageCount",
            baseName: "pageCount",
            type: "number",
        },        
        {
            name: "size",
            baseName: "size",
            type: "number",
        },        
        {
            name: "width",
            baseName: "width",
            type: "number",
        },        
        {
            name: "height",
            baseName: "height",
            type: "number",
        },        
        {
            name: "horizontalResolution",
            baseName: "horizontalResolution",
            type: "number",
        },        
        {
            name: "verticalResolution",
            baseName: "verticalResolution",
            type: "number",
        },        
        {
            name: "bitsPerPixel",
            baseName: "bitsPerPixel",
            type: "number",
        },        
        {
            name: "title",
            baseName: "title",
            type: "string",
        },        
        {
            name: "author",
            baseName: "author",
            type: "string",
        },        
        {
            name: "createdDate",
            baseName: "createdDate",
            type: "Date",
        },        
        {
            name: "modifiedDate",
            baseName: "modifiedDate",
            type: "Date",
        },        
        {
            name: "layers",
            baseName: "layers",
            type: "Array<string>",
        },        
        {
            name: "isPasswordProtected",
            baseName: "isPasswordProtected",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return DocumentMetadata.attributeTypeMap;
    }

    /**
     * Document file type
     */
    public fileType: string;
    
    /**
     * Gets pages count if applicable to the current document format
     */
    public pageCount: number;
    
    /**
     * Document bytes size
     */
    public size: number;
    
    /**
     * Returns detected width if applicable to the current document format
     */
    public width: number;
    
    /**
     * Returns detected height if applicable to the current document format
     */
    public height: number;
    
    /**
     * Returns detected horizontal resolution if applicable to the current document format
     */
    public horizontalResolution: number;
    
    /**
     * Returns detected vertical resolution if applicable to the current document format
     */
    public verticalResolution: number;
    
    /**
     * Returns detected bits per pixel if applicable to the current document format
     */
    public bitsPerPixel: number;
    
    /**
     * Returns document title width if applicable to the current document format
     */
    public title: string;
    
    /**
     * Returns detected document author if applicable to the current document format
     */
    public author: string;
    
    /**
     * Returns detected document creation date if it's applicable to the current document format
     */
    public createdDate: Date;
    
    /**
     * Returns detected document modification date if applicable to the current document format
     */
    public modifiedDate: Date;
    
    /**
     * Returns list of layer names if applicable to the current document format
     */
    public layers: Array<string>;
    
    /**
     * Is document password protected
     */
    public isPasswordProtected: boolean;
    
    public constructor(init?: Partial<DocumentMetadata>) {
        
        Object.assign(this, init);
    }        
}

/**
 * The error details
 */
// tslint:disable: completed-docs
export class ErrorDetails {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "requestId",
            baseName: "requestId",
            type: "string",
        },        
        {
            name: "date",
            baseName: "date",
            type: "Date",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ErrorDetails.attributeTypeMap;
    }

    /**
     * The request id
     */
    public requestId: string;
    
    /**
     * Date
     */
    public date: Date;
    
    public constructor(init?: Partial<ErrorDetails>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents field label 
 */
// tslint:disable: completed-docs
export class FieldLabel {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "field",
            baseName: "field",
            type: "FieldLabel.FieldEnum",
        },        
        {
            name: "label",
            baseName: "label",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FieldLabel.attributeTypeMap;
    }

    /**
     * The field name
     */
    public field: FieldLabel.FieldEnum;
    
    /**
     * The label e.g. \"Sender\"
     */
    public label: string;
    
    public constructor(init?: Partial<FieldLabel>) {
        
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace FieldLabel {
    export enum FieldEnum {
        Start = 'Start' as any,
        TabField = 'TabField' as any,
        Subject = 'Subject' as any,
        ShowTimeAs = 'ShowTimeAs' as any,
        Sent = 'Sent' as any,
        RequiredAttendees = 'RequiredAttendees' as any,
        RecurrencePattern = 'RecurrencePattern' as any,
        Recurrence = 'Recurrence' as any,
        PageHeader = 'PageHeader' as any,
        Organizer = 'Organizer' as any,
        Location = 'Location' as any,
        Importance = 'Importance' as any,
        From = 'From' as any,
        End = 'End' as any,
        Bcc = 'Bcc' as any,
        Attachments = 'Attachments' as any,
        To = 'To' as any,
    }
}
// tslint:enable:quotemark
/**
 * File versions FileVersion.
 */
// tslint:disable: completed-docs
export class FileVersions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "Array<FileVersion>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FileVersions.attributeTypeMap;
    }

    /**
     * File versions FileVersion.
     */
    public value: Array<FileVersion>;
    
    public constructor(init?: Partial<FileVersions>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Files list
 */
// tslint:disable: completed-docs
export class FilesList {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "Array<StorageFile>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FilesList.attributeTypeMap;
    }

    /**
     * Files and folders contained by folder StorageFile.
     */
    public value: Array<StorageFile>;
    
    public constructor(init?: Partial<FilesList>) {
        
        Object.assign(this, init);
    }        
}

/**
 * File upload result
 */
// tslint:disable: completed-docs
export class FilesUploadResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "uploaded",
            baseName: "uploaded",
            type: "Array<string>",
        },        
        {
            name: "errors",
            baseName: "errors",
            type: "Array<Error>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FilesUploadResult.attributeTypeMap;
    }

    /**
     * List of uploaded file names
     */
    public uploaded: Array<string>;
    
    /**
     * List of errors.
     */
    public errors: Array<Error>;
    
    public constructor(init?: Partial<FilesUploadResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Current license information
 */
// tslint:disable: completed-docs
export class LicenseInfo {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "isLicensed",
            baseName: "isLicensed",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return LicenseInfo.attributeTypeMap;
    }

    /**
     * True, if license was applied and valid, otherwise False
     */
    public isLicensed: boolean;
    
    public constructor(init?: Partial<LicenseInfo>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Load document options
 */
// tslint:disable: completed-docs
export class LoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "format",
            baseName: "format",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return LoadOptions.attributeTypeMap;
    }

    /**
     * The format of input file, (\"docx\", for example). This field must be filled with correct input file format when using ConvertDirect method, which accept input file as binary stream, and, because of that, API can correctly handle LoadOptions. In regular conversion, the input file format taken from the input file name and this field ignored.
     */
    public format: string;
    
    public constructor(init?: Partial<LoadOptions>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Error
 */
// tslint:disable: completed-docs
export class ModelError {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "code",
            baseName: "code",
            type: "string",
        },        
        {
            name: "message",
            baseName: "message",
            type: "string",
        },        
        {
            name: "description",
            baseName: "description",
            type: "string",
        },        
        {
            name: "innerError",
            baseName: "innerError",
            type: "ErrorDetails",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ModelError.attributeTypeMap;
    }

    /**
     * Code             
     */
    public code: string;
    
    /**
     * Message             
     */
    public message: string;
    
    /**
     * Description             
     */
    public description: string;
    
    /**
     * Inner Error             
     */
    public innerError: ErrorDetails;
    
    public constructor(init?: Partial<ModelError>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Object exists
 */
// tslint:disable: completed-docs
export class ObjectExist {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "exists",
            baseName: "exists",
            type: "boolean",
        },        
        {
            name: "isFolder",
            baseName: "isFolder",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ObjectExist.attributeTypeMap;
    }

    /**
     * Indicates that the file or folder exists.
     */
    public exists: boolean;
    
    /**
     * True if it is a folder, false if it is a file.
     */
    public isFolder: boolean;
    
    public constructor(init?: Partial<ObjectExist>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Operation status result
 */
// tslint:disable: completed-docs
export class OperationResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "id",
            baseName: "id",
            type: "string",
        },        
        {
            name: "method",
            baseName: "method",
            type: "OperationResult.MethodEnum",
        },        
        {
            name: "status",
            baseName: "status",
            type: "OperationResult.StatusEnum",
        },        
        {
            name: "created",
            baseName: "created",
            type: "Date",
        },        
        {
            name: "started",
            baseName: "started",
            type: "Date",
        },        
        {
            name: "failed",
            baseName: "failed",
            type: "Date",
        },        
        {
            name: "canceled",
            baseName: "canceled",
            type: "Date",
        },        
        {
            name: "finished",
            baseName: "finished",
            type: "Date",
        },        
        {
            name: "result",
            baseName: "result",
            type: "Array<StoredConvertedResult>",
        },        
        {
            name: "error",
            baseName: "error",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return OperationResult.attributeTypeMap;
    }

    public id: string;
    
    public method: OperationResult.MethodEnum;
    
    public status: OperationResult.StatusEnum;
    
    public created: Date;
    
    public started: Date;
    
    public failed: Date;
    
    public canceled: Date;
    
    public finished: Date;
    
    public result: Array<StoredConvertedResult>;
    
    public error: string;
    
    public constructor(init?: Partial<OperationResult>) {
        
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace OperationResult {
    export enum MethodEnum {
        Convert = 'Convert' as any,
        ConvertAndSave = 'ConvertAndSave' as any,
    }
    export enum StatusEnum {
        Created = 'Created' as any,
        Started = 'Started' as any,
        Failed = 'Failed' as any,
        Canceled = 'Canceled' as any,
        Finished = 'Finished' as any,
    }
}
// tslint:enable:quotemark
/**
 * Storage exists
 */
// tslint:disable: completed-docs
export class StorageExist {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "exists",
            baseName: "exists",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StorageExist.attributeTypeMap;
    }

    /**
     * Shows that the storage exists.             
     */
    public exists: boolean;
    
    public constructor(init?: Partial<StorageExist>) {
        
        Object.assign(this, init);
    }        
}

/**
 * File or folder information
 */
// tslint:disable: completed-docs
export class StorageFile {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "name",
            baseName: "name",
            type: "string",
        },        
        {
            name: "isFolder",
            baseName: "isFolder",
            type: "boolean",
        },        
        {
            name: "modifiedDate",
            baseName: "modifiedDate",
            type: "Date",
        },        
        {
            name: "size",
            baseName: "size",
            type: "number",
        },        
        {
            name: "path",
            baseName: "path",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StorageFile.attributeTypeMap;
    }

    /**
     * File or folder name.
     */
    public name: string;
    
    /**
     * True if it is a folder.
     */
    public isFolder: boolean;
    
    /**
     * File or folder last modified DateTime.
     */
    public modifiedDate: Date;
    
    /**
     * File or folder size.
     */
    public size: number;
    
    /**
     * File or folder path.
     */
    public path: string;
    
    public constructor(init?: Partial<StorageFile>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Contains single converted item. Result is provided as url to a storage
 */
// tslint:disable: completed-docs
export class StoredConvertedResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "name",
            baseName: "name",
            type: "string",
        },        
        {
            name: "size",
            baseName: "size",
            type: "number",
        },        
        {
            name: "path",
            baseName: "path",
            type: "string",
        },        
        {
            name: "url",
            baseName: "url",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StoredConvertedResult.attributeTypeMap;
    }

    /**
     * Name of converted item
     */
    public name: string;
    
    /**
     * Size of converted item
     */
    public size: number;
    
    /**
     * Path of resource file in storage
     */
    public path: string;
    
    /**
     * Uri in the storage of the converted item
     */
    public url: string;
    
    public constructor(init?: Partial<StoredConvertedResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents information about supported conversion for SourceFormat
 */
// tslint:disable: completed-docs
export class SupportedFormat {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "sourceFormat",
            baseName: "sourceFormat",
            type: "string",
        },        
        {
            name: "targetFormats",
            baseName: "targetFormats",
            type: "Array<string>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return SupportedFormat.attributeTypeMap;
    }

    /**
     * Gets or sets source format
     */
    public sourceFormat: string;
    
    /**
     * Gets or sets target formats
     */
    public targetFormats: Array<string>;
    
    public constructor(init?: Partial<SupportedFormat>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Options for settings watermark to the converted document
 */
// tslint:disable: completed-docs
export class WatermarkOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "text",
            baseName: "text",
            type: "string",
        },        
        {
            name: "fontName",
            baseName: "fontName",
            type: "string",
        },        
        {
            name: "fontSize",
            baseName: "fontSize",
            type: "number",
        },        
        {
            name: "bold",
            baseName: "bold",
            type: "boolean",
        },        
        {
            name: "italic",
            baseName: "italic",
            type: "boolean",
        },        
        {
            name: "color",
            baseName: "color",
            type: "string",
        },        
        {
            name: "width",
            baseName: "width",
            type: "number",
        },        
        {
            name: "height",
            baseName: "height",
            type: "number",
        },        
        {
            name: "top",
            baseName: "top",
            type: "number",
        },        
        {
            name: "left",
            baseName: "left",
            type: "number",
        },        
        {
            name: "rotationAngle",
            baseName: "rotationAngle",
            type: "number",
        },        
        {
            name: "transparency",
            baseName: "transparency",
            type: "number",
        },        
        {
            name: "background",
            baseName: "background",
            type: "boolean",
        },        
        {
            name: "image",
            baseName: "image",
            type: "string",
        },        
        {
            name: "autoAlign",
            baseName: "autoAlign",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return WatermarkOptions.attributeTypeMap;
    }

    /**
     * Watermark text
     */
    public text: string;
    
    /**
     * Watermark font name if text watermark is applied
     */
    public fontName: string;
    
    /**
     * Watermark font name if text watermark is applied
     */
    public fontSize: number;
    
    /**
     * Watermark font bold style if text watermark is applied
     */
    public bold: boolean;
    
    /**
     * Watermark font italic style if text watermark is applied
     */
    public italic: boolean;
    
    /**
     * Watermark font color if text watermark is applied
     */
    public color: string;
    
    /**
     * Watermark width
     */
    public width: number;
    
    /**
     * Watermark height
     */
    public height: number;
    
    /**
     * Watermark top position
     */
    public top: number;
    
    /**
     * Watermark left position
     */
    public left: number;
    
    /**
     * Watermark rotation angle
     */
    public rotationAngle: number;
    
    /**
     * Watermark transparency. Value between 0 and 1. Value 0 is fully visible, value 1 is invisible.
     */
    public transparency: number;
    
    /**
     * Indicates that the watermark is stamped as background. If the value is true, the watermark is layed at the bottom. By default is false and the watermark is layed on top.
     */
    public background: boolean;
    
    /**
     * Image watermark
     */
    public image: string;
    
    /**
     * Auto scale the watermark. If the value is true the font size and the position is automatically calculated to fit the page size.
     */
    public autoAlign: boolean;
    
    public constructor(init?: Partial<WatermarkOptions>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Options for loading CAD documents
 */
// tslint:disable: completed-docs
export class CadLoadOptions extends LoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "layoutNames",
            baseName: "layoutNames",
            type: "Array<string>",
        },        
        {
            name: "drawType",
            baseName: "drawType",
            type: "CadLoadOptions.DrawTypeEnum",
        },        
        {
            name: "drawColor",
            baseName: "drawColor",
            type: "string",
        },        
        {
            name: "backgroundColor",
            baseName: "backgroundColor",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(CadLoadOptions.attributeTypeMap);
    }

    /**
     * Render specific CAD layouts
     */
    public layoutNames: Array<string>;
    
    /**
     * A type of drawing.
     */
    public drawType: CadLoadOptions.DrawTypeEnum;
    
    /**
     * A foreground color.             
     */
    public drawColor: string;
    
    /**
     * A background color.
     */
    public backgroundColor: string;
    
    public constructor(init?: Partial<CadLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace CadLoadOptions {
    export enum DrawTypeEnum {
        UseDrawColor = 'UseDrawColor' as any,
        UseObjectColor = 'UseObjectColor' as any,
    }
}
// tslint:enable:quotemark
/**
 * Options for loading compression documents
 */
// tslint:disable: completed-docs
export class CompressionLoadOptions extends LoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "password",
            baseName: "password",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(CompressionLoadOptions.attributeTypeMap);
    }

    /**
     * Set password to load protected document.
     */
    public password: string;
    
    public constructor(init?: Partial<CompressionLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Options for loading Database documents
 */
// tslint:disable: completed-docs
export class DatabaseLoadOptions extends LoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DatabaseLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<DatabaseLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Diagram document load options
 */
// tslint:disable: completed-docs
export class DiagramLoadOptions extends LoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "defaultFont",
            baseName: "defaultFont",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DiagramLoadOptions.attributeTypeMap);
    }

    /**
     * Default font for Diagram document. The following font will be used if a font is missing.
     */
    public defaultFont: string;
    
    public constructor(init?: Partial<DiagramLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Ebook convert options
 */
// tslint:disable: completed-docs
export class EBookConvertOptions extends ConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "pageSize",
            baseName: "pageSize",
            type: "EBookConvertOptions.PageSizeEnum",
        },        
        {
            name: "pageOrientation",
            baseName: "pageOrientation",
            type: "EBookConvertOptions.PageOrientationEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(EBookConvertOptions.attributeTypeMap);
    }

    /**
     * Specifies page size
     */
    public pageSize: EBookConvertOptions.PageSizeEnum;
    
    /**
     * Specifies page orientation
     */
    public pageOrientation: EBookConvertOptions.PageOrientationEnum;
    
    public constructor(init?: Partial<EBookConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace EBookConvertOptions {
    export enum PageSizeEnum {
        Default = 'Default' as any,
        A3 = 'A3' as any,
        Statement = 'Statement' as any,
        Quarto = 'Quarto' as any,
        Paper11x17 = 'Paper11x17' as any,
        Paper10x14 = 'Paper10x14' as any,
        Letter = 'Letter' as any,
        Legal = 'Legal' as any,
        Ledger = 'Ledger' as any,
        Folio = 'Folio' as any,
        Executive = 'Executive' as any,
        EnvelopeDL = 'EnvelopeDL' as any,
        Custom = 'Custom' as any,
        B5 = 'B5' as any,
        B4 = 'B4' as any,
        A5 = 'A5' as any,
        A4 = 'A4' as any,
        Tabloid = 'Tabloid' as any,
    }
    export enum PageOrientationEnum {
        Default = 'Default' as any,
        Landscape = 'Landscape' as any,
        Portrait = 'Portrait' as any,
    }
}
// tslint:enable:quotemark
/**
 * Options for loading e-book documents
 */
// tslint:disable: completed-docs
export class EBookLoadOptions extends LoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(EBookLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<EBookLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Options for loading Email documents
 */
// tslint:disable: completed-docs
export class EmailLoadOptions extends LoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "preserveOriginalDate",
            baseName: "preserveOriginalDate",
            type: "boolean",
        },        
        {
            name: "fieldLabels",
            baseName: "fieldLabels",
            type: "Array<FieldLabel>",
        },        
        {
            name: "timeZoneOffset",
            baseName: "timeZoneOffset",
            type: "string",
        },        
        {
            name: "displaySent",
            baseName: "displaySent",
            type: "boolean",
        },        
        {
            name: "displaySubject",
            baseName: "displaySubject",
            type: "boolean",
        },        
        {
            name: "displayAttachments",
            baseName: "displayAttachments",
            type: "boolean",
        },        
        {
            name: "displayEmailAddresses",
            baseName: "displayEmailAddresses",
            type: "boolean",
        },        
        {
            name: "displayBccEmailAddress",
            baseName: "displayBccEmailAddress",
            type: "boolean",
        },        
        {
            name: "displayCcEmailAddress",
            baseName: "displayCcEmailAddress",
            type: "boolean",
        },        
        {
            name: "displayToEmailAddress",
            baseName: "displayToEmailAddress",
            type: "boolean",
        },        
        {
            name: "displayFromEmailAddress",
            baseName: "displayFromEmailAddress",
            type: "boolean",
        },        
        {
            name: "displayHeader",
            baseName: "displayHeader",
            type: "boolean",
        },        
        {
            name: "defaultFont",
            baseName: "defaultFont",
            type: "string",
        },        
        {
            name: "fontSubstitutes",
            baseName: "fontSubstitutes",
            type: "{ [key: string]: string; }",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(EmailLoadOptions.attributeTypeMap);
    }

    /**
     * Defines whether need to keep original date header string in mail message when saving or not (Default value is true)
     */
    public preserveOriginalDate: boolean;
    
    /**
     * The mapping between email message field and field text representation
     */
    public fieldLabels: Array<FieldLabel>;
    
    /**
     * Gets or sets the Coordinated Universal Time (UTC) offset for the message dates. This property defines the time zone difference, between the localtime and UTC.
     */
    public timeZoneOffset: string;
    
    /**
     * Option to display or hide sent date/time in the header. Default: true.
     */
    public displaySent: boolean;
    
    /**
     * Option to display or hide subject in the header. Default: true.
     */
    public displaySubject: boolean;
    
    /**
     * Option to display or hide attachments in the header. Default: true.
     */
    public displayAttachments: boolean;
    
    public displayEmailAddresses: boolean;
    
    /**
     * Option to display or hide \"Bcc\" email address. Default: false
     */
    public displayBccEmailAddress: boolean;
    
    /**
     * Option to display or hide \"Cc\" email address. Default: false
     */
    public displayCcEmailAddress: boolean;
    
    /**
     * Option to display or hide \"to\" email address. Default: true
     */
    public displayToEmailAddress: boolean;
    
    /**
     * Option to display or hide \"from\" email address. Default: true
     */
    public displayFromEmailAddress: boolean;
    
    /**
     * Option to display or hide the email header. Default: true
     */
    public displayHeader: boolean;
    
    /**
     * Default font for Email document. The following font will be used if a font is missing.
     */
    public defaultFont: string;
    
    /**
     * List of font substitutes.
     */
    public fontSubstitutes: { [key: string]: string; };
    
    public constructor(init?: Partial<EmailLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * File Version
 */
// tslint:disable: completed-docs
export class FileVersion extends StorageFile {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "versionId",
            baseName: "versionId",
            type: "string",
        },        
        {
            name: "isLatest",
            baseName: "isLatest",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FileVersion.attributeTypeMap);
    }

    /**
     * File Version ID.
     */
    public versionId: string;
    
    /**
     * Specifies whether the file is (true) or is not (false) the latest version of an file.
     */
    public isLatest: boolean;
    
    public constructor(init?: Partial<FileVersion>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Options for loading Finance documents
 */
// tslint:disable: completed-docs
export class FinanceLoadOptions extends LoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FinanceLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<FinanceLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Options for loading Font documents
 */
// tslint:disable: completed-docs
export class FontLoadOptions extends LoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FontLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<FontLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Options for loading Gis documents
 */
// tslint:disable: completed-docs
export class GisLoadOptions extends LoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "width",
            baseName: "width",
            type: "number",
        },        
        {
            name: "height",
            baseName: "height",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(GisLoadOptions.attributeTypeMap);
    }

    /**
     * Page width for converting GIS document. Default is 1000.
     */
    public width: number;
    
    /**
     * Page height for converting GIS document. Default is 1000.
     */
    public height: number;
    
    public constructor(init?: Partial<GisLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Options for to Image conversion
 */
// tslint:disable: completed-docs
export class ImageConvertOptions extends ConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "width",
            baseName: "width",
            type: "number",
        },        
        {
            name: "height",
            baseName: "height",
            type: "number",
        },        
        {
            name: "horizontalResolution",
            baseName: "horizontalResolution",
            type: "number",
        },        
        {
            name: "verticalResolution",
            baseName: "verticalResolution",
            type: "number",
        },        
        {
            name: "grayscale",
            baseName: "grayscale",
            type: "boolean",
        },        
        {
            name: "rotateAngle",
            baseName: "rotateAngle",
            type: "number",
        },        
        {
            name: "usePdf",
            baseName: "usePdf",
            type: "boolean",
        },        
        {
            name: "brightness",
            baseName: "brightness",
            type: "number",
        },        
        {
            name: "contrast",
            baseName: "contrast",
            type: "number",
        },        
        {
            name: "gamma",
            baseName: "gamma",
            type: "number",
        },        
        {
            name: "flipMode",
            baseName: "flipMode",
            type: "ImageConvertOptions.FlipModeEnum",
        },        
        {
            name: "backgroundColor",
            baseName: "backgroundColor",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ImageConvertOptions.attributeTypeMap);
    }

    /**
     * Desired image width after conversion
     */
    public width: number;
    
    /**
     * Desired image height after conversion
     */
    public height: number;
    
    /**
     * Desired image horizontal resolution after conversion. The default resolution is the resolution of the input file or 96dpi
     */
    public horizontalResolution: number;
    
    /**
     * Desired image vertical resolution after conversion. The default resolution is the resolution of the input file or 96dpi
     */
    public verticalResolution: number;
    
    /**
     * Convert to grayscale image
     */
    public grayscale: boolean;
    
    /**
     * Image rotation angle 
     */
    public rotateAngle: number;
    
    /**
     * If true, the input firstly is converted to PDF and after that to desired format
     */
    public usePdf: boolean;
    
    /**
     * Adjust image brightness
     */
    public brightness: number;
    
    /**
     * Adjust image contrast
     */
    public contrast: number;
    
    /**
     * Adjust image gamma
     */
    public gamma: number;
    
    /**
     * Image flip mode
     */
    public flipMode: ImageConvertOptions.FlipModeEnum;
    
    /**
     * Gets or sets a background color.
     */
    public backgroundColor: string;
    
    public constructor(init?: Partial<ImageConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace ImageConvertOptions {
    export enum FlipModeEnum {
        None = 'None' as any,
        FlipX = 'FlipX' as any,
        FlipY = 'FlipY' as any,
        FlipXY = 'FlipXY' as any,
    }
}
// tslint:enable:quotemark
/**
 * Image document load options
 */
// tslint:disable: completed-docs
export class ImageLoadOptions extends LoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "defaultFont",
            baseName: "defaultFont",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ImageLoadOptions.attributeTypeMap);
    }

    /**
     * Default font for Psd, Emf, Wmf document types. The following font will be used if a font is missing.
     */
    public defaultFont: string;
    
    public constructor(init?: Partial<ImageLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Options for loading Mbox documents
 */
// tslint:disable: completed-docs
export class MboxLoadOptions extends LoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MboxLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<MboxLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * One document load options
 */
// tslint:disable: completed-docs
export class NoteLoadOptions extends LoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "defaultFont",
            baseName: "defaultFont",
            type: "string",
        },        
        {
            name: "fontSubstitutes",
            baseName: "fontSubstitutes",
            type: "{ [key: string]: string; }",
        },        
        {
            name: "password",
            baseName: "password",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(NoteLoadOptions.attributeTypeMap);
    }

    /**
     * Default font for Note document. The following font will be used if a font is missing.
     */
    public defaultFont: string;
    
    /**
     * Substitute specific fonts when converting Note document.
     */
    public fontSubstitutes: { [key: string]: string; };
    
    /**
     * Set password to unprotect protected document
     */
    public password: string;
    
    public constructor(init?: Partial<NoteLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Options for loading Olm documents
 */
// tslint:disable: completed-docs
export class OlmLoadOptions extends LoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "folder",
            baseName: "folder",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(OlmLoadOptions.attributeTypeMap);
    }

    /**
     * Folder which to be processed Default is Inbox
     */
    public folder: string;
    
    public constructor(init?: Partial<OlmLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Page description langusge convert options
 */
// tslint:disable: completed-docs
export class PDLConvertOptions extends ConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PDLConvertOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<PDLConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Options for to PDF conversion
 */
// tslint:disable: completed-docs
export class PdfConvertOptions extends ConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "width",
            baseName: "width",
            type: "number",
        },        
        {
            name: "height",
            baseName: "height",
            type: "number",
        },        
        {
            name: "dpi",
            baseName: "dpi",
            type: "number",
        },        
        {
            name: "password",
            baseName: "password",
            type: "string",
        },        
        {
            name: "marginTop",
            baseName: "marginTop",
            type: "number",
        },        
        {
            name: "marginBottom",
            baseName: "marginBottom",
            type: "number",
        },        
        {
            name: "marginLeft",
            baseName: "marginLeft",
            type: "number",
        },        
        {
            name: "marginRight",
            baseName: "marginRight",
            type: "number",
        },        
        {
            name: "pdfFormat",
            baseName: "pdfFormat",
            type: "PdfConvertOptions.PdfFormatEnum",
        },        
        {
            name: "removePdfaCompliance",
            baseName: "removePdfaCompliance",
            type: "boolean",
        },        
        {
            name: "zoom",
            baseName: "zoom",
            type: "number",
        },        
        {
            name: "linearize",
            baseName: "linearize",
            type: "boolean",
        },        
        {
            name: "linkDuplicateStreams",
            baseName: "linkDuplicateStreams",
            type: "boolean",
        },        
        {
            name: "removeUnusedObjects",
            baseName: "removeUnusedObjects",
            type: "boolean",
        },        
        {
            name: "removeUnusedStreams",
            baseName: "removeUnusedStreams",
            type: "boolean",
        },        
        {
            name: "compressImages",
            baseName: "compressImages",
            type: "boolean",
        },        
        {
            name: "imageQuality",
            baseName: "imageQuality",
            type: "number",
        },        
        {
            name: "unembedFonts",
            baseName: "unembedFonts",
            type: "boolean",
        },        
        {
            name: "grayscale",
            baseName: "grayscale",
            type: "boolean",
        },        
        {
            name: "centerWindow",
            baseName: "centerWindow",
            type: "boolean",
        },        
        {
            name: "direction",
            baseName: "direction",
            type: "PdfConvertOptions.DirectionEnum",
        },        
        {
            name: "displayDocTitle",
            baseName: "displayDocTitle",
            type: "boolean",
        },        
        {
            name: "fitWindow",
            baseName: "fitWindow",
            type: "boolean",
        },        
        {
            name: "hideMenuBar",
            baseName: "hideMenuBar",
            type: "boolean",
        },        
        {
            name: "hideToolBar",
            baseName: "hideToolBar",
            type: "boolean",
        },        
        {
            name: "hideWindowUI",
            baseName: "hideWindowUI",
            type: "boolean",
        },        
        {
            name: "nonFullScreenPageMode",
            baseName: "nonFullScreenPageMode",
            type: "PdfConvertOptions.NonFullScreenPageModeEnum",
        },        
        {
            name: "pageLayout",
            baseName: "pageLayout",
            type: "PdfConvertOptions.PageLayoutEnum",
        },        
        {
            name: "pageMode",
            baseName: "pageMode",
            type: "PdfConvertOptions.PageModeEnum",
        },        
        {
            name: "rotate",
            baseName: "rotate",
            type: "PdfConvertOptions.RotateEnum",
        },        
        {
            name: "pageSize",
            baseName: "pageSize",
            type: "PdfConvertOptions.PageSizeEnum",
        },        
        {
            name: "pageOrientation",
            baseName: "pageOrientation",
            type: "PdfConvertOptions.PageOrientationEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PdfConvertOptions.attributeTypeMap);
    }

    /**
     * Desired page width in pixels after conversion
     */
    public width: number;
    
    /**
     * Desired page height in pixels after conversion
     */
    public height: number;
    
    /**
     * Desired page DPI after conversion. The default resolution is: 96dpi
     */
    public dpi: number;
    
    /**
     * Set this property if you want to protect the converted document with a password
     */
    public password: string;
    
    /**
     * Desired page top margin in pixels after conversion
     */
    public marginTop: number;
    
    /**
     * Desired page bottom margin in pixels after conversion
     */
    public marginBottom: number;
    
    /**
     * Desired page left margin in pixels after conversion
     */
    public marginLeft: number;
    
    /**
     * Desired page right margin in pixels after conversion
     */
    public marginRight: number;
    
    /**
     * Set the pdf format of the converted document.
     */
    public pdfFormat: PdfConvertOptions.PdfFormatEnum;
    
    /**
     * Remove Pdf-A Compliance
     */
    public removePdfaCompliance: boolean;
    
    /**
     * Specifies the zoom level in percentage. Default is 100.
     */
    public zoom: number;
    
    /**
     * Linearize PDF Document for the Web
     */
    public linearize: boolean;
    
    /**
     * Link duplicate streams
     */
    public linkDuplicateStreams: boolean;
    
    /**
     * Remove unused objects
     */
    public removeUnusedObjects: boolean;
    
    /**
     * Remove unused streams
     */
    public removeUnusedStreams: boolean;
    
    /**
     * If CompressImages set to true, all images in the document are recompressed. The compression is defined by the ImageQuality property.
     */
    public compressImages: boolean;
    
    /**
     * Value in percent where 100% is unchanged quality and image size. To decrease the image size, use ImageQuality less than 100             
     */
    public imageQuality: number;
    
    /**
     * Make fonts not embedded if set to true
     */
    public unembedFonts: boolean;
    
    /**
     * Convert a PDF from RGB colorspace to Grayscale
     */
    public grayscale: boolean;
    
    /**
     * Specify whether position of the document's window will be centered on the screen. Default: false.
     */
    public centerWindow: boolean;
    
    /**
     * Sets reading order of text: L2R (left to right) or R2L (right to left). Default: L2R.
     */
    public direction: PdfConvertOptions.DirectionEnum;
    
    /**
     * Specifying whether document's window title bar should display document title. Default: false.
     */
    public displayDocTitle: boolean;
    
    /**
     * Specify whether document window must be resized to fit the first displayed page. Default: false.
     */
    public fitWindow: boolean;
    
    /**
     * Specify whether menu bar should be hidden when document is active. Default: false.
     */
    public hideMenuBar: boolean;
    
    /**
     * Specifying whether toolbar should be hidden when document is active. Default: false.
     */
    public hideToolBar: boolean;
    
    /**
     * Specify whether user interface elements should be hidden when document is active. Default: false.
     */
    public hideWindowUI: boolean;
    
    /**
     * Sets page mode, specifying how to display the document on exiting full-screen mode.
     */
    public nonFullScreenPageMode: PdfConvertOptions.NonFullScreenPageModeEnum;
    
    /**
     * Sets page layout which shall be used when the document is opened.
     */
    public pageLayout: PdfConvertOptions.PageLayoutEnum;
    
    /**
     * Sets page mode, specifying how document should be displayed when opened.
     */
    public pageMode: PdfConvertOptions.PageModeEnum;
    
    /**
     * Rotate page
     */
    public rotate: PdfConvertOptions.RotateEnum;
    
    /**
     * Specifies page size
     */
    public pageSize: PdfConvertOptions.PageSizeEnum;
    
    /**
     * Specifies page orientation
     */
    public pageOrientation: PdfConvertOptions.PageOrientationEnum;
    
    public constructor(init?: Partial<PdfConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace PdfConvertOptions {
    export enum PdfFormatEnum {
        Default = 'Default' as any,
        PdfA1A = 'PdfA_1A' as any,
        PdfA1B = 'PdfA_1B' as any,
        PdfA2A = 'PdfA_2A' as any,
        PdfA3A = 'PdfA_3A' as any,
        PdfA2B = 'PdfA_2B' as any,
        PdfA2U = 'PdfA_2U' as any,
        PdfA3B = 'PdfA_3B' as any,
        PdfA3U = 'PdfA_3U' as any,
        V13 = 'v1_3' as any,
        V14 = 'v1_4' as any,
        V15 = 'v1_5' as any,
        V16 = 'v1_6' as any,
        V17 = 'v1_7' as any,
        PdfX1A = 'PdfX_1A' as any,
        PdfX3 = 'PdfX3' as any,
    }
    export enum DirectionEnum {
        L2R = 'L2R' as any,
        R2L = 'R2L' as any,
    }
    export enum NonFullScreenPageModeEnum {
        UseNone = 'UseNone' as any,
        UseOutlines = 'UseOutlines' as any,
        UseThumbs = 'UseThumbs' as any,
        FullScreen = 'FullScreen' as any,
        UseOC = 'UseOC' as any,
        UseAttachments = 'UseAttachments' as any,
    }
    export enum PageLayoutEnum {
        Default = 'Default' as any,
        SinglePage = 'SinglePage' as any,
        OneColumn = 'OneColumn' as any,
        TwoColumnLeft = 'TwoColumnLeft' as any,
        TwoColumnRight = 'TwoColumnRight' as any,
        TwoPageLeft = 'TwoPageLeft' as any,
        TwoPageRight = 'TwoPageRight' as any,
    }
    export enum PageModeEnum {
        UseNone = 'UseNone' as any,
        UseOutlines = 'UseOutlines' as any,
        UseThumbs = 'UseThumbs' as any,
        FullScreen = 'FullScreen' as any,
        UseOC = 'UseOC' as any,
        UseAttachments = 'UseAttachments' as any,
    }
    export enum RotateEnum {
        None = 'None' as any,
        On90 = 'On90' as any,
        On180 = 'On180' as any,
        On270 = 'On270' as any,
    }
    export enum PageSizeEnum {
        Default = 'Default' as any,
        A3 = 'A3' as any,
        Statement = 'Statement' as any,
        Quarto = 'Quarto' as any,
        Paper11x17 = 'Paper11x17' as any,
        Paper10x14 = 'Paper10x14' as any,
        Letter = 'Letter' as any,
        Legal = 'Legal' as any,
        Ledger = 'Ledger' as any,
        Folio = 'Folio' as any,
        Executive = 'Executive' as any,
        EnvelopeDL = 'EnvelopeDL' as any,
        Custom = 'Custom' as any,
        B5 = 'B5' as any,
        B4 = 'B4' as any,
        A5 = 'A5' as any,
        A4 = 'A4' as any,
        Tabloid = 'Tabloid' as any,
    }
    export enum PageOrientationEnum {
        Default = 'Default' as any,
        Landscape = 'Landscape' as any,
        Portrait = 'Portrait' as any,
    }
}
// tslint:enable:quotemark
/**
 * Pdf document load options
 */
// tslint:disable: completed-docs
export class PdfLoadOptions extends LoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "clearBuiltInDocumentProperties",
            baseName: "clearBuiltInDocumentProperties",
            type: "boolean",
        },        
        {
            name: "clearCustomDocumentProperties",
            baseName: "clearCustomDocumentProperties",
            type: "boolean",
        },        
        {
            name: "pageNumbering",
            baseName: "pageNumbering",
            type: "boolean",
        },        
        {
            name: "flattenAllFields",
            baseName: "flattenAllFields",
            type: "boolean",
        },        
        {
            name: "hidePdfAnnotations",
            baseName: "hidePdfAnnotations",
            type: "boolean",
        },        
        {
            name: "defaultFont",
            baseName: "defaultFont",
            type: "string",
        },        
        {
            name: "password",
            baseName: "password",
            type: "string",
        },        
        {
            name: "removeJavascript",
            baseName: "removeJavascript",
            type: "boolean",
        },        
        {
            name: "removeEmbeddedFiles",
            baseName: "removeEmbeddedFiles",
            type: "boolean",
        },        
        {
            name: "fontSubstitutes",
            baseName: "fontSubstitutes",
            type: "{ [key: string]: string; }",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PdfLoadOptions.attributeTypeMap);
    }

    /**
     * Clear built-in document properties
     */
    public clearBuiltInDocumentProperties: boolean;
    
    /**
     * Clear custom document properties
     */
    public clearCustomDocumentProperties: boolean;
    
    /**
     * Enable or disable generation of page numbering in converted document. Default:     false
     */
    public pageNumbering: boolean;
    
    /**
     * Flatten all the fields of the PDF form
     */
    public flattenAllFields: boolean;
    
    /**
     * Hide annotations in Pdf documents
     */
    public hidePdfAnnotations: boolean;
    
    /**
     * Default font for Pdf document. The following font will be used if a font is missing.
     */
    public defaultFont: string;
    
    /**
     * Set password to unprotect protected document
     */
    public password: string;
    
    /**
     * Remove javascript
     */
    public removeJavascript: boolean;
    
    /**
     * Remove embedded files
     */
    public removeEmbeddedFiles: boolean;
    
    /**
     * Substitute specific fonts when converting Words document.
     */
    public fontSubstitutes: { [key: string]: string; };
    
    public constructor(init?: Partial<PdfLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Options for loading Pdl documents
 */
// tslint:disable: completed-docs
export class PdlLoadOptions extends LoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PdlLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<PdlLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Options for loading personal storage documents.
 */
// tslint:disable: completed-docs
export class PersonalStorageLoadOptions extends LoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "folder",
            baseName: "folder",
            type: "string",
        },        
        {
            name: "depth",
            baseName: "depth",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PersonalStorageLoadOptions.attributeTypeMap);
    }

    /**
     * Folder which to be processed Default is Inbox
     */
    public folder: string;
    
    /**
     * Controls how many levels in depth to perform conversion
     */
    public depth: number;
    
    public constructor(init?: Partial<PersonalStorageLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Options for to presentation conversion
 */
// tslint:disable: completed-docs
export class PresentationConvertOptions extends ConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "password",
            baseName: "password",
            type: "string",
        },        
        {
            name: "zoom",
            baseName: "zoom",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PresentationConvertOptions.attributeTypeMap);
    }

    /**
     * Set this property if you want to protect the converted document with a password
     */
    public password: string;
    
    /**
     * Specifies the zoom level in percentage. Default is 100. Default zoom is supported till Microsoft Powerpoint 2010. Starting from Microsoft Powerpoint 2013 default zoom is no longer set to document, instead it appears to use the zoom factor of the last document that was opened.
     */
    public zoom: number;
    
    public constructor(init?: Partial<PresentationConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Presentation document load options
 */
// tslint:disable: completed-docs
export class PresentationLoadOptions extends LoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "preserveDocumentStructure",
            baseName: "preserveDocumentStructure",
            type: "boolean",
        },        
        {
            name: "clearCustomDocumentProperties",
            baseName: "clearCustomDocumentProperties",
            type: "boolean",
        },        
        {
            name: "clearBuiltInDocumentProperties",
            baseName: "clearBuiltInDocumentProperties",
            type: "boolean",
        },        
        {
            name: "depth",
            baseName: "depth",
            type: "number",
        },        
        {
            name: "convertOwned",
            baseName: "convertOwned",
            type: "boolean",
        },        
        {
            name: "convertOwner",
            baseName: "convertOwner",
            type: "boolean",
        },        
        {
            name: "showHiddenSlides",
            baseName: "showHiddenSlides",
            type: "boolean",
        },        
        {
            name: "defaultFont",
            baseName: "defaultFont",
            type: "string",
        },        
        {
            name: "fontSubstitutes",
            baseName: "fontSubstitutes",
            type: "{ [key: string]: string; }",
        },        
        {
            name: "password",
            baseName: "password",
            type: "string",
        },        
        {
            name: "commentsPosition",
            baseName: "commentsPosition",
            type: "PresentationLoadOptions.CommentsPositionEnum",
        },        
        {
            name: "notesPosition",
            baseName: "notesPosition",
            type: "PresentationLoadOptions.NotesPositionEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PresentationLoadOptions.attributeTypeMap);
    }

    /**
     * Determines whether the document structure should be preserved when converting     to PDF (default is false).
     */
    public preserveDocumentStructure: boolean;
    
    /**
     * Value indicating whether custom document properties should be cleared.
     */
    public clearCustomDocumentProperties: boolean;
    
    /**
     * Value indicating whether built in document properties should be cleared.
     */
    public clearBuiltInDocumentProperties: boolean;
    
    /**
     * Option to control how many levels in depth to perform conversion     Default: 1
     */
    public depth: number;
    
    /**
     * Option to control whether the owned documents in the documents container must     be converted
     */
    public convertOwned: boolean;
    
    /**
     * Option to control whether the documents container itself must be converted If     this property is true the documents container will be the first converted document     Default is true
     */
    public convertOwner: boolean;
    
    /**
     * Show hidden slides.
     */
    public showHiddenSlides: boolean;
    
    /**
     * Default font for rendering the presentation. The following font will be used if a presentation font is missing.
     */
    public defaultFont: string;
    
    /**
     * Substitute specific fonts when converting Slides document.
     */
    public fontSubstitutes: { [key: string]: string; };
    
    /**
     * Set password to unprotect protected document
     */
    public password: string;
    
    /**
     * Represents the way comments are printed with the slide. Default is None.
     */
    public commentsPosition: PresentationLoadOptions.CommentsPositionEnum;
    
    /**
     * Represents the way notes are printed with the slide. Default is None.
     */
    public notesPosition: PresentationLoadOptions.NotesPositionEnum;
    
    public constructor(init?: Partial<PresentationLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace PresentationLoadOptions {
    export enum CommentsPositionEnum {
        None = 'None' as any,
        Bottom = 'Bottom' as any,
        Right = 'Right' as any,
    }
    export enum NotesPositionEnum {
        None = 'None' as any,
        BottomTruncated = 'BottomTruncated' as any,
        BottomFull = 'BottomFull' as any,
    }
}
// tslint:enable:quotemark
/**
 * Options for loading Pub documents
 */
// tslint:disable: completed-docs
export class PubLoadOptions extends LoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PubLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<PubLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Spreadsheet сonvert options class 
 */
// tslint:disable: completed-docs
export class SpreadsheetConvertOptions extends ConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "password",
            baseName: "password",
            type: "string",
        },        
        {
            name: "zoom",
            baseName: "zoom",
            type: "number",
        },        
        {
            name: "usePdf",
            baseName: "usePdf",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SpreadsheetConvertOptions.attributeTypeMap);
    }

    /**
     * Set this property if you want to protect the converted document with a password
     */
    public password: string;
    
    /**
     * Specifies the zoom level in percentage. Default is 100.
     */
    public zoom: number;
    
    /**
     * If true, the input firstly is converted to PDF and after that to desired format
     */
    public usePdf: boolean;
    
    public constructor(init?: Partial<SpreadsheetConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Spreadsheet document load options
 */
// tslint:disable: completed-docs
export class SpreadsheetLoadOptions extends LoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "clearCustomDocumentProperties",
            baseName: "clearCustomDocumentProperties",
            type: "boolean",
        },        
        {
            name: "clearBuiltInDocumentProperties",
            baseName: "clearBuiltInDocumentProperties",
            type: "boolean",
        },        
        {
            name: "rowsPerPage",
            baseName: "rowsPerPage",
            type: "number",
        },        
        {
            name: "columnsPerPage",
            baseName: "columnsPerPage",
            type: "number",
        },        
        {
            name: "autoFitRows",
            baseName: "autoFitRows",
            type: "boolean",
        },        
        {
            name: "allColumnsInOnePagePerSheet",
            baseName: "allColumnsInOnePagePerSheet",
            type: "boolean",
        },        
        {
            name: "cultureInfo",
            baseName: "cultureInfo",
            type: "string",
        },        
        {
            name: "checkExcelRestriction",
            baseName: "checkExcelRestriction",
            type: "boolean",
        },        
        {
            name: "password",
            baseName: "password",
            type: "string",
        },        
        {
            name: "skipEmptyRowsAndColumns",
            baseName: "skipEmptyRowsAndColumns",
            type: "boolean",
        },        
        {
            name: "convertRange",
            baseName: "convertRange",
            type: "string",
        },        
        {
            name: "optimizePdfSize",
            baseName: "optimizePdfSize",
            type: "boolean",
        },        
        {
            name: "onePagePerSheet",
            baseName: "onePagePerSheet",
            type: "boolean",
        },        
        {
            name: "showHiddenSheets",
            baseName: "showHiddenSheets",
            type: "boolean",
        },        
        {
            name: "showGridLines",
            baseName: "showGridLines",
            type: "boolean",
        },        
        {
            name: "fontSubstitutes",
            baseName: "fontSubstitutes",
            type: "{ [key: string]: string; }",
        },        
        {
            name: "defaultFont",
            baseName: "defaultFont",
            type: "string",
        },        
        {
            name: "sheetIndexes",
            baseName: "sheetIndexes",
            type: "Array<number>",
        },        
        {
            name: "sheets",
            baseName: "sheets",
            type: "Array<string>",
        },        
        {
            name: "printComments",
            baseName: "printComments",
            type: "SpreadsheetLoadOptions.PrintCommentsEnum",
        },        
        {
            name: "resetFontFolders",
            baseName: "resetFontFolders",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SpreadsheetLoadOptions.attributeTypeMap);
    }

    /**
     * Clear custom document properties. Default is false.
     */
    public clearCustomDocumentProperties: boolean;
    
    /**
     * Clear built-in document properties. Default is false.
     */
    public clearBuiltInDocumentProperties: boolean;
    
    /**
     * Split a worksheet into pages by rows. Default is 0, no pagination.
     */
    public rowsPerPage: number;
    
    /**
     * Split a worksheet into pages by columns. Default is 0, no pagination.
     */
    public columnsPerPage: number;
    
    /**
     * Autofits all rows when converting
     */
    public autoFitRows: boolean;
    
    /**
     * If AllColumnsInOnePagePerSheet is true, all column content of one sheet will output to only one page in result. The width of paper size of pagesetup will be invalid, and the other settings of pagesetup will still take effect.             
     */
    public allColumnsInOnePagePerSheet: boolean;
    
    /**
     * System culture info at the time file is loaded
     */
    public cultureInfo: string;
    
    /**
     * Whether check restriction of excel file when user modify cells related objects. For example, excel does not allow inputting string value longer than 32K. When you input a value longer than 32K, if this property is true, you will get an Exception. If this property is false, we will accept your input string value as the cell's value so that later you can output the complete string value for other file formats such as CSV. However, if you have set such kind of value that is invalid for excel file format, you should not save the workbook as excel file format later. Otherwise there may be unexpected error for the generated excel file.             
     */
    public checkExcelRestriction: boolean;
    
    /**
     * Set password to unprotect protected document
     */
    public password: string;
    
    /**
     * Skips empty rows and columns when converting. Default is True.
     */
    public skipEmptyRowsAndColumns: boolean;
    
    /**
     * Convert specific range when converting to other than cells format. Example: \"D1:F8\"
     */
    public convertRange: string;
    
    /**
     * If True and converting to Pdf the conversion is optimized for better file size than print quality.             
     */
    public optimizePdfSize: boolean;
    
    /**
     * If OnePagePerSheet is true the content of the sheet will be converted to one page in the PDF document. Default value is true.
     */
    public onePagePerSheet: boolean;
    
    /**
     * Show hidden sheets when converting Excel files
     */
    public showHiddenSheets: boolean;
    
    /**
     * Show grid lines when converting Excel files
     */
    public showGridLines: boolean;
    
    /**
     * Substitute specific fonts when converting Cells document.
     */
    public fontSubstitutes: { [key: string]: string; };
    
    /**
     * Default font for Cells document. The following font will be used if a font is missing.
     */
    public defaultFont: string;
    
    /**
     * List of sheet indexes to convert. The indexes must be zero-based
     */
    public sheetIndexes: Array<number>;
    
    /**
     * List of sheet names to convert
     */
    public sheets: Array<string>;
    
    /**
     * Represents the way comments are printed with the sheet. Default is PrintNoComments.
     */
    public printComments: SpreadsheetLoadOptions.PrintCommentsEnum;
    
    /**
     * Reset font folders before loading document
     */
    public resetFontFolders: boolean;
    
    public constructor(init?: Partial<SpreadsheetLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace SpreadsheetLoadOptions {
    export enum PrintCommentsEnum {
        PrintInPlace = 'PrintInPlace' as any,
        PrintNoComments = 'PrintNoComments' as any,
        PrintSheetEnd = 'PrintSheetEnd' as any,
        PrintWithThreadedComments = 'PrintWithThreadedComments' as any,
    }
}
// tslint:enable:quotemark
/**
 * Options for loading 3d documents
 */
// tslint:disable: completed-docs
export class ThreeDLoadOptions extends LoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ThreeDLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<ThreeDLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Txt convert options
 */
// tslint:disable: completed-docs
export class TxtConvertOptions extends ConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TxtConvertOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<TxtConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Txt document load options
 */
// tslint:disable: completed-docs
export class TxtLoadOptions extends LoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "detectNumberingWithWhitespaces",
            baseName: "detectNumberingWithWhitespaces",
            type: "boolean",
        },        
        {
            name: "trailingSpacesOptions",
            baseName: "trailingSpacesOptions",
            type: "TxtLoadOptions.TrailingSpacesOptionsEnum",
        },        
        {
            name: "leadingSpacesOptions",
            baseName: "leadingSpacesOptions",
            type: "TxtLoadOptions.LeadingSpacesOptionsEnum",
        },        
        {
            name: "encoding",
            baseName: "encoding",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TxtLoadOptions.attributeTypeMap);
    }

    /**
     * Allows to specify how numbered list items are recognized when plain text document is converted. The default value is true.
     */
    public detectNumberingWithWhitespaces: boolean;
    
    /**
     * Gets or sets preferred option of a trailing space handling. Default value is Trim.
     */
    public trailingSpacesOptions: TxtLoadOptions.TrailingSpacesOptionsEnum;
    
    /**
     * Gets or sets preferred option of a leading space handling. Default value is ConvertToIndent.
     */
    public leadingSpacesOptions: TxtLoadOptions.LeadingSpacesOptionsEnum;
    
    /**
     * Gets or sets the encoding that will be used when loading Txt document. Can be null. Default is null.
     */
    public encoding: string;
    
    public constructor(init?: Partial<TxtLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace TxtLoadOptions {
    export enum TrailingSpacesOptionsEnum {
        Preserve = 'Preserve' as any,
        Trim = 'Trim' as any,
    }
    export enum LeadingSpacesOptionsEnum {
        ConvertToIndent = 'ConvertToIndent' as any,
        Preserve = 'Preserve' as any,
        Trim = 'Trim' as any,
    }
}
// tslint:enable:quotemark
/**
 * Options for loading Vcf documents
 */
// tslint:disable: completed-docs
export class VcfLoadOptions extends LoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "encoding",
            baseName: "encoding",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(VcfLoadOptions.attributeTypeMap);
    }

    /**
     * The encoding that will be used when loading Vcf document. Can be null. Default is null.
     */
    public encoding: string;
    
    public constructor(init?: Partial<VcfLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Options for to Html conversion
 */
// tslint:disable: completed-docs
export class WebConvertOptions extends ConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "usePdf",
            baseName: "usePdf",
            type: "boolean",
        },        
        {
            name: "fixedLayout",
            baseName: "fixedLayout",
            type: "boolean",
        },        
        {
            name: "fixedLayoutShowBorders",
            baseName: "fixedLayoutShowBorders",
            type: "boolean",
        },        
        {
            name: "zoom",
            baseName: "zoom",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WebConvertOptions.attributeTypeMap);
    }

    /**
     * If true, the input firstly is converted to PDF and after that to desired format
     */
    public usePdf: boolean;
    
    /**
     * If true fixed layout will be used e.g. absolutely positioned html elements Default:  true
     */
    public fixedLayout: boolean;
    
    /**
     * Show page borders when converting to fixed layout. Default is True
     */
    public fixedLayoutShowBorders: boolean;
    
    /**
     * Specifies the zoom level in percentage. Default is 100.
     */
    public zoom: number;
    
    public constructor(init?: Partial<WebConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Html document load options
 */
// tslint:disable: completed-docs
export class WebLoadOptions extends LoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "pageNumbering",
            baseName: "pageNumbering",
            type: "boolean",
        },        
        {
            name: "basePath",
            baseName: "basePath",
            type: "string",
        },        
        {
            name: "encoding",
            baseName: "encoding",
            type: "string",
        },        
        {
            name: "skipExternalResources",
            baseName: "skipExternalResources",
            type: "boolean",
        },        
        {
            name: "usePdf",
            baseName: "usePdf",
            type: "boolean",
        },        
        {
            name: "renderingMode",
            baseName: "renderingMode",
            type: "WebLoadOptions.RenderingModeEnum",
        },        
        {
            name: "zoom",
            baseName: "zoom",
            type: "number",
        },        
        {
            name: "pageLayout",
            baseName: "pageLayout",
            type: "WebLoadOptions.PageLayoutEnum",
        },        
        {
            name: "customCssStyle",
            baseName: "customCssStyle",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WebLoadOptions.attributeTypeMap);
    }

    /**
     * Enable or disable generation of page numbering in converted document. Default: false
     */
    public pageNumbering: boolean;
    
    /**
     * The base path/url for the html
     */
    public basePath: string;
    
    /**
     * Get or sets the encoding to be used when loading the web document. If the property is null the encoding will be determined from document character set attribute
     */
    public encoding: string;
    
    /**
     * If true all external resource will not be loading
     */
    public skipExternalResources: boolean;
    
    /**
     * Use pdf for the conversion. Default: false
     */
    public usePdf: boolean;
    
    /**
     * Controls how HTML content is rendered. Default: AbsolutePositioning
     */
    public renderingMode: WebLoadOptions.RenderingModeEnum;
    
    public zoom: number;
    
    /**
     * Specifies the page layout options when loading web documents
     */
    public pageLayout: WebLoadOptions.PageLayoutEnum;
    
    public customCssStyle: string;
    
    public constructor(init?: Partial<WebLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace WebLoadOptions {
    export enum RenderingModeEnum {
        Flow = 'Flow' as any,
        AbsolutePositioning = 'AbsolutePositioning' as any,
    }
    export enum PageLayoutEnum {
        None = 'None' as any,
        ScaleToPageWidth = 'ScaleToPageWidth' as any,
        ScaleToPageHeight = 'ScaleToPageHeight' as any,
    }
}
// tslint:enable:quotemark
/**
 * Options for to word processing conversion
 */
// tslint:disable: completed-docs
export class WordProcessingConvertOptions extends ConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "width",
            baseName: "width",
            type: "number",
        },        
        {
            name: "height",
            baseName: "height",
            type: "number",
        },        
        {
            name: "dpi",
            baseName: "dpi",
            type: "number",
        },        
        {
            name: "password",
            baseName: "password",
            type: "string",
        },        
        {
            name: "zoom",
            baseName: "zoom",
            type: "number",
        },        
        {
            name: "pdfRecognitionMode",
            baseName: "pdfRecognitionMode",
            type: "WordProcessingConvertOptions.PdfRecognitionModeEnum",
        },        
        {
            name: "pageSize",
            baseName: "pageSize",
            type: "WordProcessingConvertOptions.PageSizeEnum",
        },        
        {
            name: "pageOrientation",
            baseName: "pageOrientation",
            type: "WordProcessingConvertOptions.PageOrientationEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WordProcessingConvertOptions.attributeTypeMap);
    }

    /**
     * Desired page width after conversion
     */
    public width: number;
    
    /**
     * Desired page height after conversion
     */
    public height: number;
    
    /**
     * Desired page DPI after conversion. The default resolution is: 96dpi
     */
    public dpi: number;
    
    /**
     * Set this property if you want to protect the converted document with a password
     */
    public password: string;
    
    /**
     * Specifies the zoom level in percentage. Default is 100. Default zoom is supported till Microsoft Word 2010. Starting from Microsoft Word 2013 default zoom is no longer set to document, instead it appears to use the zoom factor of the last document that was opened.
     */
    public zoom: number;
    
    /**
     * Recognition mode when converting from pdf
     */
    public pdfRecognitionMode: WordProcessingConvertOptions.PdfRecognitionModeEnum;
    
    /**
     * Page size
     */
    public pageSize: WordProcessingConvertOptions.PageSizeEnum;
    
    /**
     * Specifies page orientation
     */
    public pageOrientation: WordProcessingConvertOptions.PageOrientationEnum;
    
    public constructor(init?: Partial<WordProcessingConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace WordProcessingConvertOptions {
    export enum PdfRecognitionModeEnum {
        Textbox = 'Textbox' as any,
        Flow = 'Flow' as any,
    }
    export enum PageSizeEnum {
        Default = 'Default' as any,
        A3 = 'A3' as any,
        Statement = 'Statement' as any,
        Quarto = 'Quarto' as any,
        Paper11x17 = 'Paper11x17' as any,
        Paper10x14 = 'Paper10x14' as any,
        Letter = 'Letter' as any,
        Legal = 'Legal' as any,
        Ledger = 'Ledger' as any,
        Folio = 'Folio' as any,
        Executive = 'Executive' as any,
        EnvelopeDL = 'EnvelopeDL' as any,
        Custom = 'Custom' as any,
        B5 = 'B5' as any,
        B4 = 'B4' as any,
        A5 = 'A5' as any,
        A4 = 'A4' as any,
        Tabloid = 'Tabloid' as any,
    }
    export enum PageOrientationEnum {
        Default = 'Default' as any,
        Landscape = 'Landscape' as any,
        Portrait = 'Portrait' as any,
    }
}
// tslint:enable:quotemark
/**
 * WordProcessing document load options
 */
// tslint:disable: completed-docs
export class WordProcessingLoadOptions extends LoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "defaultFont",
            baseName: "defaultFont",
            type: "string",
        },        
        {
            name: "fontSubstitutes",
            baseName: "fontSubstitutes",
            type: "{ [key: string]: string; }",
        },        
        {
            name: "password",
            baseName: "password",
            type: "string",
        },        
        {
            name: "hideWordTrackedChanges",
            baseName: "hideWordTrackedChanges",
            type: "boolean",
        },        
        {
            name: "bookmarksOutlineLevel",
            baseName: "bookmarksOutlineLevel",
            type: "number",
        },        
        {
            name: "headingsOutlineLevels",
            baseName: "headingsOutlineLevels",
            type: "number",
        },        
        {
            name: "expandedOutlineLevels",
            baseName: "expandedOutlineLevels",
            type: "number",
        },        
        {
            name: "clearCustomDocumentProperties",
            baseName: "clearCustomDocumentProperties",
            type: "boolean",
        },        
        {
            name: "clearBuiltInDocumentProperties",
            baseName: "clearBuiltInDocumentProperties",
            type: "boolean",
        },        
        {
            name: "depth",
            baseName: "depth",
            type: "number",
        },        
        {
            name: "convertOwned",
            baseName: "convertOwned",
            type: "boolean",
        },        
        {
            name: "convertOwner",
            baseName: "convertOwner",
            type: "boolean",
        },        
        {
            name: "autoHyphenation",
            baseName: "autoHyphenation",
            type: "boolean",
        },        
        {
            name: "hyphenateCaps",
            baseName: "hyphenateCaps",
            type: "boolean",
        },        
        {
            name: "pageNumbering",
            baseName: "pageNumbering",
            type: "boolean",
        },        
        {
            name: "preserveDocumentStructure",
            baseName: "preserveDocumentStructure",
            type: "boolean",
        },        
        {
            name: "skipExternalResources",
            baseName: "skipExternalResources",
            type: "boolean",
        },        
        {
            name: "useTextShaper",
            baseName: "useTextShaper",
            type: "boolean",
        },        
        {
            name: "preserveFormFields",
            baseName: "preserveFormFields",
            type: "boolean",
        },        
        {
            name: "commentDisplayMode",
            baseName: "commentDisplayMode",
            type: "WordProcessingLoadOptions.CommentDisplayModeEnum",
        },        
        {
            name: "keepDateFieldOriginalValue",
            baseName: "keepDateFieldOriginalValue",
            type: "boolean",
        },        
        {
            name: "updateFields",
            baseName: "updateFields",
            type: "boolean",
        },        
        {
            name: "updatePageLayout",
            baseName: "updatePageLayout",
            type: "boolean",
        },        
        {
            name: "embedTrueTypeFonts",
            baseName: "embedTrueTypeFonts",
            type: "boolean",
        },        
        {
            name: "fontInfoSubstitutionEnabled",
            baseName: "fontInfoSubstitutionEnabled",
            type: "boolean",
        },        
        {
            name: "fontConfigSubstitutionEnabled",
            baseName: "fontConfigSubstitutionEnabled",
            type: "boolean",
        },        
        {
            name: "fontNameSubstitutionEnabled",
            baseName: "fontNameSubstitutionEnabled",
            type: "boolean",
        },        
        {
            name: "showFullCommenterName",
            baseName: "showFullCommenterName",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WordProcessingLoadOptions.attributeTypeMap);
    }

    /**
     * Default font for Words document. The following font will be used if a font is missing.
     */
    public defaultFont: string;
    
    /**
     * Substitute specific fonts when converting Words document.
     */
    public fontSubstitutes: { [key: string]: string; };
    
    /**
     * Set password to unprotect protected document
     */
    public password: string;
    
    /**
     * Hide markup and track changes for Word documents
     */
    public hideWordTrackedChanges: boolean;
    
    /**
     * Specifies the default level in the document outline at which to display Word bookmarks. Default is 0. Valid range is 0 to 9.
     */
    public bookmarksOutlineLevel: number;
    
    /**
     * Specifies how many levels of headings (paragraphs formatted with the Heading styles) to include in the document outline. Default is 0. Valid range is 0 to 9.
     */
    public headingsOutlineLevels: number;
    
    /**
     * Specifies how many levels in the document outline to show expanded when the file is viewed. Default is 0. Valid range is 0 to 9. Note that this options will not work when saving to XPS.
     */
    public expandedOutlineLevels: number;
    
    /**
     * Clear custom document properties. Default is false.
     */
    public clearCustomDocumentProperties: boolean;
    
    /**
     * Clear built-in document properties. Default is false.
     */
    public clearBuiltInDocumentProperties: boolean;
    
    /**
     * Option to control how many levels in depth to perform conversion. Default: 1.
     */
    public depth: number;
    
    /**
     * Option to control whether the owned documents in the documents container must be converted
     */
    public convertOwned: boolean;
    
    /**
     * Option to control whether the documents container itself must be converted If this property is true the documents container will be the first converted document. Default is true.
     */
    public convertOwner: boolean;
    
    /**
     * Gets or sets value determining whether automatic hyphenation is turned on for the document. Default value for this property is false.
     */
    public autoHyphenation: boolean;
    
    /**
     * Gets or sets value determining whether words written in all capital letters are hyphenated. Default value for this property is true.
     */
    public hyphenateCaps: boolean;
    
    /**
     * Enable or disable generation of page numbering in converted document. Default: false
     */
    public pageNumbering: boolean;
    
    /**
     * Determines whether the document structure should be preserved when converting to PDF (default is false).
     */
    public preserveDocumentStructure: boolean;
    
    /**
     * If true all external resource will not be loading. Default is true.
     */
    public skipExternalResources: boolean;
    
    /**
     * Specifies whether to use a text shaper for better kerning display. Default is false.
     */
    public useTextShaper: boolean;
    
    /**
     * Specifies whether to preserve Microsoft Word form fields as form fields in PDF or convert them to text. Default is false.
     */
    public preserveFormFields: boolean;
    
    /**
     * Specifies how comments should be displayed in the output document. Default is Balloon.
     */
    public commentDisplayMode: WordProcessingLoadOptions.CommentDisplayModeEnum;
    
    /**
     * Keep original value of date field. Default: false
     */
    public keepDateFieldOriginalValue: boolean;
    
    /**
     * Update fields after loading. Default: false
     */
    public updateFields: boolean;
    
    /**
     * Update page layout after loading. Default: false
     */
    public updatePageLayout: boolean;
    
    /**
     * If EmbedTrueTypeFonts is true, GroupDocs.Conversion Cloud embed true type fonts in the output document. Default: true
     */
    public embedTrueTypeFonts: boolean;
    
    /**
     * Automatically substitutes missing fonts based on FontInfo in the document. Default: false.
     */
    public fontInfoSubstitutionEnabled: boolean;
    
    /**
     * Automatically substitutes missing fonts based on FontConfig in the system. Default: false.
     */
    public fontConfigSubstitutionEnabled: boolean;
    
    /**
     * Automatically substitutes missing fonts based on the font name. Default: false.
     */
    public fontNameSubstitutionEnabled: boolean;
    
    /**
     * Show full commenter name in comments. Default is false.
     */
    public showFullCommenterName: boolean;
    
    public constructor(init?: Partial<WordProcessingLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace WordProcessingLoadOptions {
    export enum CommentDisplayModeEnum {
        Hidden = 'Hidden' as any,
        Balloon = 'Balloon' as any,
        Annotation = 'Annotation' as any,
    }
}
// tslint:enable:quotemark
/**
 * XML document load options
 */
// tslint:disable: completed-docs
export class XmlLoadOptions extends LoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "xslFo",
            baseName: "xslFo",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(XmlLoadOptions.attributeTypeMap);
    }

    /**
     * XSL document content to convert XML-FO using XSL
     */
    public xslFo: string;
    
    public constructor(init?: Partial<XmlLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Bmp convert options
 */
// tslint:disable: completed-docs
export class BmpConvertOptions extends ImageConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(BmpConvertOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<BmpConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace BmpConvertOptions {
}
// tslint:enable:quotemark
/**
 * Csv document load options
 */
// tslint:disable: completed-docs
export class CsvLoadOptions extends SpreadsheetLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "separator",
            baseName: "separator",
            type: "string",
        },        
        {
            name: "isMultiEncoded",
            baseName: "isMultiEncoded",
            type: "boolean",
        },        
        {
            name: "hasFormula",
            baseName: "hasFormula",
            type: "boolean",
        },        
        {
            name: "convertNumericData",
            baseName: "convertNumericData",
            type: "boolean",
        },        
        {
            name: "convertDateTimeData",
            baseName: "convertDateTimeData",
            type: "boolean",
        },        
        {
            name: "encoding",
            baseName: "encoding",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(CsvLoadOptions.attributeTypeMap);
    }

    /**
     * Delimiter of a Csv file
     */
    public separator: string;
    
    /**
     * True means the file contains several encodings
     */
    public isMultiEncoded: boolean;
    
    /**
     * Indicates whether text is formula if it starts with \"=\"
     */
    public hasFormula: boolean;
    
    /**
     * Indicates whether the string in the file is converted to numeric. Default is True
     */
    public convertNumericData: boolean;
    
    /**
     * Indicates whether the string in the file is converted to date. Default is True
     */
    public convertDateTimeData: boolean;
    
    /**
     * File encoding
     */
    public encoding: string;
    
    public constructor(init?: Partial<CsvLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace CsvLoadOptions {
}
// tslint:enable:quotemark
/**
 * Dcm convert options
 */
// tslint:disable: completed-docs
export class DcmConvertOptions extends ImageConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DcmConvertOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<DcmConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace DcmConvertOptions {
}
// tslint:enable:quotemark
/**
 * Djvu convert options
 */
// tslint:disable: completed-docs
export class DjvuConvertOptions extends ImageConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DjvuConvertOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<DjvuConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace DjvuConvertOptions {
}
// tslint:enable:quotemark
/**
 * Dng convert options
 */
// tslint:disable: completed-docs
export class DngConvertOptions extends ImageConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DngConvertOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<DngConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace DngConvertOptions {
}
// tslint:enable:quotemark
/**
 * Doc convert options
 */
// tslint:disable: completed-docs
export class DocConvertOptions extends WordProcessingConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DocConvertOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<DocConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace DocConvertOptions {
}
// tslint:enable:quotemark
/**
 * Docm convert options
 */
// tslint:disable: completed-docs
export class DocmConvertOptions extends WordProcessingConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DocmConvertOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<DocmConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace DocmConvertOptions {
}
// tslint:enable:quotemark
/**
 * Docx convert options
 */
// tslint:disable: completed-docs
export class DocxConvertOptions extends WordProcessingConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DocxConvertOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<DocxConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace DocxConvertOptions {
}
// tslint:enable:quotemark
/**
 * Dot convert options
 */
// tslint:disable: completed-docs
export class DotConvertOptions extends WordProcessingConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DotConvertOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<DotConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace DotConvertOptions {
}
// tslint:enable:quotemark
/**
 * Dotm convert options
 */
// tslint:disable: completed-docs
export class DotmConvertOptions extends WordProcessingConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DotmConvertOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<DotmConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace DotmConvertOptions {
}
// tslint:enable:quotemark
/**
 * Dotx convert options
 */
// tslint:disable: completed-docs
export class DotxConvertOptions extends WordProcessingConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DotxConvertOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<DotxConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace DotxConvertOptions {
}
// tslint:enable:quotemark
/**
 * Emf convert options
 */
// tslint:disable: completed-docs
export class EmfConvertOptions extends ImageConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(EmfConvertOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<EmfConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace EmfConvertOptions {
}
// tslint:enable:quotemark
/**
 * Gif convert options
 */
// tslint:disable: completed-docs
export class GifConvertOptions extends ImageConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(GifConvertOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<GifConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace GifConvertOptions {
}
// tslint:enable:quotemark
/**
 * Ico convert options
 */
// tslint:disable: completed-docs
export class IcoConvertOptions extends ImageConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(IcoConvertOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<IcoConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace IcoConvertOptions {
}
// tslint:enable:quotemark
/**
 * Jpg convert options
 */
// tslint:disable: completed-docs
export class JpgConvertOptions extends ImageConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "quality",
            baseName: "quality",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(JpgConvertOptions.attributeTypeMap);
    }

    /**
     * Desired image quality when converting to Jpeg. The value must be between 0 and 100. The default value is 100.
     */
    public quality: number;
    
    public constructor(init?: Partial<JpgConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace JpgConvertOptions {
}
// tslint:enable:quotemark
/**
 * Odg convert options
 */
// tslint:disable: completed-docs
export class OdgConvertOptions extends ImageConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(OdgConvertOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<OdgConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace OdgConvertOptions {
}
// tslint:enable:quotemark
/**
 * Odp convert options
 */
// tslint:disable: completed-docs
export class OdpConvertOptions extends PresentationConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(OdpConvertOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<OdpConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Ods convert options
 */
// tslint:disable: completed-docs
export class OdsConvertOptions extends SpreadsheetConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(OdsConvertOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<OdsConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Odt convert options
 */
// tslint:disable: completed-docs
export class OdtConvertOptions extends WordProcessingConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(OdtConvertOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<OdtConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace OdtConvertOptions {
}
// tslint:enable:quotemark
/**
 * Otp convert options
 */
// tslint:disable: completed-docs
export class OtpConvertOptions extends PresentationConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(OtpConvertOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<OtpConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Ots convert options
 */
// tslint:disable: completed-docs
export class OtsConvertOptions extends SpreadsheetConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(OtsConvertOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<OtsConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Ott convert options
 */
// tslint:disable: completed-docs
export class OttConvertOptions extends WordProcessingConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(OttConvertOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<OttConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace OttConvertOptions {
}
// tslint:enable:quotemark
/**
 * Png convert options
 */
// tslint:disable: completed-docs
export class PngConvertOptions extends ImageConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PngConvertOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<PngConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace PngConvertOptions {
}
// tslint:enable:quotemark
/**
 * Potm convert options
 */
// tslint:disable: completed-docs
export class PotmConvertOptions extends PresentationConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PotmConvertOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<PotmConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Potx convert options
 */
// tslint:disable: completed-docs
export class PotxConvertOptions extends PresentationConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PotxConvertOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<PotxConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Pps convert options
 */
// tslint:disable: completed-docs
export class PpsConvertOptions extends PresentationConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PpsConvertOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<PpsConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Ppsm convert options
 */
// tslint:disable: completed-docs
export class PpsmConvertOptions extends PresentationConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PpsmConvertOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<PpsmConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Ppsx convert options
 */
// tslint:disable: completed-docs
export class PpsxConvertOptions extends PresentationConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PpsxConvertOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<PpsxConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Ppt convert options
 */
// tslint:disable: completed-docs
export class PptConvertOptions extends PresentationConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PptConvertOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<PptConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Pptm convert options
 */
// tslint:disable: completed-docs
export class PptmConvertOptions extends PresentationConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PptmConvertOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<PptmConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Pptx convert options
 */
// tslint:disable: completed-docs
export class PptxConvertOptions extends PresentationConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PptxConvertOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<PptxConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Psd convert options
 */
// tslint:disable: completed-docs
export class PsdConvertOptions extends ImageConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "channelBitsCount",
            baseName: "channelBitsCount",
            type: "number",
        },        
        {
            name: "channelsCount",
            baseName: "channelsCount",
            type: "number",
        },        
        {
            name: "colorMode",
            baseName: "colorMode",
            type: "PsdConvertOptions.ColorModeEnum",
        },        
        {
            name: "compressionMethod",
            baseName: "compressionMethod",
            type: "PsdConvertOptions.CompressionMethodEnum",
        },        
        {
            name: "version",
            baseName: "version",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PsdConvertOptions.attributeTypeMap);
    }

    /**
     * Bits count per color channel
     */
    public channelBitsCount: number;
    
    /**
     * Color channels count
     */
    public channelsCount: number;
    
    /**
     * Psd color mode
     */
    public colorMode: PsdConvertOptions.ColorModeEnum;
    
    /**
     * Psd compression method
     */
    public compressionMethod: PsdConvertOptions.CompressionMethodEnum;
    
    /**
     * Psd file version
     */
    public version: number;
    
    public constructor(init?: Partial<PsdConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace PsdConvertOptions {
    export enum ColorModeEnum {
        Bitmap = 'Bitmap' as any,
        Grayscale = 'Grayscale' as any,
        Indexed = 'Indexed' as any,
        Rgb = 'Rgb' as any,
        Cmyk = 'Cmyk' as any,
        Multichannel = 'Multichannel' as any,
        Duotone = 'Duotone' as any,
        Lab = 'Lab' as any,
    }
    export enum CompressionMethodEnum {
        Raw = 'Raw' as any,
        Rle = 'Rle' as any,
        ZipWithoutPrediction = 'ZipWithoutPrediction' as any,
        ZipWithPrediction = 'ZipWithPrediction' as any,
    }
}
// tslint:enable:quotemark
/**
 * Rtf convert options
 */
// tslint:disable: completed-docs
export class RtfConvertOptions extends WordProcessingConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "exportImagesForOldReaders",
            baseName: "exportImagesForOldReaders",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(RtfConvertOptions.attributeTypeMap);
    }

    /**
     * Specifies whether the keywords for \"old readers\" are written to RTF or not. This can significantly affect the size of the RTF document. Default is False.
     */
    public exportImagesForOldReaders: boolean;
    
    public constructor(init?: Partial<RtfConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace RtfConvertOptions {
}
// tslint:enable:quotemark
/**
 * Tiff convert options
 */
// tslint:disable: completed-docs
export class TiffConvertOptions extends ImageConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "compression",
            baseName: "compression",
            type: "TiffConvertOptions.CompressionEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TiffConvertOptions.attributeTypeMap);
    }

    /**
     * Set Tiff compression
     */
    public compression: TiffConvertOptions.CompressionEnum;
    
    public constructor(init?: Partial<TiffConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace TiffConvertOptions {
    export enum CompressionEnum {
        Lzw = 'Lzw' as any,
        None = 'None' as any,
        Ccitt3 = 'Ccitt3' as any,
        Ccitt4 = 'Ccitt4' as any,
        Rle = 'Rle' as any,
    }
}
// tslint:enable:quotemark
/**
 * Tsv convert options
 */
// tslint:disable: completed-docs
export class TsvConvertOptions extends SpreadsheetConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TsvConvertOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<TsvConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Tsv load options
 */
// tslint:disable: completed-docs
export class TsvLoadOptions extends SpreadsheetLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TsvLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<TsvLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace TsvLoadOptions {
}
// tslint:enable:quotemark
/**
 * Webp convert options
 */
// tslint:disable: completed-docs
export class WebpConvertOptions extends ImageConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "lossless",
            baseName: "lossless",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WebpConvertOptions.attributeTypeMap);
    }

    /**
     * Indicates if the compression of the converted file will be lossless
     */
    public lossless: boolean;
    
    public constructor(init?: Partial<WebpConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace WebpConvertOptions {
}
// tslint:enable:quotemark
/**
 * Wmf convert options
 */
// tslint:disable: completed-docs
export class WmfConvertOptions extends ImageConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WmfConvertOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<WmfConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace WmfConvertOptions {
}
// tslint:enable:quotemark
/**
 * Xls2003 convert options
 */
// tslint:disable: completed-docs
export class Xls2003ConvertOptions extends SpreadsheetConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Xls2003ConvertOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<Xls2003ConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Xls convert options
 */
// tslint:disable: completed-docs
export class XlsConvertOptions extends SpreadsheetConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(XlsConvertOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<XlsConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Xlsb convert options
 */
// tslint:disable: completed-docs
export class XlsbConvertOptions extends SpreadsheetConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(XlsbConvertOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<XlsbConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Xlsm convert options
 */
// tslint:disable: completed-docs
export class XlsmConvertOptions extends SpreadsheetConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(XlsmConvertOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<XlsmConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Xlsx convert options
 */
// tslint:disable: completed-docs
export class XlsxConvertOptions extends SpreadsheetConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(XlsxConvertOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<XlsxConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Xltm convert options
 */
// tslint:disable: completed-docs
export class XltmConvertOptions extends SpreadsheetConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(XltmConvertOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<XltmConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Xltx convert options
 */
// tslint:disable: completed-docs
export class XltxConvertOptions extends SpreadsheetConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(XltxConvertOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<XltxConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * J2c convert options
 */
// tslint:disable: completed-docs
export class J2cConvertOptions extends JpgConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(J2cConvertOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<J2cConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace J2cConvertOptions {
}
// tslint:enable:quotemark
/**
 * J2k convert options
 */
// tslint:disable: completed-docs
export class J2kConvertOptions extends JpgConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(J2kConvertOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<J2kConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace J2kConvertOptions {
}
// tslint:enable:quotemark
/**
 * Jp2 convert options
 */
// tslint:disable: completed-docs
export class Jp2ConvertOptions extends JpgConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Jp2ConvertOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<Jp2ConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace Jp2ConvertOptions {
}
// tslint:enable:quotemark
/**
 * Jpeg convert options
 */
// tslint:disable: completed-docs
export class JpegConvertOptions extends JpgConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(JpegConvertOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<JpegConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace JpegConvertOptions {
}
// tslint:enable:quotemark
/**
 * Jpf convert options
 */
// tslint:disable: completed-docs
export class JpfConvertOptions extends JpgConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(JpfConvertOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<JpfConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace JpfConvertOptions {
}
// tslint:enable:quotemark
/**
 * Jpm convert options
 */
// tslint:disable: completed-docs
export class JpmConvertOptions extends JpgConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(JpmConvertOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<JpmConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace JpmConvertOptions {
}
// tslint:enable:quotemark
/**
 * Jpx convert options
 */
// tslint:disable: completed-docs
export class JpxConvertOptions extends JpgConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(JpxConvertOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<JpxConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace JpxConvertOptions {
}
// tslint:enable:quotemark
/**
 * Tif convert options
 */
// tslint:disable: completed-docs
export class TifConvertOptions extends TiffConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TifConvertOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<TifConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace TifConvertOptions {
}
// tslint:enable:quotemark
const enumsMap = {
    "FieldLabel.FieldEnum": FieldLabel.FieldEnum,
    "OperationResult.MethodEnum": OperationResult.MethodEnum,
    "OperationResult.StatusEnum": OperationResult.StatusEnum,
    "CadLoadOptions.DrawTypeEnum": CadLoadOptions.DrawTypeEnum,
    "EBookConvertOptions.PageSizeEnum": EBookConvertOptions.PageSizeEnum,
    "EBookConvertOptions.PageOrientationEnum": EBookConvertOptions.PageOrientationEnum,
    "ImageConvertOptions.FlipModeEnum": ImageConvertOptions.FlipModeEnum,
    "PdfConvertOptions.PdfFormatEnum": PdfConvertOptions.PdfFormatEnum,
    "PdfConvertOptions.DirectionEnum": PdfConvertOptions.DirectionEnum,
    "PdfConvertOptions.NonFullScreenPageModeEnum": PdfConvertOptions.NonFullScreenPageModeEnum,
    "PdfConvertOptions.PageLayoutEnum": PdfConvertOptions.PageLayoutEnum,
    "PdfConvertOptions.PageModeEnum": PdfConvertOptions.PageModeEnum,
    "PdfConvertOptions.RotateEnum": PdfConvertOptions.RotateEnum,
    "PdfConvertOptions.PageSizeEnum": PdfConvertOptions.PageSizeEnum,
    "PdfConvertOptions.PageOrientationEnum": PdfConvertOptions.PageOrientationEnum,
    "PresentationLoadOptions.CommentsPositionEnum": PresentationLoadOptions.CommentsPositionEnum,
    "PresentationLoadOptions.NotesPositionEnum": PresentationLoadOptions.NotesPositionEnum,
    "SpreadsheetLoadOptions.PrintCommentsEnum": SpreadsheetLoadOptions.PrintCommentsEnum,
    "TxtLoadOptions.TrailingSpacesOptionsEnum": TxtLoadOptions.TrailingSpacesOptionsEnum,
    "TxtLoadOptions.LeadingSpacesOptionsEnum": TxtLoadOptions.LeadingSpacesOptionsEnum,
    "WebLoadOptions.RenderingModeEnum": WebLoadOptions.RenderingModeEnum,
    "WebLoadOptions.PageLayoutEnum": WebLoadOptions.PageLayoutEnum,
    "WordProcessingConvertOptions.PdfRecognitionModeEnum": WordProcessingConvertOptions.PdfRecognitionModeEnum,
    "WordProcessingConvertOptions.PageSizeEnum": WordProcessingConvertOptions.PageSizeEnum,
    "WordProcessingConvertOptions.PageOrientationEnum": WordProcessingConvertOptions.PageOrientationEnum,
    "WordProcessingLoadOptions.CommentDisplayModeEnum": WordProcessingLoadOptions.CommentDisplayModeEnum,
    "PsdConvertOptions.ColorModeEnum": PsdConvertOptions.ColorModeEnum,
    "PsdConvertOptions.CompressionMethodEnum": PsdConvertOptions.CompressionMethodEnum,
    "TiffConvertOptions.CompressionEnum": TiffConvertOptions.CompressionEnum,
};

const typeMap = {
            ApiError,
            ApiErrorResponse,
            ConsumptionResult,
            ConvertOptions,
            ConvertSettings,
            DiscUsage,
            DocumentMetadata,
            ErrorDetails,
            FieldLabel,
            FileVersions,
            FilesList,
            FilesUploadResult,
            LicenseInfo,
            LoadOptions,
            ModelError,
            ObjectExist,
            OperationResult,
            StorageExist,
            StorageFile,
            StoredConvertedResult,
            SupportedFormat,
            WatermarkOptions,
            CadLoadOptions,
            CompressionLoadOptions,
            DatabaseLoadOptions,
            DiagramLoadOptions,
            EBookConvertOptions,
            EBookLoadOptions,
            EmailLoadOptions,
            FileVersion,
            FinanceLoadOptions,
            FontLoadOptions,
            GisLoadOptions,
            ImageConvertOptions,
            ImageLoadOptions,
            MboxLoadOptions,
            NoteLoadOptions,
            OlmLoadOptions,
            PDLConvertOptions,
            PdfConvertOptions,
            PdfLoadOptions,
            PdlLoadOptions,
            PersonalStorageLoadOptions,
            PresentationConvertOptions,
            PresentationLoadOptions,
            PubLoadOptions,
            SpreadsheetConvertOptions,
            SpreadsheetLoadOptions,
            ThreeDLoadOptions,
            TxtConvertOptions,
            TxtLoadOptions,
            VcfLoadOptions,
            WebConvertOptions,
            WebLoadOptions,
            WordProcessingConvertOptions,
            WordProcessingLoadOptions,
            XmlLoadOptions,
            BmpConvertOptions,
            CsvLoadOptions,
            DcmConvertOptions,
            DjvuConvertOptions,
            DngConvertOptions,
            DocConvertOptions,
            DocmConvertOptions,
            DocxConvertOptions,
            DotConvertOptions,
            DotmConvertOptions,
            DotxConvertOptions,
            EmfConvertOptions,
            GifConvertOptions,
            IcoConvertOptions,
            JpgConvertOptions,
            OdgConvertOptions,
            OdpConvertOptions,
            OdsConvertOptions,
            OdtConvertOptions,
            OtpConvertOptions,
            OtsConvertOptions,
            OttConvertOptions,
            PngConvertOptions,
            PotmConvertOptions,
            PotxConvertOptions,
            PpsConvertOptions,
            PpsmConvertOptions,
            PpsxConvertOptions,
            PptConvertOptions,
            PptmConvertOptions,
            PptxConvertOptions,
            PsdConvertOptions,
            RtfConvertOptions,
            TiffConvertOptions,
            TsvConvertOptions,
            TsvLoadOptions,
            WebpConvertOptions,
            WmfConvertOptions,
            Xls2003ConvertOptions,
            XlsConvertOptions,
            XlsbConvertOptions,
            XlsmConvertOptions,
            XlsxConvertOptions,
            XltmConvertOptions,
            XltxConvertOptions,
            J2cConvertOptions,
            J2kConvertOptions,
            Jp2ConvertOptions,
            JpegConvertOptions,
            JpfConvertOptions,
            JpmConvertOptions,
            JpxConvertOptions,
            TifConvertOptions,
};

export {enumsMap, typeMap};

/**
 * Request model for GetOperationResult operation.
 */
export class GetOperationResultRequest {
    /**
     * Gets or sets id
     */
    public id: string;
    
    public constructor(id: string) {        
        this.id = id;
    }
}

/**
 * Request model for GetOperationStatus operation.
 */
export class GetOperationStatusRequest {
    /**
     * Gets or sets id
     */
    public id: string;
    
    public constructor(id: string) {        
        this.id = id;
    }
}

/**
 * Request model for StartConvert operation.
 */
export class StartConvertRequest {
    /**
     * Requested conversion format
     */
    public format: string;

    /**
     * Input file to convert
     */
    public file: Buffer;

    /**
     * Page start conversion from
     */
    public fromPage: number;

    /**
     * Number of pages to convert
     */
    public pagesCount: number;
    
    public constructor(format: string, file: Buffer, fromPage?: number, pagesCount?: number) {        
        this.format = format;
        this.file = file;
        this.fromPage = fromPage;
        this.pagesCount = pagesCount;
    }
}

/**
 * Request model for StartConvertAndSave operation.
 */
export class StartConvertAndSaveRequest {
    /**
     * Conversion settings
     */
    public convertSettings: ConvertSettings;
    
    public constructor(convertSettings: ConvertSettings) {        
        this.convertSettings = convertSettings;
    }
}

/**
 * Request model for ConvertDocument operation.
 */
export class ConvertDocumentRequest {
    /**
     * Gets or sets convertSettings
     */
    public convertSettings: ConvertSettings;
    
    public constructor(convertSettings: ConvertSettings) {        
        this.convertSettings = convertSettings;
    }
}

/**
 * Request model for ConvertDocumentDirect operation.
 */
export class ConvertDocumentDirectRequest {
    /**
     * Requested conversion format
     */
    public format: string;

    /**
     * Input file to convert
     */
    public file: Buffer;

    /**
     * Page start conversion from
     */
    public fromPage: number;

    /**
     * Number of pages to convert
     */
    public pagesCount: number;

    /**
     * Input file load options
     */
    public loadOptions: LoadOptions;

    /**
     * Conversion options
     */
    public convertOptions: ConvertOptions;
    
    public constructor(format: string, file: Buffer, fromPage?: number, pagesCount?: number, loadOptions?: LoadOptions, convertOptions?: ConvertOptions) {        
        this.format = format;
        this.file = file;
        this.fromPage = fromPage;
        this.pagesCount = pagesCount;
        this.loadOptions = loadOptions;
        this.convertOptions = convertOptions;
    }
}

/**
 * Request model for CopyFile operation.
 */
export class CopyFileRequest {
    /**
     * Source file path e.g. '/folder/file.ext'
     */
    public srcPath: string;

    /**
     * Destination file path
     */
    public destPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;

    /**
     * File version ID to copy
     */
    public versionId: string;
    
    public constructor(srcPath: string, destPath: string, srcStorageName?: string, destStorageName?: string, versionId?: string) {        
        this.srcPath = srcPath;
        this.destPath = destPath;
        this.srcStorageName = srcStorageName;
        this.destStorageName = destStorageName;
        this.versionId = versionId;
    }
}

/**
 * Request model for DeleteFile operation.
 */
export class DeleteFileRequest {
    /**
     * File path e.g. '/folder/file.ext'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * File version ID to delete
     */
    public versionId: string;
    
    public constructor(path: string, storageName?: string, versionId?: string) {        
        this.path = path;
        this.storageName = storageName;
        this.versionId = versionId;
    }
}

/**
 * Request model for DownloadFile operation.
 */
export class DownloadFileRequest {
    /**
     * File path e.g. '/folder/file.ext'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * File version ID to download
     */
    public versionId: string;
    
    public constructor(path: string, storageName?: string, versionId?: string) {        
        this.path = path;
        this.storageName = storageName;
        this.versionId = versionId;
    }
}

/**
 * Request model for MoveFile operation.
 */
export class MoveFileRequest {
    /**
     * Source file path e.g. '/src.ext'
     */
    public srcPath: string;

    /**
     * Destination file path e.g. '/dest.ext'
     */
    public destPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;

    /**
     * File version ID to move
     */
    public versionId: string;
    
    public constructor(srcPath: string, destPath: string, srcStorageName?: string, destStorageName?: string, versionId?: string) {        
        this.srcPath = srcPath;
        this.destPath = destPath;
        this.srcStorageName = srcStorageName;
        this.destStorageName = destStorageName;
        this.versionId = versionId;
    }
}

/**
 * Request model for UploadFile operation.
 */
export class UploadFileRequest {
    /**
     * Path where to upload including filename and extension e.g. /file.ext or /Folder 1/file.ext             If the content is multipart and path does not contains the file name it tries to get them from filename parameter             from Content-Disposition header.             
     */
    public path: string;

    /**
     * File to upload
     */
    public file: Buffer;

    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(path: string, file: Buffer, storageName?: string) {        
        this.path = path;
        this.file = file;
        this.storageName = storageName;
    }
}

/**
 * Request model for CopyFolder operation.
 */
export class CopyFolderRequest {
    /**
     * Source folder path e.g. '/src'
     */
    public srcPath: string;

    /**
     * Destination folder path e.g. '/dst'
     */
    public destPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;
    
    public constructor(srcPath: string, destPath: string, srcStorageName?: string, destStorageName?: string) {        
        this.srcPath = srcPath;
        this.destPath = destPath;
        this.srcStorageName = srcStorageName;
        this.destStorageName = destStorageName;
    }
}

/**
 * Request model for CreateFolder operation.
 */
export class CreateFolderRequest {
    /**
     * Folder path to create e.g. 'folder_1/folder_2/'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(path: string, storageName?: string) {        
        this.path = path;
        this.storageName = storageName;
    }
}

/**
 * Request model for DeleteFolder operation.
 */
export class DeleteFolderRequest {
    /**
     * Folder path e.g. '/folder'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * Enable to delete folders, subfolders and files
     */
    public recursive: boolean;
    
    public constructor(path: string, storageName?: string, recursive?: boolean) {        
        this.path = path;
        this.storageName = storageName;
        this.recursive = recursive;
    }
}

/**
 * Request model for GetFilesList operation.
 */
export class GetFilesListRequest {
    /**
     * Folder path e.g. '/folder'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(path: string, storageName?: string) {        
        this.path = path;
        this.storageName = storageName;
    }
}

/**
 * Request model for MoveFolder operation.
 */
export class MoveFolderRequest {
    /**
     * Folder path to move e.g. '/folder'
     */
    public srcPath: string;

    /**
     * Destination folder path to move to e.g '/dst'
     */
    public destPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;
    
    public constructor(srcPath: string, destPath: string, srcStorageName?: string, destStorageName?: string) {        
        this.srcPath = srcPath;
        this.destPath = destPath;
        this.srcStorageName = srcStorageName;
        this.destStorageName = destStorageName;
    }
}

/**
 * Request model for GetDocumentMetadata operation.
 */
export class GetDocumentMetadataRequest {
    /**
     * Absolute path to a document in the storage
     */
    public filePath: string;

    /**
     * StorageName which contains the document
     */
    public storageName: string;
    
    public constructor(filePath?: string, storageName?: string) {        
        this.filePath = filePath;
        this.storageName = storageName;
    }
}

/**
 * Request model for GetSupportedConversionTypes operation.
 */
export class GetSupportedConversionTypesRequest {
    /**
     * Absolute path to a document in the storage
     */
    public filePath: string;

    /**
     * StorageName which contains the document
     */
    public storageName: string;

    /**
     * If provided only supported conversions for specified format will be returned
     */
    public format: string;
    
    public constructor(filePath?: string, storageName?: string, format?: string) {        
        this.filePath = filePath;
        this.storageName = storageName;
        this.format = format;
    }
}

/**
 * Request model for GetDiscUsage operation.
 */
export class GetDiscUsageRequest {
    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(storageName?: string) {        
        this.storageName = storageName;
    }
}

/**
 * Request model for GetFileVersions operation.
 */
export class GetFileVersionsRequest {
    /**
     * File path e.g. '/file.ext'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(path: string, storageName?: string) {        
        this.path = path;
        this.storageName = storageName;
    }
}

/**
 * Request model for ObjectExists operation.
 */
export class ObjectExistsRequest {
    /**
     * File or folder path e.g. '/file.ext' or '/folder'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * File version ID
     */
    public versionId: string;
    
    public constructor(path: string, storageName?: string, versionId?: string) {        
        this.path = path;
        this.storageName = storageName;
        this.versionId = versionId;
    }
}

/**
 * Request model for StorageExists operation.
 */
export class StorageExistsRequest {
    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(storageName: string) {        
        this.storageName = storageName;
    }
}
