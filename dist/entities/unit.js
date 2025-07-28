"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Knight = exports.Archer = exports.Pikeman = void 0;
const trainingCamp_1 = require("../services/trainingCamp");
const index_1 = require("../constants/index");
class Unit {
    constructor(type, armyId) {
        this.id = '0';
        this.armyId = '0';
        this.lifeYears = 0;
        this.id = Math.random().toString();
        this.type = type;
        this.strength = index_1.strengthMap[type];
        this.armyId = armyId;
        this.lifeYears = 0;
    }
    getId() {
        return this.id;
    }
    getArmyId() {
        return this.armyId;
    }
    getType() {
        return this.type;
    }
    getStrength() {
        return this.strength;
    }
    strengthen(strength) {
        this.strength += strength;
    }
    transform(type) {
        this.type = type;
    }
    startStrengthTraining() {
        return trainingCamp_1.TrainingCamp.strengthenUnit(this);
    }
    getLifeYears() {
        return this.lifeYears;
    }
}
// Herencia y polimorfismo.
class Pikeman extends Unit {
    constructor(armyId) {
        super('pikeman', armyId);
    }
    startTransformTraining() {
        return trainingCamp_1.TrainingCamp.transformUnit(this);
    }
}
exports.Pikeman = Pikeman;
class Archer extends Unit {
    constructor(armyId) {
        super('archer', armyId);
    }
    startTransformTraining() {
        return trainingCamp_1.TrainingCamp.transformUnit(this);
    }
}
exports.Archer = Archer;
class Knight extends Unit {
    constructor(armyId) {
        super('knight', armyId);
    }
    startTransformTraining() {
        return "Knights cannot be transformed";
    }
}
exports.Knight = Knight;
