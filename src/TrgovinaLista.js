
import React from 'react';
import { ReactDOM } from 'react';
import TrgovinaArtikl from './TrgovinaArtikl';


function TrgovinaLista(props)
{
    return (
        <table className="table" >
            <thead>
                <tr>
                <th>#</th>
                <th>Naziv</th>
                <th>Proizvođač</th>
                <th>Model</th>
                <th>Cijena</th>
                <th>Količina</th>
                </tr>
            </thead>
            <tbody>
                {props.artikli.map((artikl) => {
                    return (
                        < TrgovinaArtikl Id={artikl.Id}
                        Naziv={artikl.Naziv}
                        Proizvodac={artikl.Proizvodac}
                        Model={artikl.Model}
                        Cijena={artikl.Cijena}
                        Kolicina={artikl.Kolicina}
                        />
                    );

                })}
                    
                

                
            </tbody>
        </table>
    );
}
export default TrgovinaLista;