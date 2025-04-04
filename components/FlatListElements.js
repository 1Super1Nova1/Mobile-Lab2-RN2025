import randomElement from "../components/randomElement";
import ListOfLogoOs from "../components/ListOfLogoOs";
import PriseAndDiscountElement from "../components/PriseAndDiscountElement";

import {
    TextElement, HomeElement,
    ImageElement, IconOS, Title
}
    from "../styles/HomePageElement";


export const DATA = [];

for (let i = 1; i <= 25; i++) {
    DATA.push(randomElement(i-1));
}

export const loadMoreElements = () => {
    if (true) {
        let flag = DATA.length
        for (let i = flag + 1; i <= flag + 10; i++) {
            DATA.push(randomElement(i));
        }
    }
}


export const loadData = ({ item }) => {
    return (
        <HomeElement>
            <ImageElement source={item.image} />

            <TextElement>
                <Title>{item.title}</Title>
                <IconOS>
                    <ListOfLogoOs item={item} />
                </IconOS>
            </TextElement>
            <PriseAndDiscountElement item={item} />
        </HomeElement>
    )
}
