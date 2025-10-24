import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {" "}
      {/* --- Header --- */}{" "}
      <View style={styles.accessibleHeader}>
        {" "}
        <View style={styles.minusButton}>
          {" "}
          <Image
            source={require("../assets/images/icon_loop_minus.png")}
            style={styles.icon}
          />{" "}
        </View>{" "}
        <View style={styles.plusButton}>
          {" "}
          <Image
            source={require("../assets/images/icon_loop_plus.png")}
            style={styles.icon}
          />{" "}
        </View>{" "}
        <View style={styles.contrastButton}>
          {" "}
          <Image
            source={require("../assets/images/icon_contrast.png")}
            style={styles.contrastIcon}
          />{" "}
          <Text style={styles.contrastText}>Contrast</Text>{" "}
        </View>{" "}
        <Text style={styles.headerTitle}>AccessibleHub</Text>{" "}
        <Text style={styles.headerSubtitle}>Resources for Everyone</Text>{" "}
        <View style={styles.menuButton}>
          {" "}
          <Image
            source={require("../assets/images/icon_menu.png")}
            style={styles.menuIcon}
          />{" "}
        </View>{" "}
      </View>{" "}
      {/* --- Scrollable Content --- */}{" "}
      <ScrollView contentContainerStyle={styles.content}>
        {" "}
        <Text style={styles.welcomeText}>Welcome to AccessibleHub</Text>{" "}
        <Text style={styles.welcomeDescription}>
          {" "}
          We believe everyone deserves equal access to information and services.
          Our platform is designed with accessibility at its core, ensuring a
          comfortable experience for all users, including those with vision
          impairments.{" "}
        </Text>{" "}
        <TouchableOpacity style={styles.exploreButton}>
          {" "}
          <Text style={styles.exploreButtonText}>Explore Services</Text>{" "}
        </TouchableOpacity>{" "}
        <TouchableOpacity style={styles.learnMoreButton}>
          {" "}
          <Text style={styles.learnMoreText}>Learn More</Text>{" "}
        </TouchableOpacity>{" "}
        <View style={styles.heroImageWrapper}>
          {" "}
          <Image
            source={require("../assets/images/hero.jpg")}
            style={styles.heroImage}
            resizeMode="cover"
          />{" "}
        </View>{" "}
        {/* --- Accessible Services Section --- */}{" "}
        <View style={styles.accessibleServicesWrapper}>
          {" "}
          <Text style={styles.accessibleServicesTitle}>Our Services</Text>{" "}
          {/* Card 1 */}{" "}
          <View style={styles.serviceCard}>
            {" "}
            <View style={styles.accessibleServicesContainer}>
              {" "}
              <Image
                source={require("../assets/images/icon_eye.png")}
                style={styles.cardIcon}
              />{" "}
            </View>{" "}
            <Text style={styles.cardTitle}>Accessible Design</Text>{" "}
            <Text style={styles.cardDescription}>
              {" "}
              We create inclusive design solutions that ensure everyone can use
              digital products comfortably.{" "}
            </Text>{" "}
          </View>{" "}
          {/* Card 2 */}{" "}
          <View style={styles.serviceCard}>
            {" "}
            <View style={styles.accessibleServicesContainer}>
              {" "}
              <Image
                source={require("../assets/images/icon_book.png")}
                style={styles.cardIcon}
              />{" "}
            </View>{" "}
            <Text style={styles.cardTitle}>Assistive Tools</Text>{" "}
            <Text style={styles.cardDescription}>
              {" "}
              Discover technology that empowers users with vision or hearing
              difficulties.{" "}
            </Text>{" "}
          </View>{" "}
          {/* Card 3 */}{" "}
          <View style={styles.serviceCard}>
            {" "}
            <View style={styles.accessibleServicesContainer}>
              {" "}
              <Image
                source={require("../assets/images/icon_headphones.png")}
                style={styles.cardIcon}
              />{" "}
            </View>{" "}
            <Text style={styles.cardTitle}>Inclusive Training</Text>{" "}
            <Text style={styles.cardDescription}>
              {" "}
              Learn how to design accessible digital experiences with our
              step-by-step guides.{" "}
            </Text>{" "}
          </View>{" "}
        </View>{" "}
        {/* --- Available Resources Section --- */}{" "}
        <View style={styles.availableResourcesWrapper}>
          {" "}
          <Text style={styles.availableResourcesTitle}>
            {" "}
            Available Resources{" "}
          </Text>{" "}
          <View style={styles.resourceCard}>
            {" "}
            <Image
              source={require("../assets/images/resource1.jpg")}
              style={styles.resourceImage}
            />{" "}
            <Text style={styles.resourceTitle}>Accessibility Guides</Text>{" "}
            <Text style={styles.resourceDescription}>
              {" "}
              Comprehensive guides on using assistive technologies and
              navigating digital content effectively.{" "}
            </Text>{" "}
            <TouchableOpacity style={styles.learnMoreResourceButton}>
              {" "}
              <Text style={styles.learnMoreResourceButtonText}>
                Learn More
              </Text>{" "}
            </TouchableOpacity>{" "}
          </View>{" "}
          <View style={styles.resourceCard}>
            {" "}
            <Image
              source={require("../assets/images/resource2.jpg")}
              style={styles.resourceImage}
            />{" "}
            <Text style={styles.resourceTitle}>Training Programs</Text>{" "}
            <Text style={styles.resourceDescription}>
              {" "}
              Free training programs for learning new skills with accessible
              materials and personalized instruction.{" "}
            </Text>{" "}
            <TouchableOpacity style={styles.learnMoreResourceButton}>
              {" "}
              <Text style={styles.learnMoreResourceButtonText}>
                Learn More
              </Text>{" "}
            </TouchableOpacity>{" "}
          </View>{" "}
          <View style={styles.resourceCard}>
            {" "}
            <Image
              source={require("../assets/images/resource3.jpg")}
              style={styles.resourceImage}
            />{" "}
            <Text style={styles.resourceTitle}>Community Forums</Text>{" "}
            <Text style={styles.resourceDescription}>
              {" "}
              Connect with others, share experiences, and find support in our
              accessible community forums.{" "}
            </Text>{" "}
            <TouchableOpacity style={styles.learnMoreResourceButton}>
              {" "}
              <Text style={styles.learnMoreResourceButtonText}>
                Learn More
              </Text>{" "}
            </TouchableOpacity>{" "}
          </View>{" "}
        </View>{" "}
      </ScrollView>{" "}
    </View>
  );
}

