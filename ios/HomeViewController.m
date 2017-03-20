//
//  HomeViewController.m
//  LearnDayByDay
//
//  Created by lixia.zhang on 2017/3/20.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "HomeViewController.h"
#import "HomeView.h"
#import "SecondViewController.h"

@interface HomeViewController ()

@property (strong, nonatomic) HomeView *rnHomeView;


@end

@implementation HomeViewController

- (void)viewDidLoad {
    [super viewDidLoad];
  [self.navigationController setNavigationBarHidden:false];
  [self setTitle:@"React Native实践"];
  
  self.rnHomeView = [[HomeView alloc] initWithFrame:self.view.bounds initialProperties:nil hostViewController:self];
  [self.view addSubview:self.rnHomeView];
  
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (void)pushToDetailVC {
  SecondViewController *secondVC = [[SecondViewController alloc] init];
  [self.navigationController pushViewController:secondVC animated:YES];
}

@end
