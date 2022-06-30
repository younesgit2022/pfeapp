import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useFormik } from "formik";

import React, { useEffect, useState, useCallback } from "react";
import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import TextInput from "../../components/TextInput";

const API = "https://77b7-154-121-28-56.eu.ngrok.io";

const LoginScreen = ({ navigation }) => {
  const clearInput = useCallback(() => onChangeText(""), []); // sets value to empty string
  const [year, setYear] = useState();
  const [loading, setLoading] = useState(false);



  const { handleChange, handleSubmit, handleBlur, values, errors, touched } =
  useFormik({
    
    initialValues: { username: "", password: "" },
    onSubmit: values =>login(values.username, values.password),
  });


  useEffect(() => {
    AsyncStorage.getItem("authenticationToken", (err, result) => {
      if (result != null) {
        navigation.replace("Home");
      }
    });

  }, []);

  const login = (username, password) => {
    setLoading(true);

    if(username === 'user' && password=='user')navigation.replace("Home");
 /*    axios
      .post(`${API}` + "/oauth/token", {
        username,
        password,
      })
      .then(response => {
        console.log(response.data);
        AsyncStorage.setItem("authenticationToken", response.data.token);
        dispatch(setCred({ username, password }));
        setLoading(false);
        navigation.replace("Dashboard");
      })
      .catch(error => {
        setLoading(false);
        if (
          error.request.response ===
          "Mot de passe ou nom utilisateur incorrecte"
        ) {
          showToast("Matricule et mot de passe incorrect !");
        }
        if (error.request.response === "Network Error") {
          showToast("problème réseau réessayer plus tard !");
        }
      }); */
  };

  // Function to show error message
  function showToast(message) {
    ToastAndroid.show(message, ToastAndroid.LONG);
  }

  return (
    <View style={styles.mainBody}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{ alignItems: "center" }}>
              {/* <Image
                source={images.progres}
                style={{
                  width: "70%",
                  height: 120,
                  resizeMode: "cover",
                  margin: 30,
                }}
              /> */}
              
              <Text style={styles.portailText}>
               Application Djezzy
              </Text>
            </View>
            <View style={styles.SectionStyle}>
              <View
                style={{
                  marginBottom: 16,
                  width: "100%",
                }}
              >
                <TextInput
                  icon="user-alt"
                  placeholder={'entrer votre username'}
                  autoCapitalize="none"
                  returnKeyType="next"
                  returnKeyLabel="next"
                  onChangeText={handleChange("username")}
                  onBlur={handleBlur("username")}
                  error={errors.username}
                  touched={touched.username}
                  style={{
                    fontSize: 16,
                    marginRight: 15,
                    textAlign: "left",
                  }}
                />
              
              </View>
            </View>

            <View style={styles.SectionStyle}>
              <View
                style={{
                  marginBottom: 16,
                  width: "100%",
                }}
              >
                <TextInput
                  icon="key"
                  placeholder={'entrer votre mot de passe'}
                  onChangeText={handleChange("password")}
                  secureTextEntry
                  autoCompleteType="password"
                  autoCapitalize="none"
                  keyboardAppearance="dark"
                  returnKeyType="go"
                  returnKeyLabel="go"
                  onBlur={handleBlur("password")}
                  error={() => {
                    {
                      errors.password;
                    }
                  }}
                  touched={touched.password}
                  style={{
                    fontSize: 16,
                    marginRight: 15,
                    textAlign: "left",
                  }}
                />
             
              </View>
            </View>

            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmit}
            >
           
                <Text
                  style={[
                    styles.buttonTextStyle,
                    { fontFamily: "Roboto-Bold" },
                  ]}
                >
                  Connecter
                </Text>
              
            </TouchableOpacity>
            
            <Text
              style={
              styles.registerTextStyle
              }
            >
              UMBB
            </Text>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f61e44",
    alignContent: "center",
  },
  SectionStyle: {
    flexDirection: "row",
    height: 50,
    marginTop: 25,
    marginLeft: 35,
    marginRight: 35,
  },
  buttonStyle: {
    backgroundColor: "#FFFFFF",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#21A44A",
    height: 50,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 40,
    marginBottom: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTextStyle: {
    color:  "#f61e44",
    paddingVertical: 5,
    fontSize: 16,
  },
  inputStyle: {
    backgroundColor: "#eef2f3",
    flex: 1,
    height: 50,
    color: "black",
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#eef2f3",
    fontSize: 18,
  },
  registerTextStyle: {
    color: "white",

    textAlign: "center",
    fontWeight: "bold",
    fontSize: 10,
    alignSelf: "center",
    padding: 5,
  },
  registerTextStyleAr: {
    color: "white",

    textAlign: "center",
    fontFamily: "cairo-bold-700",
    fontSize: 12,
    alignSelf: "center",
    padding: 5,
  },
  portailText: {
    color: "white",

    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    alignSelf: "center",
    padding: 5,
  },
  portailTextAr: {
    color: "white",

    fontFamily: "cairo-bold-700",
    textAlign: "center",
    fontSize: 25,
    alignSelf: "center",
    padding: 5,
  },
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
  progicielText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "center",
    padding: 5,
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
    marginLeft: 35,
    fontWeight: "bold",
    fontFamily: "Roboto-Bold",
  },
});