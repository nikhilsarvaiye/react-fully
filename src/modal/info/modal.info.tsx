import { Modal, ModalFuncProps } from 'antd';
import { modalDefaultPros } from '../modal.default-props';

export const info = ({ ...props }: ModalFuncProps) => {
    props = modalDefaultPros(props);

    return Modal.info({
        ...props,
    });
};
