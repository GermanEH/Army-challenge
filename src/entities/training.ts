import type {
  TrainingType,
  IUnitType,
  IUnit,
} from '../types/index';
const {trainingBenefits,trainingMap } = require('../constants/index')

export class Training {

    static start(trainingType:TrainingType, unit:IUnit<IUnitType>){
        console.log(trainingType)
        console.log(unit)
        const benefit = trainingBenefits[trainingType][unit.type]
        console.log(benefit)
        trainingMap[trainingType](unit,benefit)

      }

}