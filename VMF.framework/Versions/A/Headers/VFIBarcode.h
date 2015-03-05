

#import <Foundation/Foundation.h>
#import	<ExternalAccessory/ExternalAccessory.h>
#import "ISCP_HIGH.h"
#import <UIKit/UIKit.h>
#import "VFIAccessoryMgr.h"
#import "VFIStream.h"
#import "Barcode_host.h"
#import "VFIEncryptedBarcode.h"






/** The frame type indicates what kind of frame is being sent or received.  (ISCP) **/
typedef enum  {
 TYPE_SETUP_READ =0x40,             //!<The host sends a Setup Read to know how the scanner is configured.
 TYPE_SETUP_WRITE =0x41,            //!<The host sends a Setup Write to configure the scanner or modify the current configuration.
 TYPE_CONTROL =0x42,                //!< Control Command is used to control the scanner.
 TYPE_STATUS_READ =0x43,            //!< Status Read is used to find out information on the status of certain parameters in the scanner.
 TYPE_PERMISSION_READ =0x44,        //!< Setup Permission Read frame is used to find out what setup parameters can or cannot be changed by reading configuration bar codes.
 TYPE_PERMISSION_WRITE =0x45,       //!<Setup Permissions allow the host to prevent users from modifying the scanner's setup parameters when reading configuration bar codes.
 TYPE_SETUP_REPLY =0x50,            //!<A Setup Reply is used to send to the host information about the configuration of the scanner. This frame is sent in response to a Setup Read.
 TYPE_RESULT =0x51,                 //!<All Result frames, except Unknown Frame Type, are sent in response to three different kinds of frames: Setup Write, Control Command and Setup Permission Write.
 TYPE_STATUS_REPLY =0x53,           //!<After receiving a Status Read from the host, the scanner replies by sending the requested status parameter values to the host.
 TYPE_SETUP_PERMISSION_REPLY =0x54, //!<After receiving a Setup Permission Read from the host, the scanner replies by sending the permission status of the requested setup parameters.
 TYPE_BARCODE_DATA =0x60,           //!<A Barcode Data frame is a scanner-initiated frame. When the scanner reads a bar code, data is sent from the scanner to the host.
 TYPE_EVENT_NOTIFICATION =0x61,     //!<An Event notification is a scanner-initiated frame. It is used to inform the host when certain events have taken place such as an unsuccessful decoding, etc.
 TYPE_SETUP_BARCODE_DATA =0x62      //!<This frame is used to send configuration barcode data via the scanner to the host in packet format.
} TYPE;



/**
 Barcode types.  (ISCP)
 
 Values returned when option to identify returning barcode types is ON when VFIBarcode::barcodeTypeEnabled:() is passed <c>TRUE</c>.
 */
typedef enum  {
	BC_EAN_UPC2 ='E',
	BC_EAN_UPC1 ='X',
	BC_CODABAR ='F',
	BC_CODABLOCK ='O', 
	BC_CODE11 ='H', 
	BC_CODE39 ='A', 
	BC_CODE93 ='G', 
	BC_CODE128 ='C', 
	BC_DATAMATRIX ='d', 
	BC_GS1 ='e', 
	BC_INTERLEAVED_2_OF_5 ='I', 
	BC_MAXICODE ='U', 
	BC_MSICODE ='M', 
	BC_PDF417 ='L', 
	BC_PLESSYCODE ='P', 
	BC_QRCODE ='Q', 
	BC_STAN_2_OF_5_2BARS ='R', 
	BC_STAN_2_OF_5_3BARS ='S', 
	BC_TELEPEN ='B'  
}barcodeTypes ;





/** Scanning Modes  (ISCP) **/
typedef enum {
    BCS_BUTTON_EDGE = 0,       //!< Scanning session begin on trigger press, and continues after trigger released.  Scanning completes upon successful scan capture, abortScan() or timeout.
    BCS_BUTTON_LEVEL,          //!< Scanning session begin on trigger press.  Scanning completes upon successful scan capture, abortyScan(), trigger release or timeout.
    BCS_BUTTON_SOFT,           //!< Triggers send events to framework for integrator to control scanning session via software calls.
    BCS_BUTTON_PASSIVE         //!< Triggers do not send events to framework. Integrator can control scanning session via software calls.
} scanningModes;


/** Verix BCS Application Host Responses  (ISCP) **/
typedef enum  {
	COMM_RESULT_ACK=0,          //!< Response Acknowledged
	COMM_RESULT_NAK,            //!< Response Not Acknowledged
	COMM_RESULT_BUSY,           //!< Verix Application Busy
	COMM_RESULT_BAD_RESPONSE,   //!< Verix Application Bad Response
	COMM_RESULT_NO_RESPONSE     //!< Verix Application No Response
	
} commResult;

/** BCS Application Trigger Responses  (ISCP) **/
typedef enum  {
    BCS_TRIGGER_RELEASED = 0,       //!< Trigger Released
    BCS_TRIGGER_LEFT_PRESSED,       //!< Left Trigger Pressed
    BCS_TRIGGER_RIGHT_PRESSED,       //!< Right Trigger Pressed
    BCS_TRIGGER_BOTH_PRESSED       //!< Both Triggers Pressed
} triggerResponse;



/** Protocol methods established for VFIBarcode class **/
@protocol VFIBarcodeDelegate <NSObject>

@optional
- (void) commandResult:(int)result;             //!< Receives int value #commResult. Monitoring this delegate will inform the success/failure from the Verix BCS application to API commands execute.
                                                //!< @param result #commResult

