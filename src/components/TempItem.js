import React from 'react'

export const TempItem = ({temperList}) => {
    return(
    <div className="card-group pt-4">
        { temperList.map( (item)=>{
            let date = new Date(item.userDate);
            return(
                <div 
                    className="card text-center" 
                    key={item.key}
                >
                    <div className="card-body">
                        <h5 className="card-title">
                            {date.toLocaleDateString()}
                        </h5>
                        <hr/>
                        <p className="card-text">
                            temperature: {item.temper}
                        </p>
                    </div>
                </div>
            )
        }) }
    </div>
)}