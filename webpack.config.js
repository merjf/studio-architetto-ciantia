module.exports = {
    module: {
      rules: [{
        test: /\.scss$/,
        use: [
            'vue-style-loader',
            'css-loader',
            {
            loader: 'sass-loader',
            // Requires sass-loader@^7.0.0
            options: {
                // This is the path to your variables
                data: "@import '@/assets/styles/_colors.scss'"
            },
            // Requires sass-loader@^8.0.0
            options: {
                // This is the path to your variables
                prependData: "@import '@/assets/styles/_colors.scss'"
            },
            // Requires sass-loader@^9.0.0
            options: {
                // This is the path to your variables
                additionalData: "@import '@/assets/styles/_colors.scss'"
            },
            },
        ]},
      ],
    }
}