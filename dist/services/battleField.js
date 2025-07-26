"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BattleField = void 0;
const { ArmyStatistics } = require('./armyStatistics');
class BattleField {
    static determineWinner(battle) {
        const { attacker, defender, battleResult } = battle;
        if (attacker && defender) {
            if (attacker.armyStrength > defender.armyStrength) {
                battleResult.winner = attacker;
                battleResult.loser = defender;
            }
            else {
                battleResult.winner = defender;
                battleResult.loser = attacker;
            }
        }
    }
    static addGold(battleResult) {
        if (battleResult.winner) {
            battleResult.winner.gold += 100;
            battleResult.goldAwarded = 100;
        }
    }
    static removeUnits(units, unitsLost) {
        const sortedUnits = [...units.pikemans, ...units.archers, ...units.knights].sort((a, b) => a.strength - b.strength);
        unitsLost = sortedUnits.slice(0, 2);
        const unitsLostIds = unitsLost.map(unit => unit.id);
        function filterUnitsByLost(arr) {
            return arr.filter(unit => !unitsLostIds.includes(unit.id));
        }
        units.pikemans = filterUnitsByLost(units.pikemans);
        units.archers = filterUnitsByLost(units.archers);
        units.knights = filterUnitsByLost(units.knights);
        return unitsLost;
    }
    static processResult(battleResult) {
        if (battleResult.winner && battleResult.loser) {
            BattleField.addGold(battleResult);
            BattleField.removeUnits(battleResult.loser.units, battleResult.unitsLost);
            ArmyStatistics.setArmyStrength(battleResult.loser);
        }
    }
}
exports.BattleField = BattleField;
