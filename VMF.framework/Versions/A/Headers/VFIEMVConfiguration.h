//
//  VFIEMVConfiguration.h
//  VMF
//
//  Created by Randy Palermo on 9/12/10.
//  Copyright 2010 VeriFone, Inc. All rights reserved.
//

#import <Foundation/Foundation.h>

@class VFIEMVConfiguration;
/**
 * Encapsulating data class utilized by VFIPinpad
 */
@interface VFIEMVConfiguration : NSObject {
	int schemeReference;  //!< 2-byte int value
	int issuerReference;  //!< 2-byte int value
	int trmDataPresent;  //!< 2-byte int value
	int targetRSPercent;  //!< 2-byte int value
	double floorLimit;  //!< 4-byte int value
	double rsThreshold;  //!< 4-byte int value
	int maxTargetRSPercent;  //!< 2-byte int value
	int merchantForceOnlineFlag;  //!< 2-byte int value
	int blackListCardSupportFlag;  //!< 2-byte int value
	int fallbackAllowedFlag;  //!< 2-byte int value
	NSString *tacDefault;  //!< ASCII string value
	NSString *tacDenial;  //!< ASCII string value
	NSString *tacOnline;  //!< ASCII string value
	NSString *defaultTDOL;  //!< ASCII string value
	NSString *defaultDDOL;  //!< ASCII string value
	int autoSelectApplication;  //!< 2-byte int value
	NSString *countryCode;  //!< ASCII string value
	NSString *currencyCode;  //!< ASCII string value
	NSString *terminalCapacity;  //!< ASCII string value
	NSString *additionalCapacity;  //!< ASCII string value
	NSString *terminalType;  //!< ASCII string value
	NSString *merchantCategoryCode;  //!< ASCII string value
	NSString *terminalCategoryCode;  //!< ASCII string value
	NSString *terminalID;  //!< ASCII string value
	NSString *merchantID;  //!< ASCII string value
	NSString *acquireID;  //!< ASCII string value
	NSString *capkIndex;  //!< ASCII string value
	NSString *pinBypassFlag;  //!< ASCII string value
	NSString *pinTimeout;  //!< ASCII string value
	NSString *pinFormat;  //!< ASCII string value; ‘0’; 0-1 MS, 2-9 DUK, A EMV, B secure script
	NSString *pinScriptNumber;  //!< ASCII string value
	NSString *pinMacroNumber;  //!< ASCII string value
	NSString *pinDevriKey;  //!< ASCII string value; ‘0’; 0 - Traditional, 1 - Script, 2 - None
	NSString *pinDevriMacro;  //!< ASCII string value
	NSString *cardStatusDisplay;  //!< ASCII string value
	int termCurExp;  //!< 2-byte int value
	int issAcqFlag;  //!< 2-byte int value
	int noDisplaySupportFlag;  //!< 2-byte int value
	int modifyCandidateListFlag;  //!< 2-byte int value
	NSString *rfu1String;  //!< ASCII string value
	NSString *rfu2String;  //!< ASCII string value
	NSString *rfu3String;  //!< ASCII string value
	int vfi_rfu1;  //!< 2-byte int value
	int vfi_rfu2;  //!< 2-byte int value
	int vfi_rfu3;  //!< 2-byte int value
}

/**
 * clears all VFIEMVConfiguration properties
 */
-(void)clear;



@property int schemeReference;
@property int issuerReference;
@property int trmDataPresent;
@property int targetRSPercent;
@property double floorLimit;
@property double rsThreshold;
@property int maxTargetRSPercent;
@property int merchantForceOnlineFlag;
@property int blackListCardSupportFlag;
@property int fallbackAllowedFlag;
@property (nonatomic, retain) NSString *tacDefault;
@property (nonatomic, retain) NSString *tacDenial;
@property (nonatomic, retain) NSString *tacOnline;
@property (nonatomic, retain) NSString *defaultTDOL;
@property (nonatomic, retain) NSString *defaultDDOL;
@property int autoSelectApplication;
@property (nonatomic, retain) NSString *countryCode;
@property (nonatomic, retain) NSString *currencyCode;
@property (nonatomic, retain) NSString *terminalCapacity;
@property (nonatomic, retain) NSString *additionalCapacity;
@property (nonatomic, retain) NSString *terminalType;
@property (nonatomic, retain) NSString *merchantCategoryCode;
@property (nonatomic, retain) NSString *terminalCategoryCode;
@property (nonatomic, retain) NSString *terminalID;
@property (nonatomic, retain) NSString *merchantID;
@property (nonatomic, retain) NSString *acquireID;
@property (nonatomic, retain) NSString *capkIndex;
@property (nonatomic, retain) NSString *pinBypassFlag;
@property (nonatomic, retain) NSString *pinTimeout;
@property (nonatomic, retain) NSString *pinFormat;
@property (nonatomic, retain) NSString *pinScriptNumber;
@property (nonatomic, retain) NSString *pinMacroNumber;
@property (nonatomic, retain) NSString *pinDevriKey;
@property (nonatomic, retain) NSString *pinDevriMacro;
@property (nonatomic, retain) NSString *cardStatusDisplay;
@property int termCurExp;
@property int issAcqFlag;
@property int noDisplaySupportFlag;
@property int modifyCandidateListFlag;
@property (nonatomic, retain) NSString *rfu1String;
@property (nonatomic, retain) NSString *rfu2String;
@property (nonatomic, retain) NSString *rfu3String;
@property int vfi_rfu1;
@property int vfi_rfu2;
@property int vfi_rfu3;



@end
