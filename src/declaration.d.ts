declare module '*.png';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.jpg';

interface ThemeInterface {
    darkColors: {
        shade0: "rgba(22,25,50,1)",
        shade1: "rgba(30,33,63,1)",
      },
      lightColors: {
        shade0: "rgba(215,224,255,1)",
        shade1: "rgba(239,241,250,1)",
        shade2: "rgba(255,255,255,1)",
        settings: "rgba(216, 216, 216, 1)",

      },
      otherColors: {
        purple0: "rgba(216,129,248,1)",
        blue0: "rgba(112,243,248,1)",
        red0: "rgba(248,112,112,1)",
      },   
}
interface Options {
  options: {
    pomodoroOption: boolean;
    handlePomodoroOption: VoidFunction;
    shortBreakOption: boolean;
    handleShortBreakOption: VoidFunction;
    longBreakOption: boolean;
    handleLongBreakOption: VoidFunction;
  };
}

type SetState<T> = Dispatch<SetStateAction<T>>;

type CurrentColor =
  | "rgba(216,129,248,1)"
  | "rgba(112,243,248,1)"
  | "rgba(248,112,112,1)";

  type CurrentFont = "'Kumbh Sans', sans-serif" | "'Roboto Slab', serif" | "'Space Mono', monospace";