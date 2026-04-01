// Offline project modal
function showOfflineModal() {
    const modal = document.getElementById('offline-modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeOfflineModal() {
    const modal = document.getElementById('offline-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Setup offline project links
document.addEventListener('DOMContentLoaded', function() {
    const offlineLinks = document.querySelectorAll('.project-link-offline');
    offlineLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showOfflineModal();
        });
    });
    
    // Close modal on overlay click
    const modal = document.getElementById('offline-modal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeOfflineModal();
            }
        });
    }
    
    // Close modal with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeOfflineModal();
        }
    });
});
