import { deleteReview } from './deleteReviews';
import { Review } from './interfaces';


export async function displayReviews() {
    const reviewsContainer = document.getElementById('reviewsContainer');
    if (reviewsContainer) reviewsContainer.innerHTML = ''; // Clears existing reviews

    try {
        const response = await fetch('http://localhost:3001/reviews');
        const reviews = await response.json() as Review[]; // Assuming Review is available globally in main.ts

        reviews.forEach((review) => {
            const reviewCard = document.createElement('div');
            reviewCard.classList.add('card', 'mb-3');
            reviewCard.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${review.name}</h5>
                    <p class="card-text">${review.text}</p>
                </div>
            `;

            const deleteButton = document.createElement('button');
            deleteButton.classList.add('btn', 'btn-danger');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => deleteReview((review.id)));

            
            reviewCard.appendChild(deleteButton);

            const reviewsContainer = document.getElementById ('reviewsContainer')!; //non-null assertion. 
            reviewsContainer.appendChild(reviewCard);
        
        });
    } catch (error) {
        console.error('Error displaying reviews:', error);
    }
}
