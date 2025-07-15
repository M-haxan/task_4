import { Star, PauseCircle, XCircle } from 'lucide-react';

const statusData = [
  {
    icon: <Star className="text-green-600" size={20} />,
    count: '57',
    label: 'new orders',
    subLabel: 'Awaiting processing',
    bg: 'bg-green-100',
  },
  {
    icon: <PauseCircle className="text-yellow-500" size={20} />,
    count: '5',
    label: 'orders',
    subLabel: 'On hold',
    bg: 'bg-yellow-100',
  },
  {
    icon: <XCircle className="text-red-500" size={20} />,
    count: '15',
    label: 'products',
    subLabel: 'Out of stock',
    bg: 'bg-red-100',
  },
];

export default function OrderStatusCards() {
  return (
    <div className="space-y-3 p-2 rounded-lg max-w-md mx-auto">
      {statusData.map((item, idx) => (
        <div key={idx} className="flex items-start space-x-4">
          <div
            className={`rounded-full p-3 ${item.bg} flex items-center justify-center`}
          >
            {item.icon}
          </div>
          <div>
            <p className="text-lg font-semibold">
              <span className="text-black">{item.count}</span> {item.label}
            </p>
            <p className="text-gray-500 text-sm">{item.subLabel}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
