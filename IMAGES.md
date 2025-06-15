# 画像設定について

## メンバー画像

メンバーの画像は `public/images/members/` ディレクトリに配置してください。

### サポートされる形式
- JPEG (.jpg)
- PNG (.png)  
- SVG (.svg)
- WebP (.webp)

### 推奨サイズ
- メンバー写真: 96x96px（正方形）
- パートナーロゴ: 64x64px（正方形）

### ファイル命名規則

#### メンバー画像
```
public/images/members/
├── tanaka.svg (または .jpg, .png, .webp)
├── sato.svg
└── suzuki.svg
```

#### パートナーロゴ
```
public/images/partners/
├── partner-a.svg (または .jpg, .png, .webp)
├── partner-b.svg
├── partner-c.svg
└── partner-d.svg
```

## 画像の追加方法

1. 画像ファイルを適切なディレクトリに配置
2. コンポーネントファイル内のデータ配列で画像パスを更新

### Membersコンポーネントの例
```typescript
const members = [
  {
    name: "田中 雷太",
    role: "代表理事", 
    description: "...",
    image: "/images/members/tanaka.svg" // ここを更新
  }
];
```

### Partnersコンポーネントの例
```typescript
const partners = [
  {
    name: 'パートナー企業A',
    category: 'Technology',
    description: '...',
    logo: '/images/partners/partner-a.svg' // ここを更新
  }
];
```

## フォールバック機能

画像が見つからない場合、自動的にプレースホルダーが表示されます。
