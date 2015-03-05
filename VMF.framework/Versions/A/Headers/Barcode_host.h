/*****************************************************************************/
/* This source code is confidential proprietary information of VeriFone Inc. */
/* and is an unpublished work or authorship protected by the copyright laws  */
/* of the United States. Unauthorized copying or use of this document or the */
/* program contained herein, in original or modified form, is a violation of */
/* Federal and State law.                                                    */
/*                                                                           */
/*                           Verifone                                        */
/*                   1400 West Stanford Ranch Road                           */
/*                      Rocklin, CA 95765                                    */
/*                        Copyright 2013                                     */
/*****************************************************************************/

/*
 ;|===========================================================================+
 ;| FILE NAME:  | Barcode_host.h
 ;|-------------+-------------------------------------------------------------+
 ;| DEVICE:     | Any Barcode Host device
 ;|-------------+-------------------------------------------------------------+
 ;| DESCRIPTION:|Host interface defines for symbologies and host command packet
 ;|             |definitions.
 ;|-------------+-------------------------------------------------------------+
 ;| TYPE:       |
 ;|-------------+-------------------------------------------------------------+
 ;| COMMENTS:   |
 ;|===========================================================================+
 */

#define HOST_BUF_SIZE  2048

// Beeper command defintions
typedef struct {
    int freq;
    int dur;
}T_BEEP;

typedef struct {
    T_BEEP b1;
    int bPause;
    T_BEEP b2;
}T_BEEP_DEF;

typedef struct {
    int freq_1;
    int duration_1;
    int pause_1;
    int freq_2;
    int duration_2;
    int pause_2;
    int freq_3;
    int duration_3;
    int pause_3;
    int freq_4;
    int duration_4;
    int pause_4;
    int freq_5;
    int duration_5;
    int pause_5;
    int freq_6;
    int duration_6;
    int pause_6;
}M_BEEP_DEF;

// This Structure is the parameter buffer definition
typedef struct {
	unsigned char  length;						//parameter length
	unsigned char  pId;							//parameter ID number (any value from defines starting with SYM_PID or GEN)
    //	union {
    //	  char bytes[HOST_BUF_SIZE-14];				//variable number of parameter values depends on the length
    //	  T_BEEP_DEF beep;
    //	} pValue;
}PARM_DEF;

// This Structure is the command buffer definition
typedef struct {
    unsigned short int length;                  // command packet length
    unsigned char protoVer;                  	// protocol version
	unsigned char command;                 		// command number (any value from defines starting with CMD)
    //    char params[HOST_BUF_SIZE-12];  			// variable number of parameters depends on the length
}CMD_DEF;

// Barcode Application Command format (host device to e210, e255 and e315 Barcode Application)
// Commands from Host Interface to Barcode App use this command structure
typedef struct {
    unsigned long length;                        // total length of the host packet (max value 2048 bytes)
    unsigned long sequence;                      // host command sequence number (serial number assigned by host)
    //    char cmnds[HOST_BUF_SIZE-8];                 // variable number of commands depends on the length
}HOST_TX_BUF;


// Barcode Application Response format (Barcode Application to Host Device)
typedef struct {
    unsigned long length;						//total length of the response packet
    unsigned long sequence;						//response packet sequence number
	unsigned long status;						//last received packet process status, 0 - success in processing whole packet, 1 - failure
    //    char data[HOST_BUF_SIZE-12];				//optional data
}HOST_RX_BUF;

///
// Host command definitions
// These are commands between host device and Verix application
///

