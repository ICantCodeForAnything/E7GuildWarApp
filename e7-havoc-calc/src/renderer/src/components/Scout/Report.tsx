import { Group, Stack, Textarea, Button, CopyButton } from "@mantine/core";
import { FormatReport } from "./Functions";
import { notifications } from '@mantine/notifications';
function Report({form1, form2, name}): JSX.Element {
    const text: string = FormatReport(form1, form2, name)
    return (
        <Stack w='100%' h='100%' p='md'>
            <Group justify='flex-end'>
                <Button variant='default'>
                    Reset form
                </Button>
                <CopyButton value={text}>
                    {({ copy }) => (
                        <Button variant='default' onClick={
                            () => {
                                copy();
                                notifications.show({
                                    title: 'Copied!',
                                    message: 'The scout report was successfully copied!'
                                })
                            }
                        } w='200px'>
                            Copy text to clipboard
                        </Button>
                    )}
                </CopyButton>
                <CopyButton value={text.replace(/(\r\n|\n|\r)/gm, " ")}>
                {({ copy }) => (
                    <Button variant='default' onClick={
                        () => {
                            copy();
                            notifications.show({
                                title: 'Copied!',
                                message: 'The scout report was successfully copied!'
                            })
                        }
                    }>
                        Copy text to clipboard (single line)
                    </Button>
                )}
                </CopyButton>
            </Group>
            <Textarea w='100%' minRows={6} autosize value={text}/>
        </Stack>
    )
}

export default Report;