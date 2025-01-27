import logo from "../assets/logo.png"

export default function Header() {
    return (
        <header className="flex items-center gap-6">
            <img src={logo} alt="Logo" className="w-12 h-12 ml-6" />
            <h1 className="text-2xl text-center font-bold my-8">Color Picker App</h1>
        </header>
    )
}