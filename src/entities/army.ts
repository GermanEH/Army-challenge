import { Castle } from '../services/castle';
import { Battle } from './battle';
import type { Civilization, Battle as IBattle, Unit } from '../types/index'

export class Army {

    private id:string = '0';
    private units: Unit[] = []
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
    
    setUnits(units:Unit[]) {
        this.units = [...this.units,...units]
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
        this.armyStrength= this.getUnitsStrength(this.units)
    }

    getUnitsStrength(unit:Unit[]): number {
        return unit.reduce((acc:number, unit:Unit)=>{
            return acc += unit.getStrength()
        },0)
    }

    loseUnits(){
        
        const unitsLost = [...this.units].sort((a, b) => a.getStrength() - b.getStrength()).slice(0, 2);

        this.units = this.units.filter(unit => !unitsLost.includes(unit));

        return unitsLost;

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
