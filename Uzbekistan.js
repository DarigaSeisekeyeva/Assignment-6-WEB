const sound = new Audio('click.wav');  
const playButton = document.getElementById('playButton');
playButton.addEventListener('click', () => {
    sound.play().catch(error => {
        console.error('Error playing sound:', error);
    });
});
const country = {
    name: "Uzbekistan",
    capital: "Tashkent",
    cities: ["Samarkand", "Bukhara", "Fergana"],
    foods: ["Plov", "Lagman", "Somsa"],
    displayInfo: function() {
        console.log(`Country: ${this.name}, Capital: ${this.capital}`);
    }
};


country.displayInfo();
const citiesList = document.getElementById("cities-list");
country.cities.forEach(city => {
    const li = document.createElement("li");
    li.textContent = city;
    citiesList.appendChild(li);
});

const foodList = document.getElementById("food-list");
country.foods.forEach(food => {
    const li = document.createElement("li");
    li.textContent = food;
    foodList.appendChild(li);
});

const highlightBtn = document.getElementById("highlightBtn");
const resetBtn = document.getElementById("resetBtn");

highlightBtn.addEventListener("click", () => {
    document.querySelectorAll("#cities-list li").forEach(item => {
        item.classList.add("highlight");
    });
});

resetBtn.addEventListener("click", () => {
    document.querySelectorAll("#cities-list li").forEach(item => {
        item.classList.remove("highlight");
    });
});
