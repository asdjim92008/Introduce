// 🗓️ 多筆資料 + 分類
const itineraryData = {
  1: [
    {
      name: "肉蛋飯糰",
      category: "美食",
	  map_location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6020.424447080302!2d127.64619103042679!3d26.204295974549215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e569b79929e9c5%3A0x97508c627485ac4a!2z54-A5aGU55GqIOmCo-mcuOapn-WgtOWci-WFp-e3muWIsOmBlOWkp-W7s-W6lw!5e0!3m2!1szh-TW!2stw!4v1761056553806!5m2!1szh-TW!2stw",
      info: [
		{ 
			img: "day1/t1menu.jpg", 
			review: "菜單" 
		},
		{ 
			img: "day1/t1p1.jpg", 
			review: "這次品嚐國內線的分店，需要排隊半小時左右，最好吃的是山苦瓜口味，接著是招牌口味，整體來說搭配午餐肉是好吃的，但價格偏貴" 
		},
        { 
			img: "day1/t1p2.jpg", 
			review: "在做沖繩旅遊功課的時候，很多人推薦的那霸機場必吃「豬肉蛋飯糰 pork tamago onigiri」，還好我一早8：30要在那霸機場坐OTS的接駁車，所以可以先來嚐鮮一番，而且也不用排隊~口味還算不錯，份量也適中，但是也不能算是必吃美食~應該說是吃一種儀式感，有來吃過才能算來過那霸機場吧😁" 
		},
        { 
			img: "day1/t1p3.jpg", 
			review: "那霸機場（Naha Airport）9:20抵達，出關後前往國內線找吃的...排隊點餐到取餐，大概只花了15分鐘，蠻快的。飯團真的好好吃，苦瓜天婦羅口味超級好吃....均銷約600-650日元" 
		}
      ]
    },
	{
      name: "住宿ホテルトーマス牧志",
      category: "景點",
	  map_location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223.7101187135447!2d127.69089730858086!3d26.217428059682504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e5697b3ae7241d%3A0x2f2434c1d31cb98!2zQW5uZXNzbyDniaflv5flhazlr5PlvI_po6_lupc!5e0!3m2!1szh-TW!2stw!4v1761230683165!5m2!1szh-TW!2stw",
      info: [
        { 
			img: "day1/t2p1.png", 
			review: "" 
		},
        { 
			img: "day1/t2p2.png", 
			review: "" 
		},
		{ 
			img: "day1/t2p3.png", 
			review: "" 
		},
		{ 
			img: "day1/t2p4.png", 
			review: "" 
		},
      ]
    },
	{
      name: "國際通",
      category: "購物",
	  map_location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.432073672106!2d127.68217007524659!3d26.215146877069834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e5697751412f31%3A0x8d6939f65e915e02!2zS29rdXNhaS1kb3JpLCBOYWhhLCBPa2luYXdhLCDml6XmnKw!5e0!3m2!1szh-TW!2stw!4v1761362904216!5m2!1szh-TW!2stw",
      info: [
        { 
			img: "day1/t3p1.png", 
			review: "選擇旅行最後兩晚住在距離國際通五分鐘，真的是非常讚的計劃！可以買好買滿" 
		},
      ]
    },
	{
      name: "國際通花商花生豆腐",
      category: "美食",
	  map_location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.4886677007967!2d127.68376398068155!3d26.21330701795003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e56970f10cc05d%3A0x86233d377a872ee3!2z6Iqx5ZWGIOiKseeUn-ixhuiFkOWwiOmWgOW6lw!5e0!3m2!1szh-TW!2stw!4v1761362982521!5m2!1szh-TW!2stw",
      info: [
        { 
			img: "day1/t4p1.png", 
			review: "豆腐的口感很像日式麻糬，又有點像豆花，又有點像奶酪的口感，總是QQ軟軟是我喜歡吃的。還提供 黑糖、醬油、鹽、黃豆粉、芥末可以組合著吃。每一種都搭配看看。可能是被外帶豆腐附的醬油給影響了，好像加醬油就很好吃。一個350日元" 
		},
        { 
			img: "day1/t4p2.png", 
			review: "特別好吃的沖繩豆腐 口感像麻糬 可以加黑糖蜜, 醬油,花生粉 ,芥末°便宜不要錯過喔" 
		}
      ]
    },
	{
      name: "國際通 琉球之牛",
      category: "美食",
	  map_location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.396740888394!2d127.68660037524674!3d26.216295477069124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e5697a5f508d49%3A0xef2a6d4e64028cc5!2z54eS6IKJIOeQieeQg-S5i-eJmyDpgqPpnLjlnIvpmpvpgJrvvIgzRu-8iQ!5e0!3m2!1szh-TW!2stw!4v1761363316861!5m2!1szh-TW!2stw",
      info: [
        { 
			img: "day1/t5p1.png", 
			review: "整體來說還不錯位置在一棟大樓的3樓 要搭電梯 烤肉方式不是一般那種加熱法 這次點晚餐推薦套餐的12種肉/壽喜燒 肉很好吃 一口即化 訂位有點難 但比較晚的時候有機會直接進去" 
		},
        { 
			img: "day1/t5p2.png", 
			review: "對我來說，這家餐廳唯一的缺點就是都要提前訂位，不然都沒有位置🥺🥺，果然是沖繩在地的人氣名店！那時候聽我的在地朋友說，這家店必打卡，頂級的烤肉，搭配好喝的生啤就是人生一大享受了😎每個肉都入口即化，便宜又好吃，我們六個人花了30,000日幣，點了超多肉品、配菜、套餐（還有壽司）吃到超飽！" 
		}
      ]
    },
  ],
  2: [
    {
      name: "orix租車公司",
      category: "景點",
	  map_location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d527.5695498481494!2d127.65479397167987!3d26.158134312973477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e5680bda12f44f%3A0x2f64d878b7a9f3a5!2sORIX%20Rent-a-car%20Naha%20Airport!5e0!3m2!1szh-TW!2stw!4v1761363814297!5m2!1szh-TW!2stw",
      info: [
        { 
			img: "day2/t1p1.png", 
			review: "【從領車到還車手續簡便，服務周到】▲心得：從機場國際線抵達後，可沿指標一路往國內線走，抵達入境大廳後走至馬路外，找到14號的接駁站柱子即可，就會看見ORIX的工作人員舉牌接應，再提供預訂的相關資料跟它們確認即可(確認後他會給一塊號碼牌)，接駁車約開20min會抵達租車中心，再依櫃台人員指示辦理領車手續即可。▲交通：還車時導航即可抵達，看見返卻口開過去將車子交給工作人即可，再到櫃台辦理還車手續。▲備註：1.記得準備日文譯本、台灣駕照、護照。2.現場可加購ETC卡，建議一定要租借，可省去高速公路上不少時間，過路費不會太貴。" 
		}
      ]
    },
    {
      name: "沖繩世界文化王國 玉泉洞",
      category: "景點",
	  map_location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.7300853367174!2d127.74685947524415!3d26.14034227711595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e56985519f786b%3A0x5e9a8bdcd64306dd!2z546J5rOJ5rSe!5e0!3m2!1szh-TW!2stw!4v1761364155386!5m2!1szh-TW!2stw",
      info: [
        { 
			img: "day2/t2p1.png", 
			review: "沖繩景點中排名第一的知名景點，知名的鐘乳石洞全長走道890公尺，平日人不多順順走完加拍拍照大約30分鐘，洞底很潮濕，大大小小的鐘乳石柱還特別取了名字，加上燈光襯托很有奇幻世界的氛圍，地面幾乎全程不銹鋼花紋板不算太滑，鐘乳石全程打光所以昏暗但是能見度還不錯，出洞後有一個休息區可以買冰品吃" 
		}
      ]
	},
	{
      name: "系滿魚市場",
      category: "購物",
	  map_location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.7989148757383!2d127.65880357524402!3d26.13809867711739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e567c221f4f19d%3A0x58162367592c3315!2z57O45ru_6a2a5biC5aC0!5e0!3m2!1szh-TW!2stw!4v1761364320881!5m2!1szh-TW!2stw",
      info: [
        { 
			img: "day2/t3p1.png", 
			review: "拿完租車剛好就在糸滿附近，我們就決定來糸滿魚市場吃午餐。這裡最大特色就是可以自己組合海鮮丼飯：先買一碗白飯，再到各間海鮮廍挑自己喜歡的漁獲，一碗獨一無二的海鮮丼就完成了！" 
		}
      ]
	},
	{
      name: "波上宮神社",
      category: "景點",
	  map_location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.260102744547!2d127.66852627524693!3d26.220736877066464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e56985510a3f75%3A0x776a51e1e15524ac!2z5rOi5LiK5a6u!5e0!3m2!1szh-TW!2stw!4v1761389900798!5m2!1szh-TW!2stw",
      info: [
        { 
			img: "day2/t4p1.png", 
			review: "波上宮是位於沖繩縣那霸市的著名神社" 
		}
      ]
    },
    {
      name: "瀨長島",
      category: "景點",
	  map_location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.6151516825234!2d127.63786177524536!3d26.17666027709353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e5681e893b714d%3A0xa5360835fe2d83b8!2z54Co6ZW35bO2!5e0!3m2!1szh-TW!2stw!4v1761390057934!5m2!1szh-TW!2stw",
      info: [
        { 
			img: "day2/t5p1.png", 
			review: "看飛機降落及夕陽的好地方，山坡上的洋式房舍聚集了多樣餐飲....是久坐觀海景的好地方。不過若好天氣太熱曬傷機率很高，停車位也不多....." 
		}
      ]
	},
	{
      name: "塔可飯",
      category: "美食",
	  map_location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1448.3047431644723!2d127.63970045074262!3d26.175734604058096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e56819319ade33%3A0x935fa83d7869a833!2sTaco%20Rice%20Cafe%20Kijimuna!5e0!3m2!1szh-TW!2stw!4v1761390332918!5m2!1szh-TW!2stw",
      info: [
        { 
			img: "day2/t6p1.png", 
			review: "第一次吃塔可飯，好吃！小孩也很愛，指名下次來瀨長島還要吃這間。服務人員英文很好也很友善。" 
		}
      ]
    }
  ],
  3: [
    {
      name: "沖繩水族館",
      category: "景點",
	  map_location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.5666710448672!2d127.87543817526377!3d26.694337976778083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e4fa3152619e3d%3A0xea08a6700fdd9ffe!2z5rKW57mp576O6bqX5rW35rC05peP6aSo!5e0!3m2!1szh-TW!2stw!4v1761390531424!5m2!1szh-TW!2stw",
      info: [
        { 
			img: "day3/t1p1.png", 
			review: "沖繩最大的水族館，擁有超巨大鯨鯊可以在全展望的水族缸前觀看。因為三面的水族缸是互通的，所以可以選擇其中一面靜靜地坐著" 
		}
      ]
    },
    {
      name: "Shinmei Coffee",
      category: "美食",
	  map_location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.079906376552!2d127.96890537526323!3d26.677926776787903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e4f93f21d32467%3A0x2ec7ebee84f500a1!2sShinmei%20Coffee%20(Sinmay%20Coffee%20Okinawa)!5e0!3m2!1szh-TW!2stw!4v1761390710057!5m2!1szh-TW!2stw",
      info: [
        { 
			img: "day3/t2p1.png", 
			review: "三杯現刨黑糖拿鐵，其中一杯去冰，一杯黑糖鮮奶，在日本去冰會少一大口，取飲料處寫了一句話，就是先喝一口現刨純黑糖，真的好喝，覺得來不後悔，很值得，有蠻大停車場，不用擔心不好停" 
		}
      ]
    },
	{
      name: "古宇利島",
      category: "景點",
	  map_location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8993.680829945779!2d128.01457867178988!3d26.700585111993533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e45834628fc6c1%3A0xfe464c1009cf4372!2z5Y-k5a6H5Yip5bO2!5e0!3m2!1szh-TW!2stw!4v1761390913884!5m2!1szh-TW!2stw",
      info: [
        { 
			img: "day3/t3p1.png", 
			review: "這是讓人心曠神怡的一處景點，沖繩美麗海域的顏色，真的令人感動難忘！似乎永遠看不膩的海景。光是坐在塔頂，鳥瞰各種顏色的海水及古宇利大橋，這種自然風景的魅力往往更能深刻在腦中。" 
		}
      ]
    },
	{
      name: "古利宇島蝦蝦飯",
      category: "美食",
	  map_location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.4856284406555!2d128.01803187727245!3d26.696928538445853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e459cce077ea71%3A0x681dbc4657cd58e5!2z5Y-k5a6H5Yip6J2m6J2m6aOv!5e0!3m2!1szh-TW!2stw!4v1761391112063!5m2!1szh-TW!2stw",
      info: [
        { 
			img: "day3/t4p1.png", 
			review: "沖繩很著名的蝦蝦飯，很多人都推介，要特地去試一試，門口附近有兩個停車場，但是位置很少，兜了幾個圈都找不到位置，唯有停在下面的停車場，要再走樓梯和斜坡上去。餐廳有兩層，下面一層付錢，上面一層取餐和用餐，還有天台也可以用餐，一邊看風景一邊用餐，看起來很多人，門口寫着要等25分鐘。付錢點餐是不用等的" 
		}
      ]
    },
	{
      name: "萬座毛",
      category: "景點",
	  map_location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.4628302215797!2d127.84790317525682!3d26.505235276892417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e503788741a7f9%3A0xdfec3d6fcce75918!2z6JCs5bqn5q-b!5e0!3m2!1szh-TW!2stw!4v1761391310784!5m2!1szh-TW!2stw",
      info: [
        { 
			img: "day3/t5p1.png", 
			review: "雖然設施簡單，但步道與草皮維護非常乾淨，且票價非常便宜煩，很適合當作下午接近落日時穿插的景點，絕對物超所值。" 
		}
      ]
    },
  ],
  4: [
    {
      name: "殘波岬",
      category: "景點",
	  map_location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14289.777726331156!2d127.70345705190951!3d26.44139948089636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e51748859d2995%3A0x3d7290783e1f3ca1!2sCape%20Zanpa!5e0!3m2!1szh-TW!2stw!4v1761391506517!5m2!1szh-TW!2stw",
      info: [
        { 
			img: "day4/t1p1.png", 
			review: "在沖繩本島讀谷村西端的Cape Zanpa，是一處面向東海的海角，擁有筆直高聳的斷崖與遼闊無邊的海天景色。從入口步行進入，一條被海風雕塑的步道蜿蜒通往崖邊，沿途野草與灌木緊貼著岩石生長" 
		}
      ]
    },
    {
      name: "美國村",
      category: "購物",
	  map_location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.329442300002!2d127.75170162525018!3d26.31582982700791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e5130508159acd%3A0x1bde7c8b1d9e8bcc!2z576O5ZyL5p2R!5e0!3m2!1szh-TW!2stw!4v1761391737764!5m2!1szh-TW!2stw",
      info: [
        { 
			img: "day4/t2p1.png", 
			review: "停車方便，日曬爆熱，但滿滿異國渡假風，各家小店特色滿滿，餐飲也都很不錯，是個渡假散漫的黃金地點" 
		}
      ]
    },
	  {
      name: "美國村",
      category: "購物",
	  map_location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.329442300002!2d127.75170162525018!3d26.31582982700791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e5130508159acd%3A0x1bde7c8b1d9e8bcc!2z576O5ZyL5p2R!5e0!3m2!1szh-TW!2stw!4v1761391737764!5m2!1szh-TW!2stw",
      info: [
        { 
			img: "day4/t2p1.png", 
			review: "停車方便，日曬爆熱，但滿滿異國渡假風，各家小店特色滿滿，餐飲也都很不錯，是個渡假散漫的黃金地點" 
		}
      ]
    },
	  {
      name: "知念岬公園",
      category: "景點",
	  map_location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.9014638430403!2d127.826349375245!3d26.1673383770993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e571c075f81319%3A0x62ca88383fbffcd9!2z55-l5b-15bKs5YWs5ZyS!5e0!3m2!1szh-TW!2stw!4v1761391915885!5m2!1szh-TW!2stw",
      info: [
        { 
			img: "day4/t3p1.png", 
			review: "這裡只是一片空地沒有任何遊樂設施，但在晴朗好天氣的日子裡，您可以充分享受蔚藍的天空和蔚藍翠綠的大海，一望無際的藍天和碧海真的會美得令人難以置信" 
		}
      ]
    },
	  {
      name: "租車公司",
      category: "景點",
	  map_location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.183321992186!2d127.65269597524475!3d26.158158477105005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e5680bd9f5f353%3A0x8b627c38946cc891!2s1-1174%20Toyosaki%2C%20Tomigusuku%2C%20Okinawa%20901-0225%E6%97%A5%E6%9C%AC!5e0!3m2!1szh-TW!2stw!4v1761392066152!5m2!1szh-TW!2stw",
      info: [
        { 
			img: "day4/t4p1.png", 
			review: "還車" 
		}
      ]
    }
  ],
  5: [
    {
      name: "大衆串揚げ酒場 足立屋",
      category: "美食",
	  map_location:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3579.479006804661!2d127.6885174!3d26.2136211!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e569709276b0f9%3A0x4352d94dbf1ac30!2sAdachiya!5e0!3m2!1szh-TW!2stw!4v1761392232008!5m2!1szh-TW!2stw",
      info: [
        { 
			img: "day5/t1p1.png", 
			review: "吃的" 
		}
      ]
    },
    {
      name: "焼肉ここから 那覇久茂地店",
      category: "美食",
	  map_location:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28634.62015454465!2d127.6768358!3d26.2185456!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e56978beb85c61%3A0x2edce9f4c2b64448!2sYakinikukokokara%20Nahakumojiten!5e0!3m2!1szh-TW!2stw!4v1761392348382!5m2!1szh-TW!2stw",
      info: [
        { 
			img: "day5/t2p1.png", 
			review: "吃的" 
		}
      ]
	},
	  {
      name: "暖暮拉麵 那霸牧志店",
      category: "美食",
	  map_location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.3483990608834!2d127.6873312!3d26.217866899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e5697bcfbeaaab%3A0x860befe404def6ef!2z5pqW5pqu5ouJ6bq1IOmCo-mcuOeJp-W_l-W6lw!5e0!3m2!1szh-TW!2stw!4v1761392516189!5m2!1szh-TW!2stw",
      info: [
        { 
			img: "day5/t3p1.png", 
			review: "吃的" 
		}
      ]
    },
	  {
      name: "Mahoroba Irori Okinawa",
      category: "美食",
	  map_location:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28636.437002358252!2d127.682517!3d26.2111626!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e56bb2af0ba64d%3A0xc5ff7b8159fe3fe2!2sMahoroba%20Irori%20Okinawa!5e0!3m2!1szh-TW!2stw!4v1761392572906!5m2!1szh-TW!2stw",
      info: [
        { 
			img: "day5/ttp1.png", 
			review: "吃的" 
		}
      ]
    },
	  {
      name: "風獅爺雞蛋糕 MIA",
      category: "美食",
	  map_location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.4067624612503!2d127.69096169999999!3d26.215969700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e5690044cbe4a1%3A0x94758466c57f54c7!2z6aKo542F54i66Zue6JuL57OVIE1JQQ!5e0!3m2!1szh-TW!2stw!4v1761392911499!5m2!1szh-TW!2stw",
      info: [
        { 
			img: "day5/t4p1.png", 
			review: "吃的" 
		}
      ]
    },
	  {
      name: "傑克牛排館",
      category: "美食",
	  map_location:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3579.5242310525737!2d127.6732888!3d26.2121508!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e56999b06c66db%3A0x5a84f40a1e58fcf7!2z5YKR5YWL54mb5o6S6aSo!5e0!3m2!1szh-TW!2stw!4v1761393041255!5m2!1szh-TW!2stw",
      info: [
        { 
			img: "day5/t5p1.png", 
			review: "吃的" 
		}
      ]
    },
	  {
      name: "Fluffy Coconut",
      category: "美食",
	  map_location:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57217.90755628151!2d127.7993749!3d26.3226387!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e5110b4f027383%3A0x4c0b3117c356205f!2sFluffy%20Coconut!5e0!3m2!1szh-TW!2stw!4v1761393169803!5m2!1szh-TW!2stw",
      info: [
        { 
			img: "day5/t6p1.png", 
			review: "吃的" 
		}
      ]
    },
	  {
      name: "OKINAWA TEA STAND -Sunpin",
      category: "美食",
	  map_location:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3579.448480719715!2d127.6876851!3d26.2146135!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e569e8c02d725d%3A0x67f5f4bad441096c!2sOKINAWA%20TEA%20STAND%20-Sunpin-!5e0!3m2!1szh-TW!2stw!4v1761393286853!5m2!1szh-TW!2stw",
      info: [
        { 
			img: "day5/t7p1.png", 
			review: "吃的" 
		}
      ]
    },
	  {
      name: "Mediterranean grill OCTO",
      category: "美食",
	  map_location:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28516.902285104694!2d127.9958182!3d26.6928638!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e459551bf3d919%3A0xc593d1b93ba36247!2sMediterranean%20grill%20OCTO!5e0!3m2!1szh-TW!2stw!4v1761393525558!5m2!1szh-TW!2stw",
      info: [
        { 
			img: "day5/t8p1.png", 
			review: "吃的" 
		}
      ]
    },
	  {
      name: "百年古家 大家 阿古豬",
      category: "美食",
	  map_location:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d114121.52834965593!2d127.8913176!3d26.6389472!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e4ff4cb9b910f1%3A0x6c5682a23a94e475!2z55m-5bm05Y-k5a62IOWkp-WutiDpmL_lj6Tosaw!5e0!3m2!1szh-TW!2stw!4v1761393605393!5m2!1szh-TW!2stw",
      info: [
        { 
			img: "day5/t9p1.png", 
			review: "吃的" 
		}
      ]
    },
	  {
      name: "Buchi Kumojiten",
      category: "美食",
	  map_location:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7158.850900203889!2d127.678335!3d26.2153622!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e56977dac0c9cd%3A0xa9b836cde5e24546!2sBuchi%20Kumojiten!5e0!3m2!1szh-TW!2stw!4v1761393684462!5m2!1szh-TW!2stw",
      info: [
        { 
			img: "day5/t10p1.png", 
			review: "吃的" 
		}
      ]
    },
	  {
      name: "Ocean View Dining T-ReIve 古宇利島",
      category: "美食",
	  map_location:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3564.3661654378766!2d128.0077061!3d26.7007468!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e45906039a5a9b%3A0x3da65cfe8f9300e5!2zT2NlYW4gVmlldyBEaW5pbmcgVC1SZUl2ZSDlj6TlrofliKnls7Y!5e0!3m2!1szh-TW!2stw!4v1761393758641!5m2!1szh-TW!2stw",
      info: [
        { 
			img: "day5/t11p1.png", 
			review: "吃的" 
		}
      ]
    },
	  {
      name: "Steak Matsuya",
      category: "美食",
	  map_location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.4385973466183!2d127.6904876!3d26.214934799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e569ff0e5915e1%3A0x79e02648ff426e44!2sSteak%20Matsuya!5e0!3m2!1szh-TW!2stw!4v1761393839470!5m2!1szh-TW!2stw",
      info: [
        { 
			img: "day5/t12p1.png", 
			review: "吃的" 
		}
      ]
    },
	  {
      name: "hoppepan",
      category: "美食",
	  map_location:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3578.7749451281516!2d127.7032204!3d26.2365012!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e56ba8e635f46f%3A0x84b4d2a52c73c37!2shoppepan!5e0!3m2!1szh-TW!2stw!4v1761393913062!5m2!1szh-TW!2stw",
      info: [
        { 
			img: "day5/t13p1.png", 
			review: "吃的" 
		}
      ]
    }
  ]
  // 其他天可依需求自行加
};

