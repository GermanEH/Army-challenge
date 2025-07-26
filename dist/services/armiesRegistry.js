"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArmiesRegistry = void 0;
//Registry pattern
//Con este registro podemos registrar por id a cada ejército y así poder recuperarlo para que le pague los entrenamientos a sus unidades,
//sin generar acoplamiento con la unidad que se va a entrenar
class ArmiesRegistry {
    static registryArmy(army) {
        army.id = Math.random().toString();
        this.armies.set(army.id, army);
    }
    static getArmy(armyId) {
        return this.armies.get(armyId);
    }
}
exports.ArmiesRegistry = ArmiesRegistry;
ArmiesRegistry.armies = new Map();
