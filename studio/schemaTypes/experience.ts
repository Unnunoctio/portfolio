import { defineField } from 'sanity'

export default {
    name: 'experience',
    title: 'Experiencia',
    type: 'document',
    fields: [
        defineField({
            name: 'code',
            title: 'Tipo',
            type: 'string',
            options: {
                list: [
                    { title: '🎓 Educación', value: 'education' },
                    { title: '💼 Trabajo', value: 'work' }
                ],
                layout: 'radio'
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'title',
            title: 'Título/Cargo',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'company',
            title: 'Empresa/Institución',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'startDate',
            title: 'Fecha de inicio',
            type: 'date',
            options: {
                dateFormat: 'YYYY-MM-DD'
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'endDate',
            title: 'Fecha de finalización',
            type: 'date',
            options: {
                dateFormat: 'YYYY-MM-DD'
            },
            description: 'Dejar en blanco si es actual'
        }),
        defineField({
            name: 'isCurrent',
            title: 'Posición actual',
            type: 'boolean',
            description: 'Marcar si esta experiencia se encuentra en curso',
            initialValue: false
        }),
        defineField({
            name: 'description',
            title: 'Descripción',
            type: 'text',
            rows: 4,
            description: 'Descripción de las responsabilidades y logros'
        }),
        defineField({
            name: 'certificate',
            title: 'Certificado',
            type: 'file',
            description: 'Sube el certificado o documento de respaldo (PDF recomendado)',
            options: {
                accept: '.pdf,.jpg,.jpeg,.png'
            }
        }),
        defineField({
            name: 'certificateUrl',
            title: 'URL del certificado',
            type: 'url',
            description: 'Alternativamente, puedes agregar un enlace externo al certificado'
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'company',
            code: 'code',
            startDate: 'startDate',
            endDate: 'endDate',
            current: 'current'
        },
        prepare({ title, subtitle, code, startDate, endDate, current }: any) {
            const icon = code === 'education' ? '🎓' : '💼'
            const start = new Date(startDate).getFullYear()
            const end = current || !endDate ? 'Actual' : new Date(endDate).getFullYear()
            const period = `${start} - ${end}`
        
            return {
                title: `${icon} ${title}`,
                subtitle: `${subtitle} | ${period}`,
                media: null
            }
        }
    },
    validation: (Rule: any) => Rule.custom((doc: any) => {
        if (doc.endDate && doc.startDate) {
            const start = new Date(doc.startDate)
            const end = new Date(doc.endDate)
            if (start > end) {
                return 'La fecha de término no puede ser anterior a la fecha de inicio'
            }
        }
        return true
    })
}