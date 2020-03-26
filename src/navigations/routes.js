import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import leadersPage from './../pages/leadersPage';
import prizes from './../pages/prizes';
import bottomRoutes from './bottomRoutes'; 
import splashScreen from '../pages/splashScreen';
import login from '../pages/login';

export default createAppContainer(createStackNavigator({
    splashScreen,
    login,
    bottomRoutes,
    leadersPage,
    prizes,   
}, 
{
    headerMode: 'null',
}));