document.addEventListener('DOMContentLoaded', () => {
    
    // Sidebar Toggle for Mobile
    const mobileToggle = document.querySelector('.mobile-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (mobileToggle && sidebar) {
        mobileToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    }

    // Dashboard Tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active to current
            btn.classList.add('active');
            const targetId = btn.getAttribute('data-target');
            const target = document.getElementById(targetId);
            if(target) target.classList.add('active');
        });
    });

    // Dummy Data filtering (Search)
    const searchInput = document.querySelector('.dashboard-search');
    if (searchInput) {
        searchInput.addEventListener('keyup', (e) => {
            const val = e.target.value.toLowerCase();
            const rows = document.querySelectorAll('.data-table tbody tr');
            rows.forEach(row => {
                const text = row.innerText.toLowerCase();
                row.style.display = text.includes(val) ? '' : 'none';
            });
        });
    }

    // Logout simulation
    const logoutBtn = document.querySelector('.logout-btn');
    if(logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // simple alert and redirect
            alert("Logging out successfully.");
            window.location.href = 'Login.html';
        });
    }

    // Dynamic UI Update based on Login Email
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
        // Extract name from email (e.g. ramesh.kumar@example.com -> Ramesh Kumar)
        let name = userEmail.split('@')[0];
        name = name.replace(/[^a-zA-Z]/g, ' '); // Replace dots/numbers with spaces
        
        // Capitalize words
        name = name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ').trim();
        if (!name) name = "User";
        
        const initial = name.charAt(0).toUpperCase();

        // 1. Update Sidebar Profile
        const sidebarName = document.querySelector('.sidebar-user-info h4');
        const sidebarEmail = document.querySelector('.sidebar-user-info p');
        const sidebarAvatar = document.querySelector('.sidebar-user-avatar'); // Wait, Farmer uses <i class="fas fa-user"></i>, Admin uses logo. Let's just update if it's text.
        
        if (sidebarName) sidebarName.textContent = name;
        if (sidebarEmail) sidebarEmail.textContent = userEmail;

        // 2. Update Topbar Profile
        // The topbar has a span for the name, and a div with text for the initial
        const topbarName = document.querySelector('.user-profile span');
        if (topbarName) topbarName.textContent = name;
        
        // Find the circle div inside user-profile (it has no class, but it's a div with width:35px)
        const profileDivs = document.querySelectorAll('.user-profile div');
        profileDivs.forEach(div => {
            // Check if it's the avatar circle (usually has text content of length 1 or 2, like "A" or "R")
            if (div.textContent.trim().length <= 2) {
                div.textContent = initial;
            }
        });
    }

});
