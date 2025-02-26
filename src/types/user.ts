export type userPageTypes = 'dashboard' | 'settings';
export interface UserInterface {
    confirmedCoins: boolean;
    currentPage: userPageTypes;
}