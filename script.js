document.getElementById('downloadPDF').addEventListener('click', function () {
    const element = document.getElementById('paySlip');

    // Configurações do html2pdf
    html2pdf().from(element).set({
        margin: [0, 0, 0, 0], // Margens ajustadas
        filename: 'CONTRACHEU.pdf',
        image: { type: 'jpeg', quality: 0.95 },
        html2canvas: { 
            scale: 0.9, // Diminui a escala para 0.7
            scrollX: 0, 
            scrollY: 0, 
            windowWidth: element.scrollWidth 
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' } // Mantendo a orientação horizontal
    }).save();
});
