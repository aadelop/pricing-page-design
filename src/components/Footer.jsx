import datos from '../datos.json'

function Section({data}, key){
    

    return <div key={key}>
            <h5>{data.title}</h5>
            <ul className="nav flex-column">
                {data.links.map((i, index) =>
                        <li key={index}><a className='text-decoration-none' href={i.url}>{i.titulo}</a></li>
                 ) }
            </ul>
        </div>
}


export function Footer(){
    return <div className="d-flex justify-content-between mt-4">
            <div className="fs-4">My Company</div>
                 {
                    datos.footer.map((item, index) =>
                        <Section data={item} key={index}></Section>
                    )
                 }
    </div>
}