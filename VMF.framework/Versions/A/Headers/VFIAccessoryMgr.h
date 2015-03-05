//
//  VFIAccessoryMgr.h
//  VMF
//
//  Created by Randy Palermo on 9/11/13.
//  Copyright (c) 2013 VeriFone, Inc. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <ExternalAccessory/ExternalAccessory.h>
#import "VFIStream.h"
extern NSString *DataReceivedNotification_XPI;
extern NSString *DataReceivedNotification_Barcode;
extern NSString *DataReceivedNotification_Control;
extern NSString *DataReceivedNotification_Zontalk;
extern NSString *DataReceivedNotification_Printer;
extern NSString *DataReceivedNotification_Sled;

extern NSString *DataReceivedNotification_XPI_BT;
extern NSString *DataReceivedNotification_Barcode_BT;
extern NSString *DataReceivedNotification_Control_BT;
extern NSString *DataReceivedNotification_Zontalk_BT;

extern NSString *UpdateEA_XPI;
extern NSString *UpdateEA_Barcode;
extern NSString *UpdateEA_Control;
extern NSString *UpdateEA_Zontalk;
extern NSString *UpdateEA_Printer;
extern NSString *UpdateEA_Sled;

extern NSString *OpenSession_Gen25;
extern NSString *OpenSession_Printer;
extern NSString *OpenSession_Sled;
extern NSString *OpenSession_Gen25_XPI;
extern NSString *OpenSession_Gen25_Barcode;
extern NSString *OpenSession_Gen25_Control;
extern NSString *OpenSession_Gen25_Zontalk;
extern NSString *OpenSession_Gen20_XPI;
extern NSString *OpenSession_Gen30_XPI;
extern NSString *OpenSession_Gen20_Barcode;
extern NSString *OpenSession_Gen30_Barcode;
extern NSString *OpenSession_Gen20_Control;
extern NSString *OpenSession_Gen30_Control;
extern NSString *OpenSession_Gen20_Zontalk;
extern NSString *OpenSession_Gen30_Zontalk;

extern NSString *CloseSession_Gen25;
extern NSString *CloseSession_Printer;
extern NSString *CloseSession_Sled;
extern NSString *CloseSession_Gen20_XPI;
extern NSString *CloseSession_Gen30_XPI;
extern NSString *CloseSession_Gen20_Barcode;
extern NSString *CloseSession_Gen30_Barcode;
extern NSString *CloseSession_Gen20_Control;
extern NSString *CloseSession_Gen30_Control;
extern NSString *CloseSession_Gen20_Zontalk;
extern NSString *CloseSession_Gen30_Zontalk;

extern NSString *Connected_Gen25;
extern NSString *Connected_Printer;
extern NSString *Connected_Sled;
extern NSString *Connected_Gen20_XPI;
extern NSString *Connected_Gen30_XPI;
extern NSString *Connected_Gen20_Barcode;
extern NSString *Connected_Gen30_Barcode;
extern NSString *Connected_Gen20_Control;
extern NSString *Connected_Gen30_Control;
extern NSString *Connected_Gen20_Zontalk;
extern NSString *Connected_Gen30_Zontalk;

extern NSString *Disconnected_Gen25;
extern NSString *Disconnected_Printer;
extern NSString *Disconnected_Sled;
extern NSString *Disconnected_Gen20_XPI;
extern NSString *Disconnected_Gen30_XPI;
extern NSString *Disconnected_Gen20_Barcode;
extern NSString *Disconnected_Gen30_Barcode;
extern NSString *Disconnected_Gen20_Control;
extern NSString *Disconnected_Gen30_Control;
extern NSString *Disconnected_Gen20_Zontalk;
extern NSString *Disconnected_Gen30_Zontalk;

extern NSString *Protocol_Gen25;
extern NSString *Protocol_Printer;
extern NSString *Protocol_Sled;
extern NSString *Protocol_Gen20_XPI;
extern NSString *Protocol_Gen30_XPI;
extern NSString *Protocol_Gen20_Barcode;
extern NSString *Protocol_Gen30_Barcode;
extern NSString *Protocol_Gen20_Control;
extern NSString *Protocol_Gen30_Control;
extern NSString *Protocol_Gen20_Zontalk;
extern NSString *Protocol_Gen30_Zontalk;

@interface VFIAccessoryMgr : NSObject<VFIStreamDelegate>{
    NSMutableDictionary* _sessions;
    NSMutableArray* _unusedProtocols;
    BOOL _isBTDevice;
}

+ (VFIAccessoryMgr *)sharedController;

- (void) barcodeNotfication:(BOOL)notify;
- (void) controlNotfication:(BOOL)notify;
- (void) pinpadNotfication:(BOOL)notify;
- (VFIStream*)getXPI;
- (VFIStream*)getBarcode;
- (VFIStream*)getControl;
- (VFIStream*)getZontalk;
- (VFIStream*)getSled;
- (VFIStream*)getPrinter;

- (void)closeAccessory:(NSString*)protocol;

- (void)closeDevices;

- (void) closeZontalk;

@property (nonatomic, readonly) NSMutableDictionary* sessions;
@property (nonatomic, readonly) NSMutableArray* unusedProtocols;
@property (nonatomic, readonly) VFIStream* btChannel;
@property (readonly) BOOL isBTDevice;
@property (readonly) BOOL postClosing;

@end
