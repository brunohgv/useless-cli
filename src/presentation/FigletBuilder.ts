import figlet from 'figlet'

export function buildLogo() {
    return figlet.textSync('Useless CLI', {
        font: 'Doom',
        horizontalLayout: 'default',
        verticalLayout: 'default',
    });
}