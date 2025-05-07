const form = document.getElementById('history-form');
const container = document.getElementById('results');

function clearResults() {
  container.innerHTML = '';
}

form.addEventListener('submit', async (e) => {
  e.preventDefault(); 

  clearResults();

  const day = document.getElementById('day').value
  const month = document.getElementById('month').value
  const type = document.getElementById('type').value
  const count = document.getElementById('count').value

  try {
    if (type === 'births' || type === 'all') {
    const births = await fetchBirths(month, day, count);
    showResults(births, 'Births');
  }
    if (type === 'deaths' || type === 'all') {
    const deaths = await fetchDeaths(month, day, count);
    showResults(deaths, 'Deaths');
  }
    if (type === 'events' || type === 'all') {
    const events = await fetchEvents(month, day, count);
    showResults(events, 'Events');
  }
  } catch (error){
    console.error('Error while retrieving data:', error)
  }

});
