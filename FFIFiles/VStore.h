//
//  VariableStore.h
//  pwmg2Sandbox
//
//  Created by Thomas Salzmann on 10/27/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//
// #import <UIKit/UIKit.h>
#import <VMF/VMFramework.h>
#import	<ExternalAccessory/ExternalAccessory.h>

@interface VStore : NSObject
{
    // Place any "global" variables here
	VFIPinpad *pinPad;
	VFIBarcode *barcode; 
	VFIControl *payControl;
    NSTimer *myTimer; 

}

@property(nonatomic, retain) VFIPinpad *pinPad;
@property(nonatomic, retain) VFIBarcode *barcode;
@property(nonatomic, retain) VFIControl *payControl;
@property(nonatomic, retain) NSTimer *myTimer;



// message from which our instance is obtained
+ (VStore *)vInstance;

- (UIAlertView *) WaitPrompt:(NSString *)waitMessage;

- (UIAlertView *) WaitPrompt2:(NSString *)waitMessage;

- (NSString*) nsdataToNSString:(NSData*)data;

- (NSString*) dataToString:(NSData*)data;

- (NSString*) hexToString:(NSString*)str;
- (NSData *)hexToData:(NSString*)str;   //Example - Pass string that contains characters "30313233", and it will return a data object containing ascii characters "0123"

- (BOOL) isUpsideDown;
- (void) setUpsideDown:(BOOL) orientation;

- (void) bcScanOn; 
- (void) bcScanOff; 
- (void) bcScanOffWhileSleeping;
- (void) bcScanOnAfterSleeping;



@end
