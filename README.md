# Kony-verifone-e335-Integration
The sample kony project contains FFI to showcase integration with <b>verifone payware e335</b>
It also has ffi code for
   <b> AirPrint, 
    SignatureCapture,
    Barcode scanning using native camera </b>
It also show cases xml services on how to <b>submit a payment to the gateway.</b>

Information about payware devices
---------------------------------
The ffi code helps in integrating with verifone devices like payware mobile e335.
http://www.verifone.com/products/hardware/mobile/payware-mobile-e335/

This connects to the ipad mini lightning connector and thus allows communication between the ipad app and the device.
Although the device can be used to process any kind of payment—mag-stripe, NFC/contactless, EMV chip and PIN, the scope of this project limits to magnetic strip reader.
It also uses the barcode scanner on the device to scan labels.

Prerequisits
------------
Read documentation on integration with verifone - VMF_API_Manual_for_iOS-1-0-4-273.pdf.
VMF.framework needs to be imported in the xcode project.
Refer VMF_API_Manual_for_iOS-1-0-4-273.pdf to do below steps
    add VFi framework, libz1.2.5, external accessory , CFNetwork frameworks
    add -lstdc++ compiler flag in other linker flags
    In plist file add SupportedExteralProtocols mentioned below. 
	<key>UISupportedExternalAccessoryProtocols</key>
	<array>
		<string>com.verifone.pmr2.com1</string>
		<string>com.verifone.pmr2.control</string>
		<string>com.verifone.pmr2.zontalk</string>
		<string>com.verifone.pmr2.xpi</string>
		<string>com.verifone.pmr2.barcode</string>
		<string>com.verifone.pmr2.debug</string>
		<string>com.verifone.PWMRDA</string>
		<string>com.verifone.pmr.xpi</string>
		<string>com.verifone.pmr.control</string>
		<string>com.verifone.pmr.barcode</string>
		<string>com.verifone.pmr.debug</string>
		<string>com.verifone.pmr.zontalk</string>
	</array>

Notes on steps to do in the kony application
---------------------------------------------
1) when application launches call redirectConsoleLogToDocumentFolder (make sure this is not used in production or turn it off with a flag isDebug in the code as it will log information into the application sandbox which will be security concern especially when using with credit cards).register callbacks for pinpadConnected and barcodeConnected. isDebug should be false for release mode.
2)register app callbacks for onbackground, onappterminate and on foreground. - in on background and onappterminate callbacks call disableCardReader and disableScanner methods. on foreground and if the form is sale transaction/credit card transaction page then call onClickBarCodeButton and scanCard methods to enable barcode scanner and card swipe.  
3)Then call initializeCardSwipe and initializeBarCodeScanner. This should be one time activity for initialization. Do not call initialize methods multiple times as the application can crash . after initializing,since the code in step 1 registered callbacks for pinpadConnected and barcodeConnected, the pinpadConnectedcallback and barcodeConnectedcallback functions will be called and status if those are connected or not will be known. maintain global flags of the status. as you might need to show error message if device is not connected.
