export const initialFormValues: {[field: string]: number} = {
    havoc: 0,
    numTokens: 90,
    fort1: 0,
    fort2: 0,
    fort3: 0,
    sh: 0,
    _200hpTowers: 0,
    _140hpTowers: 0,
    _80hpTowers: 0,
    _20hpTowers: 0,
}

function validateNum(value: any): string | null {
    return typeof(value) === 'number' && value >= 0 ? null : 'Must be a number greater than 0'
}

export const formValidateRules: {[field: string]: (value: any) => string | null} = {
    havoc: validateNum,
    numTokens: (value) => typeof(value) === 'number' && value >= 0 && value <= 90 ? null : 'Must be a number between 0 and 90',
    fort1: validateNum,
    fort2: validateNum,
    fort3: validateNum,
    sh: validateNum,
    _200hpTowers: validateNum,
    _140hpTowers: validateNum,
    _80hpTowers: validateNum,
    _20hpTowers: validateNum
}

const SH_DOWN_BONUS = 1000
const FORT_DOWN_BONUS = 500
const TOWER_DOWN_BONUS = 100
export const MAX_DAMAGE_PER_ATTACK = 120

export const DOWN_HAVOC_BONUS = {
    'sh': SH_DOWN_BONUS,
    'fort': FORT_DOWN_BONUS,
    'tower': TOWER_DOWN_BONUS
}