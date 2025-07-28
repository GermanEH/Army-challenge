// import { Archer, Knight, Pikeman } from '../entities/unit';
import { Unit } from '../entities/unit';
import type { Unit as IUnit, UnitType, TrainingCosts, TrainingBenefits, UnitStrength }  from '../types/index'

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
        archer:"knight",
        knight:""
    }
} as const

// export const createUnitMap:{[K in UnitType]: (armyId: string) => Unit<K>} = {
//     pikeman:(armyId) => {return new Pikeman(armyId)},
//     archer:(armyId) => {return new Archer(armyId)},
//     knight:(armyId) => {return new Knight(armyId)}
// }

export const createUnitMap:{[K in UnitType]: (armyId: string) => IUnit} = {
    pikeman:(armyId) => {return new Unit('pikeman',armyId)},
    archer:(armyId) => {return new Unit('archer',armyId)},
    knight:(armyId) => {return new Unit('knight',armyId)}
}

export const strengthMap:UnitStrength = {
    pikeman:5,
    archer:10,
    knight:20,
} as const;

export const unitGroup: UnitType[] = ["pikeman", "archer", "knight"];

export const unitsByCivilization = {
  chinese: { pikemans: 2, archers: 25, knights: 2 },
  bizantine: { pikemans: 10, archers: 10, knights: 10 },
  english: { pikemans: 2, archers: 10, knights: 15 },
}
