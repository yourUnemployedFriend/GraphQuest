const changeThemeButtom = document.getElementById("changeTheme");
const changeThemeImage = document.getElementById("changeThemeImage");

const GRAY1 = "#171717";
const GRAY2 = "#1F1F1F";
const GRAY3 = "#333333";
const GRAY4 = "#3F3F46";

const WHITE1 = "#EAEAEA";
const WHITE2 = "#D1D1D1"; 
const WHITE3 = "#B0B0B0"; 
const WHITE4 = "#A3A3A8";


const MACHINE_LINE_COLOR_DARK = "#2bc7ff";
const MACHINE_LINE_COLOR_LIGHT = "#2d70b3";
const USER_LINE_COLOR_DARK = "#2bff72";
const USER_LINE_COLOR_LIGHT = "#c74440";

const TEXT_COLOR_DARK = "#fff";
const TEXT_COLOR_LIGHT = "#000";

const ICON_FILTER_DARK = "invert(100%) sepia(2%) saturate(0%) hue-rotate(179deg) brightness(102%) contrast(105%)";
const ICON_FILTER_LIGHT = "none";

const AXIS_COLOR_DARK = "#fff";
const AXIS_COLOR_LIGHT = "#000";

let isNightTheme = true;

changeThemeButtom.addEventListener("click", changeTheme);

function changeTheme() {
    isNightTheme = !isNightTheme;

    switchCSSVariableValue("--layer1", GRAY1, WHITE1);
    switchCSSVariableValue("--layer2", GRAY2, WHITE2);
    switchCSSVariableValue("--layer3", GRAY3, WHITE3);
    switchCSSVariableValue("--layer4", GRAY4, WHITE4);
    switchCSSVariableValue("--textColor", TEXT_COLOR_DARK, TEXT_COLOR_LIGHT)
    switchCSSVariableValue("--iconFilter", ICON_FILTER_DARK, ICON_FILTER_LIGHT);
    switchCSSVariableValue("--shadowBox", GRAY4, WHITE4);

    USER_LINE_COLOR = (isNightTheme) ? USER_LINE_COLOR_DARK : USER_LINE_COLOR_LIGHT;
    MACHINE_LINE_COLOR = (isNightTheme) ? MACHINE_LINE_COLOR_DARK : MACHINE_LINE_COLOR_LIGHT;
    AXIS_COLOR = (isNightTheme) ? AXIS_COLOR_DARK : AXIS_COLOR_LIGHT;
    TEXT_COLOR = (isNightTheme) ? TEXT_COLOR_DARK : TEXT_COLOR_LIGHT;
    
    changeThemeImage.src = (isNightTheme) ? "../svg/sun.svg" : "../svg/moon.svg";

    drawCanvas();

}

function switchCSSVariableValue(variable, valueDark, valueLight) {
    document.documentElement.style.setProperty(variable, (isNightTheme) ? valueDark : valueLight);
}

function switchValueVariable(variable, valueDark, valueLight) {
    variable = (isNightTheme) ? valueDark : valueLight;
}