- (void) barcodeTriggerEvent:(int)BCS_TRIGGER;  //!< Receives int value #triggerResponse. When scanner is in Soft mode by executing VFIBarcode::setSoft(), this delegate will receive trigger press/release events values #triggerResponse.
                                                //!< @param BCS_TRIGGER #triggerResponse

- (void) barcodeLogEntry:(NSString*)logEntry withSeverity:(int)severity; //!<When VFIBarcode::logEnabled:() is passed <c>TRUE</c>, this delegate will receive log entries.
                                                //!< @param logEntry The log entry
                                                //!< @param severity The severitry of the log entry, with 0 indicating highest priority

- (void) barcodeSerialData:(NSData*)data  incoming:(BOOL)isIncoming; //!<All incoming/outgoing data going to the Barcode application can be monitored through this delegate.
                                            //!< @param data The serial data represented as a NSData object
                                            //!< @param isIncoming The direction of the data
                                            //!<- <c>TRUE</c> specifies data being received from barcode application,
                                            //!<- <c>FALSE</c> indicates data being sent to barcode application.

- (void) barcodeInitialized:(BOOL)isInitialized;//!<Notifies of initialization state changes in e210/e255/e315 Barcode Application
                                //!< @param isInitialized Device initialization state change
                                //!<- <c>TRUE</c> successfully initialized the barcode application,
                                //!<- <c>FALSE</c> barcode application went offline.


- (void) barcodeReconnectStarted;//!<When the External Accessory reports the barcode devices is detected (but not initialized by framework),this delegate is called. This signifies the beginning of the framework initialization process of the barcode application.

- (void) barcodeReconnectFinished;//!<This signifies the end of the framework initialization process for barcode application.

- (void) barcodeConnected:(BOOL)isConnected;//!<Notified of barcode connection/disconnection events.  A connect/disconnect can either be from a physical disconnection/connection with the External Accessory API, or from an application going to backround or returning to foreground.
                                //!< @param isConnected A new connection or disconnection was detected
                                //!<- <c>TRUE</c> The barcode application has connected.
                                //!<- <c>FALSE</c> The barcode application has disconnected.

- (void) barcodeDataReceived:(NSData*)data;//!<This delegate monitors all data received from Barcode Application.
                                //!< @param data A NSData binary object representing the incoming data from the barcode.

- (void) barcodeDataSent:(NSData*)data;//!<This delegate monitors all data sent from Barcode Application.
                                //!< @param data A NSData binary object representing the outgoing data sent the barcode.

- (void) barcodeScanData:(NSData*)data barcodeType:(int)thetype;//!<This delegate receives the barcode scan data. If VFIBarcode::barcodeTypeEnabled:() is passed <c>TRUE</c>, then the parameter <c>thetype</c> will represent the barcode type int #barcodeTypes.
                                //!< @param data A NSData binary object representing the barcode data.
                                //!< - To convert the barcode data to a NSString, execute <c>[[NSString alloc] initWithData:data encoding:NSASCIIStringEncoding]</c>
                                //!< @param thetype An int value representing the barcode type captured, using enum #barcodeTypes

- (void) barcodeScanData:(VFIEncryptedBarcode*)data;//!<This delegate receives the encrypted barcode scan data. 
//!< @param data A VFIEncryptedBarcode class object representing the barcode data.

- (void) barcodeMessage:(NSString*)message;//!<Additional messaging used by VMF.
//!< @param message The message passed by VFIBarcode


- (void) barcodeScanData:(NSData*)data code:(int)code symbol:(int)symbol aim:(int)aim;//!<This delegate receives the barcode scan data. If VFIBarcode::barcodeTypeEnabled:() is passed <c>TRUE</c>, then the parameter <c>thetype</c> will represent the barcode type int #barcodeTypes.
//!< @param data A NSData binary object representing the barcode data.
//!< - To convert the barcode data to a NSString, execute <c>[[NSString alloc] initWithData:data encoding:NSASCIIStringEncoding]</c>
//!< @param code The Code ID value representing the barcode type captured
//!< @param symbol The Symbology ID value representing the barcode type captured
//!< @param aim The AIM ID value representing the barcode type captured


@end



/**
 * API methods for e210/e255/e315 Pinpad Barcode Scanner.
 *
 * Implementing this class will allow API calls that will access e210/e255/e315 barcode hardware (if available).
 */
@interface VFIBarcode : NSObject <EAAccessoryDelegate,NSStreamDelegate,UIApplicationDelegate> {
	
	id <VFIBarcodeDelegate> delegate;
    
   
	
}


/**
 * Creates an instance of VFIBarcode class.
 *
 * @retval <id> of VFIBarcode class
 *
 * Example Usage:
 * @code
 *    VFIBarcode* barcode = [[VFIBarcode alloc] init];
 * @endcode
 */
-(id)init;

/**
 * Initializes the barcode device.
 *
 * This is executed after the instance is created with init. If any of the optional protocols will be used, setDelegate should first be executed.
 *
 * Example Usage:
 * @code
 *    VFIBarcode* barcode = [[VFIBarcode alloc] init];
 *    [barcode setDelegate:self];
 *    [barcode initDevice];
 * @endcode
 */
-(void) initDevice;
/*
 * Initializes the barcode application via a remote socket connection. The initial connection must have already been established through VFIPinpad initDeviceOnServer:(NSString*)address port:(int)port
 *
 * This is executed after the instance is created with init. If any of the optional protocols will be used, setDelegate should first be executed.
 *
 * Example Usage:
 * @code
 *    VFIBarcode* barcode = [[VFIBarcode alloc] init];
 *    [barcode setDelegate:self];
 *    [barcode initDeviceOnServer];
 * @endcode
 */
