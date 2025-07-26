"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArmyStatistics = void 0;
class ArmyStatistics {
    static setArmyStrength(army) {
        army.armyStrength = this.getUnitsStrength(army.units.pikemans) +
            this.getUnitsStrength(army.units.archers) +
            this.getUnitsStrength(army.units.knights);
    }
    static getUnitsStrength(unit) {
        return unit.reduce((acc, unit) => {
            return acc += unit.strength;
        }, 0);
    }
}
exports.ArmyStatistics = ArmyStatistics;
