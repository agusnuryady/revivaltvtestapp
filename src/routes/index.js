import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NewsDetailPage from '../containers/NewsDetailPage'
import NewsListPage from '../containers/NewsListPage'

const { Navigator, Screen } = createNativeStackNavigator();

const StackNavigator = () => (
    <Navigator 
        screenOptions={{
            headerShown: false
        }}
    >
        <Screen name="NewsList" component={NewsListPage} />
        <Screen name="NewsDetail" component={NewsDetailPage} />
    </Navigator>
)

const App = () => {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )
}

export default App;