import { Logo } from "./Logo";

export function Header(){
    return <div className="my-2 text-dark d-flex justify-content-between">
                <div className="d-flex">
                    <Logo></Logo>
                    <p>My Company</p>
                </div>
              
                <div >
                    <a  className="mx-3 text-decoration-none" href="#">blog</a>
                    <a className="text-decoration-none" href="#">youtube</a>
                </div>
                
    </div> 
}