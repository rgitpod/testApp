export interface Sections {
    title: string
    path: string
}

export interface Index {
    title: string
    path: string
    sub?: boolean
}

const sections: Sections[] = [
    {
        title: 'Фонетика',
        path: 'phonetics'
    },
    {
        title: 'Морфология',
        path: 'morphology'
    },
    {
        title: 'Синтаксис',
        path: 'morphology'
    }
]


export default sections