import React, { useContext } from 'react';
import {
    BarChart as Chart,
    Bar,
    Scatter,
    XAxis,
    YAxis,
    ZAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Label,  
    LabelList,
    ResponsiveContainer,
} from 'recharts';
import { LifeStrategyContext } from '../../context';

const BarChart = React.memo(() => {
    const { state, setState } = useContext(LifeStrategyContext);
    
    const chartData = Object.entries(state).map(([_, value]) => {
        return Object.entries(value).map(([key, value]) => {
            return {
                name: key,
                satisfaction: value.satisfaction,
                importance: value.importance,
                timeSpent: value.timeSpent,
            };
        });
    }).flat();

    console.log('BarChart::chartData:::', chartData);

    // const areasMap = new Map([
    //     ['Relationships', 10],
    //     ['Body, Mind and Spirituality', 20],
    //     ['Community and Social Life', 30],
    //     ['Job, learning and finances', 40],
    //     ['Interests, hobbies and entertainment', 50],
    //     ['Personal care', 60],
    // ]);

    const unitsToAreaMap = new Map(Object.entries(state).map(([key, value]) => {
        return Object.keys(value).map(unit => [unit, key]);
    }).flat());

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const area = unitsToAreaMap.get(payload[0].payload.name);
            const unit = payload[0].payload.name;
            return (
                <div className="custom-tooltip" style={{backgroundColor: 'rgba(250,250,250,0.9)', padding: 5 }}>
                    <div className="label">{`${unit}`}</div>
                    <div className="label">{`importance : ${payload[0].payload.importance}`}</div>
                    <div className="label">{`satisfaction : ${payload[0].payload.satisfaction}`}</div>
                    <div className="label">{`time spent : ${payload[0].payload.timeSpent}`}</div>
                    <div className="label">{`status : ${state[area][unit]['status']}`}</div>
                </div>
            );
        }
        return null;
    };

    const handleClick = e => {
        const area = Object.entries(state).find(([_, value]) => Object.keys(value).includes(e.name))[0];
        const updatedState = {
            ...state,
            [area]: {
                ...state[area],
                [e.name]: {
                    ...state[area][e.name],
                    checked: true,
                },
            },
            selectedArea: area,
        };
        Object.keys(state[area]).filter(key => key !== e.name).forEach(key => {
            updatedState[area][key].checked = false;
        });
        setState(updatedState);
        // localStorage.setItem('state', JSON.stringify(updatedState));
    };

    return (
        <ResponsiveContainer width="100%" height={250}>
            <Chart
                margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
                }}
                data={chartData}
                layout='vertical'
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                {/* <Tooltip /> */}
                {/* <Legend /> */}
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
            </Chart>
        </ResponsiveContainer>
    );
});

export default BarChart;
