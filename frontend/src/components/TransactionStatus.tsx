interface Props {
  status: string;
}

export default function TransactionStatus({ status }: Props) {
  return <div className="status-line">{status}</div>;
}