#define CMD_BAR_DEV_OPEN 0x1A
#define CMD_BAR_DEV_CLOSE 0x1B
#define CMD_START_SCAN 0x01
#define CMD_STOP_SCAN 0x02
#define CMD_PASS_THRU 0x03
#define CMD_SINGLE_GET_APP_VER 0x04
#define CMD_SET_TRIG_MODE 0x05
#define CMD_BEEP_IMMEDIATE 0x06
#define CMD_SINGLE_BUTTON_STATUS 0x07
#define CMD_SINGLE_GET_FIRM_VER 0x08
#define CMD_SINGLE_GET_DEVICE_ID 0x09
#define CMD_MULTI_SCAN 0x0A
#define CMD_RESTORE_DEFAULTS 0x0B
#define CMD_EN_PICKLIST_MODE 0x0C
#define CMD_SCAN_TIMEOUT 0x0D
#define CMD_TIMEOUT_BW_SAME_SYM 0x0E
#define CMD_TIMEOUT_BW_DIFF_SYM 0x0F
#define CMD_EN_CONTINUOUS_RD 0x10
#define CMD_EN_UNIQUE_CODE_REPO 0x11
#define CMD_EN_MOBILE_PH_MODE 0x12
#define CMD_PREFIX_VAL 0x13
#define CMD_SUFFIX1_VAL 0x14
#define CMD_SUFFIX2_VAL 0x15
#define CMD_EN_XMIT_FMT 0x16
#define CMD_EN_AIM_PATTERN 0x17
#define CMD_SYMBOLOGY 0x18
#define CMD_DISABLE_ALL_SYMB 0x19
#define CMD_AUTO_BEEP_CONFIG 0x1C
#define CMD_GET_AUTO_BEEP_CONFIG 0x1D

