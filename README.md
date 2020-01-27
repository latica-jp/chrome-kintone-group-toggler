# kintone Group Toggler

kintone の詳細／編集／作成画面のグループを一括開閉する Google Chrome 機能拡張です。

## インストール

通常、Google Chrome の機能拡張ファイルは単一のパッケージファイルとして提供されます。ただし、Chrome はウェブストア以外からの機能拡張のインストールを禁止しており、この機能拡張は Chrome ウェブストアに登録されていないため、通常の手順で Chrome にインストールすることができません。

Chrome にはデベロッパーモードとしてパッケージ化されていない機能拡張を読むこむ機能がありますので、ここではそれを利用します。

プロジェクトを clone して機能拡張をビルドすると、プロジェクトのルートディレクトリに `build` ディレクトリが作成されます。

```
git clone https://github.com/latica-jp/chrome-kintone-group-toggler.git
cd chrome-kintone-group-toggler
yarn
yarn release
```

以下の手順で機能拡張を Chrome にインストールします。

- Chrome の URL に `chrome://extensions/` を入力して機能拡張の管理画面を表示
- 右上の「デベロッパーモード」を有効にする
- 「パッケージ化されていない拡張機能を読み込む」をクリック
- プロジェクトルートの `build` フォルダを指定

これで機能拡張のインストールが完了します。

## 使いかた

kintone のレコード作成／編集／詳細画面で機能拡張ツールバーのアイコンをクリックすると、グループがまとめて開閉されます。

### 挙動についての注意

- グループの開閉動作は、すべてのグループを開いた状態か、または閉じた状態に統一します。
- この際、いちばん上のグループの状態に他のグループを合わせます。

#### 例

クリック前

- OPEN
- CLOSED
 
クリック後

- CLOSED
- CLOSED

## Licence

MIT
