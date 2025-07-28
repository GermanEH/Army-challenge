export type Civilization = 'chinese'|'bizantine'|'english'

export interface Army {
    getId:()=>string
    getUnits:()=>Unit[]
    setUnits:(units:Unit[])=>void
    payUnitTraining:(price:number)=>string;
    getArmyStrength:()=>void
    setArmyStrength:()=>void
    getUnitsStrength:(unit:Unit[])=>void
    earnGold:(gold:number)=>void
    hasGold:()=>boolean
    getGold:()=>number
    loseUnits:()=>Unit[]
    addBattle:(battleId:string)=>void
    hadBattle:(battleId:string)=>void
}

export interface Unit {
    getId:()=>string
    getStrength:()=>number
    strengthen:(benefit:number)=>void,
    getArmyId:()=>string
    getType:()=>UnitType
    transform:(type:UnitType)=>void, 
    startStrengthTraining:()=>void, 
    startTransformTraining:()=>void,
    getLifeYears:()=>number
}

export interface UnitStrength {
    "pikeman":5;
    "archer":10;
    "knight":20;
}

export interface UnitStrengthTrainingCost {
    "pikeman":10;
    "archer":20;
    "knight":30;
}

export interface UnitStrengthTrainingBenefit {
    "pikeman":3;
    "archer":7;
    "knight":10;
}

export interface UnitTransformationCost {
    "pikeman":30;
    "archer":40;
    "knight":null
}

export interface UnitTransformationResult {
    "pikeman":"archer";
    "archer":"knight";
    "knight":""
}

export type UnitType = "pikeman" | "archer" | "knight"

// export type Units = {
//     pikemans: Unit<'pikeman'>[];
//     archers: Unit<'archer'>[];
//     knights: Unit<'knight'>[];
// }

export type TrainingType = 'strength' | 'type'

export type TrainingCosts = {
    strength:UnitStrengthTrainingCost
    type:UnitTransformationCost
}

export type TrainingBenefits = {
    strength:UnitStrengthTrainingBenefit
    type:UnitTransformationResult
}

export type TrainingBenefit = number|UnitType|""

export interface Battle {
    id:string
    readonly attacker:Army|undefined
    readonly defender:Army|undefined
    battleResult:BattleResult
}

export interface BattleResult {
    winner:Army|null,
    loser:Army|null,
    goldAwarded:number|null,
    // unitsLost:(Unit<"archer"> | Unit<"pikeman"> | Unit<"knight">)[]|null
    unitsLost:Unit[]|null
}
