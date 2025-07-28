"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnightBehavior = exports.ArcherBehavior = exports.PikemanBehavior = exports.Unit = void 0;
const trainingCamp_1 = require("../services/trainingCamp");
const index_1 = require("../constants/index");
// Herencia y polimorfismo.
//
// Polimorfismo por delegación:
//
// Se decidió no crear subclases de Unit por cada tipo de unidad, sino implementar "polimorfismo por delegación". A saber:
// se asigna un atributo a la clase Unit que se encarga de gestionar la transformación de la unidad.
// Ver más abajo para más detalle.
// Clase Unit ya no es abstracta:
// abstract class Unit <T extends UnitType> {
class Unit {
    id = '0';
    type;
    strength;
    armyId = '0';
    lifeYears = 0;
    transformBehavior;
    constructor(type, armyId) {
        this.id = Math.random().toString();
        this.type = type;
        this.strength = index_1.strengthMap[type];
        this.armyId = armyId;
        this.lifeYears = 0;
        this.transformBehavior = transformBehaviors[type];
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
    startStrengthTraining() {
        return trainingCamp_1.TrainingCamp.strengthenUnit(this);
    }
    //Ver más abajo la aclaración sobre la decisión de modelado que se tomó.
    transform(type) {
        this.type = type;
        this.strength = index_1.strengthMap[type];
    }
    //Ver más abajo la aclaración sobre la decisión de modelado que se tomó.
    // abstract startTransformTraining():string
    startTransformTraining() {
        return this.transformBehavior.startTransformTraining(this);
    }
    getLifeYears() {
        return this.lifeYears;
    }
}
exports.Unit = Unit;
class PikemanBehavior {
    startTransformTraining(unit) {
        return trainingCamp_1.TrainingCamp.transformUnit(unit);
    }
}
exports.PikemanBehavior = PikemanBehavior;
class ArcherBehavior {
    startTransformTraining(unit) {
        return trainingCamp_1.TrainingCamp.transformUnit(unit);
    }
}
exports.ArcherBehavior = ArcherBehavior;
class KnightBehavior {
    //Sobrecarga
    startTransformTraining() {
        return "Knights cannot be transformed";
    }
}
exports.KnightBehavior = KnightBehavior;
const transformBehaviors = {
    pikeman: new PikemanBehavior(),
    archer: new ArcherBehavior(),
    knight: new KnightBehavior()
};
// Herencia y polimorfismo.
// Se decidió sacrificar la creación de subclases para poder realizar una transformación íntegra de cada unidad que haga el 
// entrenamiento de transformación. De esa manera, se conserva la identidad del objeto (mismo id, mismo armyId), pero 
// se cambia completamente el comportamiento. Se llama polimorfismo por delegación
// El siguiente código se descarta:
// export class Pikeman extends Unit<'pikeman'> {
//     constructor(armyId:string) {
//         super('pikeman',armyId)
//     }
//     startTransformTraining(): string {
//         return TrainingCamp.transformUnit(this)
//     }
// }
// export class Archer extends Unit<'archer'> {
//     constructor(armyId:string) {
//         super('archer',armyId)
//     }
//     startTransformTraining(): string {
//         return TrainingCamp.transformUnit(this)
//     }
// }
// export class Knight extends Unit<'knight'> {
//     constructor(armyId:string) {
//         super('knight',armyId)
//     }
//     //Sobrecarga
//     override startTransformTraining(): string {
//         return "Knights cannot be transformed"
//     }
// }
