import { NavigationContainer } from "@react-navigation/native"
import MainStack from "./MainStack"

const ContainerNavigation = () => {
    return(
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
    )
}

export default ContainerNavigation