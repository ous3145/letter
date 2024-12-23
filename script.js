// Example data for the cards
const cardsData = [
  { id: 1, title: 'Anniversary Card', category: 'anniversary', image: 'images/anniversary1.jpg', gif: 'gif/anniversary1.gif' },
  { id: 2, title: 'Birthday Card', category: 'birthday', image: 'images/birthday1.jpg', gif: 'gif/front-back.gif' },
  { id: 3, title: 'Congratulations Card', category: 'congratulations', image: 'images/congratulations1.jpg', gif: 'gif/congratulations1.gif' },
  { id: 4, title: 'Halloween Card', category: 'halloween', image: 'images/halloween1.jpg', gif: 'gif/front-back.gif' },
  { id: 5, title: 'Happy Holidays Card', category: 'happy-holidays', image: 'images/holidays1.jpg', gif: 'gif/holidays1.gif' },
  { id: 6, title: 'Invitations Card', category: 'invitations', image: 'images/invitations1.jpg', gif: 'gif/front-back.gif' },
  { id: 7, title: 'Thanksgiving Card', category: 'thanksgiving', image: 'images/thanksgiving1.jpg', gif: 'gif/thanksgiving1.gif' },
  { id: 8, title: 'Anniversary Card', category: 'anniversary', image: 'images/anniversary2.jpg', gif: 'gif/anniversary2.gif' },
  { id: 9, title: 'Birthday Card', category: 'birthday', image: 'images/birthday2.jpg', gif: 'gif/front-back.gif' },
  { id: 10, title: 'Congratulations Card', category: 'congratulations', image: 'images/congratulations2.jpg', gif: 'gif/congratulations2.gif' },
  { id: 11, title: 'Halloween Card', category: 'halloween', image: 'images/halloween2.jpg', gif: 'gif/front-back.gif' },
  { id: 12, title: 'Happy Holidays Card', category: 'happy-holidays', image: 'images/holidays2.jpg', gif: 'gif/holidays2.gif' },
  { id: 13, title: 'Invitations Card', category: 'invitations', image: 'images/invitations2.jpg', gif: 'gif/front-back.gif' },
  { id: 14, title: 'Thanksgiving Card', category: 'thanksgiving', image: 'images/thanksgiving2.jpg', gif: 'gif/thanksgiving2.gif' },
  { id: 15, title: 'Anniversary Card', category: 'anniversary', image: 'images/anniversary3.jpg', gif: 'gif/anniversary3.gif' },
  { id: 16, title: 'Birthday Card', category: 'birthday', image: 'images/birthday3.jpg', gif: 'gif/front-back.gif' },
  { id: 17, title: 'Congratulations Card', category: 'congratulations', image: 'images/congratulations3.jpg', gif: 'gif/congratulations3.gif' },
  { id: 18, title: 'Halloween Card', category: 'halloween', image: 'images/halloween3.jpg', gif: 'gif/front-back.gif' },
  { id: 19, title: 'Happy Holidays Card', category: 'happy-holidays', image: 'images/holidays3.jpg', gif: 'gif/holidays3.gif' },
  { id: 20, title: 'Invitations Card', category: 'invitations', image: 'images/invitations3.jpg', gif: 'gif/front-back.gif' },
  { id: 21, title: 'Thanksgiving Card', category: 'thanksgiving', image: 'images/thanksgiving3.jpg', gif: 'gif/thanksgiving3.gif' },
  { id: 22, title: 'Anniversary Card', category: 'anniversary', image: 'images/anniversary4.jpg', gif: 'gif/anniversary4.gif' },
  { id: 23, title: 'Birthday Card', category: 'birthday', image: 'images/birthday4.jpg', gif: 'gif/front-back.gif' },
  { id: 24, title: 'Congratulations Card', category: 'congratulations', image: 'images/congratulations4.jpg', gif: 'gif/congratulations4.gif' },
  { id: 25, title: 'Halloween Card', category: 'halloween', image: 'images/halloween4.jpg', gif: 'gif/front-back.gif' },
  { id: 26, title: 'Happy Holidays Card', category: 'happy-holidays', image: 'images/holidays4.jpg', gif: 'gif/holidays4.gif' },
  { id: 27, title: 'Invitations Card', category: 'invitations', image: 'images/invitations4.jpg', gif: 'gif/front-back.gif' },
  { id: 28, title: 'Thanksgiving Card', category: 'thanksgiving', image: 'images/thanksgiving4.jpg', gif: 'gif/thanksgiving4.gif' },
  { id: 29, title: 'Happy Holidays Card', category: 'happy-holidays', image: 'images/holidays5.jpg', gif: 'gif/holidays5.gif' },
  { id: 30, title: 'Thanksgiving Card', category: 'thanksgiving', image: 'images/thanksgiving5.jpg', gif: 'gif/thanksgiving5.gif' },
];

