/**
 * GitHub Pages用の画像パスを生成する関数
 * 本番環境ではリポジトリ名をプレフィックスとして追加
 */
export function getImagePath(path: string): string {
  const isProd = process.env.NODE_ENV === 'production';
  const basePath = isProd ? '/yakusa-no-ikazuchi' : '';
  
  // パスが/で始まらない場合は追加
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${basePath}${normalizedPath}`;
}

/**
 * GitHub Pages用のページパスを生成する関数
 * 本番環境ではリポジトリ名をプレフィックスとして追加
 */
export function getPagePath(path: string): string {
  const isProd = process.env.NODE_ENV === 'production';
  const basePath = isProd ? '/yakusa-no-ikazuchi' : '';
  
  // パスが/で始まらない場合は追加
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${basePath}${normalizedPath}`;
}

/**
 * 静的アセットのパスを生成する関数
 */
export function getAssetPath(path: string): string {
  return getImagePath(path);
}
