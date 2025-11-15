// interfaceとは、型の定義をするためのもの
// ここでは、Itemという型を定義している
// この型は、id, text, deleted, deletedOrderというプロパティを持つ
// idはstring型
// textはstring型
// deletedはboolean型
// deletedOrderはnumber型
// deletedOrderはoptionalなプロパティ
// optionalなプロパティは、?を付けることで定義できる
// ここで型を定義しているので、Item型でデータを作成するときに、プロパティがないとエラーが発生して、型の安全性を確保できる
// pythonで関数の引数に対して型を定義しているようなもの
export interface Item {
    id: string;
    text: string;
    deleted: boolean;
    deletedOrder?: number;
  }

// lifeValuesはItem型の配列
// ここでは、lifeValuesという変数に、Item型のデータを格納している
// Item[]としていることで、[]の括弧内には{}で囲ったItem型のデータを格納しなければならないことを示している
// これにより、lifeValuesにはItem型のデータしか格納できないようになっている
// これは、型の安全性を確保するためのものである

// exportとは、このファイルを他のファイルからimportするときに、このファイルの中身を読み込むためのもの
// lifeValues(配列名): Item(型名)[]と定義されている
export const lifeValues: Item[] = [
// 人間関係 (1-15)
{ id: "1", text: "家族", deleted: false },
{ id: "2", text: "友人", deleted: false },
{ id: "3", text: "恋人・パートナー", deleted: false },
{ id: "4", text: "子供", deleted: false },
{ id: "5", text: "親", deleted: false },
{ id: "6", text: "兄弟姉妹", deleted: false },
{ id: "7", text: "祖父母", deleted: false },
{ id: "8", text: "ペット", deleted: false },
{ id: "9", text: "恩師", deleted: false },
{ id: "10", text: "コミュニティ", deleted: false },
{ id: "11", text: "同僚", deleted: false },
{ id: "12", text: "メンター", deleted: false },
{ id: "13", text: "人脈", deleted: false },
{ id: "14", text: "ソウルメイト", deleted: false },
{ id: "15", text: "親友", deleted: false },

// 健康・身体 (16-25)
{ id: "16", text: "健康", deleted: false },
{ id: "17", text: "体力", deleted: false },
{ id: "18", text: "睡眠", deleted: false },
{ id: "19", text: "運動", deleted: false },
{ id: "20", text: "美容", deleted: false },
{ id: "21", text: "食事", deleted: false },
{ id: "22", text: "長寿", deleted: false },
{ id: "23", text: "心の健康", deleted: false },
{ id: "24", text: "若さ", deleted: false },
{ id: "25", text: "身体的自由", deleted: false },

// 経済・物質 (26-35)
{ id: "26", text: "お金", deleted: false },
{ id: "27", text: "財産", deleted: false },
{ id: "28", text: "経済的安定", deleted: false },
{ id: "29", text: "贅沢", deleted: false },
{ id: "30", text: "家・住居", deleted: false },
{ id: "31", text: "車", deleted: false },
{ id: "32", text: "投資", deleted: false },
{ id: "33", text: "資産", deleted: false },
{ id: "34", text: "ブランド品", deleted: false },
{ id: "35", text: "貯金", deleted: false },

// 仕事・キャリア (36-45)
{ id: "36", text: "仕事", deleted: false },
{ id: "37", text: "キャリア", deleted: false },
{ id: "38", text: "昇進", deleted: false },
{ id: "39", text: "地位", deleted: false },
{ id: "40", text: "名声", deleted: false },
{ id: "41", text: "専門性", deleted: false },
{ id: "42", text: "起業", deleted: false },
{ id: "43", text: "成功", deleted: false },
{ id: "44", text: "実績", deleted: false },
{ id: "45", text: "影響力", deleted: false },

// 自己実現 (46-60)
{ id: "46", text: "成長", deleted: false },
{ id: "47", text: "学び", deleted: false },
{ id: "48", text: "知識", deleted: false },
{ id: "49", text: "創造性", deleted: false },
{ id: "50", text: "表現", deleted: false },
{ id: "51", text: "達成感", deleted: false },
{ id: "52", text: "挑戦", deleted: false },
{ id: "53", text: "冒険", deleted: false },
{ id: "54", text: "自己理解", deleted: false },
{ id: "55", text: "自信", deleted: false },
{ id: "56", text: "夢の実現", deleted: false },
{ id: "57", text: "スキル習得", deleted: false },
{ id: "58", text: "資格", deleted: false },
{ id: "59", text: "才能開花", deleted: false },
{ id: "60", text: "自己実現", deleted: false },

// 精神・内面 (61-75)
{ id: "61", text: "自由", deleted: false },
{ id: "62", text: "平和", deleted: false },
{ id: "63", text: "安らぎ", deleted: false },
{ id: "64", text: "幸福", deleted: false },
{ id: "65", text: "喜び", deleted: false },
{ id: "66", text: "感謝", deleted: false },
{ id: "67", text: "信念", deleted: false },
{ id: "68", text: "誠実さ", deleted: false },
{ id: "69", text: "正義", deleted: false },
{ id: "70", text: "道徳", deleted: false },
{ id: "71", text: "精神性", deleted: false },
{ id: "72", text: "宗教・信仰", deleted: false },
{ id: "73", text: "瞑想", deleted: false },
{ id: "74", text: "マインドフルネス", deleted: false },
{ id: "75", text: "悟り", deleted: false },

// 趣味・娯楽 (76-85)
{ id: "76", text: "趣味", deleted: false },
{ id: "77", text: "娯楽", deleted: false },
{ id: "78", text: "旅行", deleted: false },
{ id: "79", text: "音楽", deleted: false },
{ id: "80", text: "アート", deleted: false },
{ id: "81", text: "読書", deleted: false },
{ id: "82", text: "映画", deleted: false },
{ id: "83", text: "ゲーム", deleted: false },
{ id: "84", text: "スポーツ観戦", deleted: false },
{ id: "85", text: "グルメ", deleted: false },

// 社会貢献・他者 (86-95)
{ id: "86", text: "貢献", deleted: false },
{ id: "87", text: "ボランティア", deleted: false },
{ id: "88", text: "社会的責任", deleted: false },
{ id: "89", text: "環境保護", deleted: false },
{ id: "90", text: "教育", deleted: false },
{ id: "91", text: "寄付", deleted: false },
{ id: "92", text: "人助け", deleted: false },
{ id: "93", text: "承認", deleted: false },
{ id: "94", text: "尊敬", deleted: false },
{ id: "95", text: "感謝される", deleted: false },

// その他 (96-100)
{ id: "96", text: "時間", deleted: false },
{ id: "97", text: "自然", deleted: false },
{ id: "98", text: "美", deleted: false },
{ id: "99", text: "笑い", deleted: false },
{ id: "100", text: "愛", deleted: false },
]