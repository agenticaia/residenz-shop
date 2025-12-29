import { cn, getAssetUrl } from "@/lib/utils";

interface CategorySidebarProps {
  activeSidebar: string;
  setActiveSidebar: (value: string) => void;
  setCurrentTab: (value: string) => void;
}

export function CategorySidebar({ activeSidebar, setActiveSidebar, setCurrentTab }: CategorySidebarProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 border-b border-slate-100">
        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Selecciona un servicio</h3>
      </div>
      <div className="flex flex-col">
        <button 
          onClick={() => { setCurrentTab("house-duplex"); setActiveSidebar("department"); }}
          className={cn(
            "flex items-center gap-4 p-4 text-left transition-all border-l-4 hover:bg-slate-50",
            activeSidebar === "department" 
              ? "border-primary bg-primary/5" 
              : "border-transparent"
          )}
        >
          <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-slate-100">
            <img src={getAssetUrl("/images/apartment-view.png")} alt="Departamento" className="w-full h-full object-cover" />
          </div>
          <span className={cn("font-semibold text-sm", activeSidebar === "department" ? "text-primary" : "text-slate-700")}>
            Departamento
          </span>
        </button>

        <button 
          onClick={() => { setCurrentTab("house-duplex"); setActiveSidebar("bungalow"); }}
          className={cn(
            "flex items-center gap-4 p-4 text-left transition-all border-l-4 hover:bg-slate-50",
            activeSidebar === "bungalow" 
              ? "border-primary bg-primary/5" 
              : "border-transparent"
          )}
        >
          <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-slate-100">
            <img src={getAssetUrl("/images/modern-house.png")} alt="Bungalow" className="w-full h-full object-cover" />
          </div>
          <span className={cn("font-semibold text-sm", activeSidebar === "bungalow" ? "text-primary" : "text-slate-700")}>
            Bungalow/dúplex
          </span>
        </button>

        <button 
          onClick={() => { setCurrentTab("room-area"); setActiveSidebar("room"); }}
          className={cn(
            "flex items-center gap-4 p-4 text-left transition-all border-l-4 hover:bg-slate-50",
            activeSidebar === "room" 
              ? "border-primary bg-primary/5" 
              : "border-transparent"
          )}
        >
          <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-slate-100">
             <img src={getAssetUrl("/images/bedroom-clean.png")} alt="Room" className="w-full h-full object-cover" />
          </div>
          <span className={cn("font-semibold text-sm", activeSidebar === "room" ? "text-primary" : "text-slate-700")}>
            Reservar por habitación
          </span>
        </button>

        <button 
          onClick={() => { setCurrentTab("mini-services"); setActiveSidebar("mini"); }}
          className={cn(
            "flex items-center gap-4 p-4 text-left transition-all border-l-4 hover:bg-slate-50",
            activeSidebar === "mini" 
              ? "border-primary bg-primary/5" 
              : "border-transparent"
          )}
        >
          <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-slate-100">
             <img src={getAssetUrl("/images/sofa-cleaning.png")} alt="Mini Services" className="w-full h-full object-cover" />
          </div>
          <span className={cn("font-semibold text-sm", activeSidebar === "mini" ? "text-primary" : "text-slate-700")}>
            Mini servicios
          </span>
        </button>
      </div>
    </div>
  );
}
