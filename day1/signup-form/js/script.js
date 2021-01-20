$(document).ready(function () {
    $('.login-link').on('click', () => {
        $('#login-form').show('slow');
        $('#registration-form').hide('slow');
    });

    $('.register-link').on('click', () => {
        $('#login-form').hide();
        $('#registration-form').show();
    })
});

// document.querySelector('.register-link').on('click', function () {
//     document.getElementById('registration-form').style.display = 'flex';
// })