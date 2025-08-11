import fnImage from './images/fn.png';

export function loadHome() {
const content = document.getElementById("content");
  content.textContent = "";  

  const homeDiv = document.createElement('div');

  const headline = document.createElement('h1');
  headline.textContent = 'Welcome to Our Restaurant!';

  const image = document.createElement("img");
  image.src = fnImage;

  homeDiv.appendChild(headline);
homeDiv.appendChild(image);

  content.appendChild(homeDiv);
}
