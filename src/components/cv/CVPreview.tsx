// src/components/cv/CVPreview.tsx
import type { CVData } from '../../types/cv';

interface Props {
    data: CVData;
}

export default function CVPreview({ data }: Props) {
    const getTemplateClass = () => {
        switch (data.template) {
            case 'classic-ats': return 'classic-template';
            case 'sidebar-left': return 'sidebar-template';
            case 'minimal': return 'minimal-template';
            case 'creative': return 'creative-template';
            case 'executive': return 'executive-template';
            case 'technical': return 'technical-template';
            case 'student': return 'student-template';
            case 'hybrid-timeline': return 'hybrid-template';
            default: return 'modern-template';
        }
    };

    return (
        <div id="cv-preview-container" className={`cv-preview-container ${getTemplateClass()}`}>
            <div className="cv-content">
                {/* === NAGŁÓWEK === */}
                <h1 className="text-4xl font-bold text-slate-900">{data.name}</h1>
                <p className="text-xl text-blue-600 font-medium">{data.title}</p>
                <p className="text-sm text-slate-600 mt-1">
                    {data.email} • {data.phone} • {data.location}
                </p>

                {/* === O MNIE === */}
                <h3 className="mt-8 text-lg font-semibold border-b pb-1 border-slate-300">O mnie</h3>
                <p className="mt-3 text-slate-700 leading-relaxed">{data.summary}</p>

                {/* === DOŚWIADCZENIE === */}
                {data.experience && data.experience.length > 0 && (
                    <>
                        <h3 className="mt-8 text-lg font-semibold border-b pb-1 border-slate-300">Doświadczenie zawodowe</h3>
                        <div className="mt-4 space-y-6">
                            {data.experience.map((exp) => (
                                <div key={exp.id} className="relative">
                                    <div className="flex justify-between">
                                        <div>
                                            <p className="font-semibold text-slate-900">{exp.position}</p>
                                            <p className="text-slate-600">{exp.company}</p>
                                        </div>
                                        <p className="text-sm text-slate-500 whitespace-nowrap">{exp.dates}</p>
                                    </div>
                                    <p className="mt-2 text-slate-700 text-[15px] leading-relaxed">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {/* === WYKSZTAŁCENIE === */}
                {data.education && data.education.length > 0 && (
                    <>
                        <h3 className="mt-8 text-lg font-semibold border-b pb-1 border-slate-300">Wykształcenie</h3>
                        <div className="mt-4 space-y-4">
                            {data.education.map((edu) => (
                                <div key={edu.id} className="flex justify-between">
                                    <div>
                                        <p className="font-medium text-slate-900">{edu.degree}</p>
                                        <p className="text-slate-600">{edu.school}</p>
                                    </div>
                                    <p className="text-sm text-slate-500">{edu.dates}</p>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {/* === UMIEJĘTNOŚCI === */}
                {data.skills && data.skills.length > 0 && (
                    <>
                        <h3 className="mt-8 text-lg font-semibold border-b pb-1 border-slate-300">Umiejętności</h3>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {data.skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-1.5 bg-slate-100 text-slate-700 text-sm rounded-2xl font-medium"
                                >
                  {skill}
                </span>
                            ))}
                        </div>
                    </>
                )}

                {/* Placeholder na przyszłość */}
                {(!data.experience || data.experience.length === 0) &&
                    (!data.education || data.education.length === 0) &&
                    (!data.skills || data.skills.length === 0) && (
                        <div className="mt-10 text-xs text-slate-400 bg-slate-100 p-4 rounded-xl">
                            Szablon: <strong className="text-slate-600">{data.template}</strong>
                            <br />
                            [Tutaj pojawią się pełne sekcje CV]
                        </div>
                    )}

                {/* ==================== HOBBY ==================== */}
                {data.hobbies && data.hobbies.length > 0 && (
                    <>
                        <h3 className="mt-8 text-lg font-semibold border-b pb-1 border-slate-300">Zainteresowania</h3>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {data.hobbies.map((hobby, i) => (
                                <span key={i} className="px-4 py-1.5 bg-emerald-100 text-emerald-700 text-sm rounded-2xl">
                  {hobby}
                </span>
                            ))}
                        </div>
                    </>
                )}

                {/* ==================== DODATKOWE INFORMACJE ==================== */}
                {data.additionalInfo && (
                    <>
                        <h3 className="mt-8 text-lg font-semibold border-b pb-1 border-slate-300">Dodatkowe informacje</h3>
                        <p className="mt-3 text-slate-700 leading-relaxed">{data.additionalInfo}</p>
                    </>
                )}
            </div>
        </div>
    );
}