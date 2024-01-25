import { Checkbox, Grid, Group, NumberInput, TextInput, Image } from "@mantine/core";
import Injury from '../../assets/Injury.png'
import Counter from '../../assets/Counter.png'
import Lifesteal from '../../assets/Lifesteal.png'
import Protection from '../../assets/Protection.png'
import Immunity from '../../assets/Immunity.png'

const getDisplayText = {
    "1": "First",
    "2": "Second",
    "3": "Third"
}


function EnemyUnitForm({number, formProps}): JSX.Element {
    return(
        <Grid w='100%'>
            <Grid.Col span={3} w='100%'>
                <TextInput 
                    placeholder={`${getDisplayText[number]} hero`}
                    onChange={(e) => console.log(e.currentTarget.value)}
                    {...formProps.getInputProps(`enemyUnit${number}.name`)}
                />
            </Grid.Col>
            <Grid.Col span={9}>
                <Group>
                    <TextInput rightSectionWidth='70px' w='31%' placeholder='Artifact' {...formProps.getInputProps(`enemyUnit${number}.artifact`)}/>
                    <NumberInput rightSection={'HP'} w='32%' rightSectionWidth='40px' {...formProps.getInputProps(`enemyUnit${number}.hp`, {type: 'NumberInput' })}/>
                    <NumberInput rightSection={'% CR'} w='32%' rightSectionWidth='50px' {...formProps.getInputProps(`enemyUnit${number}.cr`, {type: 'NumberInput' })}/>
                </Group>
            </Grid.Col>
            <Grid.Col span={3}>
                <Group>
                    <Group gap='xs'>
                        <Checkbox{...formProps.getInputProps('yourUnit.speedDown', {type: 'checkbox'})} />
                        Outspeed?
                    </Group>
                    <Group gap='xs'>
                        <Checkbox{...formProps.getInputProps('yourUnit.speedDown', {type: 'checkbox'})} />
                        <Image src={Immunity}/>
                    </Group>
                    <Group gap='xs'>
                        <Checkbox{...formProps.getInputProps('yourUnit.speedDown', {type: 'checkbox'})} />
                        <Image src={Protection}/>
                    </Group>
                    <Group gap='xs'>
                        <Checkbox{...formProps.getInputProps('yourUnit.speedDown', {type: 'checkbox'})} />
                        <Image src={Counter}/>
                    </Group>
                    <Group gap='xs'>
                        <Checkbox{...formProps.getInputProps('yourUnit.speedDown', {type: 'checkbox'})} />
                        <Image src={Lifesteal}/>
                    </Group>
                    <Group gap='xs'>
                        <Checkbox{...formProps.getInputProps('yourUnit.speedDown', {type: 'checkbox'})} />
                        <Image src={Injury}/>
                    </Group>
                </Group>
            </Grid.Col>
        </Grid>
    )
}

export default EnemyUnitForm;