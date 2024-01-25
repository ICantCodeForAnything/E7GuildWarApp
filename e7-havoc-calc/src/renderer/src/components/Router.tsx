import { usePageContext } from "@renderer/ContextProviders/PageContext"
import { Text } from "@mantine/core"
import Scout from "./Scout"
import Calculator from "./Calculator"

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