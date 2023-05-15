const { Menu } = require('electron');

const setMenu = (mainWindow) => {

	const submenuTheme = {
		label: 'Theme',
		submenu: [
			{
				label: 'Light',
				click: () => mainWindow.webContents.send('update-theme', 'light')
			},
			{
				label: 'Dark',
				click: () => mainWindow.webContents.send('update-theme', 'dark')
			}
		]
	}

	const template = [
		{
			label: 'File',
			submenu: [
				submenuTheme,
				{ role: 'toggleDevTools' },
				{ role: 'close' }
			]
		}
	];

	const menu = Menu.buildFromTemplate(template);

	Menu.setApplicationMenu(menu);
}

module.exports = { setMenu }