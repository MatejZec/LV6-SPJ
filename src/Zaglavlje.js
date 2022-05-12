function Zaglavlje(props)
{
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-light"><img src={props.logo}/><h2>{props.trgovina}</h2></nav>
    );
}
export default Zaglavlje;