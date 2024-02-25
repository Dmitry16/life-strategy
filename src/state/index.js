export const initialState = {
    selectedArea: '50',
    showRecommendation: false,
    showAIRecommendation: false,
    areasData: {
        '10': {
            name: 'Relationships',
            status: null,
            description: `Relationships are the cornerstone of our lives. They are the source of our greatest joy 
            and our greatest pain. They are the source of our greatest growth and our greatest stagnation.`,
        },
        '20': {
            name: 'Body, Mind and Spirituality',
            status: null,
            description: `Body, Mind and Spirituality are the foundation of our lives. They are the source of our 
            greatest health and our greatest illness. They are the source of our greatest peace and our greatest 
            turmoil.`,
        },
        '30': {
            name: 'Community and Social Life',
            status: null,
            description: `Community and Social Life are the source of our greatest connection and our greatest 
            disconnection. They are the source of our greatest support and our greatest isolation.`,
        },
        '40': {
            name: 'Job, learning and finances',
            status: null,
            description: `Job, learning and finances are the source of our greatest contribution and our greatest 
            frustration. They are the source of our greatest growth and our greatest stagnation.`,
        },
        '50': {
            name: 'Interests, hobbies and entertainment',
            status: null,
            description: `Interests, hobbies and entertainment are the source of our greatest joy and our greatest 
            boredom. They are the source of our greatest growth and our greatest stagnation.`,
        },
        '60': {
            name: 'Personal care',
            status: null,
            description: `Personal care is the source of our greatest health and our greatest illness. It is the 
            source of our greatest peace and our greatest turmoil.`,
        },
    },
    '10': {
        significantOther: {
            status: null,
            checked: true,
            satisfaction: 20,
            importance: 60,
            timeSpent: 10,
        },
        family: {
            status: null,
            checked: false,
            satisfaction: 30,
            importance: 80,
            timeSpent: 10,
        },
        friendship: {
            status: null,
            checked: false,
            satisfaction: 30,
            importance: 30,
            timeSpent: 10,
        },
    },
    '20': {
        phisicalHealth: {
            status: null,
            checked: true,
            satisfaction: 80,
            importance: 100,
            timeSpent: 10,
        },
        mentalHealth: {
            status: null,
            checked: false,
            satisfaction: 70,
            importance: 90,
            timeSpent: 10,
        },
        spirit: {
            status: null,
            checked: false,
            satisfaction: 50,
            importance: 50,
            timeSpent: 10,
        },
    },
    '30': {
        community: {
            status: null,
            checked: true,
            satisfaction: 30,
            importance: 50,
            timeSpent: 10,
        },
        socialLife: {
            status: null,
            checked: false,
            satisfaction: 20,
            importance: 30,
            timeSpent: 10,
        },
    },
    '40': {
        job: {
            status: null,
            checked: false,
            satisfaction: 70,
            importance: 90,
            timeSpent: 60,
        },
        learning: {
            status: null,
            checked: false,
            satisfaction: 80,
            importance: 80,
            timeSpent: 10,
        },
        finances: {
            status: null,
            checked: true,
            satisfaction: 60,
            importance: 90,
            timeSpent: 10,
        },
    },
    '50': {
        interests: {
            status: null,
            checked: true,
            satisfaction: 70,
            importance: 80,
            timeSpent: 10,
        },
        hobbies: {
            status: null,
            checked: false,
            satisfaction: 50,
            importance: 60,
            timeSpent: 20,
        },
        fun: {
            status: null,
            checked: false,
            satisfaction: 40,
            importance: 70,
            timeSpent: 20,
        },
    },
    '60': {
        physNeeds: {
            status: null,
            checked: true,
            satisfaction: 90,
            importance: 90,
            timeSpent: 40,
        },
        dailyActivities: {
            status: null,
            checked: false,
            satisfaction: 80,
            importance: 80,
            timeSpent: 30,
        },
    },
};
