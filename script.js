// 🗓️ 多筆資料 + 分類
const itineraryData = {
  1: [
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
	  /*
      item.className = 'itinerary-item';
      item.style.background = category.color;
      item.innerHTML = `${category.icon} ${place.name}`;
	  */
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

// 切換資訊
prevInfoBtn.addEventListener('click', () => {
  if (currentPlace) {
    currentInfoIndex = (currentInfoIndex - 1 + currentPlace.info.length) % currentPlace.info.length;
    showPlaceInfo();
  }
});

nextInfoBtn.addEventListener('click', () => {
  if (currentPlace) {
    currentInfoIndex = (currentInfoIndex + 1) % currentPlace.info.length;
    showPlaceInfo();
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