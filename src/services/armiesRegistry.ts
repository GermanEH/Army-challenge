import type { Army } from '../types/index'
//Registry pattern
//Con este registro podemos registrar por id a cada ejército y así poder recuperarlo para que le pague los entrenamientos a sus unidades,
//sin generar acoplamiento con la unidad que se va a entrenar
export class ArmiesRegistry {

    private static armies = new Map<string, Army>()

    static registryArmy(army:Army){
        ArmiesRegistry.armies.set(army.getId(), army)
    }
    static getArmy(armyId:string){
        return ArmiesRegistry.armies.get(armyId)
    }

}
