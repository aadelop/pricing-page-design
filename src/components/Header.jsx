import { Logo } from "./Logo";
import datos from '../datos.json'

export function Header(){
    return <div className="my-2 text-dark d-flex justify-content-between">
                <div className="d-flex">
                    <Logo></Logo>
                    <p className="mx-2">{datos.header.name}</p>
                </div>
              
                <div >
                    {
                        datos.header.links.map((item, index) =>
                            <a key={index}  className="mx-3 text-decoration-none" href={item.url}>{item.text}</a>
                        )
                    }
                </div>
                
    </div> 
}