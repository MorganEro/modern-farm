export const catalog = (harvestedFoodArray) => {
    //iterate the array of food objects
    // each object should get inside its main html element <section class="plant">Corn</section>
    let catalogHtml = ""
    for (const food of harvestedFoodArray) {
        catalogHtml +=  
     `<section class="plant">${food.type}</section>`
    }
    return catalogHtml
}

