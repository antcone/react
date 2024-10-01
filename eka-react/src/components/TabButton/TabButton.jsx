// const TabButton = (props) => {
//     return <li><button>{props.children}</button></li>;
// }

// export default TabButton;

const TabButton = ({children, onSelect}) => {


 return (
    <li>
    <button onClick={onSelect}>{children}</button>
    </li>
    );
}

export default TabButton;