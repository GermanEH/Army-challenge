import { Castle } from '../services/castle';
import { Battle } from './battle';
import type { Civilization, Units, IBattle } from '../types/index'

export class Army {

    id:string = '0';
    units: Units = {
        pikemans: [],
        archers: [],
        knights: [],
    };
    historyBattle:string[] = [];
    armyStrength:number = 0;
    gold=1000;

    constructor(civilizationType:Civilization) {

        Castle.createArmy(civilizationType, this)

    }

    attack(enemy:Army):IBattle{
        return new Battle(this,enemy);
    }

    payUnitTraining(amount:number){
        if(this.gold >= amount) {
            this.gold-=amount;
            return "Successfull payment"
        } else {
            return `Not enough money. It cost $ ${amount} and the army has $ ${this.gold}`
        }
    }

}
