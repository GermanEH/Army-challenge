"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BattleField = void 0;
class BattleField {
    static determineWinner(battle) {
        const { attacker, defender, battleResult } = battle;
        if (attacker && defender) {
            const attackerStrength = attacker.getArmyStrength();
            const defenderStrength = attacker.getArmyStrength();
            if (attackerStrength > defenderStrength) {
                this.winner = attacker;
                this.loser = defender;
                battleResult.winner = attacker;
                battleResult.loser = defender;
            }
            else {
                this.winner = defender;
                this.loser = attacker;
                battleResult.winner = defender;
                battleResult.loser = attacker;
            }
        }
    }
    static addGold(battleResult) {
        if (battleResult.winner) {
            this.winner.earnGold(100);
            battleResult.winner.earnGold(100);
            battleResult.goldAwarded = 100;
        }
    }
    static removeUnits(battleResult) {
        battleResult.unitsLost = this.loser.loseUnits();
        battleResult.loser?.loseUnits();
    }
    static processResult(battleResult) {
        if (battleResult.winner && battleResult.loser) {
            BattleField.addGold(battleResult);
            BattleField.removeUnits(battleResult);
            this.loser.setArmyStrength();
            battleResult.loser.setArmyStrength();
        }
    }
}
exports.BattleField = BattleField;
