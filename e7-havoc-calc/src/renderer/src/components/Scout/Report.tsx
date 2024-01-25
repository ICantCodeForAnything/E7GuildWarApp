import { Group, Stack, Textarea, UnstyledButton } from "@mantine/core";

function Report(form1, form2): JSX.Element {
    return (
        <Stack>
            <Group>
                <UnstyledButton>
                    Reset form
                </UnstyledButton>
                <UnstyledButton>
                    Copy text to clipboard
                </UnstyledButton>
                <UnstyledButton>
                    Copy text to clipboard (Single line)
                </UnstyledButton>
            </Group>
            <Textarea>
            </Textarea>
        </Stack>
    )
}

export default Report;