//Form JS File
function frmHome_saleTransaction_onTouchEnd_seq0(eventobject, x, y) {
    frmSaleTransaction.show();
};

function addWidgetsfrmHome() {
    var CopyLabel01c193a5d44594d = new kony.ui.Label({
        "id": "CopyLabel01c193a5d44594d",
        "top": "0dp",
        "left": "0dp",
        "width": "100%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "text": "MARC JACOBS",
        "skin": "CopyslLabel076dc88a104a14b"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var FlexContainer0df2e02be073844 = new kony.ui.FlexContainer({
        "id": "FlexContainer0df2e02be073844",
        "top": "0dp",
        "left": "0dp",
        "width": "100%",
        "height": "100dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,0]",
        "skin": "CopyslFbox0072f46de8af241",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexContainer0df2e02be073844.setDefaultUnit(kony.flex.DP)
    FlexContainer0df2e02be073844.add(
    CopyLabel01c193a5d44594d);
    var Image0c949d2c82bbb4d = new kony.ui.Image2({
        "id": "Image0c949d2c82bbb4d",
        "top": "0dp",
        "left": "0dp",
        "width": "150dp",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "src": "transaction.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null,
        "skin": "slImage"
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var Label0b47886b8314643 = new kony.ui.Label({
        "id": "Label0b47886b8314643",
        "top": "0dp",
        "left": "120dp",
        "width": "200dp",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "text": "SALE TRANSACTION",
        "skin": "CopyslLabel015b3e12ce0884b"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var saleTransaction = new kony.ui.FlexContainer({
        "id": "saleTransaction",
        "width": "372dp",
        "height": "90dp",
        "centerX": "50%",
        "centerY": "35%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[39,112]",
        "skin": "CopyslFbox0aa36dcdfa59c46",
        "onTouchEnd": frmHome_saleTransaction_onTouchEnd_seq0,
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    saleTransaction.setDefaultUnit(kony.flex.DP)
    saleTransaction.add(
    Image0c949d2c82bbb4d, Label0b47886b8314643);
    var CopyImage0e275ee0b609141 = new kony.ui.Image2({
        "id": "CopyImage0e275ee0b609141",
        "top": "0dp",
        "left": "0dp",
        "width": "150dp",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "src": "inventory.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null,
        "skin": "slImage"
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var CopyLabel002eebdd2c62b43 = new kony.ui.Label({
        "id": "CopyLabel002eebdd2c62b43",
        "top": "0dp",
        "left": "120dp",
        "width": "200dp",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "text": "INVENTORY LOOKUP",
        "skin": "CopyslLabel015b3e12ce0884b"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var inventory = new kony.ui.FlexContainer({
        "id": "inventory",
        "width": "372dp",
        "height": "90dp",
        "centerX": "50%",
        "centerY": "50%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[39,180]",
        "skin": "CopyslFbox0aa36dcdfa59c46",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    inventory.setDefaultUnit(kony.flex.DP)
    inventory.add(
    CopyImage0e275ee0b609141, CopyLabel002eebdd2c62b43);
    var CopyImage0afe1808cd7324a = new kony.ui.Image2({
        "id": "CopyImage0afe1808cd7324a",
        "top": "0dp",
        "left": "0dp",
        "width": "150dp",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "src": "logout.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null,
        "skin": "slImage"
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var CopyLabel0add433de254c49 = new kony.ui.Label({
        "id": "CopyLabel0add433de254c49",
        "top": "0dp",
        "left": "120dp",
        "width": "200dp",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "text": "LOGOUT",
        "skin": "CopyslLabel015b3e12ce0884b"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var flexLogout = new kony.ui.FlexContainer({
        "id": "flexLogout",
        "width": "372dp",
        "height": "90dp",
        "centerX": "50%",
        "centerY": "80%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[39,315]",
        "skin": "CopyslFbox0aa36dcdfa59c46",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flexLogout.setDefaultUnit(kony.flex.DP)
    flexLogout.add(
    CopyImage0afe1808cd7324a, CopyLabel0add433de254c49);
    var CopyImage095509b8d27d849 = new kony.ui.Image2({
        "id": "CopyImage095509b8d27d849",
        "top": "0dp",
        "left": "0dp",
        "width": "150dp",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "src": "administrator.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null,
        "skin": "slImage"
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var CopyLabel0db39c8706a424c = new kony.ui.Label({
        "id": "CopyLabel0db39c8706a424c",
        "top": "0dp",
        "left": "120dp",
        "width": "200dp",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "text": "ADMIN",
        "skin": "CopyslLabel015b3e12ce0884b"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var flexAdmin = new kony.ui.FlexContainer({
        "id": "flexAdmin",
        "width": "372dp",
        "height": "90dp",
        "centerX": "50%",
        "centerY": "65%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[39,247]",
        "skin": "CopyslFbox0aa36dcdfa59c46",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flexAdmin.setDefaultUnit(kony.flex.DP)
    flexAdmin.add(
    CopyImage095509b8d27d849, CopyLabel0db39c8706a424c);
    frmHome.add(
    FlexContainer0df2e02be073844, saleTransaction, inventory, flexLogout, flexAdmin);
};

function frmHomeGlobals() {
    var MenuId = [];
    frmHome = new kony.ui.Form2({
        "id": "frmHome",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": false,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "CopyslForm0cd19731665f74c",
        "bouncesZoom": true,
        "zoomScale": 1.0,
        "minZoomScale": 1.0,
        "maxZoomScale": 1.0,
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmHome
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_LANDSCAPE,
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false,
        "needsIndicatorDuringPostShow": true,
        "formTransparencyDuringPostShow": "100",
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
        "configureExtendTop": false,
        "configureExtendBottom": false,
        "configureStatusBarStyle": false,
        "titleBar": false,
        "titleBarSkin": "slTitleBar",
        "titleBarConfig": {},
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        }
    });
    frmHome.setDefaultUnit(kony.flex.DP);
};