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


@interface ViewController ()
{
    AFHTTPSessionManager *manager;
    NSMutableArray *numArr;
    NSMutableArray *titleMArr;
    
    NSMutableData  *responsedate;
    NSTimer *timer;
    UILabel *lb;
    UILabel *title;

}

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    numArr=[[NSMutableArray alloc]init];
    titleMArr=[[NSMutableArray alloc]init];
    
    lb=[[UILabel alloc]initWithFrame:CGRectMake(20, 80, 200, 60)];
    title=[[UILabel alloc]initWithFrame:CGRectMake(20, 200, 200, 60)];
    title.backgroundColor=[UIColor greenColor];
    [self.view addSubview:title];
    lb.backgroundColor=[UIColor greenColor];
    lb.layer.cornerRadius=20;
    [self.view addSubview:lb];
    
    [self loadRequest];

    

    
    
    NSTimer *timer = [NSTimer timerWithTimeInterval:5*60 target:self selector:@selector(loadRequest) userInfo:nil repeats:YES];
    [[NSRunLoop mainRunLoop] addTimer:timer forMode:NSDefaultRunLoopMode];
    
    
    
}

-(void)refresh{

    NSData  * data   = [NSData dataWithContentsOfFile:@"/Users/TeslaMac/Desktop/解析/解析/my.html"];
    
    
    
    TFHpple * doc       = [[TFHpple alloc] initWithHTMLData:responsedate];
    NSArray *elems=[doc searchWithXPathQuery:@"//li[@class='kjggred']"];
    
    NSArray *titleArr=[doc searchWithXPathQuery:@"//li[@class='gray01 kjggiss']"];
    
    NSLog(@"%@",titleArr);
    for (TFHppleElement *elems in titleArr) {
        
        [titleMArr addObject:[elems text]];
        
    }
    
//    NSString*str=titleArr[2];
    
    
    
    [title setText:titleMArr[2]];
    
    
    for (NSInteger i=0; i<elems.count;i++) {
        if (i>17&&i<23) {
            TFHppleElement  *hpelemt=elems[i];
            [hpelemt text];
            [numArr addObject:[hpelemt text]];
            
        }
        
    }
    NSString *string = [numArr componentsJoinedByString:@"     "];
    [lb setText:string];
    NSLog(@"%@",numArr);
    
    
    TFHppleElement * element = [elems objectAtIndex:0];
    
    [numArr removeAllObjects];
    [titleMArr removeAllObjects];
    




}

-(void)loadRequest{
    NSLog(@"--------------------");
    
    manager =[AFHTTPSessionManager manager];
    NSString *url=@"http://www.cqcp.net/";
    
    manager.responseSerializer.acceptableContentTypes=[NSSet setWithObjects:@"text/html",@"application/json", nil];
    
    manager.responseSerializer = [AFHTTPResponseSerializer serializer];
    manager.requestSerializer = [AFHTTPRequestSerializer serializer];
    
    [manager GET:url parameters:nil progress:nil success:^(NSURLSessionDataTask * _Nonnull task, id  _Nullable responseObject) {
        
//        [responseObject writeToFile:@"/Users/TeslaMac/Desktop/解析/解析/my.html" options:NSDataWritingAtomic error:nil];
        
        
        responsedate=[[NSMutableData alloc]initWithData:responseObject];
        
        dispatch_async(dispatch_get_main_queue(), ^{
            [self refresh];
            
        });
    } failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull error) {
        NSLog(@"%@",error.localizedDescription);
    }];


}

- (void)parseSearchResult: (NSData *)result
{
    TFHpple *doc = [TFHpple hppleWithHTMLData:result];
    
    // 读取 <tr></tr> 标签里面的内容
    NSArray *TRElements = [doc searchWithXPathQuery:@"//tr"];
    int i = 0;
    for (TFHppleElement *tempTRElement in TRElements) {
        
        //放弃读取第一个 <tr></tr> 标签里面的内容
        if (i == 0) {
            i++;
            continue;
        }
        
        // 读取 <td></td> 标签里面的内容
        NSArray *TDElements = [tempTRElement childrenWithTagName:@"td"];
        for (TFHppleElement *tempTDElement in TDElements) {
            
            if ([tempTDElement text] != nil) {
                
                // 读取 <td>xxx</td> 标签里面包含的内容
                NSLog(@"%@", [tempTDElement text]);
            }
            
            // 读取 <a></a> 里面的内容
            NSArray *AElements = [tempTDElement searchWithXPathQuery:@"//a"];
            for (TFHppleElement *tempAElement in AElements) {
                
                // 读取 <a href="xxx"></a> 标签里面的 href 属性的值
                NSLog(@"A-href:%@", [tempAElement objectForKey:@"href"]);
                
                // 读取 <a>xxx</a> 标签里面包含的内容
                NSLog(@"A-text:%@", [tempAElement text]);
            }
        }
    }
}






- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


@end
