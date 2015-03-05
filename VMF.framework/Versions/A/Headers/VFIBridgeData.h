//
//  VFIBridgeData.h
//  VMF
//
//  Created by Randy Palermo on 1/16/12.
//  Copyright 2012 VeriFone, Inc. All rights reserved.
//

#import <Foundation/Foundation.h>


@interface VFIBridgeData : NSObject {
	NSObject *data;
	int identifier;

}

-(void)clear;
-(id)init;

@property (nonatomic, retain) NSObject *data;
@property int identifier;

@end
