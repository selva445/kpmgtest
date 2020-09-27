import React from 'react';
import { Layout } from '../shared/layout';

export const Factorial = () => {

    const handleevent=(e)=> {

        [e.target.name] =e.target.value
    }

    const[output,setOutput]=useState('')
    const[error,setError]=useState('')
    const handlesubmit=(e) =>{

        axios.get("https://localhost:3000/FactorialCalculator").then ( res =>{

            setOutput(res)
        })
        .catch(err){

            setError(err)
        }
    }
    return (
        <Layout pageId="factorial">
            <p>
               <div>
                   FACTORIAL PAGE
               </div>

            </p>
            <p>
                {/* User inputs a number (n) in a textbox, then clicks a button to calculate n! via a corresponding API call.
                Then the correct result is displayed on the page. */}

                <input type="text" name="number" placeholder="please enter the number" onChange={handleevent}></input>
                <button onClick={handlesubmit}> SUBMIT </button> 
                 <Label> Output is {output ? output :error }</Label>
            </p>
        </Layout>
    );
};