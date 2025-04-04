export default function randomElement(index) {
    let element;
    let param = Math.floor(Math.random() * 4) + 1;
    switch (param) {
        case 1:
            element = {
                id: index,
                title: ' Grand Theft Auto V ',
                description: ['Windows'],
                price: 20,
                discount: "50",
                image: require('../assets/images/GTA.png')
            };
            break;
        case 2:
            element = {
                id: index,
                title: ' Factorio ',
                description: ['Windows', 'Mac'],
                price: 7,
                discount: "",
                image: require('../assets/images/factorio.png')
            };
            break;
        case 3:
            element = {
                id: index,
                title: ' Battlefield 4 ',
                description: ['Windows'],
                price: 35,
                discount: "",
                image: require('../assets/images/battle.png')
            };
            break;
        case 4:
            element = {
                id: index,
                title: ' Horizon Zero Dawn ',
                description: ['Windows'],
                price: 38,
                discount: "",
                image: require('../assets/images/horizon.png')
            };
            break;
        default:
            Alert.alert(param);
            element = {
                id: index,
                title: ' Title ',
                description: ' Description ',
                price: 0,
                discount: "",
                image: require('../assets/images/no-image.png')
            };
    }
    return element;
} 