-(void) initDeviceOnServer;
/**
 * Powers up the scanner engine. 
 *
 * Executing startScan will allow barcode scanning to commence.
 */
-(void) startScan;

/**
 * Powers down the scanner engine.  
 *
 * Executing abortScan will remove power from the scanning engine deactivating barcode scanning.
 */
-(void) abortScan;

/**
 * Sends parameters to modify scanner properties.
 *
 * @param frame ISCP_HIGH packet containing command frameType, group, FID,and parameters
 *
 * Creating ISCP_HIGH packets and sending them through this method sets various scanner properties.
 *
 * Example Usage:
 * To set the ability for the barcode scanner to recognize QR Codes, you must send frameType \a TYPE_SETUP_WRITE, group 0x4b, fid 0x5a and parameters 0x00
 * @code
 ISCP_HIGH *frame = [[ISCP_HIGH alloc] init];
 frame.commandType = TYPE_SETUP_WRITE;
 frame.group = 0x4a;
 frame.fid = 0x40;
 unsigned char bytes[1] = { 0x01 };
 frame.param = [[NSData alloc] initWithBytes:bytes length:1];
 [[e210/e255/e315 barcode] sendISCP:frame];
 [frame.param release];
 [frame release];
 * @endcode
 */
-(void) sendISCP:(ISCP_HIGH*)frame;

/**
 * Sets the default beep properties.
 *
 * @param beep #T_BEEP_DEF packet containing Beep1, pause, and Beep2
 *
 * This method will configure the default beep properties.  This value does not persist between power resets. This method replaces setBeep:()
 *
 * Example Usage:
 * @code
 T_BEEP_DEF b;
 T_BEEP b1;
 T_BEEP b2;
 
 b1.freq = 0x40;
 b1.dur = 0x30;
 b2.freq = 0x35;
 b2.dur = 0x30;
 
 b.b1 = b1;
 b.b2 = b2;
 b.bPause = 0x50;
 
 [barcode configureBeep:b];
 * @endcode
 */
-(void) configureBeep:(T_BEEP_DEF)beep;

/**
 * \a DEPRECATED: Sets the default beep properties.
 *
 * @param beep #T_BEEP_DEF packet containing Beep1, pause, and Beep2
 *
 * \deprecated Please see configureBeep:()
 *
 */
-(void) setBeep:(T_BEEP_DEF)beep;

/**
 * Executes a barcode beep.
 *
 * @param beep #T_BEEP_DEF packet containing Beep1, pause, and Beep2
 *
 * This method will execute a beep from the barcode scanner.
 *
 * Example Usage:
 * @code
 T_BEEP_DEF b;
 T_BEEP b1;
 T_BEEP b2;
 
 b1.freq = 0x40;
 b1.dur = 0x30;
 b2.freq = 0x35;
 b2.dur = 0x30;
 
 b.b1 = b1;
 b.b2 = b2;
 b.bPause = 0x50;
 
 [barcode sendBeep:b];
 * @endcode
 */
-(void) sendBeep:(T_BEEP_DEF)beep;

/**
 * Silences the barcode beep.
 *
 * This method will silence the beep that is executed upon a successful barcode scan.
 */
-(void) setBeepOff;

/**
 * Enables the barcode beep.  
 *
 * This method will allow the beep that is executed upon a successful barcode scan.
 */
-(void) setBeepOn;

/**
 * Retrieves the default barcode beep values.
 *
 * @retval getBeep #T_BEEP_DEF structure that contains Beep1, Beep2, and the pause between them.
 *
 * This method polls the barcode for the current default beep values.
 */
-(T_BEEP_DEF) getBeep;

/**
 * Sets barcode scanner timeout.
 *
 * @param milliseconds Interval that must pass in milliseconds before timeout error.
 *
 * While in Edge mode setEdge() or Level mode setLevel(), clicking the trigger with the scanner engine ON will power the scanner light and remain on until a successful scan or the timeout threshold is reached that is set by this method.  Timeout does not apply to Soft Mode setSoft() or Passive Mode setPassive().
 */
-(void) setScanTimeout:(long)milliseconds;

/**
 * Sets barcode scanner in 2D mode.
 *
 * Changes the scanning characteristics to read barcodes that two dimensional.
 */
-(void) setScanner2D;

/**
 * Sets barcode scanner in 1D mode. 
 *
 * Changes the scanning characteristics to read barcodes that are linear and one dimensional.
 */
-(void) setScanner1D;

/**
 * Enables continuous scanning of barcodes.   
 *
 * While in Level Mode setLevel(), after a successful scan, the scanning light will remain on ready to capture the next barcode.
 */
-(void) setMultiScan;

/**
 * Disables continuous scanning of barcodes.
 *
 * While in Edge Mode setEdge() or Level Mode setLevel(), after a successful scan, the scanning light will turn off. This is default behavior.
 */
-(void) setSingleScan;

/**
 * Barcode application version.  
 *
 * After the successful execution of this blocking method, the barcode application version can be retrieved by polling the property #barcodeVersion.
 */
-(void) getVersion;

/**
 * Sets Level Scanning Mode. 
 *
 * A reading session begins (lighting and decode processing on) when the Trigger line is activated. The reading session stops when an abortScan() is executed, barcode data is received, trigger line deactivated, or a timeout setScanTimeout:() is reached. This differs from Edge Mode setEdge() in the fact that you need to continue to depress the trigger to keep the lighting and decode processing on.
 */
-(void) setLevel;

