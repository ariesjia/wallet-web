import React from 'react';
import './LoginPage.css';
import HeaderBar from '../elements/HeaderBar';
import {ADDRESS_ENTRYPOINT, ADDRESS_TOKEN_PAYMASTER, ADDRESS_USDTPM, Server} from '../../server/server';
import AlertModal from '../modals/AlertModal';

interface SimpleTransactionState {
    txTo: string;
    txValue: string;
    gasFee: string;
    alert: string;
    selectedAsset: string;
}

class SimpleTransactionPage extends React.Component<{}, SimpleTransactionState> {

    constructor(props: any) {
        super(props);
        this.state = {
            txTo: '',
            txValue: '',
            gasFee: '',
            alert: '',
            selectedAsset: 'Matic-Matic'
        }

        this.onToChange = this.onToChange.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
        this.onAssetChange = this.onAssetChange.bind(this);
        this.onGasFeeChange = this.onGasFeeChange.bind(this);
    }

    onToChange(e: any) {
        this.setState({txTo: e.currentTarget.value});
    };

    onValueChange(e: any) {
        this.setState({txValue: e.currentTarget.value});
    };

    onGasFeeChange(e: any) {
        this.setState({gasFee: e.currentTarget.value});
    };

    onAssetChange(e: any) {
        this.setState({selectedAsset: e.currentTarget.value});
    };

    componentDidMount(): void {
    }

    async onSend() {
        if (this.state.selectedAsset == "Matic-Matic") {
            await Server.account.sendMainToken(this.state.txValue, this.state.txTo, ADDRESS_TOKEN_PAYMASTER, ADDRESS_ENTRYPOINT)
        } else if (this.state.selectedAsset == "Matic-USDTMP") {
            await Server.account.sendERC20Token(ADDRESS_USDTPM, this.state.txValue, this.state.txTo, ADDRESS_TOKEN_PAYMASTER, ADDRESS_ENTRYPOINT)
        }
    }

    render() {

        return (
            <div className="simple-transaction-page">
                <HeaderBar text='Send Transaction'/>
                <br/>
                <div>Asset</div>
                <select value={this.state.selectedAsset} onChange={this.onAssetChange}>
                    <option value="Matic-Matic">Matic-Matic</option>
                    <option value="Matic-USDTMP">Matic-USDTMP</option>
                </select>
                <br/>
                <div>Send To</div>
                <input type="string" value={this.state.txTo} onChange={this.onToChange}/>
                <br/>
                <div>Amount</div>
                <input type="string" value={this.state.txValue} onChange={this.onValueChange}/>
                <br/>
                <div>Gas Fee</div>
                <input type="string" value={this.state.gasFee} onChange={this.onGasFeeChange}/>
                <br/><br/>
                <button className='simple-transaction-page-button' onClick={async () => await this.onSend()}>Send
                </button>

                <AlertModal message={this.state.alert} button="OK" onClose={() => this.setState({alert: ''})}/>
            </div>
        );
    }
}

export default SimpleTransactionPage;