export type TScoutUnitForm = {
    name: string,
    speed: number,
    crPushBack: number,
    crEnemyPush: number,
    crAllyPush: number,
    speedDown: boolean,
}

export type TEnemyUnitForm = {
    name: string,
    artifact: string,
    hp: number | undefined,
    cr: number | undefined,
    outspeed: boolean,
    immunity: boolean,
    counter: boolean,
    lifesteal: boolean,
    injury: boolean,
    protection: boolean,
}

const defaultScoutForm: TScoutUnitForm = {
    name: '',
    speed: 0,
    crPushBack: 0,
    crEnemyPush: 0,
    crAllyPush: 0,
    speedDown: false,
}

const defaultEnemyUnitForm: TEnemyUnitForm = {
    name: '',
    artifact: '',
    hp: undefined,
    cr: undefined,
    outspeed: false,
    immunity: false,
    counter: false,
    lifesteal: false,
    injury: false,
    protection: false,
}

export const initialFormValues: {
    yourUnit: TScoutUnitForm,
    enemyUnit1: TEnemyUnitForm,
    enemyUnit2: TEnemyUnitForm,
    enemyUnit3: TEnemyUnitForm
} = {
    yourUnit: defaultScoutForm,
    enemyUnit1: defaultEnemyUnitForm,
    enemyUnit2: defaultEnemyUnitForm,
    enemyUnit3: defaultEnemyUnitForm,
}

function validateNum(value: any): string | null {
    return typeof(value) === 'number' && value >= 0 ? null : 'Must be a number greater than 0'
}

function validatePercentage(value: any): string | null {
    return typeof(value) === 'number' && value >= 0 && value <= 100 ? null : 'Must be a number greater than 0 and less than 100'
}

export const formValidateRules: {[field: string]: (value: any) => string | null} = {
    hp: validateNum,
    cr: validatePercentage,
    speed: validateNum,
    crPushBack: validatePercentage,
    crEnemyPush: validatePercentage,
    crAllyPush: validatePercentage
}
