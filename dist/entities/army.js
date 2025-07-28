"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Army = void 0;
const castle_1 = require("../services/castle");
const battle_1 = require("./battle");
class Army {
    constructor(civilizationType) {
        this.id = '0';
        this.units = {
            pikemans: [],
            archers: [],
            knights: [],
        };
        this.historyBattle = [];
        this.armyStrength = 0;
        this.gold = 1000;
        this.id = Math.random().toString();
        castle_1.Castle.createArmy(civilizationType, this);
    }
    getId() {
        return this.id;
    }
    getUnits() {
        return this.units;
    }
    setUnits(unitType, units) {
        this.units[`${unitType}s`] = units;
    }
    attack(enemy) {
        return new battle_1.Battle(this, enemy);
    }
    payUnitTraining(amount) {
        if (this.gold >= amount) {
            this.gold -= amount;
            return `Successfull payment. Remaining gold: ${this.gold}`;
        }
        else {
            return `Not enough money. It cost $ ${amount} and the army has $ ${this.gold}`;
        }
    }
    getArmyStrength() {
        return this.armyStrength;
    }
    setArmyStrength() {
        this.armyStrength = this.getUnitsStrength(this.units.pikemans) + this.getUnitsStrength(this.units.archers) + this.getUnitsStrength(this.units.knights);
    }
    getUnitsStrength(unit) {
        return unit.reduce((acc, unit) => {
            return acc += unit.getStrength();
        }, 0);
    }
    loseUnits() {
        const sortedUnits = [...this.units.pikemans, ...this.units.archers, ...this.units.knights].sort((a, b) => a.getStrength() - b.getStrength());
        const unitsLost = sortedUnits.slice(0, 2);
        const unitsLostIds = unitsLost.map(unit => unit.getId());
        function filterUnitsByLost(arr) {
            return arr.filter(unit => !unitsLostIds.includes(unit.getId()));
        }
        this.units.pikemans = filterUnitsByLost(this.units.pikemans);
        this.units.archers = filterUnitsByLost(this.units.archers);
        this.units.knights = filterUnitsByLost(this.units.knights);
        return unitsLost;
    }
    earnGold(gold) {
        this.gold += gold;
    }
    getGold() {
        return this.gold;
    }
    hasGold() {
        return this.gold > 0;
    }
    addBattle(battleId) {
        this.historyBattle.push(battleId);
    }
    hadBattle(battleId) {
        return this.historyBattle.includes(battleId);
    }
}
exports.Army = Army;
