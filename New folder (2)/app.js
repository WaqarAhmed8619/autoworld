// Sample dealer data
const dealers = [
    { brand: 'Honda', name: 'Honda City Dealer', location: 'City Center' },
    { brand: 'Suzuki', name: 'Suzuki World', location: 'East Side' },
    { brand: 'Ford', name: 'Ford Store', location: 'West End' },
];

// Function to filter dealers based on selected brand
function filterDealers() {
    const brandSelect = document.getElementById('brand');
    const selectedBrand = brandSelect.value;
    const dealerList = document.getElementById('dealer-list');

    dealerList.innerHTML = ''; // Clear previous results

    const filteredDealers = dealers.filter(dealer => dealer.brand === selectedBrand);
    if (filteredDealers.length > 0) {
        filteredDealers.forEach(dealer => {
            const dealerItem = document.createElement('div');
            dealerItem.textContent = `${dealer.name} - ${dealer.location}`;
            dealerList.appendChild(dealerItem);
        });
    } else {
        dealerList.textContent = 'No dealers found for this brand.';
    }
}

// Event listener for brand selection
document.getElementById('brand').addEventListener('change', filterDealers);
// warranty

function filterBrands() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const schemes = document.querySelectorAll('.brand-image');

    schemes.forEach(scheme => {
        const brandName = scheme.querySelector('h3').textContent.toLowerCase();
        if (brandName.includes(filter)) {
            scheme.style.display = '';
        } else {
            scheme.style.display = 'none';
        }
    });
}
function toggleDetails(element) {
    const details = element.nextElementSibling;
    details.style.display = (details.style.display === 'block') ? 'none' : 'block';
} 

