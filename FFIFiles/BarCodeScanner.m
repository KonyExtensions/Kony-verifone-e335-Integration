//
//  AirPrintController.m
//  Usage of Air-Print feature in IOS
//
//  Created by Bhanoji on 01/02/2014.
//  Copyright (c) 2014 kony. All rights reserved.
//

#import "BarCodeScanner.h"
#import "VStore.h"
#import <VMF/VMFramework.h>

#import <VMF/VFIBarcode.h>
#import <VMF/VFIPinpad.h>
#import <VMF/VFIBTBridge.h>
#import <VMF/VFIControl.h>
#import <MessageUI/MessageUI.h>
#import <MessageUI/MFMailComposeViewController.h>
#import "lglobals.h"

@interface BarCodeScanner ()

@end

@implementation BarCodeScanner

static int firstTime = 1;
BOOL softMode = false ;
BOOL isDebug = false ;

static CallBack *callbackObjPinpadConnected;
static CallBack *callbackObjBarcodeConnected;
static CallBack *callbackPinpadMSRData;
static CallBack *callbackBarcodeScanData;

+(BarCodeScanner *)instance{
    static BarCodeScanner *scanner = nil;
    if(nil==scanner)
        scanner = [[BarCodeScanner alloc] init];
    return scanner;
}
+(void) registerCallbackPinpadConnected:(CallBack*)callBack{
    
    callbackObjPinpadConnected=callBack;
}

+(void) registerCallbackBarcodeConnected:(CallBack*)callBack{
    
    callbackObjBarcodeConnected=callBack;
}

+(void) getCardDataMethod:(int) timeout language:(int) lcode amount:(float) txnAmt otherAmount:(float) txnOthAmt {
    
    [[[VStore vInstance] pinPad] enableBlocking];
    
    [[[VStore vInstance] pinPad] enableMSRDualTrack];
    
    [[[VStore vInstance] pinPad] selectEncryptionMode:EncryptionMode_PKI];
    
    [[[VStore vInstance] pinPad] disableBlocking];
    
    int status = [[[VStore vInstance] pinPad] getCardData:120 language:0 amount:1.00 otherAmount:0.00];
    if(isDebug) NSLog(@"status of getCardData is: %d",status);
    if(status==00)
    {
        NSString *myTrack2 = [[NSString alloc] initWithData:[[VStore vInstance] pinPad].vfiCardData.track2 encoding:NSASCIIStringEncoding];
        NSString *myTrack1 = [[NSString alloc] initWithData:[[VStore vInstance] pinPad].vfiCardData.track1 encoding:NSASCIIStringEncoding];
        NSString *accountNumber = [[VStore vInstance] pinPad].vfiCardData.accountNumber;
        NSString *expiryDate = [[VStore vInstance] pinPad].vfiCardData.expiryDate;
        NSString *cardHolderName = [[VStore vInstance] pinPad].vfiCardData.cardHolderName;

        if(isDebug) NSLog(@"getCardData - reading credit card is succesful and data is:%@,%@,%@,%@,%@",myTrack2,myTrack1,accountNumber,expiryDate,cardHolderName);
    }
    else{
        if(isDebug) NSLog(@"getCardData - reading credit card is NOT succesful with code %d",status);
    }
}


+(void) registerConnectionStatusNotifications{
    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(accessoryDidConnect:)
                                                 name:EAAccessoryDidConnectNotification
                                               object:nil];
    
    
    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(accessoryDidDisconnect:)
                                                 name:EAAccessoryDidDisconnectNotification
                                               object:nil];
    
    
    
    
    [[EAAccessoryManager sharedAccessoryManager] registerForLocalNotifications];
    //register callback passed from application to the global call back variable.once integrated with kony library, change the method to receive callback as argument . declare callback variable at class level and assign this variable to passed callback object
}

- (void)accessoryDidConnect:(EAAccessory *)accessory{
   if(isDebug) NSLog(@"PWMe Accessory Connected!");
    //executeClosure callback to kony app code
}

