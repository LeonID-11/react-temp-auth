import React, { useState, useEffect, Fragment} from 'react';
import {AddTemper} from './AddTemper';
import {TempItem} from './TempItem';
import axios from 'axios';

const url = 'https://react-temp-auth.firebaseio.com';

const TempList = function ({user}){
    const [temperList,setTemperature] = useState([]);

    const fetchTemp = async ()=>{

        await axios.get(`${url}/temperature/${user.uid}.json`)
        .then(function (response) {
            const payload = Object.keys(response.data || []).map( key => {
                return{
                    ...response.data[key],
                    key: key,
                }
            });
            setTemperature(payload);
        })
        .catch(function (error) {
        })
    }

    useEffect(()=>{
        fetchTemp()
        // eslint-disable-next-line
    },[])
    return(
        <Fragment>
            <AddTemper userId = {user.uid} fetchTemp={fetchTemp}/>

            {
                temperList.length
                ? (
                    <TempItem temperList={temperList} />
                ) :  (
                    <div className="alert alert-primary mt-4">
                        add temperature..
                    </div>
                )
            }

        </Fragment>
    )
}

export default TempList;