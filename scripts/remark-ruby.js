/**
 * ルビタグのテンプレート。
 * @constant
 * @type {string}
 */
const rubyTemplate = "<ruby>$1<rt>$2</rt></ruby>";

/**
 * ルビタグのための正規表現パターンとその置換テキストのリスト。
 * 各要素は以下のプロパティを持つオブジェクトです:
 *   - `pattern`: ルビの検出に使われる正規表現パターン。正規表現オブジェクトまたは文字列が必要です。
 *   - `replacement`: `pattern`にマッチした部分の置換テキスト。文字列が必要です。
 * 
 * @constant
 * @type {Array<{pattern: (RegExp|string), replacement: string}>}
 */
const rubyRegexList = [
    { pattern: /[\|｜](.+?)《(.+?)》/g, replacement: rubyTemplate },
    { pattern: /[\|｜](.+?)（(.+?)）/g, replacement: rubyTemplate },
    { pattern: /[\|｜](.+?)\((.+?)\)/g, replacement: rubyTemplate },
    { pattern: /\[\[rb:(.+?) &gt; (.+?)\]\]/g, replacement: rubyTemplate },
    { pattern: /([\p{sc=Han}]+)《(.+?)》/gu, replacement: rubyTemplate },
    { pattern: /([\p{sc=Han}]+)（([\p{sc=Hiragana}\p{sc=Katakana}ー～]+?)）/gu, replacement: rubyTemplate },
    { pattern: /([\p{sc=Han}]+)\(([\p{sc=Hiragana}\p{sc=Katakana}ー～]+?)\)/gu, replacement: rubyTemplate },
    { pattern: /[\|｜]《(.+?)》/g, replacement: "《$1》" },
    { pattern: /[\|｜]（(.+?)）/g, replacement: "（$1）" },
    { pattern: /[\|｜]\((.+?)\)/g, replacement: "($1)" }
];

/**
 * ルビタグのための正規表現マップのリスト。
 * @constant
 * @type {Array<Object>}
 */
const rubyRegexMapList = rubyRegexList.map(({ pattern, replacement }) => ({
    pattern: new RegExp(pattern),
    replacement
}));

/**
 * 与えられた文字列の中のルビタグを置換する。
 *
 * @param {string} str - ルビタグを置換する対象の文字列。
 * @returns {string} - ルビタグが置換された文字列。
 */
const replaceRubyTags = (str) => {
    return rubyRegexMapList.reduce((acc, { pattern, replacement }) => {
        return acc.replace(pattern, replacement);
    }, str);
}

/**
 * 記事を更新し、そのHTMLコンテンツのルビタグを置換する。
 *
 * @param {HTMLElement} el - 更新する記事のHTML要素。
 */
const updateArticle = (el) => {
    const replacedHtml = replaceRubyTags(el.innerHTML);
    el.innerHTML = replacedHtml;
}

/**
 * updateArticle関数をモジュールとしてエクスポートする。
 */
export default updateArticle;