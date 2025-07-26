import type { IArmy } from '../types/index'
//Registry pattern
//Con este registro podemos registrar por id a cada ejército y así poder recuperarlo para que le pague los entrenamientos a sus unidades,
//sin generar acoplamiento con la unidad que se va a entrenar
export class ArmiesRegistry {

    private static armies = new Map<string, IArmy>()

    static registryArmy(army:IArmy){
        army.id=Math.random().toString()
        this.armies.set(army.id, army)
    }
    static getArmy(armyId:string){
        return this.armies.get(armyId)
    }

}
