from typing import Literal, TypedDict, Union
from .army import Unit_type

Training_type = Literal['strength', 'type']

class UnitStrengthTrainingCost(TypedDict):
    pikeman: int
    archer: int
    knight: int

class UnitStrengthTrainingBenefit(TypedDict):
    pikeman: int
    archer: int
    knight: int

class UnitTransformationCost(TypedDict):
    pikeman: int
    archer: int
    knight: None

class UnitTransformationResult(TypedDict):
    pikeman: Unit_type
    archer: Unit_type

Training_costs = TypedDict('TrainingCosts', {
    'strength': UnitStrengthTrainingCost,
    'type': UnitTransformationCost,
})

Training_benefits = TypedDict('TrainingBenefits', {
    'strength': UnitStrengthTrainingBenefit,
    'type': UnitTransformationResult,
})

Training_benefit = Union[int, Unit_type]
