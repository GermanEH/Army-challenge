import type {
IUnitType,
UnitStrength,
} from '../types/index';
import { TrainingCamp } from '../services/trainingCamp';
import { strengthMap } from '../constants/index';

export class Unit <T extends IUnitType> {

        id:string='0';
        type!:T;
        strength: UnitStrength[T];
        armyId:string='0';
        lifeYears:number=0;

        constructor(type:T, armyId:string){
            this.id=Math.random().toString()
            this.type=type;
            this.strength=strengthMap[type];
            this.armyId=armyId;
        }

        strengthen(){
            console.log(TrainingCamp)
            TrainingCamp.strengthenUnit(this)
        }

        transform(){
            if(this.type !== 'knight'){
                TrainingCamp.transformUnit(this)
            }
        }

        getLifeYears(){
            return this.lifeYears;
        }

    }