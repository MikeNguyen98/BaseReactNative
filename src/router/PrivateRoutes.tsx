import {useFocusEffect} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {signout} from 'src/store/app/appSlice';
import {useAppDispatch} from 'src/store/hooks';
import {tokenStorage} from 'src/utils/local.storage';
import * as routePage from '../pages';
import * as routePath from './paths';
const PrivateStack = createNativeStackNavigator();
const PrivateRoutes = () => {
  const dispatch = useAppDispatch();
  useFocusEffect(() => {
    try {
      const token = tokenStorage({});
      if (!token) {
        dispatch(signout());
      }
    } catch (error) {}
  });
  return (
    <PrivateStack.Navigator>
      <PrivateStack.Screen
        name={routePath.APP_HOME}
        component={routePage.Home}
      />
      {/* other screens */}
    </PrivateStack.Navigator>
  );
};

export default PrivateRoutes;
