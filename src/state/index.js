export const initialState = {
    selectedArea: '50',
    showRecommendation: false,
    showAIRecommendation: false,
    '10': {
        significantOther: {
            checked: true,
            satisfaction: 20,
            importance: 60,
            timeSpent: 10,
        },
        family: {
            checked: false,
            satisfaction: 30,
            importance: 80,
            timeSpent: 10,
        },
        friendship: {
            checked: false,
            satisfaction: 30,
            importance: 30,
            timeSpent: 10,
        },
    },
    '20': {
        phisicalHealth: {
            checked: true,
            satisfaction: 80,
            importance: 100,
            timeSpent: 10,
        },
        mentalHealth: {
            checked: false,
            satisfaction: 70,
            importance: 90,
            timeSpent: 10,
        },
        spirit: {
            checked: false,
            satisfaction: 50,
            importance: 50,
            timeSpent: 10,
        },
    },
    '30': {
        community: {
            checked: true,
            satisfaction: 30,
            importance: 50,
            timeSpent: 10,
        },
        socialLife: {
            checked: false,
            satisfaction: 20,
            importance: 30,
            timeSpent: 10,
        },
    },
    '40': {
        job: {
            checked: false,
            satisfaction: 70,
            importance: 90,
            timeSpent: 60,
        },
        learning: {
            checked: false,
            satisfaction: 80,
            importance: 80,
            timeSpent: 10,
        },
        finances: {
            checked: true,
            satisfaction: 60,
            importance: 90,
            timeSpent: 10,
        },
    },
    '50': {
        interests: {
            checked: true,
            satisfaction: 70,
            importance: 80,
            timeSpent: 10,
        },
        hobbies: {
            checked: false,
            satisfaction: 50,
            importance: 60,
            timeSpent: 20,
        },
        fun: {
            checked: false,
            satisfaction: 40,
            importance: 70,
            timeSpent: 20,
        },
    },
    '60': {
        physNeeds: {
            checked: true,
            satisfaction: 90,
            importance: 90,
            timeSpent: 40,
        },
        dailyActivities: {
            checked: false,
            satisfaction: 80,
            importance: 80,
            timeSpent: 30,
        },
    },
};
