import { StyleSheet } from "react-native";
import { PressableButton, ButtonText } from "../styles/HomePageElement";


export default function PressableButtonContainer({ text }) {
    return (
        <PressableButton
            style={({ pressed }) => [
                pressed && styles.buttonPress
            ]}
        >
            <ButtonText>{text}</ButtonText>
        </PressableButton>
    );
}

const styles = StyleSheet.create({
    buttonPress: {
        backgroundColor: "#31BCFC"
    }
});