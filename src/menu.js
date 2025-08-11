
import image0 from './images/chicken.jpg';
import image1 from './images/spaghetti.jpg';
import image2 from './images/pizza.webp';
import image3 from './images/tiramisu.jpg';
import image4 from './images/cake.webp';
import image5 from './images/chees.jpg';
import image6 from './images/lemonade.jpg';
import image7 from './images/ice.webp';
import image8 from './images/wine.webp';


export function loadMenu() {
  const content = document.getElementById("content");
  content.textContent = "";  

  const menuDiv = document.createElement('div');
  const menuHeadline = document.createElement('h1');
  menuHeadline.textContent = 'Our Menu';

  const menu = document.createElement('div');
  menu.classList.add('menu-container');

  const dishes = [
    {
      category: "Main Courses",
      items: [
        { name: "Grilled Chicken Breast", description: "served with steamed vegetables and mashed potatoes", image: image0 },
        { name: "Spaghetti Bolognese", description: "classic Italian pasta with meat sauce",image: image1},
        { name: "Margherita Pizza", description: "tomato, mozzarella, fresh basil" ,image: image2}
      ]
    },
    {
      category: "Desserts",
      items: [
        { name: "Tiramisu", description: "espresso-soaked ladyfingers, mascarpone cream",image: image3},
        { name: "Chocolate Lava Cake", description: "warm cake with molten chocolate center",image: image4 },
        { name: "Cheesecake", description: "creamy cheesecake with a graham cracker crust" ,image: image5}
      ]
    },
    {
      category: "Drinks",
      items: [
        { name: "Fresh Lemonade", description: "",image: image6},
        { name: "Iced Tea", description: "",image: image7 },
        { name: "House Red Wine", description: "",image: image8 }
      ]
    }
  ];
let imageCounter = 0;
  dishes.forEach(section => {
    const sectionDiv = document.createElement('div');
    sectionDiv.classList.add('menu-section');

    const sectionTitle = document.createElement('h2');
    sectionTitle.textContent = section.category;
    sectionDiv.appendChild(sectionTitle);

    section.items.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('menu-item');

      const itemName = document.createElement('h3');
      itemName.textContent = item.name;
      
      if(item.image){
        const img = document.createElement('img')
        img.src = item.image;
        img.alt = item.name;
        img.classList.add(`img${imageCounter}`)
        imageCounter++;
        itemDiv.appendChild(img);
        
      }


      const itemDesc = document.createElement('p');
      itemDesc.textContent = item.description;

      itemDiv.appendChild(itemName);
      itemDiv.appendChild(itemDesc);
      

      sectionDiv.appendChild(itemDiv);
    });

    menu.appendChild(sectionDiv);
  });

  menuDiv.appendChild(menuHeadline);
  menuDiv.appendChild(menu);
  content.appendChild(menuDiv);
}
