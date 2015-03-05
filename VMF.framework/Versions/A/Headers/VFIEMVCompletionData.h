//
//  VFIEMVCompletionData.h
//  VMF
//
//  Created by Randy Palermo on 9/12/10.
//  Copyright 2010 VeriFone, Inc. All rights reserved.
//

#import <Foundation/Foundation.h>


@class VFIEMVCompletionData;
/**
 * Encapsulating data class utilized by VFIPinpad
 */
@interface VFIEMVCompletionData : NSObject {
	NSMutableDictionary* emvTags;   //!< A dictionary containing EMV Tag names and values, each of type NSData retrieved from the EMV chip card
	int cardRemovalResult;          //!< 0 – Successful, card removed,     1 – Unsuccessful
	int writeToScriptResult;        //!< Numeric response indicating the result of the writing of any script files to the inserted card
    //!< - 00, Successful
    //!< - 01, Unsuccessful
    //!< - 05, Wrong Prefix (if balance is used, and failed) 07, MAC did not verify
    //!< - 09, No MAC block
    //!< - 11, Bad Key
    //!< - 14, Master key load failed.
    //!< - 16, New Working Key load failed. Revert successfully to the previous Working Keys set. 21, Cannot calculate MAC
    //!< - 23, Invalid field length
    //!< - 98, New Working Keys load failed. Cannot revert to the previous Working Keys
	int validateMacResult;          //!< Numeric response indicating the result of the request to the MAC validation request
    //!< - 00, Successful
    //!< - 01, Unsuccessful
    //!< - 05, Wrong Prefix (if balance is used, and failed) 07, MAC did not verify
    //!< - 09, No MAC block
    //!< - 11, Bad Key
    //!< - 14, Master key load failed.
    //!< - 16, New Working Key load failed. Revert successfully to the previous Working Keys set. 21, Cannot calculate MAC
    //!< - 23, Invalid field length
    //!< - 98, New Working Keys load failed. Cannot revert to the previous Working Keys
}

/**
 * clears all VFIEMVCompletionData properties
 */
-(void)clear;
/**
 * Singleton instance of VFIEMVCompletionData utilized by VFIPinpad
 */
+ (VFIEMVCompletionData *)sharedController;

@property (nonatomic, retain) NSMutableDictionary* emvTags;
@property int cardRemovalResult;
@property int writeToScriptResult;
@property int validateMacResult;

@end
