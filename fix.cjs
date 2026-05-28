const fs = require("fs");
let code = fs.readFileSync("src/App.tsx", "utf8");

code =
  code.substring(
    0,
    code.indexOf("export default App;") + "export default App;".length,
  ) + "\n";

code = code.replace(
  /<nav className=\{[\s\S]*?\}>/,
  "<nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 shadow-sm py-4' : 'bg-transparent py-6'}`}>",
);
code = code.replace(
  /<span className=\{[\s\S]*?\}>Paradise Crew<\/span>/,
  "<span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-ocean-900' : 'text-slate-900'}`}>Paradise Crew</span>",
);
code = code.replace(
  /<span className=\{[\s\S]*?\}>Tech & Hospitality<\/span>/,
  "<span className={`text-xs tracking-widest font-medium uppercase ${isScrolled ? 'text-ocean-600' : 'text-slate-600'}`}>Tech & Hospitality</span>",
);
code = code.replace(
  /<div className=\{hidden md:flex items-center space-x-8 \}>/,
  "<div className={`hidden md:flex items-center space-x-8`}>",
);
code = code.replace(
  /className=\{\$\left\{isScrolled \? 'text-ocean-900' : 'text-ocean-900'\right\}\}/,
  "className={`md:hidden ${isScrolled ? 'text-ocean-900' : 'text-slate-900'}`}",
);

fs.writeFileSync("src/App.tsx", code);
