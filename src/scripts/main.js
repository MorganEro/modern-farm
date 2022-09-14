console.log("Welcome to the main module")

import { createPlan } from "./plan.js"

const yearlyPlan =  createPlan()

console.log(yearlyPlan)

import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { addPlant } from "./fields.js"
import { usePlants } from "./fields.js"

const asparagusSeedObject = createAsparagus()
const cornSeedObject = createCorn()
addPlant(cornSeedObject)
const usedPlants = usePlants()
console.log(usedPlants)