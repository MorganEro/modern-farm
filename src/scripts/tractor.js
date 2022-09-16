import { addPlant } from "./field.js"
import { createPotato } from "./seeds/potato.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createSoybean } from "./seeds/soybean.js"
import { createWheat } from "./seeds/wheat.js"
import { createSunflower } from "./seeds/sunflower.js"





export const plantSeeds = (plan) => {
    //function to iterate through parent and child arrays
    for (const row of plan) {
        for (const plantOfRow of row){
            //for each seed run the corresponding create function and add the seed to plants array in field module
            if (plantOfRow === "Potato") {
              addPlant(createPotato())
            }
            if (plantOfRow === "Corn") {
              addPlant(createCorn())
            }
            if (plantOfRow === "Asparagus") {
              addPlant(createAsparagus())
            }
            if (plantOfRow === "Sunflower") {
              addPlant(createSunflower())
            }
            if (plantOfRow === "Soybean") {
              addPlant(createSoybean())
            }
            if (plantOfRow === "Wheat") {
              addPlant(createWheat())
            }
        }
    } 
}