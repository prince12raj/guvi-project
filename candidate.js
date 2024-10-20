// Get all vote buttons
const voteButtons = document.querySelectorAll('.vote-button');

voteButtons.forEach(button => {
    button.addEventListener('click', function() {
        const candidateId = this.getAttribute('data-candidate');
        alert(`You have voted for Candidate ${candidateId}`);
        // Here, you can implement additional logic to store the vote
    });
});
