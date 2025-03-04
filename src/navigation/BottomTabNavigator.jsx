import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import ProfileScreen from "../screen/ProfileScreen";
import CreatePostsScreen from "../screen/CreatePostsScreen";
import PostsScreen from "../screen/PostsScreen";
import LogOutIcon from "../../assets/icons/LogOutIcon";
import GridIcon from "../../assets/icons/GridIcon";
import PlusIcon from "../../assets/icons/PlusIcon";
import UserIcon from "../../assets/icons/UserIcon";
import { useDispatch } from "react-redux";
import { logoutDB } from "../utils/auth";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const dispatch = useDispatch();

  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerRightContainerStyle: {
          paddingRight: 16,
          paddingVertical: 11,
        },
        headerLeftContainerStyle: {
          paddingLeft: 16,
          paddingVertical: 11,
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingHorizontal: "15%",
          paddingTop: 12,
          paddingBottom: 24,
          height: 76,
        },
      })}
    >
      <Tab.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={({ navigation }) => ({
          sceneStyle: { backgroundColor: "#fff" },
          title: "Публікації",
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                // navigation.replace("Login");
                logoutDB(dispatch);
              }}
            >
              <LogOutIcon />
            </TouchableOpacity>
          ),
          tabBarIcon: () => <GridIcon />,
        })}
      />
      <Tab.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={({ navigation }) => ({
          animation: "fade",
          tabBarIcon: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.replace("CreatePost");
              }}
              style={styles.plusButton}
            >
              <PlusIcon />
            </TouchableOpacity>
          ),
        })}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => <UserIcon />,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  plusButton: {
    backgroundColor: "#FF6C00",
    height: 40,
    width: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BottomTabNavigator;