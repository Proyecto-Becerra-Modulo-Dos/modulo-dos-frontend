document.getElementById('openModalPlan').addEventListener('click', function () {
    document.getElementById('modalPlan').style.display = 'flex';
});
document.getElementById('closeModalPlan').addEventListener('click', function () {
    document.getElementById('modalPlan').style.display = 'none';
});

document.querySelectorAll('.btn-edit').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('modalEdit').style.display = 'flex';
    });
});
document.getElementById('closeModalEdit').addEventListener('click', function () {
    document.getElementById('modalEdit').style.display = 'none';
});