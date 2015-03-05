//
//  VFIEMAFiles.h
//  VMF
//
//  Created by Randy Palermo on 8/16/13.
//  Copyright (c) 2013 VeriFone, Inc. All rights reserved.
//

#import <Foundation/Foundation.h>

@class VFIEMAFiles;
/**
 * Encapsulating data class utilized by VFIPinpad
 */

@interface VFIEMAFiles : NSObject {
    int GID;                        //!< GID Number of EMA File (00-15)
    NSString* FileName;             //!< FileName of EMA File Retrieved including the Drive
    NSString* Logical;              //!< Logical Name
    NSString* NAME;                 //!< Value of NAME in ApplicationData section from the EMA file
    NSString* VERSION;              //!< Value of VERSION in ApplicationData section from the EMA file
    NSString* ALLOW_MESSAGES;       //!< Value of ALLOW-MESSAGES in ApplicationData section from the EMA file
    NSString* DOWNLOAD_ON_TIMEOUT;  //!< Value of DOWNLOAD-ON-TIMEOUT in ApplicationData section from the EMA file
}

/**
 * clears all VFIEMAFiles properties
 */
-(void)clear;
/**
 * Singleton instance of VFIEMAFiles utilized by VFIPinpad
 */

+ (VFIEMAFiles *)sharedController;

@property int GID;
@property (nonatomic, retain) NSString* FileName;
@property (nonatomic, retain) NSString* Logical;
@property (nonatomic, retain) NSString* NAME;
@property (nonatomic, retain) NSString* VERSION;
@property (nonatomic, retain) NSString* ALLOW_MESSAGES;
@property (nonatomic, retain) NSString* DOWNLOAD_ON_TIMEOUT;

@end
