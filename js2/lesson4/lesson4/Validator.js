class Validator{
    constructor(form){
        this.patterns = {
            name: /^\w+$/,
            phone: /^\+7\(\d{3}\)\d{3}-\d{4}$/,
            email: /^[\w.-_]+@\w+\.\w{2,4}$/
        };
        this.errors = {
            name: 'Имя содержит только буквы',
            phone: 'Телефон подчиняется шаблону +7(000)000-0000',
            email: 'E-mail выглядит как mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru'
        };
        this.errorClass = 'error-msg';
        this.form = form;
        this._validateForm(this.form);
    }
    _validateForm(form){
        let formFields = [...document.getElementById(form).getElementsByTagName('input')];
        for (let field of formFields){
            this._validate(field);
        }
    }
    _validate(field){
        if (this.patterns[field.name]){
            if (!this.patterns[field.name].test(field.value)) {
                field.classList.toggle('invalid');
                this._addErrorMsg(field);
                this._watchField(field);
            }
        }
    }
    _addErrorMsg(field){
        let errMsg = document.createElement('div');
        errMsg.classList.add(this.errorClass);
        errMsg.textContent = this.errors[field.name];
        field.parentNode.appendChild(errMsg);
    }
    _watchField(field){
        field.addEventListener('input', () => {
            if (this.patterns[field.name].test(field.value)){
                field.classList.remove('invalid');
                field.classList.add('valid');
                if (field.parentNode.lastChild !== field) {
                    field.parentNode.lastChild.remove();
                }
            } else {
                field.classList.add('invalid');
                field.classList.remove('valid');
                if (field.parentNode.lastChild.nodeName !== 'DIV') {
                    this._addErrorMsg(field);
                }

            }
        })
    }
}