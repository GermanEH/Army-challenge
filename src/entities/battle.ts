import type { Army,BattleResult } from '../types/index'
import { BattleField } from '../services/battleField';
import { BattleRegistry } from '../services/battlesRegistry';

//Es necesario persistir estado interno de la batalla para ser consultados en el historial de batalla de cada ejército.
//Por eso lo creamos como una clase a ser instanciada en vez de una clase pública con métodos static.
export class Battle {
    id:string=''
    readonly attacker;
    readonly defender;
    battleResult:BattleResult = {
        winner:null,
        loser:null,
        goldAwarded:null,
        unitsLost:null
    }

    constructor(attacker:Army, defender:Army){
        
        this.attacker=attacker;
        this.defender=defender;
        
        BattleField.determineWinner(this)
        BattleField.processResult(this.battleResult)
        BattleRegistry.registryBattle(this,[attacker.getId(),defender.getId()])

    }

}