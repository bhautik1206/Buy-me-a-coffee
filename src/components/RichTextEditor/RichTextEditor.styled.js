import styled from 'styled-components';

export const StyledContainer = styled.div`
  &&& {
    .quill {
      border: 1px solid ${({ theme }) => theme.color.grey.primary};
      border-radius: 5px;
      overflow: auto;
      height: 339px;
      background-color: var(--accent-color, #0000);

      .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
        stroke: ${({ theme }) => theme.color.secondary.primary};
      }

      .ql-snow .ql-stroke {
        stroke: ${({ theme }) => theme.color.black.primary};
      }

      .ql-snow .ql-fill {
        stroke: ${({ theme }) => theme.color.black.primary};
      }

      .ql-picker-label {
        border: none;
        color: ${({ theme }) => theme.color.black.primary};
      }

      .ql-toolbar.ql-snow,
      .ql-container.ql-snow {
        border: none;
        color: ${({ theme }) => theme.color.black.primary};
        background-color: var(--accent-color, #fff);
      }

      .ql-toolbar.ql-snow {
        border-bottom: 1px solid #dcdad9;
      }

      .ql-toolbar {
        background: var(--accent-color, #333333);
        padding: 11px 15px;
      }

      // break-word is needed to prevent the text from overflowing the container
      .ql-editor {
        span {
          word-break: break-word;
        }

        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 21px;
        overflow-y: hidden;

        strong {
          font-size: 14px;
          font-style: normal;
          font-weight: 700;
          line-height: 21px;
        }

        ol {
          padding-left: 5px;
        }

        ul {
          padding-left: 0;
        }
      }
    }
  }
`;

export const StyledPreviewContainer = styled.div`
  user-select: none;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;

  flex: 1;

  strong {
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 21px;
  }

  // remove empty <p> tags
  p > br {
    display: none;
  }

  ol {
    padding-left: 5px;
  }
`;
