console.log("Welcome to the main module")

import { createPlan } from "./plan.js"

const yearlyPlan =  createPlan()

//console.log(yearlyPlan)

import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { addPlant } from "./field.js"
import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
import { catalog } from "./catalog.js"

plantSeeds(yearlyPlan)
const usedPlants = usePlants()
const harvest = harvestPlants(usedPlants)
console.log(harvest)

const parentHTMLElement = document.querySelector(".container")
parentHTMLElement.innerHTML = catalog(harvest)