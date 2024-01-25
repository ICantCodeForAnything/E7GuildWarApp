import { Stack, Tabs, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { formValidateRules, initialFormValues } from "./Constants";
import ScoutForm from "./ScoutForm";
import { useState } from "react";

function Scout(): JSX.Element {
    const [name, setName] = useState<string>('')

    const t1Form = useForm({
        initialValues: initialFormValues,
        validate: formValidateRules
    });

    const t2Form = useForm({
        initialValues: initialFormValues,
        validate: formValidateRules
    });

    return (
        <Stack w='80%' pt='md'>
            <TextInput placeholder='Name of the tower or player...' w='100%' onChange={(event) => setName(event.currentTarget.value)}/>
            <Tabs defaultValue="T1" variant='outline'>
                <Tabs.List>
                    <Tabs.Tab value="T1" >
                    T1
                    </Tabs.Tab>
                    <Tabs.Tab value="T2" >
                    T2
                    </Tabs.Tab>
                    <Tabs.Tab value="Report" >
                    Report
                    </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="T1">
                    <ScoutForm formProps={t1Form}/>
                </Tabs.Panel>

                <Tabs.Panel value="T2">
                    <ScoutForm formProps={t2Form}/>
                </Tabs.Panel>

                <Tabs.Panel value="Report">
                    Report
                </Tabs.Panel>
                </Tabs>
        </Stack>
    )
}

export default Scout;