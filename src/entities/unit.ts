import type {
UnitType,
} from '../types/index';
import { TrainingCamp } from '../services/trainingCamp';
import { strengthMap } from '../constants/index';

// Herencia y polimorfismo.
//
// Polimorfismo por delegación:
//
// Se decidió no crear subclases de Unit por cada tipo de unidad, sino implementar "polimorfismo por delegación". A saber:
// se asigna un atributo a la clase Unit que se encarga de gestionar la transformación de la unidad.
// Ver más abajo para más detalle.

// Clase Unit ya no es abstracta:
// abstract class Unit <T extends UnitType> {

export class Unit {

        protected id:string='0';
        protected type!:UnitType;
        protected strength:number;
        protected armyId:string='0';
        protected lifeYears:number=0;
        protected transformBehavior: TransformBehavior;

        constructor(type:UnitType, armyId:string){
            this.id=Math.random().toString()
            this.type=type;
            this.strength=strengthMap[type];
            this.armyId=armyId;
            this.lifeYears=0;
            this.transformBehavior = transformBehaviors[type]
        }

        getId() {
            return this.id
        }

        getArmyId() {
            return this.armyId
        }

        getType(): UnitType {
            return this.type;
        }

        getStrength(): number {
            return this.strength;
        }

        strengthen(strength:number) {
            this.strength += strength;
        }

        startStrengthTraining(){
            return TrainingCamp.strengthenUnit(this)
        }
        
        //Ver más abajo la aclaración sobre la decisión de modelado que se tomó.
        transform(type:UnitType){
            this.type = type
            this.strength=strengthMap[type];
        }
        
        //Ver más abajo la aclaración sobre la decisión de modelado que se tomó.
        // abstract startTransformTraining():string
        startTransformTraining(): string {
            return this.transformBehavior.startTransformTraining(this);
        }
        
        getLifeYears(){
            return this.lifeYears;
        }

}

interface TransformBehavior {
    startTransformTraining:(unit: Unit)=>string
}

export class PikemanBehavior implements TransformBehavior {
    startTransformTraining(unit: Unit): string {
        return TrainingCamp.transformUnit(unit)
    }
}

export class ArcherBehavior implements TransformBehavior {
    startTransformTraining(unit: Unit): string {
        return TrainingCamp.transformUnit(unit)
    }
}

export class KnightBehavior implements TransformBehavior {
    //Sobrecarga
    startTransformTraining(): string {
        return "Knights cannot be transformed"
    }
}

const transformBehaviors: Record<UnitType, TransformBehavior> = {
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