/**
 * Sets Edge Scanning Mode. 
 *
 * A reading session begins (lighting and decode processing on) when the Trigger line is activated. The reading session stops when an abortScan() is executed, barcode data is received, or a timeout setScanTimeout:() is reached. This differs from Level Mode setLevel() in the fact that you do not need to continue to depress the trigger to keep the lighting and decode processing on. The light remains on after you release the trigger.
 */
-(void) setEdge;

/**
 * Sets Software Scanning Mode. 
 *
 * A reading session begins (lighting and decode processing on) when sendTriggerEvent:() \a TRUE is sent. The reading session stops when an abortScan() is executed, barcode data is received, sendTriggerEvent:() \a FALSE is sent or a timeout setScanTimeout:() is reached. Pressing the trigger does not activate the light.  Trigger press/release events sends data to the delegate VFIBarcodeDelegate::barcodeTriggerEvent:()   This differs from Passive Mode setPassive() in the fact that you do not get any trigger press events in Passive Mode.
 */
-(void) setSoft;

/**
 * Sets Passive Scanning Mode. 
 *
 * A reading session begins (lighting and decode processing on) when sendTriggerEvent:() \a TRUE is sent. The reading session stops when an abortScan() is executed, barcode data is received, sendTriggerEvent:() \a FALSE is sent or a timeout setScanTimeout:() is reached. Pressing the trigger does not activate the light.  Trigger press/release events does not send any data to the delegate VFIBarcodeDelegate::barcodeTriggerEvent:()   This differs from Soft Mode setSoft() in the fact that you do not get any trigger press events in Passive Mode.
 */
-(void) setPassive;

/**
 * Enabled logging to delegate.
 *
 * @param enable Setting \a TRUE enables logging to VFIBarcodeDelegate::barcodeLogEntry:withSeverity:()
 */
-(void) logEnabled:(BOOL)enable;

/**
 * Enabled logging to XCode Console.
 *
 * @param enable Setting \a TRUE enables additional logging to debug b_console window in iOS 
 */
-(void) consoleEnabled:(BOOL)enable;

/**
 * Duplicate barcode checking.
 *
 * @param enable Setting \a TRUE will filter out any duplicte barcodes that have been scanned since this value was set.
 */
-(void) ignoreDuplicates:(BOOL)enable;

/**
 * Clears duplicate barcode checking buffer.
 *
 * Calling this method will reset the duplicate barcode checking buffer.
 */
-(void) clearDuplicatesBuffer;
-(void) mDeviceOpenForce;
/**
 * Software control of scanner light.
 *
 * @param activate While is Soft Mode setSoft() or Passive Mode setPassive(), setting \a TRUE will enabable the scanner light, while \a false will deactivate it.
 */
-(void) sendTriggerEvent:(BOOL)activate;


/**
 * Enabled barcode type reporting.
 *
 * @param enable Setting \a TRUE enables barcode types to be sent with barcode scan data to VFIBarcodeDelegate::barcodeScanData:thetype:()
 */
-(void) barcodeTypeEnabled:(BOOL)enable;

/**
 * Reset Scanner. 
 *
 * Resets scanner engine to factory defaults.
 */
-(void) resetScannerToFactoryDefaults;

/**
 * Enable automatic trigger events in Soft Mode.
 *
 * @param enable Setting \a TRUE enables automatic sending of sendTriggerEvent:() when VFIBarcodeDelegate::barcodeTriggerEvent:() receives a trigger event.
 */
-(void) setScanButtonMode:(BOOL)enable;

/**
 * Returns scan button mode. 
 *
 * @retval BOOL Current scan button mode that the framework is operating in.  
 */
-(BOOL) getScanButtonMode;

/**
 * Clears barcode type filtering look up table. 
 *
 * When barcode data is received, if there are any entries in the filter look up table from executing excludeBarcodeType:(), the table is scanned for a match to the current barcode data, and if match is found, that barcode is NOT passed to the integrator.  This method clears out the filter look up table so no filtering will take place while the filtering look up table has 0 entries in it.
 */
-(void) includeAllBarcodeTypes;

/**
 * Removes a barcode type from the filtering look up table.
 *
 * @param type The barcode to EXCLUDE from the filtering look up table.  Value is from #barcodeTypes
 *
 * This method will insure that the desired barcode will not be filtered by any previous table insertions of the desired barcode type into the filtering look up table.
 */
-(void) includeBarcodeType:(int)type;

/**
 * Adds a barcode type from the filtering look up table.
 *
 * @param type The barcode to INCLUDE from the filtering look up table.  Value is from #barcodeTypes
 *
 * This method will filter out the desired barcode type.
 */
-(void) excludeBarcodeType:(int)type;

/**
 * Activates barcode type recognition in scanner.
 *
 * @param type The barcode to ACTIVATE RECOGNITION in the scanner.  Value is from #barcodeTypes
 *
 * This method sends appropriate ISCP command to the scanner to turn on the recognition of specific barcode types.
 */
-(void) activateBarcodeType:(int)type;

/**
 * Deactivates barcode type recognition in scanner.
 *
 * @param type The barcode to DEACTIVATE RECOGNITION in the scanner.  Value is from #barcodeTypes
 *
 * This method sends appropriate ISCP command to the scanner to turn off the recognition of specific barcode types.
 */
-(void) deactivateBarcodeType:(int)type;

/**
 * Allows direct stream access to Barcode Application.
 *
 * @param data The data to send to the barcode application
 *
 * This method will pass the provided NSData object directly to the barcode input stream.
 */
-(void) executeCmd:(NSData*)data;

