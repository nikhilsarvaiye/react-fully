import { Modal, ModalFuncProps } from 'antd';
import { modalDefaultPros } from '../modal.default-props';

export const error = ({ ...props }: ModalFuncProps) => {
    props = modalDefaultPros(props);
    props.content = props.content || 'Something went wrong';

    return Modal.error({
        ...props,
    });
};
