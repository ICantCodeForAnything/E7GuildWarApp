export function FormatReport(form1, form2, name): string {
    let stringBuilder: Array<string> = [];
    if (name !== '') stringBuilder.push(`**${name}**\n`);
    
    stringBuilder.push('T1\n');

    const form1Values = form1.values

    for (let i = 1; i <= 3; i++){
        const enemy = form1Values[`enemyUnit${i}`];
        if (enemy['name'] === '') continue;
        let string: Array<string> = [];
        string.push(enemy['name'])
        string.push(enemy['artifact'])
        if (enemy['hp'] !== undefined)
            string.push((Number(enemy['hp']) / 1000).toFixed(3).concat('', 'k'));
        if (enemy['cr'] !== undefined) {
            let cr = enemy['cr'];
            cr += form1Values['yourUnit']['crAllyPush'];
            cr -= form1Values['yourUnit']['crEnemyPush'];
            cr = (cr * 100) / (form1Values['yourUnit']['crPushBack'] + 100);
            let crMin = (cr - 5) / 100;
            let crMax = (cr + 5) / 100;
            if (enemy['outspeed']) {
                if (form1Values['yourUnit']['speedDown']) {
                    crMin *= 0.7;
                    crMax *= 0.7;
                }
                crMin += 1;
                crMax += 1;
            }
            const baseSpeed = form1Values['yourUnit']['speed']
            const speedmin = Math.round(crMin * baseSpeed);
            const speedmax = Math.round(crMax * baseSpeed);

            string.push(`${speedmin} - ${speedmax} Speed`)
        }
        if (enemy['immunity']) string.push('Immunity Set')
        if (enemy['lifesteal']) string.push('Lifesteal Set')
        if (enemy['counter']) string.push('Immunity Set')
        if (enemy['protection']) string.push('Protection Set')
        if (enemy['injury']) string.push('Injury Set')


        stringBuilder.push(string.join(' - ').concat('\n'))
    }

    stringBuilder.push('T2\n');

    const form2Values = form2.values

    for (let i = 1; i <= 3; i++){
        const enemy = form2Values[`enemyUnit${i}`];
        if (enemy['name'] === '') continue;
        let string: Array<string> = [];
        string.push(enemy['name'])
        string.push(enemy['artifact'])
        if (enemy['hp'] !== undefined)
            string.push((Number(enemy['hp']) / 1000).toFixed(2).concat('', 'k'));
        if (enemy['cr'] !== undefined) {
            let cr = enemy['cr'];
            cr += form2Values['yourUnit']['crAllyPush'];
            cr -= form2Values['yourUnit']['crEnemyPush'];
            cr = (cr * 100) / (form2Values['yourUnit']['crPushBack'] + 100);
            let crMin = (cr - 5) / 100;
            let crMax = (cr + 5) / 100;
            if (enemy['outspeed']) {
                if (form2Values['yourUnit']['speedDown']) {
                    crMin *= 0.7;
                    crMax *= 0.7;
                }
                crMin += 1;
                crMax += 1;
            }
            const baseSpeed = form2Values['yourUnit']['speed']
            const speedmin = Math.round(crMin * baseSpeed);
            const speedmax = Math.round(crMax * baseSpeed);

            string.push(`${speedmin} - ${speedmax} Speed`)
        }
        if (enemy['immunity']) string.push('Immunity Set')
        if (enemy['lifesteal']) string.push('Lifesteal Set')
        if (enemy['counter']) string.push('Immunity Set')
        if (enemy['protection']) string.push('Protection Set')
        if (enemy['injury']) string.push('Injury Set')

        stringBuilder.push(string.join(' - ').concat('\n'))
    }


    return stringBuilder.join('');
}
