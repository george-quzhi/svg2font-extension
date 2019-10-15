// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
var svg2font = require("svg2font");
var path = require('path');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "svg2font-extension" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable_svg2font = vscode.commands.registerCommand('extension.svg2font', (param) => {
		const target = path.extname(param.path) === '.svg' ? path.dirname(param.path) : param.path;
		const config = vscode.workspace.getConfiguration('svg2font');
		let targetPath;
		if (config.fontPath && config.fontPath.length > 0) {
			if (path.isAbsolute(config.fontPath)) {
				targetPath = config.fontPath;
			} else {
				targetPath = path.join(target, config.fontPath);
			}
		} else {
			targetPath = path.join(target, 'iconfont');
		}
		try {
			svg2font.generate(param.path, targetPath, {
				unicodeNum: config.unicodeNum || 60000, //指定font的unicode起始值。
				fileName: config.fileName || 'iconfont', //指定生成字体文件的名字。
				fontFamily: config.fontFamily || 'iconfont', //指定字体的font-family。
				fontClass: config.fontClass || 'icon-' //指定图标class的前缀。
			});
			vscode.window.showInformationMessage('generate done!');
		} catch (e) {
			vscode.window.showInformationMessage('generate error! please check your file or directory is (or contain) a svg file.');
		}
	});

	let disposable_font2svg = vscode.commands.registerCommand('extension.font2svg', (param) => {
		try {
			let targetPath;
			const config = vscode.workspace.getConfiguration('svg2font');
			const target = path.dirname(param.path);
			if (config.svgPath && config.svgPath.length > 0) {
				if (path.isAbsolute(config.svgPath)) {
					targetPath = config.svgPath;
				} else {
					targetPath = path.join(target, config.svgPath);
				}
			} else {
				targetPath = path.join(target, 'icons');
			}

			svg2font.reverse(param.path, targetPath);
			vscode.window.showInformationMessage('generate done!');
		} catch (e) {
			vscode.window.showInformationMessage('generate error! please check if your selected file is a font file (ttf,woff,svg).');
		}
	});

	context.subscriptions.push(disposable_svg2font);
	context.subscriptions.push(disposable_font2svg);
}

// this method is called when your extension is deactivated
export function deactivate() { }
