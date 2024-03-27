export const LIFE_UNIT_STATUS = {
    STRONG: 'strong',
    NEUTRAL: 'neutral',
    WEAK: 'weak',
};

export const calculateAndAddStatusToLifeUnit = state => {
    const updatedState = {...state};

    // console.log('STATUS::calculateAndAddStatusToLifeUnit::state::11:', state);

    Object.entries(updatedState).forEach(([key, value]) => {
        if (key === 'showRecommendation' || key === 'showAIRecommendation'
            || key === 'selectedArea' || key === 'areasData') return;

        Object.entries(value).forEach(([unit, { importance, satisfaction }]) => {
            if (importance/satisfaction <= 1 || (importance/satisfaction > 1 && importance/satisfaction <= 1.25)) {
                    updatedState[key] = {
                        ...updatedState[key],
                        [unit]: {
                            ...updatedState[key][unit],
                            status: LIFE_UNIT_STATUS.STRONG,
                        },
                    };
            } else if (importance/satisfaction > 1.25 && importance/satisfaction <= 1.5) {
                updatedState[key] = {
                    ...updatedState[key],
                    [unit]: {
                        ...updatedState[key][unit],
                        status: LIFE_UNIT_STATUS.NEUTRAL,
                    },
                };
            } else {
                updatedState[key] = {
                    ...updatedState[key],
                    [unit]: {
                        ...updatedState[key][unit],
                        status: LIFE_UNIT_STATUS.WEAK,
                    },
                };
            }
        });
    });

        // console.log('STATUS::calculateAndAddStatusToLifeUnit::updatedState::22:', updatedState);

    return updatedState;
};

export const mapUnitStatusToNumber = (unitStatus) => {
    switch (unitStatus) {
        case 'weak':
            return 1;
        case 'neutral':
            return 2;
        case 'strong':
            return 3;
        default:
            return 0;
    }
};

export const calculateAreaStatus = (area) => {
    const units = Object.entries(area).filter(([key, value]) => key !== 'name').map(([key, value]) => value);
    const unitsStatus = units.map(unit => unit.status);
    const unitsStatusNumbers = unitsStatus.map(unitStatus => mapUnitStatusToNumber(unitStatus));
    const sum = unitsStatusNumbers.reduce((acc, cur) => acc + cur, 0);
    const average = sum / unitsStatusNumbers.length;
    if (average < 2) {
        return ['weak', 25];
    } else if (average === 2) {
        return ['neutral', 50];
    } else {
        return ['strong', 75];
    }
};

export const mapAreaStatusToAreasData = (state, area) => {
    const updatedState = {...state};
    const [areaStatus, points] = calculateAreaStatus(state[area]);

    updatedState.areasData = {
        ...updatedState.areasData,
        [area]: {
            ...updatedState.areasData[area],
            status: areaStatus,
            points,
        },
    };
    return updatedState;
};

export const calculateAndAddStatusToLifeUnitsAndAreas = state => {
    let updatedState = calculateAndAddStatusToLifeUnit(state);
    Object.keys(updatedState).forEach(area => {
        if (area === 'selectedArea' || area === 'areasData' || area === 'showAIRecommendation' || area === 'showRecommendation') {
            return;
        }
        updatedState = mapAreaStatusToAreasData(updatedState, area);
    });
    return updatedState;
};

    //   const updatedStateWithLifeUnitStatus = calculateAndAddStatusToLifeUnit(state);
    //   const updatedStateWithAreaStatus = Object.entries(updatedStateWithLifeUnitStatus).reduce((acc, [key, value]) => {

    //     if (key === 'selectedArea' || key === 'areasData' || key === 'showAIRecommendation' || key === 'showRecommendation') {
    //       return acc;
    //     };

    //     const [areaStatus, points] = calculateAreaStatus(value);

    //     acc.areasData = {
    //       ...acc.areasData,
    //       [key]: {
    //         ...acc.areasData[key],
    //         status: areaStatus,
    //         points,
    //       },
    //     };

    //     return acc;
    //   }, updatedStateWithLifeUnitStatus);
