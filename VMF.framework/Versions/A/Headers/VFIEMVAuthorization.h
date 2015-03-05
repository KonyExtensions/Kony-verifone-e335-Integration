

#import <Foundation/Foundation.h>


@class VFIEMVAuthorization;
/**
 * Encapsulating data class utilized by VFIPinpad
 */
@interface VFIEMVAuthorization : NSObject {
	NSMutableDictionary* emvTags;  //!< A dictionary containing EMV Tag names and values, each of type NSData retrieved from the EMV chip card

    /**
     Indicates the state of the PIN entry/validation for the card authorization; valid values are:
    
    - -1: N/A, PIN Successful field will only be returned if the Application Selection flag is not set to “S” or “E”. This field is required to indicate if Card Verification through PIN was successful or performed. The flag is required in Canada, to determine if a signature prints on the receipt, regardless of the Card’s decision if a signature is required or not.
    - 0: PIN Entered Successfully
    - 1: No PIN Entered
    - 2: PIN Failed}
     */
	int pinSuccessful;             


}
/**
 * clears all VFIEMVAuthorization properties
 */
-(void)clear;

/**
 * Singleton instance of VFICardData utilized by VFIPinpad
 */
+ (VFIEMVAuthorization *)sharedController;

@property (nonatomic, retain) NSMutableDictionary* emvTags;
@property int pinSuccessful;

@end
