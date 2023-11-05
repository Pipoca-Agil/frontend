import { IGuestCarousel } from '../components/OurGuests/index'

export default function GetGuests (): IGuestCarousel[] {
    const guests : IGuestCarousel[] = [
        {
            effectPhrase: "Se eu não estou feliz coloco a minha equipe em risco, busque o propósito de sua felicidade, esse  o seu principal risco que você estará gerindo.",
            episodeTitle: "Começando a ser um Scrum Master",
            episodeNumber: "EPISÓDIO #348",
            guestName: "LUCILLIANE RIBEIRO",
            guestPhoto: "/guests/lucilliane-ribeiro.svg"
        },
        {
            effectPhrase: "Software funcional é a principal medida de progresso.",
            episodeTitle: "O Papel do Agilista Estratégico na resolução de problemas",
            episodeNumber: "EPISÓDIO #442",
            guestName: "ANA SILVA",
            guestPhoto: "/guests/ana-silva.svg"
        },
        {
            effectPhrase: "Para ser Scrum precisa colaborar e ser proativo.",
            episodeTitle: "Começando a ser um Scrum Master",
            episodeNumber: "EPISÓDIO #439",
            guestName: "AKACIA PARK",
            guestPhoto: "/guests/akacia-park.svg"
        },
        {
            effectPhrase: "Estude a área de atuação e a empresa que você está querendo trabalhar.",
            episodeTitle: "Transição de Carreira- Gerente de Projetos em transição para Scrum Master",
            episodeNumber: "EPISÓDIO #336",
            guestName: "PRISCILA CATTONI",
            guestPhoto: "/guests/priscila-cattoni.svg"
        },
        {
            effectPhrase: "Responder as mudanças de forma positiva.",
            episodeTitle: "Encontro Ágil com Carlos Alexandre M Junior - Digital Product Manager",
            episodeNumber: "EPISÓDIO #339",
            guestName: "Carlos Alexandre M.Junior",
            guestPhoto: "/guests/carlos-alexandre.svg"
        }
    ]

    return guests
}