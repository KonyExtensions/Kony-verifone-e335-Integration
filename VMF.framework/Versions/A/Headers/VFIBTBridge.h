//
//  VFIBTBridge.h
//  VMF
//

#import <Foundation/Foundation.h>
#import	<ExternalAccessory/ExternalAccessory.h>

@class VFIBTBridge;

@interface VFIBTBridge : NSObject {
	
	
	
}

/**
 * Framework Version.
 *
 * Returns VeriFone Mobile Framework Version.
 */
+(NSString* )frameworkVersion;

/**
 * Disable Bluetooth Bridge.
 *
 * This method removes bluetooth support from VMF.
 */
+(void) disableBTBridge;

/**
 * Disable Bluetooth Bridge Status.
 *
 * This method returns bluetooth disabled flag.
 */
+(BOOL) disabledBTBridge;

+(BOOL) notConnected;

/**
 * Control how framework handles connection when app goes to background
 *
 * When val is set to TRUE, all devices will stay connected in the background.
 * Note: This method works for sled devices as well as Bluetooth.
 */
+(void) setNoDisconnect:(BOOL)val;
+(BOOL) noDisconnect;



@end
