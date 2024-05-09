import { Popover } from 'antd';
import styled from 'styled-components';

export const StyledPopoverWrapper = styled.div`
  &&& {
    .ant-popover-content {
      border-radius: ${({ radius }) => (radius ? `${radius}px` : '10px')};
      background-color: ${({ theme }) => theme.color.primary.light};
      box-shadow: 0px 1px 18px 0px rgba(15, 15, 15, 0.12), 0px 0px 30px 0px rgba(255, 255, 255, 0.25);
      border: 1px solid ${({ theme }) => theme.color.grey.primary};
    }
    .ant-popover-inner {
      border-radius: ${({ radius }) => (radius ? `${radius}px` : '10px')};
      background-color: ${({ theme }) => theme.color.primary.light};
      box-shadow: 0px 1px 18px 0px rgba(15, 15, 15, 0.12), 0px 0px 30px 0px rgba(255, 255, 255, 0.25);
    }
  }
`;

export const StyledPopover = styled(Popover)``;
