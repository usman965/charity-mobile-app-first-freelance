import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Text, View } from "react-native"
import Login from "../screens/login"
import Dashboard from "../screens/dashboard"
import { ROUTES_NAMES } from "../utils/constants"
import SignUp from "../screens/sign-up"
import VerifyEmail from "../screens/verify-email"
import MyAbsents from "../screens/my-absents"
import MyLateComings from "../screens/my-late-comings"
import hrDashboard from "../screens/hr-dashboard"
import { Provider } from "react-redux"
import store from "../redux-store/store"
import UserDetail from "../screens/user-detail"
import DashboardNavigation from "./drawer-navigator"
import SplashScreen from "../screens/splash-screen"
import OtpScreen from "../screens/otp"

const Stack = createNativeStackNavigator()

const MyStack = () => {
    return (
        <Provider store={store}>
            <NavigationContainer >
                <Stack.Navigator initialRouteName="splash"
                    screenOptions={{ headerShown: false }}>



                    <Stack.Screen name={ROUTES_NAMES.splash} component={SplashScreen} />
                    <Stack.Screen name={ROUTES_NAMES.login} component={Login} />
                    {/* <Stack.Screen name={ROUTES_NAMES.dashboard} component={Dashboard} /> */}
                    {/* <Stack.Screen name={ROUTES_NAMES.dashboard} component={DashboardNavigation} /> */}
                    <Stack.Screen name={ROUTES_NAMES.signup} component={SignUp} />

                    <Stack.Screen name={ROUTES_NAMES.otp} component={OtpScreen} />
                    <Stack.Screen name={ROUTES_NAMES.verifyEmail} component={VerifyEmail} />
                    <Stack.Screen name={ROUTES_NAMES.myAbsents} component={MyAbsents} />
                    <Stack.Screen name={ROUTES_NAMES.myLateComings} component={MyLateComings} />
                    <Stack.Screen name={ROUTES_NAMES.hrDashboard} component={hrDashboard} />
                    <Stack.Screen name={ROUTES_NAMES.userDetail} component={UserDetail} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default MyStack