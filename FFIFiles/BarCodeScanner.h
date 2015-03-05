//
//  AirPrintController.h
//  Usage of Air-Print feature in IOS
//
//  Created by Bhanoji on 01/02/2014.
//  Copyright (c) 2014 kony. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <QuartzCore/QuartzCore.h>
#import <VMF/VMFramework.h>
#import	<ExternalAccessory/ExternalAccessory.h>
#import "lglobals.h"

@interface BarCodeScanner:UIViewController <VFIPinpadDelegate, VFIControlDelegate, VFIBarcodeDelegate>

+(void) scanCard:(CallBack*)callBack;
+(void) onClickBarCodeButton:(CallBack*)callBack;
+(void) disableScanner;
+(void) disableCardReader;
+(void) initializeCardSwipe;
+(void) initializeBarCodeScanner;
+(void) redirectConsoleLogToDocumentFolder:(BOOL)debugEnabled;
+(void) registerConnectionStatusNotifications;
+(void) getCardDataMethod:(int) timeout language:(int) lcode amount:(float) txnAmt otherAmount:(float) txnOthAmt;
+(void) registerCallbackPinpadConnected:(CallBack*)callBack;
+(void) registerCallbackBarcodeConnected:(CallBack*)callBack;

@end
