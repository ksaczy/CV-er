import type { TemplateId } from '../types/cv';

export interface TemplateInfo {
    id: TemplateId;
    name: string;
    description: string;
    emoji: string;
}

export const TEMPLATES: TemplateInfo[] = [
    { id: 'classic-ats',       name: 'Klasyczny ATS',         description: 'Jednokolumnowy, maksymalna kompatybilność', emoji: '📄' },
    { id: 'modern-clean',      name: 'Nowoczesny Clean',      description: 'Świeży, profesjonalny wygląd', emoji: '✨' },
    { id: 'sidebar-left',      name: 'Dwukolumnowy Sidebar',  description: 'Lewa kolumna z danymi kontaktowymi', emoji: '⬅️' },
    { id: 'minimal',           name: 'Minimalistyczny',       description: 'Dużo przestrzeni, elegancja', emoji: '⬜' },
    { id: 'creative',          name: 'Kreatywny z ikonami',   description: 'Dla designerów i marketingu', emoji: '🎨' },
    { id: 'executive',         name: 'Executive / Premium',   description: 'Dla managerów i C-level', emoji: '👔' },
    { id: 'technical',         name: 'Techniczny IT',         description: 'Dużo umiejętności i projektów', emoji: '💻' },
    { id: 'student',           name: 'Student / Entry-Level', description: 'Mocny nacisk na edukację', emoji: '🎓' },
    { id: 'hybrid-timeline',   name: 'Hybrid + Timeline',     description: 'Mieszany + linia czasu', emoji: '📈' },
];