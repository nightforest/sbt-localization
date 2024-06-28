const inputFile = () => {
    const fileAll = document.querySelectorAll('.file');

    fileAll.forEach(container => {
        const fileInput = container.querySelector('.file__input');
        const fileName = container.querySelector('.file__name');
        const clearButton = container.querySelector('.file__clear');
        const fileCaption = container.querySelector('.file__caption');

        fileInput.addEventListener('change', function() {
            if (fileInput.files.length > 0) {
                fileName.textContent = fileInput.files[0].name;
                clearButton.style.display = 'flex';
                fileCaption.style.display = 'none';
            }
        });

        clearButton.addEventListener('click', function() {
            fileInput.value = '';
            fileName.textContent = '';
            clearButton.style.display = 'none';
            fileCaption.style.display = 'flex';
        });
    });
}

export default inputFile;
