"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArmiesRegistry = void 0;
//Registry pattern
//Con este registro podemos registrar por id a cada ejército y así poder recuperarlo para que le pague los entrenamientos a sus unidades,
//sin generar acoplamiento con la unidad que se va a entrenar
class ArmiesRegistry {
    static registryArmy(army) {
        ArmiesRegistry.armies.set(army.getId(), army);
    }
    static getArmy(armyId) {
        return ArmiesRegistry.armies.get(armyId);
    }
}
exports.ArmiesRegistry = ArmiesRegistry;
ArmiesRegistry.armies = new Map();
