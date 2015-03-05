

#import <Foundation/Foundation.h>
#import "VFICardData.h"
#import "VFIEncryptionData.h"
#import "VFIEMVAuthorization.h"
#import "VFIDataEntry.h"
#import "VFIEMVTags.h"


@class VFIFinancialData;
/**
 * Encapsulating data class utilized by VFIPinpad
 */
@interface VFIFinancialData : NSObject {

	VFICardData* cardData;                      //!< Data collected from the swiped, inserted, or tapped card
	VFIEncryptionData* encryptedData;           //!< Encrypted data for the financial transaction, includes MAC and PIN blocks depending on the type of card used
	NSMutableDictionary* emvTags;               //!< EMV requested tags to be included in the financial transaction to the host
	VFIEMVAuthorization *emvAuthorization;      //!< EMV authorization results and additional requested tags for the financial transaction request to the host
	VFIDataEntry *cardholderEntries;            //!< Cardholder entered data in response to tip, cash back and surcharge prompting
	NSMutableArray *additionalPrompts;          //!< Additional cardholder prompts for which responses are required
	NSMutableArray *additionalPromptResponses;  //!< Cardholder value responses corresponding to the additionalPrompts
}

/**
 * clears all VFIFinancialData properties
 */
-(void)clear;


@property (nonatomic, retain) VFICardData* cardData;
@property (nonatomic, retain) VFIEncryptionData* encryptedData;
@property (nonatomic, retain) NSMutableDictionary* emvTags;
@property (nonatomic, retain) VFIEMVAuthorization *emvAuthorization;
@property (nonatomic, retain) VFIDataEntry *cardholderEntries;
@property (nonatomic, retain) NSMutableArray *additionalPrompts;
@property (nonatomic, retain) NSMutableArray *additionalPromptResponses;



@end
