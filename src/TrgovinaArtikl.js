import React from 'react';

function PosaljiUpit()
{
    return <td><button onClick={() => alert("Nedostupno")}>Dodaj u Košaricu</button></td>
}

function DodajUKosaru(props)
{
    return <td><button onClick={() => alert("Dodano u kosaricu")}>Dodaj u košaricu</button></td>
}

function TrgovinaArtikl(props)
{
    return (
        <tr key = {props.Id}>
            <td>{props.Id}</td>
            <td>{props.Naziv}</td>
            <td>{props.Proizvodac}</td>
            <td>{props.Model}</td>
            <td>{props.Cijena}</td>
            <td>{props.Kolicina}</td>
            { (props.Kolicina > 0) ? < DodajUKosaru/>: <PosaljiUpit/>}
        </tr>
    );
}
export default TrgovinaArtikl;