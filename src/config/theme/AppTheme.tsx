import { StyleSheet } from "react-native";

export interface ThemeColors {
  primary: string;
  text: string;
  background: string;
  cardBackground: string;
  buttonTextColor: string;
  secondary: string;
  white: string
}

export const colors: ThemeColors = {
  primary: "#2F3000",
  text: "#FFE100",
  white: 'white',
  background: "#0D0C0C",
  secondary: "#070707",
  cardBackground: "white",
  buttonTextColor: "white",
};

export const globalStyles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.text,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.text,
  },

  mainContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  globalMargin: {
    paddingHorizontal: 20,
    flex: 1,
  },

  btnPrimary: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  btnPrimaryText: {
    color: colors.text,
    fontSize: 16,
  },
  customHeader:{
    backgroundColor: colors.secondary,
   
  }
});