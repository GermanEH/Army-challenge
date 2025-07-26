import type { Civilization, IArmy } from '../types/index'
import { ArmiesRegistry } from '../services/armiesRegistry';
import { ArmyStatistics } from '../services/armyStatistics';
import { TrainingCamp } from '../services/trainingCamp';

export class Castle {

    static createArmy(civilizationType:Civilization, army: IArmy){
        ArmiesRegistry.registryArmy(army)
        TrainingCamp.createUnits(civilizationType,army)
        ArmyStatistics.setArmyStrength(army);
        return "Ejército creado exitosamente"
    }

}
