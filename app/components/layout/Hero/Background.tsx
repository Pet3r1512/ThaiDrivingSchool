export default function Background() {
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 opacity-90" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-500/5 skew-x-12 transform origin-top-right" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-blue-500/5 -skew-x-12 transform origin-bottom-left" />

      <div className="absolute left-1/4 top-0 bottom-0 w-32 border-r-2 border-dashed border-slate-700/30 transform -skew-x-12" />
      <div className="absolute right-1/4 top-0 bottom-0 w-32 border-l-2 border-dashed border-slate-700/30 transform -skew-x-12" />
    </div>
  );
}
