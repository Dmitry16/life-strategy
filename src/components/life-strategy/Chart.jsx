import React, { useContext } from 'react';
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
import { LifeStrategyContext } from '../../context';

const Chart = () => {
    const { state } = useContext(LifeStrategyContext);
    
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

    console.log('Chart::state:chartData::', chartData);

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
            <XAxis type="number" dataKey="satisfaction" range={[0, 900]} name="satisfaction" unit="">
                <Label value="satisfaction" offset={0} position="insideBottom" />
            </XAxis>
            <YAxis type="number" dataKey="importance" range={[0, 900]} name="importance" unit="">
                <Label value="importance" angle={-90} position="insideLeft" />
            </YAxis>
            <ZAxis type="number" dataKey="timeSpent" range={[0, 900]} name="time spent" unit="h" />
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
