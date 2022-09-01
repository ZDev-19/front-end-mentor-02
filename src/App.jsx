import Card from "./components/Card"
import Card2 from "./components/Card2"
import Card3 from "./components/Card3"

function App() {
 
  return (
    <div className="flex justify-center items-center h-screen max-w-full">
      <div className="w-3/4 md:w-3/5 lg:w-3/5 lg:grid grid-cols-3 h-3/5 rounded-md">
        <Card/>
        <Card2/>
        <Card3/>
      </div>
    
    </div>
  )
}

export default App
