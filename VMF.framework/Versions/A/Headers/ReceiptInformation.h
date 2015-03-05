//
//  ReceiptInformation.h
//  VMF
//
//  Created by Randy Palermo on 11/17/11.
//  Copyright 2011 VeriFone, Inc. All rights reserved.
//

#import <Foundation/Foundation.h>


@interface ReceiptInformation : NSObject {
	int langCode;
	BOOL useLogo;
	int logoLeftMargin;
	NSString *addressL1;
	NSString *addressL2;
	NSString *addressL3;
	NSString *addressL4;
	NSString *terminalID;
	NSString *saleType;
	NSString *maskedPAN;
	NSString *bankAccount;
	NSString *cardType;
	NSString *entryMethod;
	float amount;
	float tip;
	float surcharge;
	float cashback;
	NSDate *transDate;
	NSString *transID;
	NSString *authCode;
	NSString *emvType;
	NSString *emvAppID;
	NSString *emvID2;
	NSString *emvID3;
	BOOL notCompleteBanner;
	NSString *footerMerchant1;
	NSString *footerCustomer;

}




@property int langCode;
@property BOOL useLogo;
@property int logoLeftMargin;
@property float amount;
@property float tip;
@property float surcharge;
@property float cashback;
@property BOOL notCompleteBanner;
@property (nonatomic, retain) NSString *addressL1;
@property (nonatomic, retain) NSString *addressL2;
@property (nonatomic, retain) NSString *addressL3;
@property (nonatomic, retain) NSString *addressL4;
@property (nonatomic, retain) NSString *terminalID;
@property (nonatomic, retain) NSString *saleType;
@property (nonatomic, retain) NSString *maskedPAN;
@property (nonatomic, retain) NSString *bankAccount;
@property (nonatomic, retain) NSString *cardType;
@property (nonatomic, retain) NSString *entryMethod;
@property (nonatomic, retain) NSDate *transDate;
@property (nonatomic, retain) NSString *transID;
@property (nonatomic, retain) NSString *authCode;
@property (nonatomic, retain) NSString *emvType;
@property (nonatomic, retain) NSString *emvAppID;
@property (nonatomic, retain) NSString *emvID2;
@property (nonatomic, retain) NSString *emvID3;
@property (nonatomic, retain) NSString *footerMerchant1;
@property (nonatomic, retain) NSString *footerCustomer;


@end
