import React from 'react';

const FormAction = () => {
 
    const handleFormSubmit = (formData) => {
           console.log(formData.get('name'))
           console.log(formData.get('email'))
    }

    return (
        <div>
            <form  action={handleFormSubmit}>
                <input type="name" placeholder='Name' name='name' />
                <br />
                <input type="email" placeholder='Your email' name='email' />
                <br />
                <input type="Submit" value="Submit" />
            </form>
        </div>
    );
};

export default FormAction;