// 不同分類對應顏色與SVG圖示
const categoryStyles = {
  "美食": {
    color: "#FFB870",
	'class': 'tag-food',
    icon: `🍽️`
  },
  "景點": {
    color: "#7ED957",
	'class': 'tag-spot',
    icon: `🏞️`
  },
  "購物": {
    color: "#66B3FF",
	'class': 'tag-shop',
    icon: `🛍️`
  }
};

const tabButtons = document.querySelectorAll('.tab-button');
const daySchedules = document.querySelectorAll('.day-schedule');
const placeInfoEl = document.getElementById('place-info');
const prevInfoBtn = document.getElementById('prev-info');
const nextInfoBtn = document.getElementById('next-info');
const mapFrame = document.getElementById('mapFrame');

let currentPlace = null;
let currentInfoIndex = 0;

// 渲染每日行程
function renderItinerary() {
  daySchedules.forEach(schedule => {
    const day = schedule.getAttribute('data-day');
    schedule.innerHTML = '';

    (itineraryData[day] || []).forEach((place) => {
      const category = categoryStyles[place.category] || { color: "#ccc", icon: "" };
      const item = document.createElement('div');
	  item.className = 'spot-button';
	  const cfg = categoryStyles[place.category];
	  item.innerHTML = `<span>${place.name}</span><span class="tag ${cfg.class}">${cfg.icon} ${place.category}</span>`;

      item.addEventListener('click', () => {
        currentPlace = place;
        currentInfoIndex = 0;
        showPlaceInfo();
		// 清除其他 item 的 active class
		document.querySelectorAll('.spot-button').forEach(el => {
			el.classList.remove('active');
		});

		  // 幫目前點到的 item 加上 active
		item.classList.add('active');
      });

      schedule.appendChild(item);
    });
  });
  if (daySchedules.length > 0) {
      const firstSpotButton = daySchedules[0].querySelector('.spot-button');
      firstSpotButton && firstSpotButton.click(); // 自動觸發第一個 spot-button 的點擊事件
    }
  // 點擊評論圖片 → 顯示放大圖層
	document.addEventListener('click', function (e) {
	  if (e.target.tagName === 'IMG' && e.target.closest('#place-info')) {
		const modal = document.getElementById('image-modal');
		const modalImg = document.getElementById('modal-img');
		modal.style.display = 'flex';
		modalImg.src = e.target.src;
	  }
	});

	// 點擊關閉或圖層 → 關閉放大圖層
	document.querySelector('.image-modal .close-btn').addEventListener('click', () => {
	  document.getElementById('image-modal').style.display = 'none';
	});

	document.getElementById('image-modal').addEventListener('click', (e) => {
	  if (e.target.id === 'image-modal') {
		document.getElementById('image-modal').style.display = 'none';
	  }
	});
}