///
// parameter identifier table definitions
///
//code 128
#define SYM_PID_EN_CODE128 0x00 //value 1 for *enable, 0 disable
#define SYM_PID_SETLEN_1DISCRETE_C128 0x01 //one byte input value
#define SYM_PID_SETLEN_2DISCRETE_C128 0x02 //two bytes input value
#define SYM_PID_SETLEN_RANGE_C128 0x03 //Range is set by two byte input value
#define SYM_PID_SETLEN_ANY_C128 0x04 //*No input value expected for this parameter
#define SYM_PID_EN_GS1128 0x05 //value 1 for *enable, 0 disable
#define SYM_PID_EN_ISBT 0x06 //value 1 for *enable, 0 disable
#define SYM_PID_ISBT_CONCATE 0x07 //value 1 for enable, 0 *disable, 2 auto
#define SYM_PID_CHECK_ISBT_TABLE 0x08 //value 1 for *enable, 0 disable
#define SYM_PID_ISBT_CONCATE_REDUN 0x09 //value range is 2 to 20, *0x0A
//code UPC
#define SYM_PID_EN_UPCA 0x0A //value 1 for *enable, 0 disable
#define SYM_PID_EN_UPCE 0x0B //value 1 for *enable, 0 disable
#define SYM_PID_EN_UPCE1 0x0C //value 1 for enable, 0 *disable
#define SYM_PID_EN_EAN8_JAN8 0x0D //value 1 for *enable, 0 disable
#define SYM_PID_EN_EAN13_JAN13 0x0E //value 1 for *enable, 0 disable
#define SYM_PID_EN_BOOKLAND_EAN 0x0F //value 1 for *enable, 0 disable
#define SYM_PID_EN_ISBN_FORMAT 0x10 //value 1 for enabling ISBN-13 & 0 *ISBN-10
#define SYM_PID_SUPPLIMENTS_UPC_EAN 0x11 //possible values of this parameter are given below
#define IGNORE_UPC_EAN_W_SUPPLIMENTS *0x00
#define DECODE_UPC_EAN_W_SUPPLIMENTS 0x01
#define AUTODESCRIMINATE_SUPPLIMENTS 0x02
#define ENABLE_378_379_SUPPLIMENTS 0x04
#define ENABLE_978_979_SUPPLIMENTS 0x05
#define ENABLE_977_SUPPLIMENT 0x07
#define ENABLE_414_419_434_439 0x06
#define ENABLE_491_SUPPLIMENTS 0x08
#define ENABLE_SMART_SUPPLIMENT 0x03
#define SUPPLIMENT_USER_PROG1 0x09
#define SUPPLIMENT_USER_PROG1_2 0x0A
#define SMART_SUPPLIMENT_USER_PROG1 0x0B
#define SMART_SUPPLIMENT_USER_PROG1_2 0x0C
#define SYM_PID_USER_PROG_SUPP1 0x12 //3 digit value input
#define SYM_PID_USER_PROG_SUPP2 0x13 //3 digit value input
#define SYM_PID_UPC_EAN_JAN_SUPP_REDUN 0x14 //range is 2 to 30, *0x0A
#define SYM_PID_XMIT_UPCA_CHECK_DIGIT 0x15 //value 1 for *enable,0 disable
#define SYM_PID_XMIT_UPCE_CHECK_DIGIT 0x16 //value 1 for *enable,0 disable
#define SYM_PID_XMIT_UPCE1_CHECK_DIGIT 0x17 //value 1 for *enable,0 disable
#define SYM_PID_XMIT_UPCA_PREAMBLE 0x18 //value 0 for No Preamble,1 *system char & 2 country code & system char
#define SYM_PID_XMIT_UPCE_PREAMBLE 0x19 //value 0 for No Preamble,1 *system char & 2 country code & system char
#define SYM_PID_XMIT_UPCE1_PREAMBLE 0x1A //value 0 for No Preamble,1 *system char & 2 country code & system char
#define SYM_PID_CONVERT_UPCE_2_UPCA 0x1B //value 1 for enable,0 *disable
#define SYM_PID_CONVERT_UPCE1_2_UPCA 0x1C //value 1 for enable,0 *disable
#define SYM_PID_EAN8_JAN8_EXTEND 0x1D //value 1 for enable,0 *disable
#define SYM_PID_UCC_COUPON_EXTEND 0x1E //value 1 for enable,0 *disable
#define SYM_PID_COUPON_REPORT 0x1F //value 0 for old coupon symbols,1 *new coupon symbol,2 both coupons
#define SYM_PID_ISSN_EAN 0x20 //value 1 for enable,0 disable
//code 39
#define SYM_PID_EN_CODE39 0x21 //value 1 for *enable,0 disable
#define SYM_PID_EN_TRIOPTIC_CODE39 0x22 //value 1 for enable,0 *disable
#define SYM_PID_CONV_CODE39_2_CODE32 0x23 //value 1 for enable,0 *disable
#define SYM_PID_CODE32_PREFIX 0x24 //value 1 for enable,0 *disable
#define SYM_PID_SETLEN_1DISCRETE_C39 0x25 //one byte input value
#define SYM_PID_SETLEN_2DISCRETE_C39 0x26 //two bytes input value
#define SYM_PID_SETLEN_RANGE_C39 0x27 //*Range is set by two byte input value,*0x02-0x37
#define SYM_PID_SETLEN_ANY_C39 0x28 //No input value expected for this parameter
#define SYM_PID_CODE39_CHK_DIGIT 0x29 //value 1 for enable,0 *disable
#define SYM_PID_XMIT_CODE39_CHK_DIGIT 0x2A //value 1 for enable,0 *disable
#define SYM_PID_CODE39_FULL_ASCII 0x2B //value 1 for enable,0 *disable
#define SYM_PID_CODE39_BUFFERING 0x2C //value 1 for enable,0 *disable
//Interleaved 2 of 5
#define SYM_PID_EN_INTER2OF5 0x2D //value 1 for enable,0 *disable
#define SYM_PID_SETLEN_1DISCRETE_I2OF5 0x2E //*one byte input value, *0x0E
#define SYM_PID_SETLEN_2DISCRETE_I2OF5 0x2F //two bytes input value
#define SYM_PID_SETLEN_RANGE_I2OF5 0x30 //Range is set by two byte input value
#define SYM_PID_SETLEN_ANY_I2OF5 0x31 //No input value expected for this parameter
#define SYM_PID_I2OF5_CHECK_DIGIT 0x32 //value 1 for enable,0 *disable
#define SYM_PID_XMIT_I2OF5_CHECK_DIGIT 0x33 //value 1 for enable,0 *disable EXAMPLE HEADER FILE 44 e255 BARCODE APPLICATION PROGRAMMERS GUIDE
#define SYM_PID_CONV_I2OF5_EAN13 0x34 //value 1 for enable,0 *disable
//2D,QR code
#define SYM_PID_EN_QR_CODE 0x35 //value 1 for *enable,0 disable
//2D,QR Inverse
#define SYM_PID_EN_QR_INVERSE 0x36 //value 0 *regular,1 Inverse,2 Auto
//2D, MicroQR
#define SYM_PID_EN_MICRO_QR 0x37 //value 1 for *enable,0 disable
//2D,Data Matrix
#define SYM_PID_EN_DATA_MATRIX 0x38 //value 1 for *enable,0 disable
#define SYM_PID_EN_DATA_MATRIX_INVERSE 0x39 //value 0 *regular,1 Inverse,2 Auto
#define SYM_PID_EN_MIRROR_IMAGES 0x3A //value 0 regular,1 Inverse, 2 *Auto
//Code 93
#define SYM_PID_EN_CODE93 0x3B //value 1 for enable, 0 *disable
#define SYM_PID_SETLEN_1DISCRETE_C93 0x3C //one byte input value
#define SYM_PID_SETLEN_2DISCRETE_C93 0x3D //two bytes input value
#define SYM_PID_SETLEN_RANGE_C93 0x3E //*Range is set by two byte input value, *0x04-0x37
#define SYM_PID_SETLEN_ANY_C93 0x3F //No input value expected for this parameter
//Code 11
#define SYM_PID_EN_CODE11 0x40 //value 1 for enable,0 *disable
#define SYM_PID_SETLEN_1DISCRETE_C11 0x41 //one byte input value
#define SYM_PID_SETLEN_2DISCRETE_C11 0x42 //two bytes input value
#define SYM_PID_SETLEN_RANGE_C11 0x43 //Range is set by two byte input value,*0x04-0x37
#define SYM_PID_SETLEN_ANY_C11 0x44 //No input value expected for this parameter
#define SYM_PID_CODE11_CHK_DIGIT 0x45 //value 0 for *disable,1 one check digit & 2 two check digits
#define SYM_PID_XMIT_CODE11_CHK_DIGIT 0x46 //value 1 for enable,0 *disable
//Discrete 2 of 5
#define SYM_PID_EN_DISC2OF5 0x47 //value 1 for enable,0 *disable
#define SYM_PID_SETLEN_1DISCRETE_D2OF5 0x48 //*one byte input value, 0x0C
#define SYM_PID_SETLEN_2DISCRETE_D2OF5 0x49 //two bytes input value
#define SYM_PID_SETLEN_RANGE_D2OF5 0x4A //Range is set by two byte input value
#define SYM_PID_SETLEN_ANY_D2OF5 0x4B //No input value expected for this parameter
//Codabar
#define SYM_PID_EN_CODABAR 0x4C //value 1 for enable,0 disable
#define SYM_PID_SETLEN_1DISCRETE_CBAR 0x4D //one byte input value
#define SYM_PID_SETLEN_2DISCRETE_CBAR 0x4E //two bytes input value
#define SYM_PID_SETLEN_RANGE_CBAR 0x4F //*Range is set by two byte input value,*0x05-0x37
#define SYM_PID_SETLEN_ANY_CBAR 0x50 //No input value expected for this parameter
#define SYM_PID_EN_CLSI 0x51 //value 1 for enable,0 *disable
#define SYM_PID_EN_NOTIS 0x52 //value 1 for enable,0 *disable
#define SYM_PID_START_STOP_CASE 0x53 //value 1 for lower case,0 *upper case
//MSI
#define SYM_PID_EN_MSI 0x54 //value 1 for enable,0 *disable
#define SYM_PID_SETLEN_1DISCRETE_MSI 0x55 //one byte input value
#define SYM_PID_SETLEN_2DISCRETE_MSI 0x56 //two bytes input value
#define SYM_PID_SETLEN_RANGE_MSI 0x57 //*Range is set by two byte input value,*0x04-0x37
#define SYM_PID_SETLEN_ANY_MSI 0x58 //No input value expected for this parameter
#define SYM_PID_MSI_CHK_DIGIT 0x59 //value 0 for *one check digit,1 two check digits
#define SYM_PID_XMIT_MSI_CHK_DIGIT 0x5A //value 1 for enable,0 *disable
#define SYM_PID_MSI_CHK_DIGIT_ALGOR 0x5B //value 0 for MOD 10/11 algorithm,1 *MOD10/MOD10 algorithm
//CHINESE 2 of 5
#define SYM_PID_EN_CHINESE2OF5 0x5C //value 1 for enable,0 *disable
//MATRIX 2 of 5
#define SYM_PID_EN_MATRIX2OF5 0x5D //value 1 for enable,0 *disable
#define SYM_PID_SETLEN_1DISCRETE_M2OF5 0x5E //*one byte input value,*0x0E
#define SYM_PID_SETLEN_2DISCRETE_M2OF5 0x5F //two bytes input value
#define SYM_PID_SETLEN_RANGE_M2OF5 0x60 //Range is set by two byte input value
#define SYM_PID_SETLEN_ANY_M2OF5 0x61 //No input value expected for this parameter
#define SYM_PID_M2OF5_CHK_DIGIT 0x62 //value 1 for enable,0 *disable
#define SYM_PID_XMIT_M2OF5_CHK_DIGIT 0x63 //value 1 for enable,0 *disable
//KOREAN 3 of 5
#define SYM_PID_EN_KOREAN3OF5 0x64 //value 1 for enable,0 *disable
//INVERSE 1D
#define SYM_PID_EN_INVERSE1D 0x65 //value 0 for *regular,1 inverse & 2 inverse auto detect
//POSTAL CODES
#define SYM_PID_EN_US_POSTNET 0x66 //value 1 for enable,0 *disable
#define SYM_PID_EN_US_PLANET 0x67 //value 1 for enable,0 *disable
#define SYM_PID_XMIT_US_POST_CHK_DIGIT 0x68 //value 1 for *enable,0 disable
#define SYM_PID_EN_UK_POSTAL 0x69 //value 1 for enable,0 *disable
#define SYM_PID_XMIT_UK_POST_CHK_DIGIT 0x6A //value 1 for *enable,0 disable
#define SYM_PID_EN_JAPAN_POSTAL 0x6B //value 1 for enable,0 *disable
#define SYM_PID_EN_AUSTRALIA_POST 0x6C //value 1 for enable,0 *disable
#define SYM_PID_EN_AUST_POST_FMT 0x6D //value 0 for *auto,1 raw format,2 alphanum enc,3 num enc
#define SYM_PID_EN_NETHERLANDS_KIX 0x6E //value 1 for enable,0 *disable
#define SYM_PID_EN_USPS_4CB 0x6F //value 1 for enable,0 *disable
#define SYM_PID_EN_UPU_FICS 0x70 //value 1 for enable,0 *disable
//GS1 DataBar
#define SYM_PID_EN_GS1_DATABAR 0x71 //value 1 for *enable,0 disable
#define SYM_PID_EN_GS1_LIMITED 0x72 //value 1 for enable,0 *disable
#define SYM_PID_LTD_SECURITY 0x73 //value 1 for security level 1,2 level2,3 *level3,4 level4 EXAMPLE HEADER FILE 46 e255 BARCODE APPLICATION PROGRAMMERS GUIDE
#define SYM_PID_EN_GS1_EXPANDED 0x74 //value 1 for *enable,0 disable
#define SYM_PID_EN_CONV_UPC_EAN 0x75 //value 1 for enable,0 *disable
//COMPOSITE
#define SYM_PID_EN_COMP_CC_C 0x76 //value 1 for enable,0 *disable
#define SYM_PID_EN_COMP_CC_A_B 0x77 //value 1 for enable,0 *disable
#define SYM_PID_EN_COMP_TLC_39 0x78 //value 1 for enable,0 *disable
#define SYM_PID_UPC_COMP_MODE 0x79 //value 0 for UPC never linked, 1 *always linked,2 auto
#define SYM_PID_EN_GS1_128_EMULATION 0x7A //value 1 for enable,0 *disable
//2D, PDF417
#define SYM_PID_EN_PDF417 0x7B //value 1 for *enable,0 disable
//2D, MICRO PDF417
#define SYM_PID_EN_MICRO_PDF417 0x7C //value 1 for enable,0 *disable
//2D, Maxicode
#define SYM_PID_EN_MAXICODE 0x7D //value 1 for enable,0 *disable
//2D, Aztec
#define SYM_PID_EN_AZTEC 0x7E //value 1 for *enable,0 disable
//2D, Aztec Inverse
#define SYM_PID_EN_AZTEC_INVERSE 0x7F //value 0 for regular,1 inverse, 2 *inverse auto detect
//general parameter IDs
// asterick (*) in the comments indicate default value
#define GEN_PID_PASS_THRU 0xFF //reserved value
#define GEN_PID_SET_TRIG_MODE 0xFE //8 bit value,0 edge,1 *level,2 soft, 3 passive
#define GEN_PID_BEEP_IMMEDIATE 0xFD //value starts with no of beeps followed no. of T_BEEP_PAUSE
#define GEN_PID_RESTORE_DEFAULTS 0xFC //value is not required and reserved for future
#define GEN_PID_PICKLIST_MODE 0xFB //value 0 *disabled,1 enabled
#define GEN_PID_SCAN_TIMEOUT 0xFA //value range 1 to 255 secs,*60 sec in continuous,*10 sec in single scan
#define GEN_PID_TIMEOUT_BW_SAME_SYM 0xF9 //value range 0 to 9.9 sec (99 decimal), *0.6 sec(0x06)
#define GEN_PID_TIMEOUT_BW_DIFF_SYM 0xF8 //value range 1 to 9.9 sec (99 decimal), *0.2 sec(0x02)
#define GEN_PID_CONTINUOUS_READ 0xF7 //value 0 disabled,1 *enabled
#define GEN_PID_UNIQUE_CODE_REPORT 0xF6 //value 0 *disabled,1 enabled
#define GEN_PID_MOBILE_PHONE_MODE 0xF5 //value 0 *disabled,1 enabled
#define GEN_PID_PREFIX_KEY 0xF4 //value is 1 when host sends prefix value
#define GEN_PID_PREFIX_VAL 0xF3 //value any 3 digit number 0-255,*<CR>(0x0D)
#define GEN_PID_SUFFIX1_KEY 0xF2 //value is 1 when host sends prefix value
#define GEN_PID_SUFFIX1_VAL 0xF1 //value any 3 digit number 0-255,*<CR>(0x0D)
#define GEN_PID_SUFFIX2_KEY 0xF0 //value is 1 when host sends prefix value EXAMPLE HEADER FILE e255 BARCODE APPLICATION PROGRAMMERS GUIDE 47
#define GEN_PID_SUFFIX2_VAL 0xEF //value any 3 digit number 0-255,*<CR>(0x0D)
#define GEN_PID_SCAN_DATA_XMIT_FMT 0xEE //value 0 *data as is, 1 sufix1, 2 sufix2,3 sufix1&2,4 prefix, 5 Prefix&sufix1,6 prefix&sufix2, 7 prefix&suffixes
#define GEN_PID_AIM_PATTERN_EN 0xED //value 0 disabled,1 *enabled
#define GEN_PID_AUTO_BEEP_MODE 0xEC //value 0 *disabled,1 config scan beep only,2 config error beep only, 3 config both
#define GEN_PID_AUTO_BEEP_SCAN 0xEB //scan beep value in format T_BEEP_DEF
#define GEN_PID_AUTO_BEEP_ERROR 0xEA //error beep value in format T_BEEP_DEF


