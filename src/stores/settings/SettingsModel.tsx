import { types } from "mobx-state-tree";
import FontSettingsModel from "../font_settings/FontSettingsModel";
import ColorSettingsModel from "../color_settings/ColorSettingsModel";

const SettingsModel = types.model({
  fontSettings: FontSettingsModel,
  ColorSettings: ColorSettingsModel,
});

export default SettingsModel;
