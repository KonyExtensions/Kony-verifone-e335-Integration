function onClickSigCapture() {
 			kony.print("Came into OnClickSig");
 			kony.print("device info:"+kony.os.deviceInfo().name);
			var strokeWidth = "2.0";
			var strokeColor = "#0F00F0";
			var showClearButon = true;
			var shakeToCancelEnabled = true;
			SignatureCapture.getSignature("Customer Signature",strokeWidth,strokeColor,showClearButon,shakeToCancelEnabled,SignatureCallback);

 
 };
 
 function SignatureCallback(base64String) {
		//kony.print("base64@@@@@"+base64String);
		frmTender.imgSignPad.base64 = base64String;
	//	frmCustomerInputVA.btnClearSignVA.setVisibility(true);
		frmTender.show();
 
 };
 
 
 
 function iOSbarcodescan()
 {
 var ReadBarcodeObject = new com.kony.barcode.iosnativecamera.ReadBarcode();
//Invokes method 'readNativeBarcodeData' on the object
ReadBarcodeObject.readNativeBarcodeData(
		/**Function*/ callBackiOSbarcodescan);
 }
 
 
 function callBackiOSbarcodescan(upc)
 {
 
 kony.print("upc is:"+JSON.stringify(upc));
 }
 
 