- (void)accessoryDidDisconnect:(EAAccessory *)accessory{

   if(isDebug) NSLog(@"PWMe Accessory Disconnected!");
    NSMutableDictionary * infoTable = [NSMutableDictionary dictionary];

    int i=0;
        for (EAAccessory *acc in [[EAAccessoryManager sharedAccessoryManager] connectedAccessories])   //loop through ea to report protocols that are still connected
    {
        if ([acc.protocolStrings count] > 0) {
            i++;
            [infoTable setObject:[acc.protocolStrings objectAtIndex:0] forKey:[NSString stringWithFormat:@"%i", i]];
        }
    }
   // NSMutableArray *valueOfDic = [[NSMutableArray alloc] initWithObjects:infoTable, nil];
    //executeClosure(callback,valueOfDic,true);
}


+(void) disableScanner{
    
    [[VStore vInstance] bcScanOff];
}

+(void) disableCardReader{
    [[[VStore vInstance] pinPad] enableBlocking];
    [[[VStore vInstance] pinPad] cancelPendingCommand];
    [[[VStore vInstance] pinPad] clearAllData];
    [[[VStore vInstance] pinPad] disableMSR];
    
    
}

+ (void) onClickBarCodeButton:(CallBack*)callBack {
    if(isDebug)
        NSLog(@"starting to scan bar code");
  //  BarCodeScanner *barcodescanner = [[BarCodeScanner alloc] init];
   // [self redirectConsoleLogToDocumentFolder];

   // [barcodescanner initializeBarCode];
    
    
    BOOL vmfGen3Flag = [[VStore vInstance] barcode].isGen3;
    
    [[[VStore vInstance] barcode] startScan];
    if (vmfGen3Flag == true) [[[VStore vInstance] barcode] setBeepOn]; // only need to turn on beep for gen3.
    [[[VStore vInstance] barcode] setSoft];
    [[BarCodeScanner instance] setBarCodeScanMethod];
     if(isDebug)
         NSLog(@"end of scan");
    callbackBarcodeScanData=callBack;
}

-(void) barcodeScanData:(NSData *)data code:(int)code symbol:(int)symbol aim:(int)aim {
    if(isDebug){
    NSLog(@" ----------------------------- SCANDATA RECEIVED --------------------------------\n");
    NSLog(@"bar code scanned data %@,%d,%d,%d",data,code,symbol,aim);
    }
    NSString *decodedString = [[NSString alloc] initWithData:data encoding:NSASCIIStringEncoding];
    if(isDebug)
        NSLog(@"decoded barcode: %@",decodedString);
    NSMutableDictionary * infoTable = [NSMutableDictionary dictionary];
    [infoTable setObject:data forKey:@"data"];
    [infoTable setObject:code forKey:@"code"];
    [infoTable setObject:symbol forKey:@"symbol"];
    [infoTable setObject:aim forKey:@"aim"];
    NSMutableArray *valueOfDic = [[NSMutableArray alloc] initWithObjects:infoTable, nil];
    executeClosure(callbackBarcodeScanData,valueOfDic,true);
}



- (void) pinpadMSRData:(NSString*)pan  expMonth:(NSString*)month  expYear:(NSString*)year  track1Data:(NSString*)track1  track2Data:(NSString*)track2 {
    if(isDebug)
        NSLog(@"Entered pinpadMSRData:");
    [[[VStore vInstance] pinPad] displayMessages:@"Got" Line2:@"Swipe" Line3:@"Thank" Line4:@"You"];
    if(isDebug)
        NSLog(@"data read from card,%@,%@,%@,%@,%@:",pan,month,year,track1,track2);
  //  NSArray *result = [[NSArray alloc] initWithObjects:pan,month,year,track1,track2,nil];
   // executeClosure(self.callbackObjPinpadConnected,result,NO);
    NSMutableDictionary * infoTable = [NSMutableDictionary dictionary];
    [infoTable setObject:pan forKey:@"pan"];
    [infoTable setObject:month forKey:@"expMonth"];
    [infoTable setObject:year forKey:@"expYear"];
    [infoTable setObject:track1 forKey:@"track1Data"];
    [infoTable setObject:track2 forKey:@"track2Data"];
    NSMutableArray *valueOfDic = [[NSMutableArray alloc] initWithObjects:infoTable, nil];
    executeClosure(callbackPinpadMSRData,valueOfDic,true);

   // [[[VStore vInstance] pinPad] disableMSR];
    
  //  ViewController *vc=[[ViewController alloc] init];
  //  [vc UpdateResult:[NSString stringWithFormat:@"%@/%@/%@/%@/%@/%@/%@/%@/%@", pan,@"$", month,@"$", year,@"$",track1,@"$",track2]];
}



