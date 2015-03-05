//
//  VFIPayware.h
//  IDTech
//
//  Created by Randy Palermo on 5/4/10.
//  Copyright 2010 VeriFone, Inc. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <Foundation/Foundation.h>
#import	<ExternalAccessory/ExternalAccessory.h>
#import "InitialBlock.h"
#import "StatusInformation.h"
#import "NSData-AES.h"
#import "Base64.h"
#import "VFIAccessoryMgr.h"
#import "VFIStream.h"

@protocol VFIZontalkDelegate <NSObject>

@optional
- (void) zontalkLogEntry:(NSString*)logEntry withSeverity:(int)severity;



- (void) zontalkConnected:(BOOL)isConnected;
- (void) zontalkDataReceived:(NSData*)data;
- (void) zontalkDataSent:(NSData*)data;
- (void) zontalkDownloadStatus:(NSString*)log;
- (void) zontalkDownloadBlocks:(int)TotalBlocks sent:(int)BlocksSent;
@end







typedef enum {
	MessageTypes_Error = 0,
	MessageTypes_Information = 1,
	MessageTypes_Connecting = 2,
	MessageTypes_ConnectingUpdate = 3,
	MessageTypes_Connected = 4,
	MessageTypes_ConnectFailed = 5
} MessageTypes;


typedef enum {
	ReturnCodes_Success = 0,
	ReturnCodes_ConnectFailed = 1,
	ReturnCodes_RetriesExhausted = 2,
	ReturnCodes_TooManyNAKs = 3,
	ReturnCodes_TimeoutOccurred = 4,
	ReturnCodes_InvalidTerminalResponse = 5,
	ReturnCodes_SendFailed = 6,
	ReturnCodes_FileFormat = 7,
	ReturnCodes_FileNotFound = 8,
	ReturnCodes_FileIO = 9,
	ReturnCodes_System = 10
} ReturnCodes;











@interface VFIZontalk : NSObject <EAAccessoryDelegate, NSStreamDelegate,UIApplicationDelegate> {
	
	id <VFIZontalkDelegate> delegate;
	EAAccessory *_accessory;
	NSRunLoop *theRL;

}
+ (VFIZontalk *)sharedController;
-(id)init;
-(void) initDevice;
-(void) initDeviceOnServer;
-(void) closeDevice;
-(void) processData:(NSMutableArray *)param binaryData:(NSMutableDictionary *)data;
-(void) displayMessage:(NSString*)msg;
-(int) sendStringCommand:(NSString*)cmd calcLRC:(BOOL)lrc;
-(int) sendDataCommand:(NSMutableData*)cmd calcLRC:(BOOL)lrc;
-(void) consoleEnabled:(BOOL)enable;
-(NSString*) getLog;
-(NSString*) getLogFilename;
-(void) clearLog;
-(void) logEnabled:(BOOL)enable;
-(void)processReceivedData:(NSData*)data;

-(NSString*) frameworkVersion;
-(void) ignoreDisconnect;
-(void) disableProtocol:(BOOL)disable;
- (void) sendData:(NSData*)data;
/**
 * INTERNAL USE ONLY: Allows access for VFIBTBridge calls.
 *
 * Do not call this method directly.  This is exposed for VFIBTBridge to pass data to when communicating with e255
 *
 *
 */
@property (retain) id delegate;


@property (nonatomic, readonly) NSString *zontalkName;
@property (nonatomic, readonly) NSString *zontalkManufacturer;
@property (nonatomic, readonly) NSString *zontalkModelNumber;
@property (nonatomic, readonly) NSString *zontalkSerialNumber;
@property (nonatomic, readonly) NSString *zontalkFirmwareRevision;
@property (nonatomic, readonly) NSString *zontalkHardwareRevision;
@property (readonly) BOOL zontalkSimulatorMode;
@property (readonly) BOOL zontalkConnected;
@property (readonly) BOOL connected;
@property (nonatomic, readonly) EAAccessory *eaACC;                 //!< Read Only Connected Accessory
@property (readonly) BOOL BTconnected;
@property (readonly) BOOL initialized;
@property (readonly) BOOL isGen3;
@property (nonatomic, retain) NSRunLoop *theRL;




@end

