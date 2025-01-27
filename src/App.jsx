import ColorPicker from "./components/ColorPicker";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  return (
    <>  
      <Header />
      <main className="min-h-screen flex flex-col justify-center items-center">
      <ColorPicker />
      </main>
      <Footer />
    </>
  )
}

export default App
