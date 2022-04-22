# 💄 lip
 Made in Japan な CSS Framework.  
 シンプルで直感的な class, id で効率良くコーディングできます。  
 <br>
 
## 📚 documents
 ### welcome!
  lip へようこそ！  
  lip は 最小限の構成 で 最低限必要 な UI・UX を構築できることを目標に開発されました。  
  モバイルファーストに対応できるサイトを構築しましょう。  
  index.html にサンプルがあります。参考にしてみてください。  

 ### 使い方
  GitHub の リポジトリ から全てのファイル (index.html, lip(directly), README.md) をダウンロードします。  
  point: (サイト構築に使用するのは lip ディレクトリ だけです。)  
  <br>
  lip.css を 構築しているHTML ファイルに読み込ませます。  
  <br>
  <b>Template</b>
  ``` html
  <!doctype html>
  <html lang="">
    <head>
        <!-- required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- lip CSS -->
        <link href="lip/lip.css" rel="stylesheet">

        <title>example - Hello, world!</title>
    </head>
    <body>
        <h1>Hello, world!</h1>
    </body>
  </html>
  ```

  ### 注意するポイント
  以下のコードは必ず入れてください。  
  入れないとデザインが崩れる可能性があります。

  ``` html
  <!doctype html>
  <html lang="">
      ...
  </html>
  ```
  <br>

  レスポンシブ用 meta タグ を入れてください。

  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  ```

