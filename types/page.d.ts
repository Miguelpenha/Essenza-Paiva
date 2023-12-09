interface IPage {
    meta: {
        title: string
        description: string
    }
    alts: {
        header: string
        main: string
        gallery: string[]
        logo: string
    }
    components: {
        main: {
            form: {
                title: {
                    bold: string
                    lighter: string
                }
            }
            description: string[]
            about: {
                title: {
                    normal: string
                    highlighted: string
                }
                description: string
                attributes: { normal: string, bold: string }[]
                price: {
                    normal: string
                    bold: string
                }
                button: {
                    text: string
                }
            }
            register: {
                title: string
                description: string
                button: {
                    text: string
                }
            }
        }
    }
}

export default IPage