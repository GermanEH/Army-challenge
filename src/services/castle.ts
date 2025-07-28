import type { Civilization, Army } from '../types/index'
import { ArmiesRegistry } from '../services/armiesRegistry';
import { TrainingCamp } from '../services/trainingCamp';

//Clase helper que sólo agrupa lógica.
export class Castle {

    static createArmy(civilizationType:Civilization, army: Army):string{
        try {
            ArmiesRegistry.registryArmy(army)
            TrainingCamp.createUnits(civilizationType,army)
            army.setArmyStrength();
            return "Army created successfully"
        } catch (error) {
            return `Error creating army: ${error}`
        }
    }

}
