import * as React from 'react';
import {
    ScatterChart,
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

const relations = {
    significantOther: {
        satisfaction: 30,
        importance: 60,
        timeSpent: 21,
    },
    family: {
        satisfaction: 50,
        importance: 90,
        timeSpent: 70,
    },
    friends: {
        satisfaction: 50,
        importance: 70,
        timeSpent: 7,
    },
}

const chartData = Object.entries(relations).map(([name, { satisfaction, importance, timeSpent }]) => ({
    name,
    satisfaction,
    importance,
    timeSpent,
}));

console.log('chartData::::', chartData);

// const rel = [
//     { x: 100, y: 200, z: 10 },
//     { x: 120, y: 100, z: 260 },
//     { x: 170, y: 300, z: 400 },
//     { x: 140, y: 250, z: 280 },
//     { x: 700, y: 700, z: 1000 },
//     { x: 110, y: 280, z: 500 },
// ];

const Chart = () => {
    return (
        <ResponsiveContainer width="100%" height={500}>
            <ScatterChart
                margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
                }}
            >
            <CartesianGrid />
            <XAxis type="number" dataKey="satisfaction" range={[0, 100]} name="satisfaction" unit="">
                <Label value="satisfaction" offset={0} position="insideBottom" />
            </XAxis>
            <YAxis type="number" dataKey="importance" range={[0, 100]} name="importance" unit="">
                <Label value="importance" angle={-90} position="insideLeft" />
            </YAxis>
            <ZAxis type="number" dataKey="timeSpent" range={[0, 100]} name="time spent" unit="h" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            {/* <Legend /> */}
            <Scatter name="Life Unit" data={chartData} fill="#8884d8">
                <LabelList position="top" dataKey="name" />
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
    );
};

export default Chart;
