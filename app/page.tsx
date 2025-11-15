// 2. **`app/page.tsx` - メインページの基本構造**
//    - 'use client'ディレクティブを追加（クライアントコンポーネントとして）
//    - React hooks（useState, useEffect）をインポート
//    - メインの状態管理を実装
//      - `items` state: アイテムリストの状態
//      - `deletedOrder` state: 削除順序を記録する配列
//    - 初期化処理
//      - `defaultItems`をインポート
//      - ランダムにシャッフルする関数を作成
//      - `useEffect`で初期化時にシャッフル
//    - レイアウト構造
//      - ヘッダー（タイトル、説明文）
//      - `ProgressIndicator`コンポーネント（後で実装）
//      - `GridLayout`コンポーネント
//      - `ResultModal`コンポーネント（後で実装）
//    - 基本的なスタイリング（Tailwind CSS）
'use client'
// import { useState, useEffect } from 'react'というコードは、ReactのuseStateとuseEffectをインポートしている
// useStateは、状態管理をするためのReactのhooks
// hooksは、Reactのコンポーネント内で使用することができる関数である
// コンポーネントとは、ReactでのUIの部品のことである
// 例えばボタンコンポーネントを定義したら、そのボタンコンポーネントを使うときに、そのボタンコンポーネントの中身を呼び出すことで、ボタンを表示することができる
// これは、Reactのコンポーネントを使うことで、UIを再利用することができるということである

import { useState, useEffect} from 'react'
// 他のファイルからデータをインポートするときは、import データ(配列)名 from '@/フォルダpath/ファイル名'というコードを使用する
import { lifeValues, Item } from '@/lib/items'


export default function Home() {
  
  const [items, setItems] = useState<Item[]>(lifeValues);
  const handleDelete = (clickedId: string) => {
    // items.filter(item => item.deleted === true)でdeletedがtrueになっているものをピックアップして、.lengthでその数をカウントしている
    const deletedCount = items.filter(item => item.deleted === true).length;
    
    const newItems = items.map(item => {
      if (item.id === clickedId) {
        return {
          ...item,
          deleted: true,
          deletedOrder: deletedCount + 1
        };
      }
      return item;
    });
    
    setItems(newItems);
  };
  const remainingCount = items.filter(item => item.deleted === false).length;
  const top10 = items.filter(item => item.deleted === true).sort((a, b) => (b.deletedOrder || 0) - (a.deletedOrder || 0)).slice(0, 10);
  const top3 = top10.slice(0, 3);   // 1位, 2位, 3位
  const rest = top10.slice(3, 10);  // 4位から10位まで
  return (
    <div className="min-h-screen bg-amber-50 p-8">
      {remainingCount === 0 ? (
        <div className="max-w-4xl mx-auto">
          {/* タイトル */}
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
            あなたの大切な価値観ランキング
          </h1>
          
          {/* 表彰台 */}
          <div className="flex items-end justify-center gap-4 mb-12">
            {/* 2位 */}
            <div className="flex flex-col items-center">
            <div className="text-5xl mb-2">🥈</div>
              <div className="bg-red-800 text-white rounded-lg p-6 h-32 w-32 flex flex-col items-center justify-center">
                {/* <div className="text-4xl font-bold">🥈</div> */}
                {/* text-smの他にtext-base, text-lg, text-xl, text-2xl, text-3xl, text-4xl, text-5xl, text-6xl, text-7xl, text-8xl, text-9xl, text-10xlというものがある */}
                <div className="flex text-base font-bold mt-2 text-center">{top3[1]?.text}</div>
              </div>
            </div>
            
            {/* 1位 */}
            <div className="flex flex-col items-center">
              <div className="text-5xl mb-2">🥇</div>
              <div className="bg-red-800 text-white rounded-lg p-6 h-48 w-32 flex flex-col items-center justify-center">
                {/* <div className="text-5xl font-bold">🥇</div> */}
                <div className="text-2xl font-bold mt-2 text-center">{top3[0]?.text}</div>
              </div>
            </div>
            
            {/* 3位 */}
            <div className="flex flex-col items-center">
            <div className="text-5xl mb-2">🥉</div>
              <div className="bg-red-800 text-white rounded-lg p-6 h-16 w-32 flex flex-col items-center justify-center">
                {/* <div className="text-4xl font-bold">🥉</div> */}
                <div className="text-sm font-bold mt-2 text-center">{top3[2]?.text}</div>
              </div>
            </div>
          </div>
          
          {/* 4-10位のリスト */}
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
            <ul className="space-y-3">
              {rest.map((item, index) => (
                <li key={item.id} className="text-lg border-b pb-2">
                  {index + 4}. {item.text}
                </li>
              ))}
            </ul>
          </div>
          {/* ここに追加 ↓ */}
          <div className="flex gap-4 justify-center mt-8">
            <button 
              onClick={() => setItems(lifeValues)}
              className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600"
            >
              もう一度やり直す
            </button>
            <a 
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
          `私の大切な価値観トップ3\n1位: ${top3[0]?.text}\n2位: ${top3[1]?.text}\n3位: ${top3[2]?.text}\n\nあなたは？\n#価値観診断`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-400 text-white px-6 py-3 rounded-lg hover:bg-blue-500"
      >
        🐦 Twitterでシェア
      </a>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl font-bold mb-4">必要ないものから消していこう！</h1>
          <p className="mb-8">残り: {remainingCount}個</p>
          
          <div className="grid grid-cols-5 gap-4">
            {items
              .filter(item => item.deleted === false)
              .map(item => (
                <button 
                  key={item.id}
                  onClick={() => handleDelete(item.id)}
                  className="p-4 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  {item.text}
                </button>
              ))
            }
          </div>
        </div>
      )}
    </div>
  );
}