///
// Host response definitions
// This is a response from Verix application to host device
///
#define CMD_BARCODE_DATA		0x01



///
// Verix device response to Host
///
#define RESP_ACK 0x00000000
#define RESP_NAK 0x00000001
#define RESP_BARCODE_DATA 0x80000000
#define RESP_BUTTON_STATUS 0x80000001

///
// Barcode data header
///
typedef struct {
    char codeID;
    char AIMID;
    unsigned short int symbology;
}symb_INFO;

///
// Code ID is one of the industry standard and parameter changes will refer to a specific code ID.
// each code ID has an associated code ASCII character that needs to be displayed in the retail environment.
// Refer to symb_code array for asscociation between code ID and code ASCII char.
// Every succesfull decoded data will have a unique symbology as one of the return values
///
#define CODE_ID_UPC_EA 0x01
#define CODE_ID_CODE39_32 0x02
#define CODE_ID_CODABAR 0x03
#define CODE_ID_CODE128_ISBT 0x04
#define CODE_ID_CODE93 0x05
#define CODE_ID_INTL2OF5 0x06
#define CODE_ID_DISC2OF5 0x07
#define CODE_ID_CODE11 0x08
#define CODE_ID_MSI 0x09
#define CODE_ID_GSI128 0x0A
#define CODE_ID_BOOKLAND_EAN 0x0B
#define CODE_ID_TRIOPTIC39 0x0C
#define CODE_ID_COUPONCODE 0x0D
#define CODE_ID_GS1DATABAR 0x0E
#define CODE_ID_MATRIX2OF5 0x0F
#define CODE_ID_UCCCOMPOS 0x10
#define CODE_ID_CHINESE2OF5 0x11
#define CODE_ID_KOREAN3OF5 0x12
#define CODE_ID_PDF417_ISSNEAN 0x13
#define CODE_ID_AZTEC_RUNE 0x14
#define CODE_ID_DATA_MATRIX 0x15
#define CODE_ID_QRCODE_MICRO 0x16
#define CODE_ID_MAXICODE 0x17
#define CODE_ID_US_POSTNET 0x18
#define CODE_ID_US_PLANET 0x19
#define CODE_ID_JAPAN_POSTAL 0x1A
#define CODE_ID_UK_POSTAL 0x1B
#define CODE_ID_POSTBAR_CA 0x1C
#define CODE_ID_NETH_KIX 0x1D
#define CODE_ID_AUS_POST 0x1E
#define CODE_ID_USPS_4CB 0x1F
#define CODE_ID_UPU_FICS 0x20
#define CODE_ID_SCANLET_WEB 0x21
#define CODE_ID_CUECAT 0x22




