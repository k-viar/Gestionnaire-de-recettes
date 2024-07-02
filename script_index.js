const firstCourseButton = document.getElementById("li-first-course");
const mainMealButton = document.getElementById("li-main-meal");
const dessertsButton = document.getElementById("li-desserts");
const firstCourse = document.getElementById("first-course-section");
const mainMeal = document.getElementById("main-meal-section");
const desserts = document.getElementById("desserts-section");
const firstCourseTitle = document.getElementById("first-course-title");
const mainMealTitle = document.getElementById("main-meal-title");
const dessertsTitle = document.getElementById("desserts-title");

firstCourseButton.addEventListener("click", () => {
    firstCourseButton.style.borderBottom = "5px solid rgb(167, 181, 157)";
    firstCourseButton.style.paddingBottom = "0.7rem";
    firstCourseButton.style.color = "rgb(167, 181, 157)";
    firstCourse.style.display = "grid";
    firstCourseTitle.style.display = "block";
    mainMealButton.style.borderBottom = "none";
    mainMealButton.style.paddingBottom = 0;
    mainMealButton.style.color = "";
    mainMeal.style.display = "none";
    mainMealTitle.style.display = "none";
    dessertsButton.style.borderBottom = "none";
    dessertsButton.style.paddingBottom = 0;
    dessertsButton.style.color = "";
    desserts.style.display = "none";
    dessertsTitle.style.display = "none";
});

mainMealButton.addEventListener("click", () => {
    mainMealButton.style.borderBottom = "5px solid rgb(167, 181, 157)";
    mainMealButton.style.paddingBottom = "0.7rem";
    mainMealButton.style.color = "rgb(167, 181, 157)";
    mainMeal.style.display = "grid";
    mainMealTitle.style.display = "block";
    firstCourseButton.style.borderBottom = "none";
    firstCourseButton.style.paddingBottom = 0;
    firstCourseButton.style.color = "";
    firstCourse.style.display = "none";
    firstCourseTitle.style.display = "none";
    dessertsButton.style.borderBottom = "none";
    dessertsButton.style.paddingBottom = 0;
    dessertsButton.style.color = "";
    desserts.style.display = "none";
    dessertsTitle.style.display = "none";
});

dessertsButton.addEventListener("click", () => {
    dessertsButton.style.borderBottom = "5px solid rgb(167, 181, 157)";
    dessertsButton.style.paddingBottom = "0.7rem";
    dessertsButton.style.color = "rgb(167, 181, 157)";
    desserts.style.display = "grid";
    dessertsTitle.style.display = "block";
    firstCourseButton.style.borderBottom = "none";
    firstCourseButton.style.paddingBottom = 0;
    firstCourseButton.style.color = "";
    firstCourse.style.display = "none";
    firstCourseTitle.style.display = "none";
    mainMealButton.style.borderBottom = "none";
    mainMealButton.style.paddingBottom = 0;
    mainMealButton.style.color = "";
    mainMeal.style.display = "none";
    mainMealTitle.style.display = "none";
});

const newRecipe = JSON.parse(localStorage.getItem("nouvelle recette"));

