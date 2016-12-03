//
//  ViewController.m
//  解析
//
//  Created by Tesla on 2016/12/2.
//  Copyright © 2016年 Practice. All rights reserved.
//

#import "ViewController.h"
#import <AFHTTPSessionManager.h>
#import "TFHpple.h"
#import <HTMLParser.h>
#import <HTMLNode.h>


@interface ViewController ()
{
    AFHTTPSessionManager *manager;
    NSMutableArray *numArr;
    NSMutableArray *titleMArr;
    
    NSMutableData  *responsedate;
    NSTimer *timer;
    UILabel *lb;
    UILabel *title;
    
    NSMutableArray *resultArr;

}

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    numArr=[[NSMutableArray alloc]init];
    titleMArr=[[NSMutableArray alloc]init];
    resultArr =[[NSMutableArray alloc]init];
    
    lb=[[UILabel alloc]initWithFrame:CGRectMake(20, 80, 200, 60)];
    title=[[UILabel alloc]initWithFrame:CGRectMake(20, 200, 200, 60)];
    title.backgroundColor=[UIColor greenColor];
    [self.view addSubview:title];
    lb.backgroundColor=[UIColor greenColor];
    lb.layer.cornerRadius=20;
    [self.view addSubview:lb];
    
    [self loadRequest];

    

    
    
    NSTimer *timer = [NSTimer timerWithTimeInterval:3*60 target:self selector:@selector(loadRequest) userInfo:nil repeats:YES];
    [[NSRunLoop mainRunLoop] addTimer:timer forMode:NSDefaultRunLoopMode];
    
    
    
}

-(void)refrshWithxmlprase{
    
    /*
     <ul class="kjggul_2" id="ulkj_2" onmouseover="ShowKjgg(2)">
     
     <li class="kjgglog_1"><img src="images/default/index40.jpg" style="display: block;" width="36px" height="33px"></li>
     
     <li class="gray01 kjggiss">161203023期：</li>
     <li class="kjggred">6</li>
     <li class="kjggred">3</li>
     <li class="kjggred">3</li>
     <li class="kjggred">7</li>
     <li class="kjggred">3</li>
    </ul>
     
     */
    TFHpple *pareser=[[TFHpple alloc]initWithHTMLData:responsedate];
    
    
    NSArray *array1 = [pareser
                       searchWithXPathQuery:@"//ul[@id='ulkj_2']//li[@class='kjggred']"];

    for (TFHppleElement *tempelems in array1) {
        NSLog(@"%@",[tempelems content]);
        
        
    }
    

    
}

-(void)refresh{

    NSData  * data   = [NSData dataWithContentsOfFile:@"/Users/TeslaMac/Desktop/解析/解析/my.html"];
    
    
    
    TFHpple * doc       = [[TFHpple alloc] initWithHTMLData:responsedate];
    NSArray *elems=[doc searchWithXPathQuery:@"//li[@class='kjggred']"];
    
    NSArray *titleArr=[doc searchWithXPathQuery:@"//li[@class='gray01 kjggiss']"];
    
    
    
    
    for (TFHppleElement *elems in titleArr) {
        
        [titleMArr addObject:[elems text]];
        
    }

    
    
    
    [title setText: [titleMArr[2] stringByReplacingPercentEscapesUsingEncoding:NSUTF8StringEncoding]];
    
    
    for (NSInteger i=0; i<elems.count;i++) {
        if (i>17&&i<23) {
            TFHppleElement  *hpelemt=elems[i];
            [hpelemt text];
            [numArr addObject:[hpelemt text]];
            
            [resultArr addObject:[hpelemt text]];
            
        }
        
    }
    NSString *string = [numArr componentsJoinedByString:@"     "];
    [lb setText:string];
    [resultArr addObject:titleMArr[2]];
    
    [numArr removeAllObjects];
    [titleMArr removeAllObjects];
    
    NSLog(@"每隔时间段 收集到的结果-- %@",resultArr);
    [resultArr writeToFile:@"/Users/TeslaMac/Desktop/解析/解析/my.plist" atomically:YES];
    
}

-(void)loadRequest{
    NSLog(@"--------------------");
    
    manager =[AFHTTPSessionManager manager];
    NSString *url=@"http://www.cqcp.net/";
    
    manager.responseSerializer.acceptableContentTypes=[NSSet setWithObjects:@"text/html",@"application/json", nil];
    
    manager.responseSerializer = [AFHTTPResponseSerializer serializer];
    manager.requestSerializer = [AFHTTPRequestSerializer serializer];
    
    [manager GET:url parameters:nil progress:nil success:^(NSURLSessionDataTask * _Nonnull task, id  _Nullable responseObject) {
        
        
        
        NSString *aString = [[NSString alloc] initWithData:responseObject encoding:CFStringConvertEncodingToNSStringEncoding(kCFStringEncodingGB_18030_2000)];
        
    　　NSData *aData = [aString dataUsingEncoding: NSUTF8StringEncoding];
        
    responsedate=[[NSMutableData alloc]initWithData:aData];
        
        dispatch_async(dispatch_get_main_queue(), ^{
            [self refresh];

            
           // [self refrshWithxmlprase];
            
        });
    } failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull error) {
        NSLog(@"%@",error.localizedDescription);
    }];


}





- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


@end
