
document.getElementById('talkToUsBtn').addEventListener('click', function() {
    document.getElementById('formContainer').style.display = 'flex';
    document.getElementById('overlay').style.display = 'block';
    setTimeout(() => {
        document.getElementById('formContainer').style.opacity = '1';
        document.getElementById('formContainer').style.transform = 'scale(1)';
    }, 10);
    this.style.display = 'none';
});

document.getElementById('closeFormBtn').addEventListener('click', function() {
    closeForm();
});

document.getElementById('overlay').addEventListener('click', function() {
    closeForm();
});

function closeForm() {
    document.getElementById('formContainer').style.opacity = '0';
    document.getElementById('formContainer').style.transform = 'scale(0.9)';
    setTimeout(() => {
        document.getElementById('formContainer').style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('talkToUsBtn').style.display = 'block'; 
    }, 500); 
}