import React, {useState} from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const url = 'https://react-temp-auth.firebaseio.com';


export const AddTemper = ({ userId, fetchTemp }) => {
    const [value, setValue] = useState('');
    const [valDatePicker, setDatePicker] = useState('');

    const submitHandler = async (event)=>{
        if(!value.trim()){return false}
        const userDate = valDatePicker || new Date();

        const temp = {
            temper: value, userDate
        }
        await axios.post(`${url}/temperature/${userId}.json`, temp)
        .then(function (response) {
          fetchTemp();
        })
        .catch(function (error) {
          console.log(error);
        });
        setValue('');
        setDatePicker('')
        return false;
    }

    function changeValue(e){
        let val = e.target.value;
        val = val.replace(/[^\d,.]/,'');
        setValue(val);
    }

    const handleDate = date => {
        setDatePicker(date)
    };

    return(
        <form onSubmit={ ()=>false }>
            <div className="form-group">
                <DatePicker
                    selected={valDatePicker}
                    onChange={handleDate}
                />
            </div>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="add temperature"
                    value={value}
                    onChange = {changeValue}
                />
            </div>
            <button 
                type="button" 
                className="btn btn-success"
                onClick={submitHandler}
            >add temperature</button>
        </form>
    )
}
