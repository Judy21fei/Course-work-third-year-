import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

export default function HomeScreen({ navigation }) {
  const [fontScale, setFontScale] = useState(0);
  const [isHighContrast, setIsHighContrast] = useState(false);

  const increaseFont = () => setFontScale((p) => (p < 4 ? p + 2 : p));
  const decreaseFont = () => setFontScale((p) => (p > -4 ? p - 2 : p));
  const toggleContrast = () => setIsHighContrast((prev) => !prev);

  const fs = (size) => size + fontScale; //Тема для нормального та контрастного режимів

  const theme = {
    background: isHighContrast ? "#F2F2F2" : "#FFFFFF",
    text: isHighContrast ? "#000000" : "#000000",
    subText: isHighContrast ? "#1A1A1A" : "#101828",
    headerBg: isHighContrast ? "#2D2D2D" : "#000000",
    headerBorder: isHighContrast ? "#007ACC" : "#FDC700",
    cardBg: isHighContrast ? "#FFFFFF" : "#FFFFFF",
    buttonBg: isHighContrast ? "#007ACC" : "#000000",
    buttonText: isHighContrast ? "#FFFFFF" : "#FFFFFF",
    border: isHighContrast ? "#007ACC" : "#000000",
    contrastIconTint: isHighContrast ? "#007ACC" : "#FFFFFF",
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* --- Scrollable Content --- */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text
          style={[styles.welcomeText, { fontSize: fs(32), color: theme.text }]}
        >
          Welcome to AccessibleHub
        </Text>
        <Text
          style={[
            styles.welcomeDescription,
            { fontSize: fs(18), color: theme.subText },
          ]}
        >
          We believe everyone deserves equal access to information and services.
          Our platform is designed with accessibility at its core, ensuring a
          comfortable experience for all users, including those with vision
          impairments.
        </Text>
        <TouchableOpacity
          style={[styles.exploreButton, { backgroundColor: theme.buttonBg }]}
          onPress={() => navigation.navigate("Services")}
        >
          <Text
            style={[
              styles.exploreButtonText,
              { fontSize: fs(18), color: theme.buttonText },
            ]}
          >
            Explore Services
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.learnMoreButton, { borderColor: theme.border }]}
          onPress={() => navigation.navigate("About")}
        >
          <Text
            style={[
              styles.learnMoreText,
              { fontSize: fs(18), color: theme.text },
            ]}
          >
            Learn More
          </Text>
        </TouchableOpacity>
        <View style={[styles.heroImageWrapper, { borderColor: theme.border }]}>
          <Image
            source={require("../assets/images/hero.jpg")}
            style={styles.heroImage}
            resizeMode="cover"
          />
        </View>
        {/* --- Accessible Services Section --- */}
        <View
          style={[
            styles.accessibleServicesWrapper,
            { backgroundColor: isHighContrast ? "#E6E6E6" : "#F3F4F6" },
          ]}
        >
          <Text
            style={[
              styles.accessibleServicesTitle,
              { fontSize: fs(32), color: theme.text },
            ]}
          >
            Our Services
          </Text>
          {/* Card 1 */}
          <View style={[styles.serviceCard, { borderColor: theme.border }]}>
            <View
              style={[
                styles.accessibleServicesContainer,
                { backgroundColor: theme.headerBg },
              ]}
            >
              <Image
                source={require("../assets/images/icon_eye.png")}
                style={styles.cardIcon}
              />
            </View>
            <Text
              style={[
                styles.cardTitle,
                { fontSize: fs(20), color: theme.text },
              ]}
            >
              Accessible Design
            </Text>
            <Text
              style={[
                styles.cardDescription,
                { fontSize: fs(18), color: theme.subText },
              ]}
            >
              We create inclusive design solutions that ensure everyone can use
              digital products comfortably.
            </Text>
          </View>
          {/* Card 2 */}
          <View style={[styles.serviceCard, { borderColor: theme.border }]}>
            <View
              style={[
                styles.accessibleServicesContainer,
                { backgroundColor: theme.headerBg },
              ]}
            >
              <Image
                source={require("../assets/images/icon_book.png")}
                style={styles.cardIcon}
              />
            </View>

            <Text
              style={[
                styles.cardTitle,
                { fontSize: fs(20), color: theme.text },
              ]}
            >
              Assistive Tools
            </Text>

            <Text
              style={[
                styles.cardDescription,
                { fontSize: fs(18), color: theme.subText },
              ]}
            >
              Discover technology that empowers users with vision or hearing
              difficulties.
            </Text>
          </View>
          {/* Card 3 */}
          <View style={[styles.serviceCard, { borderColor: theme.border }]}>
            <View
              style={[
                styles.accessibleServicesContainer,
                { backgroundColor: theme.headerBg },
              ]}
            >
              <Image
                source={require("../assets/images/icon_headphones.png")}
                style={styles.cardIcon}
              />
            </View>

            <Text
              style={[
                styles.cardTitle,
                { fontSize: fs(20), color: theme.text },
              ]}
            >
              Inclusive Training
            </Text>

            <Text
              style={[
                styles.cardDescription,
                { fontSize: fs(18), color: theme.subText },
              ]}
            >
              Learn how to design accessible digital experiences with our
              step-by-step guides.
            </Text>
          </View>
        </View>
        {/* --- Available Resources Section --- */}
        <View
          style={[
            styles.availableResourcesWrapper,
            { backgroundColor: theme.background },
          ]}
        >
          <Text
            style={[
              styles.availableResourcesTitle,
              { fontSize: fs(30), color: theme.text },
            ]}
          >
            Available Resources
          </Text>
          {["resource1", "resource2", "resource3"].map((res, i) => (
            <View
              key={i}
              style={[styles.resourceCard, { borderColor: theme.border }]}
            >
              <Image
                source={
                  res === "resource1"
                    ? require("../assets/images/resource1.jpg")
                    : res === "resource2"
                    ? require("../assets/images/resource2.jpg")
                    : require("../assets/images/resource3.jpg")
                }
                style={styles.resourceImage}
              />
              <Text
                style={[
                  styles.resourceTitle,
                  { fontSize: fs(20), color: theme.text },
                ]}
              >
                {res === "resource1"
                  ? "Accessibility Guides"
                  : res === "resource2"
                  ? "Training Programs"
                  : "Community Forums"}
              </Text>

              <Text
                style={[
                  styles.resourceDescription,
                  { fontSize: fs(18), color: theme.subText },
                ]}
              >
                {res === "resource1"
                  ? "Comprehensive guides on using assistive technologies and navigating digital content effectively."
                  : res === "resource2"
                  ? "Free training programs for learning new skills with accessible materials and personalized instruction."
                  : "Connect with others, share experiences, and find support in our accessible community forums."}
              </Text>

              <TouchableOpacity
                style={[
                  styles.learnMoreResourceButton,
                  { backgroundColor: theme.buttonBg },
                ]}
                onPress={() => navigation.navigate("About")}
              >
                <Text
                  style={[
                    styles.learnMoreResourceButtonText,
                    { fontSize: fs(18), color: theme.buttonText },
                  ]}
                >
                  Learn More
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* --- FIXED HEADER --- */}

      <SafeAreaView style={styles.fixedHeaderWrapper}>
        <View
          style={[
            styles.accessibleHeaderFixed, // Новий стиль для фіксації
            {
              backgroundColor: theme.headerBg,
              borderBottomColor: theme.headerBorder,
            },
          ]}
        >
          <TouchableOpacity style={styles.minusButton} onPress={decreaseFont}>
            <Image
              source={require("../assets/images/icon_loop_minus.png")}
              style={styles.icon}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.plusButton} onPress={increaseFont}>
            <Image
              source={require("../assets/images/icon_loop_plus.png")}
              style={styles.icon}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.contrastButton}
            onPress={toggleContrast}
          >
            <Image
              source={require("../assets/images/icon_contrast.png")}
              style={[
                styles.contrastIcon,
                { tintColor: theme.contrastIconTint },
              ]}
            />
            <Text style={styles.contrastText}>Contrast</Text>
          </TouchableOpacity>

          <Text style={[styles.headerTitle, { fontSize: fs(24) }]}>
            AccessibleHub
          </Text>

          <Text style={[styles.headerSubtitle, { fontSize: fs(16) }]}>
            Resources for Everyone
          </Text>

          <View style={styles.menuButton}>
            <Image
              source={require("../assets/images/icon_menu.png")}
              style={styles.menuIcon}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

