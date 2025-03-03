



(function ($) {
	$.fn.countTo = function (options) {
		options = options || {};

		return $(this).each(function () {
			// set options for current element
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from: $(this).data('from'),
				to: $(this).data('to'),
				speed: $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals: $(this).data('decimals')
			}, options);

			// how many times to update the value, and how much to increment the value on each update
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;

			// references & variables that will change with each update
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};

			$self.data('countTo', data);

			// if an existing interval can be found, clear it first
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);

			// initialize the element with the starting value
			render(value);

			function updateTimer() {
				value += increment;
				loopCount++;

				render(value);

				if (typeof (settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}

				if (loopCount >= loops) {
					// remove the interval
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;

					if (typeof (settings.onComplete) == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}

			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.html(formattedValue);
			}
		});
	};

	$.fn.countTo.defaults = {
		from: 0,               // the number the element should start at
		to: 0,                 // the number the element should end at
		speed: 1000,           // how long it should take to count between the target numbers
		refreshInterval: 100,  // how often the element should be updated
		decimals: 0,           // the number of decimal places to show
		formatter: formatter,  // handler for formatting the value before rendering
		onUpdate: null,        // callback method for every time the element is updated
		onComplete: null       // callback method for when the element finishes updating
	};

	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
}(jQuery));

jQuery(function ($) {
	// custom formatting example
	$('.count-number').data('countToOptions', {
		formatter: function (value, options) {
			return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
		}
	});

	// start all the timers
	$('.timer').each(count);

	function count(options) {
		var $this = $(this);
		options = $.extend({}, options || {}, $this.data('countToOptions') || {});
		$this.countTo(options);
	}
});




$('.what--our--client--say--testmonial--wrapper.owl-carousel').owlCarousel({
	loop: true,
	margin: 10,
	nav: false,
	autoplay: true,
	autoplayTimeout: 2000,
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 3
		},
		1000: {
			items: 4
		}
	}
})


// sh professional reg banner form select

$('select').niceSelect();

// registration start

const registrationSteps = document.querySelectorAll('.sh--registration--col');
const progressBar = document.getElementById('sh--registration--progress--bar');


function updateStepProgress(step) {
	const totalSteps = registrationSteps.length;
	if (step > 0 && step <= totalSteps) {
		const progressPercentage = (step / totalSteps) * 100;
		progressBar.style.width = `${progressPercentage}%`;
	}
}


function showRegistrationStep(step) {
	registrationSteps.forEach((col, index) => {
		col.classList.toggle('active', index === step - 1);
	});
}

function registrationNextStep(currentStep) {
	if (currentStep >= 0 && currentStep < registrationSteps.length) {
		showRegistrationStep(currentStep + 1);
		updateStepProgress(currentStep + 1);
	}
}



function registrationPreviousStep(currentStep) {
	if (currentStep > 1) {
		showRegistrationStep(currentStep - 1);
		updateStepProgress(currentStep - 1);
	}
}

showRegistrationStep(1);
updateStepProgress(1);

// registration number code

var input = document.getElementById("sh--form--input--number");

if (input) {
	var iti = window.intlTelInput(input, {
		utilsScript:
			"https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js", // Correct path
		initialCountry: "nl"
	});
}



function notification() {
	const notificationButton = document.querySelector('.notification-main');
	const notificationDropdown = document.querySelector('.notification-dopdown');

	// Toggle dropdown visibility
	notificationButton.addEventListener('click', (event) => {
		event.stopPropagation(); // Prevents click from propagating to document
		notificationDropdown.classList.toggle('active'); // Adds or removes active class
	});

	// Close dropdown when clicking outside
	document.addEventListener('click', () => {
		notificationDropdown.classList.remove('active'); // Ensures dropdown is hidden
	});

	// Optional: Close dropdown when pressing ESC key
	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape') {
			notificationDropdown.classList.remove('active');
		}
	});

}

notification()





