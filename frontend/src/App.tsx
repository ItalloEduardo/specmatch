function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-20">
        <span className="w-fit rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-fuchsia-300">
          SpecMatch
        </span>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Monte seu setup gamer ideal com comparacao de hardware
        </h1>
        <p className="max-w-2xl text-base text-slate-300 md:text-lg">
          Frontend inicializado com Vite + React + TypeScript + Tailwind.
          Proximo passo: implementar cadastro e comparacao de CPU, GPU, RAM e
          orcamentos personalizados.
        </p>
      </section>
    </main>
  )
}

export default App
