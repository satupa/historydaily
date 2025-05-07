const container = document.getElementById('results');

function getFavourites() {
  const data = localStorage.getItem('favourites');
  return data ? JSON.parse(data) : [];
}

function showFavourites() {
    const container = document.getElementById('results');
    container.innerHTML = '';
  
    const favourites = getFavourites();
  
    if (favourites.length === 0) {
      container.textContent = 'No favourites saved yet.';
      return;
    }
  
    const list = document.createElement('ul');
  
    favourites.forEach(item => {
      const li = document.createElement('li');
  
      const text = document.createElement('span');
      text.textContent = `${item.year}: ${item.description}`;
      li.appendChild(text);
  
      if (item.wikipedia && item.wikipedia.length > 0) {
        const link = document.createElement('a');
        link.href = item.wikipedia[0].wikipedia;
        link.innerHTML = '<i class="fa-solid fa-up-right-from-square wiki-icon"></i>';
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        li.appendChild(link);
      }
  
      const removeBtn = createRemoveButton(item);
      li.appendChild(removeBtn);
      

    list.appendChild(li);
  });

  container.appendChild(list);
}
  

document.addEventListener('DOMContentLoaded', showFavourites);