document.addEventListener('DOMContentLoaded', function () {
	const editButton = document.getElementById('profile-pic-edit-button');
	const fileInput = document.getElementById('profile-pic-input');

	if (editButton && fileInput) {
		editButton.addEventListener('click', function () {
			fileInput.click(); // Trigger the file input
		});
		fileInput.addEventListener('change', function (event) {
			const file = event.target.files[0];
			if (file) {
				const reader = new FileReader();
				reader.onload = function (e) {
					const profilePic = document.querySelector('.sh--profile-pic svg');
					if (profilePic) {
						profilePic.style.display = 'none'; // Hide the SVG
						const img = document.createElement('img');
						img.src = e.target.result;
						img.alt = 'Profile Picture';
						img.style.borderRadius = '50%';
						img.style.width = '100%';
						img.style.height = '100%';
						document.querySelector('.sh--profile-pic').appendChild(img);
					}
				};
				reader.readAsDataURL(file);
			}
		});
	}
});


function searchBarList() {
	const searchBarInput = document.querySelector('.search--bar input')
	const searchBar = document.getElementById('search--bar');
	const searchList = document.querySelector('.search--bar--list');

	if (searchBarInput, searchBar, searchList) {
		searchBarInput.addEventListener('click', function (event) {
			// Only show the list if it's not already visible
			if (!searchList.classList.contains('show')) {
				searchList.classList.add('show');
			}
			event.stopPropagation(); // Prevents the click event from bubbling up
		});

		document.addEventListener('click', function (event) {
			// Hide the list if the click is outside the search bar
			if (!searchBar.contains(event.target)) {
				searchList.classList.remove('show');
			}
		});
	}

}

searchBarList()

function profileChangeBtn() {

	const changeBtn = document.getElementById('changeButton');
	const descriptionContainer = document.getElementById('descriptionContainer');
	const companyDescription = document.getElementById('companyDescription');
	const readMoreButton = document.getElementById('readMoreButton');
	const inputField = document.createElement('textarea');
	const saveButton = document.createElement('button');

	if (changeBtn, descriptionContainer, companyDescription, readMoreButton, inputField, saveButton) {

		changeBtn.addEventListener('click', function () {
			inputField.id = 'descriptionInput';
			inputField.value = companyDescription.innerText;
			inputField.rows = 4;
			saveButton.id = 'saveButton';
			saveButton.innerText = 'Save';

			// Replace existing content with input and button
			descriptionContainer.innerHTML = '';
			descriptionContainer.appendChild(inputField);
			descriptionContainer.appendChild(saveButton);

			// Save button event listener
			saveButton.addEventListener('click', function () {
				const newDescription = inputField.value;

				// Restore original paragraph
				companyDescription.innerText = newDescription;
				descriptionContainer.innerHTML = '';
				descriptionContainer.appendChild(companyDescription);

				// Restore "Read More" button if it was previously there
				if (readMoreButton) {
					descriptionContainer.appendChild(readMoreButton);
				}
			});
		});
	}
}
profileChangeBtn()





const slider = document.getElementById("slider");
const button = document.getElementById("sliderButton");

const updateButtonPosition = () => {
	if (!slider || !button) {
		console.error("Slider or button element is missing.");
		return;
	}

	const sliderWidth = slider.offsetWidth;
	const max = Number(slider.max); // Convert to number
	const min = Number(slider.min); // Convert to number
	const value = Number(slider.value); // Convert to number

	const percentage = ((value - min) / (max - min)) * 100;

	button.textContent = `${value} KM`;
	// Adjust offset for the button to align correctly
	const buttonOffset = (sliderWidth / 100) * percentage - button.offsetWidth / 2;
	button.style.left = `${buttonOffset}px`;
};

updateButtonPosition();
slider?.addEventListener("input", updateButtonPosition);







// Upload Passport img 

const fileInput = document.getElementById('fileInput');
const uploadContainer = document.querySelector('.upload-container');
const icon = document.querySelector('.icon');

fileInput?.addEventListener('change', (event) => {
	const file = event.target.files[0];

	if (file && file.type.startsWith('image/')) {
		const reader = new FileReader();
		reader.onload = () => {
			uploadContainer.style.backgroundImage = `url(${reader.result})`;
			uploadContainer.innerHTML = ''; // Remove the icon
		};
		reader.readAsDataURL(file);
	} else {
		alert('Please upload a valid image file.');
	}
});


const hamburger = document.getElementById('sh--navbar--toggle--button');
const navMenu = document.querySelector('.navbar--menu');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	navMenu.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
	const isClickInsideMenu = navMenu.contains(event.target);
	const isClickOnHamburger = hamburger.contains(event.target);

	if (!isClickInsideMenu && !isClickOnHamburger) {
		hamburger.classList.remove('active');
		navMenu.classList.remove('active');
	}
});



// Select elements

