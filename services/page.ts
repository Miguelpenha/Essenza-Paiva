import { IPage } from '../types'

const page: IPage = {
    meta: {
        title: 'Essenza Paiva: morar à beira-mar é só o começo.',
        description: 'Morar à beira-mar é só o começo'
    },
    alts: {
        header: 'Logos Empresas',
        main: 'Imagem Principal',
        gallery: ['Photo 1', 'Photo 2', 'Photo 3', 'Photo 4', 'Photo 5'],
        logo: 'Logo Maria de Jesus'
    },
    components: {
        main: {
            image: {
                title: 'Morar à beira-mar é só o começo.',
                subtitle: 'Exclusividade, conforto e segurança.'
            },
            form: {
                title: {
                    bold: 'Cadastre-se',
                    lighter: ' e fale com nossa equipe de vendas.'
                }
            },
            description: [
                'O Essenza é expressão viva nas belezas naturais do Paiva. O projeto traduz em linhas arquitetônicas a sensação de um caloroso abraço, convidando você a vivenciar o melhor que a vida pode oferecer.',
                'A cobertura na torre Anima redefine a experiência de exclusividade. Cada detalhe, da arquitetura até os acabamentos, é uma ode à elegância. É Rio Ave elevando a ideia de alto padrão, requinte e praticidade a novos patamares.'
            ],
            about: {
                title: {
                    normal: 'Cobertura 704, ',
                    highlighted: 'Torre Anima'
                },
                description: 'Só seus 244m2 já é um convite ao conforto. Com um terraço majestoso saudando o sol diariamente, a cobertura 704 personifica tudo que buscamos em um apartamento à beira-mar.',
                attributes: [
                    {
                        normal: 'Tamanho: ',
                        bold: '244²'
                    },
                    {
                        normal: 'Quartos: ',
                        bold: '4 suítes (sendo 01 suíte master com closet)'
                    },
                    {
                        normal: 'Sala para 3 ambientes com pé direito duplo'
                    },
                    {
                        normal: 'Cozinhas: ',
                        bold: 'Cozinha Gourmet integrada à sala e cozinha funcional para o dia a dia'
                    },
                    {
                        normal: 'Vagas de garagem: ',
                        bold: '4'
                    }
                ],
                price: {
                    normal: 'POR ',
                    bold: 'R$ 4.500.000'
                },
                button: {
                    text: 'Tenho interesse'
                }
            },
            register: {
                title: 'Vamos Juntos Nessa Jornada Excepcional',
                description: 'Seja parte deste capítulo único, onde a exclusividade encontra a natureza, e a sofisticação se mistura ao ambiente praiano. Clique agora para explorar mais sobre a cobertura na Torre Anima. Sua nova vida de luxo no Paiva começa aqui.',
                button: {
                    text: 'Cadastre-se'
                }
            }
        }
    }
}

export default page
