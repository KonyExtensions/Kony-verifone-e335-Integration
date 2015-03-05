//
//  VFIPayware.h
//  
//
//  Created by Randy Palermo on 5/4/10.
//  Copyright 2010 VeriFone. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <Foundation/Foundation.h>
#import	<ExternalAccessory/ExternalAccessory.h>
#import "VFIAccessoryMgr.h"
#import "VFIStream.h"


@protocol VFIPaywareDelegate <NSObject>

typedef enum {
	VFUpdateTypeVSP,
	VFUpdateTypeBootloader,
	VFUpdateTypeFirmware,
} VFUpdateType;

@required
- (void) paywareConnected:(BOOL)isConnected;
- (void) incomingData: (NSData*)data;
- (void) updatePaywareStatus:(BOOL)success currentBlock:(int)cb totalBlocks:(int)tb;
@end


@interface VFIPayware : NSObject < EAAccessoryDelegate, NSStreamDelegate> {
	
	id <VFIPaywareDelegate> delegate;
	EAAccessory *_accessory;
}

-(id)init;

-(void)initDevice;
-(void) closeDevice;
- (void) sendCommand:(NSString*)cmd;
- (void) setTimeout:(NSString *)sec;
- (void) sendBuffer:(const uint8_t *)rawString size:(int)len;
- (void) updatePayware:(VFUpdateType)type fileData:(NSData*)data;
- (void) swipeCard;
- (void) cancelSwipeCard;




@property (retain) id delegate;

@property (nonatomic, readonly) NSString *pwName;
@property (nonatomic, readonly) NSString *pwManufacturer;
@property (nonatomic, readonly) NSString *pwModelNumber;
@property (nonatomic, readonly) NSString *pwSerialNumber;
@property (nonatomic, readonly) NSString *pwFirmwareRevision;
@property (nonatomic, readonly) NSString *pwBootloader;
@property (nonatomic, readonly) NSString *pwVSP;
@property (nonatomic, readonly) NSString *pwHardwareRevision;
@property (readonly) BOOL connected;
@property (readonly) BOOL initialized;





@end