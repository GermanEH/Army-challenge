"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unitsByCivilization = exports.unitGroup = exports.strengthMap = exports.createUnitMap = exports.trainingBenefits = exports.trainingCosts = void 0;
// import { Archer, Knight, Pikeman } from '../entities/unit';
const unit_1 = require("../entities/unit");
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
        archer: "knight",
        knight: ""
    }
};
// export const createUnitMap:{[K in UnitType]: (armyId: string) => Unit<K>} = {
//     pikeman:(armyId) => {return new Pikeman(armyId)},
//     archer:(armyId) => {return new Archer(armyId)},
//     knight:(armyId) => {return new Knight(armyId)}
// }
exports.createUnitMap = {
    pikeman: (armyId) => { return new unit_1.Unit('pikeman', armyId); },
    archer: (armyId) => { return new unit_1.Unit('archer', armyId); },
    knight: (armyId) => { return new unit_1.Unit('knight', armyId); }
};
exports.strengthMap = {
    pikeman: 5,
    archer: 10,
    knight: 20,
};
exports.unitGroup = ["pikeman", "archer", "knight"];
exports.unitsByCivilization = {
    chinese: { pikemans: 2, archers: 25, knights: 2 },
    bizantine: { pikemans: 10, archers: 10, knights: 10 },
    english: { pikemans: 2, archers: 10, knights: 15 },
};
