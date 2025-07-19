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
    <div className="p-6 rounded-lg max-w-xl mx-auto flex flex-col gap-4
      space-y-6 lg:space-y-0 lg:flex lg:space-x-6 lg:gap-4">
      {statusData.map((item, idx) => (
        <div key={idx} className="flex items-center  space-x-6 bg-white p-4 rounded-lg shadow-sm gap-4">
          {/* Icon */}
          <div
            className={`rounded-full p-3 ${item.bg} flex items-center  justify-center`}
          >
            {item.icon}
          </div>

          {/* Text */}
          <div className="flex flex-col">
            <p className="text-lg font-semibold text-black">
              {item.count} {item.label}
            </p>
            <p className="text-gray-500 text-sm">{item.subLabel}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
