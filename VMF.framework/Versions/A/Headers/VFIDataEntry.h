//
//  VFIDataEntry.h
//  VMF
//
//  Created by Randy Palermo on 9/9/10.
//  Copyright 2010 VeriFone, Inc. All rights reserved.
//

#import <Foundation/Foundation.h>

@class VFIDataEntry;
/**
 * Encapsulating data class utilized by VFIPinpad
 */
@interface VFIDataEntry : NSObject {
	float tipAmount;        //!< Tip amount entered (it can be in range 001 - 99999). 0 if not entered or bypassed. Implied decimal (example: 595 = 5.95).
	float cashbackAmount;   //!< Cash Back amount (it can be in range 001 - 99999). 0 if not entered or bypassed. Implied decimal (example: 595 = 5.95).
	int surchargeIndicator; //!< 1=Surcharge Accepted or Not Prompted, 2=Surcharge Denied
	NSString* serialNumber; //!< 9 digit serial number
	int amountConfirmed;    //!< 0= Amount Not Prompted,  1=Amount Prompted, 2=Amount Denied
	int accountSelected;    //!< Account selected. 1=Checking, 2=Savings
	NSData* pinBlock;       //!< 16-character PIN Block (when applicable)
	int cashBackSelected;   //!< 0= CashBack Not Prompted, 1= CashBack prompted, 2=CashBack Denied
	int tipSelected;        //!< 0= Tip Not Prompted, 1=Tip prompted, 2=Tip Denied
}
/**
 * clears all VFIDataEntry properties
 */
-(void)clear;
/**
 * Singleton instance of VFIDataEntry utilized by VFIPinpad
 */

+ (VFIDataEntry *)sharedController;

@property float tipAmount;
@property float cashbackAmount;
@property int surchargeIndicator;
@property (nonatomic, retain) NSString* serialNumber;
@property int amountConfirmed;
@property int accountSelected;
@property (nonatomic, retain) NSData* pinBlock;
@property int cashBackSelected;
@property int tipSelected;

@end
