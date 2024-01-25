import { usePageContext } from "@renderer/ContextProviders/PageContext"
import { Text } from "@mantine/core"
import Scout from "./Scout/Scout.1"
import Calculator from "./Havoc Calculator/Calculator"

function Router(): JSX.Element {
    const { page } = usePageContext()

    switch (page) {
        case 'scout':
            return <Scout/>
        case 'calc':
            return <Calculator/>
        default:
            return (<Text>
                Unknown page
            </Text>)    
    }
}

export default Router