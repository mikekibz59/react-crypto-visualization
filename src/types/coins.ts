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

interface CoinData {
	[key: string]: Coin;
}

export interface CoinListResponse {
	Response: string;
	Message: string;
	BaseImageUrl: string;
	BaseLinkUrl: string;
	Type: number;
	Data: CoinData;

}

export interface initialCoinState {
	favourites: string[];
	timeInterval: coinTimeInterval;
	coinList: Array<CoinListResponse> | null;
	currentFavourite: string | null;
	historical: Array<any> | null;
	prices: Array<any> | null;
}


