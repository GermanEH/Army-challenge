import type { IUnit, IUnitType, TrainingCosts, TrainingType, TrainingBenefits, UnitStrength, TrainingBenefit }  from '../types/index'

export const trainingCosts:TrainingCosts = {
    strength:{
        pikeman:10,
        archer:20,
        knight:30,
    },
    type:{
        pikeman:30,
        archer:40,
        knight:null
    }
} as const;

export const trainingBenefits:TrainingBenefits = {
    strength:{
        pikeman:3,
        archer:7,
        knight:10,
    },
    type:{
        pikeman:"archer",
        archer:"knight"
    }
} as const

export const trainingMap:Record<TrainingType, (unit:IUnit<IUnitType>,benefit:TrainingBenefit)=>void> = {

    strength: (unit,benefit)=> unit.strength! += benefit as number,
    type: (unit,benefit)=> unit.type! = benefit as IUnitType

} as const

export const strengthMap:UnitStrength = {
    pikeman:5,
    archer:10,
    knight:20,
} as const;

export const unitGroup: IUnitType[] = ["pikeman", "archer", "knight"];

export const unitsMap = {
  chinese: { pikemans: 2, archers: 25, knights: 2 },
  bizantine: { pikemans: 10, archers: 10, knights: 10 },
  english: { pikemans: 2, archers: 10, knights: 15 },
}
