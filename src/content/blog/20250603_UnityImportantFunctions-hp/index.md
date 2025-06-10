---
title: Unityでよく使う関数
pubdate: 2025-06-03
authors:
  - K_H
category: 備忘録
tags:
  - Unity
  - C#
  - ゲーム開発
coverImage: ./thumbnail.png
---
この記事は現在仮設置なのであとでしっかり更新します。

**わからない言葉**や**詳細を知りたい言葉**があったときは「**調べましょう**」←超重要

# 関数とは？
	関数は、「名前をつけた処理のまとまり」
何かの「動作」や「計算」をまとめておいて、**あとから名前で呼び出せるようにする仕組み**

メリットとしては、
- 同じ処理を何回も書かなくていい（**再利用できる**）
- 長いプログラムを整理できる
など

## 引数について
	引数（ひきすう）とは、関数に「データを渡すための仕組み」
関数名のあとの () の中に入れる値のこと。

# Unityでよく使う関数
この記事では色々な関数を載せておきますが、無理に覚える必要はありません。
使いながらゆっくり理解していきましょう。

---

## 物体を動かす時
<details><summary>Transform.Translate(Vector3 vector)</summary>
ベクトルで指定した方向に1度進む。<br>
正確には、物体の現在位置に vector を足して、新しい位置に移動する。
</details>

<details><summary>Transform.Rotate(Vector3 eulers)</summary>
指定した回転角度（オイラー角）分だけオブジェクトを回転させる。<br>
x/y/z それぞれの軸に対して度単位で角度を指定する。
</details>

---

## 力を加える時（物理演算関係）
<details><summary>Rigidbody.AddForce(Vector3 force)</summary>
オブジェクトに物理的な力を加える関数。<br>
力の向きと大きさを指定することで、自然な加速・移動を再現できる。<br>
第2引数に <code>ForceMode</code> を指定すると、加える力の種類が変わる。<br>
例：AddForce(force, ForceMode.Impulse)は「瞬間的な力（弾き飛ばす）」を加える。
</details>

---

## 入力を処理する時
便利なInputSystemというものもありますが、
ここではより基本的な方法を説明します。
(ここで挙げられるものはInputSystemとは別物です。)

<details><summary>Input.GetKey(KeyCode key)</summary>
指定したキーが「押されている間」trueを返す。<br>
フレームごとに押しっぱなしを検知したいときに使う。
</details>

<details><summary>Input.GetKeyDown(KeyCode key)</summary>
指定したキーが「押された瞬間」だけ true を返す。<br>
1回だけの処理（ジャンプ、攻撃など）に適している。
</details>

<details><summary>Input.GetAxis(string axisName)</summary>
滑らかな移動用の入力値（-1.0〜1.0）を返す。<br>
"Horizontal" や "Vertical" など、事前に設定された名前を使う。
</details>

---

## デバックする時（意外と重要）
<details><summary>Debug.Log(object message)</summary>
Unityのコンソールに情報を表示する。<br>
変数の中身や処理の流れを確認するときに非常に便利。
</details>

## 物体を生成・消滅させる
<details><summary>Instantiate(Object obj)</summary>
指定したオブジェクト（プレハブ）を新しく生成する。<br> 弾の発射、敵のスポーンなどに頻繁に使われる。<br> 引数を増やせば、出現するときの位置や回転や大きさが決められる。
</details>

<details><summary>Destroy(Object obj)</summary>
オブジェクトをゲーム内から削除する。<br>
プレハブや一時的なエフェクトなどの片付けに使われる。
</details>

---

## 遅延処理する時
少し難しい関数なので、
よくわからない場合は数秒待って実行したいときに使うもんだと思っててください

<details><summary>Invoke(string methodName, float time)</summary>
指定した関数を、指定した秒数の後に1回だけ呼び出す。<br>
時間差でイベントを起こしたいときに使える。
</details>

<details><summary>StartCoroutine(IEnumerator routine)</summary>
一定時間ごとに処理したい、途中で待機させたいときなどに使う関数。<br>
コルーチンを開始し、yield return で処理を分割できる。
</details>

---

## 数値計算系
案外使わない感じもしますが、たまに使うので。

<details><summary>Mathf.Abs(float x)</summary>
x の絶対値を返す関数。<br>
負の値を正に変えるだけで、正の値はそのまま返る。
</details>

<details><summary>Mathf.Clamp(float value, float min, float max)</summary>
value を指定した範囲に制限する関数。<br>
上限・下限を超えた場合、それぞれ max/min に固定される。<br>
int型など数値型だったらどれも使える。
</details>

<details><summary>Mathf.Round(float x)</summary>
x を四捨五入して、最も近い整数に変換する。
</details>

<details><summary>Mathf.Sin(float rad)</summary>
ラジアン単位の角度からサイン（sin）値を返す。<br>
波のような動きや周期的な処理に使える。
</details>

<details><summary>Mathf.Cos(float rad)</summary>
ラジアン単位の角度からコサイン（cos）値を返す。<br>
円運動や時間ベースのエフェクトに役立つ。
</details>

<details><summary>Mathf.Atan2(float y, float x)</summary>
y/x の比から角度（ラジアン）を求める関数。<br>
2Dで向いている方向を求めるときに特に便利。<br>
難しい場合はこんなものがあるんだな程度でOK。
</details>

<details><summary>Mathf.Lerp(float a, float b, float t)</summary>
a から b に向かって t の割合（0〜1）だけ進んだ値を返す。<br>
補間（滑らかな移動や色の変化など）に使われる。
</details>
