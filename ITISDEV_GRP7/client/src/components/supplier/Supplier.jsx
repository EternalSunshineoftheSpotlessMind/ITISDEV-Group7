import './supplier.css'

export default function Supplier({supp}) {
  return (
    <div className="supplier">
        <div className="suppLeft">{supp.suppName}</div>
        <div className="suppCenter">{supp.suppAddress}</div>
        <div className="suppRight">
            <div className='suppInfo'>
                <div className='suppContact'>{supp.suppContact}</div>
                <div className='suppName'>{supp.suppOwner}</div>
                <div className='suppURL'>{supp.suppUrl}</div>
            </div>
           <button className='suppButton'>Edit</button>
        </div>
    </div>
  )
}
