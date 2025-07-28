import type {
UnitType,
} from '../types/index';
import { TrainingCamp } from '../services/trainingCamp';
import { strengthMap } from '../constants/index';

abstract class Unit <T extends UnitType> {

        protected id:string='0';
        protected type!:T;
        protected strength:number;
        protected armyId:string='0';
        protected lifeYears:number=0;

        constructor(type:T, armyId:string){
            this.id=Math.random().toString()
            this.type=type;
            this.strength=strengthMap[type];
            this.armyId=armyId;
            this.lifeYears=0;
        }

        getId() {
            return this.id
        }

        getArmyId() {
            return this.armyId
        }

        getType(): T {
            return this.type;
        }

        getStrength(): number {
            return this.strength;
        }

        strengthen(strength:number) {
            this.strength += strength;
        }

        transform(type:T){
            this.type=type;
        }

        startStrengthTraining(){
            return TrainingCamp.strengthenUnit(this)
        }

        abstract startTransformTraining():string

        getLifeYears(){
            return this.lifeYears;
        }

}

// Herencia y polimorfismo.
export class Pikeman extends Unit<'pikeman'> {
    constructor(armyId:string) {
        super('pikeman',armyId)
    }
    startTransformTraining(): string {
        return TrainingCamp.transformUnit(this)
    }
}

export class Archer extends Unit<'archer'> {
    constructor(armyId:string) {
        super('archer',armyId)
    }
    startTransformTraining(): string {
        return TrainingCamp.transformUnit(this)
    }
}

export class Knight extends Unit<'knight'> {
    constructor(armyId:string) {
        super('knight',armyId)
    }
    override startTransformTraining(): string {
        return "Knights cannot be transformed"
    }
}