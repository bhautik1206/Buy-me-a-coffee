import { Modal } from 'antd';
import styled from 'styled-components';

import genericStyles from '../utils/genericStyles';

export const StyledModal = styled(Modal)`
  &&& {
    ${genericStyles}

    && .ant-modal-content {
      border: 1px solid ${({ theme }) => theme.color.grey.primary};
      border-radius: ${({ theme }) => theme.border.radius[10]};
      box-shadow: 0px 1px 18px 0px rgba(15, 15, 15, 0.12), 0px 0px 30px 0px rgba(255, 255, 255, 0.25);
      overflow: hidden;
      background-color: ${({ theme }) => theme.color.primary.light};
      padding: 0;

      .ant-modal-close {
        right: 2.5rem;
        top: 2rem;

        ::hover {
          background-color: unset;
        }
        &-x {
          padding: 0;
          width: 24px;
          height: 24px;
          line-height: 1;
          svg {
            fill: grey;
          }
        }
      }

      .ant-modal-header {
        padding: 2rem 2.5rem 1.3rem 2.5rem;
        background-color: ${({ theme }) => theme.color.primary.light};
        border-bottom: 1px solid ${({ theme }) => theme.color.grey.primary};

        .ant-modal-title {
          font-family: ${({ theme }) => theme.fontFamily.bold};
          font-size: ${({ theme }) => theme.fontSize.title.normal};
          line-height: ${({ theme }) => theme.lineHeight.title.normal};
          font-weight: ${({ theme }) => theme.fontWeight.bold};
          color: ${({ theme }) => theme.color.black.primary};
        }
      }

      .ant-modal-body {
        padding: 0 2.5rem 2.5rem;
        color: ${({ theme }) => theme.color.black.primary};
      }

      .ant-modal-footer {
        padding: 0 2.4rem;
        border-top: none;
      }
    }
  }
`;

export const StyledFooter = styled.div`
  padding: 2.5rem 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 10px;
  align-items: center;
`;

export const StyledConfirmModal = styled(StyledModal)`
  .ant-modal-body {
    padding: 0 !important;
    height: 80px;

    div {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: left;
      padding: 2rem 2.5rem 1.3rem 2.5rem;

      p {
        color: ${({ theme }) => theme.color.black.primary};
        margin: 0;
        font-size: 1.6rem;
      }
    }
  }
`;
