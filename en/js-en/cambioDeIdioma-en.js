const languageSelect = document.getElementById('language-select');
        
languageSelect.addEventListener('change', function() {

    const selectedValue = languageSelect.value;

    if (selectedValue === 'es') {

        window.location.href = '../index.html';
    } else if (selectedValue === 'en') {

        window.location.href ='.en/indexEn.html';
    }
});