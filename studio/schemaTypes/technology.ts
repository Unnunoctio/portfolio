import { defineField } from "sanity";

export default {
    name: 'technology',
    title: 'Tecnologías',
    type: 'document',
    fields: [
        defineField({
            name: 'id',
            title: 'ID',
            type: 'slug',
            description: 'Identificador único de la tecnología (ej: js, react, etc).',
            options: {
                source: 'name',
                maxLength: 50,
                slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 50)
            },
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'name',
            title: 'Nombre',
            type: 'string',
            description: 'Nombre de la tecnología.',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'color',
            title: 'Color',
            type: 'string',
            description: 'Color hexadecimal para representar la tecnología.',
            validation: (Rule) => Rule.required().custom((color: string | undefined) => {
                if (!/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color as string)) {
                    return 'Debe ser un color hexadecimal válido (#000000)'
                }
                return true
            })
        }),
        defineField({
            name: 'category',
            title: 'Categoría',
            type: 'string',
            options: {
                list: [
                    { title: '💻 Lenguaje', value: 'language' },
                    { title: '🎨 Frontend', value: 'frontend' },
                    { title: '⚙️ Backend', value: 'backend' },
                    { title: '🗄️ Base de Datos', value: 'database' },
                    { title: '☁️ AWS', value: 'aws' },
                    { title: '🔧 Herramientas', value: 'tools' },
                    { title: '🌐 Otro Servicio', value: 'other' },
                ],
                layout: 'dropdown'
            },
            description: 'Categoría de la tecnología.',
            validation: (Rule) => Rule.required(),
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'category',
            color: 'color'
        },
        prepare({ title, subtitle, color }: any) {
            const categoryIcons = {
                language: '💻',
                frontend: '🎨',
                backend: '⚙️',
                database: '🗄️',
                aws: '☁️',
                tools: '🔧',
                other: '🌐'
            }
            
            const categoryNames = {
                language: 'Lenguaje',
                frontend: 'Frontend',
                backend: 'Backend',
                database: 'Base de Datos',
                aws: 'AWS',
                tools: 'Herramientas',
                other: 'Otro'
            }
            
            const categoryIcon = categoryIcons[subtitle as keyof typeof categoryIcons] || '🌐'
            const categoryName = categoryNames[subtitle as keyof typeof categoryNames] || 'Sin categoría'
            
            return {
                title: `${categoryIcon} ${title}`,
                subtitle: `${categoryName} - ${color}`,
                media: null,
            }
        }
    }
}