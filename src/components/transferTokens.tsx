import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Toaster } from "./ui/sonner";
import { toast } from "sonner";

interface TransferTokenProps {
    account: string;
    contract: any;
    onTransfer: () => void;
}

export default function TransferToken(
    { account, contract, onTransfer }: TransferTokenProps
) {
    const [amount, setAmount] = useState<string>("");
    const [receiver, setReceiver] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (account && contract) {
            transferToken();
        }
    }, [account, contract]);

    const transferToken = async () => {
        if (contract && receiver) {
            setLoading(true);
            try {
                await contract.transfer(receiver, amount, account!);
                toast.success("Transferencia exitosa");
                onTransfer();
            } catch (e) {
                toast.error("Error al transferir");
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <section>
            <Card className="bg-neutral-900 border-none shadow-white/5">
                <CardHeader>
                    <CardTitle className="uppercase text-neutral-300 text-center">Transfer Tokens</CardTitle>
                    <CardDescription>
                        <span className="font-bold">Account: </span>
                        {account}
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-y-10">
                    <CardDescription>
                        <label>Cuenta Destino</label>
                        <Input value={receiver} onChange={(e) => setReceiver(e.target.value)} />
                    </CardDescription>
                    <CardDescription>
                        <label>Monto</label>
                        <Input value={amount} onChange={(e) => setAmount(e.target.value)} />
                    </CardDescription>
                    <Button disabled={loading} variant="secondary" onClick={transferToken}>Transfer</Button>
                </CardContent>
            </Card>
            <Toaster />
        </section>
    )




}