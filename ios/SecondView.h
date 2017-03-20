//
//  SecondView.h
//  LearnDayByDay
//
//  Created by lixia.zhang on 2017/3/20.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface SecondView : UIView

- (instancetype)initWithFrame:(CGRect)frame initialProperties:(NSDictionary *)props;
- (instancetype)initWithFrame:(CGRect)frame initialProperties:(NSDictionary *)props hostViewController:(UIViewController *)viewController;

@end
