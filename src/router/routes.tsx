import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import * as routePage from '../pages';
import * as routePath from './paths';
import {useAppSelector} from 'src/store/hooks';
import {selectStatus, selectUserToken} from 'src/store/app/appSlice';
import LoadingScreen from 'src/components/common/loading/loadingScreen';

const Stack = createNativeStackNavigator();
const RouteContainer = () => {
  const userToken = useAppSelector(selectUserToken);
  const status = useAppSelector(selectStatus);

  if (status === 'loading') {
    return <LoadingScreen />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={routePath.APP_HOME}>
        {userToken === null ? (
          <Stack.Group>
            <Stack.Screen
              name={routePath.APP_LOGIN}
              component={routePage.Login}
            />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen
              name={routePath.APP_HOME}
              component={routePage.Home}
            />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouteContainer;
