class Army:

    id:str = '0'
    units: Units = {
        pikemans: [],
        archers: [],
        knights: [],
    }
    historyBattle:string[] = []
    armyStrength:int = 0
    gold=1000

    def __init__(civilizationType:Civilization)
        Castle.createArmy(civilizationType, this)

    def attack(enemy:Army):IBattle
        return new Battle(self,enemy)


    def pay_unit_training(amount:int)
        if(self.gold >= amount)
            self.gold-=amount
            return "Successfull payment"
        else 
            return f"Not enough money. It cost $ ${amount} and the army has $ ${self.gold}"
        
    

