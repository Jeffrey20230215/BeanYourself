import { apiClient } from './apiClient';

function createPlaceholderImage(label, background, foreground = '#f7f1ea') {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
      <rect width="240" height="240" fill="${background}" rx="24" />
      <circle cx="120" cy="96" r="44" fill="${foreground}" fill-opacity="0.16" />
      <path d="M76 148h88l-10 28H86z" fill="${foreground}" fill-opacity="0.28" />
      <text
        x="120"
        y="192"
        text-anchor="middle"
        font-family="Noto Sans TC, Arial, sans-serif"
        font-size="18"
        font-weight="700"
        fill="${foreground}"
      >
        ${label}
      </text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const mockCartData = {
  items: [
    {
      id: 'cart-1',
      name: '哥斯大黎加 音樂家系列',
      sizeLabel: '100G',
      grindLabel: '原豆',
      price: 750,
      quantity: 1,
      image: createPlaceholderImage('Costa Rica', '#c8d4cc', '#2d241e'),
    },
    {
      id: 'cart-2',
      name: '哥倫比亞 天堂莊園',
      sizeLabel: '半磅',
      grindLabel: '原豆',
      price: 1100,
      quantity: 1,
      image: createPlaceholderImage('Colombia', '#d6c8bb', '#2d241e'),
    },
    {
      id: 'cart-3',
      name: '哥倫比亞 粉紅波旁',
      sizeLabel: '半磅',
      grindLabel: '研磨',
      price: 850,
      quantity: 1,
      image: createPlaceholderImage('Pink Bourbon', '#dac4c6', '#2d241e'),
    },
    {
      id: 'cart-4',
      name: '肯亞 涅里 AA TOP',
      sizeLabel: '一磅',
      grindLabel: '原豆',
      price: 1400,
      quantity: 2,
      image: createPlaceholderImage('Kenya', '#bfd0cd', '#2d241e'),
    },
    {
      id: 'cart-5',
      name: '豆自己 海德曼人民方',
      sizeLabel: '半磅',
      grindLabel: '原豆',
      price: 380,
      quantity: 1,
      image: createPlaceholderImage('Blend', '#c7d0db', '#2d241e'),
    },
  ],
  recommendations: [
    {
      id: 'addon-1',
      name: '翡翠咖啡濾杯',
      description: '強化瓷',
      price: 1150,
      image: createPlaceholderImage('Dripper', '#9ab6bf', '#f7f1ea'),
    },
    {
      id: 'addon-2',
      name: '胡桃木 寬肚量豆匙',
      description: '低吸水 胡桃木把手',
      price: 120,
      image: createPlaceholderImage('Scoop', '#6b5243', '#f7f1ea'),
    },
    {
      id: 'addon-3',
      name: '抗UV 氣密咖啡豆罐',
      description: '半磅裝 ． 單向排氣閥',
      price: 280,
      image: createPlaceholderImage('Canister', '#5f5b61', '#f7f1ea'),
    },
    {
      id: 'addon-4',
      name: '日本三洋麻纖維濾紙',
      description: 'V60 適用 01/02 可選',
      price: 150,
      image: createPlaceholderImage('Filters', '#d8bf8a', '#2d241e'),
    },
  ],
};

function cloneCartData() {
  return {
    items: mockCartData.items.map((item) => ({ ...item })),
    recommendations: mockCartData.recommendations.map((item) => ({ ...item })),
  };
}

export async function getCartPageData() {
  // Future axios integration can replace this return with:
  // const { data } = await apiClient.get('/cart');
  // return data;
  await Promise.resolve(apiClient.defaults.baseURL);
  return cloneCartData();
}
