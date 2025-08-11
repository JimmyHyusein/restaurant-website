export function loadAbout(){
    content.textContent = "";
    const top = document.createElement("div");
    top.classList.add("top");
    const aboutDiv = document.createElement("div");
    const aboutHeadLine = document.createElement("h1");
    aboutHeadLine.textContent = "La Dolce Vita Restaurant"
    const adress = document. createElement("div");
    adress.classList.add("adress");
    const information = document. createElement("div");
    information.classList.add("information");
    const description = document. createElement("div");
    description.classList.add("description");
    const descriptionTitle = document.createElement("h3");
    descriptionTitle.classList.add("descriptionTitle");
    const descriptionText = document.createElement("p");
    descriptionText.classList.add("descriptionText");

    adress.innerHTML = "Restaurant Info<li>Address: 123 Vitosha St, Sofia, Bulgaria</li><li>Phone: +359 2 123 4567</li>";
    information.innerHTML = "Opening Hours:<li>Monday – Friday: 10:00 AM – 10:00 PM</li><li>Saturday – Sunday: 12:00 PM – 11:00 PM</li>"
    descriptionTitle.innerHTML = "Description";
    descriptionText.innerHTML ="La Dolce Vita is a charming Italian restaurant located in the heart of Sofia, dedicated to bringing you the finest Mediterranean flavors. We pride ourselves on using only the freshest, locally sourced ingredients to craft authentic dishes inspired by traditional Italian recipes. Whether you're craving classic pasta, thin-crust pizzas baked to perfection in our stone oven, or indulgent desserts like tiramisu and panna cotta, our menu offers something for every palate.Our warm and inviting atmosphere makes La Dolce Vita the perfect spot for family dinners, romantic dates, or casual gatherings with friends. Our attentive staff is committed to providing exceptional service to ensure that every visit is a memorable experience. Come and discover the true taste of Italy right here in Sofia. We look forward to welcoming you!";


    top.appendChild(adress);
    top.appendChild(information);
    description.appendChild(descriptionTitle);
    description.appendChild(descriptionText);
    aboutDiv.appendChild(aboutHeadLine);
    content.appendChild(aboutDiv);
    content.appendChild(top);
    content.appendChild(description);
    

}