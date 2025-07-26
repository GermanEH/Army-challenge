"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Training = void 0;
const { trainingBenefits, trainingMap } = require('../constants/index');
class Training {
    static start(trainingType, unit) {
        console.log(trainingType);
        console.log(unit);
        const benefit = trainingBenefits[trainingType][unit.type];
        console.log(benefit);
        trainingMap[trainingType](unit, benefit);
    }
}
exports.Training = Training;
