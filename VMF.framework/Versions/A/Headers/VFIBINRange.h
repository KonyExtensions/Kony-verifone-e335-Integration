//
//  VFIBINRange.h
//  VMF
//
//  Created by Randy Palermo on 9/9/10.
//  Copyright 2010 VeriFone, Inc. All rights reserved.
//

#import <Foundation/Foundation.h>

@class VFIBINRange;

@interface VFIBINRange : NSObject {
	int cardType;
	NSString *PANLow;
	NSString *PANHigh;
	int minPAN;
	int maxPAN;
	int avs;
	int issuerId;
	int issuerNumber;
	NSString *issuerLabel;
	float tipDiscount;
	float floorLimit;
	int cvv2;
	NSString *cardAbbreviation;
	NSString *cardLabel;
	int tracksRequired;
	float rfidFloorLimit;
	int allowedAccountType;
	float refundLimit;
	float ctlsCVMLimit;
	float ctlsTranLimit;
	BOOL emvFallback;
	BOOL disableRange;
	BOOL enableFPS;
	BOOL checkMod10;
	BOOL expirationDateRequired;
	BOOL manualEntryAllowed;
	BOOL cardPresentPrompt;
	BOOL supportsContactlessMSD;
	BOOL supportsContactlessEMV;

}

-(void)clear;



@property int cardType;
@property (nonatomic, retain) NSString *PANLow;
@property (nonatomic, retain) NSString *PANHigh;
@property int minPAN;
@property int maxPAN;
@property int avs;
@property int issuerId;
@property int issuerNumber;
@property (nonatomic, retain) NSString *issuerLabel;
@property float tipDiscount;
@property float floorLimit;
@property int cvv2;
@property (nonatomic, retain) NSString *cardAbbreviation;
@property (nonatomic, retain) NSString *cardLabel;
@property int tracksRequired;
@property float rfidFloorLimit;
@property int allowedAccountType;
@property float refundLimit;
@property float ctlsCVMLimit;
@property float ctlsTranLimit;
@property BOOL emvFallback;
@property BOOL disableRange;
@property BOOL enableFPS;
@property BOOL checkMod10;
@property BOOL expirationDateRequired;
@property BOOL manualEntryAllowed;
@property BOOL cardPresentPrompt;
@property BOOL supportsContactlessMSD;
@property BOOL supportsContactlessEMV;


@end
