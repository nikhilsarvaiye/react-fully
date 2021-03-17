import { Modal, ModalFuncProps } from 'antd';
import { modalDefaultPros } from '../modal.default-props';

export const success = ({ ...props }: ModalFuncProps) => {
    props = modalDefaultPros(props);

    return Modal.success({
        ...props,
    });
};
