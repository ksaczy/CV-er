import { useTranslation } from 'react-i18next';
import { TEMPLATES } from '../../constants/templates';
import type { TemplateId } from '../../types/cv';

interface Props {
    selected: TemplateId;
    onSelect: (template: TemplateId) => void;
}

export default function TemplateSelector({ selected, onSelect }: Props) {
    const { t } = useTranslation();

    return (
        <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-slate-700">
                {t('builder.chooseTemplate')}
            </h3>
            <div className="grid grid-cols-3 gap-3">
                {TEMPLATES.map((template) => (
                    <button
                        key={template.id}
                        onClick={() => onSelect(template.id)}
                        className={`p-4 rounded-2xl border-2 transition-all text-left hover:shadow-md ${
                            selected === template.id
                                ? 'border-[#2563eb] bg-blue-50 shadow-sm'
                                : 'border-slate-200 hover:border-slate-300'
                        }`}
                    >
                        <div className="flex items-center gap-3">
                            <span className="text-3xl">{template.emoji}</span>
                            <div>
                                <div className="font-medium text-sm">
                                    {t(`templates.${template.id}`)}
                                </div>
                                <div className="text-xs text-slate-500">
                                    {t(`templates.${template.id}-desc`)}
                                </div>
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}