// Function to display cards based on category
function displayCards(category) {
  const catalog = document.getElementById('card-catalog');
  const categoryTitle = document.getElementById('category-title');
  
  // Clear the current catalog
  catalog.innerHTML = '';
  
  // Set the title based on the category
  if (category === 'all') {
    categoryTitle.innerText = 'All Cards';
  } else {
    categoryTitle.innerText = category.charAt(0).toUpperCase() + category.slice(1) + ' Cards';
  }

  // Filter and display cards based on the selected category
  const filteredCards = category === 'all' ? cardsData : cardsData.filter(card => card.category === category);

  filteredCards.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card-item');
    
    // Add image with hover effect to switch between static and GIF
    const cardImage = document.createElement('img');
    cardImage.src = card.image;
    cardImage.dataset.gif = card.gif;
    cardImage.alt = card.title;

    cardImage.addEventListener('mouseenter', () => {
      cardImage.src = card.gif;
    });

    cardImage.addEventListener('mouseleave', () => {
      cardImage.src = card.image;
    });

    // Add button to select the card
    const button = document.createElement('button');
button.textContent = 'Choose That';
button.onclick = () => {
  // Update selected card information and show "Messaged" page
  updateCardSelectedSection(card);
  showPage('messaged'); // Navigate to "Messaged" page
};

    cardElement.appendChild(cardImage);
    cardElement.appendChild(button);
    catalog.appendChild(cardElement);
  });
}

// Set up category buttons
const categories = document.querySelectorAll('.category');
categories.forEach(categoryButton => {
  categoryButton.addEventListener('click', () => {
    const category = categoryButton.dataset.category;
    displayCards(category);
  });
});

// Display all cards by default
displayCards('all');

// JavaScript function to show the selected page and hide others
    function showPage(pageName) {
      var pages = document.getElementsByClassName('page');
      for (var i = 0; i < pages.length; i++) {
        if (pages[i].id === pageName) {
          pages[i].style.display = 'block';
        } else {
          pages[i].style.display = 'none';
        }
      }
    }
	
	// Function to handle the textarea options (alignment, font size, and font style)
document.getElementById('align').addEventListener('change', function() {
  const message = document.getElementById('message');
  message.style.textAlign = this.value;
});

document.getElementById('font-size').addEventListener('change', function() {
  const message = document.getElementById('message');
  message.style.fontSize = this.value;
});

document.getElementById('font-style').addEventListener('change', function() {
  const message = document.getElementById('message');
  
  // Check if a custom font is selected and apply it
  if (this.value === "hwBeau") {
    message.style.fontFamily = "hwBeau, sans-serif";
  } else if (this.value === "hwBernie") {
    message.style.fontFamily = "hwBernie, sans-serif";
  } else if (this.value === "hwBlaire") {
    message.style.fontFamily = "hwBlaire, sans-serif";
  } else {
    message.style.fontFamily = this.value;
  }
});

// Handling form submission (could be sent to a backend, here it's just a placeholder)
document.getElementById('sent-info-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Collect form data (you can extend this to send it to a backend)
  const sendDate = document.getElementById('send-date').value;
  const recipientName = document.getElementById('recipient-name').value;
  const recipientAddress = document.getElementById('recipient-address').value;
  const yourName = document.getElementById('your-name').value;
  const yourAddress = document.getElementById('your-address').value;

 
});


// Function to update the "Card Selected" section with selected card details
function updateCardSelectedSection(card) {
  const cardNameElement = document.getElementById('selected-card-name');
  const cardImageElement = document.getElementById('selected-card-image');
  const pricingTable = document.getElementById('pricing-table');

  // Update the name and image of the selected card
  cardNameElement.textContent = card.title;
  cardImageElement.src = card.image;

  // Update pricing table dynamically (for now, using static pricing data)
  const pricingData = [
    { quantity: '1', price: '$3.25' },
    { quantity: '2 > 20', price: '$2.93' },
    { quantity: '21 > 50', price: '$2.44' },
    { quantity: '51 > 100', price: '$2.11' },
    { quantity: '101 > 500', price: '$1.79' },
    { quantity: '501 > 1000', price: '$1.46' }
  ];

  // Clear existing rows
  pricingTable.innerHTML = '';

  // Create the table header row
  const headerRow = document.createElement('tr');
  const quantityHeader = document.createElement('th');
  quantityHeader.textContent = 'Quantity';
  headerRow.appendChild(quantityHeader);

  // Add the quantity headers (1+, 50+, 100+, etc.)
  pricingData.forEach(item => {
    const th = document.createElement('th');
    th.textContent = item.quantity;
    headerRow.appendChild(th);
  });
  pricingTable.appendChild(headerRow);

  // Create the row for pricing values
  const priceRow = document.createElement('tr');
  const priceHeader = document.createElement('td');
  priceHeader.textContent = 'Price';
  priceRow.appendChild(priceHeader);

  // Add the price cells
  pricingData.forEach(item => {
    const td = document.createElement('td');
    td.classList.add('price');
    td.textContent = item.price;
    priceRow.appendChild(td);
  });
  pricingTable.appendChild(priceRow);
}

