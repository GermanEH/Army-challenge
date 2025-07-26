from .type import IUnit, Training_costs, Training_type, Training_benefits
from typing import TypedDict, Literal, Dict, Callable, Union, List

training_costs:Training_costs = {
    "strength":{
        "pikeman":10,
        "archer":20,
        "knight":30,
    },
    "type":{
        "pikeman":30,
        "archer":40,
        "knight":None
    }
}

training_benefits:Training_benefits = {
    "strength":{
        "pikeman":3,
        "archer":7,
        "knight":10,
    },
    "type":{
        "pikeman":"archer",
        "archer":"knight"
    }
}

training_map: Dict[str, Callable[[IUnit, Training_benefit], None]] = {
    "strength": lambda unit, benefit: setattr(unit, 'strength', unit.strength + benefit),
    "type": lambda unit, benefit: setattr(unit, 'type', benefit)
}
