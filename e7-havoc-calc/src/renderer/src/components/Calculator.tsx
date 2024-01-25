import { Button, SimpleGrid, Stack, Text, useMantineTheme } from "@mantine/core";
import { useForm } from "@mantine/form";
import { formValidateRules, initialFormValues } from "./Constants";
import { calcMaxHavoc } from "./Functions";
import { useState } from "react";
import GuildInfoForm from "./GuildInfoForm";


function Calculator(): JSX.Element {
    const [yourMaxHavoc, setYourMaxHavoc] = useState<number | undefined>(undefined);
    const [enemyMaxHavoc, setEnemyMaxHavoc] = useState<number | undefined>(undefined);
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
            ...(({ sh, fort1, fort2, fort3, _200hpTowers, _140hpTowers, _80hpTowers, _20hpTowers}) => 
                ({ sh, fort1, fort2, fort3, _200hpTowers, _140hpTowers, _80hpTowers, _20hpTowers}))(enemyGuildInfo)
        }

        const calcTheirHavocInfo = {
            ...(({ havoc, numTokens }) => ({ havoc, numTokens }))(enemyGuildInfo),
            ...(({ sh, fort1, fort2, fort3, _200hpTowers, _140hpTowers, _80hpTowers, _20hpTowers}) => 
                ({ sh, fort1, fort2, fort3, _200hpTowers, _140hpTowers, _80hpTowers, _20hpTowers}))(yourGuildInfo)
        }

        setYourMaxHavoc(calcMaxHavoc(calcOurHavocInfo))
        setEnemyMaxHavoc(calcMaxHavoc(calcTheirHavocInfo))

    }

    return (
    <Stack w='100%' pt='20px' align='center'>
        <SimpleGrid cols={2} spacing={50}>
            <Stack align='center'>
                <GuildInfoForm title='Your Guild' formProps={yourGuildForm}/>
                <Text>
                Your Max Havoc: {yourMaxHavoc}
                </Text>
            </Stack>
            <Stack align='center'>
                <GuildInfoForm title='Enemy Guild' formProps={enemyGuildForm}/>
                <Text>
                Enemy Max Havoc: {enemyMaxHavoc}    
                </Text>
            </Stack>
        </SimpleGrid>
        <Stack align='center' p='xl'>
            <Button autoContrast maw='300px' onClick={calcHavoc}>Calculate</Button>
        </Stack>
    </Stack>
    )
}

export default Calculator