export function getActivities() {
  return fetch('/src/data/activities.json').then(res => res.json());
}