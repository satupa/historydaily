const baseUrl = 'https://byabbe.se/on-this-day'

function getRandomItems(array, count) {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count); 
}

const fetchEvents = async (month, day, count) => {
  const response = await fetch(`${baseUrl}/${month}/${day}/events.json`);
  const data = await response.json();
  return getRandomItems(data.events, count);
};

const fetchBirths = async (month, day, count) => {
  const response = await fetch(`${baseUrl}/${month}/${day}/births.json`);
  const data = await response.json();
  return getRandomItems(data.births, count);
};

const fetchDeaths = async (month, day, count) => {
  const response = await fetch(`${baseUrl}/${month}/${day}/deaths.json`);
  const data = await response.json();
  return getRandomItems(data.deaths, count);
};

function showResults(items, title) {

  const container = document.getElementById('results');
  const section = document.createElement('section');
  const heading = document.createElement('h4');

  heading.textContent = title;
  section.appendChild(heading)

    if (!items || items.length === 0) {
    const p = document.createElement('p')
    p.textContent = 'No results found.'
    section.appendChild(p)}
      else {
        items.forEach(item => {
           const p = document.createElement('p');
            p.textContent = `${item.year}: ${item.description}`;
            const saveBtn = createSaveButton(item);
            p.appendChild(saveBtn);

            section.appendChild(p);
});

}

  container.appendChild(section);
  
}

function saveToFavourites(item) {
  const current = getFavourites();
  const alreadyExists = current.some(fav =>
    fav.year === item.year && fav.description === item.description
  );

  if (!alreadyExists) {
    current.push(item);
    localStorage.setItem('favourites', JSON.stringify(current));
  }
}

function getFavourites() {
  const data = localStorage.getItem('favourites');
  return data ? JSON.parse(data) : [];
}


function createSaveButton(item) {
  const button = document.createElement('button');
  button.classList.add('favourite-button');

  const icon = document.createElement('i');
  icon.className = 'fa-solid fa-heart';

  if (isInFavourites(item)) {
    icon.classList.add('saved');
  }

  button.appendChild(icon);

  button.addEventListener('click', () => {
    if (isInFavourites(item)) {
      removeFromFavourites(item);
      icon.classList.remove('saved');
    } else {
      saveToFavourites(item);
      icon.classList.add('saved');
    }
  });

  return button;
}

function isInFavourites(item) {
  const current = localStorage.getItem('favourites');
  const favourites = current ? JSON.parse(current) : [];
  return favourites.some(fav =>
    fav.year === item.year && fav.description === item.description
  );
}


function createRemoveButton(item) {
  const button = document.createElement('button');
  button.classList.add('remove-button');

  const icon = document.createElement('i');
  icon.className = 'fa-solid fa-trash';
  button.appendChild(icon);

  button.addEventListener('click', () => {
    removeFromFavourites(item);
    showFavourites(); 
  });

  return button;
}

function removeFromFavourites(item) {
  const current = getFavourites();
  const updated = current.filter(fav =>
    !(fav.year === item.year && fav.description === item.description)
  );
  localStorage.setItem('favourites', JSON.stringify(updated));
}
