const filterButton = document.getElementById('filterButton');
const filterSection = document.getElementById('filterSection');

filterButton.addEventListener('click', () => {
    filterSection.classList.toggle('hidden');
});


const dropdownButton = document.getElementById('dropdownButton');
const dropdownMenu = document.getElementById('dropdownMenu');
const toggleDropdown = () => dropdownMenu.classList.toggle('hidden');

dropdownButton.addEventListener('click', toggleDropdown);

const closeDropdownOutsideClick = (e) => {
  if (!dropdownButton.contains(e.target)) {
    dropdownMenu.classList.add('hidden');
  }
};

window.addEventListener('click', closeDropdownOutsideClick);
