"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quartermaster = exports.TrainingService = exports.TrainingCamp = void 0;
const index_1 = require("../constants/index");
const unit_1 = require("../entities/unit");
const armiesRegistry_1 = require("./armiesRegistry");
const training_1 = require("../entities/training");
class TrainingCamp {
    static createUnits(civilizationType, army) {
        const unitGroupQuantities = index_1.unitsMap[civilizationType];
        const { units, id } = army;
        Object.entries(units).forEach(([unitGroup, _]) => {
            const unitType = unitGroup.slice(0, -1);
            const quantity = unitGroupQuantities[unitGroup];
            army.units[unitGroup] = TrainingCamp.createUnitGroup(unitType, quantity, id);
        });
    }
    static createUnitGroup(type, length, armyId) {
        return Array.from({ length }, () => new unit_1.Unit(type, armyId));
    }
    static strengthenUnit(unit) {
        TrainingService.executeTraining('strength', unit);
    }
    static transformUnit(unit) {
        return TrainingService.executeTraining('type', unit);
    }
}
exports.TrainingCamp = TrainingCamp;
class TrainingService {
    static executeTraining(trainingType, unit) {
        const paymentResult = Quartermaster.processPayment(trainingType, unit);
        if (paymentResult === "Successfull payment") {
            training_1.Training.start(trainingType, unit);
            return `${trainingType} completed successfully`;
        }
        return paymentResult;
    }
}
exports.TrainingService = TrainingService;
class Quartermaster {
    static getPrice(trainingType, trainingUnitType) {
        return index_1.trainingCosts[trainingType][trainingUnitType];
    }
    static processPayment(trainingType, unit) {
        const price = Quartermaster.getPrice(trainingType, unit.type);
        const army = armiesRegistry_1.ArmiesRegistry.getArmy(unit.armyId);
        if (army) {
            const paymentResult = army.payUnitTraining(price);
            return paymentResult;
        }
        return "Hubo un problema al procesar el pago";
    }
}
exports.Quartermaster = Quartermaster;
