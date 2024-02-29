import {useFocusEffect} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as routePage from '../pages';
import * as routePath from './paths';
import {tokenStorage} from 'src/utils/local.storage';
import {useAppDispatch} from 'src/store/hooks';
import {setToken} from 'src/store/app/appSlice';
const PublicStack = createNativeStackNavigator();
const PublicRoutes = () => {
  const dispatch = useAppDispatch();
  useFocusEffect(() => {
    try {
      const token = tokenStorage({});
      if (token) {
        dispatch(setToken(token));
      }
    } catch (error) {}
  });

  return (
    <PublicStack.Navigator>
      <PublicStack.Screen
        name={routePath.APP_LOGIN}
        component={routePage.Login}
      />
      {/* other screens */}
    </PublicStack.Navigator>
  );
};

export default PublicRoutes;
