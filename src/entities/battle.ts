import type { IArmy,IBattleResult } from '../types/index'
import { BattleField } from '../services/battleField';
import { BattleRegistry } from '../services/battlesRegistry';

//Es necesario persistir estado interno de la batalla para ser consultados en el historial de batalla de cada ejército.
//Por eso lo creamos como una clase a ser instanciada en vez de una clase con métodos static.
export class Battle {
    id:string=''
    readonly attacker;
    readonly defender;
    battleResult:IBattleResult = {
        winner:null,
        loser:null,
        goldAwarded:null,
        unitsLost:null
    }

    constructor(attacker:IArmy, defender:IArmy){
        
        this.attacker=attacker;
        this.defender=defender;
        
        BattleField.determineWinner(this)
        BattleField.processResult(this.battleResult)
        BattleRegistry.registryBattle(this,[attacker.id,defender.id])

    }

}