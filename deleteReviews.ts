import { displayReviews } from './displayReviews';


export async function deleteReview(id: number): Promise<void> { //The delete asynch function
        console.log("attempting review", id); 
        try {
          await fetch(`http://localhost:3000/reviews/${id}`, { //Template literal - the request is sent to a specific review. 
            method: 'DELETE' //Request to Delete
          });
          alert('Review is deleted!');
          displayReviews(); // Refresh the list of reviews
        } catch (error) {
          console.error('Error deleting review:', error);
        }
      }

