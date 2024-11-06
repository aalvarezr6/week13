import "bootstrap/dist/css/bootstrap.min.css"

import { displayReviews } from './displayReviews';


// Added non-null operator (!)
document.getElementById('reviewForm')!.addEventListener('submit', async function(event) { //Selects the review form element form HTML & adds event listener 'submit'
  event.preventDefault(); //The page doesn't refresh after form is submitted. 

  const review = { //review object is created and will contain the information that the user inputs. 
    name: (document.getElementById('restaurantName') as HTMLInputElement).value,   // text property of the restaurant name
    text: (document.getElementById('reviewText') as HTMLTextAreaElement).value, // property of the review text
  };

  try { // Handles potential errors from asyn operations.
    await fetch('http://localhost:3001/reviews', { //Sends request to the server
      method: 'POST', //This is a post request.
      headers: { 'Content-Type': 'application/json' }, //specifies that the request is a json format.
      body: JSON.stringify(review)
    });
    alert('Gracias for your review');
    displayReviews(); // Refresh the list of reviews
    (event.target as HTMLFormElement).reset(); // tells typerscript that is a HTMLForm Element 
  } catch (error) {
    console.error('Error adding review:', error); //Catches if there's an error
  }
});