/**
 * Controls beep execution after succssful scan
 *
 * @param enable A value of \a TRUE will allow a beep to be played after a successful barcode capture, while \a FALSE will supress the beep.
 *
 * Barcode beep is ON by default.
 */
-(void) beepOnParsedScan:(BOOL)enable;


/**
 * Ignore/Respond to trigger press events
 *
 * @param enable A value of \a TRUE will respond to trigger press events during Soft Mode. A value of \a FALSE will ignore trigger press events
 *
 * This convenience funtion allows the integrator to stay in Soft Mode and be able to ignore trigger presses without having to shut down power to scanner with an abortScan().
 */
-(void) enableSoftTrigger:(BOOL)enable;

/**
 * Terminates stream connection to Barcode
 *
 * This method will shut down the connection to the Barcode stream. An initDevice() will need to be executed again to engage a new stream connection.
 */
-(void) closeDevice;

/**
 * Controls the restart loop delay
 *
 * @param sec The amount of time in fractional sections to wait between attempts in establishing contact to e210/e255/e315 while waiting for initialization
 *
 * Default is 1.0 seconds.
 */
-(void) restartLoopDelay:(float)sec;

/**
 * Controls the amount of looping attempts to contact barcode application.
 *
 * @param loop The number of loops in establishing contact to e210/e255/e315 while waiting for initialization 
 *
 * If the e210/e255/e315 is unresponsive, the framework will loop the specified number of times, with a delay of restartLoopDelay:() between each attempt. The default is 59 loops.
 */
-(void) setInitLoop:(int) loop;

/**
 * Sets Barcode Trigger Mode.
 *
 * @param mode Barcode trigger mode, selected from #scanningModes
 * 
 * This one method can have the same outcome as calling any one of the methods setSoft, setPassive, setLevel, setEdge.
 */
-(void) setTrigger:(int)mode;

/**
 * Renables default blocking on all API methods
 *
 * By default blocking is on. Most API calls will wait for a response from Barcode app before returning control to integrator.  This behavior can be turned off by calling disableBlocking()
 */
-(void) enableBlocking;

/**
 * Disables default blocking on all API methods
 *
 * By default blocking is on. Most API calls will wait for a response from Barcode app before returning control to integrator.  This behavior can be turned off by calling this method.  Default blocking can be turned back on by calling enableBlocking()
 */
-(void) disableBlocking;

/**
 * Reports current framework version
 *
 */
-(NSString* )frameworkVersion;

/**
 * Reports current barcode Firmware version
 *
 */
-(NSString* )scannerFirmwareVersion;

/**
 * INTERNAL USE ONLY: Allows access for VFIBTBridge calls.
 *
 * Do not call this method directly.  This is exposed for VFIBTBridge to pass data to when communicating with e255
 *
 *
*/
-(void)processReceivedData:(NSData*)data;
/**
 * INTERNAL USE ONLY: Allows access for VFIBTBridge calls.
 *
 * Do not call this method directly.  This is exposed for VFIBTBridge to pass data to when communicating with e255
 *
 *
 */
+ (VFIBarcode *)sharedController;


/**
 * INTERNAL USE ONLY: Allows access for VFIBTBridge calls.
 *
 * Do not call this method directly.  This is exposed for VFIBTBridge to pass data to when communicating with e255
 *
 *
 */
-(void) ignoreDisconnect;

/**
 * INTERNAL USE ONLY: Allows access for VFIBTBridge calls.
 *
 * Do not call this method directly.  This is exposed for VFIBTBridge to pass data to when communicating with e255
 *
 *
 */
-(void) disableProtocol:(BOOL)disable;
/**
 * INTERNAL USE ONLY: Allows access for VFIBTBridge calls.
 *
 * Do not call this method directly.  This is exposed for VFIBTBridge to pass data to when communicating with e255
 *
 *
 */
- (void) sendData:(NSData*)data;
/**
 * Sends a e315 Barcode Command and Parameter.
 *
 * @param command Command from Barcode_hosts.h
 * @param addData additional data needed for parameter requirements

 *
 * Please reference the Barcode_hosts.h file for command/parameter definitions.
 */
-(void) sendCommand:(int)command data:(NSData*)addData;
/**
 * Sends a e315 Barcode Command and Parameter.
 *
 * @param command Command from Barcode_hosts.h
 * @param parameter Parameter from Barcode_hosts.h
 * @param addData additional data needed for parameter requirements

 *
 * Please reference the Barcode_hosts.h file for command/parameter definitions.
 */
-(void) sendCommand:(int)command parameter:(int)parameter data:(NSData*)addData;

/**
 * Sends a e315 Barcode Command and Parameter.
 *
 * @param command Command from Barcode_hosts.h
 * @param parameter Parameter from Barcode_hosts.h
 *
 * Please reference the Barcode_hosts.h file for command/parameter definitions.
 */
-(void) sendCommand:(int)command parameter:(int)parameter;

/**
 * Sends a e315 Barcode Command.
 *
 * @param command Command from Barcode_hosts.h
 *
 * Please reference the Barcode_hosts.h file for command definitions.
 */
-(void) sendCommand:(int)command;


/**
 * e315 Device Open.
 *
 * Powers e315 and opens the communication port for communication.
 *
 * NOTE:This command must be sent before sending any other command.
 */
-(void) mDeviceOpen;
/**
 * e315 Device Close.
 *
 * Powers down the e315 and closes the communication port.
 *
 * NOTE:This command should be executed upon program termination to avoid exessive powerage usage.
 */
