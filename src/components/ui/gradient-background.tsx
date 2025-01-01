export const GradientBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Primary gradient blob */}
      <div 
        className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-blue-50 via-blue-100/50 to-transparent opacity-60 blur-3xl"
        style={{ transform: 'rotate(-15deg)' }}
      />
      
      {/* Secondary gradient blob */}
      <div 
        className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-violet-50 via-violet-100/50 to-transparent opacity-60 blur-3xl"
        style={{ transform: 'rotate(15deg)' }}
      />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"
      />
    </div>
  );
};