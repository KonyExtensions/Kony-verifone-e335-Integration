//
//  VariableStore.m
//  pwmg2Sandbox
//
//  Created by Thomas Salzmann on 10/27/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import "VStore.h"


@implementation VStore
@synthesize pinPad; 
@synthesize barcode;
@synthesize payControl;
@synthesize myTimer; 


static BOOL upsideDown = NO; 

static BOOL bcEnabled = NO; 

+ (VStore *)vInstance
{
    // the instance of this class is stored here
    static VStore *myInstance = nil;
	
    // check to see if an instance already exists
    if (nil == myInstance) {
        myInstance  = [[[self class] alloc] init];
        // initialize variables here
    }
    // return the instance of this class
    return myInstance;
}

- (UIAlertView *) WaitPrompt:(NSString *)waitMessage
{  
	UIAlertView *alert = [[UIAlertView alloc]   
						   initWithTitle:waitMessage   
						   message:nil delegate:nil cancelButtonTitle:nil  
						   otherButtonTitles: nil];  
	
	[alert show];  
	
	UIActivityIndicatorView *indicator = [[UIActivityIndicatorView alloc]  
										  initWithActivityIndicatorStyle:UIActivityIndicatorViewStyleWhiteLarge];  
	
	indicator.center = CGPointMake(alert.bounds.size.width / 2,   
								   alert.bounds.size.height - 50);  
	[indicator startAnimating];  
	[alert addSubview:indicator];  
// 	[indicator release];  
	
/*	// 250ms pause for the dialog to become active...  
	int n=0;  
		
	while(n < 20)  
	{  
		[[NSRunLoop currentRunLoop] limitDateForMode:NSDefaultRunLoopMode];  
		[NSThread sleepForTimeInterval:0.010]; 
		n++;  
	}  
*/	
	return alert;  
}  



- (UIAlertView *) WaitPrompt2:(NSString *)waitMessage
{  
	UIAlertView *alert = [[UIAlertView alloc]   
						   initWithTitle:waitMessage   
						   message:nil delegate:nil cancelButtonTitle:nil  
						   otherButtonTitles: nil] ;  
	
	[alert show];  
	
	return alert;  
}  


- (id)copyWithZone:(NSZone *)zone
{
    return self;
}

//- (id)retain {
//    return self;
//}

//- (unsigned)retainCount {
//    return UINT_MAX;  // denotes an object that cannot be released
//}

//- (void)release {
//    //do nothing
//}

//- (id)autorelease {
//    return self;
//}


int char2Hex(unichar c) {
	switch (c) {
		case '0' ... '9': return c - '0';
		case 'a' ... 'f': return c - 'a' + 10;
		case 'A' ... 'F': return c - 'A' + 10;
		default: return -1;
	}
}


- (NSData *)hexToData:(NSString*)str {   //Example - Pass string that contains characters "30313233", and it will return a data object containing ascii characters "0123"
	unsigned stringIndex=0, resultIndex=0, max=[str length];
	NSMutableData* result = [NSMutableData dataWithLength:(max + 1)/2];
	unsigned char* bytes = [result mutableBytes];
	
	unsigned num_nibbles = 0;
	unsigned char byte_value = 0;
	
	for (stringIndex = 0; stringIndex < max; stringIndex++) {
		int val = char2Hex([str characterAtIndex:stringIndex]);
		if (val < 0) continue;
		num_nibbles++;
		byte_value = byte_value * 16 + (unsigned char)val;
		if (! (num_nibbles % 2)) {
			bytes[resultIndex++] = byte_value;
			byte_value = 0;
		}
	}
	
	
	//final nibble
	if (num_nibbles % 2) {
		bytes[resultIndex++] = byte_value;
		byte_value = 0;
	}
	
	[result setLength:resultIndex];
	return result;
}


- (NSString*) dataToString:(NSData*)data{   //Example - Pass data that contains characters "0123", and it will return a string "0123"
	return  [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding] ;	
	
}

-(NSData*) stringToData:(NSString *)str{
	
	return [str dataUsingEncoding:NSUTF8StringEncoding];
	
}


-(NSString*) nsdataToNSString:(NSData*)data{
	return [[[[data description] stringByReplacingOccurrencesOfString:@" " withString:@""] stringByReplacingOccurrencesOfString:@"<" withString:@""] stringByReplacingOccurrencesOfString:@">" withString:@""] ;
    
    
    // NSString* newStr = [NSString stringWithUTF8String:[theData bytes]];
    // http://stackoverflow.com/questions/2467844/convert-utf-8-encoded-nsdata-to-nsstring
}

- (NSString*) hexToString:(NSString*)str{  //Example - Pass string that contains characters "30313233", and it will return a string "0123"
	return   [self dataToString:[self hexToData:str]];
}

- (BOOL) isUpsideDown {
	
	return upsideDown; 
}

- (void) setUpsideDown:(BOOL) orientation{
	
	upsideDown = orientation; 
}

- (void) bcScanOn {
   [barcode startScan]; 
   bcEnabled = TRUE; 
    
}

- (void) bcScanOff {
    
    [barcode abortScan]; 
    bcEnabled = FALSE;
    
}

- (void) targetMethod :(NSTimer *) mytimer  {
    @synchronized(self) {

        NSLog(@"ScanOnAfterSleep-%d/%d",  
                           (barcode.connected)?1:0, 
              (barcode.initialized)?1:0)                        ;
        
         if ((barcode.initialized)) {
            [barcode startScan];
         }
    }
}


- (void) bcScanOnAfterSleeping {
   

        myTimer = [NSTimer scheduledTimerWithTimeInterval:0.250
                                                   target:self
                                                 selector:@selector(targetMethod:)
                                                 userInfo:nil
                                                  repeats:NO];
        
        
        
        
//    }
}

- (void) bcScanOffWhileSleeping {
    
    if (bcEnabled == TRUE) {     
        [barcode abortScan]; 
    }
    
}



@end