document.getElementById('sent-info-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Collect form data
  const sendDate = document.getElementById('send-date').value;
  const recipientName = document.getElementById('recipient-name').value;
  const recipientAddress = document.getElementById('recipient-address').value;
  const yourName = document.getElementById('your-name').value;
  const yourAddress = document.getElementById('your-address').value;
  
  // Get the selected card image link
  const selectedCardImage = document.getElementById('selected-card-image').src;

  // Get the message content
  const messageContent = document.getElementById('message').value;

  // Get the selected font style
  const selectedFont = document.getElementById('font-style').value;
  
  // Get the selected quantity
  const selectedQuantity = document.getElementById('quantity').value;

  // Construct the URL for Google Forms submission
  const googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSf8-XkTJvwc37YxiOKQbCnopANotIUM2nlPOSOwm9iGiLRMYg/formResponse";

  // Create a new FormData object to send the form data
  const formData = new FormData();

  // Map the data to the Google Forms entry fields
  formData.append('entry.1227898845', selectedCardImage);  // Selected card image link
  formData.append('entry.986534822', messageContent);  // Message content
  formData.append('entry.111409662', selectedFont);  // Selected font style
  formData.append('entry.304285298', selectedQuantity);  // Selected Quantity (new entry)
  formData.append('entry.2067207830', sendDate);  // Requested send date
  formData.append('entry.222750441', yourName);  // Sender name
  formData.append('entry.615426978', yourAddress);  // Sender address
  formData.append('entry.1485487868', recipientName);  // Recipient name
  formData.append('entry.1417042995', recipientAddress);  // Recipient address

  // Send the form data to Google Forms using a POST request
  fetch(googleFormURL, {
    method: 'POST',
    body: formData
  }).then(response => {
    if (response.ok) {
      alert('Your message was submitted successfully!');
      // Optionally, reset the form or navigate to a "Sentdone" page
	  // Redirect to the "Sentdone" page
      showPage('sentdone'); // Navigate to the "Sentdone" page
    } else {
      alert('There was an error with your submission. Please try again.');
	  // Redirect to the "Sentdone" page
      showPage('sentdone'); // Navigate to the "Sentdone" page
    }
  }).catch(error => {
    console.error('Error submitting the form:', error);
    alert('There was an error with your submission. Please try again.');
	// Redirect to the "Sentdone" page
      showPage('sentdone'); // Navigate to the "Sentdone" page
  });
});



// Listen for changes to the Quantity dropdown
document.getElementById('quantity').addEventListener('change', function() {
  const quantity = this.value;
  
  // Get the form fields
  const recipientNameLabel = document.querySelector('label[for="recipient-name"]');
  const recipientNameInput = document.getElementById('recipient-name');
  const recipientAddressLabel = document.querySelector('label[for="recipient-address"]');
  const recipientAddressInput = document.getElementById('recipient-address');
  
  // Check if quantity is not '1+'
  if (quantity !== '1+') {
    // Hide recipient name and address fields
    recipientNameLabel.style.display = 'none';
    recipientNameInput.style.display = 'none';
    
    // Change address label to 'Spreadsheet URL'
    recipientAddressLabel.textContent = 'Spreadsheet URL:';
  } else {
    // Show recipient name and address fields
    recipientNameLabel.style.display = 'block';
    recipientNameInput.style.display = 'block';
    
    // Change address label back to 'Address'
    recipientAddressLabel.textContent = 'Address:';
  }
});

document.getElementById('template-selector').addEventListener('change', function() {
  const template = this.value;
  const messageTextArea = document.getElementById('message');
  
  let templateText = '';
  
  switch (template) {
    case 'birthday-professional':
      templateText = `Dear XXX,

You deserve the best of everything because you give the best to everyone around you.

From all of us here at XXX, Happy Birthday.
XXX`;
      break;
    case 'thank-you-personal':
      templateText = `Dear XXX,

From the bottom of my heart, thank you so much for your generosity and thoughtfulness. I love the ______ and am truly touched by your kindness.

Thank you again.

Love,
XXX`;
      break;
    case 'anniversary-personal':
      templateText = `Happy Anniversary, XXX & XXX!

We hope with every year your love for each other grows and gets stronger.

Thinking of you both,
XXX`;
      break;
    default:
      templateText = '';
      break;
  }

  // Set the selected template text into the textarea
  messageTextArea.value = templateText;
});

