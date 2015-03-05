//
//  StatusInformation.h
//  VMF
//
//  Created by Randy Palermo on 11/17/11.
//  Copyright 2011 VeriFone, Inc. All rights reserved.
//

#import <Foundation/Foundation.h>

typedef enum{
	LineTypes_Unknown = 0,
	LineTypes_TextFile = 1,
	LineTypes_BinaryFile = 2,
	LineTypes_Parameter = 3,
	LineTypes_Blank = 4,
	LineTypes_BinaryFileEmpty = 5
	
} LineTypes;

@interface StatusInformation : NSObject {

	LineTypes LineType;
	NSString *Filename;
	NSString *Description;
	long TotalPackets;
	long PacketCount;
}

@property LineTypes LineType;
@property (nonatomic, retain) NSString *Filename;
@property (nonatomic, retain) NSString *Description;
@property long TotalPackets;
@property long PacketCount;

@end
