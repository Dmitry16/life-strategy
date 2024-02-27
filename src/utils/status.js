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
