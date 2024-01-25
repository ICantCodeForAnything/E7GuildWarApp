import '@mantine/core/styles.css';
import { AppShell, Stack, Group, Text, UnstyledButton } from '@mantine/core';
import { ToggleThemeButton } from './components/Navbar Components/ToggleTheme'; 
import HelpButton from './components/Navbar Components/HelpButton';
import Router from './components/Router';
import { usePageContext } from './ContextProviders/PageContext';

function App(): JSX.Element {

  const { setPage } = usePageContext();

  return (
    <AppShell header={{ height: 60 }} p='md'>
      <AppShell.Header>
        <Group align='center' h='100%' p='md' w='100%' justify='space-between'>
          <Group>
            <Text fz='xl' fw='700'>
              E7 Guild War App
            </Text>
          </Group>
          <Group justify='flex-end' maw='20%'>
            <HelpButton />
            <ToggleThemeButton/>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Stack>
          <UnstyledButton onClick={() => setPage('scout')}>
            Scout Form
          </UnstyledButton>
          <UnstyledButton onClick={() => setPage('calc')}>
            Havoc Calculator
          </UnstyledButton>
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main>
        <Stack align='center'>
          <Router/>
        </Stack>
      </AppShell.Main>
    </AppShell>
  ) 
}

export default App
