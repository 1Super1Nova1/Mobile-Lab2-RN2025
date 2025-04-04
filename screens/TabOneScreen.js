import { StatusBar, FlatList, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from 'expo-linear-gradient'

import {
  Container, TextPrice, IconLogos, DescriptionImage, ButtonContainer,
  BigImage, ImageBlock, TextDiscount, TextPriceWithDiscound, TitleImage
}
  from "../styles/HomePageElement";
import { DATA, loadData, loadMoreElements } from "../components/FlatListElements";
import PressableButtonContainer from "../components/PressableButtonContainer";


export default function TabOneScreen() {
  return (
    <Container>
      <StatusBar barStyle={"light-content"} />
      <ImageBlock>
        <BigImage source={require('../assets/images/dbd.png')} />
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.9)']}
          style={styles.imageBlockOpacity}
        />
        <TitleImage>Dead by Daylight</TitleImage>
        <DescriptionImage>Recommended by your friend, Player</DescriptionImage>
        <TextDiscount>–70%</TextDiscount>
        <TextPrice>$18</TextPrice>
        <TextPriceWithDiscound>$5</TextPriceWithDiscound>
        <IconLogos>
          <Ionicons name="logo-windows" size={20} color={"#AFAFAF"}></Ionicons>
        </IconLogos>
      </ImageBlock>

      <ButtonContainer horizontal={true}>
        <PressableButtonContainer text="Top Sellers" />
        <PressableButtonContainer text="Free to play" />
        <PressableButtonContainer text="Early Access" />
        <PressableButtonContainer text="Action" />
      </ButtonContainer>

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={loadData}
        onEndReached={loadMoreElements}
        onEndReachedThreshold={0.5}
      />

    </Container>
  );
}


const styles = StyleSheet.create({
  imageBlockOpacity: {
    position: "absolute",
    bottom: 0,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    width: 320,
    height: 135,
  }
});
