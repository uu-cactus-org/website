---
title: "初めてC言語を学ぶ人のためのC言語講習会"
pubdate: 2025-05-20
authors: ["haru"] 
category: "講習会"
tags: ["C言語", "プログラミング"] 
---


# 初めに

皆さんこんにちは。ここは情報研究会CACTUSが春に行っているC言語講習会のページです。ソースコードを逐一書かせることの負担を減らすためにこのページを作りました。特に著作権はないので、ご自由に使っていただいて結構ですが、このプログラムに付随する説明や解説は載せません。

　AIが普及してきた昨今、ソースコードを書かずともビルドやコンパイルのやり方を知っているだけで、誰でもソフトウェアが作れる時代になりました。しかし、あくまでもAIは道具です。道具は使うものであって振り回されるものではありません。理解せずとも様々なことができる反面、AIが太刀打ちできないような問題に対して全くお手上げの状態になってしまいます。この世界に完全はありません。自分で道具を使いこなすための訓練だと思って頑張ってください。

さて、講習会をやるにあたり、一年生には守ってほしい約束があります。

- 分からないなら調べる
- 分からないなら聞く

これにつきます。こちらも全員を見て回りますが、教える人数の都合上、上級生が常に目の前で教えることはできません。また、コードを書く負担を若干減らす為にこのページが存在しますが、上達するためには**書いて理解する**以外に方法がありません。厳しいことは言いたくはないですが、なんでもコピー&ペーストしているだけでは上達しません。大事なのは自分で理解しながら考えて書くことです。少しづつでいいので、プログラムの知識を身に着けていきましょう!



以下、講義内で使用するコードです。各自コピペして使ってください。

# 第一回

1-1 基本構造
```c
#include<stdio.h>
int main(){
    return 0;
}
```


1-2 コメントアウト
```c
ここはコメントアウトの外


//これは一行に対してコメントアウトされてます
/*これもコメントアウト*/


/*
これは複数行にわたってコメントアウトできます

こことか


ここもコメントアウト


ここまでがコメントアウト*/ここはコメントアウトされない


```


1-3 簡単な文章の出力
```c
#include<stdio.h>
int main(){
    printf("Hello world!");
    return 0;
}
```


1-4 整数値の出力
```c
#include<stdio.h>
int main(){
    int a=5;

    printf("a = %d\n",a);//整数が出力されるところに%dを入れる

    a=10;

    printf("a = %d\n",a);

    return 0;
}
```

1-5 整数型の計算と小数型の計算
```c
#include<stdio.h>
int main(){
    int a;
    a=2+3;
    printf("a = %d\n",a);

    a=2-3;
    printf("a = %d\n",a);

    a=2*3;
    printf("a = %d\n",a);
    
    a=2/3;
    printf("a = %d\n",a);

    double b=2/3;
    printf("b = %f\n",b);//小数が出力されるところに%fを入れる
    return 0;
}
```

1-6 値の入力と出力
```c
#include<stdio.h>
int main(){
    int a;

    scanf("%d",&a);//入力
    printf("a = %d\n",a);

    return 0;
}
```




# 第二回

2-1 条件分岐
```c
#include<stdio.h>
int main(){
    int a=10;
    if( a>10 ){
        printf("a は10より大きい");
    }
    else if( a<10 ){
        printf("a は10より小さい");
    }

    return 0;
}
```


2-2 else文を利用した条件分岐
```c
#include<stdio.h>
int main(){
    int a=10;
    if( a>0 ){
        printf("a は0正の値");
    }
    else if( a<0 ){
        printf("a は0負の値");
    }
    else{
        printf("a は0です");
    }
    return 0;
}
```


2-3 条件分岐の演算子
```c
#include<stdio.h>
#include<bool.h>//bool型の変数を扱うときに必要
int main(){
    
    //真
    if(5>=3)  
        printf("1\n");
    
    //真
    if(!(5<=3))//!5>3とはできない
        printf("2\n");

    //偽
    if(true && false)
        printf("3\n");
    
    //真
    if(true || false)
        printf("4\n");
    

    return 0;
}
```

2-4 switch文
```c
#include<stdio.h>
int main(){
    int number =5;

    switch(number){
        case 1:
            printf("1がでた\n");
            break;
        case 2:
            printf("2がでた\n");
            break;
        case 3:
            printf("3がでた\n");
            break;
        case 4:
            printf("4がでた\n");
            break;
        case 5:
            printf("5がでた\n");
            break;
        case 6:
            printf("6がでた\n");
            break;
        default:
            printf("あなたが使っているものは、もはやさいころではない。\n");
    }
    return 0;
}
```



