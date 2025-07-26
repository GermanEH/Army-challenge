"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unit = void 0;
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
    }
    strengthen() {
        console.log(trainingCamp_1.TrainingCamp);
        trainingCamp_1.TrainingCamp.strengthenUnit(this);
    }
    transform() {
        if (this.type !== 'knight') {
            trainingCamp_1.TrainingCamp.transformUnit(this);
        }
    }
    getLifeYears() {
        return this.lifeYears;
    }
}
exports.Unit = Unit;
