module.exports = {
    extends: [
        'eslint-config-alloy/typescript-react',
    ],
    globals: {
        // 这里填入你的项目需要的全局变量
        // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
        //
        // React: false,
        // ReactDOM: false
        $fetch:false,
        $Toast:false
    },
    rules: {
        // 这里填入你的项目需要的个性化配置，比如：
        'indent': [
            2,
        ]
    }
};