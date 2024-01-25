import { Text, NumberInput, Box, SimpleGrid } from "@mantine/core"

const formOrder = ['havoc', 'numTokens', 'sh', 'fort1', 'fort2', 'fort3', '_200hpTowers', '_140hpTowers', '_80hpTowers', '_20hpTowers']

const getLabel: {[key: string]: string} = {
    'havoc': 'Havoc',
    'numTokens': 'Number of remaining tokens',
    'sh': 'Stronghold HP',
    'fort1': 'Fort 1 HP',
    'fort2': 'Fort 2 HP',
    'fort3': 'Fort 3 HP',
    '_200hpTowers': 'Number of 200HP Towers',
    '_140hpTowers': 'Number of 140HP Towers',
    '_80hpTowers': 'Number of 80HP Towers',
    '_20hpTowers': 'Number of 20HP Towers',
}

function GuildInfoForm({title, formProps}: {title: string, formProps: any}): JSX.Element {
    return <Box>
        <Text>
            {title}
        </Text>
        <SimpleGrid cols={2}>
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
            
        </SimpleGrid>
    </Box>
}

export default GuildInfoForm 