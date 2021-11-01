var thumbUp = document.getElementsByClassName('status');

var trash = document.getElementsByClassName('fa-trash-alt');

Array.from(trash).forEach(function (element) {
	element.addEventListener('click', function () {
		const todo = this.parentNode;
		console.log(element.value);
		console.log('hi');

		fetch('delete', {
			method: 'delete',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				id: element.value,
			}),
		}).then(function (response) {
			window.location.reload();
		});
	});
});

var acc = document.getElementsByClassName('accordion');
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener('click', function () {
		this.classList.toggle('active');
		var panel = this.nextElementSibling;
		if (panel.style.height) {
			panel.style.height = null;
		} else {
			console.log(panel.scrollHeight);
			panel.style.height = 'fit-content';
		}
	});
}

const message = document.getElementById('messageid').innerText;
console.log(message);
const userid = document.getElementById('userid').innerText;
console.log(userid);
console.log(message === userid);