///
// AIM ID is altrenate industry standard and only used for display purpose.
// each AIM ID has an associated AIM ASCII character that needs to be displayed in the retail environment.
// Refer to symb_AIM array for asscociation between AIM ID and AIM ASCII char.
// Every succesfull decoded data will have a unique symbology as one of the return values
///
#define AIM_ID_CODE39_32 0x01
#define AIM_ID_CODE128_ISBT_GS1 0x02
#define AIM_ID_DATAMATRIX 0x03
#define AIM_ID_UPC_EAN_COUPON 0x04
#define AIM_ID_GS1DATABAR 0x05
#define AIM_ID_CODEBAR 0x06
#define AIM_ID_CODE93 0x07
#define AIM_ID_CODE11 0x08
#define AIM_ID_INTL2OF5 0x09
#define AIM_ID_PDF417 0x0A
#define AIM_ID_TLC39 0x0B
#define AIM_ID_MSI 0x0C
#define AIM_ID_QRCODE_MICROQR 0x0D
#define AIM_ID_DISC2OF5 0x0E
#define AIM_ID_MAXICODE 0x0F
#define AIM_ID_AZTEC_RUNE 0x10
#define AIM_ID_X 0x11
#define AIM_ID_COMP_EC 0x12
#define AIM_ID_COMP_EE 0x13
#define AIM_ID_COMP_RS 0x14