+(void) scanCard:(CallBack*)callBack{
    if(isDebug)
        NSLog(@"scan card called");
  //  BarCodeScanner *scanner = [[BarCodeScanner alloc] init];
   // [self redirectConsoleLogToDocumentFolder];
  //  [scanner initializeDevice];
    
   // [scanner disableMSR:NO];

   // [[[VStore vInstance] pinPad] cancelPendingCommand];
    
    // clear framework data
   // [[[VStore vInstance] pinPad] clearAllData];
    
    [[[VStore vInstance] payControl] keypadEnabled:NO];
   // [[[VStore vInstance]pinPad] selectEncryptionMode: EncryptionMode_PKI];
    [[[VStore vInstance] pinPad] enableMSRDualTrack];
    [[[VStore vInstance] pinPad] disableBlocking];
    if(isDebug)
        NSLog(@"scan card called and instance set");
    callbackPinpadMSRData=callBack;
    
}


// Typical logging delegates.

- (void) barcodeLogEntry:(NSString*)logEntry withSeverity:(int)severity {
   if(isDebug) NSLog(@"bcLogEntry: %@", logEntry);
}

- (void) controlLogEntry:(NSString*)logEntry withSeverity:(int)severity {
   if(isDebug)  NSLog(@"ctlLogEntry: %@", logEntry);
}

- (void) pinpadLogEntry:(NSString *)logEntry withSeverity:(int)severity{
   if(isDebug) NSLog(@"ppLogEntry: %@", logEntry);
}

- (void)controlSerialData:(NSData*)data  incoming:(BOOL)isIncoming{
   if(isDebug) NSLog(@"+++++++++++++++++++++++++++++++++++ CONTROL DATA (%@) +++++++++++++++++\n%@",isIncoming?@"IN":@"OUT",[data description]);
}


- (void)barcodeSerialData:(NSData*)data  incoming:(BOOL)isIncoming{
   if(isDebug) NSLog(@"+++++++++++++++++++++++++++++++++++ BARCODE DATA (%@) +++++++++++++++++\n%@",isIncoming?@"IN":@"OUT",[data description]);
}



- (void) pinpadSerialData:(NSData*)data  incoming:(BOOL)isIncoming{
    if(isDebug) NSLog(@"+++++++++++++++++++++++++++++++++++ XPI DATA (%@) +++++++++++++++++\n%@",isIncoming?@"IN":@"OUT",[data description]);
}

- (void) btSerialData:(NSData*)data  incoming:(BOOL)isIncoming{
   if(isDebug) NSLog(@"+++++++++++++++++++++++++++++++++++ BT DATA (%@) +++++++++++++++++\n%@",isIncoming?@"IN":@"OUT",[data description]);
}

//Monitors data being received from the [VStore vInstance] pinPad
- (void) pinpadDataReceived:(NSData*)data{
    NSString *myData = [[VStore vInstance] nsdataToNSString:data];
    if(isDebug) NSLog(@"PPRECV: %@", [[VStore vInstance] hexToString:[[VStore vInstance] nsdataToNSString:data]]);
    if ([myData length] >= 2) {
        if ([[myData substringToIndex:2] isEqualToString:@"06"]) {
        } else {
            if(isDebug) NSLog(@"PPRECV: %@", [[VStore vInstance] nsdataToNSString:data]);
        }
    }
}

//Monitors data being sent
- (void) pinpadDataSent:(NSData*)data{
    NSString *myData = [[VStore vInstance] nsdataToNSString:data];
    if(isDebug) NSLog(@"PPSEND: %@", [[VStore vInstance] hexToString:[[VStore vInstance] nsdataToNSString:data]]);
    if ([myData length] >= 2) {
        if ([[myData substringToIndex:2] isEqualToString:@"06"]) {
        } else {
           if(isDebug) NSLog(@"PPSEND: %@", [[VStore vInstance] nsdataToNSString:data]);
        }
    }
}

//Monitors data being sent
- (void) controlDataSent:(NSData*)data{
   if(isDebug) NSLog(@"CSEND: %@, [%@]", [[VStore vInstance] nsdataToNSString:data],[[VStore vInstance] hexToString:[[VStore vInstance] nsdataToNSString:data]]);
}

