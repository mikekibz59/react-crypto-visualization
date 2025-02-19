export type coinTimeInterval = 'months' | 'days' | 'years'

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

export interface CoinResponse {
	Response: string;
	Message: string;
	BaseImageUrl: string;
	BaseLinkUrl: string;
	Type: number;
	Data: CoinDataContainer;
}

interface CoinData {
	data: Array<CoinResponse> | [];
	loading: boolean;
	error: any
}

export interface initialCoinState {
	favourites: string[];
	timeInterval: coinTimeInterval;
	coinDetails: CoinData;
	currentFavourite: string | null;
	historical: Array<any> | null;
	prices: Array<any> | null;
}


