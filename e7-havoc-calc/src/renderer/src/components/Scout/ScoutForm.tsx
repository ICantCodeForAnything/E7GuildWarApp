import { Stack, Group, Divider, TextInput, Grid, Checkbox, Image, NumberInput } from "@mantine/core";
import SpeedDown from '../../assets/speed_down.png'
import EnemyUnitForm from "./EnemyUnitForm";

function ScoutForm({formProps}): JSX.Element {
    return(
        <Stack p='sm'>
            <Grid>
                <Grid.Col span={3}>
                    <TextInput 
                        placeholder='Your hero'
                        onChange={(e) => console.log(e.currentTarget.value)}
                        {...formProps.getInputProps('yourUnit.name')}
                    />
                </Grid.Col>
                <Grid.Col span={9}>
                    <Group>
                        <NumberInput rightSectionWidth='70px' rightSection={'Speed'} {...formProps.getInputProps('yourUnit.speed', {type: 'NumberInput' })}/>
                        <TextInput rightSectionWidth='150px' rightSection={'% CR Pushback'} {...formProps.getInputProps('yourUnit.crPushBack', {type: 'NumberInput' })}/>
                        <TextInput rightSectionWidth='100px' rightSection={'% CR Push'} {...formProps.getInputProps('yourUnit.crEnemyPush', {type: 'NumberInput' })}/>
                        <TextInput rightSectionWidth='150px' rightSection={'% CR Push for Allies'} {...formProps.getInputProps('yourUnit.crAllyPush', {type: 'NumberInput' })}/>
                        <Group>
                            <Checkbox{...formProps.getInputProps('yourUnit.speedDown', {type: 'checkbox'})} />
                            <Image src={SpeedDown}/>
                        </Group>
                    </Group>
                </Grid.Col>
            </Grid>
            <Divider/>
            <Group>
                <EnemyUnitForm number={"1"} formProps={formProps} />
            </Group>
            <Divider/>
            <Group>
                <EnemyUnitForm number={"2"} formProps={formProps} />
            </Group>
            <Divider/>
            <Group>
                <EnemyUnitForm number={"3"} formProps={formProps} />
            </Group>
        </Stack>
    )
}

export default ScoutForm;