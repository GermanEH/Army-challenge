"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Army = void 0;
const castle_1 = require("../services/castle");
const battle_1 = require("./battle");
class Army {
    id = '0';
    units = [];
    historyBattle = [];
    armyStrength = 0;
    gold = 1000;
    constructor(civilizationType) {
        this.id = Math.random().toString();
        castle_1.Castle.createArmy(civilizationType, this);
    }
    getId() {
        return this.id;
    }
    getUnits() {
        return this.units;
    }
    setUnits(units) {
        this.units = [...this.units, ...units];
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
        this.armyStrength = this.getUnitsStrength(this.units);
    }
    getUnitsStrength(unit) {
        return unit.reduce((acc, unit) => {
            return acc += unit.getStrength();
        }, 0);
    }
    loseUnits() {
        const unitsLost = this.units.toSorted((a, b) => a.getStrength() - b.getStrength()).slice(0, 2);
        this.units = this.units.filter(unit => !unitsLost.includes(unit));
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
