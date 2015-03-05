//
//
//  Created by Randy Palermo on 4/4/11.
//

#import <UIKit/UIKit.h>
#import <Foundation/Foundation.h>
#import	<ExternalAccessory/ExternalAccessory.h>
#import "ReceiptInformation.h"
#import "VFIAccessoryMgr.h"
#import "VFIStream.h"





typedef struct _PRINTER_STATUS {
    BOOL paperOut;
    BOOL firmwareCorrupt;
    BOOL mechanismFailure;
    BOOL noResponse;
}PRINTER_STATUS;



typedef struct _BATTERY_STATUS {
    int remaining;
    int volt;
    int current;
    int temp;
    int full;
    BOOL noResponse;
}BATTERY_STATUS;


enum COUNTRY_CODE {
	COUNTRY_CODE_US=0,
	COUNTRY_CODE_FRANCE=1,
	COUNTRY_CODE_GERMANY=2,
	COUNTRY_CODE_UK=3,
	COUNTRY_CODE_DENMARK1=4,
	COUNTRY_CODE_SWEDEN=5,
	COUNTRY_CODE_ITALY=6,
	COUNTRY_CODE_SPAIN=7,
	COUNTRY_CODE_JAPAN=8,
	COUNTRY_CODE_NORWAY=9,
	COUNTRY_CODE_DENMARK2=10
};

enum LINE_CHARACTERS {
	LINE_CHARACTERS_24=24,
	LINE_CHARACTERS_32=32,
	LINE_CHARACTERS_42=42
};

enum FONT_SIZE {
	FONT_SIZE_16x16 = 1,
	FONT_SIZE_5x8x24 = 2,
	FONT_SIZE_8x14x32 = 3,
	FONT_SIZE_8x14x42 = 4,
	FONT_SIZE_24x24 = 5,
	FONT_SIZE_32x32 = 6,
	FONT_SIZE_48x48 = 7,
	FONT_SIZE_64x64 = 8
};

enum LINE_ATTRIBUTE {
	LINE_ATTRIBUTE_NORMAL=0,
	LINE_ATTRIBUTE_DOUBLE_HEIGHT=1,
	LINE_ATTRIBUTE_ALT_FONT_NORMAL=2,
	LINE_ATTRIBUTE_ALT_FONT_DOUBLE_HEIGHT=3
};



/** CONTROL CODES **/
#define CONTROL_NULL 0x00
#define CONTROL_LF 0x0A
#define CONTROL_FF 0x0C
#define CONTROL_TOGGLE_DOUBLE_HEIGHT 0x11
#define CONTROL_TOGGLE_INVERSE_PRINTING 0x12
#define CONTROL_CANCEL 0x18
#define CONTROL_ESCAPE 0x1B
#define CONTROL_DOUBLE_WIDTH 0x1E
#define CONTROL_NORMAL_WIDTH 0x1F


#define _printerVersion  @"1.0.0.12";





@protocol VFIPrinterDelegate <NSObject>

@optional

- (void) printerConnected:(BOOL)isConnected;
- (void) printerDataReceived:(NSData*)data;
- (void) printerDataSent:(NSData*)data;
- (void) printerDownloadInfo:(NSString*)log;
- (void) printerDownloadBlocks:(int)TotalBlocks sent:(int)BlocksSent;

@end


@interface VFIPrinter : NSObject < EAAccessoryDelegate,NSStreamDelegate> {
	
	id <VFIPrinterDelegate> delegate;
	EAAccessory *_accessory;
	NSRunLoop *theRL;
}

-(id)init;
-(void) initDevice;
-(void) closeDevice;
-(void) updateFirmware:(NSData*)fileData;
-(void) updateBTFirmware:(NSData*)bank0 bank1:(NSData*)bank1 bank2:(NSData*)bank2 bank3:(NSData*)bank3;
-(NSString *) getFirmwareVersion;
-(NSString *) getBTFirmwareVersion;
-(void) sendLineFeed;
-(void) sendFormFeed;
-(void) toggleDoubleHeight;
-(void) toggleInversePrinting;
-(void) emptyBufferCancelAttributes;
-(void) setDoubleWidthMode;
-(void) cancelDoubleWidthMode;
-(void) setLineHeight:(int)height;
-(void) setWeight:(int)weight;
-(void) ejectLines:(int)lines;
-(void) resetPrinter;
-(PRINTER_STATUS) getPrinterStatus;
-(BATTERY_STATUS) getBatteryStatus;
-(void) setRightMargin:(int)position;
-(void) printLogo:(int)leftMargin;
-(void) setLineAttribute:(int)attribute;
-(void) enterGraphicMode;
-(void) exitGraphicMode;
-(void) setCountry:(int)code;
-(NSString *) getPrinterID;
-(void) selfTest;
-(void) setCharactersPerLine:(int)num;
-(void) printImage:(UIImage *)image;
-(BOOL) setLogo:(UIImage *)image;
-(void) setFont:(int)size table:(int)table;
-(BOOL) downloadFontCharacter:(int)size table:(int)table character:(unsigned char)character image:(UIImage*)image;
-(void) printReceipt:(ReceiptInformation*)receipt isMerchant:(BOOL)merchant;

- (void)sendString:(NSString*)string;
- (void)sendData:(NSData*)data;
- (void) sendBuf:(const uint8_t *)buf size:(int)len;
- (void)sendHex:(NSString*)string;
- (void) printXMLReceipt:(NSString*)xmlReceipt merchantCopy:(BOOL)merchantCopy;
- (void) setLineFeedDelay:(float)sec;
- (void) setFormFeedDelay:(float)sec;
-(BOOL) changeName:(NSString*)name;



@property (retain) id delegate;


@property (nonatomic, readonly) NSString *printerName;
@property (nonatomic, readonly) NSString *printerManufacturer;
@property (nonatomic, readonly) NSString *printerModelNumber;
@property (nonatomic, readonly) NSString *printerSerialNumber;
@property (nonatomic, readonly) NSString *printerFirmwareRevision;
@property (nonatomic, readonly) NSString *printerHardwareRevision;
@property (readonly) BOOL connected;
@property (nonatomic, retain) NSRunLoop *theRL;







@end

