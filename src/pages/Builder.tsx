// src/pages/Builder.tsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { CVData, Experience, Education } from '../types/cv';
import { DEFAULT_CV_DATA } from '../types/cv';
import TemplateSelector from '../components/cv/TemplateSelector';
import CVPreview from '../components/cv/CVPreview';

function Builder() {
    const { t } = useTranslation();
    const [cvData, setCvData] = useState<CVData>(DEFAULT_CV_DATA);

    const updateCV = <K extends keyof CVData>(field: K, value: CVData[K]) => {
        setCvData(prev => ({ ...prev, [field]: value }));
    };

    // ==================== ZDJECIE ====================
    const handlePhotoUpload = (file: File) => {
  const reader = new FileReader();
  reader.onloadend = () => {
    updateCV('photo', reader.result as string);
  };
  reader.readAsDataURL(file);
};

    // ==================== EXPERIENCE ====================
    const addExperience = () => {
        const newExp: Experience = {
            id: Date.now().toString(),
            position: '',
            company: '',
            dates: '',
            description: '',
        };
        updateCV('experience', [...(cvData.experience || []), newExp]);
    };

    const updateExperience = (index: number, field: keyof Experience, value: string) => {
        const current = cvData.experience || [];
        const updated = current.map((exp, i) =>
            i === index ? { ...exp, [field]: value } : exp
        );
        updateCV('experience', updated);
    };

    const removeExperience = (index: number) => {
        const updated = (cvData.experience || []).filter((_, i) => i !== index);
        updateCV('experience', updated);
    };

    // ==================== EDUCATION ====================
    const addEducation = () => {
        const newEdu: Education = {
            id: Date.now().toString(),
            degree: '',
            school: '',
            dates: '',
        };
        updateCV('education', [...(cvData.education || []), newEdu]);
    };

    const updateEducation = (index: number, field: keyof Education, value: string) => {
        const current = cvData.education || [];
        const updated = current.map((edu, i) =>
            i === index ? { ...edu, [field]: value } : edu
        );
        updateCV('education', updated);
    };

    const removeEducation = (index: number) => {
        const updated = (cvData.education || []).filter((_, i) => i !== index);
        updateCV('education', updated);
    };

    // ==================== SKILLS ====================
    const addSkill = (skill: string) => {
        if (!skill.trim()) return;
        const current = cvData.skills || [];
        if (!current.includes(skill.trim())) {
            updateCV('skills', [...current, skill.trim()]);
        }
    };

    const removeSkill = (skillToRemove: string) => {
        updateCV('skills', (cvData.skills || []).filter(s => s !== skillToRemove));
    };

    // ==================== HOBBIES ====================
    const addHobby = (hobby: string) => {
        if (!hobby.trim()) return;
        const current = cvData.hobbies || [];
        if (!current.includes(hobby.trim())) {
            updateCV('hobbies', [...current, hobby.trim()]);
        }
    };

    const removeHobby = (hobbyToRemove: string) => {
        updateCV('hobbies', (cvData.hobbies || []).filter(h => h !== hobbyToRemove));
    };

    return (
        <div className="main-content">
            <div className="form-panel">
                <h2>{t('builder.title')}</h2>

                <TemplateSelector
                    selected={cvData.template}
                    onSelect={(template) => updateCV('template', template)}
                />

                <label>Zdjęcie</label>
                <input
                type="file"
                accept="image/*"
                onChange={e => {
                    if (e.target.files?.[0]) {
                    handlePhotoUpload(e.target.files[0]);
                    }
                }}
                />

                <label>{t('form.name')}</label>
                <input value={cvData.name} onChange={e => updateCV('name', e.target.value)} />

                <label>{t('form.title')}</label>
                <input value={cvData.title} onChange={e => updateCV('title', e.target.value)} />

                <label>{t('form.email')}</label>
                <input value={cvData.email} onChange={e => updateCV('email', e.target.value)} />

                <label>{t('form.phone')}</label>
                <input value={cvData.phone} onChange={e => updateCV('phone', e.target.value)} />

                <label>{t('form.location')}</label>
                <input value={cvData.location} onChange={e => updateCV('location', e.target.value)} />

                <label>{t('form.summary')}</label>
                <textarea value={cvData.summary} onChange={e => updateCV('summary', e.target.value)} rows={4} />

                {/* ==================== DOŚWIADCZENIE ==================== */}
                <h3 className="mt-8 mb-3 text-lg font-semibold">Doświadczenie zawodowe</h3>
                {(cvData.experience || []).map((exp, index) => (
                    <div key={exp.id} className="mb-6 p-4 border border-slate-200 rounded-xl">
                        <input placeholder="Stanowisko" value={exp.position} onChange={e => updateExperience(index, 'position', e.target.value)} className="w-full mb-2" />
                        <input placeholder="Firma" value={exp.company} onChange={e => updateExperience(index, 'company', e.target.value)} className="w-full mb-2" />
                        <input placeholder="Okres (np. 2023 - obecnie)" value={exp.dates} onChange={e => updateExperience(index, 'dates', e.target.value)} className="w-full mb-2" />
                        <textarea placeholder="Opis" value={exp.description} onChange={e => updateExperience(index, 'description', e.target.value)} rows={3} />
                        <button onClick={() => removeExperience(index)} className="text-red-500 text-sm mt-2">Usuń doświadczenie</button>
                    </div>
                ))}
                <button onClick={addExperience} className="text-blue-600 text-sm font-medium">+ Dodaj doświadczenie</button>

                {/* ==================== WYKSZTAŁCENIE ==================== */}
                <h3 className="mt-8 mb-3 text-lg font-semibold">Wykształcenie</h3>
                {(cvData.education || []).map((edu, index) => (
                    <div key={edu.id} className="mb-6 p-4 border border-slate-200 rounded-xl">
                        <input placeholder="Kierunek / Stopień" value={edu.degree} onChange={e => updateEducation(index, 'degree', e.target.value)} className="w-full mb-2" />
                        <input placeholder="Uczelnia" value={edu.school} onChange={e => updateEducation(index, 'school', e.target.value)} className="w-full mb-2" />
                        <input placeholder="Okres" value={edu.dates} onChange={e => updateEducation(index, 'dates', e.target.value)} className="w-full" />
                        <button onClick={() => removeEducation(index)} className="text-red-500 text-sm mt-2">Usuń wykształcenie</button>
                    </div>
                ))}
                <button onClick={addEducation} className="text-blue-600 text-sm font-medium">+ Dodaj wykształcenie</button>

                {/* ==================== UMIEJĘTNOŚCI ==================== */}
                <h3 className="mt-8 mb-3 text-lg font-semibold">Umiejętności</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                    {(cvData.skills || []).map(skill => (
                        <span key={skill} className="px-4 py-1 bg-blue-100 text-blue-700 rounded-2xl text-sm flex items-center gap-1">
              {skill}
                            <button onClick={() => removeSkill(skill)} className="text-blue-400 hover:text-red-500">×</button>
            </span>
                    ))}
                </div>
                <input placeholder="Nowa umiejętność + Enter" onKeyDown={e => { if (e.key === 'Enter') { addSkill(e.currentTarget.value); e.currentTarget.value = ''; } }} className="w-full" />

                {/* ==================== HOBBY ==================== */}
                <h3 className="mt-8 mb-3 text-lg font-semibold">Zainteresowania / Hobby</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                    {(cvData.hobbies || []).map(hobby => (
                        <span key={hobby} className="px-4 py-1 bg-emerald-100 text-emerald-700 rounded-2xl text-sm flex items-center gap-1">
              {hobby}
                            <button onClick={() => removeHobby(hobby)} className="text-emerald-400 hover:text-red-500">×</button>
            </span>
                    ))}
                </div>
                <input placeholder="Nowe hobby + Enter" onKeyDown={e => { if (e.key === 'Enter') { addHobby(e.currentTarget.value); e.currentTarget.value = ''; } }} className="w-full" />

                {/* ==================== DODATKOWE INFORMACJE ==================== */}
                <h3 className="mt-8 mb-3 text-lg font-semibold">Dodatkowe informacje</h3>
                <textarea
                    placeholder="Prawo jazdy, dostępność, relokacja, etc."
                    value={cvData.additionalInfo || ''}
                    onChange={e => updateCV('additionalInfo', e.target.value)}
                    rows={3}
                />
            </div>

            {/* PREVIEW */}
                <div className="preview-panel">
                <div className="cv-preview-wrapper">
                <CVPreview data={cvData} />
            </div>
            </div>
        </div>
    );
}

export default Builder;