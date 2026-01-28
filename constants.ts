
import { MenuItem } from './types';

// 더욱 안정적인 이미지 로딩을 위해 Unsplash 고화질 이미지와 wsrv.nl 프록시 조합 사용
const getProxyUrl = (url: string) => `https://wsrv.nl/?url=${encodeURIComponent(url)}&w=800&h=800&fit=cover&output=webp&q=85`;

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'sundubu',
    name: '순두부찌개',
    // 검증된 고화질 한국 찌개 이미지 (Kimchi/Sundubu 스타일)
    image: getProxyUrl('https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&q=80&w=800'),
    color: 'bg-red-500',
    tags: ['매콤', '부드러움', '단백질']
  },
  {
    id: 'kimchi',
    name: '김치찌개',
    image: getProxyUrl('https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&q=80&w=800'),
    color: 'bg-orange-500',
    tags: ['얼큰', '한국인의맛', '든든']
  },
  {
    id: 'dongtae',
    name: '동태탕',
    image: getProxyUrl('https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&q=80&w=800'),
    color: 'bg-blue-500',
    tags: ['시원', '해산물', '피로회복']
  },
  {
    id: 'seonji',
    name: '선지해장국',
    image: getProxyUrl('https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800'),
    color: 'bg-red-900',
    tags: ['철분왕', '에너지', '전통의맛']
  }
];
