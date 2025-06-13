export function getGames() {
  return fetch('/src/data/games.json').then(res => res.json());
}