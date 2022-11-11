
const box = document.getElementById('search__input');

const btn = document.getElementById('search');

btn.addEventListener('click', function handleClick() {
  if (box.style.display === 'none') {
    box.style.display = 'inline-block';

    
  } else {
    box.style.display = 'none';

   
  }
});