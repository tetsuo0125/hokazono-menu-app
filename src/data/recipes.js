// Hokazono Dinner Console - Recipe Database & Types

export const RECIPES = [
  {
    id: "r_01",
    name: "鮭の西京焼きと具だくさん豚汁",
    category: "fish",
    cookingTime: 25,
    description: "上品な甘みの鮭の西京焼きに、栄養満点の根菜をたっぷり入れた豚汁の組み合わせ。温まります。",
    nutrition: {
      calories: 580, // kcal
      protein: 28,   // g
      fat: 22,       // g
      carbs: 45,     // g
      salt: 2.8,     // g
      vitaminC: 25,  // mg
      calcium: 60,   // mg
      iron: 2.2      // mg
    },
    ingredients: [
      { name: "生鮭の切り身", amount: "2切れ", category: "meat_fish" },
      { name: "西京味噌", amount: "大さじ3", category: "pantry" },
      { name: "みりん", amount: "大さじ1", category: "pantry" },
      { name: "酒", amount: "大さじ1", category: "pantry" },
      { name: "豚バラ薄切り肉", amount: "100g", category: "meat_fish" },
      { name: "大根", amount: "5cm", category: "vegetable" },
      { name: "にんじん", amount: "1/2本", category: "vegetable" },
      { name: "ごぼう", amount: "1/2本", category: "vegetable" },
      { name: "こんにゃく", amount: "1/2枚", category: "pantry" },
      { name: "長ねぎ", amount: "1/2本", category: "vegetable" },
      { name: "味噌 (豚汁用)", amount: "大さじ2", category: "pantry" },
      { name: "だし汁", amount: "600ml", category: "pantry" }
    ],
    steps: [
      "西京味噌、みりん、酒を混ぜ合わせ、鮭に塗って冷蔵庫で30分以上漬け込む（できれば半日）。",
      "豚汁の野菜（大根、にんじん、ごぼう、ねぎ）を切る。こんにゃくは手でちぎって下茹でする。",
      "鍋で豚肉を炒め、色が変わったら根菜類を入れて炒め合わせる。",
      "だし汁を加え、野菜が柔らかくなるまで弱火で12分煮込む。",
      "鮭の味噌を軽く拭き取り、グリルまたは弱火のフライパンで焦げ付かないよう両面をじっくり焼く。",
      "豚汁の鍋に味噌を溶き入れ、長ねぎを加えてひと煮立ちさせたら完成。"
    ]
  },
  {
    id: "r_02",
    name: "大定番！豚の生姜焼き & キャベツ山盛り",
    category: "pork",
    cookingTime: 15,
    description: "生姜の効いた甘辛いタレが豚肉に絡み、ご飯が進む大定番おかず。キャベツで食物繊維もしっかり補給。",
    nutrition: {
      calories: 620,
      protein: 26,
      fat: 25,
      carbs: 48,
      salt: 2.2,
      vitaminC: 35,
      calcium: 45,
      iron: 1.8
    },
    ingredients: [
      { name: "豚肩ロース薄切り肉", amount: "250g", category: "meat_fish" },
      { name: "玉ねぎ", amount: "1/2個", category: "vegetable" },
      { name: "キャベツ", amount: "1/4個", category: "vegetable" },
      { name: "おろし生姜", amount: "大さじ1", category: "pantry" },
      { name: "醤油", amount: "大さじ2", category: "pantry" },
      { name: "みりん", amount: "大さじ2", category: "pantry" },
      { name: "酒", amount: "大さじ1", category: "pantry" },
      { name: "砂糖", amount: "小さじ1", category: "pantry" },
      { name: "サラダ油", amount: "大さじ1", category: "pantry" }
    ],
    steps: [
      "おろし生姜、醤油、みりん、酒、砂糖を混ぜ合わせて合わせ調味料を作る。",
      "玉ねぎはくし形に切り、キャベツは千切りにして水にさらしたあと、よく水気を切っておく。",
      "フライパンにサラダ油を熱し、豚肉を広げながら中火で焼く。色が変わったら玉ねぎを加える。",
      "玉ねぎがしんなりしたら、余分な油をキッチンペーパーで拭き取る。",
      "合わせ調味料を一気に加え、強火でタレを絡めながら水分を飛ばすように炒め合わせる。",
      "お皿に山盛りのキャベツを盛り、生姜焼きをタレごと盛り付けて完成。"
    ]
  },
  {
    id: "r_03",
    name: "照り焼きチキン & ブロッコリーのソテー",
    category: "chicken",
    cookingTime: 20,
    description: "皮目をパリッと焼いたジューシーな鶏もも肉に、甘辛の照り焼きダレをコーティング。ビタミンC豊富なブロッコリーを添えて。",
    nutrition: {
      calories: 590,
      protein: 32,
      fat: 21,
      carbs: 38,
      salt: 2.0,
      vitaminC: 60,
      calcium: 50,
      iron: 2.1
    },
    ingredients: [
      { name: "鶏もも肉", amount: "300g (1枚)", category: "meat_fish" },
      { name: "ブロッコリー", amount: "1/2株", category: "vegetable" },
      { name: "醤油", amount: "大さじ2", category: "pantry" },
      { name: "みりん", amount: "大さじ2", category: "pantry" },
      { name: "酒", amount: "大さじ2", category: "pantry" },
      { name: "砂糖", amount: "大さじ1/2", category: "pantry" },
      { name: "塩・コショウ", amount: "少々", category: "pantry" },
      { name: "オリーブオイル", amount: "小さじ1", category: "pantry" }
    ],
    steps: [
      "鶏もも肉は余分な黄色い脂肪を取り除き、フォークで皮目を数箇所刺して塩コショウを振る。",
      "ブロッコリーは小房に分け、耐熱容器に入れて大さじ1の水（分量外）を振り、ラップをして電子レンジ600Wで2分加熱する。",
      "フライパンに油を引かずに（またはごく少量）鶏肉の皮目を下にして入れ、中火で焦げ目がつくまで6〜7分じっくり焼く。",
      "ひっくり返して蓋をし、弱火で4分ほど蒸し焼きにして火を通す。",
      "余分な油を拭き取り、醤油、みりん、酒、砂糖を混ぜたタレを流し込む。強火にしてスプーンで肉にタレをかけながら煮詰める。",
      "別のミニフライパンでオリーブオイルを熱し、加熱したブロッコリーをさっと塩コショウでソテーする。",
      "チキンを食べやすい大きさにカットし、ブロッコリーと共にお皿に盛る。"
    ]
  },
  {
    id: "r_04",
    name: "和風ハンバーグ & きのこたっぷり和風あん",
    category: "beef",
    cookingTime: 25,
    description: "ふっくらジューシーな合挽き肉のハンバーグに、旨味たっぷりのきのこあんかけをかけたヘルシー＆ボリューミーな一品。",
    nutrition: {
      calories: 640,
      protein: 29,
      fat: 26,
      carbs: 42,
      salt: 2.5,
      vitaminC: 12,
      calcium: 38,
      iron: 2.7
    },
    ingredients: [
      { name: "合挽き肉", amount: "250g", category: "meat_fish" },
      { name: "玉ねぎ", amount: "1/2個", category: "vegetable" },
      { name: "パン粉", amount: "大さじ3", category: "pantry" },
      { name: "牛乳", amount: "大さじ2", category: "pantry" },
      { name: "卵", amount: "1個", category: "meat_fish" },
      { name: "しめじ", amount: "1/2パック", category: "vegetable" },
      { name: "えのき", amount: "1/2パック", category: "vegetable" },
      { name: "だし汁", amount: "150ml", category: "pantry" },
      { name: "薄口醤油", amount: "大さじ1.5", category: "pantry" },
      { name: "みりん", amount: "大さじ1.5", category: "pantry" },
      { name: "片栗粉 (水溶き用)", amount: "小さじ1", category: "pantry" }
    ],
    steps: [
      "玉ねぎをみじん切りにし、レンジで1分半加熱して冷ましておく。パン粉は牛乳に浸す。",
      "ボウルに合挽き肉、塩少々（分量外）を入れてよく練り、玉ねぎ、卵、浸したパン粉、コショウを加えてさらに練る。",
      "2等分にして空気を抜き、楕円形に成形する。",
      "フライパンに油を熱し、強火で両面に焼き色をつけたら、蓋をして弱火で6〜7分蒸し焼きにする。皿に取り出す。",
      "同じフライパン（肉汁を残す）にしめじ、えのき、だし汁、薄口醤油、みりんを入れて沸騰させる。",
      "きのこに火が通ったら弱火にし、水溶き片栗粉を回し入れてとろみをつける。ハンバーグにかけて完成。"
    ]
  },
  {
    id: "r_05",
    name: "本格麻婆豆腐 & 中華風たたききゅうり",
    category: "tofu_egg",
    cookingTime: 20,
    description: "豆板醤と甜麺醤を効かせた本格的な麻婆豆腐。副菜にはさっぱりとしたたたききゅうりを添えてバランスを。",
    nutrition: {
      calories: 520,
      protein: 24,
      fat: 28,
      carbs: 22,
      salt: 3.1,
      vitaminC: 18,
      calcium: 180,
      iron: 3.2
    },
    ingredients: [
      { name: "豚ひき肉", amount: "150g", category: "meat_fish" },
      { name: "木綿豆腐", amount: "1丁 (350g)", category: "meat_fish" },
      { name: "長ねぎ", amount: "1/2本", category: "vegetable" },
      { name: "にんにく・生姜", amount: "各1かけ", category: "vegetable" },
      { name: "豆板醤", amount: "小さじ1.5", category: "pantry" },
      { name: "甜麺醤", amount: "大さじ1", category: "pantry" },
      { name: "鶏ガラスープ", amount: "150ml", category: "pantry" },
      { name: "醤油", amount: "大さじ1", category: "pantry" },
      { name: "きゅうり", amount: "2本", category: "vegetable" },
      { name: "ごま油", amount: "大さじ1", category: "pantry" },
      { name: "塩・にんにくチューブ", amount: "各少々", category: "pantry" }
    ],
    steps: [
      "豆腐は2cm角に切り、塩少々を入れたお湯で軽く下茹でする（崩れにくくなる）。長ねぎ、にんにく、生姜はみじん切り。",
      "きゅうりはすりこぎ等で叩いて割り、食べやすい大きさにちぎって塩揉みし、ごま油、にんにく、塩で和えて冷やす。",
      "フライパンにごま油を熱し、みじん切りのにんにく、生姜、豆板醤を弱火で炒め、香りが立ったらひき肉を加える。",
      "ひき肉をポロポロになるまでしっかり炒め、甜麺醤を加えてさらに炒め合わせる。",
      "鶏ガラスープ、醤油、水気を切った豆腐を加え、弱火で3〜4分煮る。長ねぎを加える。",
      "水溶き片栗粉（分量外）でとろみをつけ、強火で一煮立ちさせて油を浮き上がらせたら完成。"
    ]
  },
  {
    id: "r_06",
    name: "鯖の塩焼き & ひじきと大豆の煮物",
    category: "fish",
    cookingTime: 20,
    description: "DHA・EPAが豊富な鯖をパリッと塩焼きに。鉄分と食物繊維たっぷりのひじきの煮物で完全栄養を目指します。",
    nutrition: {
      calories: 540,
      protein: 27,
      fat: 26,
      carbs: 28,
      salt: 2.4,
      vitaminC: 10,
      calcium: 120,
      iron: 3.5
    },
    ingredients: [
      { name: "鯖の切り身", amount: "2切れ", category: "meat_fish" },
      { name: "塩 (サバ用)", amount: "小さじ1/2", category: "pantry" },
      { name: "乾燥ひじき", amount: "15g", category: "pantry" },
      { name: "にんじん", amount: "1/3本", category: "vegetable" },
      { name: "油揚げ", amount: "1枚", category: "meat_fish" },
      { name: "大豆水煮", amount: "100g", category: "pantry" },
      { name: "だし汁", amount: "200ml", category: "pantry" },
      { name: "醤油", amount: "大さじ1.5", category: "pantry" },
      { name: "みりん", amount: "大さじ1.5", category: "pantry" },
      { name: "砂糖", amount: "小さじ1", category: "pantry" }
    ],
    steps: [
      "鯖の両面に塩を振り、10分置く。出てきた水分をキッチンペーパーでしっかり拭き取る（臭み取り）。",
      "ひじきは水で戻してザルに上げる。にんじんと油揚げは細切りにする。",
      "グリルで鯖を皮目から強火で焼き、きれいな焼き色がついたら裏返して中まで火を通す。",
      "鍋にごま油（少々）を熱し、ひじき、にんじん、油揚げを炒める。全体に油が回ったら大豆とだし汁、調味料を加える。",
      "落とし蓋をして、煮汁が少なくなるまで弱火で12〜15分煮詰める。",
      "鯖の塩焼きをお皿に盛り、小鉢にひじきの煮物を添えて完成。"
    ]
  },
  {
    id: "r_07",
    name: "鶏肉とカシューナッツの炒め物 & 中華風ワカメスープ",
    category: "chicken",
    cookingTime: 20,
    description: "ジューシーな鶏肉と香ばしいカシューナッツ、彩り豊かな野菜の食感が楽しい本格中華。ミネラル豊富なワカメスープを添えて。",
    nutrition: {
      calories: 610,
      protein: 30,
      fat: 24,
      carbs: 35,
      salt: 2.6,
      vitaminC: 45,
      calcium: 75,
      iron: 2.8
    },
    ingredients: [
      { name: "鶏もも肉", amount: "250g", category: "meat_fish" },
      { name: "カシューナッツ", amount: "50g", category: "pantry" },
      { name: "ピーマン", amount: "2個", category: "vegetable" },
      { name: "赤パプリカ", amount: "1/2個", category: "vegetable" },
      { name: "白ねぎ", amount: "1/2本", category: "vegetable" },
      { name: "醤油・オイスターソース", amount: "各大さじ1", category: "pantry" },
      { name: "酒・みりん", amount: "各大さじ1", category: "pantry" },
      { name: "乾燥ワカメ", amount: "大さじ1", category: "pantry" },
      { name: "鶏ガラスープの素", amount: "小さじ2", category: "pantry" }
    ],
    steps: [
      "鶏もも肉は2cm角に切り、酒、醤油（各小さじ1・分量外）、片栗粉（大さじ1/2・分量外）を揉み込んでおく。",
      "ピーマン、パプリカは2cm角に切り、ねぎは1cmの小口切りにする。醤油、オイスターソース、酒、みりんを混ぜてタレを作る。",
      "フライパンに油を引かずにカシューナッツを軽く炒り、香ばしくなったら取り出す。",
      "同じフライパンにサラダ油を熱し、鶏肉を皮目から中火で炒め、両面に焼き色をつける。",
      "ピーマン、パプリカ、ねぎを加えて強火で手早く炒め合わせる。",
      "全体に火が通ったら、ナッツを戻し入れ、合わせタレを一気に流し込んで強火で絡める。ワカメスープ（お湯にワカメとガラスープ、ごま油を少し入れる）を添える。"
    ]
  },
  {
    id: "r_08",
    name: "牛肉とピーマンの細切り炒め（青椒肉絲）",
    category: "beef",
    cookingTime: 15,
    description: "シャキシャキのピーマンとたけのこ、牛肉の旨味が絶妙。簡単ながら非常にバランスの取れたスタミナ中華料理。",
    nutrition: {
      calories: 590,
      protein: 25,
      fat: 23,
      carbs: 39,
      salt: 2.1,
      vitaminC: 70,
      calcium: 40,
      iron: 2.9
    },
    ingredients: [
      { name: "牛もも薄切り肉", amount: "200g", category: "meat_fish" },
      { name: "ピーマン", amount: "4個", category: "vegetable" },
      { name: "たけのこ水煮", amount: "100g", category: "vegetable" },
      { name: "醤油・酒・オイスターソース", amount: "各大さじ1", category: "pantry" },
      { name: "砂糖", amount: "小さじ1", category: "pantry" },
      { name: "片栗粉", amount: "小さじ1", category: "pantry" },
      { name: "ごま油", amount: "大さじ1", category: "pantry" }
    ],
    steps: [
      "牛肉、ピーマン、たけのこをすべて均一な細切りにする。",
      "細切りにした牛肉に、酒小さじ1、醤油小さじ1、片栗粉小さじ1を揉み込んで下味をつける。",
      "調味料（オイスターソース、醤油、酒、砂糖）を混ぜ合わせておく。",
      "フライパンにごま油を熱し、牛肉をほぐしながら強火で炒める。肉の色が変わったら一度取り出す。",
      "同じフライパンでピーマンとたけのこを強火でさっと炒める（シャキシャキ感を残すのがコツ）。",
      "肉を戻し入れ、合わせ調味料を加えて全体を素早く炒め合わせる。とろみがついたら完成。"
    ]
  },
  {
    id: "r_09",
    name: "とろ〜り卵の親子丼 & お吸い物",
    category: "tofu_egg",
    cookingTime: 15,
    description: "ジューシーな鶏肉を甘辛いお出汁で煮て、半熟卵で優しくとじたどんぶりの王道。胃腸に優しく、高タンパク低脂質。",
    nutrition: {
      calories: 560,
      protein: 34,
      fat: 14,
      carbs: 62,
      salt: 2.5,
      vitaminC: 5,
      calcium: 65,
      iron: 2.6
    },
    ingredients: [
      { name: "鶏むね肉 (またはもも)", amount: "200g", category: "meat_fish" },
      { name: "玉ねぎ", amount: "1/2個", category: "vegetable" },
      { name: "卵", amount: "3個", category: "meat_fish" },
      { name: "だし汁", amount: "100ml", category: "pantry" },
      { name: "醤油", amount: "大さじ2", category: "pantry" },
      { name: "みりん", amount: "大さじ2", category: "pantry" },
      { name: "砂糖", amount: "大さじ1/2", category: "pantry" },
      { name: "三つ葉", amount: "適量", category: "vegetable" },
      { name: "温かいご飯", amount: "2杯分", category: "pantry" }
    ],
    steps: [
      "鶏肉はひと口大のそぎ切りにし、玉ねぎは薄切り、三つ葉は2cm幅に切る。卵はボウルで白身を切るように軽く溶く（混ぜすぎない）。",
      "小さめのフライパンまたは親子鍋にだし汁、醤油、みりん、砂糖を入れて火にかける。",
      "煮立ったら鶏肉と玉ねぎを入れ、中火で3〜4分煮て鶏肉に火を通す。",
      "溶き卵の2/3量を回し入れ、蓋をして弱火で1分ほど煮る。",
      "残りの溶き卵を加え、さらに蓋をして10〜20秒経ったら火を止めて余熱で半熟状に仕上げる。",
      "器に盛ったご飯の上にのせ、三つ葉をあしらって完成。"
    ]
  },
  {
    id: "r_10",
    name: "ぶりの照り焼き & かぼちゃのそぼろ煮",
    category: "fish",
    cookingTime: 25,
    description: "脂ののったぶりに甘辛い照り焼きダレをじっくり絡めて。副菜にはβカロテンが豊富で甘みのあるかぼちゃのそぼろ煮。",
    nutrition: {
      calories: 630,
      protein: 26,
      fat: 24,
      carbs: 45,
      salt: 2.3,
      vitaminC: 28,
      calcium: 45,
      iron: 2.0
    },
    ingredients: [
      { name: "ぶりの切り身", amount: "2切れ", category: "meat_fish" },
      { name: "小麦粉", amount: "適量", category: "pantry" },
      { name: "醤油・みりん・酒", amount: "各大さじ1.5", category: "pantry" },
      { name: "砂糖", amount: "大さじ1/2", category: "pantry" },
      { name: "かぼちゃ", amount: "1/8個 (150g)", category: "vegetable" },
      { name: "鶏ひき肉", amount: "80g", category: "meat_fish" },
      { name: "だし汁 (煮物用)", amount: "150ml", category: "pantry" },
      { name: "醤油 (煮物用)", amount: "大さじ1", category: "pantry" },
      { name: "砂糖 (煮物用)", amount: "大さじ1/2", category: "pantry" }
    ],
    steps: [
      "かぼちゃは一口大に切り、面取りをする。鍋にひき肉、だし汁、醤油、砂糖を入れよく混ぜてから火にかけ、ポロポロにする。",
      "そぼろの鍋にかぼちゃの皮を下にして入れ、落とし蓋をして弱火で12分、柔らかくなるまで煮る（仕上げに水溶き片栗粉で軽くとろみをつける）。",
      "ぶりに塩少々（分量外）を振って5分置き、水気を拭き取ったら、薄く小麦粉をまぶす。",
      "フライパンに油を熱し、ぶりを入れて両面を香ばしく焼く。余分な油は拭き取る。",
      "醤油、みりん、酒、砂糖を混ぜた調味料を加え、強火でタレを煮詰めながらスプーンでぶりに絡める。",
      "ぶりの照り焼きをお皿に盛り、かぼちゃのそぼろ煮を添える。"
    ]
  },
  {
    id: "r_11",
    name: "豚キムチ炒め & 豆もやしのナムル",
    category: "pork",
    cookingTime: 15,
    description: "ピリ辛のキムチと旨味あふれる豚肉のスタミナ炒め。発酵食品と豚肉のビタミンB1で疲労回復。副菜にはシャキシャキのナムル。",
    nutrition: {
      calories: 570,
      protein: 24,
      fat: 25,
      carbs: 32,
      salt: 2.9,
      vitaminC: 22,
      calcium: 55,
      iron: 2.1
    },
    ingredients: [
      { name: "豚バラ薄切り肉", amount: "180g", category: "meat_fish" },
      { name: "白菜キムチ", amount: "150g", category: "pantry" },
      { name: "ニラ", amount: "1/2束", category: "vegetable" },
      { name: "ごま油", amount: "大さじ1", category: "pantry" },
      { name: "醤油・酒", amount: "各小さじ1", category: "pantry" },
      { name: "豆もやし", amount: "1袋", category: "vegetable" },
      { name: "鶏ガラスープの素", amount: "小さじ1/2", category: "pantry" },
      { name: "白いりごま", amount: "小さじ1", category: "pantry" }
    ],
    steps: [
      "豆もやしは茹でるかレンジで加熱し、冷まして水気を絞り、ごま油、塩少々、ガラスープの素、いりごまで和えてナムルを作る。",
      "豚肉は4cm幅に切り、ニラは4cm幅に切る。キムチは食べやすい大きさにほぐしておく。",
      "フライパンにごま油を熱し、豚肉を炒める。肉の色が変わったらキムチを加えてさらに炒め合わせる。",
      "全体が馴染んだらニラを加え、醤油、酒を入れて強火でさっと炒める（ニラの食感を残すため短時間で）。",
      "お皿に盛り付け、豆もやしのナムルを添えて完成。"
    ]
  },
  {
    id: "r_12",
    name: "タラのムニエル・レモンバターソース & キャロットラペ",
    category: "fish",
    cookingTime: 20,
    description: "淡白なタラをバターの風味豊かなソースでしっとりとムニエルに。βカロテンいっぱいのキャロットラペで箸休め。",
    nutrition: {
      calories: 490,
      protein: 23,
      fat: 20,
      carbs: 26,
      salt: 1.8,
      vitaminC: 38,
      calcium: 70,
      iron: 1.5
    },
    ingredients: [
      { name: "真タラの切り身", amount: "2切れ", category: "meat_fish" },
      { name: "小麦粉", amount: "適量", category: "pantry" },
      { name: "バター", amount: "15g", category: "pantry" },
      { name: "レモン汁", amount: "小さじ2", category: "pantry" },
      { name: "にんじん", amount: "1本", category: "vegetable" },
      { name: "オリーブオイル", amount: "大さじ1", category: "pantry" },
      { name: "酢・ハチミツ", amount: "各小さじ1", category: "pantry" },
      { name: "塩・コショウ", amount: "少々", category: "pantry" }
    ],
    steps: [
      "にんじんを千切りにし、塩を振って揉んで5分置き、水気をしっかり絞る。オリーブオイル、酢、ハチミツ、コショウで和えてラペを作る。",
      "タラに塩・コショウを振り、しばらく置いて出てきた水分を拭き取る。薄く小麦粉をまぶす。",
      "フライパンにオリーブオイル（小さじ1・分量外）とバター半量を弱火で溶かし、タラを入れる。",
      "中火で両面をじっくりと、こんがりときれいな焼き色がつくまで焼き、お皿に取り出す。",
      "同じフライパンに残りのバターとレモン汁、醤油少々（分量外）を加え、弱火でさっと温めてソースを作る。",
      "タラにレモンバターソースをかけ、キャロットラペを盛り添える。"
    ]
  },
  {
    id: "r_13",
    name: "チンジャオロース風 豆腐ステーキ & もやし炒め",
    category: "tofu_egg",
    cookingTime: 15,
    description: "水切りした木綿豆腐をステーキにし、ピーマンとひき肉を甘辛のオイスターソースで炒めた餡をかけた、高タンパク・低コストおかず。",
    nutrition: {
      calories: 480,
      protein: 22,
      fat: 18,
      carbs: 24,
      salt: 2.1,
      vitaminC: 40,
      calcium: 150,
      iron: 2.8
    },
    ingredients: [
      { name: "木綿豆腐", amount: "1丁 (350g)", category: "meat_fish" },
      { name: "豚ひき肉", amount: "80g", category: "meat_fish" },
      { name: "ピーマン", amount: "2個", category: "vegetable" },
      { name: "たけのこ水煮", amount: "50g", category: "vegetable" },
      { name: "オイスターソース", amount: "大さじ1", category: "pantry" },
      { name: "醤油・酒", amount: "各大さじ1/2", category: "pantry" },
      { name: "片栗粉", amount: "大さじ1 (まぶす用)", category: "pantry" },
      { name: "ごま油", amount: "大さじ1", category: "pantry" }
    ],
    steps: [
      "豆腐はしっかり水切りし、横半分にスライスしてさらに半分（計4等分）にし、片栗粉を全体にまぶす。",
      "ピーマンとたけのこは細切りにする。オイスターソース、醤油、酒を混ぜておく。",
      "フライパンにごま油を熱し、豆腐を入れて両面がカリッとするまで焼き、取り出してお皿に並べる。",
      "同じフライパンにひき肉を入れ、ポロポロになるまで炒める。",
      "ピーマン、たけのこを加えて強火で炒め、混ぜた調味料を加えて絡める。",
      "焼いた豆腐ステーキの上に、炒めた餡をたっぷりとかけて完成。"
    ]
  },
  {
    id: "r_14",
    name: "チキン南蛮・特製タルタルソース添え",
    category: "chicken",
    cookingTime: 25,
    description: "サクッと揚げ焼きにした鶏肉に、自家製甘酢タレをくぐらせ、らっきょうや玉ねぎを使ったさっぱりタルタルソースをたっぷりかけて。",
    nutrition: {
      calories: 680,
      protein: 34,
      fat: 32,
      carbs: 40,
      salt: 2.6,
      vitaminC: 15,
      calcium: 60,
      iron: 2.2
    },
    ingredients: [
      { name: "鶏もも肉", amount: "300g (1枚)", category: "meat_fish" },
      { name: "卵 (衣用・タルタル用)", amount: "計2個", category: "meat_fish" },
      { name: "小麦粉", amount: "大さじ2", category: "pantry" },
      { name: "醤油・酢・砂糖 (甘酢)", amount: "各大さじ2", category: "pantry" },
      { name: "マヨネーズ", amount: "大さじ4", category: "pantry" },
      { name: "玉ねぎ (みじん切り)", amount: "1/4個分", category: "vegetable" },
      { name: "塩・コショウ", amount: "少々", category: "pantry" }
    ],
    steps: [
      "【タルタル】茹で卵1個を作り、フォークで潰す。みじん切りの玉ねぎ（水にさらして絞る）、マヨネーズ、塩コショウと混ぜる。",
      "【甘酢】醤油、酢、砂糖を耐熱容器に入れ、レンジで40秒加熱して砂糖を溶かす。",
      "鶏肉は厚みを均一にし、ひと口大に切る。塩コショウをして小麦粉、溶き卵(1個分)の順に衣をつける。",
      "フライパンに少し多めの油（深さ1cm程度）を熱し、鶏肉を入れて両面をじっくり揚げ焼き（約6〜7分）にする。",
      "火が通ったら油を切り、熱いうちに用意した甘酢に両面を浸してタレを吸わせる。",
      "お皿に盛り、特製タルタルソースをたっぷりかける。レタスやトマトを添えると完璧。"
    ]
  },
  {
    id: "r_15",
    name: "牛肉とごぼうの柳川風卵とじ",
    category: "beef",
    cookingTime: 20,
    description: "牛肉とささがきごぼうを甘辛い和風だしで煮込み、卵でとじた柳川風。ごぼうの豊かな香りと食物繊維が豊富。",
    nutrition: {
      calories: 560,
      protein: 26,
      fat: 20,
      carbs: 48,
      salt: 2.4,
      vitaminC: 8,
      calcium: 85,
      iron: 3.1
    },
    ingredients: [
      { name: "牛バラ薄切り肉", amount: "150g", category: "meat_fish" },
      { name: "ごぼう", amount: "1/2本 (80g)", category: "vegetable" },
      { name: "卵", amount: "2個", category: "meat_fish" },
      { name: "だし汁", amount: "150ml", category: "pantry" },
      { name: "醤油", amount: "大さじ2", category: "pantry" },
      { name: "みりん", amount: "大さじ2", category: "pantry" },
      { name: "砂糖", amount: "小さじ2", category: "pantry" },
      { name: "七味唐辛子", amount: "適宜", category: "pantry" }
    ],
    steps: [
      "ごぼうはピーラー等でささがきにし、水にさらしてアクを抜いた後、しっかり水気を切る。卵は軽く溶いておく。",
      "牛肉は3cm幅に切る。",
      "フライパンまたは鍋にだし汁、醤油、みりん、砂糖を入れて火にかける。煮立ったらごぼうを加える。",
      "ごぼうが少し柔らかくなったら、牛肉を重ならないように広げて加える。アクをすくいながら3〜4分煮る。",
      "牛肉に火が通ったら、溶き卵を外側から中心に向かって回し入れる。",
      "蓋をして弱火で1分ほど煮て、卵が好みの半熟加減になったら火を止める。お好みで七味唐辛子を振る。"
    ]
  },
  {
    id: "r_16",
    name: "ほっこり甘口ぶり大根",
    category: "fish",
    cookingTime: 30,
    description: "しっかりと下茹でした大根に、ぶりの旨味と甘辛い煮汁がじっくり染み込んだ和食の定番煮物。",
    nutrition: {
      calories: 420,
      protein: 24,
      fat: 16,
      carbs: 32,
      salt: 2.5,
      vitaminC: 15,
      calcium: 55,
      iron: 1.8
    },
    ingredients: [
      { name: "ぶりの切り身 (またはアラ)", amount: "250g", category: "meat_fish" },
      { name: "大根", amount: "1/3本 (約300g)", category: "vegetable" },
      { name: "生姜", amount: "1かけ", category: "vegetable" },
      { name: "だし汁", amount: "400ml", category: "pantry" },
      { name: "酒", amount: "100ml", category: "pantry" },
      { name: "醤油", amount: "大さじ3", category: "pantry" },
      { name: "みりん", amount: "大さじ3", category: "pantry" },
      { name: "砂糖", amount: "大さじ2", category: "pantry" }
    ],
    steps: [
      "大根は2cm厚さの輪切りにし、皮を厚めにむいて半月切りにする。米のとぎ汁（または水に米少々を加えたもの）で竹串が通るまで下茹でする。",
      "ぶりは一口大に切り、ザルに並べて熱湯を両面にさっと回しかけ（湯通し）、すぐに冷水にとってウロコや血合いを優しく洗い流し、水気を拭き取る。",
      "生姜は薄切りにする。",
      "鍋にだし汁、酒、みりん、砂糖、薄切り生姜を入れて火にかけ、沸騰したらぶりと下茹でした大根を加える。",
      "落とし蓋（またはアルミホイル）をして中火で10分煮る。",
      "醤油を加え、さらに弱火で15分ほど、煮汁が1/3程度になり大根に色が染みるまでじっくり煮込む。一度冷ますとより味が染みます。"
    ]
  },
  {
    id: "r_17",
    name: "カリッとジューシー豚こま竜田揚げ & レモン添え",
    category: "pork",
    cookingTime: 20,
    description: "安価な豚こま肉をぎゅっと丸めて竜田揚げに。外はカリッと、中はジューシーで食べ応え抜群。レモンを絞ってさっぱりと。",
    nutrition: {
      calories: 590,
      protein: 22,
      fat: 28,
      carbs: 38,
      salt: 1.9,
      vitaminC: 20,
      calcium: 35,
      iron: 1.6
    },
    ingredients: [
      { name: "豚こま切れ肉", amount: "250g", category: "meat_fish" },
      { name: "醤油", amount: "大さじ1.5", category: "pantry" },
      { name: "酒", amount: "大さじ1", category: "pantry" },
      { name: "おろし生姜", amount: "小さじ1", category: "pantry" },
      { name: "おろしにんにく", amount: "小さじ1/2", category: "pantry" },
      { name: "片栗粉", amount: "大さじ4", category: "pantry" },
      { name: "レモン", amount: "1/4個", category: "vegetable" },
      { name: "揚げ油", amount: "適量", category: "pantry" }
    ],
    steps: [
      "ボウルに豚こま切れ肉を入れ、醤油、酒、おろし生姜、おろしにんにくを加えてよく揉み込み、10分置く。",
      "下味をつけた豚肉をひと口大（ピンポン玉サイズ）に手でぎゅっと丸める。",
      "丸めた肉の表面に片栗粉をたっぷりとまぶす。",
      "フライパンに深さ2cmほどの揚げ油を170℃に熱し、肉を静かに入れる。",
      "3〜4分ほど触らずに揚げ、表面が固まってきたらひっくり返してさらに2分揚げる。",
      "最後に強火にして油の温度を上げ、表面をカリッとさせて油を切る。お皿に盛り、カットしたレモンを添える。"
    ]
  },
  {
    id: "r_18",
    name: "さっぱりおろしポン酢和風唐揚げ",
    category: "chicken",
    cookingTime: 20,
    description: "カリッと揚げた定番の鶏唐揚げに、たっぷりの大根おろしとポン酢醤油を合わせて。しつこくなく、さっぱりといただけます。",
    nutrition: {
      calories: 610,
      protein: 31,
      fat: 26,
      carbs: 34,
      salt: 2.2,
      vitaminC: 18,
      calcium: 48,
      iron: 2.0
    },
    ingredients: [
      { name: "鶏もも肉", amount: "300g", category: "meat_fish" },
      { name: "醤油・酒", amount: "各大さじ1", category: "pantry" },
      { name: "おろし生姜", amount: "小さじ1", category: "pantry" },
      { name: "片栗粉", amount: "大さじ3", category: "pantry" },
      { name: "小麦粉", amount: "大さじ1", category: "pantry" },
      { name: "大根", amount: "8cm (約150g)", category: "vegetable" },
      { name: "ポン酢醤油", amount: "大さじ3", category: "pantry" },
      { name: "万能ねぎ", amount: "2本", category: "vegetable" },
      { name: "揚げ油", amount: "適量", category: "pantry" }
    ],
    steps: [
      "鶏もも肉は余分な脂肪を取り除き、一口大に切る。ボウルに入れ、醤油、酒、おろし生姜を揉み込み15分置く。",
      "大根はおろして軽く水気を絞る。万能ねぎは小口切りにする。",
      "鶏肉に片栗粉と小麦粉を混ぜ合わせたものをしっかりとまぶす（小麦粉を少し混ぜることでジューシーさが保たれます）。",
      "170℃の油で鶏肉を4〜5分揚げる。一度取り出して3分余熱で火を通し、180℃に上げた油でさらに1分二度揚げしてカリッとさせる。",
      "唐揚げをお皿に盛り付け、上に大根おろしをたっぷりのせる。",
      "小口切りの万能ねぎを散らし、上からポン酢醤油を回しかけて完成。"
    ]
  },
  {
    id: "r_19",
    name: "牛肉とニンニクの芽の黒胡椒炒め",
    category: "beef",
    cookingTime: 15,
    description: "シャキシャキした食感のニンニクの芽と、旨味あふれる牛肉を中華風に。スパイシーな黒胡椒の香りが食欲をそそります。",
    nutrition: {
      calories: 630,
      protein: 24,
      fat: 25,
      carbs: 38,
      salt: 2.1,
      vitaminC: 22,
      calcium: 50,
      iron: 3.0
    },
    ingredients: [
      { name: "牛バラ薄切り肉 (またはもも)", amount: "200g", category: "meat_fish" },
      { name: "ニンニクの芽", amount: "1束 (約100g)", category: "vegetable" },
      { name: "エリンギ", amount: "1本", category: "vegetable" },
      { name: "醤油・酒", amount: "各大さじ1", category: "pantry" },
      { name: "オイスターソース", amount: "大さじ1", category: "pantry" },
      { name: "黒コショウ (粗挽き)", amount: "小さじ1/2", category: "pantry" },
      { name: "ごま油", amount: "大さじ1", category: "pantry" }
    ],
    steps: [
      "ニンニクの芽は4cm幅に切り、エリンギは縦半分に切ってから斜め薄切りにする。牛肉は4cm幅に切る。",
      "牛肉に酒小さじ1、醤油小さじ1（分量外）を揉み込んでおく。",
      "醤油、酒、オイスターソース、黒コショウを小さな器に合わせておく。",
      "フライパンにごま油を熱し、牛肉を強火で炒める。肉の色が変わったら一度取り出す。",
      "同じフライパンでニンニクの芽とエリンギを炒める。ニンニクの芽に火が通るまで中火で2分ほど炒める。",
      "牛肉を戻し入れ、合わせ調味料を加えて強火で手早く炒め合わせる。全体に黒胡椒が絡んだら完成。"
    ]
  },
  {
    id: "r_20",
    name: "ふんわりかに玉・甘酢あんかけ",
    category: "tofu_egg",
    cookingTime: 15,
    description: "カニカマとネギを入れてふんわりと焼き上げた卵焼きに、とろ〜り甘酸っぱい中華あんをかけた、シンプルながら大満足の一皿。",
    nutrition: {
      calories: 490,
      protein: 20,
      fat: 22,
      carbs: 26,
      salt: 2.4,
      vitaminC: 10,
      calcium: 80,
      iron: 2.1
    },
    ingredients: [
      { name: "卵", amount: "4個", category: "meat_fish" },
      { name: "カニカマ", amount: "1パック (約70g)", category: "meat_fish" },
      { name: "長ねぎ", amount: "1/3本", category: "vegetable" },
      { name: "鶏ガラスープ", amount: "100ml", category: "pantry" },
      { name: "ケチャップ・砂糖・酢", amount: "各大さじ1", category: "pantry" },
      { name: "醤油", amount: "小さじ2", category: "pantry" },
      { name: "片栗粉", amount: "小さじ1", category: "pantry" },
      { name: "ごま油 (炒め用・あん用)", amount: "計大さじ1.5", category: "pantry" }
    ],
    steps: [
      "長ねぎは斜め薄切りにする。カニカマは手で細かくほぐす。卵はボウルに割り入れ、塩少々（分量外）を加えてよく溶きほぐし、ねぎとカニカマを混ぜる。",
      "【甘酢あん】小鍋に鶏ガラスープ、ケチャップ、砂糖、酢、醤油、片栗粉を入れてよく混ぜてから火にかけ、混ぜながらとろみが出るまで煮詰め、仕上げにごま油小さじ1/2を加える。",
      "フライパンにごま油大さじ1を強火でしっかりと熱し、煙が少し立つくらいで卵液を一気に流し込む。",
      "菜箸で大きく外側から内側へ混ぜ、半熟状の円形に形を整える。底面が焼けたらひっくり返し、裏面もさっと焼く（焼きすぎず余熱で火を通す）。",
      "お皿にふんわりと丸く盛り付ける。",
      "上から温かい甘酢あんをたっぷりとかけて完成。"
    ]
  },
  {
    id: "r_21",
    name: "鶏むね肉のピカタ・トマトソース添え",
    category: "chicken",
    cookingTime: 20,
    description: "パサつきがちな鶏むね肉を卵とチーズの衣でコーティングし、しっとりジューシーに。酸味の効いたトマトソースとの相性が抜群。",
    nutrition: {
      calories: 550,
      protein: 36,
      fat: 20,
      carbs: 24,
      salt: 1.7,
      vitaminC: 20,
      calcium: 90,
      iron: 1.8
    },
    ingredients: [
      { name: "鶏むね肉", amount: "250g", category: "meat_fish" },
      { name: "卵", amount: "2個", category: "meat_fish" },
      { name: "粉チーズ", amount: "大さじ2", category: "pantry" },
      { name: "小麦粉", amount: "大さじ2", category: "pantry" },
      { name: "塩・コショウ", amount: "少々", category: "pantry" },
      { name: "カットトマト缶", amount: "1/2缶 (200g)", category: "pantry" },
      { name: "にんにく", amount: "1かけ", category: "vegetable" },
      { name: "オリーブオイル", amount: "大さじ1.5", category: "pantry" },
      { name: "砂糖・塩", amount: "各少々", category: "pantry" }
    ],
    steps: [
      "鶏むね肉は斜めにそぎ切りにして包丁の背で叩き、均等な厚さにする。塩・コショウを振る。",
      "小麦粉、溶き卵と粉チーズを混ぜ合わせた液を準備する。",
      "にんにくをつぶしてオリーブオイルで弱火にかけ、香りが出たらカットトマトを加えて5分煮詰め、砂糖・塩で調味してソースを作る。",
      "鶏肉に薄く小麦粉をまぶし（つける前に余分は払う）、卵・チーズ液にくぐらせる。",
      "フライパンにオリーブオイルを熱し、鶏肉を中火で両面2〜3分ずつ焼く。卵液を追加しながら何度かコーティングして厚みを出す。",
      "お皿にトマトソースを敷き、焼きたてのピカタを乗せて完成。"
    ]
  },
  {
    id: "r_22",
    name: "豚バラと白菜のミルフィーユ鍋風蒸し煮",
    category: "pork",
    cookingTime: 25,
    description: "豚バラと白菜を交互に重ねて、じっくり蒸し煮にするだけ。シンプルながら肉の旨味と白菜の甘みが溶け合った絶品おかず。",
    nutrition: {
      calories: 500,
      protein: 20,
      fat: 28,
      carbs: 18,
      salt: 2.0,
      vitaminC: 30,
      calcium: 90,
      iron: 1.5
    },
    ingredients: [
      { name: "豚バラ薄切り肉", amount: "200g", category: "meat_fish" },
      { name: "白菜", amount: "1/4株 (約400g)", category: "vegetable" },
      { name: "酒", amount: "大さじ2", category: "pantry" },
      { name: "塩", amount: "小さじ1/2", category: "pantry" },
      { name: "ポン酢醤油", amount: "大さじ3 (タレ用)", category: "pantry" },
      { name: "ごま油", amount: "小さじ1", category: "pantry" },
      { name: "万能ねぎ・柚子皮", amount: "お好みで", category: "vegetable" }
    ],
    steps: [
      "白菜は芯の部分と葉の部分を分け、芯は5cm幅に切る。豚バラ肉は白菜の幅に合わせて切る。",
      "鍋（または深めのフライパン）の底に白菜の芯を敷き、その上に豚バラ肉を広げる。さらに白菜の葉を重ね、これを繰り返す（ミルフィーユ状に）。",
      "酒と塩を全体に振りかけ、ごま油を回しかける。",
      "蓋をして中火にかけ、蒸気が上がったら弱火にして20分ほど蒸し煮にする。",
      "白菜がクタッとして豚肉に完全に火が通ったら完成。",
      "お皿に盛り、ポン酢醤油と小口切りの万能ねぎ、お好みで柚子皮をあしらっていただく。"
    ]
  },
  {
    id: "r_23",
    name: "鯵の南蛮漬け",
    category: "fish",
    cookingTime: 25,
    description: "揚げた鯵を甘酢と野菜のマリネ液に漬け込んだ、さっぱりした保存食にもなる一品。野菜の食感と酸味が箸を進めます。",
    nutrition: {
      calories: 470,
      protein: 24,
      fat: 18,
      carbs: 34,
      salt: 2.3,
      vitaminC: 28,
      calcium: 80,
      iron: 2.0
    },
    ingredients: [
      { name: "鯵（三枚おろし）", amount: "4枚", category: "meat_fish" },
      { name: "片栗粉", amount: "大さじ3", category: "pantry" },
      { name: "玉ねぎ", amount: "1/2個", category: "vegetable" },
      { name: "にんじん", amount: "1/4本", category: "vegetable" },
      { name: "ピーマン", amount: "1個", category: "vegetable" },
      { name: "酢", amount: "100ml", category: "pantry" },
      { name: "砂糖", amount: "大さじ3", category: "pantry" },
      { name: "醤油", amount: "大さじ1.5", category: "pantry" },
      { name: "赤唐辛子", amount: "1本", category: "pantry" },
      { name: "揚げ油", amount: "適量", category: "pantry" }
    ],
    steps: [
      "玉ねぎは薄切り、にんじんと ピーマンは細切りにして保存容器に入れる。",
      "酢、砂糖、醤油、輪切りにした赤唐辛子を小鍋に入れて一煮立ちさせ、砂糖を溶かして南蛮酢を作る。",
      "熱いうちに南蛮酢を野菜の入った保存容器に注ぎ、粗熱を取る。",
      "鯵の水気を拭き取り、塩コショウ（分量外）を振って片栗粉をまぶす。",
      "170℃の揚げ油で鯵をカリッと揚げる（3〜4分）。",
      "揚げたての鯵をすぐに南蛮酢のタレに漬け込む。15分以上（できれば1〜2時間）漬けると味が染みてより美味しくなる。"
    ]
  },
  {
    id: "r_24",
    name: "牛すき焼き風煮込み丼",
    category: "beef",
    cookingTime: 20,
    description: "甘辛い割り下で牛肉と豆腐、春菊をさっと煮込んだすき焼き風。卵黄をのせてご飯に盛れば立派なメインディッシュ。",
    nutrition: {
      calories: 680,
      protein: 30,
      fat: 24,
      carbs: 70,
      salt: 2.8,
      vitaminC: 12,
      calcium: 110,
      iron: 3.5
    },
    ingredients: [
      { name: "牛薄切り肉 (肩ロース)", amount: "200g", category: "meat_fish" },
      { name: "木綿豆腐", amount: "1/2丁", category: "meat_fish" },
      { name: "春菊", amount: "1/2束", category: "vegetable" },
      { name: "長ねぎ", amount: "1/2本", category: "vegetable" },
      { name: "しらたき", amount: "1/2袋", category: "pantry" },
      { name: "醤油・みりん・酒・砂糖", amount: "各大さじ2", category: "pantry" },
      { name: "卵黄", amount: "2個分", category: "meat_fish" },
      { name: "温かいご飯", amount: "2杯分", category: "pantry" }
    ],
    steps: [
      "豆腐は食べやすい大きさに切る。春菊は4cm幅、長ねぎは斜め切りにする。しらたきはアク抜きして食べやすく切る。",
      "醤油、みりん、酒、砂糖、水100ml（分量外）を混ぜ合わせて割り下を作る。",
      "フライパンまたは鍋を熱し（油は引かない）、牛肉を広げて入れ、表面が変わったら割り下の半量を加える。",
      "牛肉に火が通ったら取り出す。残りの割り下を加えて沸騰させ、豆腐、しらたき、長ねぎを加えて中火で5分煮る。",
      "春菊を加えてさっと煮る（煮過ぎない）。牛肉を戻し入れて全体を馴染ませる。",
      "ご飯を盛った丼に具材をのせ、中央に卵黄をのせて完成。絡めながらいただく。"
    ]
  },
  {
    id: "r_25",
    name: "ひじきと厚揚げの炒り煮 & 玉子焼き",
    category: "tofu_egg",
    cookingTime: 20,
    description: "鉄分と食物繊維が豊富なひじきと厚揚げをこっくりと炒り煮にして、だし巻き玉子を添えた栄養バランス抜群の和定食風。",
    nutrition: {
      calories: 460,
      protein: 22,
      fat: 20,
      carbs: 28,
      salt: 2.3,
      vitaminC: 8,
      calcium: 220,
      iron: 4.2
    },
    ingredients: [
      { name: "乾燥ひじき", amount: "20g", category: "pantry" },
      { name: "厚揚げ", amount: "1枚 (150g)", category: "meat_fish" },
      { name: "にんじん", amount: "1/4本", category: "vegetable" },
      { name: "醤油・みりん・砂糖", amount: "各大さじ1.5", category: "pantry" },
      { name: "だし汁", amount: "100ml", category: "pantry" },
      { name: "ごま油", amount: "小さじ1", category: "pantry" },
      { name: "卵", amount: "3個", category: "meat_fish" },
      { name: "だし汁 (玉子用)", amount: "大さじ2", category: "pantry" },
      { name: "薄口醤油・みりん (玉子用)", amount: "各小さじ1", category: "pantry" }
    ],
    steps: [
      "ひじきは水で15分戻してザルに上げる。厚揚げは油抜きして2cm角に切る。にんじんは細切りにする。",
      "卵を溶き、だし汁、薄口醤油、みりんを加えてよく混ぜる。玉子焼き器に油をなじませ、弱火でだし巻き玉子を作る。",
      "鍋またはフライパンにごま油を熱し、にんじんを炒めてしんなりしたらひじきを加えてさらに炒める。",
      "厚揚げ、だし汁、醤油、みりん、砂糖を加える。",
      "落とし蓋をして中火で8〜10分、汁気が少なくなるまで炒り煮にする。",
      "器にひじきの炒り煮を盛り、食べやすく切っただし巻き玉子を添えて完成。"
    ]
  },
  {
    id: "r_26",
    name: "イワシの梅煮 & ほうれん草のおひたし",
    category: "fish",
    cookingTime: 20,
    description: "青魚の栄養たっぷりのイワシを梅干しでさっぱりと煮込んだ、夏向きの一品。カルシウムも摂取できます。",
    nutrition: {
      calories: 480,
      protein: 26,
      fat: 18,
      carbs: 24,
      salt: 2.6,
      vitaminC: 22,
      calcium: 160,
      iron: 2.4
    },
    ingredients: [
      { name: "イワシ (開き)", amount: "4枚", category: "meat_fish" },
      { name: "梅干し", amount: "2個", category: "pantry" },
      { name: "生姜", amount: "1かけ", category: "vegetable" },
      { name: "醤油", amount: "大さじ1.5", category: "pantry" },
      { name: "砂糖", amount: "小さじ1", category: "pantry" },
      { name: "みりん", amount: "大さじ1", category: "pantry" },
      { name: "ほうれん草", amount: "1束", category: "vegetable" },
      { name: "だし汁 (おひたし用)", amount: "100ml", category: "pantry" }
    ],
    steps: [
      "梅干しは種を取り除き、生姜は薄切りにする。ほうれん草は塩ゆでして冷まし、3cm幅に切る。",
      "鍋に水200ml、醤油、砂糖、みりん、生姜、梅干しを入れて火にかける。",
      "煮立ったらイワシを加え、落とし蓋をして12分煮込む。",
      "ほうれん草の水気を絞り、だし汁、塩少々（分量外）で和える。",
      "イワシと梅煮の汁を盛り付け、ほうれん草のおひたしを添える。"
    ]
  },
  {
    id: "r_27",
    name: "豚肉と小松菜の味噌炒め",
    category: "pork",
    cookingTime: 15,
    description: "甘めの味噌でコクを出した豚肉と小松菜の炒め。鉄分たっぷりの小松菜で女性にも嬉しい一品。",
    nutrition: {
      calories: 550,
      protein: 24,
      fat: 26,
      carbs: 28,
      salt: 2.4,
      vitaminC: 40,
      calcium: 120,
      iron: 3.2
    },
    ingredients: [
      { name: "豚肩ロース薄切り肉", amount: "200g", category: "meat_fish" },
      { name: "小松菜", amount: "1束 (200g)", category: "vegetable" },
      { name: "にんにく", amount: "1かけ", category: "vegetable" },
      { name: "赤味噌", amount: "大さじ1.5", category: "pantry" },
      { name: "砂糖", amount: "小さじ1", category: "pantry" },
      { name: "酒", amount: "大さじ1", category: "pantry" },
      { name: "ごま油", amount: "大さじ1", category: "pantry" }
    ],
    steps: [
      "小松菜は4cm幅に切り、にんにくはみじん切りにする。",
      "赤味噌、砂糖、酒を合わせておく。",
      "フライパンにごま油を熱し、にんにくを炒める。香りが出たら豚肉を加えて炒める。",
      "肉の色が変わったら小松菜を加え、全体がしんなりするまで炒める。",
      "合わせた調味料を加えて、全体を絡めたら完成。"
    ]
  },
  {
    id: "r_28",
    name: "鶏肉の梅しそ焼き & きゅうりのごま和え",
    category: "chicken",
    cookingTime: 18,
    description: "梅干しと青しその爽やかな香りで、鶏肉をさっぱりと焼き上げた夏向きの一品。冷めても美味しい。",
    nutrition: {
      calories: 520,
      protein: 30,
      fat: 18,
      carbs: 32,
      salt: 1.9,
      vitaminC: 30,
      calcium: 45,
      iron: 1.7
    },
    ingredients: [
      { name: "鶏むね肉", amount: "250g", category: "meat_fish" },
      { name: "梅干し", amount: "2個", category: "pantry" },
      { name: "青しそ", amount: "8枚", category: "vegetable" },
      { name: "醤油", amount: "大さじ1", category: "pantry" },
      { name: "みりん", amount: "大さじ1", category: "pantry" },
      { name: "きゅうり", amount: "2本", category: "vegetable" },
      { name: "白いりごま", amount: "大さじ1", category: "pantry" }
    ],
    steps: [
      "梅干しは種を取り除き、軽く叩く。鶏肉は厚さを均一にするため包丁の背で叩く。",
      "青しそと梅干しで鶏肉をはさむ。塩少々（分量外）を振る。",
      "フライパンにサラダ油を引き、鶏肉を中火で両面焼く（約6分）。",
      "醤油とみりんを加えて、タレを絡める。",
      "きゅうりはすりこぎで叩き、塩揉みしてから絞り、ごま油と白ごマで和える。",
      "焼いた鶏肉をカットして盛り付け、きゅうりのごま和えを添える。"
    ]
  },
  {
    id: "r_29",
    name: "牛肉のしぐれ煮 & 人参のしり付け",
    category: "beef",
    cookingTime: 20,
    description: "牛肉を山椒香る甘辛だれで煮詰めた佃煮風。ご飯が進む懐かしの一品。",
    nutrition: {
      calories: 580,
      protein: 24,
      fat: 22,
      carbs: 45,
      salt: 2.5,
      vitaminC: 25,
      calcium: 35,
      iron: 2.8
    },
    ingredients: [
      { name: "牛こま切れ肉", amount: "200g", category: "meat_fish" },
      { name: "生姜", amount: "1.5かけ", category: "vegetable" },
      { name: "醤油", amount: "大さじ2.5", category: "pantry" },
      { name: "砂糖", amount: "大さじ2", category: "pantry" },
      { name: "みりん", amount: "大さじ1.5", category: "pantry" },
      { name: "山椒", amount: "少々", category: "pantry" },
      { name: "にんじん", amount: "1本", category: "vegetable" },
      { name: "白ごま", amount: "大さじ1", category: "pantry" }
    ],
    steps: [
      "生姜は細切りにする。にんじんは千切りにして塩少々（分量外）で揉んで15分置き、水気を絞る。",
      "フライパンに牛肉と生姜を入れ、中火で肉をほぐしながら炒める。",
      "肉の色が変わったら、醤油、砂糖、みりんを加えて、汁気がなくなるまで炒り煮にする。",
      "山椒を振りかける。",
      "にんじんを炒め、白ごまと塩で味を整える。",
      "ご飯の上に盛り付けて完成。"
    ]
  },
  {
    id: "r_30",
    name: "豆腐と大根の煮物 & 枝豆",
    category: "tofu_egg",
    cookingTime: 25,
    description: "淡白な豆腐と大根をだし汁でじっくり煮込んだ、家庭的で温かみのある料理。冬に特におすすめ。",
    nutrition: {
      calories: 420,
      protein: 20,
      fat: 12,
      carbs: 32,
      salt: 2.2,
      vitaminC: 28,
      calcium: 190,
      iron: 2.3
    },
    ingredients: [
      { name: "木綿豆腐", amount: "1丁 (350g)", category: "meat_fish" },
      { name: "大根", amount: "1/4本 (200g)", category: "vegetable" },
      { name: "だし汁", amount: "300ml", category: "pantry" },
      { name: "醤油", amount: "大さじ2", category: "pantry" },
      { name: "みりん", amount: "大さじ1.5", category: "pantry" },
      { name: "砂糖", amount: "小さじ1", category: "pantry" },
      { name: "生姜", amount: "1/2かけ", category: "vegetable" },
      { name: "冷凍枝豆", amount: "80g", category: "vegetable" }
    ],
    steps: [
      "豆腐は1.5cm厚さにカット。大根は厚めに皮をむき、2cm厚さに切り、面取りをする。",
      "大根は別途塩茹でして、竹串が通るまで加熱しておく。",
      "鍋にだし汁、醤油、みりん、砂糖、薄切り生姜を入れて火にかける。",
      "沸騰したら豆腐と大根を入れ、落とし蓋をして15分煮込む。",
      "枝豆は塩茹でして加える。",
      "器に盛り付けて、煮汁を注ぐ。"
    ]
  },
  {
    id: "r_31",
    name: "マグロのステーキ・ワサビ醤油",
    category: "fish",
    cookingTime: 12,
    description: "表面をさっと焼いてレアに仕上げたマグロのステーキ。わさび醤油でピリッと爽やかに。",
    nutrition: {
      calories: 520,
      protein: 32,
      fat: 20,
      carbs: 18,
      salt: 1.8,
      vitaminC: 12,
      calcium: 35,
      iron: 2.8
    },
    ingredients: [
      { name: "マグロ中トロ", amount: "200g (2枚)", category: "meat_fish" },
      { name: "わさび", amount: "小さじ1", category: "pantry" },
      { name: "醤油", amount: "大さじ2", category: "pantry" },
      { name: "塩・コショウ", amount: "少々", category: "pantry" },
      { name: "サラダ油", amount: "小さじ1", category: "pantry" },
      { name: "刻み青ねぎ", amount: "少々", category: "vegetable" },
      { name: "大根", amount: "5cm", category: "vegetable" }
    ],
    steps: [
      "マグロに塩コショウを振る。",
      "フライパンに油を熱し、強火でマグロの両面を約1分ずつさっと焼く（表面だけ）。",
      "わさびと醤油を合わせておく。",
      "大根をおろし、軽く水気を絞る。",
      "マグロを食べやすく切り、大根おろしとともにお皿に盛る。",
      "わさび醤油をかけ、青ねぎを散らして完成。"
    ]
  },
  {
    id: "r_32",
    name: "豚肉と玉ねぎの甘辛丼 & 漬物",
    category: "pork",
    cookingTime: 15,
    description: "甘辛い味付けの豚肉と玉ねぎで、ご飯が進む丼。簡単で時短のおいしさ。",
    nutrition: {
      calories: 650,
      protein: 24,
      fat: 24,
      carbs: 72,
      salt: 2.4,
      vitaminC: 20,
      calcium: 40,
      iron: 2.0
    },
    ingredients: [
      { name: "豚肩ロース薄切り肉", amount: "200g", category: "meat_fish" },
      { name: "玉ねぎ", amount: "1個", category: "vegetable" },
      { name: "醤油", amount: "大さじ2", category: "pantry" },
      { name: "砂糖", amount: "大さじ1.5", category: "pantry" },
      { name: "みりん", amount: "大さじ1", category: "pantry" },
      { name: "酒", amount: "大さじ1", category: "pantry" },
      { name: "温かいご飯", amount: "2杯分", category: "pantry" },
      { name: "福神漬け", amount: "適量", category: "pantry" }
    ],
    steps: [
      "玉ねぎは薄切りにする。",
      "醤油、砂糖、みりん、酒を混ぜておく。",
      "フライパンを熱し、豚肉を広げて炒める。色が変わったら玉ねぎを加える。",
      "玉ねぎがしんなりしたら、合わせた調味料を加える。",
      "汁気がやや残る状態まで煮詰める（約3分）。",
      "ご飯を盛った丼に、豚肉と玉ねぎをタレごとのせる。福神漬けを添えて完成。"
    ]
  },
  {
    id: "r_33",
    name: "鶏肉とアスパラのバター醤油炒め",
    category: "chicken",
    cookingTime: 15,
    description: "バターの香りが心地よい洋風の炒め物。アスパラの食感と甘辛い味付けが絶妙。",
    nutrition: {
      calories: 580,
      protein: 32,
      fat: 24,
      carbs: 28,
      salt: 1.8,
      vitaminC: 25,
      calcium: 55,
      iron: 1.9
    },
    ingredients: [
      { name: "鶏もも肉", amount: "250g", category: "meat_fish" },
      { name: "アスパラガス", amount: "1束 (150g)", category: "vegetable" },
      { name: "バター", amount: "20g", category: "pantry" },
      { name: "醤油", amount: "大さじ1.5", category: "pantry" },
      { name: "みりん", amount: "大さじ1", category: "pantry" },
      { name: "塩・コショウ", amount: "少々", category: "pantry" },
      { name: "にんにく", amount: "1かけ", category: "vegetable" }
    ],
    steps: [
      "鶏肉は2cm角に切る。アスパラは3cm幅に切る。にんにくはみじん切りにする。",
      "醤油とみりんを混ぜておく。",
      "フライパンにバター半量を熱し、鶏肉を炒める。焼き色がついたら取り出す。",
      "同じフライパンにバター残量とにんにくを加え、香りが出たらアスパラを炒める。",
      "アスパラがしんなりしたら鶏肉を戻し、合わせた調味料を加えて、全体を絡める。",
      "塩コショウで味を整えて完成。"
    ]
  },
  {
    id: "r_34",
    name: "牛肉と昆布の炒め煮",
    category: "beef",
    cookingTime: 18,
    description: "昆布の旨味と食物繊維がたっぷり。ご飯にかけても、そのままでも美味しい和風おかず。",
    nutrition: {
      calories: 540,
      protein: 25,
      fat: 20,
      carbs: 38,
      salt: 2.6,
      vitaminC: 8,
      calcium: 95,
      iron: 3.5
    },
    ingredients: [
      { name: "牛薄切り肉", amount: "180g", category: "meat_fish" },
      { name: "乾燥昆布", amount: "20g", category: "pantry" },
      { name: "醤油", amount: "大さじ2", category: "pantry" },
      { name: "砂糖", amount: "大さじ1", category: "pantry" },
      { name: "みりん", amount: "大さじ1", category: "pantry" },
      { name: "酒", amount: "大さじ1", category: "pantry" },
      { name: "唐辛子", amount: "1/2本", category: "vegetable" }
    ],
    steps: [
      "昆布は水で戻し、食べやすい大きさに切る。戻し汁は取っておく。",
      "牛肉は食べやすい大きさに切る。",
      "鍋に昆布の戻し汁100mlと牛肉、昆布を入れて火にかける。",
      "煮立ったら醤油、砂糖、みりん、酒を加える。",
      "落とし蓋をして中火で10分、汁気が少なくなるまで煮詰める。",
      "唐辛子を加えて風味を整えて完成。"
    ]
  },
  {
    id: "r_35",
    name: "白身魚のグラタン & グリーンサラダ",
    category: "fish",
    cookingTime: 25,
    description: "淡白な白身魚をホワイトソースで包み、チーズをかけてこんがり焼いた洋食風のおかず。",
    nutrition: {
      calories: 580,
      protein: 28,
      fat: 24,
      carbs: 35,
      salt: 2.0,
      vitaminC: 35,
      calcium: 180,
      iron: 1.8
    },
    ingredients: [
      { name: "スズキまたはヒラメ", amount: "200g (2切れ)", category: "meat_fish" },
      { name: "バター", amount: "25g", category: "pantry" },
      { name: "小麦粉", amount: "大さじ2", category: "pantry" },
      { name: "牛乳", amount: "250ml", category: "pantry" },
      { name: "玉ねぎ", amount: "1/4個", category: "vegetable" },
      { name: "塩・コショウ", amount: "少々", category: "pantry" },
      { name: "ピザ用チーズ", amount: "大さじ3", category: "pantry" },
      { name: "レタス", amount: "50g", category: "vegetable" }
    ],
    steps: [
      "玉ねぎをみじん切りにしてバターで炒め、小麦粉を加えて炒める。",
      "牛乳を少量ずつ加えながら、ホワイトソースを作る。塩コショウで味を整える。",
      "耐熱皿に白身魚を並べ、ホワイトソースをかけてチーズをかける。",
      "200℃のオーブンで12分焼く。",
      "レタスを盛ったサラダを添えて完成。"
    ]
  },
  {
    id: "r_36",
    name: "豚肉の紅茶煮 & 粟いも",
    category: "pork",
    cookingTime: 30,
    description: "豚肉を紅茶で煮込むことで、肉が柔らかく香り高く仕上がる大人っぽい一品。",
    nutrition: {
      calories: 610,
      protein: 28,
      fat: 26,
      carbs: 42,
      salt: 2.2,
      vitaminC: 18,
      calcium: 45,
      iron: 2.3
    },
    ingredients: [
      { name: "豚肩ロース塊", amount: "300g", category: "meat_fish" },
      { name: "紅茶 (ティーバッグ)", amount: "2個", category: "pantry" },
      { name: "砂糖", amount: "大さじ2", category: "pantry" },
      { name: "醤油", amount: "大さじ1.5", category: "pantry" },
      { name: "塩", amount: "小さじ1/2", category: "pantry" },
      { name: "里芋", amount: "300g", category: "vegetable" },
      { name: "人参", amount: "1本", category: "vegetable" }
    ],
    steps: [
      "豚肉は塩を揉み込んで15分置き、表面を焼き色がつくまで炒める。",
      "鍋に水400ml、紅茶を入れて火にかけ、砂糖、醤油を加える。",
      "焼いた豚肉を加え、落とし蓋をして中火で25分煮込む。",
      "里芋と人参を加えて、さらに15分煮込む。",
      "豚肉を取り出してカットし、野菜とともに盛り付ける。"
    ]
  },
  {
    id: "r_37",
    name: "鶏肉の味噌漬け焼き & ナス田楽",
    category: "chicken",
    cookingTime: 22,
    description: "味噌漬けにした鶏肉をグリルで焼き、焦がしていい香りに。ナスの田楽は味噌とみりんの甘めの味付け。",
    nutrition: {
      calories: 600,
      protein: 31,
      fat: 22,
      carbs: 36,
      salt: 2.5,
      vitaminC: 32,
      calcium: 65,
      iron: 2.4
    },
    ingredients: [
      { name: "鶏もも肉", amount: "300g", category: "meat_fish" },
      { name: "赤味噌", amount: "大さじ2", category: "pantry" },
      { name: "砂糖", amount: "小さじ1", category: "pantry" },
      { name: "みりん", amount: "大さじ1", category: "pantry" },
      { name: "ナス", amount: "2本", category: "vegetable" },
      { name: "赤味噌 (田楽用)", amount: "大さじ2", category: "pantry" },
      { name: "みりん (田楽用)", amount: "大さじ1", category: "pantry" },
      { name: "白ごま", amount: "小さじ1", category: "pantry" }
    ],
    steps: [
      "赤味噌、砂糖、みりんを混ぜて、鶏肉に塗り、15分以上漬ける。",
      "グリルまたはフライパンで、皮目から中火で焼く（約8分）。味噌が焦げかけるまで焼く。",
      "ナスを縦半分に切り、格子状に切込みを入れて、軽く焼く（塩を振って素焼き）。",
      "赤味噌とみりんを混ぜたものをナスに塗り、トースターで焦げ目がつくまで焼く。",
      "白ごまをかけて完成。鶏肉と一緒に盛り付ける。"
    ]
  },
  {
    id: "r_38",
    name: "牛肉と春キャベツのペッパー炒め",
    category: "beef",
    cookingTime: 15,
    description: "春キャベツの甘さと牛肉の旨味、粗挽きペッパーの香りが織り交ぜられた、ハイシーズンの掘り出し物。",
    nutrition: {
      calories: 590,
      protein: 26,
      fat: 24,
      carbs: 35,
      salt: 2.0,
      vitaminC: 65,
      calcium: 48,
      iron: 2.6
    },
    ingredients: [
      { name: "牛もも薄切り肉", amount: "200g", category: "meat_fish" },
      { name: "春キャベツ", amount: "1/4個 (200g)", category: "vegetable" },
      { name: "赤パプリカ", amount: "1/2個", category: "vegetable" },
      { name: "塩・黒コショウ", amount: "少々", category: "pantry" },
      { name: "ガーリックオイル", amount: "大さじ1.5", category: "pantry" },
      { name: "醤油", amount: "小さじ2", category: "pantry" },
      { name: "砂糖", amount: "少々", category: "pantry" }
    ],
    steps: [
      "春キャベツと赤パプリカは粗く切る。牛肉に塩・黒コショウを振る。",
      "フライパンにガーリックオイルを熱し、牛肉を強火で炒める。焼き色がついたら取り出す。",
      "同じフライパンでキャベツとパプリカを炒める。全体に油が回ったら牛肉を戻す。",
      "醤油と砂糖を加えて素早く絡める。黒コショウを追加で振って完成。"
    ]
  },
  {
    id: "r_39",
    name: "絹ごし豆腐のステーキ・キノコあんかけ",
    category: "tofu_egg",
    cookingTime: 15,
    description: "柔らかな絹ごし豆腐を表面だけ焼いて、香ばしいキノコあんをかけた優しい味わい。",
    nutrition: {
      calories: 420,
      protein: 18,
      fat: 16,
      carbs: 28,
      salt: 2.3,
      vitaminC: 15,
      calcium: 170,
      iron: 2.5
    },
    ingredients: [
      { name: "絹ごし豆腐", amount: "1丁 (300g)", category: "meat_fish" },
      { name: "しめじ", amount: "150g", category: "vegetable" },
      { name: "えのき", amount: "100g", category: "vegetable" },
      { name: "だし汁", amount: "150ml", category: "pantry" },
      { name: "薄口醤油", amount: "大さじ1.5", category: "pantry" },
      { name: "みりん", amount: "大さじ1", category: "pantry" },
      { name: "片栗粉", amount: "小さじ1.5", category: "pantry" },
      { name: "ごま油", amount: "小さじ1", category: "pantry" }
    ],
    steps: [
      "豆腐は半分に切り、軽くペーパータオルで包んで15分置く。",
      "キノコは軽く炒ったら、だし汁、醤油、みりんを加えて煮詰める。",
      "水溶き片栗粉でとろみをつけ、ごま油を加える。",
      "フライパンを熱し、豆腐の表面だけサッと焼く（中身は温かいままで）。",
      "お皿に豆腐をのせ、キノコあんをたっぷりかけて完成。"
    ]
  },
  {
    id: "r_40",
    name: "カツオのマリネ & 新玉ねぎサラダ",
    category: "fish",
    cookingTime: 18,
    description: "生食用のカツオを軽く炙ってマリネに。新玉ねぎの甘さとの組み合わせが春らしい。",
    nutrition: {
      calories: 460,
      protein: 28,
      fat: 16,
      carbs: 22,
      salt: 1.9,
      vitaminC: 28,
      calcium: 40,
      iron: 2.0
    },
    ingredients: [
      { name: "カツオ（刺身用）", amount: "200g", category: "meat_fish" },
      { name: "新玉ねぎ", amount: "1個", category: "vegetable" },
      { name: "レモン汁", amount: "大さじ2", category: "pantry" },
      { name: "オリーブオイル", amount: "大さじ2", category: "pantry" },
      { name: "ニンニク", amount: "1かけ", category: "vegetable" },
      { name: "バルサミコ酢", amount: "小さじ1", category: "pantry" },
      { name: "塩・コショウ", amount: "少々", category: "pantry" },
      { name: "パセリ", amount: "少々", category: "vegetable" }
    ],
    steps: [
      "フライパンを強火で熱し、カツオの表面を約20秒ずつ炙って取り出す。",
      "新玉ねぎはスライスして、冷水にさらして絞る。",
      "レモン汁、オリーブオイル、つぶしたニンニク、バルサミコ酢、塩コショウで漬け汁を作る。",
      "炙ったカツオを漬け汁に浸す。",
      "お皿に新玉ねぎサラダを盛り、カツオをのせ、パセリを散らして完成。"
    ]
  },
  {
    id: "r_41",
    name: "豚肉の西京漬け焼き & 蕪の和え物",
    category: "pork",
    cookingTime: 20,
    description: "白みその香りで上品に仕上げた豚肉。蕪の淡白な味わいとの組み合わせ。",
    nutrition: {
      calories: 540,
      protein: 26,
      fat: 22,
      carbs: 28,
      salt: 2.4,
      vitaminC: 32,
      calcium: 50,
      iron: 2.1
    },
    ingredients: [
      { name: "豚ロース厚切り肉", amount: "200g", category: "meat_fish" },
      { name: "白みそ", amount: "大さじ2", category: "pantry" },
      { name: "酒・みりん", amount: "各大さじ1", category: "pantry" },
      { name: "蕪", amount: "1個", category: "vegetable" },
      { name: "蕪の葉", amount: "適量", category: "vegetable" },
      { name: "昆布だし", amount: "大さじ2", category: "pantry" },
      { name: "塩", amount: "少々", category: "pantry" }
    ],
    steps: [
      "白みそ、酒、みりんを混ぜて豚肉に塗り、一晩漬ける（または4時間以上）。",
      "グリルまたはフライパンで、みそを軽く拭き取ってから中火で焼く。",
      "蕪は皮をむいて千切りに、葉は塩茹でして細かく刻む。",
      "蕪、蕪の葉、昆布だし、塩で和える。",
      "焼いた豚肉を食べやすく切り、蕪の和え物を添えて完成。"
    ]
  },
  {
    id: "r_42",
    name: "鶏肉の塩焼き & 空心菜の炒め",
    category: "chicken",
    cookingTime: 16,
    description: "シンプルに塩で焼いた鶏肉。空心菜の中華風炒めとの組み合わせ。",
    nutrition: {
      calories: 520,
      protein: 32,
      fat: 18,
      carbs: 26,
      salt: 2.0,
      vitaminC: 45,
      calcium: 85,
      iron: 2.3
    },
    ingredients: [
      { name: "鶏もも肉", amount: "250g", category: "meat_fish" },
      { name: "塩・コショウ", amount: "少々", category: "pantry" },
      { name: "空心菜", amount: "1束 (200g)", category: "vegetable" },
      { name: "ニンニク", amount: "2かけ", category: "vegetable" },
      { name: "豆板醤", amount: "小さじ1", category: "pantry" },
      { name: "醤油", amount: "大さじ1", category: "pantry" },
      { name: "ごま油", amount: "大さじ1", category: "pantry" }
    ],
    steps: [
      "鶏肉に塩コショウを振り、20分置く。",
      "グリルまたはフライパンで皮目から中火で焼く（約8分）。ひっくり返して4分焼く。",
      "空心菜は4cm幅に切り、ニンニクはみじん切りにする。",
      "フライパンにごま油を熱し、ニンニク、豆板醤を炒める。香りが出たら空心菜を加える。",
      "空心菜がしんなりしたら、醤油を加えて絡める。",
      "焼いた鶏肉を食べやすく切り、空心菜炒めを添えて完成。"
    ]
  },
  {
    id: "r_43",
    name: "牛肉の味噌炒め & 山うどの食感",
    category: "beef",
    cookingTime: 18,
    description: "牛肉の旨味と味噌のコク。春が旬の山うどのシャキシャキ食感が引き立つ。",
    nutrition: {
      calories: 570,
      protein: 24,
      fat: 22,
      carbs: 40,
      salt: 2.5,
      vitaminC: 20,
      calcium: 40,
      iron: 2.7
    },
    ingredients: [
      { name: "牛バラ薄切り肉", amount: "180g", category: "meat_fish" },
      { name: "山うど", amount: "1本 (100g)", category: "vegetable" },
      { name: "赤味噌", amount: "大さじ1.5", category: "pantry" },
      { name: "砂糖", amount: "小さじ1", category: "pantry" },
      { name: "酒・みりん", amount: "各大さじ1", category: "pantry" },
      { name: "ごま油", amount: "大さじ1", category: "pantry" },
      { name: "白ごま", amount: "小さじ1", category: "pantry" }
    ],
    steps: [
      "山うどは皮をむき、斜め薄切りにして水にさらす。",
      "赤味噌、砂糖、酒、みりんを混ぜておく。",
      "フライパンにごま油を熱し、牛肉を炒める。色が変わったら山うどを加える。",
      "全体に火が通ったら、合わせた調味料を加えて絡める。",
      "白ごまを振りかけて完成。"
    ]
  },
  {
    id: "r_44",
    name: "野菜たっぷり春巻き & 甘酢ソース",
    category: "tofu_egg",
    cookingTime: 20,
    description: "春キャベツや新玉ねぎ、人参などの旬の野菜をたっぷり詰めた春巻き。揚げたてをどうぞ。",
    nutrition: {
      calories: 460,
      protein: 12,
      fat: 20,
      carbs: 42,
      salt: 1.8,
      vitaminC: 35,
      calcium: 50,
      iron: 1.8
    },
    ingredients: [
      { name: "春巻きの皮", amount: "8枚", category: "pantry" },
      { name: "春キャベツ", amount: "200g", category: "vegetable" },
      { name: "人参", amount: "1/2本", category: "vegetable" },
      { name: "新玉ねぎ", amount: "1/4個", category: "vegetable" },
      { name: "豆もやし", amount: "50g", category: "vegetable" },
      { name: "水溶き片栗粉", amount: "少々", category: "pantry" },
      { name: "砂糖・酢・醤油", amount: "各大さじ2", category: "pantry" },
      { name: "揚げ油", amount: "適量", category: "pantry" }
    ],
    steps: [
      "野菜をすべて細切りにして、塩をふって15分置き、水気をしっかり絞る。",
      "春巻きの皮を準備し、野菜を芯にして巻く。水溶き片栗粉で接着させる。",
      "甘酢ソースを作る：砂糖、酢、醤油、水大さじ1を混ぜ、レンジで30秒加熱する。",
      "170℃の油で春巻きを揚げる（約4分）。",
      "こんがり色づいたら油を切り、甘酢ソースにつけて完成。"
    ]
  },
  {
    id: "r_45",
    name: "鰆の白ワイン蒸し & レモンバター",
    category: "fish",
    cookingTime: 22,
    description: "春が旬の鰆を白ワインで上品に蒸し上げた洋風の一品。バターの香りが心地よい。",
    nutrition: {
      calories: 500,
      protein: 30,
      fat: 18,
      carbs: 20,
      salt: 1.7,
      vitaminC: 28,
      calcium: 55,
      iron: 1.9
    },
    ingredients: [
      { name: "鰆の切り身", amount: "200g (2切れ)", category: "meat_fish" },
      { name: "白ワイン", amount: "100ml", category: "pantry" },
      { name: "バター", amount: "20g", category: "pantry" },
      { name: "レモン汁", amount: "小さじ2", category: "pantry" },
      { name: "玉ねぎ", amount: "1/4個", category: "vegetable" },
      { name: "マッシュルーム", amount: "100g", category: "vegetable" },
      { name: "塩・コショウ", amount: "少々", category: "pantry" },
      { name: "パセリ", amount: "少々", category: "vegetable" }
    ],
    steps: [
      "玉ねぎとマッシュルームを薄切りにする。",
      "ホイル紙に玉ねぎとマッシュルームを敷き、鰆をのせて塩コショウを振る。",
      "白ワインを注ぎ、バターをのせて、ホイルで包む。",
      "フライパンに水を張り、170℃のオーブンで12分蒸す。",
      "開いてレモン汁をかけ、パセリを散らして完成。"
    ]
  },
  {
    id: "r_46",
    name: "鮭とホタテのバター醤油ソテー & アスパラガス",
    category: "fish",
    cookingTime: 18,
    description: "肉厚のサーモンとうま味たっぷりのホタテを、コクのあるバター醤油で香ばしくソテーしました。",
    nutrition: {
      calories: 510,
      protein: 29,
      fat: 19,
      carbs: 21,
      salt: 1.8,
      vitaminC: 15,
      calcium: 40,
      iron: 1.6
    },
    ingredients: [
      { name: "生鮭の切り身", amount: "2切れ", category: "meat_fish" },
      { name: "ホタテ貝柱", amount: "4個", category: "meat_fish" },
      { name: "アスパラガス", amount: "4本", category: "vegetable" },
      { name: "バター", amount: "15g", category: "pantry" },
      { name: "醤油", amount: "大さじ1", category: "pantry" },
      { name: "酒", amount: "大さじ1", category: "pantry" },
      { name: "塩・コショウ", amount: "少々", category: "pantry" }
    ],
    steps: [
      "鮭とホタテに軽く塩コショウを振る。アスパラガスは根元の硬い部分を切り、4cm幅に斜め切りにする。",
      "フライパンにバター10gを熱し、アスパラガスを中火でソテーして火が通ったら一度取り出す。",
      "同じフライパンに残りのバターを加え、鮭とホタテを入れて中火で両面を香ばしく焼く。",
      "両面に火が通ったら、酒を振り入れてアルコールを飛ばす。",
      "アスパラガスをフライパンに戻し、醤油を鍋肌から回し入れ、全体に絡めながらさっと炒め合わせる。"
    ]
  },
  {
    id: "r_47",
    name: "カレイの煮付け & ほうれん草のお浸し",
    category: "fish",
    cookingTime: 20,
    description: "しっとり柔らかいカレイの身に、甘辛い煮汁が優しく染み込んだ定番の煮魚料理。",
    nutrition: {
      calories: 430,
      protein: 25,
      fat: 9,
      carbs: 28,
      salt: 2.2,
      vitaminC: 22,
      calcium: 90,
      iron: 1.8
    },
    ingredients: [
      { name: "カレイの切り身", amount: "2切れ", category: "meat_fish" },
      { name: "生姜", amount: "1かけ", category: "vegetable" },
      { name: "長ねぎ", amount: "1/2本", category: "vegetable" },
      { name: "だし汁", amount: "150ml", category: "pantry" },
      { name: "醤油", amount: "大さじ2", category: "pantry" },
      { name: "みりん", amount: "大さじ2", category: "pantry" },
      { name: "酒", amount: "大さじ2", category: "pantry" },
      { name: "砂糖", amount: "大さじ1", category: "pantry" },
      { name: "ほうれん草", amount: "1/2束", category: "vegetable" }
    ],
    steps: [
      "カレイは皮目に十文字の切れ目を入れる。生姜は薄切り、長ねぎは4cm幅のブツ切りにする。",
      "ほうれん草は茹でて水にさらし、水気をしっかり絞って3cm幅に切り、だし醤油（分量外）をかけておく。",
      "鍋にだし汁、醤油、みりん、酒、砂糖、生姜を入れて沸騰させる。",
      "カレイの皮目を上にして入れ、長ねぎも脇に加える。スプーンで煮汁をカレイの表面にかける。",
      "落とし蓋をして弱火で12〜15分、煮汁が少しとろっとするまで煮込む。お皿に盛り、ほうれん草を添える。"
    ]
  },
  {
    id: "r_48",
    name: "エビとブロッコリーのガーリックマヨ炒め",
    category: "fish",
    cookingTime: 15,
    description: "ぷりぷりのエビと食感の良いブロッコリーを、コクのあるニンニクマヨネーズで炒めました。",
    nutrition: {
      calories: 490,
      protein: 24,
      fat: 22,
      carbs: 18,
      salt: 1.9,
      vitaminC: 55,
      calcium: 110,
      iron: 1.5
    },
    ingredients: [
      { name: "むきエビ", amount: "150g", category: "meat_fish" },
      { name: "ブロッコリー", amount: "1/2株", category: "vegetable" },
      { name: "にんにく", amount: "1かけ", category: "vegetable" },
      { name: "マヨネーズ", amount: "大さじ3", category: "pantry" },
      { name: "醤油", amount: "小さじ1", category: "pantry" },
      { name: "オリーブオイル", amount: "小さじ1", category: "pantry" },
      { name: "塩・コショウ", amount: "少々", category: "pantry" }
    ],
    steps: [
      "ブロッコリーは小房に分け、耐熱容器に入れて水少々を振り、ラップをして電子レンジ600Wで1分半加熱する。にんにくはみじん切りにする。",
      "エビは背ワタを取り、塩と片栗粉（分量外）で揉み洗いして水気を拭き取る。",
      "フライパンにオリーブオイルとにんにくを入れて弱火で熱し、香りが立ったらエビを加えて中火で炒める。",
      "エビの色が変わったらブロッコリーを加え、塩・コショウを振ってさっと炒め合わせる。",
      "火を止めてマヨネーズ、醤油を加え、余熱で全体を素早く混ぜ合わせて器に盛る。"
    ]
  },
  {
    id: "r_49",
    name: "いわしの蒲焼き & キャベツの塩昆布和え",
    category: "fish",
    cookingTime: 18,
    description: "脂ののったイワシをフライパンで香ばしく焼き、甘辛い特製タレを絡めて蒲焼きにしました。",
    nutrition: {
      calories: 530,
      protein: 26,
      fat: 20,
      carbs: 32,
      salt: 2.1,
      vitaminC: 15,
      calcium: 140,
      iron: 2.5
    },
    ingredients: [
      { name: "いわし開き", amount: "4尾", category: "meat_fish" },
      { name: "小麦粉", amount: "適量", category: "pantry" },
      { name: "醤油", amount: "大さじ1.5", category: "pantry" },
      { name: "みりん", amount: "大さじ1.5", category: "pantry" },
      { name: "酒", amount: "大さじ1", category: "pantry" },
      { name: "砂糖", amount: "小さじ1", category: "pantry" },
      { name: "キャベツ", amount: "100g", category: "vegetable" },
      { name: "塩昆布", amount: "大さじ1", category: "pantry" },
      { name: "ごま油", amount: "小さじ1", category: "pantry" }
    ],
    steps: [
      "キャベツは一口大にちぎり、塩昆布、ごま油を揉み込んでしばらく置き、即席和え物を作る。",
      "いわしはペーパーで水気を拭き取り、小麦粉を薄く全体にまぶす。",
      "醤油、みりん、酒、砂糖を混ぜて合わせ調味料を作っておく。",
      "フライパンにサラダ油（分量外）を熱し、いわしの身を下にして入れ、中火で焼く。焼き色がついたら裏返す。",
      "両面が焼けたら余分な油を拭き取り、合わせ調味料を加え、強火でタレを煮詰めながらいわしに絡める。"
    ]
  },
  {
    id: "r_50",
    name: "豚肉とレンコンの甘酢炒め",
    category: "pork",
    cookingTime: 20,
    description: "シャキシャキしたレンコンと豚肉に、甘酢あんがよく絡んでご飯が進むおかず。",
    nutrition: {
      calories: 560,
      protein: 22,
      fat: 20,
      carbs: 36,
      salt: 2.0,
      vitaminC: 25,
      calcium: 35,
      iron: 1.4
    },
    ingredients: [
      { name: "豚肩ロース薄切り肉", amount: "200g", category: "meat_fish" },
      { name: "レンコン", amount: "150g", category: "vegetable" },
      { name: "にんじん", amount: "1/2本", category: "vegetable" },
      { name: "片栗粉", amount: "大さじ1", category: "pantry" },
      { name: "砂糖", amount: "大さじ1.5", category: "pantry" },
      { name: "酢", amount: "大さじ1.5", category: "pantry" },
      { name: "醤油", amount: "大さじ1.5", category: "pantry" },
      { name: "サラダ油", amount: "大さじ1", category: "pantry" }
    ],
    steps: [
      "レンコンは5mm厚さの半月切りにし、水にさらして水気を切る。にんじんは乱切りにしてレンジで1分半加熱する。",
      "豚肉は一口大に切る。軽く塩コショウ（分量外）を振ってから片栗粉をまぶす。",
      "砂糖、酢、醤油、水大さじ1（分量外）を混ぜて合わせ調味料を作る。",
      "フライパンに油を熱し、豚肉を中火で炒め、色が変わったらレンコンとにんじんを加える。",
      "レンコンが透き通るまで炒めたら、合わせ調味料を一気に流し入れ、とろみがついて全体に絡むまで強火で炒め合わせる。"
    ]
  },
  {
    id: "r_51",
    name: "柔らかゆで豚のピリ辛おろしポン酢",
    category: "pork",
    cookingTime: 15,
    description: "さっと茹でて余分な脂を落としたしっとり豚肉に、ピリ辛の大根おろしポン酢をたっぷりかけてサッパリといただきます。",
    nutrition: {
      calories: 480,
      protein: 25,
      fat: 22,
      carbs: 15,
      salt: 2.2,
      vitaminC: 18,
      calcium: 30,
      iron: 1.3
    },
    ingredients: [
      { name: "豚ロースしゃぶしゃぶ用肉", amount: "200g", category: "meat_fish" },
      { name: "もやし", amount: "1袋", category: "vegetable" },
      { name: "大根", amount: "10cm", category: "vegetable" },
      { name: "ポン酢醤油", amount: "大さじ3", category: "pantry" },
      { name: "ラー油", amount: "少々", category: "pantry" },
      { name: "万能ねぎ", amount: "2本", category: "vegetable" }
    ],
    steps: [
      "大根はおろし金でおろし、軽く汁気を絞る。ねぎは小口切りにする。もやしは沸騰したお湯で1分茹でてザルに上げ、冷ます。",
      "同じ鍋のお湯を微沸騰の状態（ポコポコ泡立つ程度）にし、酒少々（分量外）を加え、豚肉を数枚ずつ広げて茹でる。",
      "豚肉の色が変わったらすぐにお湯から引き上げ、丘上げして自然に冷ます（水にさらさないことで肉が硬くならない）。",
      "お皿にもやしを敷き、その上にゆで豚をふんわりと盛り付ける。",
      "大根おろしをのせ、ポン酢とラー油を回しかけ、ねぎを散らして完成。"
    ]
  },
  {
    id: "r_52",
    name: "豚バラ肉とニラ玉のスタミナ炒め",
    category: "pork",
    cookingTime: 12,
    description: "豚肉、ニラ、ふんわり卵を強火でさっと炒め合わせた定番スタミナおかず。",
    nutrition: {
      calories: 590,
      protein: 23,
      fat: 26,
      carbs: 18,
      salt: 2.1,
      vitaminC: 30,
      calcium: 70,
      iron: 2.2
    },
    ingredients: [
      { name: "豚バラ薄切り肉", amount: "150g", category: "meat_fish" },
      { name: "ニラ", amount: "1束", category: "vegetable" },
      { name: "卵", amount: "3個", category: "meat_fish" },
      { name: "醤油", amount: "大さじ1", category: "pantry" },
      { name: "オイスターソース", amount: "小さじ1", category: "pantry" },
      { name: "鶏ガラスープの素", amount: "小さじ1/2", category: "pantry" },
      { name: "ごま油", amount: "大さじ1", category: "pantry" }
    ],
    steps: [
      "豚バラ肉は3cm幅に切る。ニラは4cm幅に切る。卵はボウルに割り入れて軽く塩（分量外）をして溶きほぐす。",
      "フライパンにごま油大さじ1/2を熱し、卵液を流し入れる。大きく混ぜて半熟状になったら一度取り出す。",
      "同じフライパンに残りのごま油を熱し、豚肉を炒める。色が変わったら醤油、オイスターソース、鶏ガラスープの素を入れる。",
      "ニラを加えて強火で手早く炒め、ニラが少ししんなりしたら卵をフライパンに戻す。",
      "卵を軽く崩しながら、全体を大きく混ぜ合わせてすぐに火を止めて盛り付ける。"
    ]
  },
  {
    id: "r_53",
    name: "豚肉とナスの味噌炒め & 叩ききゅうり",
    category: "pork",
    cookingTime: 18,
    description: "油を吸ってトロトロになったナスと豚肉に、コクの深い甘辛い味噌が絶妙にマッチします。",
    nutrition: {
      calories: 580,
      protein: 21,
      fat: 25,
      carbs: 29,
      salt: 2.4,
      vitaminC: 15,
      calcium: 40,
      iron: 1.6
    },
    ingredients: [
      { name: "豚こま切れ肉", amount: "200g", category: "meat_fish" },
      { name: "ナス", amount: "3本", category: "vegetable" },
      { name: "ピーマン", amount: "2個", category: "vegetable" },
      { name: "味噌", amount: "大さじ2", category: "pantry" },
      { name: "砂糖", amount: "大さじ1", category: "pantry" },
      { name: "みりん", amount: "大さじ1", category: "pantry" },
      { name: "醤油", amount: "小さじ1", category: "pantry" },
      { name: "ごま油", amount: "大さじ1.5", category: "pantry" }
    ],
    steps: [
      "ナスは乱切りにして水にさらしたあと、水気をよく拭き取る。ピーマンは一口大に切る。豚肉は一口大に切る。",
      "味噌、砂糖、みりん、醤油を混ぜ合わせておく。",
      "フライパンにごま油を熱し、豚肉を中火で炒め、色が変わったらナスを加える。ナスが油を吸うまでよく炒める。",
      "ピーマンを加えてさっと炒め合わせる。",
      "火を少し弱め、合わせた味噌ダレを加え、全体に絡めながら水分を飛ばすようにしっかり炒め合わせる。"
    ]
  },
  {
    id: "r_54",
    name: "鶏肉と大根のべっこう煮",
    category: "chicken",
    cookingTime: 30,
    description: "鶏もも肉から出るだしが、じっくり下茹でした大根に染み込み、美しい飴色（べっこう色）に仕上がります。",
    nutrition: {
      calories: 480,
      protein: 28,
      fat: 18,
      carbs: 24,
      salt: 2.3,
      vitaminC: 15,
      calcium: 45,
      iron: 1.8
    },
    ingredients: [
      { name: "鶏もも肉", amount: "250g", category: "meat_fish" },
      { name: "大根", amount: "1/3本", category: "vegetable" },
      { name: "生姜", amount: "1かけ", category: "vegetable" },
      { name: "だし汁", amount: "300ml", category: "pantry" },
      { name: "醤油", amount: "大さじ2.5", category: "pantry" },
      { name: "みりん", amount: "大さじ2", category: "pantry" },
      { name: "酒", amount: "大さじ2", category: "pantry" },
      { name: "砂糖", amount: "大さじ1", category: "pantry" }
    ],
    steps: [
      "大根は2cm厚さの半月切りにし、皮を厚めにむく。米のとぎ汁（または水に米少々）で竹串がスッと通るまで下茹でする。",
      "鶏もも肉は一口大に切り、生姜は薄切りにする。",
      "鍋にだし汁、酒、砂糖、みりん、生姜を入れて沸騰させ、鶏肉を加える。アクが出てきたらすくい取る。",
      "下茹でした大根を加え、落とし蓋をして中火で15分煮る。",
      "醤油を加え、さらに弱火で10分煮る。火を止めて一度冷ますと、大根の芯までしっかりと飴色の味が染み込みます。"
    ]
  },
  {
    id: "r_55",
    name: "さっぱりレモンハーブチキンソテー",
    category: "chicken",
    cookingTime: 20,
    description: "ハーブとレモンで爽やかに味付けしたヘルシーチキンソテー。カロリーを抑えたい日におすすめです。",
    nutrition: {
      calories: 470,
      protein: 32,
      fat: 16,
      carbs: 12,
      salt: 1.6,
      vitaminC: 25,
      calcium: 35,
      iron: 1.5
    },
    ingredients: [
      { name: "鶏むね肉", amount: "300g", category: "meat_fish" },
      { name: "レモン", amount: "1/2個", category: "vegetable" },
      { name: "乾燥ハーブミックス", amount: "小さじ1", category: "pantry" },
      { name: "にんにく", amount: "1かけ", category: "vegetable" },
      { name: "オリーブオイル", amount: "大さじ1", category: "pantry" },
      { name: "塩・コショウ", amount: "少々", category: "pantry" }
    ],
    steps: [
      "鶏むね肉は余分な脂肪を取り、一口大のそぎ切りにする。塩、コショウ、乾燥ハーブ、つぶしたにんにくを揉み込んで10分置く。",
      "レモンは半分を薄切りにし、残りは仕上げの絞り用にする。",
      "フライパンにオリーブオイルを熱し、鶏肉を皮目（あれば）から中火で焼く。焼き色がついたら裏返す。",
      "蓋をして弱火で3〜4分蒸し焼きにし、中まで火を通す。",
      "フタを取り、レモンのスライスを加えてさっと炒め合わせ、お皿に盛り付けて残りのレモンを絞る。"
    ]
  },
  {
    id: "r_56",
    name: "鶏ささみとザーサイの和え物 & 水餃子スープ",
    category: "chicken",
    cookingTime: 20,
    description: "しっとり仕上げたささみとザーサイの和え物に、もちもちの水餃子が入った温かい中華スープの組み合わせ。",
    nutrition: {
      calories: 510,
      protein: 30,
      fat: 14,
      carbs: 32,
      salt: 2.5,
      vitaminC: 8,
      calcium: 50,
      iron: 1.9
    },
    ingredients: [
      { name: "鶏ささみ", amount: "3本", category: "meat_fish" },
      { name: "ザーサイ (味付き)", amount: "50g", category: "pantry" },
      { name: "白ねぎ", amount: "1/2本", category: "vegetable" },
      { name: "ごま油", amount: "小さじ2", category: "pantry" },
      { name: "市販の水餃子", amount: "6個", category: "meat_fish" },
      { name: "中華スープの素", amount: "小さじ2", category: "pantry" }
    ],
    steps: [
      "ささみは耐熱さらにのせ、酒少々（分量外）を振ってラップをし、電子レンジ600Wで2分半加熱する。冷まして手で細かく割く。",
      "ザーサイは細切りにし、ねぎは千切りにする。ボウルにささみ、ザーサイ、ねぎ、ごま油を入れて和える。",
      "鍋に水400ml、中華スープの素を入れて沸騰させる。",
      "水餃子を加え、中火で4〜5分茹でて火を通す。塩コショウ（分量外）で味を調える。",
      "器にスープと水餃子を盛り、和え物を小皿に添えて完成。"
    ]
  },
  {
    id: "r_57",
    name: "タンドリーチキン & アボカドサラダ",
    category: "chicken",
    cookingTime: 25,
    description: "スパイスとヨーグルトに漬け込んだジューシーな鶏もも肉。アボカドサラダを添えてボリューム満点。",
    nutrition: {
      calories: 620,
      protein: 31,
      fat: 28,
      carbs: 22,
      salt: 2.1,
      vitaminC: 30,
      calcium: 80,
      iron: 2.1
    },
    ingredients: [
      { name: "鶏もも肉", amount: "300g", category: "meat_fish" },
      { name: "プレーンヨーグルト", amount: "大さじ3", category: "pantry" },
      { name: "カレー粉", amount: "大さじ1", category: "pantry" },
      { name: "ケチャップ", amount: "大さじ1", category: "pantry" },
      { name: "にんにく・生姜チューブ", amount: "各小さじ1", category: "pantry" },
      { name: "アボカド", amount: "1個", category: "vegetable" },
      { name: "レタス", amount: "50g", category: "vegetable" }
    ],
    steps: [
      "鶏もも肉は余分な脂肪を取り、一口大に切る。ポリ袋にヨーグルト、カレー粉、ケチャップ、にんにく・生姜、塩小さじ1/2（分量外）を入れて混ぜ、鶏肉を加えてよく揉み込み、20分以上置く。",
      "アボカドは一口大に切り、レタスはちぎる。オリーブオイルと塩（分量外）でさっと和えてサラダを作る。",
      "フライパンに油を引かずに（テフロン加工の場合）鶏肉を漬けダレごと並べる。",
      "中火で皮目をじっくり焼き、焼き色がついたらひっくり返し、蓋をして弱火で6分ほど蒸し焼きにする。",
      "お皿に盛り付け、アボカドサラダを添える。"
    ]
  },
  {
    id: "r_58",
    name: "すき焼き風 牛肉と豆腐の甘辛煮",
    category: "beef",
    cookingTime: 20,
    description: "すき焼きの美味しさをフライパンで手軽に。牛肉の旨味が焼き豆腐やネギにじゅわっと染み込みます。",
    nutrition: {
      calories: 590,
      protein: 28,
      fat: 22,
      carbs: 38,
      salt: 2.5,
      vitaminC: 10,
      calcium: 150,
      iron: 2.8
    },
    ingredients: [
      { name: "牛バラ薄切り肉", amount: "200g", category: "meat_fish" },
      { name: "焼き豆腐", amount: "1丁 (300g)", category: "meat_fish" },
      { name: "長ねぎ", amount: "1本", category: "vegetable" },
      { name: "しらたき", amount: "1袋", category: "pantry" },
      { name: "醤油", amount: "大さじ3", category: "pantry" },
      { name: "みりん", amount: "大さじ3", category: "pantry" },
      { name: "酒", amount: "大さじ3", category: "pantry" },
      { name: "砂糖", amount: "大さじ2", category: "pantry" }
    ],
    steps: [
      "豆腐は一口大に切る。長ねぎは1cm幅の斜め切りにする。しらたきは下茹でして食べやすい長さに切る。牛肉は一口大に切る。",
      "フライパンに醤油、みりん、酒、砂糖を入れて火にかける。",
      "砂糖が溶けたら、豆腐、長ねぎ、しらたきを入れて中火で5分ほど煮る。",
      "具材を端に寄せ、空いたスペースに牛肉を広げて加える。",
      "アクをすくいながら、牛肉に火が通るまで3〜4分煮て、全体に味が染み込んだら完成。"
    ]
  },
  {
    id: "r_59",
    name: "牛肉とアスパラのオイスター炒め",
    category: "beef",
    cookingTime: 15,
    description: "牛肉の旨味とアスパラガスのシャキシャキ感がたまらない、コクのあるオイスターソース炒め。",
    nutrition: {
      calories: 580,
      protein: 25,
      fat: 21,
      carbs: 32,
      salt: 2.0,
      vitaminC: 18,
      calcium: 40,
      iron: 2.5
    },
    ingredients: [
      { name: "牛もも薄切り肉", amount: "200g", category: "meat_fish" },
      { name: "アスパラガス", amount: "5本", category: "vegetable" },
      { name: "しめじ", amount: "1パック", category: "vegetable" },
      { name: "オイスターソース", amount: "大さじ1.5", category: "pantry" },
      { name: "醤油", amount: "小さじ2", category: "pantry" },
      { name: "みりん", amount: "大さじ1", category: "pantry" },
      { name: "サラダ油", amount: "大さじ1", category: "pantry" }
    ],
    steps: [
      "アスパラは根元の皮をピーラーでむき、4cm長さの斜め切りにする。しめじは石づきを取ってほぐす。牛肉は一口大に切る。",
      "オイスターソース、醤油、みりんを混ぜ合わせておく。",
      "フライパンにサラダ油を熱し、牛肉を強火で炒める。色が変わったら一度取り出す。",
      "同じフライパンでアスパラガスとしめじを炒める。アスパラに火が通るまで2分ほど炒める。",
      "牛肉を戻し入れ、合わせた調味料を加えて全体を一気に炒め合わせる。"
    ]
  },
  {
    id: "r_60",
    name: "牛肉とズッキーニのガーリックソテー",
    category: "beef",
    cookingTime: 15,
    description: "ニンニクの香りを立たせたオイルで、牛肉とみずみずしいズッキーニをさっと炒めた洋風おかずです。",
    nutrition: {
      calories: 570,
      protein: 24,
      fat: 26,
      carbs: 16,
      salt: 1.8,
      vitaminC: 22,
      calcium: 35,
      iron: 2.3
    },
    ingredients: [
      { name: "牛肩ロース薄切り肉", amount: "200g", category: "meat_fish" },
      { name: "ズッキーニ", amount: "1本", category: "vegetable" },
      { name: "にんにく", amount: "2かけ", category: "vegetable" },
      { name: "オリーブオイル", amount: "大さじ1.5", category: "pantry" },
      { name: "塩・粗挽き黒コショウ", amount: "少々", category: "pantry" },
      { name: "醤油", amount: "小さじ1", category: "pantry" }
    ],
    steps: [
      "ズッキーニは1cm厚さの輪切りにする。にんにくは薄切りにする。牛肉は一口大に切る。",
      "フライパンにオリーブオイルとにんにくを入れて弱火で熱し、香りが立ったらにんにくを一度取り出す。",
      "同じフライパンでズッキーニを中火で焼き、両面に軽い焼き色がついたら一度取り出す。",
      "牛肉を強火で一気に炒め、色が変わったらズッキーニとにんにくを戻す。",
      "塩、粗挽き黒コショウを振り、醤油を回しかけて全体をさっと煽る。"
    ]
  },
  {
    id: "r_61",
    name: "ハッシュドビーフ & ブロッコリー",
    category: "beef",
    cookingTime: 25,
    description: "トマトとデミグラスの深い味わいに、玉ねぎの甘みが溶け込んだ手軽にできるハッシュドビーフ。",
    nutrition: {
      calories: 650,
      protein: 26,
      fat: 28,
      carbs: 42,
      salt: 2.4,
      vitaminC: 35,
      calcium: 55,
      iron: 2.9
    },
    ingredients: [
      { name: "牛薄切り肉", amount: "200g", category: "meat_fish" },
      { name: "玉ねぎ", amount: "1個", category: "vegetable" },
      { name: "マッシュルーム", amount: "50g", category: "vegetable" },
      { name: "市販のハッシュドビーフルー", amount: "1/2箱", category: "pantry" },
      { name: "ブロッコリー", amount: "1/2株", category: "vegetable" },
      { name: "バター", amount: "10g", category: "pantry" }
    ],
    steps: [
      "玉ねぎは1cm幅のくし切りにする。マッシュルームは薄切りにする。ブロッコリーは小房に分けて茹でておく。牛肉は一口大に切る。",
      "鍋にバターを熱し、玉ねぎとマッシュルームを中火でしんなりするまで炒める。",
      "牛肉を加えて炒め、肉の色が変わったら水300ml（ルーの規定量に準ずる）を加える。",
      "沸騰したらアクを取り、弱火で約10分煮込む。",
      "一度火を止め、ハッシュドビーフのルーを割り入れて溶かし、再び弱火で5分ほどとろみがつくまで煮る。茹でたブロッコリーを添える。"
    ]
  },
  {
    id: "r_62",
    name: "厚揚げと小松菜のそぼろあんかけ",
    category: "tofu_egg",
    cookingTime: 18,
    description: "ジューシーな厚揚げとシャキシャキの小松菜に、鶏ひき肉の旨味が溶けた優しい和風あんかけ。",
    nutrition: {
      calories: 460,
      protein: 22,
      fat: 19,
      carbs: 22,
      salt: 2.1,
      vitaminC: 45,
      calcium: 210,
      iron: 2.8
    },
    ingredients: [
      { name: "厚揚げ", amount: "1パック (2枚)", category: "meat_fish" },
      { name: "小松菜", amount: "1/2束", category: "vegetable" },
      { name: "鶏ひき肉", amount: "100g", category: "meat_fish" },
      { name: "だし汁", amount: "200ml", category: "pantry" },
      { name: "醤油", amount: "大さじ1.5", category: "pantry" },
      { name: "みりん", amount: "大さじ1.5", category: "pantry" },
      { name: "片栗粉", amount: "小さじ2", category: "pantry" }
    ],
    steps: [
      "厚揚げは熱湯をかけて油抜きをし、一口大に切る。小松菜は4cm長さに切る。片栗粉は同量の水（分量外）で溶いておく。",
      "鍋にごま油少々（分量外）を熱し、鶏ひき肉をポロポロになるまで炒める。",
      "だし汁、醤油、みりん、厚揚げを入れて沸騰させ、弱火で5分煮る。",
      "小松菜の茎、葉の順に加えてさらに2分煮る。",
      "小松菜に火が通ったら、一度火を止めて水溶き片栗粉を回し入れ、再び中火にかけてとろみをつける。"
    ]
  },
  {
    id: "r_63",
    name: "豆乳で作るクリーミー麻婆豆腐",
    category: "tofu_egg",
    cookingTime: 20,
    description: "豆乳を加えることで辛さがマイルドになり、驚くほどまろやかでコク深い味わいに仕上がった麻婆豆腐。",
    nutrition: {
      calories: 510,
      protein: 26,
      fat: 24,
      carbs: 20,
      salt: 2.3,
      vitaminC: 10,
      calcium: 220,
      iron: 3.0
    },
    ingredients: [
      { name: "木綿豆腐", amount: "1丁 (350g)", category: "meat_fish" },
      { name: "豚ひき肉", amount: "120g", category: "meat_fish" },
      { name: "無調整豆乳", amount: "150ml", category: "pantry" },
      { name: "中華スープの素", amount: "小さじ1", category: "pantry" },
      { name: "味噌", amount: "大さじ1", category: "pantry" },
      { name: "醤油", amount: "小さじ2", category: "pantry" },
      { name: "豆板醤", amount: "小さじ1/2", category: "pantry" },
      { name: "長ねぎ", amount: "1/2本", category: "vegetable" }
    ],
    steps: [
      "豆腐は2cm角に切り、長ねぎはみじん切りにする。味噌、醤油、豆板醤を少量の水（大さじ2・分量外）で溶いておく。",
      "フライパンにごま油（分量外）を熱し、豚ひき肉をよく炒める。色が変わったら長ねぎを加えてさっと炒める。",
      "水100mlと中華スープの素、合わせておいた調味料を加え、沸騰したら豆腐を入れる。",
      "弱火で3分ほど煮て豆腐に味を含ませる。",
      "無調整豆乳を加えて沸騰直前まで温め（沸騰させると分離するため）、水溶き片栗粉（分量外）で軽くとろみをつける。"
    ]
  },
  {
    id: "r_64",
    name: "ふんわり卵とエビのチリソース炒め",
    category: "tofu_egg",
    cookingTime: 15,
    description: "ぷりぷりのエビとピリ辛のチリソースが、ふんわり焼いたスクランブルエッグにからむ中華おかず。",
    nutrition: {
      calories: 490,
      protein: 22,
      fat: 21,
      carbs: 24,
      salt: 2.2,
      vitaminC: 15,
      calcium: 90,
      iron: 1.8
    },
    ingredients: [
      { name: "卵", amount: "3個", category: "meat_fish" },
      { name: "むきエビ", amount: "120g", category: "meat_fish" },
      { name: "長ねぎ", amount: "1/3本", category: "vegetable" },
      { name: "ケチャップ", amount: "大さじ3", category: "pantry" },
      { name: "スイートチリソース", amount: "大さじ1", category: "pantry" },
      { name: "鶏ガラスープ", amount: "50ml", category: "pantry" },
      { name: "ごま油", amount: "大さじ1", category: "pantry" }
    ],
    steps: [
      "エビは背ワタを取り、塩と片栗粉（分量外）で揉み洗いして水気を拭き取る。ねぎはみじん切りにする。卵は塩少々（分量外）を加え溶いておく。",
      "フライパンにごま油大さじ1/2を熱し、卵液を入れ半熟のスクランブルエッグを作って取り出す。",
      "同じフライパンに残りのごま油を熱し、みじん切りのねぎとエビを炒める。",
      "エビの色が変わったらケチャップ、スイートチリソース、鶏ガラスープを入れて一煮立ちさせる。",
      "取り出しておいた卵を戻し入れ、崩さないようにさっとチリソースと和える。"
    ]
  },
  {
    id: "r_65",
    name: "スフレ風厚焼き玉子 & トマトの胡麻和え",
    category: "tofu_egg",
    cookingTime: 20,
    description: "メレンゲを混ぜ込んで焼くことで、口の中でとろけるような食感に仕上げた厚焼き玉子。さっぱりしたトマトを添えて。",
    nutrition: {
      calories: 440,
      protein: 18,
      fat: 18,
      carbs: 26,
      salt: 1.9,
      vitaminC: 22,
      calcium: 110,
      iron: 2.2
    },
    ingredients: [
      { name: "卵", amount: "4個", category: "meat_fish" },
      { name: "だし汁", amount: "大さじ3", category: "pantry" },
      { name: "砂糖", amount: "大さじ1", category: "pantry" },
      { name: "塩", amount: "少々", category: "pantry" },
      { name: "トマト", amount: "1個", category: "vegetable" },
      { name: "すりごま", amount: "大さじ1", category: "pantry" },
      { name: "醤油", amount: "小さじ1", category: "pantry" }
    ],
    steps: [
      "トマトはくし形に切り、すりごまと醤油で和えて冷やしておく。",
      "卵を卵黄と卵白に分ける。卵白はボウルでツノが立つまでしっかりと泡立ててメレンゲにする。",
      "卵黄のボウルにだし汁、砂糖、塩を加えてよく混ぜ、メレンゲを2回に分けて加え、泡を潰さないようにさっくり混ぜる。",
      "玉子焼き器（または小さめのフライパン）にサラダ油少々（分量外）を熱し、卵液をすべて流し込み、蓋をして極弱火で5分焼く。",
      "表面が乾いてきたら半分に折りたたみ、さらに両面をじっくり焼く。切り分けて、トマトの胡麻和えと共にお皿に盛る。"
    ]
  },
  {
    id: "r_66",
    name: "タラの和風みぞれ煮 & 小松菜のおひたし",
    category: "fish",
    cookingTime: 20,
    description: "ふっくらしたタラを大根おろしをたっぷり加えた和風だしで優しく煮込んだ、体が温まる一品。",
    nutrition: {
      calories: 420,
      protein: 24,
      fat: 8,
      carbs: 26,
      salt: 2.1,
      vitaminC: 25,
      calcium: 110,
      iron: 1.6
    },
    ingredients: [
      { name: "真タラ切り身", amount: "2切れ", category: "meat_fish" },
      { name: "大根", amount: "10cm (200g)", category: "vegetable" },
      { name: "だし汁", amount: "200ml", category: "pantry" },
      { name: "醤油", amount: "大さじ1.5", category: "pantry" },
      { name: "みりん", amount: "大さじ1.5", category: "pantry" },
      { name: "酒", amount: "大さじ1.5", category: "pantry" },
      { name: "片栗粉", amount: "適量", category: "pantry" },
      { name: "小松菜", amount: "1/2束", category: "vegetable" }
    ],
    steps: [
      "小松菜は茹でて水気を絞り、3cm幅に切り、醤油（分量外）で和えておひたしを作る。",
      "タラは一口大に切り、塩少々（分量外）を振って10分置き、水気を拭き取って片栗粉を薄くまぶす。",
      "大根はおろして軽く水気を切る。鍋にだし汁、醤油、みりん、酒を入れて温める。",
      "タラを入れて中火で3分煮たあと、大根おろしを加えてさらに弱火で3分煮込む。",
      "器にタラとみぞれあんを盛り付け、小松菜のおひたしを添える。"
    ]
  },
  {
    id: "r_67",
    name: "サーモンのムニエル・タルタルソース添え",
    category: "fish",
    cookingTime: 22,
    description: "香ばしくバターで焼いたサーモンに、手作りの具だくさんタルタルソースを合わせたごちそうメニュー。",
    nutrition: {
      calories: 590,
      protein: 28,
      fat: 26,
      carbs: 22,
      salt: 1.9,
      vitaminC: 15,
      calcium: 45,
      iron: 1.5
    },
    ingredients: [
      { name: "生鮭の切り身", amount: "2切れ", category: "meat_fish" },
      { name: "バター", amount: "15g", category: "pantry" },
      { name: "ゆで卵", amount: "1個", category: "meat_fish" },
      { name: "マヨネーズ", amount: "大さじ3", category: "pantry" },
      { name: "玉ねぎ", amount: "1/4個", category: "vegetable" },
      { name: "塩・コショウ", amount: "少々", category: "pantry" },
      { name: "小麦粉", amount: "少々", category: "pantry" }
    ],
    steps: [
      "玉ねぎはみじん切りにし水にさらして水気を絞る。ゆで卵を潰し、玉ねぎ、マヨネーズ、塩コショウと混ぜてタルタルソースを作る。",
      "サーモンに塩コショウを振る。小麦粉を薄くまぶす。",
      "フライパンにオリーブオイル（分量外・小さじ1）とバターを弱火で熱し、サーモンを入れる。",
      "中火で両面をこんがりと焼き、中までしっかり火を通す。",
      "サーモンをお皿に盛り付け、特製のタルタルソースをたっぷりとかける。"
    ]
  },
  {
    id: "r_68",
    name: "サバの味噌煮 & ちぎりキャベツ",
    category: "fish",
    cookingTime: 25,
    description: "定番の和食。ショウガを効かせた甘辛い味噌だれでサバの旨味を引き出します。",
    nutrition: {
      calories: 580,
      protein: 26,
      fat: 28,
      carbs: 32,
      salt: 2.5,
      vitaminC: 10,
      calcium: 90,
      iron: 2.1
    },
    ingredients: [
      { name: "サバの切り身", amount: "2切れ", category: "meat_fish" },
      { name: "生姜", amount: "1かけ", category: "vegetable" },
      { name: "味噌", amount: "大さじ2.5", category: "pantry" },
      { name: "砂糖", amount: "大さじ2", category: "pantry" },
      { name: "みりん", amount: "大さじ2", category: "pantry" },
      { name: "酒", amount: "100ml", category: "pantry" },
      { name: "水", amount: "100ml", category: "pantry" }
    ],
    steps: [
      "サバは皮目に十字の切れ目を入れ、熱湯をさっと回しかけて（霜降り）冷水にとり、ウロコや汚れを洗い流す。",
      "生姜は薄切りにする。鍋に酒、水、砂糖、みりん、生姜を入れて沸騰させる。",
      "サバの皮目を上にして入れ、再び沸騰したらアクを取り、味噌の半量を溶き入れる。",
      "落とし蓋をして弱火で10分煮る。残りの味噌を溶き入れ、煮汁をすくいかけながらとろみがつくまで5分煮詰める。",
      "お皿に盛り付け、お好みで針生姜（分量外）をあしらう。"
    ]
  },
  {
    id: "r_69",
    name: "マグロのポキ丼風アボカド和え",
    category: "fish",
    cookingTime: 12,
    description: "ハワイの定番料理。マグロとアボカドをごま油と醤油の特製タレで和えたヘルシーなどんぶり。",
    nutrition: {
      calories: 540,
      protein: 28,
      fat: 19,
      carbs: 45,
      salt: 1.8,
      vitaminC: 22,
      calcium: 40,
      iron: 2.2
    },
    ingredients: [
      { name: "マグロ (刺身用ブロック)", amount: "180g", category: "meat_fish" },
      { name: "アボカド", amount: "1個", category: "vegetable" },
      { name: "醤油", amount: "大さじ1.5", category: "pantry" },
      { name: "ごま油", amount: "大さじ1.5", category: "pantry" },
      { name: "白いりごま", amount: "小さじ1", category: "pantry" },
      { name: "万能ねぎ", amount: "2本", category: "vegetable" },
      { name: "温かいご飯", amount: "2杯分", category: "pantry" }
    ],
    steps: [
      "マグロとアボカドは1.5cm角に切る。万能ねぎは小口切りにする。",
      "ボウルに醤油、ごま油、白いりごま、万能ねぎを入れて混ぜ合わせる。",
      "ボウルにマグロとアボカドを加え、崩れないように優しく和えて10分ほど冷蔵庫でなじませる。",
      "器にご飯を盛り、ポキをタレごとのせる。お好みで刻みのり（分量外）をのせても美味しい。"
    ]
  },
  {
    id: "r_70",
    name: "ブリの塩麹焼き & れんこん金平",
    category: "fish",
    cookingTime: 20,
    description: "塩麹の働きでブリの身がしっとりと柔らかく焼き上がり、上品な甘みとうま味が楽しめます。",
    nutrition: {
      calories: 510,
      protein: 25,
      fat: 22,
      carbs: 24,
      salt: 1.7,
      vitaminC: 12,
      calcium: 50,
      iron: 1.8
    },
    ingredients: [
      { name: "ブリの切り身", amount: "2切れ", category: "meat_fish" },
      { name: "液体塩麹", amount: "大さじ2", category: "pantry" },
      { name: "れんこん", amount: "100g", category: "vegetable" },
      { name: "人参", amount: "1/3本", category: "vegetable" },
      { name: "醤油", amount: "大さじ1", category: "pantry" },
      { name: "みりん", amount: "大さじ1", category: "pantry" },
      { name: "ごま油", amount: "小さじ2", category: "pantry" }
    ],
    steps: [
      "ブリに液体塩麹をまぶして、冷蔵庫で30分以上（できれば半日）漬け込む。",
      "れんこんは薄い半月切りにして水にさらし、人参は細切りにする。",
      "ブリの表面の塩麹を軽く拭き取り、グリルまたはフライパン（弱火）で焦げないように両面をじっくり焼く。",
      "別のフライパンにごま油を熱し、れんこんと人参を炒める。火が通ったら醤油、みりんで味付けし金平を作る。",
      "ブリの焼き上がりと共にお皿に盛り合わせる。"
    ]
  },
  {
    id: "r_71",
    name: "カチュオのタタキ・特製にんにく薬味ポン酢",
    category: "fish",
    cookingTime: 12,
    description: "たっぷりの薬味（にんにく、生姜、大葉、みょうが、ネギ）でいただくヘルシーでスタミナのつく一品。",
    nutrition: {
      calories: 440,
      protein: 29,
      fat: 12,
      carbs: 18,
      salt: 2.0,
      vitaminC: 28,
      calcium: 55,
      iron: 2.8
    },
    ingredients: [
      { name: "カツオのタタキ (刺身用)", amount: "250g", category: "meat_fish" },
      { name: "にんにく", amount: "1かけ", category: "vegetable" },
      { name: "大葉", amount: "5枚", category: "vegetable" },
      { name: "みょうが", amount: "1個", category: "vegetable" },
      { name: "万能ねぎ", amount: "3本", category: "vegetable" },
      { name: "ポン酢醤油", amount: "大さじ4", category: "pantry" }
    ],
    steps: [
      "にんにくは薄切り、大葉とみょうがは千切り、万能ねぎは小口切りにする。",
      "カツオのタタキを1cm厚さにスライスし、お皿に少し重ねながら盛る。",
      "カツオの上にスライスにんにく、大葉、みょうが、ねぎを満遍なく山盛りにのせる。",
      "食べる直前に上からポン酢醤油をたっぷりと回しかける。"
    ]
  },
  {
    id: "r_72",
    name: "豚肉とキャベツの回鍋肉（ホイコーロー）",
    category: "pork",
    cookingTime: 15,
    description: "シャキシャキのキャベツ and ジューシーな豚肉を、甜麺醤を効かせた濃厚な甘辛タレで炒めた定番中華。",
    nutrition: {
      calories: 610,
      protein: 22,
      fat: 28,
      carbs: 32,
      salt: 2.3,
      vitaminC: 45,
      calcium: 60,
      iron: 1.8
    },
    ingredients: [
      { name: "豚バラ薄切り肉", amount: "180g", category: "meat_fish" },
      { name: "キャベツ", amount: "1/4個 (200g)", category: "vegetable" },
      { name: "ピーマン", amount: "2個", category: "vegetable" },
      { name: "甜麺醤", amount: "大さじ1.5", category: "pantry" },
      { name: "豆板醤", amount: "小さじ1/2", category: "pantry" },
      { name: "醤油", amount: "大さじ1", category: "pantry" },
      { name: "酒", amount: "大さじ1", category: "pantry" },
      { name: "ごま油", amount: "大さじ1", category: "pantry" }
    ],
    steps: [
      "キャベツとピーマンは一口大の乱切りにする。豚バラ肉は4cm幅に切る。甜麺醤、醤油、酒を混ぜ合わせておく。",
      "フライパンにごま油と豆板醤を弱火で熱し、香りが立ったら豚肉を加える。中火でカリッとするまで炒める。",
      "ピーマンとキャベツを加え、強火にして一気に炒め合わせる（キャベツのシャキシャキ感を残す）。",
      "全体に油が回ったら混ぜ合わせた合わせ調味料を加え、全体に絡むように手早く炒めて完成。"
    ]
  },
  {
    id: "r_73",
    name: "さっぱり和風 豚の角煮 & ゆで卵",
    category: "pork",
    cookingTime: 45,
    description: "余分な脂を時間をかけてしっかり抜き、和風のお出汁で柔らかく煮込んださっぱり仕立ての角煮です。",
    nutrition: {
      calories: 640,
      protein: 26,
      fat: 32,
      carbs: 28,
      salt: 2.4,
      vitaminC: 8,
      calcium: 75,
      iron: 2.3
    },
    ingredients: [
      { name: "豚バラブロック肉", amount: "300g", category: "meat_fish" },
      { name: "卵", amount: "2個", category: "meat_fish" },
      { name: "生姜", amount: "1かけ", category: "vegetable" },
      { name: "白ねぎの青い部分", amount: "1本分", category: "vegetable" },
      { name: "醤油", amount: "大さじ3", category: "pantry" },
      { name: "みりん", amount: "大さじ3", category: "pantry" },
      { name: "酒", amount: "大さじ3", category: "pantry" },
      { name: "砂糖", amount: "大さじ2", category: "pantry" }
    ],
    steps: [
      "豚バラ肉は3cm角に切る。生姜は薄切りにする。卵は茹でて殻をむいておく。",
      "大きめの鍋に豚肉、ねぎの青い部分、生姜の半量、かぶるくらいの水を入れ、強火にかける。沸騰したら弱火で20分下茹でし、お湯を捨てて肉を洗う（脂抜き）。",
      "鍋をきれいにし、豚肉、水300ml、酒、砂糖、醤油、みりん、残りの生姜を入れて中火にかける。",
      "煮立ったらアルミホイル等で落とし蓋をし、弱火で25分じっくり煮込む。",
      "ゆで卵を加えてさらに10分煮込み、火を止めてそのまま味を含ませる。"
    ]
  },
  {
    id: "r_74",
    name: "豚こま肉とちぎりコンニャクのピリ辛炒め",
    category: "pork",
    cookingTime: 15,
    description: "手でちぎって味が染みやすくしたコンニャクと豚肉を炒めた、ヘルシーで食物繊維たっぷりのおかず。",
    nutrition: {
      calories: 480,
      protein: 20,
      fat: 22,
      carbs: 21,
      salt: 2.0,
      vitaminC: 10,
      calcium: 90,
      iron: 1.6
    },
    ingredients: [
      { name: "豚こま切れ肉", amount: "200g", category: "meat_fish" },
      { name: "黒こんにゃく", amount: "1枚 (250g)", category: "pantry" },
      { name: "ごま油", amount: "大さじ1", category: "pantry" },
      { name: "輪切り唐辛子", amount: "適量", category: "pantry" },
      { name: "醤油", amount: "大さじ1.5", category: "pantry" },
      { name: "酒", amount: "大さじ1.5", category: "pantry" },
      { name: "みりん", amount: "大さじ1.5", category: "pantry" },
      { name: "砂糖", amount: "小さじ1", category: "pantry" }
    ],
    steps: [
      "こんにゃくは一口大に手でちぎり、塩揉みして洗い流し、熱湯で2分下茹でしてアクを抜く。",
      "フライパンに油を引かずにこんにゃくを入れ、中火でパチパチと音がするまで空煎りする（余分な水分を飛ばして味を染みやすくする）。",
      "ごま油、輪切り唐辛子、豚肉を加えて中火で炒め合わせる。",
      "豚肉に火が通ったら、醤油、酒、みりん、砂糖を加え、強火で煮汁がほぼ無くなるまで炒め絡める。"
    ]
  },
  {
    id: "r_75",
    name: "豚肩ロースのポークチャップ & レタス",
    category: "pork",
    cookingTime: 18,
    description: "ケチャップベースの甘酸っぱいタレが豚ロース肉の旨味を引き立てる、子供から大人まで大人気のおかず。",
    nutrition: {
      calories: 590,
      protein: 25,
      fat: 22,
      carbs: 29,
      salt: 2.1,
      vitaminC: 20,
      calcium: 40,
      iron: 1.5
    },
    ingredients: [
      { name: "豚ロースソテー用肉", amount: "2枚 (240g)", category: "meat_fish" },
      { name: "玉ねぎ", amount: "1/2個", category: "vegetable" },
      { name: "ケチャップ", amount: "大さじ3", category: "pantry" },
      { name: "ウスターソース", amount: "大さじ1", category: "pantry" },
      { name: "酒", amount: "大さじ1", category: "pantry" },
      { name: "みりん", amount: "大さじ1", category: "pantry" },
      { name: "バター", amount: "10g", category: "pantry" }
    ],
    steps: [
      "豚ロース肉は筋切りをし、両面に軽く塩コショウ（分量外）を振る。玉ねぎは薄切りにする。ケチャップ、ウスターソース、酒、みりんを混ぜておく。",
      "フライパンにバターを熱し、豚肉を入れて中火で両面に美味しそうな焼き色をつけ、一度取り出す。",
      "同じフライパンで玉ねぎをしんなりするまで炒める。",
      "合わせたソースをフライパンに流し入れ、一煮立ちさせる。",
      "豚肉を戻し入れ、ソースを絡めながら弱火で2分ほど煮詰め、肉に完全に火を通す。レタスを添えて盛り付ける。"
    ]
  },
  {
    id: "r_76",
    name: "お肉柔らか 豚肉とアスパラの塩麹炒め",
    category: "pork",
    cookingTime: 15,
    description: "塩麹の旨味だけでシンプルに炒め上げることで、豚肉が柔らかく、アスパラガスの甘みが際立ちます。",
    nutrition: {
      calories: 510,
      protein: 22,
      fat: 20,
      carbs: 18,
      salt: 1.6,
      vitaminC: 22,
      calcium: 35,
      iron: 1.4
    },
    ingredients: [
      { name: "豚もも薄切り肉", amount: "200g", category: "meat_fish" },
      { name: "アスパラガス", amount: "5本", category: "vegetable" },
      { name: "エリンギ", amount: "1本", category: "vegetable" },
      { name: "塩麹", amount: "大さじ1.5", category: "pantry" },
      { name: "酒", amount: "大さじ1", category: "pantry" },
      { name: "サラダ油", amount: "大さじ1", category: "pantry" }
    ],
    steps: [
      "豚もも肉は一口大に切り、塩麹を揉み込んで10分置く。",
      "アスパラは根元の硬い皮をピーラーでむき、斜め4cm長さに切る。エリンギは縦半分にして斜め薄切りにする。",
      "フライパンにサラダ油を熱し、アスパラとエリンギを中火で炒め、火が通ったら一度取り出す。",
      "同じフライパンに豚肉を塩麹ごと入れて広げ、中火で両面を香ばしく焼く。",
      "肉に火が通ったらアスパラとエリンギを戻し、酒を加えて強火でさっと炒め合わせる。"
    ]
  },
  {
    id: "r_77",
    name: "具だくさん豚汁うどん",
    category: "pork",
    cookingTime: 25,
    description: "野菜と豚肉の旨味がたっぷり溶け出した豚汁を、うどんにかけていただく栄養満点の主食スープ。",
    nutrition: {
      calories: 620,
      protein: 24,
      fat: 18,
      carbs: 68,
      salt: 2.8,
      vitaminC: 25,
      calcium: 70,
      iron: 1.9
    },
    ingredients: [
      { name: "豚バラ薄切り肉", amount: "100g", category: "meat_fish" },
      { name: "大根・にんじん", amount: "各50g", category: "vegetable" },
      { name: "ごぼう", amount: "1/2本", category: "vegetable" },
      { name: "味噌", amount: "大さじ2.5", category: "pantry" },
      { name: "だし汁", amount: "500ml", category: "pantry" },
      { name: "冷凍うどん", amount: "2玉", category: "pantry" }
    ],
    steps: [
      "豚肉は一口大に切る。大根、にんじんは薄いイチョウ切りにし、ごぼうはささがきにして水にさらす。",
      "鍋にごま油少々（分量外）を熱し、豚肉を炒める。色が変わったら水気を切った野菜類を加え、中火で炒める。",
      "全体に油が回ったらだし汁を加え、沸騰したらアクを取り、蓋をして弱火で10分煮る。",
      "別の鍋でうどんを温めるか、レンジで加熱しておく。",
      "豚汁の火を止め、味噌を溶き入れる。器に盛ったうどんの上から熱々の豚汁をたっぷり注ぎかける。"
    ]
  },
  {
    id: "r_78",
    name: "鶏肉とごぼうの柳川風 & ブロッコリー",
    category: "chicken",
    cookingTime: 20,
    description: "ごぼうの豊かな香りとジューシーな鶏肉をお出汁で煮て、ふんわり卵でとじた優しい味わいのおかず。",
    nutrition: {
      calories: 530,
      protein: 29,
      fat: 18,
      carbs: 28,
      salt: 2.2,
      vitaminC: 35,
      calcium: 75,
      iron: 2.1
    },
    ingredients: [
      { name: "鶏もも肉", amount: "200g", category: "meat_fish" },
      { name: "ごぼう", amount: "1本", category: "vegetable" },
      { name: "卵", amount: "2個", category: "meat_fish" },
      { name: "だし汁", amount: "150ml", category: "pantry" },
      { name: "醤油", amount: "大さじ1.5", category: "pantry" },
      { name: "みりん", amount: "大さじ1.5", category: "pantry" },
      { name: "砂糖", amount: "小さじ2", category: "pantry" }
    ],
    steps: [
      "ごぼうはささがきにして水にさらし、アクを抜いて水気を切る。鶏肉は小さめの一口大に切る。卵は軽く溶いておく。",
      "小さめのフライパンまたは鍋にだし汁、醤油、みりん、砂糖を入れて火にかける。",
      "煮立ったらごぼうと鶏肉を広げて入れ、蓋をして弱火で6〜7分煮る。",
      "鶏肉とごぼうに火が通ったら、溶き卵を全体に回し入れる。",
      "蓋をして1分ほど弱火で加熱し、半熟状になったら火を止める。茹でたブロッコリーを添えて完成。"
    ]
  },
  {
    id: "r_79",
    name: "揚げないチキンカツ・おろしポン酢",
    category: "chicken",
    cookingTime: 25,
    description: "パン粉をフライパンで炒めてキツネ色にし、オーブンで焼き上げることで脂質を大幅カットしたヘルシーカツ。",
    nutrition: {
      calories: 520,
      protein: 32,
      fat: 12,
      carbs: 36,
      salt: 2.0,
      vitaminC: 18,
      calcium: 40,
      iron: 1.5
    },
    ingredients: [
      { name: "鶏むね肉", amount: "300g", category: "meat_fish" },
      { name: "パン粉", amount: "大さじ5", category: "pantry" },
      { name: "マヨネーズ (衣用)", amount: "大さじ2", category: "pantry" },
      { name: "大根", amount: "8cm", category: "vegetable" },
      { name: "ポン酢醤油", amount: "大さじ3", category: "pantry" },
      { name: "塩・コショウ", amount: "少々", category: "pantry" }
    ],
    steps: [
      "フライパンにパン粉とサラダ油小さじ1（分量外）を入れ、きつね色になるまで弱火で煎り、冷ましておく。大根はおろしておく。",
      "鶏むね肉は一口大のそぎ切りにし、塩コショウを振る。マヨネーズを薄く全体に塗る（卵と小麦粉の代わり）。",
      "煎ったパン粉を鶏肉の周りにしっかり押し付けるようにまぶす。",
      "トースターまたは200℃のオーブンで、約10〜12分こんがりと火が通るまで焼き上げる。",
      "お皿に盛り、大根おろしをのせてポン酢醤油をかける。"
    ]
  },
  {
    id: "r_80",
    name: "鶏もも肉と長ねぎの焼き鳥風炒め",
    category: "chicken",
    cookingTime: 15,
    description: "フライパンで香ばしく焼いた鶏肉と、甘みの出た長ねぎに、甘辛の焼き鳥ダレを煮詰めて絡めます。",
    nutrition: {
      calories: 570,
      protein: 28,
      fat: 20,
      carbs: 22,
      salt: 2.1,
      vitaminC: 15,
      calcium: 45,
      iron: 1.7
    },
    ingredients: [
      { name: "鶏もも肉", amount: "250g", category: "meat_fish" },
      { name: "長ねぎ", amount: "2本", category: "vegetable" },
      { name: "醤油", amount: "大さじ2", category: "pantry" },
      { name: "みりん", amount: "大さじ2", category: "pantry" },
      { name: "酒", amount: "大さじ1", category: "pantry" },
      { name: "砂糖", amount: "大さじ1", category: "pantry" },
      { name: "サラダ油", amount: "小さじ1", category: "pantry" }
    ],
    steps: [
      "鶏もも肉は一口大に切る。長ねぎは3cm幅のぶつ切りにする。醤油、みりん、酒、砂糖を混ぜておく。",
      "フライパンにサラダ油を熱し、鶏肉の皮目を下にして入れ、中火でカリッと焼く。",
      "ひっくり返したら長ねぎを加え、蓋をして弱火で4分ほど蒸し焼きにする。",
      "ねぎに火が通り、鶏肉に火が通ったら蓋を取る。余分な脂をペーパーで拭き取る。",
      "合わせたタレを流し入れ、強火にして全体を揺すりながら、タレがとろっと絡むまで煮詰める。"
    ]
  },
  {
    id: "r_81",
    name: "蒸し鶏の胡麻ドレッシング和え & スープ",
    category: "chicken",
    cookingTime: 18,
    description: "しっとり柔らかい蒸し鶏ときゅうりをコク深いごまダレで和え、蒸し汁は旨味たっぷりのわかめスープにアレンジ。",
    nutrition: {
      calories: 490,
      protein: 30,
      fat: 16,
      carbs: 18,
      salt: 2.3,
      vitaminC: 15,
      calcium: 65,
      iron: 1.8
    },
    ingredients: [
      { name: "鶏むね肉", amount: "250g", category: "meat_fish" },
      { name: "きゅうり", amount: "1本", category: "vegetable" },
      { name: "白いりごま・すりごま", amount: "各大さじ1", category: "pantry" },
      { name: "マヨネーズ", amount: "大さじ1", category: "pantry" },
      { name: "醤油", amount: "大さじ1", category: "pantry" },
      { name: "砂糖", amount: "大さじ1", category: "pantry" },
      { name: "ごま油", amount: "小さじ1", category: "pantry" },
      { name: "乾燥ワカメ", amount: "大さじ1", category: "pantry" }
    ],
    steps: [
      "鶏むね肉は耐熱皿にのせて酒大さじ1（分量外）、塩少々を振り、ふんわりラップしてレンジ600Wで3分加熱。そのまま冷まして蒸し汁を残す。",
      "きゅうりは細切りにし、蒸し鶏は手で細かく割く。すりごま、マヨネーズ、醤油、砂糖、ごま油を混ぜてドレッシングを作り、鶏ときゅうりを和える。",
      "鶏の蒸し汁が入った耐熱皿にお湯300mlを注ぎ、鍋に移して沸騰させる。",
      "ワカメを加え、中華スープの素小さじ1（分量外）、塩コショウで調味して即席スープを作る。",
      "ドレッシング和えを盛り付け、温かいスープを添えて完成。"
    ]
  },
  {
    id: "r_82",
    name: "鶏むね肉とじゃがいもの照り焼き炒め",
    category: "chicken",
    cookingTime: 20,
    description: "ホクホクしたじゃがいもと、しっとり柔らかい鶏むね肉に、定番の甘辛醤油味がよく絡みます。",
    nutrition: {
      calories: 540,
      protein: 29,
      fat: 14,
      carbs: 42,
      salt: 1.9,
      vitaminC: 35,
      calcium: 35,
      iron: 1.6
    },
    ingredients: [
      { name: "鶏むね肉", amount: "250g", category: "meat_fish" },
      { name: "じゃがいも", amount: "2個", category: "vegetable" },
      { name: "片栗粉", amount: "大さじ1", category: "pantry" },
      { name: "醤油", amount: "大さじ1.5", category: "pantry" },
      { name: "みりん", amount: "大さじ1.5", category: "pantry" },
      { name: "酒", amount: "大さじ1.5", category: "pantry" },
      { name: "砂糖", amount: "小さじ2", category: "pantry" },
      { name: "サラダ油", amount: "大さじ1", category: "pantry" }
    ],
    steps: [
      "じゃがいもは皮をむき、8等分のくし切りにし、水にさらしてレンジ600Wで2分半加熱する。鶏肉は一口大のそぎ切りにして片栗粉をまぶす。",
      "醤油、みりん、酒、砂糖を混ぜてタレを作る。",
      "フライパンにサラダ油を熱し、鶏むね肉を入れて中火で両面を焼す。",
      "鶏肉に火が通ったらじゃがいもを加え、表面が少しカリッとするまで炒める。",
      "合わせたタレを流し入れ、強火でタレを煮詰めながら全体に絡めて完成。"
    ]
  },
  {
    id: "r_83",
    name: "ジューシーフライドチキン風 & レタス",
    category: "chicken",
    cookingTime: 25,
    description: "ハーブとスパイスを効かせた衣で、外はカリカリ、中は驚くほどジューシーに仕上げたフライドチキン。",
    nutrition: {
      calories: 630,
      protein: 30,
      fat: 28,
      carbs: 32,
      salt: 2.2,
      vitaminC: 10,
      calcium: 40,
      iron: 1.8
    },
    ingredients: [
      { name: "鶏もも肉", amount: "300g", category: "meat_fish" },
      { name: "牛乳", amount: "50ml", category: "pantry" },
      { name: "小麦粉", amount: "大さじ3", category: "pantry" },
      { name: "片栗粉", amount: "大さじ3", category: "pantry" },
      { name: "塩・粗挽き黒コショウ", amount: "各小さじ1/2", category: "pantry" },
      { name: "ガーリックパウダー", amount: "小さじ1/2", category: "pantry" },
      { name: "パプリカパウダー", amount: "小さじ1/2", category: "pantry" },
      { name: "揚げ油", amount: "適量", category: "pantry" }
    ],
    steps: [
      "鶏もも肉は余分な脂肪を取り、フォークで皮目を刺し、一口大に切る。牛乳、塩コショウ、ガーリックを揉み込み15分置く。",
      "別のボウルに小麦粉、片栗粉、パプリカパウダー、黒コショウ少々を混ぜ合わせる。",
      "鶏肉の汁気を軽く切り、合わせた粉類をしっかりとまぶす。",
      "フライパンに深さ2cm程度の揚げ油を170℃に熱し、皮目を下にして入れる。",
      "4〜5分揚げて、裏返してさらに2分揚げる。最後は強火にしてカリッと油を切る。"
    ]
  },
  {
    id: "r_84",
    name: "牛肉とたまねぎのプルコギ炒め",
    category: "beef",
    cookingTime: 15,
    description: "甘辛い韓国風の特製ダレに漬け込んだ牛肉と玉ねぎを、強火で一気に炒めたスタミナおかず。",
    nutrition: {
      calories: 620,
      protein: 24,
      fat: 24,
      carbs: 38,
      salt: 2.2,
      vitaminC: 15,
      calcium: 45,
      iron: 2.8
    },
    ingredients: [
      { name: "牛バラ薄切り肉", amount: "200g", category: "meat_fish" },
      { name: "玉ねぎ", amount: "1個", category: "vegetable" },
      { name: "ピーマン", amount: "2個", category: "vegetable" },
      { name: "醤油", amount: "大さじ1.5", category: "pantry" },
      { name: "砂糖", amount: "大さじ1.5", category: "pantry" },
      { name: "ごま油", amount: "大さじ1.5", category: "pantry" },
      { name: "おろしにんにく", amount: "小さじ1", category: "pantry" },
      { name: "コチュジャン", amount: "小さじ1", category: "pantry" },
      { name: "白いりごま", amount: "小さじ1", category: "pantry" }
    ],
    steps: [
      "牛肉は一口大に切る。玉ねぎは1cm幅のスライス、ピーマンは細切りにする。醤油、砂糖、にんにく、コチュジャン、ごま油大さじ1/2を混ぜてタレを作る。",
      "ボウルに牛肉、玉ねぎ、ピーマンを入れ、タレをよく揉み込んで10分置く。",
      "フライパンに残りのごま油を強火でしっかりと熱し、漬け込んだ具材を汁ごと入れる。",
      "木べらでほぐしながら強火で一気に炒める。全体に火が通って汁気が少なくなったら器に盛る。",
      "仕上げに白いりごまを散らして完成。"
    ]
  },
  {
    id: "r_85",
    name: "洋食屋さんのビーフシチュー & サラダ",
    category: "beef",
    cookingTime: 40,
    description: "じっくりコトコト煮込んで牛肉とじゃがいもを柔らかく仕上げた、リッチな洋風ディナーメニュー。",
    nutrition: {
      calories: 690,
      protein: 28,
      fat: 30,
      carbs: 45,
      salt: 2.5,
      vitaminC: 30,
      calcium: 60,
      iron: 3.1
    },
    ingredients: [
      { name: "牛すね肉 (またはもも肉)", amount: "250g", category: "meat_fish" },
      { name: "じゃがいも", amount: "1.5個", category: "vegetable" },
      { name: "にんじん", amount: "1本", category: "vegetable" },
      { name: "玉ねぎ", amount: "1個", category: "vegetable" },
      { name: "市販のビーフシチュールー", amount: "1/2箱", category: "pantry" },
      { name: "ブロッコリー", amount: "1/2株", category: "vegetable" }
    ],
    steps: [
      "牛肉は3cm角に切る。じゃがいも、にんじんは大きめの乱切り、玉ねぎはくし切りにする。ブロッコリーは茹でておく。",
      "深めの鍋にバターまたは油（分量外）を熱し、牛肉を入れて表面に焼き色をつける。玉ねぎ、にんじんを加えてよく炒める。",
      "水450ml（ルーの規定量）を加え、沸騰したらアクを丁寧に取り、蓋をして極弱火で約25分煮る。",
      "じゃがいもを加え、さらに10分煮る（じゃがいもが柔らかくなるまで）。",
      "一度火を止め、ルーを溶かし入れて、再び弱火でとろみがつくまで5分煮る。茹でたブロッコリーをのせて完成。"
    ]
  },
  {
    id: "r_86",
    name: "牛肉とエリンギのペッパー醤油炒め",
    category: "beef",
    cookingTime: 12,
    description: "シャキシャキしたエリンギと旨味のある牛肉を、黒胡椒とバター醤油でスパイシーにソテーします。",
    nutrition: {
      calories: 580,
      protein: 24,
      fat: 22,
      carbs: 24,
      salt: 1.8,
      vitaminC: 8,
      calcium: 35,
      iron: 2.4
    },
    ingredients: [
      { name: "牛肩ロース薄切り肉", amount: "200g", category: "meat_fish" },
      { name: "エリンギ", amount: "2本", category: "vegetable" },
      { name: "バター", amount: "10g", category: "pantry" },
      { name: "醤油", amount: "大さじ1.5", category: "pantry" },
      { name: "粗挽き黒コショウ", amount: "小さじ1/2", category: "pantry" },
      { name: "万能ねぎ", amount: "2本", category: "vegetable" }
    ],
    steps: [
      "牛肉は一口大に切る。エリンギは縦半分に切ってから斜め1cm幅に切る。万能ねぎは小口切りにする。",
      "フライパンにサラダ油少々（分量外）を熱し、牛肉を入れて強火で炒める。肉の色が変わったら一度取り出す。",
      "同じフライパンにバターを溶かし、エリンギを入れて中火で炒め、焼き色をつける。",
      "牛肉をフライパンに戻し、醤油、粗挽き黒コショウを一気に加えて強火で手早く炒め合わせる。",
      "器に盛り付け、万能ねぎを散らす。"
    ]
  },
  {
    id: "r_87",
    name: "牛肉とナスのさっぱりトマト煮込み",
    category: "beef",
    cookingTime: 25,
    description: "牛肉のコクとトロトロのナスに、トマト缶の酸味が合わさって、しつこくなくさっぱりといただける煮込み料理。",
    nutrition: {
      calories: 560,
      protein: 25,
      fat: 22,
      carbs: 28,
      salt: 1.9,
      vitaminC: 35,
      calcium: 50,
      iron: 2.8
    },
    ingredients: [
      { name: "牛薄切り肉", amount: "200g", category: "meat_fish" },
      { name: "ナス", amount: "2本", category: "vegetable" },
      { name: "トマト缶 (カット)", amount: "1/2缶 (200g)", category: "pantry" },
      { name: "にんにく", amount: "1かけ", category: "vegetable" },
      { name: "コンソメ顆粒", amount: "小さじ1.5", category: "pantry" },
      { name: "オリーブオイル", amount: "大さじ1", category: "pantry" }
    ],
    steps: [
      "ナスは1.5cm厚さの輪切りにする。にんにくはみじん切りにする。牛肉は3cm幅に切る。",
      "フライパンにオリーブオイルとにんにくを弱火で熱し、香りが立ったらナスを入れて両面を中火でよく焼く。",
      "牛肉を加えてさっと炒め、色が変わったらカットトマト、コンソメ、水100ml（分量外）を加える。",
      "煮立ったら弱火にし、蓋をして12〜15分、ナスが柔らかくなるまで煮込む。",
      "塩・コショウ（分量外）で味を調え、お皿に盛り付ける。"
    ]
  },
  {
    id: "r_88",
    name: "牛肉とごぼうの甘辛しぐれ煮",
    category: "beef",
    cookingTime: 20,
    description: "細切りのごぼうと牛肉を甘辛く煮詰めた、常備菜としても抜群の白ご飯が進む和食定番のおかず。",
    nutrition: {
      calories: 540,
      protein: 23,
      fat: 18,
      carbs: 36,
      salt: 2.2,
      vitaminC: 8,
      calcium: 70,
      iron: 2.7
    },
    ingredients: [
      { name: "牛モモ薄切り肉", amount: "180g", category: "meat_fish" },
      { name: "ごぼう", amount: "1本 (150g)", category: "vegetable" },
      { name: "生姜", amount: "1かけ", category: "vegetable" },
      { name: "醤油", amount: "大さじ2", category: "pantry" },
      { name: "みりん", amount: "大さじ2", category: "pantry" },
      { name: "酒", amount: "大さじ2", category: "pantry" },
      { name: "砂糖", amount: "大さじ1", category: "pantry" }
    ],
    steps: [
      "ごぼうは斜め薄切りにしてから細切りにし、水にさらしてアクを抜いて水気を切る。生姜は細切りにする。牛肉は一口大に切る。",
      "鍋にごま油小さじ1（分量外）を熱し、生姜とごぼうを中火で炒め、しんなりさせる。",
      "牛肉を加えて色が変わるまで炒め合わせる。",
      "醤油、みりん、酒、砂糖を加え、沸騰したら弱火にして汁気がほぼなくなるまで10分ほど煮詰める。",
      "お皿に盛り付け、お好みで一味唐辛子（分量外）を振る。"
    ]
  },
  {
    id: "r_89",
    name: "牛肉とモヤシのオイスター醤油炒め",
    category: "beef",
    cookingTime: 10,
    description: "強火でシャキシャキ感を残して炒めたモヤシと、牛肉のコクがマッチした手早くできる中華おかず。",
    nutrition: {
      calories: 520,
      protein: 22,
      fat: 20,
      carbs: 20,
      salt: 1.9,
      vitaminC: 15,
      calcium: 35,
      iron: 2.3
    },
    ingredients: [
      { name: "牛バラ薄切り肉", amount: "180g", category: "meat_fish" },
      { name: "もやし", amount: "1袋", category: "vegetable" },
      { name: "ニラ", amount: "1/2束", category: "vegetable" },
      { name: "オイスターソース", amount: "大さじ1", category: "pantry" },
      { name: "醤油", amount: "大さじ1/2", category: "pantry" },
      { name: "酒", amount: "大さじ1/2", category: "pantry" },
      { name: "ごま油", amount: "小さじ2", category: "pantry" }
    ],
    steps: [
      "ニラは4cm長さに切り、牛肉は一口大に切る。オイスターソース、醤油、酒を混ぜておく。",
      "フライパンにごま油を強火でしっかりと熱し、牛肉を入れてほぐしながら炒める。",
      "肉の色が変わったら、もやしとニラを一気に加える。",
      "強火のまま、もやしが少ししんなりするまで1分ほど手早く炒め合わせる。",
      "合わせた調味料を鍋肌から回し入れ、全体に絡めながらさっと煽って完成。"
    ]
  },
  {
    id: "r_90",
    name: "ふんわり卵とトマトの中華炒め",
    category: "tofu_egg",
    cookingTime: 12,
    description: "さっと炒めて甘みを引き出したジューシーなトマトと、ふんわり半熟卵の中華風炒め物。シンプルながら絶品。",
    nutrition: {
      calories: 430,
      protein: 16,
      fat: 18,
      carbs: 18,
      salt: 1.7,
      vitaminC: 30,
      calcium: 80,
      iron: 1.8
    },
    ingredients: [
      { name: "卵", amount: "3個", category: "meat_fish" },
      { name: "トマト", amount: "2個", category: "vegetable" },
      { name: "鶏ガラスープの素", amount: "小さじ1", category: "pantry" },
      { name: "醤油", amount: "小さじ1", category: "pantry" },
      { name: "ごま油", amount: "大さじ1", category: "pantry" },
      { name: "万能ねねぎ", amount: "2本", category: "vegetable" }
    ],
    steps: [
      "トマトは一口大のくし形に切る。卵は溶きほぐし、塩少々（分量外）を混ぜる。万能ねぎは斜め千切りにする。",
      "フライパンにごごま油大さじ1/2を強火で熱し、卵液を流し入れる。大きく混ぜて半熟状になったら取り出す。",
      "同じフライパンに残りのごま油を熱し、トマトを入れて中火で炒め、少し角が丸くなったら鶏ガラスープの素と醤油をかける。",
      "卵を戻し入れ、万能ねぎを加え、卵が崩れすぎないように全体を大きく優しく混ぜ合わせる。"
    ]
  },
  {
    id: "r_91",
    name: "豆腐の肉巻き照り焼き",
    category: "tofu_egg",
    cookingTime: 18,
    description: "水切りしたしっかり目の豆腐を豚肉で巻き、甘辛い照り焼きダレを絡めた、ヘルシーなのに大満足のおかず。",
    nutrition: {
      calories: 510,
      protein: 26,
      fat: 20,
      carbs: 24,
      salt: 2.0,
      vitaminC: 10,
      calcium: 150,
      iron: 2.2
    },
    ingredients: [
      { name: "木綿豆腐", amount: "1丁 (300g)", category: "meat_fish" },
      { name: "豚バラ薄切り肉", amount: "120g", category: "meat_fish" },
      { name: "片栗粉", amount: "大さじ1.5", category: "pantry" },
      { name: "醤油", amount: "大さじ1.5", category: "pantry" },
      { name: "みりん", amount: "大さじ1.5", category: "pantry" },
      { name: "酒", amount: "大さじ1.5", category: "pantry" },
      { name: "砂糖", amount: "小さじ2", category: "pantry" },
      { name: "サラダ油", amount: "小さじ2", category: "pantry" }
    ],
    steps: [
      "豆腐はしっかり水切りし、8等分の棒状に切り、軽く塩（分量外）を振る。",
      "豚バラ肉を広げて豆腐に巻き付け、全体に片栗粉を薄くまぶす。醤油、みりん、酒、砂糖を混ぜてタレを作る。",
      "フライパンにサラダ油を中火で熱し、肉巻きの巻き終わりを下にして並べる。",
      "全体を転がしながら焼き色をつけ、余分な油をペーパーで拭き取る。",
      "合わせたタレを流し入れ、強火にしてタレを煮詰めながら全体に絡める。"
    ]
  },
  {
    id: "r_92",
    name: "厚揚げの油淋鶏風ねぎソースかけ",
    category: "tofu_egg",
    cookingTime: 15,
    description: "カリッと焼いた厚揚げに、みじん切りの白ネギと醤油・酢・砂糖を合わせたサッパリピリ辛のソースをかけて。",
    nutrition: {
      calories: 470,
      protein: 20,
      fat: 18,
      carbs: 22,
      salt: 2.2,
      vitaminC: 12,
      calcium: 190,
      iron: 2.5
    },
    ingredients: [
      { name: "厚揚げ", amount: "1パック (2枚)", category: "meat_fish" },
      { name: "白ねぎ", amount: "1/2本", category: "vegetable" },
      { name: "醤油", amount: "大さじ2", category: "pantry" },
      { name: "酢", amount: "大さじ2", category: "pantry" },
      { name: "砂糖", amount: "大さじ1.5", category: "pantry" },
      { name: "ごま油", amount: "小さじ1", category: "pantry" },
      { name: "おろし生姜", amount: "小さじ1/2", category: "pantry" }
    ],
    steps: [
      "白ねぎはみじん切りにし、醤油、酢、砂糖、ごま油、生姜と混ぜ合わせて特製ソースを作る。",
      "厚揚げは一口大に切り、ペーパータオルで軽く押さえて余分な水分と油を取る。",
      "トースターまたはグリルで、厚揚げの表面がカリッとするまで5〜6分焼く。",
      "焼いた厚揚げをお皿に並べる。",
      "上から特製ねぎソースをたっぷりかけ、熱いうちにいただく。"
    ]
  },
  {
    id: "r_93",
    name: "卵とじ親子丼風焼き豆腐",
    category: "tofu_egg",
    cookingTime: 15,
    description: "焼き豆腐を鶏肉の代わりに甘辛いお出汁で煮て、ふんわり卵でとじた胃に優しい高タンパクおかず。",
    nutrition: {
      calories: 450,
      protein: 22,
      fat: 16,
      carbs: 28,
      salt: 2.1,
      vitaminC: 5,
      calcium: 160,
      iron: 2.2
    },
    ingredients: [
      { name: "焼き豆腐", amount: "1丁 (300g)", category: "meat_fish" },
      { name: "玉ねぎ", amount: "1/2個", category: "vegetable" },
      { name: "卵", amount: "2個", category: "meat_fish" },
      { name: "だし汁", amount: "120ml", category: "pantry" },
      { name: "醤油", amount: "大さじ1.5", category: "pantry" },
      { name: "みりん", amount: "大さじ1.5", category: "pantry" },
      { name: "砂糖", amount: "小さじ2", category: "pantry" }
    ],
    steps: [
      "焼き豆腐は一口大に切る。玉ねぎは薄切りにし、卵は軽く溶きほぐす。",
      "小鍋か小さなフライパンにだし汁、醤油、みりん、砂糖、玉ねぎを入れて火にかける。",
      "玉ねぎがしんなりしたら、焼き豆腐を並べて加え、弱火で3分煮て味を含ませる。",
      "溶き卵を全体に回し入れ、蓋をする。",
      "弱火で1分ほど煮て、卵が好みの半熟状になったら火を止める。三つ葉（分量外・お好みで）をあしらう。"
    ]
  },
  {
    id: "r_94",
    name: "ふんわり豆腐ハンバーグ・和風おろしポン酢",
    category: "tofu_egg",
    cookingTime: 20,
    description: "鶏ひき肉と豆腐を同量ずつ混ぜて作った、ふっくらフワフワで低カロリーなヘルシーハンバーグ。",
    nutrition: {
      calories: 480,
      protein: 28,
      fat: 14,
      carbs: 24,
      salt: 1.8,
      vitaminC: 22,
      calcium: 120,
      iron: 2.1
    },
    ingredients: [
      { name: "鶏ひき肉", amount: "150g", category: "meat_fish" },
      { name: "絹ごし豆腐", amount: "150g", category: "meat_fish" },
      { name: "玉ねぎ", amount: "1/2個", category: "vegetable" },
      { name: "パン粉", amount: "大さじ2", category: "pantry" },
      { name: "大根", amount: "8cm", category: "vegetable" },
      { name: "ポン酢醤油", amount: "大さじ3", category: "pantry" }
    ],
    steps: [
      "絹ごし豆腐はペーパータオルに包んで重しをのせ、20分水切りする。玉ねぎはみじん切りにして冷ましておく。大根はおろす。",
      "ボウルに鶏ひき肉、水切りした豆腐、玉ねぎ、パン粉、塩少々（分量外）を入れ、手でよく練り混ぜる。",
      "2等分にして小判形に成形し、中央を軽くくぼませる。",
      "フライパンに油少々（分量外）を熱し、ハンバーグを入れて中火で3分焼く。裏返して蓋をし、弱火で5〜6分蒸し焼きにする。",
      "お皿に盛り付け、大根おろしをのせてポン酢醤油をかける。"
    ]
  },
  {
    id: "r_95",
    name: "明太マヨ厚焼き卵 & トマトスライス",
    category: "tofu_egg",
    cookingTime: 15,
    description: "ピリ辛の明太子とコクのあるマヨネーズを巻き込んでふっくら焼き上げた、居酒屋風の厚焼き卵。",
    nutrition: {
      calories: 460,
      protein: 20,
      fat: 20,
      carbs: 16,
      salt: 2.1,
      vitaminC: 18,
      calcium: 95,
      iron: 1.9
    },
    ingredients: [
      { name: "卵", amount: "3個", category: "meat_fish" },
      { name: "ほぐし明太子", amount: "30g", category: "meat_fish" },
      { name: "マヨネーズ", amount: "大さじ1", category: "pantry" },
      { name: "だし汁", amount: "大さじ2", category: "pantry" },
      { name: "砂糖", amount: "小さじ1", category: "pantry" },
      { name: "トマト", amount: "1個", category: "vegetable" }
    ],
    steps: [
      "トマトは半月切りにして冷やしておく。明太子とマヨネーズを混ぜ合わせておく。",
      "卵をボウルに割り入れ、だし汁、砂糖、塩少々（分量外）を加えて白身を切るように混ぜる。",
      "玉子焼き器に油を熱し、卵液の1/3量を流し入れて広げる。手前に明太マヨネーズを一文字にのせる。",
      "端から奥に向かって巻き、残りの卵液を2〜3回に分けて流し入れながら、形を整えて巻き上げる。",
      "食べやすい大きさに切り、トマトスライスと共に盛り付ける。"
    ]
  },
  {
    id: "r_96",
    name: "簡単！鮭のホイル焼き & ポン酢",
    category: "fish",
    cookingTime: 15,
    description: "アルミホイルに包んで蒸し焼きにするだけ！洗い物も少なく、素材の旨味がギュッと詰まった定番料理。",
    nutrition: {
      calories: 410,
      protein: 26,
      fat: 16,
      carbs: 12,
      salt: 1.5,
      vitaminC: 15,
      calcium: 38,
      iron: 1.3
    },
    ingredients: [
      { name: "生鮭の切り身", amount: "2切れ", category: "meat_fish" },
      { name: "キャベツ", amount: "100g", category: "vegetable" },
      { name: "しめじ", amount: "1/2パック", category: "vegetable" },
      { name: "バター", amount: "10g", category: "pantry" },
      { name: "ポン酢醤油", amount: "大さじ2", category: "pantry" },
      { name: "塩・コショウ", amount: "少々", category: "pantry" }
    ],
    steps: [
      "キャベツはざく切り、しめじは石づきを取ってほぐす。鮭に軽く塩コショウを振る。",
      "アルミホイルを広げ、キャベツ、鮭、しめじの順にのせ、最後にバターをのせる。",
      "ホイルの両端と上部をしっかりと折りたたみ、隙間がないように包み込む。",
      "フライパンに並べて置き、水を高さ1cmほど入れて蓋をし、中火で10分蒸し焼きにする。",
      "ホイルごとお皿に盛り付け、開いてポン酢をかけていただく。"
    ]
  },
  {
    id: "r_97",
    name: "アサリの酒蒸し & ネギ山盛り",
    category: "fish",
    cookingTime: 10,
    description: "アサリの濃厚なダシと白ワイン（または酒）の香りがたまらない、10分でできる超簡単おつまみおかず。",
    nutrition: {
      calories: 180,
      protein: 14,
      fat: 5,
      carbs: 8,
      salt: 1.9,
      vitaminC: 10,
      calcium: 95,
      iron: 4.8
    },
    ingredients: [
      { name: "アサリ (砂抜き済み)", amount: "250g", category: "meat_fish" },
      { name: "にんにく", amount: "1かけ", category: "vegetable" },
      { name: "酒 (または白ワイン)", amount: "50ml", category: "pantry" },
      { name: "万能ねぎ", amount: "3本", category: "vegetable" },
      { name: "バター", amount: "10g", category: "pantry" },
      { name: "醤油", amount: "小さじ1", category: "pantry" }
    ],
    steps: [
      "アサリは殻をこすり合わせるようにしてよく洗う。にんにくはスライスし、ねぎは小口切りにする。",
      "フライパンにバターとにんにくを入れて弱火で熱し、香りが立ったらアサリを加える。",
      "酒（またはワイン）を回し入れ、すぐに蓋をして中火にする。",
      "アサリの口がすべて開くまで約3〜4分蒸し煮にする。",
      "仕上げに醤油を回し入れ、お皿に盛って万能ねぎをたっぷり散らす。"
    ]
  },
  {
    id: "r_98",
    name: "イカと里芋のほっこり甘辛煮",
    category: "fish",
    cookingTime: 20,
    description: "里芋のねっとりした食感に、イカの旨味がたっぷり染み込んだ和食の定番おかず。",
    nutrition: {
      calories: 380,
      protein: 22,
      fat: 6,
      carbs: 32,
      salt: 2.2,
      vitaminC: 12,
      calcium: 50,
      iron: 1.7
    },
    ingredients: [
      { name: "イカ (輪切り・冷凍でも可)", amount: "200g", category: "meat_fish" },
      { name: "里芋 (冷凍可)", amount: "250g", category: "vegetable" },
      { name: "だし汁", amount: "200ml", category: "pantry" },
      { name: "醤油・みりん・酒", amount: "各大さじ2", category: "pantry" },
      { name: "砂糖", amount: "大さじ1", category: "pantry" },
      { name: "生姜", amount: "1かけ", category: "vegetable" }
    ],
    steps: [
      "生姜は薄切りにする。里芋は皮をむいて一口大に切る（冷凍の場合はそのまま使う）。イカは下処理して輪切りにする。",
      "鍋にだし汁、醤油、みりん、酒、砂糖、生姜を入れて沸騰させる。",
      "里芋を入れて中火で10分、竹串がスッと通るまで煮る。",
      "イカを加え、火が通りすぎないように弱火で4〜5分煮る（イカは加熱しすぎると硬くなるため最後に入れます）。",
      "一度火を止めて冷まし、味を里芋に染み込ませてから器に盛る。"
    ]
  },
  {
    id: "r_99",
    name: "鮭の塩焼き & 大根おろし",
    category: "fish",
    cookingTime: 12,
    description: "日本の朝食・夕食のド定番。脂ののった塩鮭を皮目までパリッと香ばしく焼き上げます。",
    nutrition: {
      calories: 390,
      protein: 25,
      fat: 15,
      carbs: 8,
      salt: 1.8,
      vitaminC: 15,
      calcium: 30,
      iron: 1.2
    },
    ingredients: [
      { name: "塩鮭の切り身", amount: "2切れ", category: "meat_fish" },
      { name: "大根", amount: "8cm", category: "vegetable" },
      { name: "醤油", amount: "適量", category: "pantry" }
    ],
    steps: [
      "大根はおろして軽く水気を絞っておく。",
      "グリルを予熱し、鮭の皮目を上にして強火で焼く（フライパンの場合はクッキングシートを敷いて中火で焼く）。",
      "片面にきれいな焼き色がついたら裏返し、中までしっかりと火を通す（両面で計8〜10分）。",
      "お皿に盛り付け、大根おろしをたっぷりと添え、お好みで醤油をかけていただく。"
    ]
  },
  {
    id: "r_100",
    name: "豚こま肉の簡単酢豚風炒め",
    category: "pork",
    cookingTime: 15,
    description: "塊肉の代わりに薄切り肉を丸めて使うことで、時短で柔らかく仕上がるお手軽酢豚です。",
    nutrition: {
      calories: 540,
      protein: 21,
      fat: 22,
      carbs: 34,
      salt: 2.1,
      vitaminC: 35,
      calcium: 40,
      iron: 1.5
    },
    ingredients: [
      { name: "豚こま切れ肉", amount: "200g", category: "meat_fish" },
      { name: "玉ねぎ", amount: "1/2個", category: "vegetable" },
      { name: "ピーマン", amount: "2個", category: "vegetable" },
      { name: "人参", amount: "1/3本", category: "vegetable" },
      { name: "ケチャップ・酢・砂糖・醤油", amount: "各大さじ1.5", category: "pantry" },
      { name: "片栗粉", amount: "大さじ1 (まぶす用)", category: "pantry" }
    ],
    steps: [
      "玉ねぎ、ピーマン、人参は一口大の乱切りにする。人参はレンジで1分半加熱する。豚肉は手でぎゅっと丸めてボール状にし、片栗粉をまぶす。",
      "ケチャップ、酢、砂糖、醤油、水大さじ2（分量外）を混ぜて甘酢ダレを作る。",
      "フライパンに油大さじ1（分量外）を熱し、丸めた豚肉を入れて転がしながら中火で全体をこんがり焼く。",
      "野菜を加えて2分ほど炒め合わせ、全体に火を通す。",
      "甘酢ダレを一気に流し込み、強火でタレがとろっと絡みつくまで炒め合わせる。"
    ]
  },
  {
    id: "r_101",
    name: "豚バラとキャベツの塩バター炒め",
    category: "pork",
    cookingTime: 12,
    description: "豚バラ肉の甘みとキャベツのシャキシャキ感に、コクのあるバターと塩コショウが相性抜群のスピードおかず。",
    nutrition: {
      calories: 560,
      protein: 18,
      fat: 26,
      carbs: 16,
      salt: 1.8,
      vitaminC: 38,
      calcium: 45,
      iron: 1.3
    },
    ingredients: [
      { name: "豚バラ薄切り肉", amount: "150g", category: "meat_fish" },
      { name: "キャベツ", amount: "1/4個 (200g)", category: "vegetable" },
      { name: "バター", amount: "15g", category: "pantry" },
      { name: "塩・コショウ", amount: "少々", category: "pantry" },
      { name: "鶏ガラスープの素", amount: "小さじ1/2", category: "pantry" },
      { name: "にんにく", amount: "1かけ", category: "vegetable" }
    ],
    steps: [
      "豚肉は一口大に切り、キャベツは手でざく切りにする。にんにくはスライスする。",
      "フライパンにバター半量とにんにくを入れて弱火で熱し、香りが立ったら豚肉を入れて中火で炒める。",
      "豚肉の色が変わったらキャベツを加え、強火にして手早く炒め合わせる。",
      "キャベツが少ししんなりしたら、塩コショウ、ガラスープの素、残りのバターを加えてさっと混ぜ合わせる。"
    ]
  },
  {
    id: "r_102",
    name: "さっぱり！豚の冷しゃぶごまドレサラダ",
    category: "pork",
    cookingTime: 12,
    description: "夏の定番。冷たく冷やした柔らかい豚しゃぶ肉と、たっぷりの生野菜を濃厚なごまドレッシングでいただきます。",
    nutrition: {
      calories: 490,
      protein: 24,
      fat: 22,
      carbs: 18,
      salt: 2.0,
      vitaminC: 25,
      calcium: 50,
      iron: 1.4
    },
    ingredients: [
      { name: "豚ロースしゃぶしゃぶ用肉", amount: "200g", category: "meat_fish" },
      { name: "レタス", amount: "3枚", category: "vegetable" },
      { name: "きゅうり", amount: "1/2本", category: "vegetable" },
      { name: "トマト", amount: "1個", category: "vegetable" },
      { name: "市販のごまドレッシング", amount: "適量", category: "pantry" }
    ],
    steps: [
      "レタスは一口大にちぎり、きゅうりは斜め薄切り、トマトはくし形に切ってお皿に盛る。",
      "鍋にお湯を沸かし、火を止めてから（または極弱火にして）豚肉を1枚ずつ広げてくぐらせる。",
      "お肉の色が変わったらすぐにお湯から引き上げ、ザルにあげて自然に冷ます（氷水につけないことで柔らかさが保てます）。",
      "冷ました豚肉をお皿の野菜の上にふんわりと盛り付ける。",
      "食べる直前にごまドレッシングをたっぷりとかけていただく。"
    ]
  },
  {
    id: "r_103",
    name: "王道！サクサクとんかつ & 千切りキャベツ",
    category: "pork",
    cookingTime: 20,
    description: "ボリューム満点の王道おかず。ジューシーな豚ロースをカリッと黄金色に揚げて、千切りキャベツを山盛りに添えて。",
    nutrition: {
      calories: 680,
      protein: 26,
      fat: 34,
      carbs: 32,
      salt: 2.2,
      vitaminC: 35,
      calcium: 45,
      iron: 1.6
    },
    ingredients: [
      { name: "豚ロースとんかつ用肉", amount: "2枚 (240g)", category: "meat_fish" },
      { name: "卵・小麦粉・パン粉", amount: "各適量", category: "pantry" },
      { name: "キャベツ", amount: "1/4個", category: "vegetable" },
      { name: "とんかつソース", amount: "適量", category: "pantry" },
      { name: "揚げ油", amount: "適量", category: "pantry" }
    ],
    steps: [
      "キャベツは千切りにして水にさらし、水気をしっかり切ってお皿に盛る。",
      "豚肉は筋を包丁の先で数箇所切り、肉たたき等で軽く叩いて塩コショウ（分量外）を振る。",
      "小麦粉、溶き卵、パン粉の順に衣をしっかりとつける。",
      "170℃に熱した揚げ油に豚肉を静かに入れ、約4〜5分揚げる。ひっくり返してさらに2分、きつね色になるまで揚げる。",
      "油をよく切って食べやすい大きさにカットし、キャベツの横に盛り付け、ソースをかける。"
    ]
  },
  {
    id: "r_104",
    name: "大定番！ジューシー鶏の唐揚げ & レモン",
    category: "chicken",
    cookingTime: 20,
    description: "みんな大好き、お弁当やおかずの大定番！二度揚げすることで外はカリカリ、中はジューシーに仕上がります。",
    nutrition: {
      calories: 610,
      protein: 28,
      fat: 26,
      carbs: 32,
      salt: 2.1,
      vitaminC: 18,
      calcium: 35,
      iron: 1.6
    },
    ingredients: [
      { name: "鶏もも肉", amount: "300g (1枚)", category: "meat_fish" },
      { name: "醤油・酒", amount: "各大さじ1.5", category: "pantry" },
      { name: "おろし生姜・おろしにんにく", amount: "各小さじ1", category: "pantry" },
      { name: "片栗粉", amount: "大さじ4", category: "pantry" },
      { name: "レモン", amount: "1/4個", category: "vegetable" },
      { name: "揚げ油", amount: "適量", category: "pantry" }
    ],
    steps: [
      "鶏もも肉は余分な脂肪を取り除き、一口大に切る。",
      "ポリ袋に鶏肉、醤油、酒、おろし生姜、にんにくを入れてよく揉み込み、15分置く。",
      "鶏肉の汁気を軽く切り、片栗粉を袋に加えて全体にしっかりとまぶす。",
      "170℃の油で3分揚げ、一度取り出して2分休ませる。その後180℃に上げた油で1分カリッと二度揚げする。",
      "油を切ってお皿に盛り付け、カットしたレモンを添える。"
    ]
  },
  {
    id: "r_105",
    name: "プリプリ鶏もも肉のチリソース炒め（鶏チリ）",
    category: "chicken",
    cookingTime: 15,
    description: "エビの代わりに安価な鶏もも肉を使用。甘辛酸っぱいチリソースがご飯によく合います。",
    nutrition: {
      calories: 560,
      protein: 26,
      fat: 22,
      carbs: 26,
      salt: 2.2,
      vitaminC: 15,
      calcium: 40,
      iron: 1.5
    },
    ingredients: [
      { name: "鶏もも肉", amount: "250g", category: "meat_fish" },
      { name: "長ねぎ", amount: "1/2本", category: "vegetable" },
      { name: "ケチャップ", amount: "大さじ3", category: "pantry" },
      { name: "豆板醤", amount: "小さじ1/2", category: "pantry" },
      { name: "醤油・砂糖・酒", amount: "各大さじ1", category: "pantry" },
      { name: "片栗粉", amount: "大さじ1", category: "pantry" },
      { name: "にんにく・生姜チューブ", amount: "各小さじ1", category: "pantry" }
    ],
    steps: [
      "鶏もも肉は一口大に切り、酒（分量外・小さじ1）と塩少々を振り、片栗粉を薄くまぶす。長ねぎはみじん切りにする。",
      "ケチャップ、砂糖、醤油、酒、水大さじ2（分量外）を混ぜ合わせておく。",
      "フライパンに油大さじ1（分量外）を熱し、鶏肉を皮目から中火で香ばしく焼く。火が通ったら一度取り出す。",
      "同じフライパンににんにく、生姜、豆板醤を入れて弱火で熱し、香りが立ったら合わせた調味料とねぎを加える。",
      "フツフツとしたら鶏肉を戻し、強火でタレを一気に絡め合わせる。"
    ]
  },
  {
    id: "r_106",
    name: "レンジで簡単！しっとり よだれ鶏",
    category: "chicken",
    cookingTime: 15,
    description: "火を使わずレンジで調理！しっとり蒸した鶏むね肉に、ピリ辛のごま醤油ダレをたっぷりかけた人気中華メニュー。",
    nutrition: {
      calories: 420,
      protein: 34,
      fat: 14,
      carbs: 15,
      salt: 2.1,
      vitaminC: 10,
      calcium: 50,
      iron: 1.8
    },
    ingredients: [
      { name: "鶏むね肉", amount: "300g (1枚)", category: "meat_fish" },
      { name: "長ねぎ", amount: "1/3本", category: "vegetable" },
      { name: "醤油・酢", amount: "各大さじ1.5", category: "pantry" },
      { name: "砂糖・ごま油", amount: "各大さじ1", category: "pantry" },
      { name: "ラー油", amount: "小さじ1", category: "pantry" },
      { name: "おろしにんにく・生姜", amount: "各小さじ1/2", category: "pantry" },
      { name: "酒 (蒸し用)", amount: "大さじ1", category: "pantry" }
    ],
    steps: [
      "長ねぎはみじん切りにし、醤油、酢、砂糖、ごま油、ラー油、にんにく、生姜と混ぜ合わせてピリ辛タレを作る。",
      "鶏むね肉は皮を取り、フォークで全体を数箇所刺して、酒、塩少々（分量外）を振って耐熱皿にのせる。",
      "ふんわりとラップをかけ、電子レンジ600Wで3分加熱する。ひっくり返してさらに1分半加熱し、レンジの中で5分蒸らす。",
      "冷めたら食べやすい厚さにスライスしてお皿に盛る。",
      "上から特製のピリ辛タレをたっぷりとかける。お好みでトッピングに砕いたピーナッツやパクチー（分量外）をのせても美味。"
    ]
  },
  {
    id: "r_107",
    name: "市販のルーで作るゴロゴロチキンカレー",
    category: "chicken",
    cookingTime: 25,
    description: "鶏もも肉と定番野菜をコトコト煮込んだ、シンプルイズベストな家庭風カレーライス。",
    nutrition: {
      calories: 680,
      protein: 26,
      fat: 22,
      carbs: 85,
      salt: 2.5,
      vitaminC: 22,
      calcium: 50,
      iron: 1.9
    },
    ingredients: [
      { name: "鶏もも肉", amount: "250g", category: "meat_fish" },
      { name: "じゃがいも", amount: "2個", category: "vegetable" },
      { name: "にんじん", amount: "1本", category: "vegetable" },
      { name: "玉ねぎ", amount: "1個", category: "vegetable" },
      { name: "カレールー (市販)", amount: "1/2箱", category: "pantry" },
      { name: "サラダ油", amount: "大さじ1", category: "pantry" }
    ],
    steps: [
      "じゃがいも、にんじん、玉ねぎ、鶏肉はすべて一口大に切る。",
      "大きめの鍋にサラダ油を熱し、鶏肉を中火で炒め、焼き色がついたら玉ねぎ、にんじん、じゃがいもを加える。",
      "玉ねぎがしんなりするまで全体をよく炒め合わせる。",
      "水500ml（ルーの規定量）を加え、沸騰したらアクを取り、蓋をして弱火で15分ほど具材が柔らかくなるまで煮込む。",
      "火を止めてルーを割り入れ、よく溶かしてから再び弱火で5分ほどとろみがつくまで煮る。"
    ]
  },
  {
    id: "r_108",
    name: "大人気！吉野家風・つゆだく牛丼",
    category: "beef",
    cookingTime: 12,
    description: "甘辛く煮たジューシーな薄切り牛肉と、クタクタになった甘い玉ねぎがご飯にからむ大人気牛丼。",
    nutrition: {
      calories: 650,
      protein: 22,
      fat: 20,
      carbs: 72,
      salt: 2.4,
      vitaminC: 5,
      calcium: 40,
      iron: 2.6
    },
    ingredients: [
      { name: "牛バラ薄切り肉", amount: "200g", category: "meat_fish" },
      { name: "玉ねぎ", amount: "1個", category: "vegetable" },
      { name: "だし汁", amount: "150ml", category: "pantry" },
      { name: "醤油・酒・みりん", amount: "各大さじ2.5", category: "pantry" },
      { name: "砂糖", amount: "大さじ1.5", category: "pantry" },
      { name: "温かいご飯", amount: "2杯分", category: "pantry" }
    ],
    steps: [
      "玉ねぎは1cm幅のくし切りにし、牛肉は一口大に切る。",
      "フライパンまたは鍋にだし汁、醤油、酒、みりん、砂糖を入れて火にかけ、沸騰させる。",
      "玉ねぎを入れて中火で3〜4分煮て、少ししんなりさせる。",
      "牛肉を重ならないように広げながら加え、アクが出たら丁寧に取り除く。",
      "弱火にしてフタをし、さらに5〜6分煮て味が染み込んだら、丼に盛ったご飯の上につゆごとのせる。お好みで紅生姜（分量外）を添える。"
    ]
  },
  {
    id: "r_109",
    name: "おふくろの味！ほっこり肉じゃが",
    category: "beef",
    cookingTime: 25,
    description: "日本の家庭料理の代表格。じゃがいもに牛肉の旨味とお出汁の甘辛い味がじっくり染み込んだ優しい味。",
    nutrition: {
      calories: 520,
      protein: 18,
      fat: 16,
      carbs: 45,
      salt: 2.2,
      vitaminC: 35,
      calcium: 45,
      iron: 2.2
    },
    ingredients: [
      { name: "牛薄切り肉", amount: "150g", category: "meat_fish" },
      { name: "じゃがいも", amount: "3個", category: "vegetable" },
      { name: "人参", amount: "1/2本", category: "vegetable" },
      { name: "玉ねぎ", amount: "1/2個", category: "vegetable" },
      { name: "だし汁", amount: "300ml", category: "pantry" },
      { name: "醤油・みりん・酒", amount: "各大さじ2", category: "pantry" },
      { name: "砂糖", amount: "大さじ1", category: "pantry" }
    ],
    steps: [
      "じゃがいもは皮をむき4等分にし水にさらす。人参は乱切り、玉ねぎはくし切り、牛肉は一口大に切る。",
      "鍋にサラダ油小さじ2（分量外）を熱し、牛肉を炒める。色が変わったら玉ねぎ、人参、じゃがいもを加えて炒め合わせる。",
      "だし汁、酒、砂糖、みりんを加え、沸騰したらアクを取る。",
      "醤油を加え、落とし蓋（アルミホイルなど）をして中火で15分、煮汁が1/3程度になり野菜が柔らかくなるまで煮込む。",
      "一度冷ますと味が芯までギュッと染み込みます。"
    ]
  },
  {
    id: "r_110",
    name: "簡単おうち焼肉 & サニーレタス",
    category: "beef",
    cookingTime: 12,
    description: "焼肉のタレでパパッと炒めるだけ！サニーレタスにお肉を巻いてさっぱりヘルシーにいただきます。",
    nutrition: {
      calories: 590,
      protein: 22,
      fat: 28,
      carbs: 26,
      salt: 2.0,
      vitaminC: 15,
      calcium: 38,
      iron: 2.5
    },
    ingredients: [
      { name: "牛カルビ薄切り肉 (またはロース)", amount: "200g", category: "meat_fish" },
      { name: "玉ねぎ", amount: "1/2個", category: "vegetable" },
      { name: "市販の焼肉のタレ", amount: "大さじ4", category: "pantry" },
      { name: "サニーレタス", amount: "4枚", category: "vegetable" },
      { name: "ごま油", amount: "大さじ1/2", category: "pantry" }
    ],
    steps: [
      "玉ねぎは薄切りにし、サニーレタスは洗ってよく水気を切っておく。",
      "牛肉に焼肉のタレ大さじ1を揉み込んで下味をつける。",
      "フライパンにごま油を熱し、玉ねぎを中火で炒め、透明感が出てきたら端に寄せる。",
      "空いたスペースで牛肉を強火で焼き、肉の色が変わったら玉ねぎと混ぜ合わせる。",
      "残りの焼肉のタレを回し入れてさっと炒め合わせ、サニーレタスを添えて盛り付ける。"
    ]
  },
  {
    id: "r_111",
    name: "コク旨ハヤシライス & ミニサラダ",
    category: "beef",
    cookingTime: 20,
    description: "デミグラスソースのコクとトマトの酸味がたまらないハヤシライス。ルーを使って手軽に本格的な味わいに。",
    nutrition: {
      calories: 670,
      protein: 24,
      fat: 25,
      carbs: 82,
      salt: 2.3,
      vitaminC: 12,
      calcium: 45,
      iron: 2.7
    },
    ingredients: [
      { name: "牛薄切り肉", amount: "180g", category: "meat_fish" },
      { name: "玉ねぎ", amount: "1個", category: "vegetable" },
      { name: "マッシュルーム", amount: "50g", category: "vegetable" },
      { name: "ハヤシライスのルー", amount: "1/2箱", category: "pantry" },
      { name: "バター", amount: "10g", category: "pantry" },
      { name: "レタス・トマト (サラダ用)", amount: "各適量", category: "vegetable" }
    ],
    steps: [
      "玉ねぎはスライスし、マッシュルームは薄切り、牛肉は一口大に切る。",
      "鍋にバターを熱し、玉ねぎを中火でしんなりして薄く色づくまでよく炒める。",
      "牛肉とマッシュルームを加えて炒め、肉の色が変わったら水350ml（ルーの規定量）を加える。",
      "沸騰したらアクを取り、弱火で10分ほどコトコト煮込む。",
      "火を止めてルーを溶かし入れ、再び弱火で5分ほどとろみがつくまで煮る。サラダを添える。"
    ]
  },
  {
    id: "r_112",
    name: "冷奴・山盛りキムチと韓国のりのせ",
    category: "tofu_egg",
    cookingTime: 5,
    description: "切ってのせるだけ！ひんやり豆腐にピリ辛キムチと香ばしい韓国のりをのせた、一番簡単な即席おかず。",
    nutrition: {
      calories: 220,
      protein: 14,
      fat: 10,
      carbs: 12,
      salt: 1.4,
      vitaminC: 12,
      calcium: 150,
      iron: 2.1
    },
    ingredients: [
      { name: "絹ごし豆腐", amount: "1丁 (300g)", category: "meat_fish" },
      { name: "白菜キムチ", amount: "80g", category: "pantry" },
      { name: "韓国のり", amount: "4枚", category: "pantry" },
      { name: "ごま油", amount: "小さじ1", category: "pantry" },
      { name: "万能ねぎ", amount: "1本", category: "vegetable" }
    ],
    steps: [
      "豆腐は水気を切り、半分に切ってお皿に盛る。ねぎは小口切りにする。",
      "豆腐の上に白菜キムチを山盛りにのせる。",
      "韓国のりを手で粗くちぎってキムチの上に散らす。",
      "ごま油を回しかけ、ねぎを散らす。お好みで醤油（分量外）を数滴垂らしていただく。"
    ]
  },
  {
    id: "r_113",
    name: "中華屋さんの定番ニラ玉炒め",
    category: "tofu_egg",
    cookingTime: 10,
    description: "ニラの香りとふわふわ半熟卵の相性が最高の、中華屋さんの大定番スピードメニュー。",
    nutrition: {
      calories: 390,
      protein: 18,
      fat: 24,
      carbs: 10,
      salt: 1.6,
      vitaminC: 30,
      calcium: 85,
      iron: 2.3
    },
    ingredients: [
      { name: "ニラ", amount: "1束", category: "vegetable" },
      { name: "卵", amount: "3個", category: "meat_fish" },
      { name: "鶏ガラスープの素", amount: "小さじ1/2", category: "pantry" },
      { name: "醤油・酒", amount: "各大さじ1/2", category: "pantry" },
      { name: "ごま油", amount: "大さじ1", category: "pantry" },
      { name: "オイスターソース", amount: "小さじ1", category: "pantry" }
    ],
    steps: [
      "ニラは4cm長さに切る。卵はボウルに割り入れ、鶏ガラスープの素、塩少々（分量外）を加えてよく溶きほぐす。",
      "醤油、酒、オイスターソースを小さな器に混ぜ合わせておく。",
      "フライパンにごま油大さじ1/2を強火でよく熱し、卵液を入れて大きくかき混ぜ、半熟状になったらすぐにお皿に取り出す。",
      "残りのごま油を熱し、ニラを強火でさっと炒める（炒めすぎずシャキッと仕上げる）。",
      "合わせた調味料と卵をフライパンに戻し、強火で全体を大きく混ぜ合わせてすぐに火を止める。"
    ]
  },
  {
    id: "r_114",
    name: "ふんわり卵とだしの優しい卵雑炊",
    category: "tofu_egg",
    cookingTime: 10,
    description: "優しく香るお出汁に、ふんわり溶き卵を合わせた、胃に優しくホッとする簡単雑炊。",
    nutrition: {
      calories: 320,
      protein: 12,
      fat: 8,
      carbs: 48,
      salt: 1.8,
      vitaminC: 5,
      calcium: 45,
      iron: 1.5
    },
    ingredients: [
      { name: "卵", amount: "2個", category: "meat_fish" },
      { name: "冷やご飯", amount: "1杯分", category: "pantry" },
      { name: "白だし", amount: "大さじ2", category: "pantry" },
      { name: "水", amount: "300ml", category: "pantry" },
      { name: "万能ねぎ", amount: "2本", category: "vegetable" }
    ],
    steps: [
      "冷やご飯はザルに入れ、流水でさっと洗ってぬめりを取り、水気を切る（これでさらっと仕上がります）。卵は溶きほぐしておく。",
      "小鍋に水と白だしを入れて沸騰させる。",
      "ご飯を加え、弱火で3〜4分煮てご飯をふっくらとさせる。",
      "強火にして煮立たせ、溶き卵を細く円を描くように回し入れる。",
      "卵がふんわりと固まり始めたらすぐに火を止めて、蓋をして1分蒸らす。器に盛り、小口切りのねぎを散らす。"
    ]
  },
  {
    id: "r_115",
    name: "とろ〜り温まる昆布だしの湯豆腐",
    category: "tofu_egg",
    cookingTime: 10,
    description: "昆布だしでシンプルに豆腐を温めて。ねぎ、おろし生姜、かつお節を薬味にポン酢でいただくヘルシー和食。",
    nutrition: {
      calories: 210,
      protein: 15,
      fat: 9,
      carbs: 10,
      salt: 1.5,
      vitaminC: 8,
      calcium: 180,
      iron: 2.5
    },
    ingredients: [
      { name: "木綿豆腐", amount: "1丁 (350g)", category: "meat_fish" },
      { name: "だし昆布", amount: "5cm", category: "pantry" },
      { name: "長ねぎ", amount: "1/2本", category: "vegetable" },
      { name: "かつお節", amount: "1パック (2.5g)", category: "pantry" },
      { name: "ポン酢醤油", amount: "大さじ3", category: "pantry" },
      { name: "おろし生姜", amount: "小さじ1", category: "pantry" }
    ],
    steps: [
      "豆腐は一口大に切る。長ねぎは斜め薄切りにする。鍋に水400ml（分量外）とだし昆布を入れて30分置いておく。",
      "鍋を中火にかけ、沸騰直前に昆布を取り出す（沸騰させるとえぐみが出るため）。",
      "豆腐と長ねぎを加え、弱火にして豆腐が温まり、ねぎがしんなりするまで4〜5分煮る（グラグラ沸騰させないのが豆腐を柔らかく仕上げるコツ）。",
      "器に豆腐とねぎを取り分け、長ねぎ、かつお節、おろし生姜をのせる。",
      "ポン酢醤油をかけて熱々のうちにいただく。"
    ]
  }
];

export const CATEGORY_LABELS = {
  fish: "魚料理",
  pork: "豚肉料理",
  chicken: "鶏肉料理",
  beef: "牛肉料理",
  tofu_egg: "豆腐・卵料理"
};

// Recommended Daily Allowances for Dinner (roughly 1/3 of daily values for active adults)
export const RDA_DINNER = {
  calories: 700,    // kcal
  protein: 25,      // g
  fat: 22,          // g
  carbs: 85,        // g (assuming rice is eaten, we add ~40-50g carbs from a bowl of rice in the calculation)
  salt: 2.5,        // g (this is a max limit, lower is better)
  vitaminC: 33,     // mg (1/3 of 100mg)
  calcium: 220,     // mg (1/3 of 650mg)
  iron: 2.5         // mg (1/3 of 7.5mg)
};
