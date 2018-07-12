import { StackNavigator } from "react-navigation";
import SplashScreen from "../screens/splash.screen";
const stackNavigatorOptions = {
  headerMode: "none",
  cardStyle: {
    backgroundColor: "white"
  }
};

export const AppNavigator = StackNavigator(
  {
    Splash: { screen: SplashScreen },
  },
  stackNavigatorOptions
);
