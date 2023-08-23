import { IGuestCarousel } from '../components/OurGuests/index'

export default function GetGuests (): IGuestCarousel[] {
    const guests : IGuestCarousel[] = [
        {
            effectPhrase: "Para ser Scrum precisa colaborar e ser proativo",
            episodeTitle: "Começando a ser um Scrum Master",
            episodeNumber: "EPISÓDIO #439",
            guestName: "AKACIA PARK",
            guestPhoto: "/guests/akacia.svg"
        },
        {
            effectPhrase: "Software funcional é a principal medida de progresso",
            episodeTitle: "O Papel do Agilista Estratégico na resolução de problemas",
            episodeNumber: "EPISÓDIO #442",
            guestName: "ANA SILVA",
            guestPhoto: "/guests/ana-silva.svg"
        }
    ]

    return guests
}