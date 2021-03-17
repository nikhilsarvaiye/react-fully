import { Modal, ModalFuncProps } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlert } from './../../font-awesome-icon/fa-alert';
import { modalDefaultPros } from '../modal.default-props';

export const warning = ({ ...props }: ModalFuncProps) => {
    props = modalDefaultPros(props);

    return Modal.warning({
        icon: (
            <span className="anticon">
                <FontAwesomeIcon icon={faAlert as any} />
            </span>
        ),
        ...props,
    });
};
