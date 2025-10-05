# 基本的なデザイン

## 概要

AI等を用いて開発する場合は、スタイルを統一するためこれを読ませておくことを推奨します。

## デザイン原則

- **統一性**: CSS変数による色・サイズの統一管理
- **モダン性**: グラスモーフィズム、グラデーション効果
- **レスポンシブ**: モバイルファーストデザイン

## カラーシステム

```css
:root {
  /* メインカラー */
  --color-cactus-rgb: 70, 189, 76;
  --color-cactus: rgb(var(--color-cactus-rgb));

  --color-cactus-dark-rgb: 55, 150, 60;
  --color-cactus-dark: rgb(var(--color-cactus-dark-rgb));
  
  /* 背景色 */
  --color-background-light: #f5f5f5;
  --color-background-white: #ffffff;
  
  /* テキスト・ボーダー */
  --color-border-light: #e0e0e0;
  --color-text-primary: #222222;
  --color-text-secondary: #444444;
}
```

## レイアウト

```css
/* 全体幅制限 */
:root {
  --max-content-width: 1300px;
}

/* レスポンシブブレークポイント */
/* タブレット: 768px以下 */
/* モバイル: 480px以下 */

/* グリッドシステム */
grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
gap: 1.5rem;
```

## コンポーネント

### ボタン
```css
/* 基本スタイル */
background: linear-gradient(135deg, var(--color-cactus), var(--color-cactus-dark));
border-radius: 50px;
transition: all 0.3s ease;

/* ホバー効果 */
:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}
```

### カード
```css
background-color: var(--color-background-white);
border: 2px solid var(--color-border-light);
border-radius: 12px;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
transition: all 0.3s ease;
```

### グラスモーフィズム
```css
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.2);
```

## 実装ガイドライン

### CSS変数の使用
```css
/* 推奨 */
color: var(--color-text-primary);
background: var(--color-cactus);
```
