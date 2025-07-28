import type { Army, Battle } from '../types/index'
import {ArmiesRegistry} from '../services/armiesRegistry'
//Registry pattern
// Con este registro podemos vincular cada instancia de batalla a los historiales de sus participantes y así poder recuperarla para su 
// consulta, sin generar acoplamiento de los detalles de cada batalla con la clase Army. Además, se centraliza la gestión de la 
// información relativa a las batallas, y se protege su acceso sólo a los Armys cuyos historiales incluyan el battleId en esta línea:
// if(army?.historyBattle.includes(battleId))
export class BattleRegistry {

    private static battles = new Map<string, string>()

    static registryBattle(battle:Battle, contendersIds:string[]){
        const contenders = contendersIds.map((contenderId:string) => ArmiesRegistry.getArmy(contenderId)) as Army[]
        battle.id=Math.random().toString()
        contenders.map((contender:Army)=> {
            contender?.addBattle(battle.id)
            this.battles.set(battle.id, contender.getId())
        })
        
    }
    static getBattle(battleId:string, armyId:string){
        const army = ArmiesRegistry.getArmy(armyId)
        if(army?.hadBattle(battleId)){
            return this.battles.get(battleId)
        }
    }

}
