import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card";

interface TokenInfoProps {
    account: string;
    balance: string;
}

export default function TokenInfo({ account, balance }: TokenInfoProps) {
    return (
        <section>
            <Card className="bg-neutral-900 border-none shadow-white/5">
                <CardHeader>
                    <CardTitle className="uppercase text-neutral-300">Token Info</CardTitle>
                    <CardDescription>
                        <span className="font-bold">Account: </span>
                        {account}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <CardDescription>
                        <span className="font-bold">Balance: </span>
                        {balance.toString()}<span> KR</span>
                    </CardDescription>
                </CardContent>
            </Card>
        </section>
    );
}
