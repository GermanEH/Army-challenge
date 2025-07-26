export type Civilization = 'chinese'|'bizantine'|'english'

export interface IArmy {
    id:string
        units: Units
    historyBattle:string[];
    armyStrength:number;
    gold:number;
    payUnitTraining:(price:number)=>string;

}

export interface IUnit<T> {
    id:string 
    type:T
    strength:number
    armyId:string, 
    lifeYears:number, 
    strengthen:()=>void, 
    transform:()=>void, 
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
}

export type IUnitType = "pikeman" | "archer" | "knight"

export type Units = {
    pikemans: IUnit<'pikeman'>[];
    archers: IUnit<'archer'>[];
    knights: IUnit<'knight'>[];
}

export type TrainingType = 'strength' | 'type'

export type TrainingCosts = {
    strength:UnitStrengthTrainingCost
    type:UnitTransformationCost
}

export type TrainingBenefits = {
    strength:UnitStrengthTrainingBenefit
    type:UnitTransformationResult
}

export type TrainingBenefit = number|IUnitType

export interface IBattle {
    id:string
    readonly attacker:IArmy|undefined
    readonly defender:IArmy|undefined
    battleResult:IBattleResult
}

export interface IBattleResult {
    winner:IArmy|null,
    loser:IArmy|null,
    goldAwarded:number|null,
    unitsLost:IUnit<IUnitType>[]|null
}
