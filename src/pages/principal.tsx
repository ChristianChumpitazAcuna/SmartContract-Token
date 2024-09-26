import TokenInfo from "@/components/tokenInfo";
import TransferToken from "@/components/transferTokens";
import { useContract } from "@/hooks/useContract";
import { useEffect, useState } from "react";

export default function Principal() {
    const { contract, account } = useContract();
    const [balance, setBalance] = useState<string>("");

    useEffect(() => {
        fetchBalance();
    }, [account, contract]);

    const fetchBalance = async () => {
        if (account && contract) {
            const balance = await contract.getBalanceOf(account);
            setBalance(balance);
        }
    }

    return (
        <section className="w-full h-screen flex flex-row items-center justify-center gap-x-4 bg-neutral-800">
            <TokenInfo
                account={account!}
                balance={balance}
            />
            <TransferToken
                account={account!}
                contract={contract}
                onTransfer={fetchBalance}
            />
        </section>
    );
}