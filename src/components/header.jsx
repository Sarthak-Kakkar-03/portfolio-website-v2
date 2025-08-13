export default function Header() {

    return (
        <div className="flex flex-1 text-2xl h-12 p-2 justify-between box-border shadow">
            <div className="w-1/2 p-3">Home</div>
            <div className="flex flex-1 justify-evenly"> 
                <a href="">About</a>
                <a href="">Experience</a>
                <a href="">Skills</a>
                <a href="">Projects</a>
                <a href="">Contact Me</a>
            </div>
        </div>
    )
}