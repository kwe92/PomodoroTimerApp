import { GearIcon, GearIconContainer } from "./SettingsIconStyles";

interface Props {
  setIsOpened: (x: boolean) => void;
}

export default function SettingsIcon(props: Props) {
  const openSettings = () => props.setIsOpened(true);
  return (
    <GearIconContainer>
      <GearIcon onClick={openSettings} />
    </GearIconContainer>
  );
}
