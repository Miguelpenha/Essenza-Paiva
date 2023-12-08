interface IPage {
    meta: {
        title: string
        description: string
    }
    alts: {
        logo: string
        main: string
        gallery: string[]
        complete: string
    }
    components: {
        header: {
            title: {
                bold: string
                lighter: string
            }
        }
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