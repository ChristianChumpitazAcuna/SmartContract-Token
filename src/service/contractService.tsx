import Web3 from "web3";
import contractABI from "../ABI/contractABI.json";

const CONTRACT_ADDRESS = "0x8e72db970BB93614d3Fb67b5831f4DaCCa3e4797";

interface MyContract {
    methods: {
        name(): {
            call(): Promise<string>;
        };
        symbol(): {
            call(): Promise<string>;
        };
        decimals(): {
            call(): Promise<string>;
        };
        totalSupply(): {
            call(): Promise<string>;
        };
        balanceOf(account: string): {
            call(): Promise<string>;
        };
        transfer(to: string, amount: string): {
            send(options: { from: string }): Promise<any>;
        };
    };
    events: {};
}

export default class ContractService {
    private contract: MyContract;

    constructor(web3: Web3) {
        this.contract = new web3.eth.Contract(
            contractABI as any,
            CONTRACT_ADDRESS
        ) as unknown as MyContract;
    }

    async getName(): Promise<string> {
        return await this.contract.methods.name().call();
    }

    async getSymbol(): Promise<string> {
        return await this.contract.methods.symbol().call();
    }

    async getDecimals(): Promise<string> {
        return await this.contract.methods.decimals().call();
    }

    async getTotalSupply(): Promise<string> {
        return await this.contract.methods.totalSupply().call();
    }

    async getBalanceOf(account: string): Promise<string> {
        try {
            const balance = await this.contract.methods.balanceOf(account).call();
            console.log('Balance: ', balance);
            return balance;
        } catch (e) {
            console.error('Error: ', e);
            throw e;
        }
    }

    async transfer(to: string, amount: string, from: string): Promise<any> {
        try {
            const transfer = await this.contract.methods.transfer(to, amount).send({ from });
            console.log('Transfer: ', transfer);
            return transfer;
        } catch (e) {
            console.error('Error: ', e);
            throw e;
        }
    }
}
