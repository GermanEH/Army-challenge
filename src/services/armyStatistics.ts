import type {
  IArmy,
  IUnitType,
  IUnit
} from '../types/index';
export class ArmyStatistics {

    static setArmyStrength(army:IArmy) {
        army.armyStrength= this.getUnitsStrength(army.units.pikemans) +
            this.getUnitsStrength(army.units.archers) +
            this.getUnitsStrength(army.units.knights);
    }

    static getUnitsStrength<T extends IUnitType> (unit:IUnit<T>[]): number {
        return unit.reduce((acc:number, unit:IUnit<T>)=>{
            return acc += unit.strength as number
        },0)
    }

}