import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = fileURLToPath(import.meta.url);

const config = {
	entry: './chatbots/chat.js',
	resolve: {
		extensions: ['.js']
	},
	experiments: {
		outputModule: true
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		library: {
			type: "module"
		},
		filename: 'bundle.js'
	}
};

export default config;
