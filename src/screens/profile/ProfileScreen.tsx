import React, { useMemo } from "react";
import { View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { useSelector } from "react-redux";
/**
 * ? Local Imports
 */
import createStyles from "./ProfileScreen.style";
import Text from "@shared-components/text-wrapper/TextWrapper";
import { MainState } from "@services/redux/RootReducer";
import { IUser } from "@services/models";
import { capitalizeFirstLetter } from "@utils";

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
      <Text h6>Data is coming from redux itself</Text>
      <View style={styles.profileContainer}>
        <View style={styles.profileDetailContainer}>
          <View style={styles.cardStyle}>
            <Text h5>User name</Text>
            <Text h3 bold style={styles.valueTextStyle}>
              {userData.username}
            </Text>
          </View>
          <View style={styles.cardStyle}>
            <Text h5>Email</Text>
            <Text h6 bold style={styles.valueTextStyle}>
              {userData.email}
            </Text>
          </View>
        </View>
        <View style={styles.profileDetailContainer}>
          <View style={styles.cardStyle}>
            <Text h5>Full name</Text>
            <Text h3 bold style={styles.valueTextStyle}>
              {userData.fullname}
            </Text>
          </View>
          <View style={styles.cardStyle}>
            <Text h5>Social Type</Text>
            <Text h3 bold style={styles.valueTextStyle}>
              {capitalizeFirstLetter(userData.socialType)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
