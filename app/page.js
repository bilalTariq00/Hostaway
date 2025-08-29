import { DashboardLayout } from "@/components/dashboard-layout";

export default function HomePage() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-4">Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg border p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">
              Today check-outs
            </h3>
            <div className="text-3xl font-bold">6</div>
            <p className="text-sm text-gray-500">Check-outs today</p>
          </div>
          <div className="bg-white rounded-lg border p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">
              Today check-ins
            </h3>
            <div className="text-3xl font-bold">3</div>
            <p className="text-sm text-gray-500">Check-ins today</p>
          </div>
          <div className="bg-white rounded-lg border p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">
              Upcoming reservations
            </h3>
            <div className="text-3xl font-bold">20</div>
            <p className="text-sm text-gray-500">Upcoming reservations</p>
          </div>
          <div className="bg-white rounded-lg border p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">
              Staying guests
            </h3>
            <div className="text-3xl font-bold">11</div>
            <p className="text-sm text-gray-500">
              Guests who are currently staying
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
