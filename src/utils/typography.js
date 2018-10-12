import Typography from "typography";
import kirkhamTheme from "typography-theme-kirkham";

kirkhamTheme.overrideThemeStyles = () => ({
  p: {
    fontSize: "16px"
  }
});

const typography = new Typography(kirkhamTheme);

export default typography;
export const { rhythm } = typography;
