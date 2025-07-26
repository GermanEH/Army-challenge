"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Castle = void 0;
const armiesRegistry_1 = require("../services/armiesRegistry");
const armyStatistics_1 = require("../services/armyStatistics");
const trainingCamp_1 = require("../services/trainingCamp");
class Castle {
    static createArmy(civilizationType, army) {
        armiesRegistry_1.ArmiesRegistry.registryArmy(army);
        trainingCamp_1.TrainingCamp.createUnits(civilizationType, army);
        armyStatistics_1.ArmyStatistics.setArmyStrength(army);
        return "Ejército creado exitosamente";
    }
}
exports.Castle = Castle;
