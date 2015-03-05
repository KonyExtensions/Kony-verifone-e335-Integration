function preappinit() {
    e335.enableLog(true);
    registerCallbackBarcodeConnected();
    registerCallbackPinPadConnected();
    barcode.initializeBarcodeScanner();
    card.initializeCardSwipe();
    var callbacksObj = {
        onactive: null,
        oninactive: null,
        onbackground: appbackground,
        onforeground: appforeground,
        onappterminate: appbackground,
        retainSpaceOnHide: true
    };
    kony.application.setApplicationCallbacks(callbacksObj);
}

function appbackground() {
    barcode.disableScanner();
    card.disableCardReader();
}

function appforeground() {
    var currentForm = kony.application.getCurrentForm();
    if ("frmSaleTransaction" == currentForm) barcode.scan(callbackBarcodeScanData);
    if ("frmTender" == currentForm) card.scan(callbackPinpadMSRData);
}

function registerCallbackBarcodeConnected() {
    barcode.registerCallbackBarcodeConnected(callbackBarcodeConnected);
}

function registerCallbackPinPadConnected() {
    card.registerCallbackPinpadConnected(callbackPinpadConnected);
}

function callbackBarcodeConnected(result) {
    kony.print(JSON.stringify(result));
}

function callbackPinpadConnected(result) {
    kony.print(JSON.stringify(result));
}

function callbackPinpadMSRData(result) {
    kony.print(JSON.stringify(result));
}

function callbackBarcodeScanData(result) {
    kony.print(JSON.stringify(result));
}