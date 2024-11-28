











const seatarr = [];
const seatPrice = 550;
let totalPrice = 0;
let discount = 0;


const seatnum = document.getElementsByClassName('seatno');
const SeatsContainer = document.getElementById('selectedSeatsContainer');
const maxPrice = document.getElementById('totalPrice');
const maxTotal = document.getElementById('grandTotal');
const couponInput = document.getElementById('couponCode');
const applyButton = document.getElementById('applyCoupon');
const checkError = document.getElementById('couponError');
const disSection = document.getElementById('discountSection');
const disAmount = document.getElementById('discountAmount');
const couponSec = document.getElementById('couponSection');
const nameInput = document.getElementById('nameInput');
const phoneInput = document.getElementById('phoneInput');
const nextButton = document.getElementById('nextButton');
const bodySec = document.getElementById('skele');
const lastSec = document.getElementById('done');

for (let i = 0; i < seatnum.length; i++) {
    seatnum[i].addEventListener("click", function () {
        const seattext = seatnum[i].textContent;
        seatarr.push(seattext);

        totalPrice += seatPrice;
        updatePrices();
        console.log(seatarr)
        document.getElementById('totalseat').innerText = String(40 - seatarr.length);
        document.getElementById('seat_Selected').innerText = String(seatarr.length);

        seatnum[i].style.pointerEvents = 'none';
        seatnum[i].style.backgroundColor = '#1DD100';
        seatnum[i].style.color = 'white';

        const seatInfoDiv = document.createElement('div');
        seatInfoDiv.className = 'flex text-[#03071299] justify-between mb-4';

        const seatNumberP = document.createElement('p');
        seatNumberP.className = 'text-xl mb-4';
        seatNumberP.textContent = seattext;

        const seatClassP = document.createElement('p');
        seatClassP.className = 'text-xl mb-4';
        seatClassP.textContent = 'Economy';

        const seatPriceP = document.createElement('p');
        seatPriceP.className = 'text-xl mb-4';
        seatPriceP.textContent = seatPrice;

        seatInfoDiv.appendChild(seatNumberP);
        seatInfoDiv.appendChild(seatClassP);
        seatInfoDiv.appendChild(seatPriceP);

        SeatsContainer.appendChild(seatInfoDiv);

        if (seatarr.length === 4) {
            for (let j = 0; j < seatnum.length; j++) {
                seatnum[j].style.pointerEvents = 'none';
            }
            applyButton.disabled = false;
            applyButton.style.backgroundColor = '#1DD100';
            applyButton.style.color = 'white';
        }
    });
}



applyButton.addEventListener('click', function () {
    const couponCode = couponInput.value.trim().toLowerCase();

    if (couponCode === 'new15') {
        discount = totalPrice * 0.15;
        checkError.classList.add('hidden');
    } else if (couponCode === 'couple20') {
        discount = totalPrice * 0.20;
        checkError.classList.add('hidden');
    } else {
        discount = 0;
        checkError.classList.remove('hidden');
        return;
    }

    disSection.classList.remove('hidden');
    disAmount.textContent = `BDT ${(-discount)}`;

    couponSec.classList.add('hidden');

    updatePrices();
});

function updatePrices() {
    const grandTotal = totalPrice - discount;
    localStorage.setItem('totalPrice',JSON.stringify(totalPrice))
    localStorage.setItem('discount',JSON.stringify(discount))
    
    maxPrice.textContent = `BDT ${(totalPrice)}`;
    maxTotal.textContent = `BDT ${(grandTotal)}`;
}

function validateInputs() {
    const name = nameInput.value;
    const phone = phoneInput.value;


    if (name && phone) {
        nextButton.disabled = false;
        nextButton.style.backgroundColor = '#1DD100';
        nextButton.style.color = 'white';
    } else {
        nextButton.disabled = true;
        nextButton.style.backgroundColor = '';
        nextButton.style.color = ''; 
    }
}

nameInput.addEventListener('input', validateInputs);
phoneInput.addEventListener('input', validateInputs);

nextButton.addEventListener('click', function () {

    localStorage.setItem('selectedSeats',JSON.stringify(seatarr))
    if(nameInput.value && phoneInput.value && seatarr.length>0){

    bodySec.classList.add('hidden');
    lastSec.classList.remove('hidden');

    }
    else{
        alert('Please ensure at least one seat is selected, and the name and phone number are filled correctly.')
    }

});


const userProfile = {
  username: "JohnDoe",
  email: "johndoe@example.com",
  phone: "+9876543210"
};
localStorage.setItem("userProfile", JSON.stringify(userProfile));
localStorage.removeItem("userProfile");







