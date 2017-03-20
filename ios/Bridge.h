//
//  Bridge.h
//  LearnDayByDay
//
//  Created by lixia.zhang on 2017/3/20.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridge.h>

@interface Bridge : NSObject
@property (strong, nonatomic) RCTBridge *bridge;
@property (weak, nonatomic) UIViewController *homeHostVC;

+ (instancetype)shardBridge;

@end
