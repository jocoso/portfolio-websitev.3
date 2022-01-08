const path = require('path');

module.exports = {
    resolve: {
        extensions: ['.js', '.ts', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@assets': path.resolve(__dirname, 'src/components'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@views': path.resolve(__dirname, 'src/views')
        },
    },
}
