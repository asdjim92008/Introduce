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
			img: "ttt.png", 
			review: "壯觀的地標建築，觀景台視野極佳。" 
		},
        { 
			img: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Taipei_101_2022.jpg", 
			review: "建築夜景非常壯麗。" 
		}
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
    }
  ],
  3: [
    {
      name: "中正紀念堂",
      category: "景點",
	  map_location:"https://www.google.com/maps?q=25.033968,121.564468&z=16&output=embed",
      info: [
        { 
			img: "https://upload.wikimedia.org/wikipedia/commons/1/16/Chiang_Kai-shek_Memorial_Hall_2008.jpg", 
			review: "充滿歷史氛圍的建築。" 
		}
      ]
    },
    {
      name: "西門町",
      category: "購物",
	  map_location:"https://www.google.com/maps?q=25.033968,121.564468&z=16&output=embed",
      info: [
        { 
			img: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Ximending_at_night.jpg", 
			review: "熱鬧的商圈，非常好逛。" 
		}
      ]
    }
  ],
  4: [
    {
      name: "中正紀念堂",
      category: "景點",
	  map_location:"https://www.google.com/maps?q=25.033968,121.564468&z=16&output=embed",
      info: [
        { 
			img: "https://upload.wikimedia.org/wikipedia/commons/1/16/Chiang_Kai-shek_Memorial_Hall_2008.jpg", 
			review: "充滿歷史氛圍的建築。" 
		}
      ]
    },
    {
      name: "西門町",
      category: "購物",
	  map_location:"https://www.google.com/maps?q=25.033968,121.564468&z=16&output=embed",
      info: [
        { 
			img: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Ximending_at_night.jpg", 
			review: "熱鬧的商圈，非常好逛。" 
		}
      ]
    }
  ],
  5: [
    {
      name: "中正紀念堂",
      category: "景點",
	  map_location:"https://www.google.com/maps?q=25.033968,121.564468&z=16&output=embed",
      info: [
        { 
			img: "https://upload.wikimedia.org/wikipedia/commons/1/16/Chiang_Kai-shek_Memorial_Hall_2008.jpg", 
			review: "充滿歷史氛圍的建築。" 
		}
      ]
    },
    {
      name: "西門町",
      category: "購物",
	  map_location:"https://www.google.com/maps?q=25.033968,121.564468&z=16&output=embed",
      info: [
        { 
			img: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Ximending_at_night.jpg", 
			review: "熱鬧的商圈，非常好逛。" 
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