/* --- Styles  --- */
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fixedHeaderWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  accessibleHeaderFixed: {
    width: "100%",
    height: 153,
    borderBottomWidth: 4,
  },

  minusButton: {
    position: "absolute",
    top: 12,
    left: 95,
    width: 60,
    height: 46,
    backgroundColor: "#1E2939",
    borderColor: "#FFFFFF",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  plusButton: {
    position: "absolute",
    top: 12,
    left: 163,
    width: 60,
    height: 46,
    backgroundColor: "#1E2939",
    borderColor: "#FFFFFF",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  contrastButton: {
    position: "absolute",
    top: 12,
    left: 231,
    width: 128,
    height: 46,
    backgroundColor: "#1E2939",
    borderColor: "#FFFFFF",
    borderWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16,
  },
  contrastIcon: { width: 20, height: 20, marginRight: 8 },
  contrastText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "Arial",
  },
  icon: { width: 20, height: 20 },
  headerTitle: {
    position: "absolute",
    top: 83,
    left: 16,
    color: "#FFFFFF",
    fontFamily: "Arial",
  },
  headerSubtitle: {
    position: "absolute",
    top: 117,
    left: 16,
    color: "#D1D5DC",
    fontFamily: "Arial",
  },
  menuButton: {
    position: "absolute",
    top: 88,
    left: 315,
    width: 44,
    height: 44,
    borderColor: "#FFFFFF",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  menuIcon: { width: 24, height: 24, tintColor: "#FFFFFF" },
  content: {
    paddingTop: 153,
    alignItems: "center",
    paddingBottom: 50,
  },
  welcomeText: {
    fontFamily: "Arial",
    marginBottom: 12,
    alignSelf: "flex-start",
    marginLeft: 16,
  },
  welcomeDescription: {
    fontFamily: "Arial",
    marginBottom: 20,
    marginHorizontal: 16,
  },
  exploreButton: {
    width: 339,
    height: 67,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  exploreButtonText: { fontFamily: "Arial" },
  learnMoreButton: {
    width: 339,
    height: 67,
    borderWidth: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    marginBottom: 20,
  },
  learnMoreText: { fontFamily: "Arial" },
  heroImageWrapper: {
    width: 339,
    height: 248,
    borderWidth: 4,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  heroImage: { width: 332, height: 241 },
  accessibleServicesWrapper: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 20,
  },
  accessibleServicesContainer: {
    position: "absolute",
    top: 20,
    left: 20,
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  accessibleServicesTitle: {
    fontFamily: "Arial",
    marginBottom: 16,
  },
  serviceCard: {
    width: 339,
    minHeight: 187,
    borderWidth: 4,
    backgroundColor: "#FFFFFF",
    marginBottom: 16,
    position: "relative",
  },
  cardIcon: { width: 32, height: 32 },
  cardTitle: {
    fontWeight: "bold",
    fontFamily: "Arial",
    marginTop: 20,
    marginLeft: 82,
  },
  cardDescription: {
    fontFamily: "Arial",
    marginTop: 32,
    marginLeft: 20,
    marginRight: 20,
  },
  availableResourcesWrapper: {
    width: 372,
    alignItems: "center",
    marginTop: 32,
    padding: 16,
  },
  availableResourcesTitle: {
    fontFamily: "Arial",
    marginBottom: 16,
  },
  resourceCard: {
    width: 340,
    minHeight: 429,
    borderWidth: 4,
    marginBottom: 16,
    alignItems: "center",
  },
  resourceTitle: {
    fontWeight: "bold",
    fontFamily: "Arial",
    marginTop: 12,
    marginLeft: 20,
    alignSelf: "flex-start",
  },
  resourceDescription: {
    fontFamily: "Arial",
    marginTop: 10,
    marginLeft: 20,
    alignSelf: "flex-start",
    width: 300,
  },
  resourceImage: {
    width: 300,
    height: 171,
    marginTop: 20,
    marginHorizontal: 20,
  },
  learnMoreResourceButton: {
    width: 300,
    height: 67,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
    alignSelf: "center",
  },
  learnMoreResourceButtonText: {
    fontFamily: "Arial",
  },
});
