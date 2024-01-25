import '@mantine/core/styles.css';
import { AppShell, Stack, Group, Text, Button } from '@mantine/core';
import { ToggleThemeButton } from './components/Navbar Components/ToggleTheme'; 
import HelpButton from './components/Navbar Components/HelpButton';
import Router from './components/Router';
import { usePageContext } from './ContextProviders/PageContext';

function App(): JSX.Element {

  const { setPage } = usePageContext();

  return (
    <AppShell header={{ height: 60 }} p='md'>
      <AppShell.Header pl='md'>
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
      <AppShell.Navbar p='md'>
        <Stack>
          <Button
            variant='default' 
            size='compact-l'
            onClick={() => setPage('scout')}>
            Scout Form
          </Button>
          <Button
            variant='default'  
            size='compact-l'
            onClick={() => setPage('calc')}>
            Havoc Calculator
          </Button>
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main pl='130'>
        <Stack align='center' w='100%'>
          <Router/>
        </Stack>
      </AppShell.Main>
    </AppShell>
  ) 
}

export default App
