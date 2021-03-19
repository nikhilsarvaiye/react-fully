import json from '@rollup/plugin-json';
import sass from 'rollup-plugin-sass';
import typescript from 'rollup-plugin-typescript2';
import sourcemaps from 'rollup-plugin-sourcemaps';
import generatePackageJson from 'rollup-plugin-generate-package-json';

// import _package from './package.json'; // instead of '@rollup/plugin-json
// _package.main -> refers to 'main' entry in package.json file

const common = {
    plugins: [
        json(),
        sass({ insert: true }),
        typescript(),
        sourcemaps(),
        generatePackageJson({
            baseContents: (pkg) => ({
                ...pkg,
                dependencies: {},
                devDependencies: {},
                scripts: {},
            }),
            outputFolder: 'dist',
        }),
    ],
    output: [
        {
            dir: 'dist',
            format: 'cjs',
            sourcemap: true,
            strict: false,
            exports: 'named',
        },
    ],
    external: ['react', 'react-dom'],
};

const entries = [
    'avatar',
    'button',
    'center',
    'date-picker',
    'dropdown',
    'error',
    'input',
    'label',
    'message',
    'modal',
    'notification',
    'number-input',
    'portal',
    'scrollbar',
    'section',
    'spin',
    'splitter',
];

const rollupMultiInputOutput = entries.map((x) => {
    return {
        ...common,
        input: 'src/' + x + '/index.ts',
        output: [
            {
                ...common.output[0],
                dir: 'dist/' + x,
            },
        ],
    };
});

console.log(JSON.stringify(rollupMultiInputOutput));

export default rollupMultiInputOutput;
