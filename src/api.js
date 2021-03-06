//Base URL
const base_url = "https://api.rawg.io/api/";

//Getting the Month
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10) {
        return `0{month}`;
    } else {
        return month;
    }
};
//Getting the date
const getCurrentDay = () => {
    const day = new Date().getDate() + 1;
    if (day < 10) {
        return `0{day}`;
    } else {
        return day;
    }
};
//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popular_games = `games?
key=b264c90265c6416499db1e68fb3f5faa&
dates=${lastYear},${currentDate}&ordering=-rating&page_size=12`;
const upcoming_games = `games?
key=b264c90265c6416499db1e68fb3f5faa&
dates=${currentDate},${nextYear}&ordering=-added&page_size=12`;
const newGames = `games?
key=b264c90265c6416499db1e68fb3f5faa&
dates=${lastYear},${currentDate}&ordering=-released&page_size=12`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;

//GAMES DETAILS
export const gameDetailsURL = (game_id) => `${base_url}games?
key=b264c90265c6416499db1e68fb3f5faa&/${game_id}`;
//GamesScreenShots
export const gameScreenshotURL = (game_id) => `${base_url}games?
key=b264c90265c6416499db1e68fb3f5faa&/${game_id}/screenshots`;

