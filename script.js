const progress = document.getElementById('tutorial-progress');
const steps = document.querySelectorAll('.passo');

steps.forEach((step, index) => {
    step.addEventListener('toggle', () => {
        progress.value = step.open ? (index + 1) : index;
    });
});