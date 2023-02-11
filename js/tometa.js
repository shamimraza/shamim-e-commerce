const backPack = document.getElementById('backpack');
backPack.style.backgroundColor = 'tomato';

document.getElementById('delete-text').addEventListener('keyup', function (event) {
    const text = event.target.value;
    const submitButton = document.getElementById('btn-submit');
    if (text === 'email') {
        submitButton.removeAttribute('disabled');
    }
    else {
        submitButton.setAttribute('disabled', true);
    }
})