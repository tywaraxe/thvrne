const btnHuman = document.getElementById('btn-human');
const btnBjd = document.getElementById('btn-bjd');
const viewHuman = document.getElementById('view-human');
const viewBjd = document.getElementById('view-bjd');

btnHuman.addEventListener('click', () => {
  btnHuman.classList.add('active');
  btnBjd.classList.remove('active');
  viewHuman.classList.remove('hidden');
  viewBjd.classList.add('hidden');
});

btnBjd.addEventListener('click', () => {
  btnBjd.classList.add('active');
  btnHuman.classList.remove('active');
  viewBjd.classList.remove('hidden');
  viewHuman.classList.add('hidden');
});

function copyHex(hex) {
  navigator.clipboard.writeText(hex);
  alert('Copied color code: ' + hex);
}