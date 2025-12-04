import { defineField } from "sanity";


export default {
    name: 'project',
    title: 'Proyectos',
    type: 'document',
    fields: [
        defineField({
            name: 'order',
            title: 'Orden',
            type: 'number',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'title',
            title: 'Título',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'isReady',
            title: 'Proyecto terminado',
            type: 'boolean',
            description: 'Indica si el proyecto está completo y listo para mostrar',
            initialValue: false
        }),
        defineField({
            name: 'description',
            title: 'Descripción',
            type: 'text',
            rows: 4
        }),
        defineField({
            name: 'skills',
            title: 'Tecnologías',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'technology' }]
                }
            ],
            description: 'Tecnologías utilizadas en el proyecto'
        }),
        defineField({
            name: 'repository',
            title: 'Repositorio',
            type: 'url',
            validation: (Rule) => Rule.uri({
                scheme: ['http', 'https']
            })
        }),
        defineField({
            name: 'website',
            title: 'Sitio web / Demo',
            type: 'url',
            description: 'URL del proyecto en producción',
            validation: (Rule) => Rule.uri({
                scheme: ['http', 'https']
            })
        }),
        defineField({
            name: 'githubId',
            title: 'Github Repository ID',
            type: 'string',
            description: 'ID del repositorio en Github'
        }),
        defineField({
            name: 'icon',
            title: 'Icono',
            type: 'image',
            description: 'Icono del proyecto (formato SVG)',
            options: {
                hotspot: true
            }
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
            description: 'Logo del proyecto (formato SVG o PNG)',
            options: {
                hotspot: true
            }
        }),
        defineField({
            name: 'preview',
            title: 'Preview',
            type: 'image',
            description: 'Captura o preview del proyecto',
            options: {
                hotspot: true
            }
        }),
        defineField({
            name: 'architecture',
            title: 'Diagrama de arquitectura',
            type: 'image',
            description: 'Diagrama de arquitectura del proyecto',
            options: {
                hotspot: true
            }
        }),
    ],
    preview: {
        select: {
            order: 'order',
            title: 'title',
            subtitle: 'description',
            media: 'icon',
            isReady: 'isReady',
            website: 'website'
        },
        prepare({ order, title, subtitle, media, isReady, website }: any) {
            const statusEmoji = isReady ? '✅' : '🚧'
            const websiteEmoji = website ? '🌐 ' : ''
            
            return {
                title: `${order}. ${statusEmoji} ${title}`,
                subtitle: `${websiteEmoji}${subtitle?.substring(0, 60)}...` || 'Sin descripción',
                media: media || null
            }
        }
    }
}