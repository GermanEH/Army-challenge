"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BattleRegistry = void 0;
const armiesRegistry_1 = require("../services/armiesRegistry");
//Registry pattern
// Con este registro podemos vincular cada instancia de batalla a los historiales de sus participantes y así poder recuperarla para su 
// consulta, sin generar acoplamiento de los detalles de cada batalla con la clase Army. Además, se centraliza la gestión de la 
// información relativa a las batallas, y se protege su acceso sólo a los Armys cuyos historiales incluyan el battleId en esta línea:
// if(army?.historyBattle.includes(battleId))
class BattleRegistry {
    static battles = new Map();
    static registryBattle(battle, contendersIds) {
        const contenders = contendersIds.map((contenderId) => armiesRegistry_1.ArmiesRegistry.getArmy(contenderId));
        battle.id = Math.random().toString();
        contenders.map((contender) => {
            contender?.addBattle(battle.id);
            this.battles.set(battle.id, contender.getId());
        });
    }
    static getBattle(battleId, armyId) {
        const army = armiesRegistry_1.ArmiesRegistry.getArmy(armyId);
        if (army?.hadBattle(battleId)) {
            return this.battles.get(battleId);
        }
    }
}
exports.BattleRegistry = BattleRegistry;