# 第三回

3-1 while文
```c
#include<stdio.h>
int main(){
    int i=1;
    int n;
    int sum=0;
    printf("自然数nを入力してください");
    scanf("%d",&n);
    
    while(i<=n){
        sum=sum+i;
        printf("i : %d sum : %d\n");
        i++;//i=i+1;と同じ
    }

    return 0;
}
```

3-2 for文
```c
#include<stdio.h>
int main(){
    int n;
    int sum=0;
    printf("自然数nを入力してください");
    scanf("%d",&n);
    for(int i=1;i<=n;i++){
        sum=sum+i;
        printf("i : %d sum : %d\n");
    }

    return 0;
}
```


3-3 continueとbreak文
```c
#include<stdio.h>
int main(){
    int i=1;
    int n=10000;
    int sum=0;
    printf("n = %d",n);
    
    while(i<=n){
        if(i%2==1){//値が奇数ならば、値を1増やしてwhileを最初からやる
            i++;
            continue;
        }
        sum=sum+i;
        printf("i : %d sum : %d\n");
        if(sum>5000)//もし総和が5000より大きくなったらwhile文を抜ける
            break;
        i++;
    }
    return 0;
}
```

3-4 for文とwhile文の動作の違い
```c
#include <stdio.h>

int main() {
    printf("forループで偶数をスキップ:\n");
    for (int i = 0; i < 10; i++) {
        if (i % 2 == 0) {
            continue; //i++って書く必要がないfor(;;)の三つ目の更新式がcontinue時にされる
        }
        printf("i = %d\n", i);
    }

    printf("----------------------\n");

    printf("whileループで偶数をスキップ:\n");
    int j = 0;
    while (j < 10) {
        if (j % 2 == 0) {
            j++;//値の更新を自分でcontinueする前に行わなければならない
            continue;
        }
        printf("j = %d\n", j);
        j++;
    }

    return 0;
}

```




# 第四回

4-1 変数の出力書式について
```c
#include<stdio.h>
int main(){
    int a,b,c,d,e,f;
    a=10;
    b=20;
    c=30;
    d=b*c;
    e=a*c;
    f=a*b;

    printf("%d %d %d\n",a,b,c);
    printf("%d %d %d\n",a,b,c);

    printf("\n\n");

    printf("%3d %3d %3d\n",a,b,c);
    printf("%2d %3d %3d\n",a,b,c);//最初が2dになってることに注意

    return 0;
}
```

4-2 配列
```c
#include<stdio.h>
int main(){
    int a[10];

    for(int i=0;i<10;i++){
        a[i]=i+10;
    }

    for(int i=0;i<10;i++){
        printf("%3d\n",a[i]);
    }

    return 0;
}
```

4-3 多次元配列
```c
#include<stdio.h>
int main(){
    int a[3][5];
    int c=0;
    for(int i=0;i<3;i++){
        for(int j=0;j<5;j++){
            a[i][j]=c;
            c++;
        }
    }

    for(int i=0;i<3;i++){
        for(int j=0;j<5;j++){
            printf("a[%d][%d] = %2d",a[i][j]);
        }
        printf("\n");
    }

    return 0;

}
```





# 第五回
5-1 関数の例(1)
```c
#include<stdio.h>

int Add(int x,int y);

int main(){
    int a=5;
    int b=12;
    a=Add(a,b);

    printf(" a = %d\n" ,a );

    return 0;
}


int Add(int x,int y){
    int sum;
    sum=x+y;
    return sum;
}

```

5-2 関数の例(2)
```c
#include<stdio.h>

int Add(int x,int y){
    int sum;
    sum=x+y;
    return sum;
}

int main(){
    int a=5;
    int b=12;
    a=Add(a,b);

    printf(" a = %d\n" ,a );

    return 0;
}
```


5-3 再帰関数の例(1)
```c
#include<stdio.h>
int sum(int x);

int main(){
    int　num;
    printf("整数を入力してください\n");
    scanf("%d",&num);
    printf("1から%dまでの総和は%dです\n",num,sum(num));
    return 0;
}

int sum(int x){
    if(x==1)
        return 1;
    else if(x<=0)
        return 0;
    else
        return x+sum(x-1);
}

```

5-4 再帰関数の例(2)
```c
#include <stdio.h>


int factorial(int n) {
    if (n == 0) {
        return 1; //0の階乗は1
    } else {
        return n * factorial(n - 1); // 再帰呼び出し
    }
}

int main() {
    int num;
    printf("数字を入力してください: ");
    scanf("%d", &num);
    printf("%dの階乗は %d です。\n", num, factorial(num));
    return 0;
}

```


