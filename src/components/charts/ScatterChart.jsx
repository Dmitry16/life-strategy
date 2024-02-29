import React, { useContext } from 'react';
import {
    ScatterChart as Chart,
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

const ScatterChart = React.memo(() => {
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
        <ResponsiveContainer width="100%" height={500}>
            <Chart
                margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
                }}
            >
            <CartesianGrid />
            <XAxis type="number" dataKey="satisfaction" range={[0, 900]} name="satisfaction" unit="">
                <Label value="satisfaction" offset={0} position="insideBottom" />
            </XAxis>
            <YAxis type="number" dataKey="importance" range={[0, 900]} name="importance" unit="">
                <Label value="importance" angle={-90} position="insideLeft" />
            </YAxis>
            <ZAxis type="number" dataKey="timeSpent" range={[0, 900]} name="time spent" unit="" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} content={<CustomTooltip />}/>
            {/* <Legend /> */}
            <Scatter name="Life Unit" data={chartData} fill="#8884d8" onClick={handleClick}>
                {/* <LabelList position="top" dataKey="name" /> */}
            </Scatter>
          </Chart>
        </ResponsiveContainer>
    );
});

export default ScatterChart;
