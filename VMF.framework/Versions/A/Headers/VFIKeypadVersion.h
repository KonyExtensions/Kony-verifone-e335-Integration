/**
 * Encapsulating data class utilized by VFIControl
 */

#import <Foundation/Foundation.h>


@interface VFIKeypadVersion : NSObject {
	NSString *Processor;            //!< Pinpad Processor
	NSString *BootloaderMajor;      //!< Bootloader Version - Major
	NSString *BootloaderMinor;      //!< Bootloader Version - Minor
	NSString *FirmwareMajor;        //!< Keypad Firmware Version - Major
	NSString *FirmwareMinor;        //!< Keypad Firmware Version - Minor

	
	
}
/**
 * clears all VFIKeypadVersion properties
 */
-(void)clear;



@property (nonatomic, retain) NSString *Processor;
@property (nonatomic, retain) NSString *BootloaderMajor;
@property (nonatomic, retain) NSString *BootloaderMinor;
@property (nonatomic, retain) NSString *FirmwareMajor;
@property (nonatomic, retain) NSString *FirmwareMinor;


@end

