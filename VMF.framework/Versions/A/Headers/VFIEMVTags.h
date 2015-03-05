
#import <Foundation/Foundation.h>

@class VFIEMVTags;
/**
 * Encapsulating data class utilized by VFIPinpad
 */
@interface VFIEMVTags : NSObject {
	NSMutableDictionary* emvTags; //!< A dictionary containing EMV Tag names and values, each of type NSData retrieved from the EMV chip card

}

/**
 * clears all VFIEMVTags properties
 */
-(void)clear;
/**
 * Singleton instance of VFIEMVTags utilized by VFIPinpad
 */

+ (VFIEMVTags *)sharedController;

@property (nonatomic, retain) NSMutableDictionary *emvTags; 


@end
