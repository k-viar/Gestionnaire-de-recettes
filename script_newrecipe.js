const admins = JSON.parse(localStorage.getItem("credentials"));

if (admins === null || admins.length < 3) {
    window.location.href = "login.html";
}

const addForm = document.getElementById("add-form");

addForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const typeOfDish = () => {
        let valeur = "";
        for (i = 0; i < document.formulaire.category.length; i++) {
            if (document.formulaire.category[i].checked) {
                valeur = document.formulaire.category[i].value;
            }
        }
        return valeur;
    };
    console.log(typeOfDish());

    const pictureUrl = document.getElementById("recipe-picture").value;
    const preparationTime = document.getElementById("preparation-time").value;
    const cookingTime = document.getElementById("cooking-time").value;
    const ingredient1 = document.getElementById("ingredient1").value;
    const ingredient2 = document.getElementById("ingredient2").value;
    const ingredient3 = document.getElementById("ingredient3").value;
    const ingredient4 = document.getElementById("ingredient4").value;
    const ingredient5 = document.getElementById("ingredient5").value;
    const ingredient6 = document.getElementById("ingredient6").value;
    const ingredient7 = document.getElementById("ingredient7").value;
    const ingredient8 = document.getElementById("ingredient8").value;
    const ingredient9 = document.getElementById("ingredient9").value;
    const ingredient10 = document.getElementById("ingredient10").value;
    const ingredient11 = document.getElementById("ingredient11").value;
    const ingredient12 = document.getElementById("ingredient12").value;
    const ingredient13 = document.getElementById("ingredient13").value;
    const ingredient14 = document.getElementById("ingredient14").value;
    const step1 = document.getElementById("step1").value;
    const step2 = document.getElementById("step2").value;
    const step3 = document.getElementById("step3").value;
    const step4 = document.getElementById("step4").value;
    const step5 = document.getElementById("step5").value;
    const step6 = document.getElementById("step6").value;
    const step7 = document.getElementById("step7").value;
    const step8 = document.getElementById("step8").value;
    const step9 = document.getElementById("step9").value;
    const step10 = document.getElementById("step10").value;

    const newRecipe = [];

    if (title !== "") {
        newRecipe.push({
            titre: title,
        });
    }

    if (typeOfDish() !== "") {
        newRecipe.push({
            catégorie: typeOfDish(),
        });
    }

    if (pictureUrl !== "") {
        newRecipe.push({
            url: pictureUrl,
        });
    }

    if (preparationTime !== "") {
        newRecipe.push({
            "temps de préparation": preparationTime,
        });
    }

    if (cookingTime !== "") {
        newRecipe.push({
            "temps de cuisson": cookingTime,
        });
    }

    if (ingredient1 !== "") {
        newRecipe.push({
            "ingrédient 1": ingredient1,
        });
    }

    if (ingredient2 !== "") {
        newRecipe.push({
            "ingrédient 2": ingredient2,
        });
    }

    if (ingredient3 !== "") {
        newRecipe.push({
            "ingrédient 3": ingredient3,
        });
    }

    if (ingredient4 !== "") {
        newRecipe.push({
            "ingrédient 4": ingredient4,
        });
    }

    if (ingredient5 !== "") {
        newRecipe.push({
            "ingrédient 5": ingredient5,
        });
    }

    if (ingredient6 !== "") {
        newRecipe.push({
            "ingrédient 6": ingredient6,
        });
    }

    if (ingredient7 !== "") {
        newRecipe.push({
            "ingrédient 7": ingredient7,
        });
    }

    if (ingredient8 !== "") {
        newRecipe.push({
            "ingrédient 8": ingredient8,
        });
    }

    if (ingredient9 !== "") {
        newRecipe.push({
            "ingrédient 9": ingredient9,
        });
    }

    if (ingredient10 !== "") {
        newRecipe.push({
            "ingrédient 10": ingredient10,
        });
    }

    if (ingredient11 !== "") {
        newRecipe.push({
            "ingrédient 11": ingredient11,
        });
    }

    if (ingredient12 !== "") {
        newRecipe.push({
            "ingrédient 12": ingredient12,
        });
    }

    if (ingredient13 !== "") {
        newRecipe.push({
            "ingrédient 13": ingredient13,
        });
    }

    if (ingredient14 !== "") {
        newRecipe.push({
            "ingrédient 14": ingredient14,
        });
    }

    if (step1 !== "") {
        newRecipe.push({
            "étape 1": step1,
        });
    }

    if (step2 !== "") {
        newRecipe.push({
            "étape 2": step2,
        });
    }

    if (step3 !== "") {
        newRecipe.push({
            "étape 3": step3,
        });
    }

    if (step4 !== "") {
        newRecipe.push({
            "étape 4": step4,
        });
    }

    if (step5 !== "") {
        newRecipe.push({
            "étape 5": step5,
        });
    }

    if (step6 !== "") {
        newRecipe.push({
            "étape 6": step6,
        });
    }

    if (step7 !== "") {
        newRecipe.push({
            "étape 7": step7,
        });
    }

    if (step8 !== "") {
        newRecipe.push({
            "étape 8": step8,
        });
    }

    if (step9 !== "") {
        newRecipe.push({
            "étape 9": step9,
        });
    }

    if (step10 !== "") {
        newRecipe.push({
            "étape 10": step10,
        });
    }

    console.log(newRecipe);

    localStorage.setItem("nouvelle recette", JSON.stringify(newRecipe));

    window.location.href = "backoffice.html";
});
