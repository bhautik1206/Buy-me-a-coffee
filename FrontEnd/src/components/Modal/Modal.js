import React from 'react';

import { Modal as AntdModal } from 'antd';
import PropTypes from 'prop-types';
import { AiFillCloseCircle } from 'react-icons/ai';

import Button from '../Button';
import Typography from '../Typography';

import { StyledConfirmModal, StyledFooter, StyledModal } from './Modal.styled';

const Footer = ({ actions }) => {
  if (actions) {
    return <StyledFooter>{actions}</StyledFooter>;
  }

  return null;
};

Footer.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.node),
};
Footer.defaultProps = {
  actions: null,
};

const Modal = ({ color, actions, ...props }) => {
  return (
    <StyledModal $color={color} footer={<Footer actions={actions} />} closeIcon={<AiFillCloseCircle />} {...props} />
  );
};

Modal.propTypes = {
  color: PropTypes.string,
  actions: PropTypes.arrayOf(PropTypes.node),
};

Modal.defaultProps = {
  color: 'white',
  actions: null,
};

const ConfirmModal = ({
  onCancel,
  onOk,
  loading,
  title,
  description,
  buttonText,
  color,
  visible,
  buttonColor,
  buttonTextColor,
  ...props
}) => {
  return (
    <StyledConfirmModal
      closeIcon={<AiFillCloseCircle />}
      visible={visible}
      $color={color}
      title={title}
      onCancel={onCancel}
      footer={
        <Footer
          actions={[
            <Button key="cancel" text="Cancel" color="primary" outline onClick={onCancel} disabled={loading} />,
            <Button
              key="submit"
              text={buttonText}
              color={buttonColor}
              textColor={buttonTextColor}
              onClick={onOk}
              loading={loading}
            />,
          ]}
          {...props}
        />
      }
      {...props}
    >
      <div>
        <Typography type="p">{description}</Typography>
      </div>
    </StyledConfirmModal>
  );
};

ConfirmModal.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  loading: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  color: PropTypes.string,
  buttonTextColor: PropTypes.string,
  buttonColor: PropTypes.string,
};

ConfirmModal.defaultProps = {
  color: 'white',
  buttonText: 'Submit',
  buttonTextColor: 'black',
  title: 'Modal title',
  description: 'Modal Content',
  loading: false,
  buttonColor: 'primary',
};

Modal.Confirm = ConfirmModal;
// TODO: Some components are using Model.confirm for confirmation box
//       Since we have added new component here for it, we will slowely
//       migate existing Mode.confirm to use ConfirmModal.
Modal.confirm = AntdModal.confirm;

export default Modal;
