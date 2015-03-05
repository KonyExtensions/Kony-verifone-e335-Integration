

#import <Foundation/Foundation.h>

@class VFIDiagnostics;
/**
 * Encapsulating data class utilized by VFIPinpad
 */
@interface VFIDiagnostics : NSObject {
	NSString *osversion;                    //!< ROM OS Version
	NSString *xpiVersion;                   //!< Application Version
	NSString *vxciVersion;                  //!< Core Library Version
	NSString *emvVersion;                   //!< EMV Kernel version
	NSString *ctlsReaderFirmwareVersion;    //!< CTLS Firmware Version.
	NSString *vspVersion;                   //!< VSP Firmware Version.
	NSString *pinpadSerialNumber;           //!< Pinpad Serial Number
	NSString *svcInfoSerialNumber;          //!< Pinpad Serial Number
	NSString *svcInfoPartNumber;            //!< Pinpad Serial Number
	

}
/**
 * clears all VFIDiagnostics properties
 */
-(void)clear;
/**
 * Singleton instance of VFIDiagnostics utilized by VFIPinpad
 */
+ (VFIDiagnostics *)sharedController;

@property (nonatomic, retain) NSString *osversion;
@property (nonatomic, retain) NSString *xpiVersion;
@property (nonatomic, retain) NSString *vxciVersion;
@property (nonatomic, retain) NSString *emvVersion;
@property (nonatomic, retain) NSString *ctlsReaderFirmwareVersion;
@property (nonatomic, retain) NSString *pinpadSerialNumber;
@property (nonatomic, retain) NSString *svcInfoSerialNumber;
@property (nonatomic, retain) NSString *svcInfoPartNumber;

/**
 * This property will currently return null. Reserved for future use.
 *
 */
@property (nonatomic, retain) NSString *vspVersion;

@end
