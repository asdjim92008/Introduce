// 🗓️ 多筆資料 + 分類
const itineraryData = {
  1: [
    {
      name: "肉蛋飯糰",
      category: "美食",
	  map_location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6020.424447080302!2d127.64619103042679!3d26.204295974549215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e569b79929e9c5%3A0x97508c627485ac4a!2z54-A5aGU55GqIOmCo-mcuOapn-WgtOWci-WFp-e3muWIsOmBlOWkp-W7s-W6lw!5e0!3m2!1szh-TW!2stw!4v1761056553806!5m2!1szh-TW!2stw",
      info: [
		{ 
			img: "t1menu.jpg", 
			review: "菜單" 
		},
		{ 
			img: "t1p1.jpg", 
			review: "這次品嚐國內線的分店，需要排隊半小時左右，最好吃的是山苦瓜口味，接著是招牌口味，整體來說搭配午餐肉是好吃的，但價格偏貴" 
		},
        { 
			img: "t1p2.jpg", 
			review: "在做沖繩旅遊功課的時候，很多人推薦的那霸機場必吃「豬肉蛋飯糰 pork tamago onigiri」，還好我一早8：30要在那霸機場坐OTS的接駁車，所以可以先來嚐鮮一番，而且也不用排隊~<br>口味還算不錯，份量也適中，但是也不能算是必吃美食~<br>應該說是吃一種儀式感，有來吃過才能算來過那霸機場吧😁" 
		},
        { 
			img: "t1p3.jpg", 
			review: "那霸機場（Naha Airport）<br>9:20抵達，出關後前往國內線找吃的...<br>排隊點餐到取餐，大概只花了15分鐘，蠻快的。<br>飯團真的好好吃，苦瓜天婦羅口味超級好吃....<br>均銷約600-650日元" 
		}
      ]
    },
	{
      name: "台北101",
      category: "景點",
	  map_location:"https://www.google.com/maps?q=25.033968,121.564468&z=16&output=embed",
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
      name: "台北101",
      category: "景點",
	  map_location:"https://www.google.com/maps?q=25.033968,121.564468&z=16&output=embed",
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
      name: "台北101",
      category: "景點",
	  map_location:"https://www.google.com/maps?q=25.033968,121.564468&z=16&output=embed",
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
      name: "台北101",
      category: "景點",
	  map_location:"https://www.google.com/maps?q=25.033968,121.564468&z=16&output=embed",
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
      name: "台北101",
      category: "景點",
	  map_location:"https://www.google.com/maps?q=25.033968,121.564468&z=16&output=embed",
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
      name: "鼎泰豐",
      category: "美食",
	  map_location:"https://www.google.com/maps?q=25.033968,121.564468&z=16&output=embed",
      info: [
        { 
			img: "https://upload.wikimedia.org/wikipedia/commons/2/28/Din_Tai_Fung.jpg", 
			review: "必吃小籠包名店。" 
		}
      ]
    }
  ],
  2: [
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