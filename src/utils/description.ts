/**
 * Generate rough description for a given markdown body
 * @param body markdown body content
 * @returns generated description
 */
export function generateDescription(body: string, maxLength = 90): string {
  const cleaned = body
    .replace(/<[^>]*>[\s\S]*?<\/[^>]*>/g, '')        // <tag>...</tag> を削除
    .replace(/<[^>]+\/?>/g, '')                      // <tag/> や <br> など単体タグも削除
    .replace(/!*\[(.*?)\]\(.*?\)/g, '$1')            // Markdownの画像記法 ![alt](url) を削除
    .replace(/\*\*|__/g, '')                         // Markdownのボールド・イタリックを削除
    .split(/\r\n|\n/)                                // 行ごとに分割
    .map(p => p.trim())                              // 前後の空白削除
    .filter(p => p && !/^#{1,6} /.test(p))           // 空行・見出しを除外
    .join('');                                       // 連結

  if (!cleaned) return '';

  return cleaned.length > maxLength
    ? cleaned.slice(0, maxLength).replace(/[、。]?$/, '') + '…'
    : cleaned;
}
