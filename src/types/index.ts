// API에서 오는 포인트
export type IndexApiPoint = {
  time: string;   // ISO string
  close: number;
};

// API에서 오는 인덱스 1개
export type IndexApiItem = {
  id: string;          // "sp500"
  symbol: string;      // "^GSPC"
  name_ja: string;
  name_en: string;
  currency: "USD" | "JPY" | string;
  range: string;       // "1mo"
  interval: string;    // "1d"
  points: IndexApiPoint[];
};

export type IndicesResponse = {
  indices: IndexApiItem[];
};

// UI에서 쓰는 포인트 (차트용)
export type IndexPoint = {
  time: string;
  close: number;
};

// UI에서 쓰는 인덱스 카드 데이터
export type IndexItem = {
  id: string;
  symbol: string;
  nameJa: string;
  currency: string;
  price: number;          // 마지막 종가
  change: number;         // 전일 대비
  changePercent: number;  // (%)
  points: IndexPoint[];
};