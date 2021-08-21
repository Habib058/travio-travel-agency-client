import React from 'react';
import './Charts.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [
    {
      name: 'Jan',
      activeUser: 4000,
     
    },
    {
      name: 'Feb',
      activeUser: 3000,
     
    },
    {
      name: 'Mar',
      activeUser: 2000,
      
    },
    {
      name: 'Apr',
      activeUser: 2780,
      
    },
    {
      name: 'May',
      activeUser: 1890,
      
    },
    {
      name: 'Jun',
      activeUser: 2390,
     
    },
    {
      name: 'July',
      activeUser: 3490,
      
    },
    {
        name: 'Aug',
        activeUser: 4490,
        
      },
      {
        name: 'Sept',
        activeUser: 2490,
        
      },
      {
        name: 'Oct',
        activeUser: 5490,
        
      },
      {
        name: 'Nov',
        activeUser: 4490,
        
      },
      {
        name: 'Dec',
        activeUser: 8490,
        
      },
  ];

const Charts = () => {
    return (
        <div className='charts'>
            <h3 className="chartTitle">Sales Analytics</h3>
            <ResponsiveContainer width='100%' aspect = {4 / 1}>
                <LineChart
                 data={data}
                 margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}>
                      <XAxis dataKey='name' stroke='#5550bd'></XAxis>
                      <YAxis/>
                      <Line dataKey='activeUser' stroke='#5550bd' />
                      <Tooltip/>
                      <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5'/>

                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Charts;