//
//  HomeManager.m
//  LearnDayByDay
//
//  Created by lixia.zhang on 2017/3/20.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "HomeManager.h"
#import "AppDelegate.h"
#import "SecondViewController.h"
#import "Bridge.h"
#import "HomeViewController.h"

@implementation HomeManager

RCT_EXPORT_MODULE();


RCT_EXPORT_METHOD(jumpToSecondPage)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    NSLog(@"---haha");
    [((HomeViewController *)[Bridge shardBridge].homeHostVC) pushToDetailVC];

    
//    SecondViewController *secondVC = [[SecondViewController alloc] init];
//    AppDelegate *app = (AppDelegate *)[[UIApplication sharedApplication] delegate];
//    [app.navigationController pushViewController:secondVC animated:YES];
    
  });
}

@end
