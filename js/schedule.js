let position = 0;

var city = '';
var date = '';
var notes = '';
var fname = '';
var lname = '';
var email = '';
var phone = '';
var address = '';
var zipcode = '';
var services = [];
var typeOfService = '';
var typeOfEstimate = '';

const cardOne = document.querySelector('#cardOne');
const cardTwo = document.querySelector('#cardTwo');
const cardThree = document.querySelector('#cardThree');

const nextBtnOne = document.querySelector('#nextBtnOne');
const nextBtnTwo = document.querySelector('#nextBtnTwo');
const prevBtnOne = document.querySelector('#prevBtnOne');
const prevBtnTwo = document.querySelector('#prevBtnTwo');
const submitBtn = document.querySelector('#submitBtn');

const servicesList = document.querySelector('#servicesList');
const quoteRadioBtn = document.querySelector('#quoteRadioBtn');
const appointmentRadioBtn = document.querySelector('#appointmentRadioBtn');

const serviceDate = document.querySelector('#serviceDate');
const homeRadioBtn = document.querySelector('#homeRadioBtn');
const additionalNotes = document.querySelector('#additionalNotes');
const businessRadioBtn = document.querySelector('#businessRadioBtn');

const firstName = document.querySelector('#fname');
const lastName = document.querySelector('#lname');
const emailAddress = document.querySelector('#email');
const phoneNo = document.querySelector('#phone');
const custAddress = document.querySelector('#address');
const custCity = document.querySelector('#city');
const zipCode = document.querySelector('#zipcode');


/**
 *
 *  Handle first (Next) button click
 *
 */
nextBtnOne.addEventListener('click', () => {
  // Check if user has selected a type of service
  if (!homeRadioBtn.checked && !businessRadioBtn.checked) {
    alert('Please select the type of service you want!');
    return;
  };
  // Fill in the type of service
  typeOfService = homeRadioBtn.checked ? homeRadioBtn.value : businessRadioBtn.value;

  // Hide the current card and show the next one
  cardOne.classList.add('dp-none');
  cardTwo.classList.remove('dp-none');
  position += 1;

});

/**
 * 
 * Handle first (Prev) button
 * 
 */
prevBtnOne.addEventListener('click', () => {
  if (typeOfService === 'homeService') {
    homeRadioBtn.checked = true;
  } else if (typeOfService === 'businessService') {
    businessRadioBtn.checked = true;
  };

  // Hide the current card and show the next one
  cardOne.classList.remove('dp-none');
  cardTwo.classList.add('dp-none');
  position -= 1;
});

/**
 * 
 *  Handle second (Next) button click
 * 
 */
nextBtnTwo.addEventListener('click', () => {

  // Check to see if all required fields are filled.
  if (
      servicesList.selectedOptions.length === 0 || 
      (!quoteRadioBtn.checked && !appointmentRadioBtn.checked) ||
      serviceDate.value === ''
    ) {
    alert('Please fill in all the required fields!');
    return;
  }; 

  // Assign values
  date = serviceDate.value;
  notes = additionalNotes.value;
  services = servicesList.selectedOptions;
  typeOfEstimate = quoteRadioBtn.checked ? quoteRadioBtn.value : appointmentRadioBtn.value;

  // Hide the current card and show the next one
  cardTwo.classList.add('dp-none');
  cardThree.classList.remove('dp-none');
  position += 1;

});

/**
 * 
 * Handle second (Prev) button
 * 
 */
prevBtnTwo.addEventListener('click', () => {
  if (typeOfEstimate === 'quote') {
    quoteRadioBtn.checked = true;
  } else if (typeOfEstimate === 'appointment') {
    appointmentRadioBtn.checked = true;
  };

  // Hide the current card and show the next one
  cardThree.classList.add('dp-none');
  cardTwo.classList.remove('dp-none');
  position -= 1;
});

/**
 *
 *  Handle submit button click
 *
*/
submitBtn.addEventListener('click', () => {
  if (
    firstName.value === '' ||
    lastName.value === '' ||
    emailAddress.value === '' ||
    phoneNo.value === '' ||
    custAddress.value === '' ||
    custCity.value === '' ||
    zipCode.value === ''
  ) {
    alert('Please fill in all the required fields!');
    return;
  };

  fname = firstName.value;
  lname = lastName.value;
  email = emailAddress.value;
  phone = phoneNo.value;
  address = custAddress.value;
  city = custCity.options[custCity.selectedIndex].value;
  zipcode = zipCode.value;

  console.log('This is the info to be submitted!', {
    fname,
    lname,
    email,
    phone,
    city,
    date,
    notes,
    address,
    zipcode,
    services,
    typeOfService,
    typeOfEstimate,
  });
  alert('We down here now...');

});

