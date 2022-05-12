import React from "react";
import { Image, Dimensions, View, FlatList } from "react-native";

let SCREEN_WIDTH = Dimensions.get("window").width;

const Data = [
  {
    id: 1,
    img: "https://www.zangochap.com/wp-content/uploads/2022/04/zangochap.png",
  },
  { id: 4, img: "https://www.zangochap.com/wp-content/uploads/2022/04/z2.png" },
];

const Item = ({ item }) => {
  return (
    <View accessible={true} style={{ marginLeft: 2, marginRight: 2 }}>
      <Image
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          height: 145,
          marginRight: 20,
          width: SCREEN_WIDTH - 70,
          marginTop: 10,
          borderRadius: 20,
        }}
        source={{
          uri: item.img,
        }}
      />
    </View>
  );
};

function HeaderImage() {
  return (
    <FlatList
      decelerationRate="fast"
      snapToInterval={SCREEN_WIDTH}
      data={Data}
      renderItem={Item}
      horizontal={true}
      numColumns={1}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

export default HeaderImage;
