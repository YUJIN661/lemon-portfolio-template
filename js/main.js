// =============================
// main.js — Lemon Portfolio Template
// =============================
// 使い方：
//   「js/main.jsに〇〇を追加して」と Gemini CLI に伝えてください
//   GEMINI_PROMPT.md にコピペで使えるプロンプトが載っています
// =============================


// =============================
// ヘッダー：スクロール時に背景を追加
// スクロールすると半透明の背景が現れる
// =============================
const header = document.getElementById('header');

if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  });
}


// =============================
// スクロールアニメーション
// =============================
// Gemini CLI へのプロンプト例：
//   js/main.jsに、スクロールしたときに各セクションがふわっと表示される
//   アニメーションを追加して。HTMLやCSSは変えないで、JavaScriptだけで実装して。


// =============================
// ハンバーガーメニュー（スマホ用）
// =============================
// Gemini CLI へのプロンプト例：
//   スマホ用のハンバーガーメニューを追加したい。
//   index.htmlのheaderにボタンを追加して、
//   js/main.jsに開閉の処理を書いて。
//   css/style.cssにもスタイルを追加して。


// =============================
// その他（自由に追加してね）
// =============================

// =============================
// スムーズスクロール
// =============================
// ナビゲーションメニューやボタンなど、ページ内リンク（#から始まるリンク）をクリックした際に、
// 固定ヘッダー（header）の高さを考慮してスムーズに目的の場所までスクロールします。
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');

    // ハッシュが '#' のみ、または存在しない場合はページ最上部にスクロールする
    if (!href || href === '#') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();

      // ヘッダー要素を取得し、高さを動的に計算（レスポンシブ等で高さが変わっても対応可能）
      const headerElement = document.getElementById('header');
      const headerOffset = headerElement ? headerElement.offsetHeight : 0;

      // ターゲット要素の位置を取得してスクロール位置を算出
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + (window.scrollY || window.pageYOffset) - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});
