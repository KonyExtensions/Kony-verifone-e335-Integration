//Template File
function initializeCustomerLookup() {
    var lblFirstName = new kony.ui.Label({
        "id": "lblFirstName",
        "left": "10dp",
        "width": "150dp",
        "height": "100%",
        "centerY": "50%",
        "zIndex": 1,
        "isVisible": true,
        "text": "First Name",
        "skin": "CopyslLabel07239b55e19c44f"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblLastName = new kony.ui.Label({
        "id": "lblLastName",
        "left": "180dp",
        "width": "150dp",
        "height": "100%",
        "centerY": "50%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Last Name",
        "skin": "CopyslLabel07239b55e19c44f"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblPhone = new kony.ui.Label({
        "id": "lblPhone",
        "left": "350dp",
        "width": "150dp",
        "height": "100%",
        "centerY": "50%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Phone",
        "skin": "CopyslLabel07239b55e19c44f"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblAddress = new kony.ui.Label({
        "id": "lblAddress",
        "right": "10dp",
        "width": "192dp",
        "height": "100%",
        "centerY": "50%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Address",
        "skin": "CopyslLabel07239b55e19c44f"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    FlexContainer0bba6eb617e9241 = new kony.ui.FlexContainer({
        "id": "FlexContainer0bba6eb617e9241",
        "height": "40dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,0]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexContainer0bba6eb617e9241.setDefaultUnit(kony.flex.DP)
    FlexContainer0bba6eb617e9241.add(
    lblFirstName, lblLastName, lblPhone, lblAddress);
};