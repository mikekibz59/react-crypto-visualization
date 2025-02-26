interface Coin {
	Id: number;
	Url: string;
	Name: string;
	CoinName: string;
	FullName: string;
	Algorithm: string;
	ProofType: string;
	SortOrder: number;
}

interface CoinDataContainer {
	[key: string]: Coin;
}

interface CoinData {
	data: Array<CoinResponse> | [];
	loading: boolean;
	error: any
}

type coinTimeInterval = 'months' | 'days' | 'years';

export const MAX_FAVOURITES = 10 as const;
export const DEFAULT_FAVOURITES = ['BTC', 'ETH', 'XMR', 'DOGE'] as const
export const DEFAULT_SUPPORTED_CURRENCY = 'USD' as const
export const TIME_UNITS = 10 as const

export interface CoinResponse {
	Response: string;
	Message: string;
	BaseImageUrl: string;
	BaseLinkUrl: string;
	Type: number;
	Data: CoinDataContainer;
}

export type PricesResponse = Record<string, Record<string, { PRICE: number; FROMSYSMBOL: string }>>
export interface Prices {
	data: PricesResponse;
	loading: boolean;
	error: any;
}

export interface HistoricalDetail {
	name: string,
	data: [number, number][];
}

export interface Historical {
	data: Array<HistoricalDetail>;
	loading: boolean,
	error: null;
}

export interface CoinsState {
	favourites: string[];
	timeInterval: coinTimeInterval;
	coinDetails: CoinData;
	currentFavourite: string | null;
	historical: Historical;
	prices: Prices;
}


