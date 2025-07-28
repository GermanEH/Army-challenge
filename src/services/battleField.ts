import type { Battle,BattleResult, Army } from '../types/index'

export class BattleField {

    private static winner:Army;
    private static loser:Army;

    static determineWinner(battle:Battle){
        const{attacker, defender, battleResult} = battle
        if(attacker && defender) {
            const attackerStrength = attacker.getArmyStrength()
            const defenderStrength = attacker.getArmyStrength()
            if(attackerStrength > defenderStrength) {
                this.winner = attacker
                this.loser = defender
                battleResult.winner = attacker 
                battleResult.loser = defender
            } else {
                this.winner = defender
                this.loser = attacker
                battleResult.winner = defender
                battleResult.loser = attacker
            }
        }
    }
    private static addGold(battleResult:BattleResult){

        if(battleResult.winner){

            this.winner.earnGold(100)
            battleResult.winner.earnGold(100);
            battleResult.goldAwarded = 100;

        }
        
    }

    private static removeUnits(battleResult:BattleResult){

            battleResult.unitsLost = this.loser.loseUnits()
            battleResult.loser?.loseUnits()
    }

    static processResult(battleResult:BattleResult){
        if(battleResult.winner && battleResult.loser){
            BattleField.addGold(battleResult);
            BattleField.removeUnits(battleResult);
            this.loser.setArmyStrength()
            battleResult.loser.setArmyStrength()
        }
    }

}