"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quartermaster = exports.TrainingService = exports.TrainingCamp = void 0;
const index_1 = require("../constants/index");
const armiesRegistry_1 = require("./armiesRegistry");
const training_1 = require("../entities/training");
class TrainingCamp {
    static createUnits(civilizationType, army) {
        const unitGroupQuantities = index_1.unitsByCivilization[civilizationType];
        const armyId = army.getId();
        const units = army.getUnits();
        Object.entries(units).forEach(([unitGroup, _]) => {
            const unitType = unitGroup.slice(0, -1);
            const quantity = unitGroupQuantities[unitGroup];
            const newUnitGroup = TrainingCamp.createUnitGroup(unitType, quantity, armyId);
            army.setUnits(unitType, newUnitGroup);
        });
    }
    static createUnitGroup(type, length, armyId) {
        return Array.from({ length }, () => index_1.createUnitMap[type](armyId));
    }
    static strengthenUnit(unit) {
        return TrainingService.executeTraining('strength', unit);
    }
    // State pattern. 
    // Se crea un estado interno "type" modificable, de forma tal que se pueda transformar la unidad del ejército sin
    // romper su integridad referencial. La unidad sigue existiendo, pero cambia su comportamiento en reacción al cambio de
    // su estado interno. En su definición:
    // "State is a behavioral design pattern that lets an object alter its behavior when its internal state changes. It appears as if the object changed its class."
    // Fuente: https://refactoring.guru/design-patterns/state
    // Otra opción sería crear una nueva instancia de la clase Unit, con el tipo de unidad a transformar, y delegar en Army el reemplazo
    // de la antigüa unidad por la nueva. Pero eso rompería el encapsulamiento.
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
            return `Unit ${unit.getId()} of type ${unit.getType()} successfully trained.`;
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
        const price = Quartermaster.getPrice(trainingType, unit.getType());
        const army = armiesRegistry_1.ArmiesRegistry.getArmy(unit.getArmyId());
        if (army && army.hasGold()) {
            const paymentResult = army.payUnitTraining(price);
            return paymentResult;
        }
        return "There was a problem processing the payment";
    }
}
exports.Quartermaster = Quartermaster;
