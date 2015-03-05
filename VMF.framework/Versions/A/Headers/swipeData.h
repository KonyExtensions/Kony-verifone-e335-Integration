//
//  swipeData.h
//  VMF
//
//  Created by Randy Palermo on 1/24/13.
//  Copyright (c) 2013 VeriFone, Inc. All rights reserved.
//

#import <Foundation/Foundation.h>

typedef enum {
	CardTypeNotRecognized,
	CardTypeVisa,
	CardTypeMC,
	CardTypeAmex,
	CardTypeDiscover,
	CardTypeDCIDisc,
	CardTypeJCBDisc,
	CardTypeEnRoute
} CardType;
/**
 * Encapsulating data class utilized by VFIConnect
 */
@interface swipeData : NSObject{
    NSString*	maskedPAN;      //!< Masked Card Account Number
    CardType	cardType;       //!< Card Type
    NSString*	firstName;      //!< Account Holder First Name
    NSString*	lastName;       //!< Account Holder Last Name
}

/**
 * clears all swipeData properties
 */
-(void)clear;

@property (nonatomic, retain) NSString*	maskedPAN;
@property CardType	cardType;
@property (nonatomic, retain) NSString*	firstName;
@property (nonatomic, retain) NSString*	lastName;

@end
