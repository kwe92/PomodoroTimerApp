import styled from "styled-components";
import { RxCross2 } from "react-icons/rx";
import AppTheme from "../../styles/theme/AppTheme";
import { Column } from "../../styles/layout/Flex";

const CrossIcon = styled(RxCross2)`
  width: 1.75rem;
  height: 1.75rem;
  color: ${AppTheme.lightColors.shade0};
  cursor: pointer;
`;

const ModalBackDrop = styled(Column)`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.75rem;
  height: 30.625rem;
  background: purple;
  border-radius: 25px;
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export { CrossIcon, ModalBackDrop, SettingsContainer, TopSection };
