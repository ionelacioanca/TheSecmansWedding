document.addEventListener('DOMContentLoaded', function () {
    const attendingYes = document.getElementById('attending-yes');
    const attendingNo = document.getElementById('attending-no');
    const additionalQuestions = document.getElementById('additional-questions');
    const accommodationSection = document.getElementById('accommodation-section');
    const companionsSection = document.getElementById('companions-section');
    const guestsSection = document.getElementById('guests-section');
    const childrenSection = document.getElementById('children-section');
    const childrenNumberSection = document.getElementById('children-number-section');
    const childrenMenuSection = document.getElementById('children-menu-section');

    // Inițial, ascunde secțiunile suplimentare
    additionalQuestions.style.display = 'none';
    accommodationSection.style.display = 'none';
    companionsSection.style.display = 'none';
    guestsSection.style.display = 'none';
    childrenSection.style.display = 'none';
    childrenNumberSection.style.display = 'none';
    childrenMenuSection.style.display = 'none';

    // Ascunde toate secțiunile suplimentare atunci când se selectează 'NU' la participare
    attendingNo.addEventListener('change', function () {
        if (this.checked) {
            additionalQuestions.style.display = 'none';
            accommodationSection.style.display = 'none';
            companionsSection.style.display = 'none';
            childrenSection.style.display = 'none';
            guestsSection.style.display = 'none';
            childrenNumberSection.style.display = 'none';
            childrenMenuSection.style.display = 'none';
        }
    });

    // Afișează secțiunile suplimentare atunci când se selectează 'DA' la participare
    attendingYes.addEventListener('change', function () {
        if (this.checked) {
            additionalQuestions.style.display = 'block';
            accommodationSection.style.display = 'block';
            companionsSection.style.display = 'block';
            childrenSection.style.display = 'block';
            guestsSection.style.display = 'block';
        }
    });

    // Afișează secțiunea de număr copii și meniuri dacă se selectează 'DA' la întrebarea despre copii
    document.querySelectorAll('input[name="children"]').forEach(function (elem) {
        elem.addEventListener('change', function () {
            if (this.value === 'yes') {
                childrenNumberSection.style.display = 'block';
                childrenMenuSection.style.display = 'block';
            } else {
                childrenNumberSection.style.display = 'none';
                childrenMenuSection.style.display = 'none';
            }
        });
    });

    // Afișează secțiunea corespunzătoare în funcție de răspunsul la întrebarea despre însoțitori
    document.querySelectorAll('input[name="companions"]').forEach(function (elem) {
        elem.addEventListener('change', function () {
            if (this.value === 'yes') {
                guestsSection.style.display = 'block';
                childrenSection.style.display = 'block';
            } else {
                guestsSection.style.display = 'none';
                childrenNumberSection.style.display = 'none';
                childrenMenuSection.style.display = 'none';
                childrenSection.style.display = 'none';
            }
        });
    });
});
