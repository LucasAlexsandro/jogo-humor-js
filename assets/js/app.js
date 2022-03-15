const nome = document.querySelector("#nome");
let btnTrocar = document.querySelector("#btnTrocar");
const status = document.querySelector("#status");
const img = document.querySelector('#img');

btnTrocar.addEventListener("click", () => {

    if(btnTrocar.value == 'normal'){
        img.src = './assets/img/dr_benner.png';
        nome.innerText = 'Dr Benner';
        status.innerText = 'Normal';

        btnTrocar.value = 'ficandoRaiva';
    }
    else if (btnTrocar.value == 'ficandoRaiva'){
        img.src = './assets/img/benner_ficando_raiva.png';
        nome.innerText = 'Dr Benner';
        status.innerText = 'Ficando com Raiva';

        btnTrocar.value = 'raiva';
    }
    else if (btnTrocar.value == 'raiva'){
        img.src = './assets/img/hulk.png';
        nome.innerText = 'Hulk';
        status.innerText = 'Raiva';

        btnTrocar.value = 'normal';
    }

});
