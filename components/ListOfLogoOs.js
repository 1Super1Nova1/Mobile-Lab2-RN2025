import Ionicons from "@expo/vector-icons/Ionicons";
import { Description } from "../styles/HomePageElement";

export default function ListOfLogoOs({item}) {
    var ElemsOsList = [];
    var descriptionOS = ' ';

    for (let i = 0; i < item.description.length; i++) {
        switch (item.description[i]) {
            case "Windows":
                ElemsOsList.push(
                    <Ionicons name="logo-windows" size={18} color={"#7B8D9D"}></Ionicons>
                );
                break;
            case "Mac":
                ElemsOsList.push(
                    <Ionicons name="logo-apple" size={18} color={"#7B8D9D"}></Ionicons>
                );
                break;
            default:
                ElemsOsList.push(
                    <Ionicons name="alert-circle-outline" size={18} color={"#7B8D9D"}></Ionicons>
                );
        }
    }

    for (let element of item.description) {
        if (item.description[item.description.length - 1] == element)
            descriptionOS += element;
        else
            descriptionOS += element + ", ";
    };
    ElemsOsList.push(<Description>{descriptionOS}</Description>);

    return ElemsOsList;
}