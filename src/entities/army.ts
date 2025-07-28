import { Castle } from '../services/castle';
import { Battle } from './battle';
import type { Civilization, Units, Battle as IBattle, Unit, UnitType } from '../types/index'

export class Army {

    private id:string = '0';
    private units: Units = {
        pikemans: [],
        archers: [],
        knights: [],
    };
    private historyBattle:string[] = [];
    private armyStrength:number = 0;
    private gold=1000;

    constructor(civilizationType:Civilization) {
        this.id=Math.random().toString()
        Castle.createArmy(civilizationType, this)

    }

    getId(){
        return this.id
    }

    getUnits() {
        return this.units
    }
    
    setUnits(unitType:UnitType, units:Unit<UnitType>[]) {
        this.units[`${unitType}s`] = units
    }

    attack(enemy:Army):IBattle{
        return new Battle(this,enemy);
    }

    payUnitTraining(amount:number){
        if(this.gold >= amount) {
            this.gold-=amount;
            return `Successfull payment. Remaining gold: ${this.gold}`
        } else {
            return `Not enough money. It cost $ ${amount} and the army has $ ${this.gold}`
        }
    }

    getArmyStrength(){
        return this.armyStrength
    }

    
    setArmyStrength() {
        this.armyStrength= this.getUnitsStrength(this.units.pikemans) + this.getUnitsStrength(this.units.archers) + this.getUnitsStrength(this.units.knights);
    }

    getUnitsStrength<T extends UnitType> (unit:Unit<T>[]): number {
        return unit.reduce((acc:number, unit:Unit<T>)=>{
            return acc += unit.getStrength()
        },0)
    }

    loseUnits(){
        
            const sortedUnits = [...this.units.pikemans, ...this.units.archers, ...this.units.knights].sort((a,b) => a.getStrength() as number - b.getStrength())
            const unitsLost = sortedUnits.slice(0,2)

            const unitsLostIds = unitsLost.map(unit=>unit.getId())

            function filterUnitsByLost<T extends UnitType>(arr: Unit<T>[]): Unit<T>[] {
                return arr.filter(unit => !unitsLostIds.includes(unit.getId()));
            }

            this.units.pikemans = filterUnitsByLost(this.units.pikemans);
            this.units.archers = filterUnitsByLost(this.units.archers);
            this.units.knights = filterUnitsByLost(this.units.knights);

            return unitsLost
    }

    earnGold(gold:number){
        this.gold += gold
    }

    getGold(){
        return this.gold
    }

    hasGold(){
        return this.gold > 0
    }

    addBattle(battleId:string){
        this.historyBattle.push(battleId)
    }

    hadBattle(battleId:string){
        return this.historyBattle.includes(battleId)
    }
}
