import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../screens/HomeScreen"
import OpacityAndScale from "../screens/opacityAndScale/OpacityAndScale"

const Stack = createNativeStackNavigator()

const screens = [
    {
        name: 'home',
        component: () => <HomeScreen />,
        options: {
            headerShown: false
        }
    },
    {
        name: 'opacityandscale',
        component: () => <OpacityAndScale />,
    }
]

const MainStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="home"
        >
            {
                screens.map((item, index) => {
                    return (
                        <Stack.Screen 
                            key={index} 
                            name={item.name}
                            options={item.options}
                        >
                            {item.component}
                        </Stack.Screen>
                    )
                })
            }
        </Stack.Navigator>
    )
}

export default MainStack