TrainingType = Literal['strength', 'type']

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
    pikeman: IUnitType
    archer: IUnitType

TrainingCosts = TypedDict('TrainingCosts', {
    'strength': UnitStrengthTrainingCost,
    'type': UnitTransformationCost,
})

TrainingBenefits = TypedDict('TrainingBenefits', {
    'strength': UnitStrengthTrainingBenefit,
    'type': UnitTransformationResult,
})

TrainingBenefit = Union[int, IUnitType]