///
//symbology AIM array, indexed by AIM ID defines
///

extern const char* symb_AIM[];



///
// 16-bit symbology values in barcode data response
///
#define SYM_ID_CODE39 0x0001
#define SYM_ID_CODABAR 0x0002
#define SYM_ID_CODE128 0x0003
#define SYM_ID_D25 0x0004
#define SYM_ID_IATA 0x0005
#define SYM_ID_ITF 0x0006
#define SYM_ID_CODE93 0x0007
#define SYM_ID_UPCA 0x0008
#define SYM_ID_UPCE 0x0009
#define SYM_ID_EAN8 0x000A
#define SYM_ID_EAN13 0x000B
#define SYM_ID_CODE11 0x000C
#define SYM_ID_MSI 0x000D
#define SYM_ID_EAN128 0x000E
#define SYM_ID_UPCE1 0x000F
#define SYM_ID_PDF417 0x0010
#define SYM_ID_CODE39FULL 0x0011
#define SYM_ID_TRIOPTIC 0x0012
#define SYM_ID_BOOKLAND 0x0013
#define SYM_ID_COUPONCODE 0x0014
#define SYM_ID_ISBT128 0x0015
#define SYM_ID_MICROPDF 0x0016
#define SYM_ID_DATAMATRIX 0x0017
#define SYM_ID_QRCODE 0x0018
#define SYM_ID_POSTNETUS 0x0019
#define SYM_ID_PLANETUS 0x001A
#define SYM_ID_CODE32 0x001B
#define SYM_ID_ISBT128CONC 0x001C
#define SYM_ID_POSTALJAPAN 0x001D
#define SYM_ID_POSTALAUST 0x001E
#define SYM_ID_POSTALDUTCH 0x001F
#define SYM_ID_MAXICODE 0x0020
#define SYM_ID_POSTBARCA 0x0021
#define SYM_ID_POSTALUK 0x0022
#define SYM_ID_MACROPDF417 0x0023
#define SYM_ID_RSS14 0x0024
#define SYM_ID_RSSLIMIT 0x0025
#define SYM_ID_RSSEXPAND 0x0026
#define SYM_ID_SCANLETWEB 0x0027
#define SYM_ID_CUECAT 0x0028
#define SYM_ID_UPCA_2 0x0029
#define SYM_ID_UPCE_2 0x002A
#define SYM_ID_EAN8_2 0x002B
#define SYM_ID_EAN13_2 0x002C
#define SYM_ID_UPCE1_2 0x002D
#define SYM_ID_CCA_EAN128 0x002E
#define SYM_ID_CCA_EAN13 0x002F
#define SYM_ID_CCA_EAN8 0x0030
#define SYM_ID_CCA_RSSEXPAND 0x0031
#define SYM_ID_CCA_RSSLIMIT 0x0032
#define SYM_ID_CCA_RSS14 0x0033
#define SYM_ID_CCA_UPCA 0x0034
#define SYM_ID_CCA_UPCE 0x0035
#define SYM_ID_CCC_EAN128 0x0036
#define SYM_ID_TLC39 0x0037
#define SYM_ID_CCB_EAN128 0x0038
#define SYM_ID_CCB_EAN13 0x0039
#define SYM_ID_CCB_EAN8 0x003A
#define SYM_ID_CCB_RSSEXPAND 0x003B
#define SYM_ID_CCB_RSSLIMIT 0x003C
#define SYM_ID_CCB_RSS14 0x003D
#define SYM_ID_CCB_UPCA 0x003E
#define SYM_ID_CCB_UPCE 0x003F
#define SYM_ID_KOR3OF5 0x0040
#define SYM_ID_UPCA_5 0x0041
#define SYM_ID_UPCE_5 0x0042
#define SYM_ID_EAN8_5 0x0043
#define SYM_ID_EAN13_5 0x0044
#define SYM_ID_UPCE1_5 0x0045
#define SYM_ID_MACROPDF 0x0046



// parameter standard values
///
#define DISABLE 0x00
#define ENABLE	0x01















