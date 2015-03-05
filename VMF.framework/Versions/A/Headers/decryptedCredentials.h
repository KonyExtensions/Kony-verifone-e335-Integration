//
//  decryptedCredentials
//  VMF
//
//  Created by Randy Palermo on 1/24/13.
//  Copyright (c) 2013 VeriFone, Inc. All rights reserved.
//

#import <Foundation/Foundation.h>
/**
 * Encapsulating data class utilized by VFIConnect
 */
@interface decryptedCredentials : NSObject{
    NSString*	clientID;       //!< Client ID
	NSString*	deviceKey;      //!< Device Key
	NSString*	serialNumber;   //!< Serial Number
	NSString*	deviceType;     //!< Device Type
    
}

/**
 * clears all decryptedCredentials properties
 */
-(void)clear;

@property (nonatomic, retain) NSString*	clientID;
@property (nonatomic, retain) NSString*	deviceKey;
@property (nonatomic, retain) NSString*	serialNumber;
@property (nonatomic, retain) NSString*	deviceType;

@end
