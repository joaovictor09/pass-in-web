import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from "lucide-react";

export function AttendeeList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="px-3 py-1.5 border border-white/10 bg-transparent rounded-lg text-sm w-72 flex items-center gap-3">
          <Search className="size-4 text-emerald-300"/>
          <input
            className="bg-transparent flex-1 outline-none border-0 p-0 text-sm"
            placeholder="Buscar participante..."
          />
        </div>
      </div>

    <div className="border border-white/10 rounded-lg">
      <table className="w-full">
        <thead>
          <tr className="border-b border-white/10">
            <th style={{width: 48}} className="py-3 px-4 text-sm font-semibold text-left">
              <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10" />
            </th>
            <th className="py-3 px-4 text-sm font-semibold text-left">Código</th>
            <th className="py-3 px-4 text-sm font-semibold text-left">Participante</th>
            <th className="py-3 px-4 text-sm font-semibold text-left">Data de inscrição</th>
            <th className="py-3 px-4 text-sm font-semibold text-left">Data de check-in</th>
            <th style={{width: 64}} className="py-3 px-4 text-sm font-semibold text-left"></th>
          </tr>
        </thead>

        <tbody>
          {Array.from({length: 8}).map((_, i) => {
            return (
              <tr key={i} className="border-b border-white/10 hover:bg-white/5 transition">
                <td className="text-zinc-300 py-3 px-4 text-sm">
                  <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10" />
                </td>
                <td className="text-zinc-300 py-3 px-4 text-sm">121321</td>
                <td className="text-zinc-300 py-3 px-4 text-sm">
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white">João Victor da Silva Cardoso</span>
                    <span>joaovictordasilva0911@gmail.com</span>
                  </div>
                </td>
                <td className="text-zinc-300 py-3 px-4 text-sm">7 dias atrás</td>
                <td className="text-zinc-300 py-3 px-4 text-sm">3 dias atrás</td>
                <td className="text-zinc-300 py-3 px-4 text-sm">
                  <button className="bg-black/20 border border-white/10 rounded-md p-1.5">
                    <MoreHorizontal className="size-4" />
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>

        <tfoot>
          <tr>
            <td className="text-zinc-300 py-3 px-4 text-sm" colSpan={3}>
              Mostrando 10 de 228 itens
            </td>
            <td className="text-zinc-300 py-3 px-4 text-right text-sm" colSpan={3}>
              <div className="inline-flex gap-8 items-center ">
                Página 1 de 23

                <div className="flex items-center gap-1.5">
                  <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                    <ChevronsLeft className="size-4" />
                  </button>
                  <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                    <ChevronLeft className="size-4" />
                  </button>
                  <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                    <ChevronRight className="size-4" />
                  </button>
                  <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                    <ChevronsRight className="size-4" />
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
      </div>
    </div>
  )
}