import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen111660Navigator from '../features/CopyOfBlankScreen111660/navigator';
import BlankScreen111657Navigator from '../features/BlankScreen111657/navigator';
import BlankScreen011656Navigator from '../features/BlankScreen011656/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen111660: { screen: CopyOfBlankScreen111660Navigator },
BlankScreen111657: { screen: BlankScreen111657Navigator },
BlankScreen011656: { screen: BlankScreen011656Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
