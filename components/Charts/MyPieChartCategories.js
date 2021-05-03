import React, { View, useState, useEffect } from 'react';
import { PieChart } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'
//import { progressArray } from './ProgressClothes'


class MyPieChartCategories extends React.PureComponent {

    render() {
        const amountDone=this.props.categoryDone; 
        const amountUndone=5-amountDone;

        const data = [
            {
                key: 1,
                amount: amountUndone,
                svg: { fill: '#edf4fc' }
            },
            {
                key: 2,
                amount: amountDone,
                svg: { fill: '#ffeae2' }
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
                        fontFamily= {'Pompiere_400Regular'}
                        textAnchor={'middle'}
                        alignmentBaseline={'middle'}
                        fontSize={20}
                        stroke={'black'}
                        strokeWidth={0.0}
                    >
                        {data.amount}
                        
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

export default MyPieChartCategories
