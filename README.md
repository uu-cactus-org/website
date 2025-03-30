# website
宇都宮大学 情報研究会 CACTUS 公式サイトのリポジトリです  

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=936385377&skip_quickstart=true)

## 環境構築
### ローカル(PC上)で動かす場合
#### 前提環境
- VSCode
- Git
- Node.js (v22以上)
- pnpm (インストール方法は後述)

#### 開発環境の準備
パッケージマネージャーにはpnpmを使います。インストールしていない場合はこちらでインストールしておいてください:  
```sh
npm install -g pnpm
```

リポジトリをclone (CLIではなくGitHub Desktop等でもOK):  
```sh
git clone https://github.com/uu-cactus-org/website.git
```

cloneしたフォルダの中の`website.code-workspace`をVSCodeで開く  
  
VSCode内のターミナルを開き、依存関係をインストール:  
```sh
pnpm i
```

これで開発環境の準備は完了。　　

### GitHub Codespaces上で動かす場合
上の`Open in GitHub Codespaces`をクリックすると、GitHub Codespaces上で開発環境が自動で立ち上がります。


## 開発環境の起動
VSCodeのターミナルを開き、以下のコマンドを実行:  
```sh
pnpm dev
```

ターミナル上に出てくるURLをCtrl + クリック or `http://localhost:4321`にアクセスすると、サイトのプレビューが表示されます。