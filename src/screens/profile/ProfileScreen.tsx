import React, { useMemo } from "react";
import { View } from "react-native";
import { useTheme } from "@react-navigation/native";
/**
 * ? Local Imports
 */
import createStyles from "./ProfileScreen.style";
import Text from "@shared-components/text-wrapper/TextWrapper";
import { useSelector } from "react-redux";
import { MainState } from "@services/redux/RootReducer";
import { IUser } from "@services/models";

interface ProfileScreenProps {}

const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  const userData = useSelector(
    (state: MainState) => state.user.userData as IUser,
  );

  return (
    <View style={styles.container}>
      <Text h1 color={colors.text}>
        Profile
      </Text>
      <Text>{userData.username}</Text>
      <Text>{userData.email}</Text>
    </View>
  );
};

export default ProfileScreen;
