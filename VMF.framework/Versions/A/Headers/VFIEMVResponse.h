//
//  VFIEMVResponse.h
//  VMF
//
//  Created by Randy Palermo on 9/12/10.
//  Copyright 2010 VeriFone, Inc. All rights reserved.
//

#import <Foundation/Foundation.h>

@class VFIEMVResponse;
/**
 * Encapsulating data class utilized by VFIPinpad
 */
@interface VFIEMVResponse : NSObject {

	NSData *macBlock;               //!< 8-character MAC block to verify
	NSData *tpkKey;                 //!< PIN (TPK) Key
	NSData *takKey;                 //!< MAC (TAK) Key
	NSData *macData;                //!< Buffer holding all data to be MAC’ed
	int hostDecision;               //!< Decision indicator from the host response; valid values are:
                                    //!< - 0:Host Authorized
                                    //!< - 1:Host Declined
                                    //!< - 2:Failed to Connect
	BOOL displayResult;             //!< Indicator to note whether or not to display the final response message;
	NSData *hostTagString;          //!< A TLV (tag, length, value) data string received from the host response with EMV tags
	int scriptId;                   //!< Numeric ‘71’ or ‘72’ value to be set based on the script sent from the host
	BOOL clearBeforeScriptWrite;    //!< Indicator to note whether or not to clear the script file before writing; a value of YES will clear before writing
	int numberOfScripts;            //!< The number of scripts included in the request
	int scriptLength;               //!< Length of the script data
	NSData *scriptData;             //!< Hexadecimal script data of length scriptLength sent from the host for writing to the inserted card.
}

/**
 * clears all VFIEMVResponse properties
 */
-(void)clear;

@property (nonatomic, retain) NSData *macBlock;
@property (nonatomic, retain) NSData *tpkKey;
@property (nonatomic, retain) NSData *takKey;
@property (nonatomic, retain) NSData *macData;
@property int hostDecision;
@property BOOL displayResult;
@property (nonatomic, retain) NSData *hostTagString;
@property int scriptId;
@property BOOL clearBeforeScriptWrite;
@property int numberOfScripts;
@property int scriptLength;
@property (nonatomic, retain) NSData *scriptData;



@end
