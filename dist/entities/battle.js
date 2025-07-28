"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Battle = void 0;
const battleField_1 = require("../services/battleField");
const battlesRegistry_1 = require("../services/battlesRegistry");
//Es necesario persistir estado interno de la batalla para ser consultados en el historial de batalla de cada ejército.
//Por eso lo creamos como una clase a ser instanciada en vez de una clase pública con métodos static.
class Battle {
    constructor(attacker, defender) {
        this.id = '';
        this.battleResult = {
            winner: null,
            loser: null,
            goldAwarded: null,
            unitsLost: null
        };
        this.attacker = attacker;
        this.defender = defender;
        battleField_1.BattleField.determineWinner(this);
        battleField_1.BattleField.processResult(this.battleResult);
        battlesRegistry_1.BattleRegistry.registryBattle(this, [attacker.getId(), defender.getId()]);
    }
}
exports.Battle = Battle;
