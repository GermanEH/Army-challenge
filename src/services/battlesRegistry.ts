import type { IArmy, IBattle } from '../types/index'
const {ArmiesRegistry}=require('../services/armiesRegistry')
//Registry pattern
//Con este registro podemos vincular cada instancia de batalla a los historiales de sus participantes y así poder recuperarla para su 
// consulta, sin generar acoplamiento de los detalles de cada batalla con la clase Army.
export class BattleRegistry {

    private static battles = new Map<string, string>()

    static registryBattle(battle:IBattle, contendersIds:string[]){
        const contenders = contendersIds.map((contenderId:string) => ArmiesRegistry.getArmy(contenderId)) 
        battle.id=Math.random().toString()
        contenders.map((contender:IArmy)=> {
            contender?.historyBattle.push(battle.id)
            this.battles.set(battle.id, contender.id)
        })
        
    }
    static getBattle(battleId:string, armyId:string){
        const army = ArmiesRegistry.getArmy(armyId)
        if(army?.historyBattle.includes(battleId)){
            return this.battles.get(battleId)
        }
    }

}
