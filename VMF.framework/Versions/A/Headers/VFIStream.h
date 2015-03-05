//
//  VFIStream.h
//  VMF
//
//  Created by Randy Palermo on 9/11/13.
//  Copyright (c) 2013 VeriFone, Inc. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <ExternalAccessory/ExternalAccessory.h>

@protocol VFIStreamDelegate <NSObject>
@optional
-(void) receivedData:(NSObject*)data protocol:(NSString*)protocol;


@end

@interface VFIStream : NSObject <NSStreamDelegate>{
    
    id <VFIStreamDelegate> delegate;
    
    EAAccessory *_accessory;
    EASession *_session;
    NSString *_protocolString;
    
    NSMutableData *_writeData;
    NSMutableData *_readData;
    bool _sessionOpen;
    bool _sessionOpen_XPI;
    bool _sessionOpen_Barcode;
    bool _sessionOpen_Control;
    bool _sessionOpen_Zontalk;
}


- (void)setupControllerForAccessory:(EAAccessory *)accessory withProtocolString:(NSString *)protocolString;

- (BOOL)openSession;
- (void)closeSession;
- (void)writeData:(NSData *)data channel:(int)channel isOpen:(BOOL)isOpen;  //2=xpi,3=barcode,4=zontalk,5=control, 0=none
- (void) setBTSessionOpen:(int)BTChannel;
- (BOOL) isGen3;
- (BOOL) isBT;

- (NSUInteger)readBytesAvailable;
- (NSData *)readData:(NSUInteger)bytesToRead;

@property (readonly) bool sessionOpen;
@property (readonly) bool sessionOpen_XPI;
@property (readonly) bool sessionOpen_Barcode;
@property (readonly) bool sessionOpen_Control;
@property (readonly) bool sessionOpen_Zontalk;
@property (nonatomic, readonly) EAAccessory *accessory;
@property (nonatomic, readonly) NSString *protocolString;
@property (retain) id <VFIStreamDelegate>delegate;

@end
