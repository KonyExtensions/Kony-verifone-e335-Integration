//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "Marcjacobspoc",
    appName: "Marcjacobs",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.0.0.8",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "Marcjacobspoc",
    url: "https://mydevcloud.konycloud.com/Marcjacobspoc/MWServlet",
    secureurl: "https://mydevcloud.konycloud.com/Marcjacobspoc/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    kony.application.setCheckBoxSelectionImageAlignment(constants.CHECKBOX_SELECTION_IMAGE_ALIGNMENT_RIGHT);
    kony.application.setDefaultTextboxPadding(false);
    kony.application.setRespectImageSizeForImageWidgetAlignment(true);
    initializeCustomerLookup();
    initializeItemLookup();
    initializeSelectTransaction();
    frmCustomerLookupGlobals();
    frmEditCustomerGlobals();
    frmHomeGlobals();
    frmItemLookupGlobals();
    frmLoginGlobals();
    frmSaleTransactionGlobals();
    frmStoreAdminGlobals();
    frmTenderGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 6000
    })
};

function themeCallBack() {
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmLogin.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;