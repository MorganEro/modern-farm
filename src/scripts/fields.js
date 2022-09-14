//define an empty array variable to store all the plants growing in the field. do not export

const plantsGrowingInFieldArray = []
// In the module, define and export a function named addPlant. must accept seedObject as input and add it to the fields array
export const addPlant = (seedObject) => {
        if (Array.isArray(seedObject)) {
            for (const cornObject of seedObject) 
            plantsGrowingInFieldArray.push(cornObject)
        } else {
            plantsGrowingInFieldArray.push(seedObject)
        }
    }
//Define and export a function named usePlants that returns a copy of the array of plants.
export const usePlants = () => {
    return plantsGrowingInFieldArray.map(seedObject => ({...seedObject}))
    
    
}