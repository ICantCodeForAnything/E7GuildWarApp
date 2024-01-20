import { Text, Stack, NumberInput, Box } from "@mantine/core"
import { GuildInfoFormProps } from "./types"

const formOrder = ['havoc', 'numTokens', 'sh', 'fort1', 'fort2', 'fort3', '_200hpTowers', '_80hpTowers', '_20hpTowers']

const getLabel: {[key: string]: string} = {
    'havoc': 'Havoc',
    'numTokens': 'Number of remaining tokens',
    'sh': 'Stronghold HP',
    'fort1': 'Fort 1 HP',
    'fort2': 'Fort 2 HP',
    'fort3': 'Fort 3 HP',
    '_200hpTowers': 'Number of 200HP Towers',
    '_80hpTowers': 'Number of 80HP Towers',
    '_20hpTowers': 'Number of 20HP Towers',
}

function GuildInfoForm({title, formProps}): JSX.Element {
    return <Box>
        <Text>
            {title}
        </Text>
        <Stack>
            {
                formOrder.map((key) => 
                    <NumberInput
                    key={key}
                    label={getLabel[key]}
                    hideControls
                    allowNegative='false'
                    allowDecimal='false'
                    {...formProps.getInputProps(key, { type: 'NumberInput' })}
                    />
                )
            }
            
        </Stack>
    </Box>
}

export default GuildInfoForm 