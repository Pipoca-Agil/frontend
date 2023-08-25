import React, { useEffect, useState } from "react";
import * as S from './styled'

const logos = ['/carousel/logo1.png', '/carousel/logo2.png', '/carousel/logo3.png', '/carousel/logo4.png', '/carousel/logo5.png', '/carousel/logo6.png', '/carousel/logo7.png']


export default function OurPartners() {
    const [currentItems, setCurrentItems] = useState<number[]>([0, 1, 2])
    const [onTransition, setOnTransition] = useState<boolean>(false)

    const changeItems = () => {
        setOnTransition(true)
        setTimeout(() => {
            setOnTransition(false)
        }, 400)

        let nextItem = 0
        const lastItem = currentItems.length-1
        if (currentItems[lastItem] + 1 < logos.length){
            nextItem = currentItems[lastItem]+1
        }

        const newCurrentItems = [nextItem, ...currentItems]
        newCurrentItems.pop()
        setCurrentItems(newCurrentItems)
    }

    useEffect(() => {
        setTimeout(() => {changeItems()}, 4000)
    }, [currentItems])

    return (
        <S.Wrapper>
            <S.Title>Nossos parceiros</S.Title>
            <S.Carousel>
                {currentItems.map((item, index) => {return (
                    <S.Logo key={index} url={logos[item]} onTransition={onTransition} />
                )})}
            </S.Carousel>
        </S.Wrapper>
    )
}