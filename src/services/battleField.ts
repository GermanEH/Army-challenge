import type { IBattle,IBattleResult,IUnitType,Units,IUnit } from '../types/index'
const {ArmyStatistics} = require('./armyStatistics')

export class BattleField {

    static determineWinner(battle:IBattle){
        const{attacker, defender, battleResult} = battle
        if(attacker && defender) {
            if(attacker.armyStrength > defender.armyStrength) {
                battleResult.winner = attacker 
                battleResult.loser = defender
            } else {
                battleResult.winner = defender
                battleResult.loser = attacker
            }
        }
    }
    private static addGold(battleResult:IBattleResult){

        if(battleResult.winner){

            battleResult.winner.gold += 100;
            battleResult.goldAwarded = 100;

        }
        
    }

    private static removeUnits(units:Units, unitsLost:IUnit<IUnitType>[] | null){

            const sortedUnits = [...units.pikemans, ...units.archers, ...units.knights].sort((a,b) => a.strength as number - b.strength!)
            unitsLost = sortedUnits.slice(0,2)

            const unitsLostIds = unitsLost.map(unit=>unit.id)

            function filterUnitsByLost<T extends IUnit<IUnitType>>(arr: T[]): T[] {
                return arr.filter(unit => !unitsLostIds.includes(unit.id));
            }

            units.pikemans = filterUnitsByLost(units.pikemans);
            units.archers = filterUnitsByLost(units.archers);
            units.knights = filterUnitsByLost(units.knights);

            return unitsLost

    }

    static processResult(battleResult:IBattleResult){
        if(battleResult.winner && battleResult.loser){
            BattleField.addGold(battleResult);
            BattleField.removeUnits(battleResult.loser.units,battleResult.unitsLost);
            ArmyStatistics.setArmyStrength(battleResult.loser)
        }
    }

}