+(void) initializeBarCodeScanner{
   if(isDebug) NSLog(@"init barcode");
    //  [miscText setText:[NSString stringWithFormat:@"Init Barcode.\n%@",  miscText.text]];
    [VStore vInstance].barcode = [[VFIBarcode alloc] init];
   if(isDebug) NSLog(@"BC ENABLE LOG");
    [[[VStore vInstance] barcode] setDelegate:[BarCodeScanner instance]];
    [[[VStore vInstance] barcode] logEnabled:YES];
    [[[VStore vInstance] barcode] enableBlocking];
    if(isDebug) NSLog(@"BC INIT DEVICE");
    [[[VStore vInstance] barcode] initDevice];
    
}


-(void) setBarCodeScanMethod {
    
    [[[VStore vInstance] barcode] setDelegate:self];
    
    
    BOOL vmfGen3Flag = [[VStore vInstance] barcode].isGen3;
    
    
    if (vmfGen3Flag == true) {
        //        [[[VStore vInstance] barcode] mTriggerMode:1];
        [[[VStore vInstance] barcode] mStartScan];
        [[[VStore vInstance] barcode] setLevel];
        [[[VStore vInstance] barcode] setSingleScan];
        
        
        //    [[[VStore vInstance] barcode] mRestoreDefaults];
        
        if (firstTime == 1) {
            
            [[[VStore vInstance] barcode] mRestoreDefaults];
            
            [[[VStore vInstance] barcode] resetScannerToFactoryDefaults];
            [[[VStore vInstance] barcode] setBeepOn];
            [[[VStore vInstance] barcode] setLevel];
            [[[VStore vInstance] barcode] setSingleScan];
            
            
            // this actually works - tested
            [[[VStore vInstance] barcode] mSymbology:SYM_PID_CONVERT_UPCE_2_UPCA value:0x01];
            
            //            [[[VStore vInstance] barcode] mSymbology:SYM_PID_EN_ISBN_FORMAT value:0x01];
            //            [[[VStore vInstance] barcode] mSymbology:SYM_PID_EN_BOOKLAND_EAN value:0x01];
            
            [[[VStore vInstance] barcode] mSymbology:SYM_PID_EN_INTER2OF5 value:0x01];
            [[[VStore vInstance] barcode] mSymbology:SYM_PID_SETLEN_ANY_I2OF5 value:0x01];
            
            [[[VStore vInstance] barcode] mSymbology:SYM_ID_UPCA value:0x01];
            
            
            // upc supplements. // http://i5.minus.com/ih2b9lavDxOSP.png  http://www.barcodemaking.com/UPC-A_+_5_Digit_Supplement.html
            [[[VStore vInstance] barcode] mSymbology:SYM_ID_UPCE_2 value:0x01];
            [[[VStore vInstance] barcode] mSymbology:SYM_ID_UPCE_5 value:0x01];
            [[[VStore vInstance] barcode] mSymbology:SYM_ID_UPCE1_2 value:0x01];
            [[[VStore vInstance] barcode] mSymbology:SYM_ID_UPCE1_5 value:0x01];
            [[[VStore vInstance] barcode] mSymbology:SYM_PID_SUPPLIMENTS_UPC_EAN value:2];
            
            
            [self upcTOeanOFF] ;
            
            [[[VStore vInstance] barcode] barcodeTypeEnabled:TRUE];
            
            
            
        }
    } else {
        [[[VStore vInstance] barcode] startScan];
        
        if (firstTime == 1) {
            //        if ([self init02BCFlagFile] == FALSE) {
            [self upcTOeanOFF] ;
            [[[VStore vInstance] barcode] activateBarcodeType:BC_MSICODE];
            [[[VStore vInstance] barcode] activateBarcodeType:BC_INTERLEAVED_2_OF_5];
            
            
        }
        softMode = true;
        
        if (softMode) {
            // soft mode
            [[[VStore vInstance] barcode] setSoft];
          //  [miscText setText:[NSString stringWithFormat:@"Testing SOFT Mode with Triggers.\n%@",  miscText.text]];
        } else {
            // setsingle maybe?? only allow one.. ?
            [[[VStore vInstance] barcode] setLevel];
            // multisscan test            [[[VStore vInstance] barcode] setMultiScan];
        }
        [[[VStore vInstance] barcode] startScan];
    }
    firstTime = 0 ;
    
   // [myAlert dismissWithClickedButtonIndex:0 animated:YES];
    
    if ([[VStore vInstance] barcode].initialized) {
       //place holder to do any thing after the scanner is initialized
    }
    
       
}


