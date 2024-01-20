import { MAX_DAMAGE_PER_ATTACK, DOWN_HAVOC_BONUS } from "./Constants";

/**
 * Returns if the attack can be performed and the new token and havoc total if possible
 *
 * @param hp - HP of the attack target
 * @param numTokens - number of tokens we have left
 * @param havoc - the current havoc total
 * @returns (True/False if the attack can be performed. the new token count, the new havoc count)
 */

function attack( hp: number, numTokens:number, havoc: number, tower_type: string): [boolean, number, number] {
    const numAttacksRequired =  Math.ceil(hp / MAX_DAMAGE_PER_ATTACK)
    if (numTokens >= numAttacksRequired) {
        havoc += hp + DOWN_HAVOC_BONUS[tower_type]
        numTokens -= numAttacksRequired
        return [true, havoc, numTokens]
    }
    return [false, havoc, numTokens]
}

export function calcMaxHavoc(guildInfo: {[field: string]: number}): number {
    let currentHavoc = guildInfo['havoc'];
    let currentTokens = guildInfo['numTokens'];

    /* 
    To determine the possible max havoc, we check the remaining attack targets in descending value order
    SH > FORT > 80HP Tower > 200HP > 20HP Tower

    We also need to check if the SH is blocked off or not
    and whether if we have sufficient tokens to even down a fort/SH
    */
   while (currentTokens > 0) {
        let sh_hp = guildInfo['sh']
        let _200hpTowers = guildInfo['_200hpTowers']
        let _80hpTowers = guildInfo['_80hpTowers']
        let _20hpTowers = guildInfo['_20hpTowers']
        let remaining_forts = [guildInfo['fort1'], guildInfo['fort2'], guildInfo['fort3']].filter(x => x > 0)
        let sh_blocked = remaining_forts.length >= 2

        // Priority 1: Clearing enough forts to get to the SH
        // Exit condition: SH is no longer blocked | We have insufficient tokens to open the SH (pepega)
        while (sh_blocked) {
            // We first want to down the weakest fort, to attack stronghold
            let weakest_fort_hp = Math.min(...remaining_forts);
            let [success, newHavoc, remainingTokens] = attack(weakest_fort_hp, currentTokens, currentHavoc, 'fort')
            if (success) {
                currentHavoc = newHavoc
                currentTokens = remainingTokens
                // remove the fort we just downed
                let position = remaining_forts.indexOf(weakest_fort_hp);
                remaining_forts.splice(position, 1);
                sh_blocked = remaining_forts.length >= 2
            }
            else break
        }

        // Priority 2: Clearing the SH if possible
        if (!sh_blocked && sh_hp > 0) {
            let [_, newHavoc, remainingTokens] = attack(sh_hp, currentTokens, currentHavoc, 'sh')
            currentHavoc = newHavoc
            currentTokens = remainingTokens
        }

        console.log('down 2 fort + sh havoc: ', currentHavoc, 'tokens ', currentTokens)

        // Priority 3: Clearing the remaining 3rd fort
        if (remaining_forts.length > 0) {
            // Note that we might have more than 1 fort as we might have sufficient tokens to down 2 forts but not 1 fort + 1 sh
            remaining_forts.forEach(hp => {
                let [_, newHavoc, remainingTokens] = attack(hp, currentTokens, currentHavoc, 'fort')
                currentHavoc = newHavoc
                currentTokens = remainingTokens
            })
        }

        console.log('down 3 fort + sh havoc: ', currentHavoc, 'tokens ', currentTokens)

        // Priority 4: 80HP towers
        while (_80hpTowers > 0 && currentTokens > 0) {
            let [_, newHavoc, remainingTokens] = attack(80, currentTokens, currentHavoc, 'tower')
            currentHavoc = newHavoc
            currentTokens = remainingTokens
            _80hpTowers -= 1
        }

        console.log(_200hpTowers, currentHavoc, currentTokens);

        // Priority 5: 200HP towers
        while (_200hpTowers > 0 && Math.floor(currentTokens / 2) > 0) {
            let [_, newHavoc, remainingTokens] = attack(200, currentTokens, currentHavoc, 'tower')
            currentHavoc = newHavoc
            currentTokens = remainingTokens
            _200hpTowers -= 1
        }

        console.log(_200hpTowers, currentHavoc, currentTokens);

        // Priority 6: 20HP towers
        while (_20hpTowers > 0 && currentTokens > 0) {
            let [_, newHavoc, remainingTokens] = attack(20, currentTokens, currentHavoc, 'tower')
            currentHavoc = newHavoc
            currentTokens = remainingTokens
            _20hpTowers -= 1
        }

        // Well if we reach here, we either ran out of tokens, or ran out of attack targets
        // But regardless we are done here
        break;

    }
    return currentHavoc;
}