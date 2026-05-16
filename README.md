# 🍋 Lemon ポートフォリオテンプレート

慶應義塾大学 Web制作サークル **Lemon** のポートフォリオテンプレートです。
forkして自分だけのポートフォリオを作ろう！

---

## 📁 ファイル構成

```
lemon-portfolio-template/
├── index.html          ← メインページ（ここを主に編集する）
├── css/
│   └── style.css       ← デザイン設定
├── js/
│   └── main.js         ← JavaScript（Gemini CLIで追加）
├── images/
│   └── profile.jpg     ← 好きな写真に差し替えてね
└── GEMINI_PROMPT.md    ← Gemini CLIへの指示例
```

---

## 🚀 カスタマイズの手順

### Step 1: 名前・自己紹介を変える

`index.html` を開いて `<!-- ↑ ここを変えてね -->` のコメントを探して編集する。
主な変更箇所：

- `<title>` タグ（ブラウザのタブに表示される名前）
- `.nav__logo`（ナビのイニシャル）
- `.hero__name-ja / .hero__name-en`（名前）
- `.hero__tagline`（キャッチコピー）
- `#about` セクション（自己紹介・所属）
- `#skills` セクション（スキルタグ）
- `#works` セクション（制作物カード）
- `#contact` セクション（GitHubなどのリンク）
- `<footer>`（コピーライト）

### Step 2: 写真を差し替える

好きな写真（景色でもキャラでもなんでもOK）を `images/profile.jpg` という名前で保存する。

### Step 3: 色を変える

`css/style.css` の一番上にある `:root { }` の中の色コードを変える。

```css
--color-primary: #F5C518; /* ← ここを好きな色に！ */
```

[Google カラーピッカー](https://www.google.com/search?q=color+picker) で好きな色を探してコードをコピーしよう。

### Step 4: JavaScriptを追加する（任意）

`GEMINI_PROMPT.md` を参考に Gemini CLI にお願いする。

### Step 5: GitHub Pagesで公開する

1. このリポジトリを GitHub に push する
2. リポジトリの **Settings → Pages**
3. **Branch: main → / (root) → Save**
4. しばらくするとURLが発行される🎉

---

## 🎨 デザインのカスタマイズ

`css/style.css` の `:root` にある変数を変えるだけで全体のデザインが変わります：

| 変数名 | 説明 | デフォルト |
|--------|------|-----------|
| `--color-primary` | メインカラー（黄色） | `#F5C518` |
| `--color-accent` | アクセント（黒） | `#1C1C1E` |
| `--color-bg` | 背景色 | `#FFFEF5` |
| `--color-text` | 文字色 | `#1C1C1E` |
| `--max-width` | コンテンツ最大幅 | `1000px` |

---

## 💬 困ったら

AIに聞くか質問してください！
