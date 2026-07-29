import "./Header.scss";

export const Header = () => {
    
    return (
        <header className="header">
            <div className="header__logo">VladK</div>

            <ul className="header__nav">
                <li className="header__nav-item">About me</li>
                <li className="header__nav-item">Skills</li>
                <li className="header__nav-item">My projects</li>
            </ul>
        </header>
    );
}
