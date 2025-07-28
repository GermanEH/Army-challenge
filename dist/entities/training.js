"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Training = void 0;
const index_1 = require("../constants/index");
//Estrategias concretas
class StrengthTraining {
    strategy = (unit, benefit) => unit.strengthen(benefit);
}
class TransformationTraining {
    strategy = (unit, benefit) => unit.transform(benefit);
}
//Registry pattern (se explica en armiesRegistry)
const Trainings = Object.freeze({
    strength: new StrengthTraining(),
    type: new TransformationTraining()
});
//Contexto de las estrategias
class Training {
    static start(trainingType, unit) {
        const benefit = index_1.trainingBenefits[trainingType][unit.getType()];
        Trainings[trainingType].strategy(unit, benefit);
    }
}
exports.Training = Training;
// Para mayor simplicidad y reducción de código se puede almacenar las estrategias en el objeto "trainings", pero dejaría de ser patrón
// strategy y no se podrían utilizar las clases de estrategias en otros lugares de la aplicación, además de que se dificulta el testeo:
//     private static readonly trainings = Object.freeze({
//         strength: <T extends UnitType>(unit: Unit<T>, benefit: TrainingBenefit) => unit.strengthen(benefit as number),
//        type: <T extends UnitType>(unit: Unit<T>, benefit: TrainingBenefit) => unit.strengthen(benefit as number)
//     } as const);
