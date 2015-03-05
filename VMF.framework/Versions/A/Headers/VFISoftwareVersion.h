

#import <Foundation/Foundation.h>

/**
 * Encapsulating data class utilized by VFIControl
 */
@interface VFISoftwareVersion : NSObject {
	NSString *AppMajor;                 //!< Software Version - Major
	NSString *AppMinor;                 //!< Software Version - Minor
	NSString *AppBuild;                 //!< Software Version - Build
	NSString *OSPlatform;               //!< Software OS Platform
	NSString *OSID;                     //!< Software Identification
	NSString *OSVersion;                //!< Software Version - Main
	NSString *OSSubVersion;             //!< Software Version - Sub
    NSString *OSBuildYear;              //!< Software Version - Build Year
    NSString *OSBuildMonth;             //!< Software Version - Build Month
    NSString *OSBuildDay;               //!< Software Version - Build Day
	
	
}
/**
 * clears all VFISoftwareVersion properties
 */
-(void)clear;



@property (nonatomic, retain) NSString *AppMajor;
@property (nonatomic, retain) NSString *AppMinor;
@property (nonatomic, retain) NSString *AppBuild;
@property (nonatomic, retain) NSString *OSPlatform;
@property (nonatomic, retain) NSString *OSID;
@property (nonatomic, retain) NSString *OSVersion;
@property (nonatomic, retain) NSString *OSSubVersion;
@property (nonatomic, retain) NSString *OSBuildYear;
@property (nonatomic, retain) NSString *OSBuildMonth;
@property (nonatomic, retain) NSString *OSBuildDay;


@end



