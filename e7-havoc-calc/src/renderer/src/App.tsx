import '@mantine/core/styles.css';
import { MantineProvider, AppShell, Stack} from '@mantine/core';
import Calculator from './components/Calculator';

function App(): JSX.Element {
  return <MantineProvider>
    {
      <AppShell>
        <AppShell.Main>
          <Stack align='center'>
            <Calculator/>
          </Stack>
        </AppShell.Main>
      </AppShell>
    }
  </MantineProvider>
}

export default App
