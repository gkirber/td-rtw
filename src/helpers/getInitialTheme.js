export function getInitialTheme() {
	const savedTheme = localStorage.getItem('theme')

	// Якщо збережена тема - 'dark', встановлюємо 'light'
	if (savedTheme === 'dark') {
		localStorage.setItem('theme', 'light')
		return 'light'
	}

	if (savedTheme) {
		return savedTheme
	} else {
		// За замовчуванням повертаємо світлу тему
		return 'light'
	}
}
