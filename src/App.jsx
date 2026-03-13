import Hero from "./components/home/Hero"
import Stats from "./components/home/Stats"


function App() {
  return (
    <div className="bg-dark min-h-screen selection:bg-primary/30">
      <main>
        <Hero />
        <Stats />
          
      </main>
      
    </div>
  )
}

export default App