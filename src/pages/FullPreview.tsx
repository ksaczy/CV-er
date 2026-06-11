import { useNavigate } from 'react-router-dom';
import CVPreview from '../components/cv/CVPreview';
import { DEFAULT_CV_DATA } from '../types/cv';
import { exportToPDF } from '../utils/exportPDF';   // ← import

export default function FullPreview() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-100 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Pasek narzędzi z DWOMA przyciskami */}
                <div className="flex justify-between items-center mb-8 bg-white p-5 rounded-3xl shadow-md">
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl font-medium transition"
                    >
                        ← Wróć do edycji
                    </button>

                    {/* DODATKOWY PRZYCISK EKSPORTU W PODGLĄDZIE */}
                    <button
                        onClick={() => exportToPDF()}
                        className="flex items-center gap-3 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-semibold transition shadow-lg"
                    >
                        📄 Eksportuj do PDF
                    </button>
                </div>

                {/* PODGLĄD A4 */}
                <div
                    id="full-cv-preview"
                    className="bg-white shadow-2xl mx-auto overflow-hidden border border-slate-200"
                    style={{ width: '210mm', minHeight: '297mm' }}
                >
                    <CVPreview data={DEFAULT_CV_DATA} />
                </div>

                <p className="text-center text-slate-400 text-sm mt-6">
                    Podgląd w formacie A4 • gotowy do druku
                </p>
            </div>
        </div>
    );
}