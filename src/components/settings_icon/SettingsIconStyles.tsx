import { IoMdSettings } from "react-icons/io";
import styled from "styled-components";
import AppTheme from "../../styles/theme/AppTheme";

const GearIconContainer = styled.div`
  height: 23rem;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
`;

const GearIcon = styled(IoMdSettings)`
  width: 1.75rem;
  height: 1.75rem;
  color: ${AppTheme.lightColors.shade0};
  cursor: pointer;
`;

export { GearIcon, GearIconContainer };
