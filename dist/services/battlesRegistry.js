"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BattleRegistry = void 0;
const { ArmiesRegistry } = require('../services/armiesRegistry');
//Registry pattern
//Con este registro podemos vincular cada instancia de batalla a los historiales de sus participantes y así poder recuperarla para su 
// consulta, sin generar acoplamiento de los detalles de cada batalla con la clase Army.
class BattleRegistry {
    static registryBattle(battle, contendersIds) {
        const contenders = contendersIds.map((contenderId) => ArmiesRegistry.getArmy(contenderId));
        battle.id = Math.random().toString();
        contenders.map((contender) => {
            contender?.historyBattle.push(battle.id);
            this.battles.set(battle.id, contender.id);
        });
    }
    static getBattle(battleId, armyId) {
        const army = ArmiesRegistry.getArmy(armyId);
        if (army?.historyBattle.includes(battleId)) {
            return this.battles.get(battleId);
        }
    }
}
exports.BattleRegistry = BattleRegistry;
BattleRegistry.battles = new Map();
