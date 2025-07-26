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
        castle_1.Castle.createArmy(civilizationType, this);
    }
    attack(enemy) {
        return new battle_1.Battle(this, enemy);
    }
    payUnitTraining(amount) {
        if (this.gold >= amount) {
            this.gold -= amount;
            return "Successfull payment";
        }
        else {
            return `Not enough money. It cost $ ${amount} and the army has $ ${this.gold}`;
        }
    }
}
exports.Army = Army;
