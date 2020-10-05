import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen211680Navigator from '../features/BlankScreen211680/navigator';
import BlankScreen111679Navigator from '../features/BlankScreen111679/navigator';
import BlankScreen011678Navigator from '../features/BlankScreen011678/navigator';
import CopyOfBlankScreen111660Navigator from '../features/CopyOfBlankScreen111660/navigator';
import BlankScreen111657Navigator from '../features/BlankScreen111657/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen211680: { screen: BlankScreen211680Navigator },
BlankScreen111679: { screen: BlankScreen111679Navigator },
BlankScreen011678: { screen: BlankScreen011678Navigator },
CopyOfBlankScreen111660: { screen: CopyOfBlankScreen111660Navigator },
BlankScreen111657: { screen: BlankScreen111657Navigator },

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
