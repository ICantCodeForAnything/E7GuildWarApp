import { Button, Modal, SimpleGrid, Stack, Text } from "@mantine/core";
import GuildInfoForm from "./GuildInfoForm";
import { useForm } from "@mantine/form";
import { formValidateRules, initialFormValues } from "./Constants";
import { calcMaxHavoc } from "./Functions";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";


function Calculator(): JSX.Element {

    const [opened, { open, close }] = useDisclosure(false);
    const [yourMaxHavoc, setYourMaxHavoc] = useState<number>(0);
    const [enemyMaxHavoc, setEnemyMaxHavoc] = useState<number>(0);
    const yourGuildForm = useForm({
        initialValues: initialFormValues,
        validate: formValidateRules
    })
    const enemyGuildForm = useForm({
        initialValues: initialFormValues,
        validate: formValidateRules
    })
    function calcHavoc() {
        // First validate that the entered values are valid
        if (!yourGuildForm.isValid()) {
            yourGuildForm.validate(); // Set the error messages
            return;
        }
        if (!enemyGuildForm.isValid()) {
            enemyGuildForm.validate();
            return;
        }

        yourGuildForm.clearErrors();
        enemyGuildForm.clearErrors();

        const yourGuildInfo = yourGuildForm.values;
        const enemyGuildInfo = enemyGuildForm.values;

        // Now we want our havoc and tokens, but their tower info so we need to do some mixing
        const calcOurHavocInfo = {
            ...(({ havoc, numTokens }) => ({ havoc, numTokens }))(yourGuildInfo),
            ...(({ sh, fort1, fort2, fort3, _200hpTowers, _80hpTowers, _20hpTowers}) => 
                ({ sh, fort1, fort2, fort3, _200hpTowers, _80hpTowers, _20hpTowers}))(enemyGuildInfo)
        }

        const calcTheirHavocInfo = {
            ...(({ havoc, numTokens }) => ({ havoc, numTokens }))(enemyGuildInfo),
            ...(({ sh, fort1, fort2, fort3, _200hpTowers, _80hpTowers, _20hpTowers}) => 
                ({ sh, fort1, fort2, fort3, _200hpTowers, _80hpTowers, _20hpTowers}))(yourGuildInfo)
        }

        setYourMaxHavoc(calcMaxHavoc(calcOurHavocInfo))
        setEnemyMaxHavoc(calcMaxHavoc(calcTheirHavocInfo))

        //TODO: Render the result
        open()
    }

    return (
    <Stack w='80%' pt='20px'>
    <Modal opened={opened} onClose={close} title="Havoc Result">
        {<Stack>
            <Text>
                Your Max Havoc: {yourMaxHavoc}
            </Text>
            <Text>
                Enemy Max Havoc: {enemyMaxHavoc}    
            </Text>
        </Stack>}
    </Modal>
        <SimpleGrid cols={2} spacing={'xl'}>
            <Stack align='center'>
                <GuildInfoForm title='Your Guild' formProps={yourGuildForm}/>
            </Stack>
            <Stack align='center'>
                <GuildInfoForm title='Enemy Guild' formProps={enemyGuildForm}/>
            </Stack>
        </SimpleGrid>
        <Stack align='center' p='xl'>
            <Button autoContrast maw='300px' onClick={calcHavoc}>Calculate</Button>
        </Stack>
    </Stack>
    )
}

export default Calculator