const path = require('path')
const { app, BrowserWindow } = require('electron')
const { setMenu } = require('./src/set-menu');

const createWindow = async () => {
	const mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			preload: path.join(__dirname, 'src/preload.js')
		}
	})

	await mainWindow.loadFile('src/index.html')

	setMenu(mainWindow)
}

app.whenReady().then(async () => {
	await createWindow()

	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow()
	})
})
