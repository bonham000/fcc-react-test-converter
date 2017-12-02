
// Command + Enter runs code
document.addEventListener('keydown', ({ metaKey, which }) => {
	if (metaKey && which === 13) convert();
});

const confirmation = (message) => {
	document.getElementById("success").innerHTML = message;
};

// Converter
const convert = () => {
	const testField = document.getElementById('test');
	const messageField = document.getElementById('message');

	const { value: test } = testField;
	const { value: message } = messageField;

	if (!test || !message) {
		confirmation("Failed! Empty input!");
		return;
	}

	const result = `
		assert((function() {
			${test}
		})(), ${message});
	`;

	document.getElementById("dummy").value = result;
	document.querySelector("#dummy").select();
	document.execCommand("Copy");
	confirmation("Copied to clipboard!");

	testField.value = '';
	messageField.value = '';
	testField.focus();

}