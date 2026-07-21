export default function ProductDetailLoading() {
  return (
    <div className="min-h-screen bg-bg-dark pt-[72px] lg:pt-[104px] pb-20">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        <div className="flex items-center gap-2 text-sm animate-pulse">
          <div className="h-4 w-16 bg-surface-2 rounded" />
          <div className="h-4 w-4 bg-surface-2 rounded" />
          <div className="h-4 w-20 bg-surface-2 rounded" />
          <div className="h-4 w-4 bg-surface-2 rounded" />
          <div className="h-4 w-32 bg-surface-2 rounded" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-4 animate-pulse">
            <div className="h-64 bg-surface-2 rounded-2xl" />
          </div>
          <div className="space-y-4 animate-pulse">
            <div className="h-6 w-24 bg-surface-2 rounded-full" />
            <div className="h-8 w-3/4 bg-surface-2 rounded" />
            <div className="h-4 w-full bg-surface-2 rounded" />
            <div className="h-4 w-5/6 bg-surface-2 rounded" />
            <div className="h-4 w-2/3 bg-surface-2 rounded" />
            <div className="flex gap-3 mt-6">
              <div className="h-12 w-36 bg-surface-2 rounded-lg" />
              <div className="h-12 w-36 bg-surface-2 rounded-lg" />
            </div>
          </div>
        </div>

        <div className="space-y-4 animate-pulse">
          <div className="h-6 w-48 bg-surface-2 rounded" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-16 bg-surface-2 rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