-(IBAction) upcTOeanOFF {
    
    [self sendISCPCommand:0x41 group:0x4b fid:0x5a param:0x00] ;
    
    
}

// upcTOeanOFF
/*
 Have you seen the ISCP manual concerning this?  On page 69, it talks about UPC/EAN codes.  There is a reference to "UPC-A transmitted as EAN-13".  Isn't this  what is  happening?  It is adding a 13 digit to make it EAN-13?  I would assume if you disable this feature, it won't add the 0 anymore.
 
 The ISCP method should turn it off with the following settings:
 commandType: TYPE_SETUP_WRITE  0x41
 group:  0x4B
 fid:  0x5A
 parameter: 0x00  (to disable or 0x01 to enable)
 */

-(void) sendISCPCommand: (unsigned char) commandType
                  group:(unsigned char) group
                    fid:(unsigned char) fid
                  param:(unsigned char) param {
    
    
    bool vmfGen3Flag = [[VStore vInstance] barcode].isGen3;
    
    if (vmfGen3Flag) return; // DON'T DO THIS FOR GEN3 DEVICE!!
    
    ISCP_HIGH *frame = [[ISCP_HIGH alloc] init];
    frame.commandType = commandType;
    frame.group = group;
    frame.fid = fid;
    
    unsigned char* bytes = malloc(1);
    bytes[0] = param;
   	frame.param = [NSData dataWithBytes:bytes length:1];
    
    [[[VStore vInstance] barcode] sendISCP:frame];
    
    free(bytes);
    
    // [frame release] ;
    
    
}

//define the targetmethod
+(void) initializeCardSwipe{
    
    
    //Set up listener for any broadcast messages from the framework
    //NSLog(@"set up for broadcasts");
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(message:) name:@"VFMMessage" object:nil];
    [VFIBTBridge setNoDisconnect:false];
    [VStore vInstance].pinPad = [[VFIPinpad alloc] init];
    // logging enable log logging enabled
   if(isDebug) NSLog(@"Set delegate...");
    [[[VStore vInstance] pinPad] setDelegate:[BarCodeScanner instance]];
    [[[VStore vInstance] pinPad] enableBlocking];
    [[[VStore vInstance] pinPad] logEnabled:YES];
    if(isDebug) NSLog(@"Done with setDelegate...");
    

        if(isDebug) NSLog(@"pinpad is not initialized and initializing");
        [[[VStore vInstance] pinPad] initDevice];
}
/*
{
    
    // New init code, 20121030
   if(isDebug) NSLog(@"init control");
    
    [VStore vInstance].payControl = [[VFIControl alloc] init];
    [[[VStore vInstance] payControl] setDelegate:self];
    [[[VStore vInstance] payControl] enableBlocking];

    if(isDebug) NSLog(@"paycontrol is not initialized and initializing");
    [[[VStore vInstance] payControl] initDevice];

    
   if(isDebug) NSLog(@"init barcode");
  //  [miscText setText:[NSString stringWithFormat:@"Init Barcode.\n%@",  miscText.text]];
    [VStore vInstance].barcode = [[VFIBarcode alloc] init];
   if(isDebug) NSLog(@"BC ENABLE LOG");
    [[[VStore vInstance] barcode] logEnabled:YES];
    [[[VStore vInstance] barcode] setDelegate:self];
    [[[VStore vInstance] barcode] enableBlocking];
   if(isDebug) NSLog(@"BC INIT DEVICE");

    if(isDebug) NSLog(@"barcode is not initialized and initializing");
    [[[VStore vInstance] barcode] initDevice];

    // End New Init Code 20121030
   
    
}*/

- (BOOL)openSessionForProtocol:(NSString *)protocolString {
    
    [EAAccessoryManager initialize] ;
    
    
    NSArray *accessories = [[EAAccessoryManager sharedAccessoryManager]
                            connectedAccessories];
    EAAccessory *accessory = nil;
    
    for (EAAccessory *obj in accessories) {
        if ([[obj protocolStrings] containsObject:protocolString]){
            accessory = obj;
            return true;
            
        }
    }
    return false;
}

