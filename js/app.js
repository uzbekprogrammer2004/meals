
const formElemntent = document.querySelector('#search-form')
const inputElemntent = document.querySelector('#search-input')
const buttonElemntent = document.querySelector('#search-btn')
const mealsElemntent = document.querySelector('#meals')


function fetchMeals(mealName = 'Chicken') {
    buttonElemntent.innerHTML = 'Loading...'
    buttonElemntent.setAttribute("disabled", true)
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
        .then(res => res.json())
        .then(data => renderMeals(data.meals))
        
        .catch(error => console.log(error))
        .finally(() => {
            buttonElemntent.innerHTML = "Search"
            buttonElemntent.removeAttribute("disabled")
        })
}

function renderMeals(meals = []) {
    mealsElemntent.innerHTML = ''

    meals.map(item => {
        mealsElemntent.innerHTML +=
        `<div class="shadow-md rounded-xl p-4" >
            <img class="w-full h-[250px] rounded-xl object-cover " src=${item.strMealThumb} alt="Ovqat rasmi bor">
            <h2 class="text-xl mt-3 text-gray-700 text-center">${item.strMeal}</h2>
        </div>`
    })
}

formElemntent.addEventListener('submit', e => {
    e.preventDefault()
    fetchMeals(inputElemntent.value)
})

fetchMeals()