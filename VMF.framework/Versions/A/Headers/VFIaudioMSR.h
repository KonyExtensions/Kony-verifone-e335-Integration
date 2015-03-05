//
//  VFIaudioMSR.h
//
//  Created by Randy Palermo on 5/30/10.
//  Copyright 2010 VeriFone, Inc. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <AudioToolbox/AudioToolbox.h>
#import <AVFoundation/AVFoundation.h>
#import <MediaPlayer/MediaPlayer.h>

#include <sys/sysctl.h>

#define DOCUMENTS_FOLDER [NSHomeDirectory() stringByAppendingPathComponent:@"Documents"]

@protocol VFIaudioMSRDelegate <NSObject>

@optional

- (void) processing;

@end

@interface VFIaudioMSR : NSObject <AVAudioRecorderDelegate>  {
	
	id <VFIaudioMSRDelegate> delegate;
	NSString *recorderFilePath;
	NSMutableDictionary *recordSetting;
	NSTimer *RecordTimer;
	AVAudioSession *audioSession;
	SystemSoundID cmd;
	NSTimer *autoTimer;
	NSTimer *meterTimer;
	NSTimer *keepAliveTimer;
	UILabel *powerLabel;
	
	UIAlertView *confirmUniMag;
	UIAlertView *volumeWarning;
	UIAlertView *confirmUniMagVolume;
	
}

-(id)init;
-(void) requestSwipe;
-(void) cancelSwipe;
-(void) autoDetect:(BOOL)autoDetect;
-(void) continuousPower:(BOOL)keepOn;
-(void) startUniMag:(BOOL)start;
-(void) setTimeout:(int)seconds;
-(NSData*) getWave;
-(void) checkRecording;
-(void) playTone;
-(void) setNone:(BOOL)none;
-(void) debugLogging:(BOOL)turnON;
-(void) setThreshold:(float)value;
-(void) setSwipeRepeatOn;

-(void) promptForConnection:(BOOL)prompt;
-(float) getVolumeLevel;
-(void) closeConnection;
- (void)closeDevice;
-(id)initWithLogging:(BOOL)logging;
-(id)initWithLogging:(BOOL)logging useSAR:(BOOL)SAR useIDT:(BOOL)IDT;
-(void) wOff;

-(NSInteger) verifyCardData:(NSData*) cardData;

@property (retain) id delegate;
@property (readonly) NSData* PTID_VR1;
@property (readonly) NSData* KSN_VR1;
@property (readonly) int BatteryVoltage_VR1;
@property (readonly) NSString* Firmware_VR1;
@property (readonly) NSString* MaskedPAN_VR1;
@property (readonly) NSString* CardholderFirstName_VR1;
@property (readonly) NSString* CardholderLastName_VR1;
@property (readonly) NSData* EncodedTrack2_VR1;
@property (readonly) int Track1Error_VR1;
@property (readonly) int Track2Error_VR1;
@property (readonly) BOOL VR1_Connected;
@property (readonly) BOOL uniMagConnected;
@property(nonatomic,retain) AVAudioPlayer *tonePlayer;
@property(nonatomic,retain) AVAudioPlayer *audioPlayer;
@property(nonatomic,retain) AVAudioRecorder *recorder;
@property(nonatomic,retain) AVAudioPlayer *quickTonePlayer;
@property (readonly) BOOL iJackConnected;

@end
