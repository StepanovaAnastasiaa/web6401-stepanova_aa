/**
 * Класс, хранящий данные формы и умеющий выводить их в консоль.
 */
class FormDataLogger {
    /**
     * @param {string} login
     * @param {string} password
     * @param {boolean} consent
     */
    constructor(login, password, consent) {
        this.login = login;
        this.password = password;
        this.consent = consent;
        this.timestamp = new Date().toLocaleString('ru-RU');
    }

    /**
     * Форматированный вывод в консоль.
     */
    print() {
        console.log('╔══════════════════════════════════╗');
        console.log('║  Данные формы                    ║');
        console.log('╠══════════════════════════════════╣');
        console.log(`║ Логин:   ${this.login}`);
        console.log(`║ Пароль:  ${'*'.repeat(this.password.length)}`);
        console.log(`║ Согласие: ${this.consent ? 'да' : 'нет'}`);
        console.log(`║ Время:    ${this.timestamp}`);
        console.log('╚══════════════════════════════════╝');
    }
}

const form = document.getElementById('user-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const login = form.login.value.trim();
    const password = form.password.value;
    const consent = form.consent.checked;

    if (!login || !password || !consent) {
        alert('Заполните все поля и подтвердите согласие.');
        return;
    }

    const data = new FormDataLogger(login, password, consent);
    data.print();
});