-(void) mDeviceClose;
/**
 * e315 Start Scan.
 *
 * Acativates the e315 scan engine. Triggers are monitored (except Passive mode)and events are executed depending on trigger mode.
 *
 * Please see mTriggerMode:() for operational characteristics.
 *
 * NOTE:This command should be executed upon program termination to avoid exessive powerage usage.
 */
-(void) mStartScan;
/**
 * e315 Stop Scan.
 *
 * Decativates the e315 scan engine. Triggers are no longer monitored.
  *
 * NOTE:The scanner is still in an "on" state and listening for commands. Use mDeviceClose() to shut down power.
 */
-(void) mStopScan;

/**
 * Sets the e315 Scanning Mode.
 *
 * @param mode Integer value representing mode
 
- 0 = The EDGE parameter enables Edge Trigger mode, where the scan session starts when the barcode button(s) is pressed and released, and stays on until the timeout period expires or the barcode button(s) is pressed again and released.
- 1 = The LEVEL parameter enables Level Trigger mode, where the scan session starts when the barcode button(s) is pressed, and stays on until the button is released. The scan session turns off automatically when the specified timeout period is reached.
- 2 = The SOFT parameter enables Soft Trigger mode, where the host device issues a command to start the scan session, and the barcode button(s) have no control during the scan session.
- 3 = The PASSIVE parameter enables Passive Trigger mode that behaves the same as Soft Trigger mode, except that a BUTTON_STATUS command is not initiated. Button status is obtained by the host using the mButtonStatus() command.
 
 By default, Continuous mode is enabled. If Continuous mode is disabled, a  single scan mode is enabled, where this mode scan session is turned off after one successful barcode scan or when the timeout period expires.
 *
 * NOTE: The terminal reverts to the default Level mode at every terminal power cycle and restart.
 */
-(void) mTriggerMode:(int)mode;
/**
 * Executes a e315 device beep.
 *
 * This method will execute a beep from the e315 scanner. Duration values of 0 signify no beep
 *
 * @param beep #M_BEEP_DEF packet containing values for up to 6 beeps to be executed
 *
 * Example Usage:
 * @code
 M_BEEP_DEF b;
 
 b.freq_1 = 0x40;
 b.duration_1 = 0x30;
 b.pause_1 = 0x50;

 b.freq_2 = 0x35;
 b.duration_2 = 0x30;
 b.pause_2 = 0x50;

 
 [barcode mBeepImmediate:b];
 * @endcode
 */
-(void) mBeepImmediate:(M_BEEP_DEF)beep;
/**
 * Retrieves the e315 scanner application version.
 *
 * @retval mAppVersion Returns a 6 character NSString version ID for the e315 reader.
 *
 */
-(NSString*) mAppVersion;
/**
 * Retrieves the e315 scanner firmware version.
 *
 * @retval mFirmwareVersion Returns the firmware version number/string(s) of the e315 scanner.
 *
 */
-(NSString*) mFirmwareVersion;

/**
 * Enables or disables the e315 auto beep.
 *
 * @param mode Integer value representing mode
 
 - 0 = auto beep disabled
 - 1 = auto beep enabled, scan beeps only
 - 2 = auto beep enabled, error beeps only
 - 3 = auto beep enabled, scan and error beeps
 
 By default, Continuous mode is enabled. If Continuous mode is disabled, a  single scan mode is enabled, where this mode scan session is turned off after one successful barcode scan or when the timeout period expires.
 *
 * NOTE: Default auto beep configuration settings are enforced at terminal power cycle and restart.
 */
-(void) mAutoBeepConfig:(int)mode;

/**
 * Enables or disables the e315 auto beep and configures the tone.
 *
 * @param mode Integer value representing mode
 * @param scan #T_BEEP_DEF structure representing the default scan beep tone
 * @param error #T_BEEP_DEF structure representing the default error beep tone
 
 - 0 = auto beep disabled
 - 1 = auto beep enabled, scan beeps only, configure scan beep tone
 - 2 = auto beep enabled, error beeps only,configure error beep tone
 - 3 = auto beep enabled, scan and error beeps, configure scan and error beep tones
 
 By default, Continuous mode is enabled. If Continuous mode is disabled, a  single scan mode is enabled, where this mode scan session is turned off after one successful barcode scan or when the timeout period expires.
 *
 * NOTE: Default auto beep configuration settings are enforced at terminal power cycle and restart.
 */
-(void) mAutoBeepConfig:(int)mode scanBeep:(T_BEEP_DEF)scan errorBeep:(T_BEEP_DEF)error;

/**
 * Reports the current state of the barcode trigger buttons on e315.
 *
 * Sends trigger status to the delegate VFIBarcodeDelegate::barcodeTriggerEvent:()
 
 - 0: No Trigger Pressed
 - 1: Left Trigger Pressed
 - 2: Right Trigger Pressed
 - 3: Both Triggers Pressed
 */
-(int) mButtonStatus;
/**
 * Rstores default settings on e315.
 *
 * Sets all parameters to default values
 */
-(void) mRestoreDefaults;

/**
 * Enables or disables Picklist Mode the e315.
 *
 * Picklist mode is where the barcode reader decodes only bar codes that are aligned under the center of the aiming pattern.
 *
 * @param isActive True = ON, False = OFF
 */
-(void) mPicklistMode:(BOOL)isActive;
/**
 * Sets the scan timeout the e315.
 *
 * The timeout value range is 1 second to 255 seconds. In Continuous mode, the maximum allowed timeout is 255 seconds.  In Single Scan Mode, the maximum allowed timeout value is 10 seconds.
 *
 * @param seconds Timeout value, in seconds
 */
