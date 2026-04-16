// src/types/cv.ts
export type TemplateId =
    | 'classic-ats'
    | 'modern-clean'
    | 'sidebar-left'
    | 'minimal'
    | 'creative'
    | 'executive'
    | 'technical'
    | 'student'
    | 'hybrid-timeline';

export interface Experience {
    id?: string;
    position: string;
    company: string;
    dates: string;
    description: string;
}

export interface Education {
    id?: string;
    degree: string;
    school: string;
    dates: string;
}

export interface CVData {
    template: TemplateId;

    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    summary: string;

    experience?: Experience[];
    education?: Education[];
    skills?: string[];

    // NOWE POLA
    hobbies?: string[];           // Hobby / Zainteresowania
    additionalInfo?: string;      // Inne / Dodatkowe informacje
}

export const DEFAULT_CV_DATA: CVData = {
    template: 'modern-clean',

    name: 'Jan Kowalski',
    title: 'Frontend Developer',
    email: 'jan.kowalski@email.com',
    phone: '+48 123 456 789',
    location: 'Warszawa, Polska',
    summary: 'Doświadczony programista React z pasją do tworzenia nowoczesnych aplikacji webowych.',

    experience: [
        {
            id: '1',
            position: 'Senior Frontend Developer',
            company: 'TechFlow Sp. z o.o.',
            dates: '2023 - obecnie',
            description: 'Prowadzenie zespołu 4 developerów, wdrożenie nowego design systemu, optymalizacja wydajności aplikacji.',
        },
    ],

    education: [
        {
            id: '1',
            degree: 'Inżynier Informatyki',
            school: 'Politechnika Warszawska',
            dates: '2017 - 2021',
        },
    ],

    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Node.js', 'Git', 'Figma'],

    // NOWE POLA – przykładowe dane
    hobbies: ['Fotografia', 'Górskie wędrówki', 'Szachy', 'Programowanie w wolnym czasie'],
    additionalInfo: 'Prawo jazdy kat. B • Dostępny od zaraz • Chęć relokacji do Krakowa lub pracy zdalnej',
};