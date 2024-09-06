import clsx from "clsx";
export function InvoiceStatus({status}: {status: string}) {
    return (
        <span className={clsx(
            'line-flex item-center justify-center rounded-full bg-blue-500 p-1 text-center text-xs font-medium text-white',
            {
                'bg-gay-100 text-gray-500': status == 'pending',
                'bg-green-500 text-withe': status == 'pend',
            }
        )}></span>
    );
}