-(void) mScanTimeout:(int)seconds;

/**
 * Sets the multiple read timeout the e315.
 *
 * In Continuous mode, use this method to prevent multiple reads of a symbol left in the decoder’s field of view. The timeout begins when a symbol is removed from the field of view. The default value is 0.6 seconds.
 *
 * @param seconds Timeout value, in seconds
 */
-(void) mDifferentSymbolDecodesTimeout:(float)seconds;
/**
 * Enables or disables Continuous Mode the e315.
 *
 * Continuous mode is where the barcode laser scans continuously. Normally, the laser shuts off and the scanning session ends after one successful scan/decode. Continuous mode is enabled with any of the Trigger modes. By default, Continuous mode is enabled.
 *
 * @param isActive True = ON, False = OFF
 */
-(void) mContinuousMode:(BOOL)isActive;
/**
 * Enables or disables Unique Barcode Mode the e315.
 *
 * While in continuous mode, use this method to only report unique bar codes during the scanning session.
 *
 * @param isActive True = ON, False = OFF
 */
-(void) mUniqueCodeReport:(BOOL)isActive;
/**
 * Enables or disables Electronic Display Read Mode the e315.
 *
 * This method improves barcode reading performance with target bar codes displayed on mobile phones and electronic displays.
 *
 * @param isActive True = ON, False = OFF
 */
-(void) mElectronicDisplayRead:(BOOL)isActive;
/**
 * Retrieves the e315 auto beep mode.
 *
 * @retval mGetAutoBeepMode Integer value representing mode
 
 - 0 = auto beep disabled
 - 1 = auto beep enabled, scan beeps only
 - 2 = auto beep enabled, error beeps only
 - 3 = auto beep enabled, scan and error beeps
 
 By default, Continuous mode is enabled. If Continuous mode is disabled, a  single scan mode is enabled, where this mode scan session is turned off after one successful barcode scan or when the timeout period expires.
 *
 * NOTE: Default auto beep configuration settings are enforced at terminal power cycle and restart.
 */
-(int) mGetAutoBeepMode;
/**
 * Retrieves the scan tone value of the current e315 auto beep mode.
 *
 * @retval mGetAutoBeepScan #T_BEEP_DEF value representing default scan tone
 *
 * NOTE: You must be in Mode 1 or Mode 3 to be able to retrieve the scan value. See mGetAutoBeepMode()
 */
-(T_BEEP_DEF) mGetAutoBeepScan;
/**
 * Retrieves the error tone value of the current e315 auto beep mode.
 *
 * @retval mGetAutoBeepError #T_BEEP_DEF value representing default error tone
 *
 * NOTE: You must be in Mode 2 or Mode 3 to be able to retrieve the error value.  See mGetAutoBeepMode()
 */
-(T_BEEP_DEF) mGetAutoBeepError;
/**
 * Sets the e315 scan data prefix.
 *
 * Use this API when scan data transmission format prefix + data is selected to set the prefix value.
 *
 * @@param isActive True = ON, False = OFF
 * @param b Value 0x00 - 0xFF representing the prefix value
 *
 * NOTE: Use mScanDataTransmitFormat:() to enable/disable format
 */
-(void) mScanDataPrefix:(BOOL)isActive value:(char)b;
/**
 * Sets the e315 scan data suffix1.
 *
 * Use this API when scan data transmission format data + suffix1 is selected to set the suffix1 value.
 *
 * @@param isActive True = ON, False = OFF
 * @param b Value 0x00 - 0xFF representing the suffix1 value
 *
 * NOTE: Use mScanDataTransmitFormat:() to enable/disable format
 */
-(void) mScanDataSuffix1:(BOOL)isActive value:(char)b;
/**
 * Sets the e315 scan data suffix2.
 *
 * Use this API when scan data transmission format data + suffix1 is selected to set the suffix2 value.
 *
 * @@param isActive True = ON, False = OFF
 * @param b Value 0x00 - 0xFF representing the suffix2 value
 *
 * NOTE: Use mScanDataTransmitFormat:() to enable/disable format
 */
-(void) mScanDataSuffix2:(BOOL)isActive value:(char)b;
/**
 * Enables the e315 Scan Data Transmit Format.
 *
 * Changes the scan data format to have a custom prefix and/or suffix1 and/or suffix2 value. The default is scan data as is.
 *
 * @param isActive True = ON, False = OFF
 */
-(void) mScanDataTransmitFormat:(BOOL)isActive;
/**
 * Enables the e315 Aiming Pattern.
 *
 * Enables or disables AIM pattern. When enabled, the cross-hair pattern for the laser is used during bar code capture.
 *
 * @param isActive True = ON, False = OFF
 */
-(void) mAimPattern:(BOOL)isActive;
/**
 * Manage the e315 Symbology.
 *
 * Configures any supported symbology, including enabling or disabling a symbology and setting symbology parameters (for example, to set length, format, and supplements of a symbology). Refer to barcode_host.h file
 *
 * @param parameter Parameter from barcode_host.h file
 * @param value Single int value specified from barcode_host.h file
 *
 *  Example:
 *  To transmit a UPCA check digit, the parameter would be SYM_PID_XMIT_UPCA_CHECK_DIGIT and the value would be 1
 */
-(void) mSymbology:(int)parameter value:(int)value;
/**
 * Manage the e315 Symbology.
 *
 * Configures any supported symbology, including enabling or disabling a symbology and setting symbology parameters (for example, to set length, format, and supplements of a symbology). Refer to barcode_host.h file
 *
 * @param parameter Parameter from barcode_host.h file
 * @param value NSData value specified from barcode_host.h file
 *
 *  Example:
 *  To set the length range of C93 of 4 - 9 characters, the parameter would be SYM_PID_SETLEN_RANGE_C93 and the NSData value would be 0x0409
 */
