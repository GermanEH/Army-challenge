"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unitsMap = exports.unitGroup = exports.strengthMap = exports.trainingMap = exports.trainingBenefits = exports.trainingCosts = void 0;
exports.trainingCosts = {
    strength: {
        pikeman: 10,
        archer: 20,
        knight: 30,
    },
    type: {
        pikeman: 30,
        archer: 40,
        knight: null
    }
};
exports.trainingBenefits = {
    strength: {
        pikeman: 3,
        archer: 7,
        knight: 10,
    },
    type: {
        pikeman: "archer",
        archer: "knight"
    }
};
exports.trainingMap = {
    strength: (unit, benefit) => unit.strength += benefit,
    type: (unit, benefit) => unit.type = benefit
};
exports.strengthMap = {
    pikeman: 5,
    archer: 10,
    knight: 20,
};
exports.unitGroup = ["pikeman", "archer", "knight"];
exports.unitsMap = {
    chinese: { pikemans: 2, archers: 25, knights: 2 },
    bizantine: { pikemans: 10, archers: 10, knights: 10 },
    english: { pikemans: 2, archers: 10, knights: 15 },
};
