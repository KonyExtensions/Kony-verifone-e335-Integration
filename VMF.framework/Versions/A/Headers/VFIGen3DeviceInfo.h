#import <Foundation/Foundation.h>

@class VFIGen3DeviceInfo;

/**
 * Encapsulating data class utilized by VFIPinpad
 */

@interface VFIGen3DeviceInfo : NSObject {
	NSString *bundleVersion;         //!< Bundle Version ID
	NSString *serialNumber;          //!< Gen3 Serial Number
	NSString *modelNumber;           //!< Gen3 Model Number
	NSString *partNumber;            //!< Gen3 Part Number
	NSString *hardwareVersion;       //!< Gen3 Hardware Version
	int batteryTemperature;          //!< Current Battery Temperature
	int batteryFullCharge;           //!< Maximum Battery Charge Level
	int batteryRemainingCharge;      //!< Remaining Battery Charge Level
	int batteryCurrent;              //!< Charging Current Value (if charging)
	int batteryChargerStatus;        //!< Returns Battery Charger Status Value
    NSString *AMMVersion;            //!< Returns AMM Version
    NSString *SSLCLIVersion;         //!< Returns SSLCLI Version
    NSString *XPIVersion;            //!< Returns XPI Version
    
}
/**
 * clears all VFIGen3DeviceInfo properties
 */
-(void)clear;
/**
 * Singleton instance of VFIGen3DeviceInfo utilized by VFIControl
 */
+ (VFIGen3DeviceInfo *)sharedController;



@property (nonatomic, retain) NSString *bundleVersion;
@property (nonatomic, retain) NSString *serialNumber;
@property (nonatomic, retain) NSString *modelNumber;
@property (nonatomic, retain) NSString *partNumber;
@property (nonatomic, retain) NSString *hardwareVersion;
@property int batteryTemperature;
@property int batteryFullCharge;
@property int batteryRemainingCharge;
@property int batteryCurrent;
@property int batteryChargerStatus;
@property (nonatomic, retain) NSString *AMMVersion;
@property (nonatomic, retain) NSString *SSLCLIVersion;
@property (nonatomic, retain) NSString *XPIVersion;

@end
