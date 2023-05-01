export async function load({ fetch }) {
	const response = await fetch('https://644f97dbba9f39c6ab675407.mockapi.io/comments');
	const data = await response.json();

	return {
		data
	};
}
