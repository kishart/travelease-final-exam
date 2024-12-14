function Form(){
    return(

        <>
        <div>
            <div>
                <div>
                        <label for="name">Full Name:</label>
                    <input type="text" /> <br/>
                    <label>Email:</label> 
                    <input type="email"/><br/>
                    <label for="phone">Phone Number:</label> 
                    <input type="tel"/><br/>
                    <label for="destination">Destination:</label>
                    <input type="text" /><br/>
                    <label for="travel-date">Travel Date:</label>
                    <input type="date" /><br/>
                    <label for="return-date">Return Date:</label>
                    <input type="date" /><br/>
                    <label for="adults">Number of Adults:</label>
                    <input type="number"/><br/>
                    <label for="children">Number of Children:</label> <br/>
                    <input type="number"/><br/>
                    <label for="comments">Additional Comments:</label> <br/>
                    <textarea rows="4"> </textarea>  <br/>
                    
                    <button type="submit">Submit Booking</button>
                </div>
            </div>
           
            <div>
                    <div>  
                    <h1>Itenirary Information</h1>
                    <h4>Contact Person: </h4>
                    <h4>Email:</h4>
                    <h4>ContactNumber:</h4>
                    <h4>Destination:</h4>
                    <h4>Travel Date:</h4>
                    
                    <h4>Return Date:</h4>
                    
                    <h4>Return Date:</h4>
                    <h4>Number of Adults:</h4>
                    <h4>Number of Children:</h4>
                    <h4>Additinal Comments:</h4>

                    </div>
                </div>
            </div>
        </>
    );

}

export default Form