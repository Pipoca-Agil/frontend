import React from 'react'
import * as S from '../../styles/OurGuests/styled'

export interface IGuestCarousel {
    effectPhrase: string,
    episodeTitle: string,
    episodeNumber: string,
    guestName: string,
    guestPhoto: string
}

export default function OurGuests({guests} : {guests: IGuestCarousel[]}){
    const [currentGuest, setCurrentGuest] = React.useState<number>(0)
    const [inTransition, setInTransition] = React.useState<boolean>(true)

    const transform = () => {
        setInTransition(false)

        setTimeout(() => {
            setInTransition(true)
        }, 400)
    }
    
    const showNextGuest = () => {
        let nextGuest = 0

        if (currentGuest + 1 < guests.length) {
            nextGuest = currentGuest + 1
        }

        setCurrentGuest(nextGuest)
        transform()
    }

    const showPreviousGuest = () => {
        let previousGuest = guests.length-1

        if (currentGuest - 1 >= 0) {
            previousGuest = currentGuest - 1
        }

        setCurrentGuest(previousGuest)
        transform()
    }

    return (
        <S.Section>
            <S.Title>Nossos Convidados</S.Title>
            <S.Carousel>
                <S.LeftArrow onClick={showPreviousGuest}/>
                <S.MainInfo>
                    <S.GuestImage url={guests[currentGuest].guestPhoto} isActive={inTransition}/> 
                    <S.EpisodeGeneralInfo>
                        <S.QuotasDiv>
                            <S.LeftQuota isActive={inTransition}/>
                            <S.EffectPhrase isActive={inTransition}>{guests[currentGuest].effectPhrase}</S.EffectPhrase>
                            <S.RightQuota isActive={inTransition}/> 
                        </S.QuotasDiv>   
                        <S.BottomInformationDiv>
                            <S.EpisodeTitle>{guests[currentGuest].episodeTitle}</S.EpisodeTitle>
                            <S.EpisodeLightInformation>
                                <S.EpisodeInformation>{guests[currentGuest].episodeNumber}</S.EpisodeInformation>
                                <S.EpisodeInformation>{guests[currentGuest].guestName}</S.EpisodeInformation>
                            </S.EpisodeLightInformation>
                        </S.BottomInformationDiv>    
                    </S.EpisodeGeneralInfo>
                </S.MainInfo>
                <S.RightArrow onClick={showNextGuest}/>
            </S.Carousel>
            <S.SelectionButtons>
                {guests.map((guest, index) => {
                    return (<S.SelectionButton key={index} onClick={() => {setCurrentGuest(index); transform()}} isActive={(currentGuest === index)}/>)
                })}
            </S.SelectionButtons>
        </S.Section>
    )
}