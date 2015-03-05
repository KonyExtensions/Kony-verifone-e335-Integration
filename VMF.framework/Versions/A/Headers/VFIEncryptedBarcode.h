//
//  VFIEncryptedBarcode.h
//  VMF
//
//  Created by Randy Palermo on 8/26/13.
//  Copyright (c) 2013 VeriFone, Inc. All rights reserved.
//

#import <Foundation/Foundation.h>


/**
 * Encapsulating data class representing Encrypted Barcode Data
 */

@interface VFIEncryptedBarcode : NSObject{
    NSString *terminalSerialNumber;     //!< Terminal Serial Number
    NSString *publicKey;                //!< Public Key ID
    int scanIndex;                      //!< incremental barcode counter
    int decryptedLength;                //!< Length of decrypted barcode data
    NSMutableArray *encryptedData;       //!< Array of NSData containg Base64 encoded encrypted binary data.

}
/**
 * clears all VFIEncryptedBarcode properties
 */
-(void)clear;
/**
 * Singleton instance of VFIEncryptedBarcode utilized by VFIPinpad
 */
+ (VFIEncryptedBarcode *)sharedController;

@property (nonatomic, retain) NSString *terminalSerialNumber;
@property (nonatomic, retain) NSString *publicKey;
@property int scanIndex;
@property int decryptedLength;
@property (nonatomic, retain) NSMutableArray *encryptedData;


@end
