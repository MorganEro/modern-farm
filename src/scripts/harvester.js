export const harvestPlants = (plantsArray) => {
//iterate the array of plants and on each plant get the value of the output property. add that many of the plants objects to the array . exception is corn. it gets half
const arrayOfSeedObjects = []

    for (const plantObject of plantsArray) {
        if (plantObject.type !== 'Corn'){
            for (let value = 0; value < plantObject.output; value++){
            arrayOfSeedObjects.push(plantObject)
            }
        }else {
            for (let value = 0; value < plantObject.output / 2; value++){
                arrayOfSeedObjects.push(plantObject)  
        }   
    }

    //return an array of seed objects
}
return arrayOfSeedObjects
}