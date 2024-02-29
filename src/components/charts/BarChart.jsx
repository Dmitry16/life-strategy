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
    Rectangle,
} from 'recharts';
import { LifeStrategyContext } from '../../context';

const BarChart = React.memo(() => {
    const { state, setState } = useContext(LifeStrategyContext);

    const calculateBarFill = points => {
        if (!points) return 'grey';

        if (points === 25) {
            return 'red';
        } else if (points === 50) {
            return 'orange';
        } else if (points === 75) {
            return 'green';
        }
    };

    const chartData = Object.values(state.areasData).map(value => ({
        name: value.name,
        points: value.points,
        fill: calculateBarFill(value.points),
    })).flat();

    // console.log('BarChart::chartData:::', chartData);

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

    const areasMap = new Map([
        ['Relationships', 10],
        ['Body, Mind and Spirituality', 20],
        ['Community and Social Life', 30],
        ['Job, learning and finances', 40],
        ['Interests, hobbies and entertainment', 50],
        ['Personal care', 60],
    ]);

    const handleClick = e => {
        const updatedState = {
            ...state,
            selectedArea: areasMap.get(e.name),
        };
        setState(updatedState);
        localStorage.setItem('state', JSON.stringify(updatedState));
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
                // layout='vertical'
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                {/* <Legend /> */}
                <Bar
                    dataKey="points"
                    activeBar={<Rectangle stroke="blue"/>}
                    onClick={handleClick}
                />
            </Chart>
        </ResponsiveContainer>
    );
});

export default BarChart;
