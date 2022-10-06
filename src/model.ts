/*
* The MIT License (MIT)
*
* Copyright (c) 2003-2022 Aspose Pty Ltd
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
            name: "layoutNames",
            baseName: "layoutNames",
            type: "Array<string>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(CadLoadOptions.attributeTypeMap);
    }

    /**
     * Set desired page width for converting CAD document
     */
    public width: number;
    
    /**
     * Set desired page height for converting CAD document
     */
    public height: number;
    
    /**
     * Render specific CAD layouts
     */
    public layoutNames: Array<string>;
    
    public constructor(init?: Partial<CadLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Csv document load options
 */
// tslint:disable: completed-docs
export class CsvLoadOptions extends LoadOptions {

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
 * Options for loading Email documents
 */
// tslint:disable: completed-docs
export class EmailLoadOptions extends LoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "displayHeader",
            baseName: "displayHeader",
            type: "boolean",
        },        
        {
            name: "displayFromEmailAddress",
            baseName: "displayFromEmailAddress",
            type: "boolean",
        },        
        {
            name: "displayEmailAddress",
            baseName: "displayEmailAddress",
            type: "boolean",
        },        
        {
            name: "displayToEmailAddress",
            baseName: "displayToEmailAddress",
            type: "boolean",
        },        
        {
            name: "displayCcEmailAddress",
            baseName: "displayCcEmailAddress",
            type: "boolean",
        },        
        {
            name: "displayBccEmailAddress",
            baseName: "displayBccEmailAddress",
            type: "boolean",
        },        
        {
            name: "timeZoneOffset",
            baseName: "timeZoneOffset",
            type: "string",
        },        
        {
            name: "convertAttachments",
            baseName: "convertAttachments",
            type: "boolean",
        },        
        {
            name: "fieldLabels",
            baseName: "fieldLabels",
            type: "Array<FieldLabel>",
        },        
        {
            name: "preserveOriginalDate",
            baseName: "preserveOriginalDate",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(EmailLoadOptions.attributeTypeMap);
    }

    /**
     * Option to display or hide the email header. Default: true
     */
    public displayHeader: boolean;
    
    /**
     * Option to display or hide \"from\" email address. Default: true
     */
    public displayFromEmailAddress: boolean;
    
    /**
     * Option to display or hide email address. Default: true
     */
    public displayEmailAddress: boolean;
    
    /**
     * Option to display or hide \"to\" email address. Default: true
     */
    public displayToEmailAddress: boolean;
    
    /**
     * Option to display or hide \"Cc\" email address. Default: false
     */
    public displayCcEmailAddress: boolean;
    
    /**
     * Option to display or hide \"Bcc\" email address. Default: false
     */
    public displayBccEmailAddress: boolean;
    
    /**
     * Gets or sets the Coordinated Universal Time (UTC) offset for the message dates. This property defines the time zone difference, between the localtime and UTC.
     */
    public timeZoneOffset: string;
    
    /**
     * Option to convert attachments in source email or not. Default: false.
     */
    public convertAttachments: boolean;
    
    /**
     * The mapping between email message field and field text representation
     */
    public fieldLabels: Array<FieldLabel>;
    
    /**
     * Defines whether need to keep original date header string in mail message when saving or not (Default value is true)
     */
    public preserveOriginalDate: boolean;
    
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
 * Options for to Html conversion
 */
// tslint:disable: completed-docs
export class HtmlConvertOptions extends ConvertOptions {

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
        return super.getAttributeTypeMap().concat(HtmlConvertOptions.attributeTypeMap);
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
    
    /**
     * Watermark specific options
     */
    public watermarkOptions: WatermarkOptions;
    
    public constructor(init?: Partial<HtmlConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Html document load options
 */
// tslint:disable: completed-docs
export class HtmlLoadOptions extends LoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "pageNumbering",
            baseName: "pageNumbering",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(HtmlLoadOptions.attributeTypeMap);
    }

    /**
     * Enable or disable generation of page numbering in converted document. Default: false
     */
    public pageNumbering: boolean;
    
    public constructor(init?: Partial<HtmlLoadOptions>) {
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
            name: "watermarkOptions",
            baseName: "watermarkOptions",
            type: "WatermarkOptions",
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
     * Watermark specific options
     */
    public watermarkOptions: WatermarkOptions;
    
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
 * One document load options
 */
// tslint:disable: completed-docs
export class OneLoadOptions extends LoadOptions {

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
        return super.getAttributeTypeMap().concat(OneLoadOptions.attributeTypeMap);
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
    
    public constructor(init?: Partial<OneLoadOptions>) {
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
            name: "watermarkOptions",
            baseName: "watermarkOptions",
            type: "WatermarkOptions",
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
     * Watermark specific options
     */
    public watermarkOptions: WatermarkOptions;
    
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
            name: "removeEmbeddedFiles",
            baseName: "removeEmbeddedFiles",
            type: "boolean",
        },        
        {
            name: "password",
            baseName: "password",
            type: "string",
        },        
        {
            name: "hidePdfAnnotations",
            baseName: "hidePdfAnnotations",
            type: "boolean",
        },        
        {
            name: "flattenAllFields",
            baseName: "flattenAllFields",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PdfLoadOptions.attributeTypeMap);
    }

    /**
     * Remove embedded files
     */
    public removeEmbeddedFiles: boolean;
    
    /**
     * Set password to unprotect protected document
     */
    public password: string;
    
    /**
     * Hide annotations in Pdf documents
     */
    public hidePdfAnnotations: boolean;
    
    /**
     * Flatten all the fields of the PDF form
     */
    public flattenAllFields: boolean;
    
    public constructor(init?: Partial<PdfLoadOptions>) {
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
    
    /**
     * Watermark specific options
     */
    public watermarkOptions: WatermarkOptions;
    
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
            name: "hideComments",
            baseName: "hideComments",
            type: "boolean",
        },        
        {
            name: "showHiddenSlides",
            baseName: "showHiddenSlides",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PresentationLoadOptions.attributeTypeMap);
    }

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
     * Hide comments
     */
    public hideComments: boolean;
    
    /**
     * Show hidden slides
     */
    public showHiddenSlides: boolean;
    
    public constructor(init?: Partial<PresentationLoadOptions>) {
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
    
    /**
     * Watermark specific options
     */
    public watermarkOptions: WatermarkOptions;
    
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
            name: "showGridLines",
            baseName: "showGridLines",
            type: "boolean",
        },        
        {
            name: "showHiddenSheets",
            baseName: "showHiddenSheets",
            type: "boolean",
        },        
        {
            name: "onePagePerSheet",
            baseName: "onePagePerSheet",
            type: "boolean",
        },        
        {
            name: "convertRange",
            baseName: "convertRange",
            type: "string",
        },        
        {
            name: "skipEmptyRowsAndColumns",
            baseName: "skipEmptyRowsAndColumns",
            type: "boolean",
        },        
        {
            name: "password",
            baseName: "password",
            type: "string",
        },        
        {
            name: "hideComments",
            baseName: "hideComments",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SpreadsheetLoadOptions.attributeTypeMap);
    }

    /**
     * Default font for Cells document. The following font will be used if a font is missing.
     */
    public defaultFont: string;
    
    /**
     * Substitute specific fonts when converting Cells document.
     */
    public fontSubstitutes: { [key: string]: string; };
    
    /**
     * Show grid lines when converting Excel files
     */
    public showGridLines: boolean;
    
    /**
     * Show hidden sheets when converting Excel files
     */
    public showHiddenSheets: boolean;
    
    /**
     * If OnePagePerSheet is true the content of the sheet will be converted to one page in the PDF document. Default value is true.
     */
    public onePagePerSheet: boolean;
    
    /**
     * Convert specific range when converting to other than cells format. Example: \"D1:F8\"
     */
    public convertRange: string;
    
    /**
     * Skips empty rows and columns when converting. Default is True.
     */
    public skipEmptyRowsAndColumns: boolean;
    
    /**
     * Set password to unprotect protected document
     */
    public password: string;
    
    /**
     * Hide comments
     */
    public hideComments: boolean;
    
    public constructor(init?: Partial<SpreadsheetLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Svg convert options
 */
// tslint:disable: completed-docs
export class SvgConvertOptions extends ConvertOptions {

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
            name: "watermarkOptions",
            baseName: "watermarkOptions",
            type: "WatermarkOptions",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SvgConvertOptions.attributeTypeMap);
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
     * Watermark specific options
     */
    public watermarkOptions: WatermarkOptions;
    
    public constructor(init?: Partial<SvgConvertOptions>) {
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
            name: "watermarkOptions",
            baseName: "watermarkOptions",
            type: "WatermarkOptions",
        },        
        {
            name: "pdfRecognitionMode",
            baseName: "pdfRecognitionMode",
            type: "WordProcessingConvertOptions.PdfRecognitionModeEnum",
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
     * Watermark specific options
     */
    public watermarkOptions: WatermarkOptions;
    
    /**
     * Recognition mode when converting from pdf
     */
    public pdfRecognitionMode: WordProcessingConvertOptions.PdfRecognitionModeEnum;
    
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
            name: "autoFontSubstitution",
            baseName: "autoFontSubstitution",
            type: "boolean",
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
            name: "hideComments",
            baseName: "hideComments",
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
     * If AutoFontSubstitution is disabled, GroupDocs.Conversion uses the DefaultFont for the substitution of missing fonts. If AutoFontSubstitution is enabled, GroupDocs.Conversion evaluates all the related fields in FontInfo (Panose, Sig etc) for the missing font and finds the closest match among the available font sources. Note that font substitution mechanism will override the DefaultFont in cases when FontInfo for the missing font is available in the document. The default value is True.
     */
    public autoFontSubstitution: boolean;
    
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
     * Hide comments
     */
    public hideComments: boolean;
    
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
    
    public constructor(init?: Partial<WordProcessingLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

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
 * Xps convert options
 */
// tslint:disable: completed-docs
export class XpsConvertOptions extends ConvertOptions {

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
            name: "usePdf",
            baseName: "usePdf",
            type: "boolean",
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
        return super.getAttributeTypeMap().concat(XpsConvertOptions.attributeTypeMap);
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
     * If true, the input firstly is converted to PDF and after that to desired format
     */
    public usePdf: boolean;
    
    /**
     * Watermark specific options
     */
    public watermarkOptions: WatermarkOptions;
    
    public constructor(init?: Partial<XpsConvertOptions>) {
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
 * Bmp load options
 */
// tslint:disable: completed-docs
export class BmpLoadOptions extends ImageLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(BmpLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<BmpLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Cgm convert options
 */
// tslint:disable: completed-docs
export class CgmConvertOptions extends ImageConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(CgmConvertOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<CgmConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace CgmConvertOptions {
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
 * Dcm load options
 */
// tslint:disable: completed-docs
export class DcmLoadOptions extends ImageLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DcmLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<DcmLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Dgn load options
 */
// tslint:disable: completed-docs
export class DgnLoadOptions extends CadLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DgnLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<DgnLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

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
 * Dng load options
 */
// tslint:disable: completed-docs
export class DngLoadOptions extends ImageLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DngLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<DngLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

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
 * Doc load options
 */
// tslint:disable: completed-docs
export class DocLoadOptions extends WordProcessingLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DocLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<DocLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

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
 * Docm load options
 */
// tslint:disable: completed-docs
export class DocmLoadOptions extends WordProcessingLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DocmLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<DocmLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

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
 * Docx load options
 */
// tslint:disable: completed-docs
export class DocxLoadOptions extends WordProcessingLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DocxLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<DocxLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

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
 * Dot load options
 */
// tslint:disable: completed-docs
export class DotLoadOptions extends WordProcessingLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DotLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<DotLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

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
 * Dotm load options
 */
// tslint:disable: completed-docs
export class DotmLoadOptions extends WordProcessingLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DotmLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<DotmLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

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
 * Dotx load options
 */
// tslint:disable: completed-docs
export class DotxLoadOptions extends WordProcessingLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DotxLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<DotxLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Dwf load options
 */
// tslint:disable: completed-docs
export class DwfLoadOptions extends CadLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DwfLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<DwfLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Dwg load options
 */
// tslint:disable: completed-docs
export class DwgLoadOptions extends CadLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DwgLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<DwgLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Dxf load options
 */
// tslint:disable: completed-docs
export class DxfLoadOptions extends CadLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DxfLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<DxfLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

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
 * Emf load options
 */
// tslint:disable: completed-docs
export class EmfLoadOptions extends ImageLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(EmfLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<EmfLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Eml load options
 */
// tslint:disable: completed-docs
export class EmlLoadOptions extends EmailLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(EmlLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<EmlLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Emlx load options
 */
// tslint:disable: completed-docs
export class EmlxLoadOptions extends EmailLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(EmlxLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<EmlxLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Epub convert options
 */
// tslint:disable: completed-docs
export class EpubConvertOptions extends XpsConvertOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(EpubConvertOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<EpubConvertOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

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
 * Gif load options
 */
// tslint:disable: completed-docs
export class GifLoadOptions extends ImageLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(GifLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<GifLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

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
 * Ico load options
 */
// tslint:disable: completed-docs
export class IcoLoadOptions extends ImageLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(IcoLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<IcoLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Ifc load options
 */
// tslint:disable: completed-docs
export class IfcLoadOptions extends CadLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(IfcLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<IfcLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Igs load options
 */
// tslint:disable: completed-docs
export class IgsLoadOptions extends CadLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(IgsLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<IgsLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * J2c load options
 */
// tslint:disable: completed-docs
export class J2cLoadOptions extends ImageLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(J2cLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<J2cLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * J2k load options
 */
// tslint:disable: completed-docs
export class J2kLoadOptions extends ImageLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(J2kLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<J2kLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Jp2 load options
 */
// tslint:disable: completed-docs
export class Jp2LoadOptions extends ImageLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Jp2LoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<Jp2LoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Jpeg load options
 */
// tslint:disable: completed-docs
export class JpegLoadOptions extends ImageLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(JpegLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<JpegLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Jpf load options
 */
// tslint:disable: completed-docs
export class JpfLoadOptions extends ImageLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(JpfLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<JpfLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

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
 * Jpg load options
 */
// tslint:disable: completed-docs
export class JpgLoadOptions extends ImageLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(JpgLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<JpgLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Jpm load options
 */
// tslint:disable: completed-docs
export class JpmLoadOptions extends ImageLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(JpmLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<JpmLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Jpx load options
 */
// tslint:disable: completed-docs
export class JpxLoadOptions extends ImageLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(JpxLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<JpxLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Mht load options
 */
// tslint:disable: completed-docs
export class MhtLoadOptions extends EmailLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MhtLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<MhtLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Mobi load options
 */
// tslint:disable: completed-docs
export class MobiLoadOptions extends WordProcessingLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MobiLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<MobiLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Msg load options
 */
// tslint:disable: completed-docs
export class MsgLoadOptions extends EmailLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MsgLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<MsgLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

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
 * Odg load options
 */
// tslint:disable: completed-docs
export class OdgLoadOptions extends ImageLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(OdgLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<OdgLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

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
 * Odp load options
 */
// tslint:disable: completed-docs
export class OdpLoadOptions extends PresentationLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(OdpLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<OdpLoadOptions>) {
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
 * Ods load options
 */
// tslint:disable: completed-docs
export class OdsLoadOptions extends SpreadsheetLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(OdsLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<OdsLoadOptions>) {
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
 * Odt load options
 */
// tslint:disable: completed-docs
export class OdtLoadOptions extends WordProcessingLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(OdtLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<OdtLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Ost load options
 */
// tslint:disable: completed-docs
export class OstLoadOptions extends EmailLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(OstLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<OstLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

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
 * Otp load options
 */
// tslint:disable: completed-docs
export class OtpLoadOptions extends PresentationLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(OtpLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<OtpLoadOptions>) {
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
 * Ots load options
 */
// tslint:disable: completed-docs
export class OtsLoadOptions extends SpreadsheetLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(OtsLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<OtsLoadOptions>) {
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
 * Ott load options
 */
// tslint:disable: completed-docs
export class OttLoadOptions extends WordProcessingLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(OttLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<OttLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Plt load options
 */
// tslint:disable: completed-docs
export class PltLoadOptions extends CadLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PltLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<PltLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

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
 * Png load options
 */
// tslint:disable: completed-docs
export class PngLoadOptions extends ImageLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PngLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<PngLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

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
 * Potm load options
 */
// tslint:disable: completed-docs
export class PotmLoadOptions extends PresentationLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PotmLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<PotmLoadOptions>) {
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
 * Potx load options
 */
// tslint:disable: completed-docs
export class PotxLoadOptions extends PresentationLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PotxLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<PotxLoadOptions>) {
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
 * Pps load options
 */
// tslint:disable: completed-docs
export class PpsLoadOptions extends PresentationLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PpsLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<PpsLoadOptions>) {
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
 * Ppsm load options
 */
// tslint:disable: completed-docs
export class PpsmLoadOptions extends PresentationLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PpsmLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<PpsmLoadOptions>) {
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
 * Ppsx load options
 */
// tslint:disable: completed-docs
export class PpsxLoadOptions extends PresentationLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PpsxLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<PpsxLoadOptions>) {
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
 * Ppt load options
 */
// tslint:disable: completed-docs
export class PptLoadOptions extends PresentationLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PptLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<PptLoadOptions>) {
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
 * Pptm load options
 */
// tslint:disable: completed-docs
export class PptmLoadOptions extends PresentationLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PptmLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<PptmLoadOptions>) {
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
 * Pptx load options
 */
// tslint:disable: completed-docs
export class PptxLoadOptions extends PresentationLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PptxLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<PptxLoadOptions>) {
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
 * Psd load options
 */
// tslint:disable: completed-docs
export class PsdLoadOptions extends ImageLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PsdLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<PsdLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Pst load options
 */
// tslint:disable: completed-docs
export class PstLoadOptions extends EmailLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PstLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<PstLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

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
 * Stl load options
 */
// tslint:disable: completed-docs
export class StlLoadOptions extends CadLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(StlLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<StlLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Tif load options
 */
// tslint:disable: completed-docs
export class TifLoadOptions extends ImageLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TifLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<TifLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

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
 * Tiff load options
 */
// tslint:disable: completed-docs
export class TiffLoadOptions extends ImageLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TiffLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<TiffLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

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

/**
 * Vdw load options
 */
// tslint:disable: completed-docs
export class VdwLoadOptions extends DiagramLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(VdwLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<VdwLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Vdx load options
 */
// tslint:disable: completed-docs
export class VdxLoadOptions extends DiagramLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(VdxLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<VdxLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Vsd load options
 */
// tslint:disable: completed-docs
export class VsdLoadOptions extends DiagramLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(VsdLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<VsdLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Vsdm load options
 */
// tslint:disable: completed-docs
export class VsdmLoadOptions extends DiagramLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(VsdmLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<VsdmLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Vsdx load options
 */
// tslint:disable: completed-docs
export class VsdxLoadOptions extends DiagramLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(VsdxLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<VsdxLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Vss load options
 */
// tslint:disable: completed-docs
export class VssLoadOptions extends DiagramLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(VssLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<VssLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Vssm load options
 */
// tslint:disable: completed-docs
export class VssmLoadOptions extends DiagramLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(VssmLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<VssmLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Vssx load options
 */
// tslint:disable: completed-docs
export class VssxLoadOptions extends DiagramLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(VssxLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<VssxLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Vst load options
 */
// tslint:disable: completed-docs
export class VstLoadOptions extends DiagramLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(VstLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<VstLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Vstm load options
 */
// tslint:disable: completed-docs
export class VstmLoadOptions extends DiagramLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(VstmLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<VstmLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Vstx load options
 */
// tslint:disable: completed-docs
export class VstxLoadOptions extends DiagramLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(VstxLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<VstxLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Vsx load options
 */
// tslint:disable: completed-docs
export class VsxLoadOptions extends DiagramLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(VsxLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<VsxLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Vtx load options
 */
// tslint:disable: completed-docs
export class VtxLoadOptions extends DiagramLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(VtxLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<VtxLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

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
 * Webp load options
 */
// tslint:disable: completed-docs
export class WebpLoadOptions extends ImageLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WebpLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<WebpLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

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
 * Wmf load options
 */
// tslint:disable: completed-docs
export class WmfLoadOptions extends ImageLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WmfLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<WmfLoadOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

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
 * Xls2003 load options
 */
// tslint:disable: completed-docs
export class Xls2003LoadOptions extends SpreadsheetLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Xls2003LoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<Xls2003LoadOptions>) {
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
 * Xls load options
 */
// tslint:disable: completed-docs
export class XlsLoadOptions extends SpreadsheetLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(XlsLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<XlsLoadOptions>) {
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
 * Xlsb load options
 */
// tslint:disable: completed-docs
export class XlsbLoadOptions extends SpreadsheetLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(XlsbLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<XlsbLoadOptions>) {
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
 * Xlsm load options
 */
// tslint:disable: completed-docs
export class XlsmLoadOptions extends SpreadsheetLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(XlsmLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<XlsmLoadOptions>) {
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
 * Xlsx load options
 */
// tslint:disable: completed-docs
export class XlsxLoadOptions extends SpreadsheetLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(XlsxLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<XlsxLoadOptions>) {
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
 * Xltm load options
 */
// tslint:disable: completed-docs
export class XltmLoadOptions extends SpreadsheetLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(XltmLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<XltmLoadOptions>) {
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
 * Xltx load options
 */
// tslint:disable: completed-docs
export class XltxLoadOptions extends SpreadsheetLoadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(XltxLoadOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<XltxLoadOptions>) {
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
    "ImageConvertOptions.FlipModeEnum": ImageConvertOptions.FlipModeEnum,
    "PdfConvertOptions.PdfFormatEnum": PdfConvertOptions.PdfFormatEnum,
    "PdfConvertOptions.DirectionEnum": PdfConvertOptions.DirectionEnum,
    "PdfConvertOptions.NonFullScreenPageModeEnum": PdfConvertOptions.NonFullScreenPageModeEnum,
    "PdfConvertOptions.PageLayoutEnum": PdfConvertOptions.PageLayoutEnum,
    "PdfConvertOptions.PageModeEnum": PdfConvertOptions.PageModeEnum,
    "PdfConvertOptions.RotateEnum": PdfConvertOptions.RotateEnum,
    "TxtLoadOptions.TrailingSpacesOptionsEnum": TxtLoadOptions.TrailingSpacesOptionsEnum,
    "TxtLoadOptions.LeadingSpacesOptionsEnum": TxtLoadOptions.LeadingSpacesOptionsEnum,
    "WordProcessingConvertOptions.PdfRecognitionModeEnum": WordProcessingConvertOptions.PdfRecognitionModeEnum,
    "PsdConvertOptions.ColorModeEnum": PsdConvertOptions.ColorModeEnum,
    "PsdConvertOptions.CompressionMethodEnum": PsdConvertOptions.CompressionMethodEnum,
    "TiffConvertOptions.CompressionEnum": TiffConvertOptions.CompressionEnum,
};

const typeMap = {
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
            LoadOptions,
            ModelError,
            ObjectExist,
            StorageExist,
            StorageFile,
            StoredConvertedResult,
            SupportedFormat,
            WatermarkOptions,
            CadLoadOptions,
            CsvLoadOptions,
            DiagramLoadOptions,
            EmailLoadOptions,
            FileVersion,
            HtmlConvertOptions,
            HtmlLoadOptions,
            ImageConvertOptions,
            ImageLoadOptions,
            OneLoadOptions,
            PdfConvertOptions,
            PdfLoadOptions,
            PersonalStorageLoadOptions,
            PresentationConvertOptions,
            PresentationLoadOptions,
            SpreadsheetConvertOptions,
            SpreadsheetLoadOptions,
            SvgConvertOptions,
            TxtConvertOptions,
            TxtLoadOptions,
            WordProcessingConvertOptions,
            WordProcessingLoadOptions,
            XmlLoadOptions,
            XpsConvertOptions,
            BmpConvertOptions,
            BmpLoadOptions,
            CgmConvertOptions,
            DcmConvertOptions,
            DcmLoadOptions,
            DgnLoadOptions,
            DjvuConvertOptions,
            DngConvertOptions,
            DngLoadOptions,
            DocConvertOptions,
            DocLoadOptions,
            DocmConvertOptions,
            DocmLoadOptions,
            DocxConvertOptions,
            DocxLoadOptions,
            DotConvertOptions,
            DotLoadOptions,
            DotmConvertOptions,
            DotmLoadOptions,
            DotxConvertOptions,
            DotxLoadOptions,
            DwfLoadOptions,
            DwgLoadOptions,
            DxfLoadOptions,
            EmfConvertOptions,
            EmfLoadOptions,
            EmlLoadOptions,
            EmlxLoadOptions,
            EpubConvertOptions,
            GifConvertOptions,
            GifLoadOptions,
            IcoConvertOptions,
            IcoLoadOptions,
            IfcLoadOptions,
            IgsLoadOptions,
            J2cLoadOptions,
            J2kLoadOptions,
            Jp2LoadOptions,
            JpegLoadOptions,
            JpfLoadOptions,
            JpgConvertOptions,
            JpgLoadOptions,
            JpmLoadOptions,
            JpxLoadOptions,
            MhtLoadOptions,
            MobiLoadOptions,
            MsgLoadOptions,
            OdgConvertOptions,
            OdgLoadOptions,
            OdpConvertOptions,
            OdpLoadOptions,
            OdsConvertOptions,
            OdsLoadOptions,
            OdtConvertOptions,
            OdtLoadOptions,
            OstLoadOptions,
            OtpConvertOptions,
            OtpLoadOptions,
            OtsConvertOptions,
            OtsLoadOptions,
            OttConvertOptions,
            OttLoadOptions,
            PltLoadOptions,
            PngConvertOptions,
            PngLoadOptions,
            PotmConvertOptions,
            PotmLoadOptions,
            PotxConvertOptions,
            PotxLoadOptions,
            PpsConvertOptions,
            PpsLoadOptions,
            PpsmConvertOptions,
            PpsmLoadOptions,
            PpsxConvertOptions,
            PpsxLoadOptions,
            PptConvertOptions,
            PptLoadOptions,
            PptmConvertOptions,
            PptmLoadOptions,
            PptxConvertOptions,
            PptxLoadOptions,
            PsdConvertOptions,
            PsdLoadOptions,
            PstLoadOptions,
            RtfConvertOptions,
            StlLoadOptions,
            TifLoadOptions,
            TiffConvertOptions,
            TiffLoadOptions,
            TsvConvertOptions,
            TsvLoadOptions,
            VdwLoadOptions,
            VdxLoadOptions,
            VsdLoadOptions,
            VsdmLoadOptions,
            VsdxLoadOptions,
            VssLoadOptions,
            VssmLoadOptions,
            VssxLoadOptions,
            VstLoadOptions,
            VstmLoadOptions,
            VstxLoadOptions,
            VsxLoadOptions,
            VtxLoadOptions,
            WebpConvertOptions,
            WebpLoadOptions,
            WmfConvertOptions,
            WmfLoadOptions,
            Xls2003ConvertOptions,
            Xls2003LoadOptions,
            XlsConvertOptions,
            XlsLoadOptions,
            XlsbConvertOptions,
            XlsbLoadOptions,
            XlsmConvertOptions,
            XlsmLoadOptions,
            XlsxConvertOptions,
            XlsxLoadOptions,
            XltmConvertOptions,
            XltmLoadOptions,
            XltxConvertOptions,
            XltxLoadOptions,
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