- (void) pinPadInitialized:(BOOL)isInitialized {
    
    
   if(isDebug) NSLog(@"============================================================Pinpad Init %@",isInitialized?@"TRUE":@"FALSE");
    
    if (isInitialized == true){
        [[[VStore vInstance] pinPad] setFrameworkTimeout:120]; // ENTER PIN timeout old way.
        [[[VStore vInstance] pinPad] setPINTimeout:70]; // ENTER PIN timeout
        [[[VStore vInstance] pinPad] setAccountEntryTimeout:120];
        [[[VStore vInstance] pinPad] setPromptTimeout:70];
        [[[VStore vInstance] pinPad] setACKTimeout:3.0];
        [[[VStore vInstance] pinPad] setKSN20Char:FALSE];
        // Use a custom prompt for the C30 command...
        [[[VStore vInstance] pinPad] waitForResponse:YES];
        //        [[[VStore vInstance] pinPad] selectEncryptionMode:EncryptionMode_NOE];
        //        myEncryptionType = EncryptionMode_NOE;
        [[[VStore vInstance] pinPad] sendStringCommand:[NSString stringWithFormat:@"D30%c1%c0%c0Tap or Swipe%c0Card%c0", 0x1C, 0x1c, 0x1c,0x1c, 0x1c] calcLRC:YES];

    }
    [[[VStore vInstance] pinPad] enableBlocking];
    
}

- (void) barcodeInitialized:(BOOL)isInitialized {
   if(isDebug) NSLog(@"============================================================Barcode Init %@",isInitialized?@"TRUE":@"FALSE");
    [[VStore vInstance] bcScanOff];
   if(isDebug) NSLog(@"Enable Type");
    [[[VStore vInstance] barcode] barcodeTypeEnabled:TRUE];
    
   if(isDebug) NSLog(@"Include all types");
    [[[VStore vInstance] barcode] includeAllBarcodeTypes];
    
   if(isDebug) NSLog(@"Set 2D");
    [[[VStore vInstance] barcode] setScanner2D];
    
   if(isDebug) NSLog(@"Set timeout 5000");
    [[[VStore vInstance] barcode] setScanTimeout:5000];
    
}

- (void) pinpadConnected:(BOOL)isConnected{
   if(isDebug) NSLog(@"============================================================Pinpad Connected %@",isConnected?@"TRUE":@"FALSE");
    //Once the platform fix comes for duplicate symbols, use this as follows - write a method registerPinPadConnected and pass callback from kony app. assign that to a global callback object. when the flow comes into this method pinpadconnected, then executeClosure of the callback registered in registerPinPadConnected. In the kony app in the callback function, maintain status of pinpadconnected or not and show error message when required.
    //executeClosure(pinpadcallback);
    NSArray * result = [[NSArray alloc] initWithObjects:isConnected?@"true":@"false", nil];
    executeClosure(callbackObjPinpadConnected,result,true);
}

- (void) barcodeConnected:(BOOL)isConnected {
    if(isDebug) NSLog(@"============================================================Barcode Connected %@",isConnected?@"TRUE":@"FALSE");
        //Once the platform fix comes for duplicate symbols, use this as follows - write a method registerBarCodeConnected and pass callback from kony app. assign that to a global callback object. when the flow comes into this method barcodeConnected, then executeClosure of the callback registered in registerPinPadConnected. In the kony app in the callback function, maintain status of barcodeConnected or not and show error message when required.
    NSArray * result = [[NSArray alloc] initWithObjects:isConnected?@"true":@"false", nil];
    executeClosure(callbackObjBarcodeConnected,result,true);
}



+(void)redirectConsoleLogToDocumentFolder:(BOOL) enableDebug
{
    isDebug = enableDebug;
    if(enableDebug)
    {
    NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory,
                                                         NSUserDomainMask, YES);
    NSString *documentsDirectory = [paths objectAtIndex:0];
    NSString *logPath = [documentsDirectory
                         stringByAppendingPathComponent:@"console.log"];
    freopen([logPath cStringUsingEncoding:NSASCIIStringEncoding],"a+",stderr);
    }
}

@end
