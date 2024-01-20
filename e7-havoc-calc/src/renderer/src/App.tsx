import '@mantine/core/styles.css';
import { MantineProvider, AppShell, Stack, Group, Text } from '@mantine/core';
import Calculator from './components/Calculator';
import { ToggleThemeButton } from './components/Navbar Components/ToggleTheme'; 
import HelpButton from './components/Navbar Components/HelpButton';

function App(): JSX.Element {
  return (
    <MantineProvider defaultColorScheme='dark'>
      <AppShell header={{ height: 60 }} p='md'>
        <AppShell.Header>
          <Group align='center' h='100%' p='md' w='100%' justify='space-between'>
            <Group>
              <Text fz='xl' fw='700'>
                E7 Guild War Havoc Calculator
              </Text>
            </Group>
            <Group justify='flex-end' maw='20%'>
              <HelpButton />
              <ToggleThemeButton/>
            </Group>
          </Group>
        </AppShell.Header>
        <AppShell.Main>
          <Stack align='center'>
            <Calculator/>
          </Stack>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  ) 
}

export default App
