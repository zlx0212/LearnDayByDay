//
//  Bridge.m
//  LearnDayByDay
//
//  Created by lixia.zhang on 2017/3/20.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "Bridge.h"
#import <React/RCTBridgeDelegate.h>

@interface Bridge () <RCTBridgeDelegate>



@end

@implementation Bridge

+ (instancetype)shardBridge
{
  static Bridge *_shareBridge = nil;
  static dispatch_once_t onceToken;
  dispatch_once(&onceToken, ^{
    _shareBridge = [[self alloc] init];
  });
  return _shareBridge;
}

- (void)dealloc
{
  [[NSNotificationCenter defaultCenter] removeObserver:self];
}

- (instancetype)init
{
  self = [super init];
  if (self) {
    [self setupBirdge];
  }
  
  return self;
}

- (void)setupBirdge
{
  if (!_bridge) {
    _bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:nil];
  }
}

#pragma mark - RCTBridgeDelegate

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  NSURL *jsCodeLocation;
  NSString *urlString = @"http://172.16.6.121:8081/index.ios.bundle?platform=ios&dev=true";
  jsCodeLocation = [NSURL URLWithString:urlString];
  return jsCodeLocation;
}

@end
