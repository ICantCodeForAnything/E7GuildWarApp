import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { SunIcon, MoonIcon } from '@modulz/radix-icons';

export function ToggleThemeButton() {
    const { colorScheme, setColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';
    return (
        <ActionIcon
        variant="outline"
        color={dark ? 'yellow' : 'blue'}
        onClick={() => dark ? setColorScheme('light') : setColorScheme('dark')}
        title="Toggle color scheme"
        >
        {dark ? (
            <SunIcon />
        ) : (
            <MoonIcon />
        )}
        </ActionIcon>
    );
}