//
//  HomeView.m
//  LearnDayByDay
//
//  Created by lixia.zhang on 2017/3/20.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "HomeView.h"
#import <React/RCTRootViewDelegate.h>
#import <React/RCTRootView.h>
#import <React/UIView+React.h>
#import <React/RCTBundleURLProvider.h>

#import "Bridge.h"
#import "HomeManager.h"

static NSString * const REACT_MODULE_NAME = @"Home";


@interface HomeView ()

@property (strong, nonatomic) RCTRootView *rootView;


@end

@implementation HomeView

- (instancetype)initWithFrame:(CGRect)frame initialProperties:(NSDictionary *)props
{
  return [self initWithFrame:frame initialProperties:props hostViewController:nil];
}

- (instancetype)initWithFrame:(CGRect)frame initialProperties:(NSDictionary *)props hostViewController:(UIViewController *)viewController
{
  self = [super initWithFrame:frame];
  if (self) {
    
    RCTBridge *bridge = [[Bridge shardBridge] bridge];
    [Bridge shardBridge].homeHostVC = viewController;
    
    _rootView = [[RCTRootView alloc] initWithBridge:bridge moduleName:REACT_MODULE_NAME initialProperties:props];
    [_rootView setFrame:CGRectMake(0, 64, [UIScreen mainScreen].bounds.size.width, [UIScreen mainScreen].bounds.size.height - 64)];
    [self addSubview:_rootView];

  }
  return self;
}

@end
