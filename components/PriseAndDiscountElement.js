import { View } from "react-native";
import {
    TextDiscountTovar, TextPriceTovar, TextPriceWithDiscoundTovar
}
    from "../styles/HomePageElement";

export default function PriseAndDiscountElement({ item }) {
    if (item.discount != '') {
        return (
            <>
                <TextPriceWithDiscoundTovar>${item.price}</TextPriceWithDiscoundTovar>
                <TextPriceTovar>${item.price * (item.discount / 100)}</TextPriceTovar>
                <TextDiscountTovar>-{item.discount}%</TextDiscountTovar>
            </>
        )
    }
    else
        return (
            <TextPriceTovar>${item.price}</TextPriceTovar>
        )
}