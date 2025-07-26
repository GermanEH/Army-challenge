class BattleResult(TypedDict):
    winner: Optional[IArmy]
    loser: Optional[IArmy]
    goldAwarded: Optional[int]
    unitsLost: Optional[List[IUnit]]

class Battle(Protocol):
    id: str
    attacker: Optional[IArmy]
    defender: Optional[IArmy]
    battleResult: IBattleResult