if (newRecipe !== null) {
    const typeOfDish = newRecipe[1].catégorie;
    const preparationTimeStr = newRecipe[3]["temps de préparation"];

    let hoursOfPreparation = parseInt(preparationTimeStr.slice(0, 2));
    let minutesOfPreparation = parseInt(preparationTimeStr.slice(-2));

    const cookingTime = () => {
        if (newRecipe[4]["temps de cuisson"] === undefined) {
            return "00:00";
        } else {
            return newRecipe[4]["temps de cuisson"];
        }
    };

    let hoursOfCooking = parseInt(cookingTime().slice(0, 2));
    let minutesOfCooking = parseInt(cookingTime().slice(-2));

    let globalHours = hoursOfPreparation + hoursOfCooking;
    let globalMinutes = minutesOfPreparation + minutesOfCooking;
    let globalTime = globalHours * 60 + globalMinutes;

    const globalTimeFunction = () => {
        if (globalTime <= 59) {
            return `${globalTime}min`;
        } else {
            return `${(globalTime / 60).toString().slice(0, 1)}h${
                globalTime % 60
            }`;
        }
    };

    if (typeOfDish === "Entrée") {
        const firstCourseSection = document.getElementById(
            "first-course-section"
        );
        const link = document.createElement("a");
        link.setAttribute("href", "#");
        const firstCourseCardDiv = document.createElement("div");
        firstCourseCardDiv.classList.add("first-course-card");
        const divImg = document.createElement("div");
        divImg.classList.add("div-img");
        const firstCourseImg = document.createElement("img");
        firstCourseImg.setAttribute("src", newRecipe[2].url);
        firstCourseImg.setAttribute("alt", newRecipe[0].titre);
        firstCourseImg.classList.add("first-course-img");
        const ulFirstCourse = document.createElement("ul");
        ulFirstCourse.classList.add("ul-first-course");
        const liFirstCourse = document.createElement("li");
        liFirstCourse.textContent = "Entrée";
        const ulChronometer = document.createElement("ul");
        ulChronometer.classList.add("ul-chronometer");
        const liImg = document.createElement("li");
        const imgChronometer = document.createElement("img");
        imgChronometer.setAttribute("src", "Media/icone_temps.svg");
        imgChronometer.setAttribute("alt", "chronomètre");
        imgChronometer.classList.add("chronometer");
        const liPreparationTime = document.createElement("li");
        liPreparationTime.textContent = globalTimeFunction();
        const nameOfTheFirstCourse = document.createElement("h3");
        nameOfTheFirstCourse.textContent = newRecipe[0].titre;

        firstCourseSection.append(link);
        link.append(firstCourseCardDiv);
        firstCourseCardDiv.append(divImg);
        divImg.append(firstCourseImg);
        divImg.append(ulFirstCourse);
        ulFirstCourse.append(liFirstCourse);
        divImg.append(ulChronometer);
        ulChronometer.append(liImg);
        liImg.append(imgChronometer);
        ulChronometer.append(liPreparationTime);
        firstCourseCardDiv.append(nameOfTheFirstCourse);
    } else if (typeOfDish === "Plat") {
        const mainMealSection = document.getElementById("main-meal-section");
        const link = document.createElement("a");
        link.setAttribute("href", "#");
        const firstCourseCardDiv = document.createElement("div");
        firstCourseCardDiv.classList.add("first-course-card");
        const divImg = document.createElement("div");
        divImg.classList.add("div-img");
        const firstCourseImg = document.createElement("img");
        firstCourseImg.setAttribute("src", newRecipe[2].url);
        firstCourseImg.setAttribute("alt", newRecipe[0].titre);
        firstCourseImg.classList.add("first-course-img");
        const ulFirstCourse = document.createElement("ul");
        ulFirstCourse.classList.add("ul-first-course");
        const liFirstCourse = document.createElement("li");
        liFirstCourse.textContent = "Plat";
        const ulChronometer = document.createElement("ul");
        ulChronometer.classList.add("ul-chronometer");
        const liImg = document.createElement("li");
        const imgChronometer = document.createElement("img");
        imgChronometer.setAttribute("src", "Media/icone_temps.svg");
        imgChronometer.setAttribute("alt", "chronomètre");
        imgChronometer.classList.add("chronometer");
        const liPreparationTime = document.createElement("li");
        liPreparationTime.textContent = globalTimeFunction();
        const nameOfTheFirstCourse = document.createElement("h3");
        nameOfTheFirstCourse.textContent = newRecipe[0].titre;

        mainMealSection.append(link);
        link.append(firstCourseCardDiv);
        firstCourseCardDiv.append(divImg);
        divImg.append(firstCourseImg);
        divImg.append(ulFirstCourse);
        ulFirstCourse.append(liFirstCourse);
        divImg.append(ulChronometer);
        ulChronometer.append(liImg);
        liImg.append(imgChronometer);
        ulChronometer.append(liPreparationTime);
        firstCourseCardDiv.append(nameOfTheFirstCourse);
    } else if (typeOfDish === "Dessert") {
        const dessertsSection = document.getElementById("desserts-section");
        const link = document.createElement("a");
        link.setAttribute("href", "#");
        const firstCourseCardDiv = document.createElement("div");
        firstCourseCardDiv.classList.add("first-course-card");
        const divImg = document.createElement("div");
        divImg.classList.add("div-img");
        const firstCourseImg = document.createElement("img");
        firstCourseImg.setAttribute("src", newRecipe[2].url);
        firstCourseImg.setAttribute("alt", newRecipe[0].titre);
        firstCourseImg.classList.add("first-course-img");
        const ulFirstCourse = document.createElement("ul");
        ulFirstCourse.classList.add("ul-first-course");
        const liFirstCourse = document.createElement("li");
        liFirstCourse.textContent = "Dessert";
        const ulChronometer = document.createElement("ul");
        ulChronometer.classList.add("ul-chronometer");
        const liImg = document.createElement("li");
        const imgChronometer = document.createElement("img");
        imgChronometer.setAttribute("src", "Media/icone_temps.svg");
        imgChronometer.setAttribute("alt", "chronomètre");
        imgChronometer.classList.add("chronometer");
        const liPreparationTime = document.createElement("li");
        liPreparationTime.textContent = globalTimeFunction();
        const nameOfTheFirstCourse = document.createElement("h3");
        nameOfTheFirstCourse.textContent = newRecipe[0].titre;

        dessertsSection.append(link);
        link.append(firstCourseCardDiv);
        firstCourseCardDiv.append(divImg);
        divImg.append(firstCourseImg);
        divImg.append(ulFirstCourse);
        ulFirstCourse.append(liFirstCourse);
        divImg.append(ulChronometer);
        ulChronometer.append(liImg);
        liImg.append(imgChronometer);
        ulChronometer.append(liPreparationTime);
        firstCourseCardDiv.append(nameOfTheFirstCourse);
    }
}
