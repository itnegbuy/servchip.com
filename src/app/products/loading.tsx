export default function ProductsLoading() {
  return (
    <div className="min-h-screen bg-bg-body pt-[72px] lg:pt-[104px]">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="space-y-4 mb-12 animate-pulse">
          <div className="h-4 w-20 bg-surface-2 rounded" />
          <div className="h-8 w-96 bg-surface-2 rounded" />
          <div className="h-4 w-64 bg-surface-2 rounded" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-surface p-5 space-y-4 animate-pulse"
            >
              <div className="h-36 bg-surface-2 rounded-lg" />
              <div className="h-4 w-3/4 bg-surface-2 rounded" />
              <div className="h-3 w-1/2 bg-surface-2 rounded" />
              <div className="flex gap-2">
                <div className="h-6 w-16 bg-surface-2 rounded-full" />
                <div className="h-6 w-16 bg-surface-2 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
