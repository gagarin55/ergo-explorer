import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import { FullAddress } from '../../../models/generated/fullAddress';

import { QRCodeIcon } from '../../common/icons/common.icons';

import { AddressQrcodeModalComponent } from '../../modals/address-qrcode-modal/address-qrcode-modal.component';

interface IAddressActionsState {
  [key: string]: boolean;
}

interface IAddressActionsProps {
  address: FullAddress;
}

export const QRCODE_MODAL_STATE_KEY = 'isQrCodeModalOpened';

import '../address-actions/address-actions.scss';

export class AddressQrcodeActionComponent extends React.Component<IAddressActionsProps, IAddressActionsState> {
  state: IAddressActionsState = {
    [QRCODE_MODAL_STATE_KEY]: false
  };
  
  constructor (props: IAddressActionsProps) {
    super(props);
    
    this.openModal  = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  
  render (): JSX.Element {
    return (
      <div className='bi-address-actions g-flex'>
        <div className='bi-address-actions__item g-flex__item-fixed'>
          <button className='bi-address-actions__btn bi-btn'
                  onClick={ this.openModal(QRCODE_MODAL_STATE_KEY) }>
            <FormattedMessage id='components.address-actions.qrcode'/>
            
            <QRCodeIcon className='bi-address-actions__btn-icon'/>
          </button>
        </div>
        
        <AddressQrcodeModalComponent isOpen={ this.state[QRCODE_MODAL_STATE_KEY] }
                                     onClose={ this.closeModal(QRCODE_MODAL_STATE_KEY) }
                                     address={ this.props.address.summary.id }/>
      </div>
    );
  }
  
  private openModal (stateKey: string): () => void {
    return () => {
      this.setState({
        [stateKey]: true
      });
    };
  }
  
  private closeModal (stateKey: string): () => void {
    return () => {
      this.setState({
        [stateKey]: false
      });
    };
  }
}
