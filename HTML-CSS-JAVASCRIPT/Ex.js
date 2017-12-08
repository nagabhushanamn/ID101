
// Model
let tnr = {
    name: 'Nag'
};

// Service
let sapientTngService = {
    doTeach: function () {
        console.dir(this);
        let message = `${this.name}, teaching .js`;
        //console.log(message);
        return message;
    }
}

// View

let teachBtn = document.querySelector('.btn-primary');
let alert = document.querySelector('.alert.alert-info');

// teachBtn.addEventListener('click', sapientTngService.doTeach.bind(tnr)); ( prefered )
// or
teachBtn.addEventListener('click', function (e) {
    alert.innerText = sapientTngService.doTeach.call(tnr);
})
