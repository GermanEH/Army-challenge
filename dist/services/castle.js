"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Castle = void 0;
const armiesRegistry_1 = require("../services/armiesRegistry");
const trainingCamp_1 = require("../services/trainingCamp");
//Clase helper que sólo agrupa lógica.
class Castle {
    static createArmy(civilizationType, army) {
        try {
            armiesRegistry_1.ArmiesRegistry.registryArmy(army);
            trainingCamp_1.TrainingCamp.createUnits(civilizationType, army);
            army.setArmyStrength();
            return "Army created successfully";
        }
        catch (error) {
            return `Error creating army: ${error}`;
        }
    }
}
exports.Castle = Castle;
