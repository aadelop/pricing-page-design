import datos from '../datos.json'

function CardPrice({priceItem}){
    return <div className='card w-100 m-1'>
        <div className="card-header">
            <h4>{priceItem.title}</h4>
        </div>
        <div className='card-body'>
            <ul className='list-unstyled'>
                {priceItem.features.map((item,index) =>
                    <li key={index}>{item}</li>
                )}
            </ul>
            <button className='btn btn-outline-primary btn-lg w-100'>{priceItem.textButton}</button>
        </div>

    </div>
}


export function Prices(){
    return <div className="my-4 d-flex justify-content-between">
        {datos.prices.map((item,index) => 
            <CardPrice priceItem={item} key={index}></CardPrice>
        )}
    </div>
}