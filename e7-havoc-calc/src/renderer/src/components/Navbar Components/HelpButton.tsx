import { ActionIcon, Tooltip, Text, useMantineColorScheme, Modal, Stack, Image, List} from '@mantine/core';
import { IoMdHelp } from "react-icons/io";
import { useDisclosure } from '@mantine/hooks';
import myImage from '../../assets/example.png'
export function HelpButton() {
    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';
    const [opened, {open, close}] = useDisclosure(false);
    return (
        <>
            <Modal opened={opened} onClose={close} size='80%' title='How to use'>
                <Stack align='center'>
                    <Text>
                        To use this app, you will need to enter the following:
                        <List withPadding>
                            <List.Item> - The havoc each guild currently has</List.Item>
                            <List.Item> - The number of left over tokens each guild has</List.Item>
                            <List.Item> - The HP of each Stronghold and 3 forts</List.Item>
                            <List.Item> - The number of 200hp, 80hp, 20hp towers each guild has</List.Item>
                        </List>
                    </Text>
                    <Image src={myImage} maw='70%'/>
                    <Text>
                        In the example above, it is a fresh guild war of 30 v 30. This means all there is 0 havoc, 90 tokens (3 per member),
                        all the forts have full hp (800), stronghold (1500) and all the towers are untouched resulting in 26 200hp towers
                    </Text>
                </Stack>
            </Modal>
            <Tooltip label="Need an example?">
                <ActionIcon
                variant="outline"
                color={dark ? 'yellow' : 'blue'}
                title="Need help?"
                onClick={open}
                >
                    <IoMdHelp />
                </ActionIcon>
            </Tooltip>
        </>
    );
}

export default HelpButton
