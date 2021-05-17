#!/usr/bin/bash

mkdir typescript
cd typescript
touch data.json sample.js sample.ts
npm init
npm install --save typescript   # typescriptのインストール
npx tsc --init  # tsconfig.json(コンパイル時の各種設定ファイル)生成
npm install --save-dev @types/node  # nodeの標準モジュールの型定義情報をインストール
npx tsc main.ts # コンパイル
node main.js    # 実行