import { ExtendedTheme } from "@react-navigation/native";
import { ViewStyle, StyleSheet, TextStyle } from "react-native";
import { ScreenWidth } from "@freakycoder/react-native-helpers";

interface Style {
  container: ViewStyle;
  profileContainer: ViewStyle;
  profileDetailContainer: ViewStyle;
  cardStyle: ViewStyle;
  valueTextStyle: TextStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: "center",
      justifyContent: "center",
    },
    profileContainer: {
      marginTop: 32,
      alignItems: "center",
      justifyContent: "center",
    },
    profileDetailContainer: {
      marginTop: 16,
      width: ScreenWidth * 0.9,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
    },
    cardStyle: {
      minWidth: ScreenWidth * 0.4,
      height: 75,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.background,
      shadowRadius: 8,
      shadowOpacity: 0.3,
      shadowColor: "#757575",
      shadowOffset: {
        width: 0,
        height: 3,
      },
    },
    valueTextStyle: {
      marginTop: 8,
    },
  });
};