-(void) mSymbology:(int)parameter data:(NSData*)value;
/**
 * Disable e315 Symbologies.
 *
 * Disables all the e315 Symbologies
 */
-(void) mDisableAllSymbologies;

/**
 * Load Key Information
 *
 * @see loadKeyInformation_RSA:publicKeyID:()
 */
-(int) E08_RSA:(NSString*)publicKeyRSA publicKeyID:(NSString*)keyID;

/**
 * Load Key Information
 *
 The E08 command can be used to load the initial PKI Public Key, or update the existing key. encryption.
 
 Upon unsuccessful response, error code can be retrieved in #keyLoadErrorCode
 
 XPI reference: E08
 
 @param publicKeyRSA RSA Public Key in Base 64 format
 @param keyID Key Identifer
 *
 * @retval Result Code:
 * - 00: Successful.
 * - 01: Failure.  Refer to #keyLoadErrorCode
 */
-(int) loadKeyInformation_RSA:(NSString*)publicKeyRSA publicKeyID:(NSString*)keyID;

/**
 * Load Key Information
 *
 * @see loadKeyInformation_x509:()
 */
-(int) E08_x509:(NSString*)publicKeyX509;

/**
 * Get PKI Ciphered Data
 *
 The E08 command can be used to load the initial PKI Public Key, or update the existing key. 
 
 Upon unsuccessful response, error code can be retrieved in #keyLoadErrorCode
 
 XPI reference: E08
 
 @param publicKeyX509 X.509 Public Key Cert in Base 64
 *
 * @retval Result Code:
 * - 00: Successful.
 * - 01: Failure.  Refer to #keyLoadErrorCode
 */
-(int) loadKeyInformation_x509:(NSString*)publicKeyX509;

/**
 * Load PKI Signature Files
 *
 * @see loadPKISig:p75Data:()
 */
-(int) E12:(int)type p75Data:(NSData*)data;

/**
 * Load PKI Signature Files
 *
 This command will be used to inject the P7S binary data associated to the “PKI Public Key File” and “Key ID File”. This command must be executed prior to the execution of E08 command.
 
 XPI reference: E12
 
 @param type Sign File Data associated to:
 * - 01: P7S Data is for PKI Public Key File.
 * - 02: P7S Data is for Key ID File
 @param data Hex data of the P7S file associated with the Public Key or Key ID Files
 
 * @retval Result Code:
 * - 00: Successful.
 * - 01: Failure.
 */
-(int) loadPKISig:(int)type p75Data:(NSData*)data;

/**
 * Enable PKI Encryption
 *
 * @see enablePKI:()
 */
-(int) E10:(BOOL)enable;

/**
 * Enable PKI Encryption
 *
 This command will be used to enable PKI scan encryption
 
 XPI reference: E10
 
 @param enable TRUE = enable scan encryption:
 
 * @retval Result Code:
 * - 00: PKI Mode Set.
 * - 01: No Encryption.
 */
-(int) enablePKI:(bool)enable;



@property (retain) id <VFIBarcodeDelegate>delegate;                 //!< Gets or Sets delegate for protocols
@property (nonatomic, readonly) NSString *barcodeName;              //!< Read Only name reported to External Accessory
@property (nonatomic, readonly) NSString *barcodeManufacturer;      //!< Read Only Manufacturer reported to External Accessory
@property (nonatomic, readonly) NSString *barcodeModelNumber;       //!< Read Only Model Number reported to External Accessory
@property (nonatomic, readonly) NSString *barcodeSerialNumber;      //!< Read Only Serial Number reported to External Accessory
@property (nonatomic, readonly) NSString *barcodeFirmwareRevision;  //!< Read Only Firmware Version reported to External Accessory
@property (nonatomic, readonly) NSString *barcodeHardwareRevision;  //!< Read Only Hardware Version reported to External Accessory
@property (nonatomic, readonly) NSString *barcodeVersion;           //!< Read Only Barcode App version set  by getVersion()
@property (nonatomic, readonly) NSString *firmware;                 //!< Read Only Scanner firmware set  by scannerFirmwareVersion()
@property (readonly) BOOL barcodeConnected;                         //!< Read Only Boolean barcode connection status
@property (readonly) BOOL connected;                                //!< Read Only Boolean barcode connection status
@property (nonatomic, readonly) EAAccessory *eaACC;                 //!< Read Only Connected Accessory
@property (readonly) BOOL BTconnected;                              //!< Read Only Boolean barcode e210/e255/e315 Bluetooth connection Status
@property (readonly) BOOL initialized;                              //!< Read Only Boolean barcode initialized
@property (readonly) BOOL isGen3;                                   //!< Read Only Boolean Gen3 Connected

/**
 * Error code returned from unsuccessful Key Loading.
 *
 * Return Values:
 * - 00000000: Successful PKI update.
 * - 00001000: Parameter Error. NULL or out of Range.
 * - 00001001: Invalid Public Key File.
 * - 00001002: Encryption Failed.
 * - 00001003: Too small output buffer.
 * - 00001004: Invalid Key ID File.
 * - 00001005: Error in opening DataFile.
 * - 00001006: Error in Hash Key computation.
 * - 00001100: Unknown or unexpected error.
 *
 */
@property (nonatomic, readonly) NSString *keyLoadErrorCode;





@end

