---
title: "2021年GW講習「プログラミングをやってみないか？」"
pubdate: 2021-05-02
authors: ["higu"]
category: "未分類"
tags: ["講習会"]
draft: false
---

### はじめに

ゴールデンウィークなので、プログラミングでもやってみましょう。

問題等は[こちら](https://uu-cactus.com/2021/goldenweek/)から

### やり方

問題のページを開いてF12キーを押し、「console」タブを押しましょう。

何かしらエディタを持っている方はそちらに、持っていない場合はconsoleタブに直接入力しましょう。

### 問題1

やることは、「数字を入力してボタンを押すと下の方に出てくる」です。

```
function onClick() {
	const input = document.getElementById("number1");
	const target = document.getElementById("output");

	target.innerHTML = input.value;
}

```

書き終わったらEnterボタンを押して、それから入力フォームに数字を入力してボタンを押してみましょう。入力した数字が下の方に出力されたと思います。

#### 何が起こったのか

プログラムとはよく「手順書」と書かれます。確かに正しいのですが、もっと簡単に言うと「入力と出力の間になるもの」です。

入力とは、つまり人間が行うことです。キーボードを叩く、マウスをクリックする、……などです。  
出力とは、結果のことです。画面に何かを表示する、音を出す、……などです。

上のプログラムを見ると、2行目が入力、3、5行目が出力にあたることを行っています。この時点だとまだ理解ができないかもしれませんが、次のプログラムを書いて理解につなげましょう。

### 問題2

やることは、「2つの数字と算術記号から計算を行って出力する」です。

```
function onClick() {
	const input1 = document.getElementById("number1");
	const input2 = document.getElementById("number2");
	const digits = document.getElementsByName("digit");
	const target = document.getElementById("output");

	for (let i = 0; i < digits.length; i++) {
		if (digits[i].checked) {
			var digit = digits[i].value;
		}
	}

	let number1 = parseInt(input1.value);
	let number2 = parseInt(input2.value);
	let result;

	switch (digit) {
		case "plus":
			result = number1 + number2;
			break;
		case "minus":
			result = number1 - number2;
			break;
		case "multiple":
			result = number1 * number2;
			break;
		case "division":
			result = number1 / number2;
			break;
	}

	target.innerHTML = result;
}
```

長い。でもがんばりましょう。コピペできそうなところはコピペしていきましょう。

#### 何をしているのか

1. 2～5行目：ページ内の要素を取得
2. 7～11行目：加減乗除のラジオボタンの値を取得
3. 13～14行目：入力された数字をゲット
4. 17～30行目：算術演算子によって計算
5. 32行目：計算結果を出力

どうでしょうか。入力と出力、その間の処理というものがなんとなく分かってきたのではないでしょうか。

2．では、いわゆるループ（反復処理）というやつを使っています。また、4．では分岐処理をしています。この2つは、プログラムの基本構成要素です。覚えておいて損はないでしょう。

### 問題3

やることは「それっぽい電卓の作成」です。というかぱっと見電卓ですね。

```
var numbers = [0, 0];
var digit = "";
var isInputDigit = false;
var isInputNumber = false;

function displayNumber(n) {
	const display = document.getElementById("display");
	let displayNumber = parseInt(display.innerHTML);

	if (isInputDigit) {
		displayNumber = 0;
		isInputDigit = false;
	}

	display.innerHTML = displayNumber * 10 + n;
}

function inputDigit(inputDigit) {
	const display = document.getElementById("display");
	const displayNumber = parseInt(display.innerHTML);

	if (isInputNumber) {
		numbers[1] = displayNumber;
		numbers[0] = calc();
		numbers[1] = 0;
	} else {
		numbers[0] = displayNumber;
	}

	isInputNumber = true;

	digit = inputDigit;
	isInputDigit = true;
}

function calc() {
	let result = numbers[0];

	switch (digit) {
		case "plus":
			result += numbers[1];
			break;
		case "minus":
			result -= numbers[1];
			break;
		case "multiple":
			result *= numbers[1];
			break;
		case "division":
			result /= numbers[1];
			break;
	}

	display.innerHTML = result;

	return result;
}

function clearDisplay() {
	numbers[0] = 0;
	numbers[1] = 0;
	digit = "";
	isInputDigit = false;
	isInputDigit = false;

	const display = document.getElementById("display");
	display.innerHTML = 0;
}
```

また長い。すまん。でも耐えてくれ。仕方ないのだ。

#### 何してるのか

マジで1つ1つ説明すると長いのでざっっっっくりとだけ説明させてもらいます。

- 06～16行目：数字のボタンが押されると実行。
- 18～34行目：+-×÷=が押されると実行。
- 36～57行目：↑の計算処理を分けて書いたもの。
- 59～68行目：clsボタンが押されると実行。

てな感じです。電卓という実際にありふれているものを組むので、どうなるんだろうと考えながら書いて見た方もいるのではないでしょうか。

### ここまでやってみて

さて、そんなわけで電卓ができました。おめでとうございます。  
ここで、個人的に思っていることを考えます。

この段階で、「こんな計算もできるのだろうか」と考えていてほしいのです。  
具体的に書くとルートの計算、税率計算、三角関数、などなどです。  
そして、基本的に計算出来ないものはないと思います。定積分などはちょっと難しいかもしれませんが……。  
プログラミングを学習する上で大事なのは考え抜くこと、やってみることです。ぜひ、再来週から頑張ってください。
