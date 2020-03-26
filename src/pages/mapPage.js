import React, { Component } from 'react'
import { ScrollView, StatusBar, Dimensions, Text } from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import { LineChart } from 'react-native-chart-kit'
import { data } from './../components/data'
import 'babel-polyfill'

const chartConfigs = [
    {
        backgroundColor: '#000000',
        backgroundGradientFrom: '#1E2923',
        backgroundGradientTo: '#08130D',
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        style: {
            borderRadius: 16
        }
    },
]

export default class App extends Component {
   
    render() {
        const width = Dimensions.get('window').width
        const height = 220
        return (
            <ScrollableTabView renderTabBar={this.renderTabBar}>
                {chartConfigs.map(chartConfig => {
                    const labelStyle = {
                        color: chartConfig.color(),
                        marginVertical: 10,
                        textAlign: 'center',
                        fontSize: 16
                    }
                    const graphStyle = {
                        marginVertical: 8,
                        ...chartConfig.style
                    }
                    return (
                        <ScrollView
                            style={{
                                backgroundColor: chartConfig.backgroundColor
                            }}
                        >
                            <Text style={labelStyle}>Line Chart</Text>
                            <LineChart
                                data={data}
                                width={width}
                                height={height}
                                chartConfig={chartConfig}
                                style={graphStyle}
                            />
                        </ScrollView>
                    )
                })}
            </ScrollableTabView>
        )
    }
}