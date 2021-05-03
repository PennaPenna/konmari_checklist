import React, { View, useState, useEffect } from 'react';
import { PieChart } from 'react-native-svg-charts';
import { Text } from 'react-native-svg';

class MyPieChart extends React.PureComponent {

    render() {
        const amountDone=100*(this.props.progress/this.props.categoryLength).toFixed(2); 
        const amountUndone=100-amountDone;

        const data = [
            {
                key: 1,
                amount: amountUndone,
                label: ' %',
                svg: { fill: '#D1E2F4' }
            },
            {
                key: 2,
                amount: amountDone,
                label: ' %',
                svg: { fill: '#fbd9cb' }
            },
        ]

        const Labels = ({ slices, height, width }) => {
            return slices.map((slice, index) => {
                const { labelCentroid, pieCentroid, data } = slice;
                return (
                    <Text
                        key={index}
                        x={pieCentroid[ 0 ]}
                        y={pieCentroid[ 1 ]}
                        fill={'#034755'}
                        textAnchor={'middle'}
                        alignmentBaseline={'middle'}
                        fontSize={15}
                        stroke={'black'}
                        strokeWidth={0.0}
                    >
                     {data.amount}{data.label}
                        
                    </Text>
                )
            })
        }
        
        return (
            <PieChart
                style={{ height: 230 }}
                valueAccessor={({ item }) => item.amount}
                data={data}
                spacing={0}
                outerRadius={'95%'}
            >
                <Labels/>
            </PieChart>
            
        )
    }

}

export default MyPieChart
