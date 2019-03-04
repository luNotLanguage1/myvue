const path = require('path')

module.exports = {
    configureWebpack:{
        resolve: {
            alias: {
                '@src': path.resolve(__dirname, 'src/'),
                '@components': path.resolve(__dirname, 'src/components'),
            }
        }
    },
    lintOnSave: true,
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-pxtorem')({
                        rootValue : 75, // 换算的基数
                        propList   : ['*'],
                    }),
                ]
            }
        }
    }
    
};