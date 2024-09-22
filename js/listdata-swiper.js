const cardsData = [
    {
      name: "Victa Wille",
      title: "Digital Designer",
      image: "https://picsum.photos/400/800",
      tags: ["Web", "UI", "UX"]
    },
    {
      name: "John Doe",
      title: "Graphic Designer",
      image: "https://picsum.photos/400/800",
      tags: ["Photoshop", "Illustrator", "InDesign"]
    },
    {
      name: "Jane Smith",
      title: "UI/UX Designer",
      image: "https://picsum.photos/400/800",
      tags: ["UI", "UX", "Figma"]
    },
    {
      name: "Mark Lee",
      title: "Frontend Developer",
      image: "https://picsum.photos/400/800",
      tags: ["React", "JavaScript", "CSS"]
    },
    {
      name: "Lucy Heart",
      title: "Product Designer",
      image: "https://picsum.photos/400/800",
      tags: ["Sketch", "Prototyping", "User Research"]
    },
    {
      name: "Tom Hardy",
      title: "Motion Designer",
      image: "https://picsum.photos/400/800",
      tags: ["After Effects", "Cinema 4D", "Motion"]
    },
    {
      name: "Emily Clark",
      title: "Brand Designer",
      image: "https://picsum.photos/400/800",
      tags: ["Branding", "Logo", "Typography"]
    }
  ];
  
  
  function generateCard(card) {
    return `
      <div class="swiper-slide">
        <div class="relative bg-gray-100 rounded-3xl shadow-lg overflow-hidden">
          <img src="${card.image}" alt="${card.name}" class="w-full h-80 object-cover">
          <div class="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/80 to-transparent w-full text-left text-white">
            <h3 class="font-semibold text-lg">${card.name}</h3>
            <p>${card.title}</p>
            <div class="flex space-x-2 mt-2">
              ${card.tags.map(tag => `<span class="bg-gray-700 text-white text-xs px-2 py-1 rounded-full">${tag}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  }
//   console.log("cardsData:", cardsData); 

  
  const cardContainer = document.getElementById('card-container');
  
  cardsData.forEach(card => {
    cardContainer.innerHTML += generateCard(card);
  });

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 700,
      disableOnInteraction: false
    },
    speed: 5000,
  });
  