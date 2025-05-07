const now = new Date();
const month = now.getMonth() + 1;
const day = now.getDate();

fetchBirths(month, day, 5).then(data => showResults(data, 'Births today'));
fetchDeaths(month, day, 5).then(data => showResults(data, 'Deaths today'));
fetchEvents(month, day, 5).then(data => showResults(data, 'Events today'));

