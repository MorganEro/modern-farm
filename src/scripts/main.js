console.log("Welcome to the main module")

import { createPlan } from "./plan.js"

const yearlyPlan =  createPlan()

//console.log(yearlyPlan)

import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { addPlant } from "./fields.js"
import { usePlants } from "./fields.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"

plantSeeds(yearlyPlan)
const usedPlants = usePlants()
const harvest = harvestPlants(usedPlants)
console.log(harvest)
