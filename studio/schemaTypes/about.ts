import { defineField } from "sanity";

export default {
    name: 'about',
    title: 'Sobre Mi',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Titulo',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'subtitles',
            title: 'Subtitulos',
            type: 'array',
            of: [
                {
                    type: 'string'
                }
            ],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'avatar',
            title: 'Avatar',
            type: 'image',
            options: {
                hotspot: true
            },
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'description',
            title: 'Descripción',
            type: 'text',
            rows: 4
        }),
        defineField({
            name: 'github',
            title: 'Github',
            type: 'url',
            validation: (Rule) => Rule.required().uri({
                scheme: ['http', 'https']
            })
        }),
        defineField({
            name: 'linkedin',
            title: 'LinkedIn',
            type: 'url',
            validation: (Rule) => Rule.required().uri({
                scheme: ['http', 'https']
            })
        }),
        defineField({
            name: 'cv',
            title: 'CV',
            type: 'file',
            description: 'Sube CV en formato PDF.',
            options: {
                accept: '.pdf'
            },
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'contactEmail',
            title: 'Email de Contacto',
            type: 'email',
            validation: (Rule) => Rule.required()
        })
    ]
}