/* --- Styles --- */ const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  /* --- Header --- */ accessibleHeader: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: 153,
    backgroundColor: "#000000",
    borderBottomColor: "#FDC700",
    borderBottomWidth: 4,
    zIndex: 10,
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
    lineHeight: 28,
    fontFamily: "Arial",
  },
  icon: { width: 20, height: 20 },
  headerTitle: {
    position: "absolute",
    top: 83,
    left: 16,
    color: "#FFFFFF",
    fontSize: 24,
    lineHeight: 32,
    fontFamily: "Arial",
  },
  headerSubtitle: {
    position: "absolute",
    top: 117,
    left: 16,
    color: "#D1D5DC",
    fontSize: 16,
    lineHeight: 20,
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
  /* --- Content --- */ content: {
    paddingTop: 170,
    alignItems: "center",
    paddingBottom: 50,
  },
  welcomeText: {
    fontSize: 32,
    lineHeight: 38,
    color: "#000000",
    fontFamily: "Arial",
    marginBottom: 12,
    alignSelf: "flex-start",
    marginLeft: 16,
  },
  welcomeDescription: {
    fontSize: 18,
    lineHeight: 29,
    color: "#101828",
    fontFamily: "Arial",
    marginBottom: 20,
    marginHorizontal: 16,
  },
  exploreButton: {
    width: 339,
    height: 67,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  exploreButtonText: { color: "#FFFFFF", fontSize: 18, fontFamily: "Arial" },
  learnMoreButton: {
    width: 339,
    height: 67,
    borderColor: "#000000",
    borderWidth: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    marginBottom: 20,
  },
  learnMoreText: {
    color: "#000000",
    fontSize: 18,
    lineHeight: 28,
    fontFamily: "Arial",
  },
  heroImageWrapper: {
    width: 339,
    height: 248,
    borderColor: "#000000",
    borderWidth: 4,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  heroImage: { width: 332, height: 241 },
  /* --- Accessible Services --- */ accessibleServicesWrapper: {
    width: "100%",
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    paddingVertical: 20,
  },
  accessibleServicesContainer: {
    position: "absolute",
    top: 20,
    left: 20,
    width: 48,
    height: 48,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
  },
  accessibleServicesTitle: {
    fontSize: 32,
    fontFamily: "Arial",
    color: "#000000",
    lineHeight: 36,
    marginBottom: 16,
  },
  serviceCard: {
    width: 339,
    height: 187,
    borderWidth: 4,
    borderColor: "#000000",
    backgroundColor: "#FFFFFF",
    marginBottom: 16,
    position: "relative",
  },
  cardIcon: { width: 32, height: 32 },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "Arial",
    lineHeight: 25,
    color: "#000",
    marginTop: 20,
    marginLeft: 82,
  },
  cardDescription: {
    fontSize: 18,
    lineHeight: 29,
    color: "#101828",
    fontFamily: "Arial",
    marginTop: 32,
    marginLeft: 20,
    marginRight: 20,
  },
  /* --- Available Resources --- */ availableResourcesWrapper: {
    width: 372,
    height: 1404,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    marginTop: 32,
    padding: 16,
  },
  availableResourcesTitle: {
    fontSize: 30,
    lineHeight: 36,
    fontFamily: "Arial",
    color: "#000000",
    marginBottom: 16,
  },
  resourceTitle: {
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 28,
    fontFamily: "Arial",
    color: "#000000",
    marginTop: 12,
    marginLeft: 20,
    alignSelf: "flex-start",
  },
  resourceDescription: {
    fontSize: 18,
    lineHeight: 29,
    fontFamily: "Arial",
    color: "#101828",
    marginTop: 10,
    marginLeft: 20,
    alignSelf: "flex-start",
    width: 300,
  },
  resourceCard: {
    width: 340,
    height: 429,
    borderWidth: 4,
    borderColor: "#000000",
    marginBottom: 16,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
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
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
    alignSelf: "center",
  },
  learnMoreResourceButtonText: {
    fontSize: 18,
    lineHeight: 28,
    fontFamily: "Arial",
    color: "#FFFFFF",
  },
});
