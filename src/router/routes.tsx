import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import * as routePage from '../pages';
import * as routePath from './paths';
import {useAppSelector} from 'src/store/hooks';
import {selectStatus, selectUserToken} from 'src/store/app/appSlice';
import LoadingScreen from 'src/components/common/loading/loadingScreen';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';

const Stack = createNativeStackNavigator();
const RouteContainer = () => {
  const userToken = useAppSelector(selectUserToken);
  const status = useAppSelector(selectStatus);

  if (status === 'loading') {
    return <LoadingScreen />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Private">
        {userToken === null ? (
          <Stack.Screen
            name="Public"
            component={PublicRoutes}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="Private"
            component={PrivateRoutes}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouteContainer;
