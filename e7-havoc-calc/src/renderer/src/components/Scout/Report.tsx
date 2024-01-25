import { Group, Stack, Textarea, Button } from "@mantine/core";
import { FormatReport } from "./Functions";

function Report({form1, form2, name}): JSX.Element {
    return (
        <Stack w='100%' h='100%' p='md'>
            <Group justify='flex-end'>
                <Button variant='default'>
                    Reset form
                </Button>
                <Button variant='default'>
                    Copy text to clipboard
                </Button>
                <Button variant='default'>
                    Copy text to clipboard (Single line)
                </Button>
            </Group>
            <Textarea w='100%' minRows={6} autosize value={FormatReport(form1, form2, name)}/>
        </Stack>
    )
}

export default Report;