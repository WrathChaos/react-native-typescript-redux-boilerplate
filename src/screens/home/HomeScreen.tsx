import React, { useMemo } from "react";
import { View, FlatList, Image } from "react-native";
import { useTheme } from "@react-navigation/native";
import Icon from "react-native-dynamic-vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import * as NavigationService from "react-navigation-helpers";
import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import createStyles from "./HomeScreen.style";
import MockData from "./mock/MockData";
import CardItem from "./components/card-item/CardItem";
/**
 * ? Shared Imports
 */
import { SCREENS } from "@shared-constants";
import Text from "@shared-components/text-wrapper/TextWrapper";
import fonts from "@fonts";
import UserService from "./services/userService";

const profileURI =
  // eslint-disable-next-line max-len
  "https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80";

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  React.useEffect(() => {
    const mockUserData = {
      id: "301395-3150134",
      username: "FreakyCoder",
      fullname: "Kuray",
      email: "freakycoder@gmail.com",
      socialType: "google",
      creationDate: 1652631678000,
      photo: null,
    };
    UserService.setUserData(mockUserData);
  }, []);

  const handleItemPress = () => {
    NavigationService.push(SCREENS.DETAIL);
  };

  /* -------------------------------------------------------------------------- */
  /*                               Render Methods                               */
  /* -------------------------------------------------------------------------- */

  const renderMenuButton = () => (
    <RNBounceable>
      <Icon name="menu" type="Ionicons" color={colors.iconBlack} size={30} />
    </RNBounceable>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      {renderMenuButton()}
      <Image
        resizeMode="cover"
        source={{ uri: profileURI }}
        style={styles.profilePicImageStyle}
      />
    </View>
  );

  const renderList = () => (
    <View style={styles.listContainer}>
      <FlatList
        data={MockData}
        renderItem={({ item }) => (
          <CardItem data={item} onPress={handleItemPress} />
        )}
      />
    </View>
  );

  const renderWelcome = () => (
    <>
      <Text h1 bold color={colors.text}>
        Hello Kuray
      </Text>
      <Text
        fontFamily={fonts.montserrat.lightItalic}
        color={colors.placeholder}
      >
        Welcome Back
      </Text>
    </>
  );

  const renderContent = () => (
    <View style={styles.contentContainer}>
      {renderWelcome()}
      {renderList()}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderContent()}
    </SafeAreaView>
  );
};

export default HomeScreen;
