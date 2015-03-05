

#import <Foundation/Foundation.h>

@class VFICardData;

/**
 * Encapsulating data class utilized by VFIPinpad
 */

@interface VFICardData : NSObject {
	NSString *AID;                  //!< Application ID
	NSString *appPreferredName;     //!< Application Preferred Name
	NSString *appLabel;             //!< Application Label
	int serviceCode;                //!< Service Code
	NSString *cardHolderName;       //!< Card Holder Name
	NSData *track2;                 //!< Track 2 data OR Track2 + Track 1 from S16 command
	NSData *track1;                 //!< Track 1 data
	NSData *track3;                 //!< Track 3 data
	NSData *s16track1;              //!< Track 1 data from S16 (obtainCardData)
	NSData *s16track2;              //!< Track 2 data from S16 (obtainCardData)
	NSString *accountNumber;        //!< Personal Account Number
	NSString *expiryDate;           //!< Expiration Date
	NSMutableDictionary *emvTags;   //!< Captured EMV Tags
	BOOL isCTLS;                    //!< CTLS card used
	int entryType;                  //!< Pinpad entry type (swipe, keyed, clts)

}
/**
 * clears all VFICardData properties
 */
-(void)clear;
/**
 * Singleton instance of VFICardData utilized by VFIPinpad
 */
+ (VFICardData *)sharedController;



@property (nonatomic, retain) NSString *AID;
@property (nonatomic, retain) NSString *appPreferredName;
@property (nonatomic, retain) NSString *appLabel;
@property int serviceCode;
@property int entryType;
@property (nonatomic, retain) NSString *cardHolderName;
@property (nonatomic, retain) NSData *track2;
@property (nonatomic, retain) NSData *track1;
@property (nonatomic, retain) NSData *track3;
@property (nonatomic, retain) NSData *s16track1;
@property (nonatomic, retain) NSData *s16track2;
@property (nonatomic, retain) NSString *accountNumber;
@property (nonatomic, retain) NSString *expiryDate;
@property BOOL isCTLS;
@property (nonatomic, retain) NSMutableDictionary *emvTags;

@end
