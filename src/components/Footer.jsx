import githubLogo from "../assets/github-logo.png"
export default function Footer() {
    return (
        <footer className="w-full flex justify-between items-center mt-30 p-6">
            <p>
                Made by Emma with 🤍
            </p>
            <a  href="https://github.com/emmalanza" target="_blank">
                    <img className="w-8 h-8 md:w-10 md:h-10 object-cover rounded-full transition-transform transform hover:scale-110" s
                    src={githubLogo} alt="Github Alb" />
                </a>
        </footer>
    )
}