// 顯示景點資訊
function showPlaceInfo() {
  if (!currentPlace) return;
  const info = currentPlace.info[currentInfoIndex];
  placeInfoEl.innerHTML = `
    <img src="${info.img}" alt="${currentPlace.name}">
    <h3>${currentPlace.name} <span style="font-size:0.8rem;color:#666;">(${currentPlace.category})</span></h3>
    <p>${info.review}</p>
    <p style="font-size:0.8rem;color:#888;">${currentInfoIndex + 1} / ${currentPlace.info.length}</p>
  `;
  mapFrame.src = currentPlace.map_location;
}

function changeInfo(){
	if (!currentPlace) return;
  const info = currentPlace.info[currentInfoIndex];
  placeInfoEl.innerHTML = `
    <img src="${info.img}" alt="${currentPlace.name}">
    <h3>${currentPlace.name} <span style="font-size:0.8rem;color:#666;">(${currentPlace.category})</span></h3>
    <p>${info.review}</p>
    <p style="font-size:0.8rem;color:#888;">${currentInfoIndex + 1} / ${currentPlace.info.length}</p>
  `;
  
}

// 切換資訊
prevInfoBtn.addEventListener('click', () => {
  if (currentPlace) {
    currentInfoIndex = (currentInfoIndex - 1 + currentPlace.info.length) % currentPlace.info.length;
    changeInfo();
  }
});

nextInfoBtn.addEventListener('click', () => {
  if (currentPlace) {
    currentInfoIndex = (currentInfoIndex + 1) % currentPlace.info.length;
    changeInfo();
  }
});

// Tabs 切換
tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const day = btn.getAttribute('data-day');
    tabButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    daySchedules.forEach(s => s.classList.remove('active'));
    document.querySelector(`.day-schedule[data-day="${day}"]`).classList.add('active');
  });
});

// 初始化

window.addEventListener('DOMContentLoaded', renderItinerary);


