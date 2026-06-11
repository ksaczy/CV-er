import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import type { CVData } from '../types/cv';     // ← ważne: "import type"
import { DEFAULT_CV_DATA } from '../types/cv';

export const exportToPDF = async (cvData: CVData = DEFAULT_CV_DATA) => {
    const previewElement = document.getElementById('full-cv-preview');

    if (!previewElement) {
        alert('❌ Nie znaleziono podglądu CV. Najpierw otwórz "Podgląd".');
        return;
    }

    try {
        const canvas = await html2canvas(previewElement, {
            scale: 2,
            useCORS: true,
            backgroundColor: '#ffffff',
            logging: false,
        });

        const imgData = canvas.toDataURL('image/png');

        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4',
        });

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save(`CV-${cvData.name.replace(/\s+/g, '-')}.pdf`);

        alert('✅ CV zostało zapisane jako PDF!');
    } catch (error) {
        console.error(error);
        alert('❌ Błąd podczas generowania PDF. Spróbuj ponownie.');
    }
};