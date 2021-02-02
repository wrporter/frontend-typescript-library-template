import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';

import pkg from './package.json';

export default [{
    input: 'src/index.ts',
    output: [
        {
            dir: 'dist',
            format: 'cjs',
            exports: 'named',
            sourcemap: true
        }
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        typescript({
            declaration: true,
            declarationDir: 'dist/types',
            rootDir: 'src'
        }),
        commonjs(),
    ]
}, {
    input: 'src/index.ts',
    output: [
        {
            file: pkg.module,
            format: 'es',
            exports: 'named',
            sourcemap: true
        }
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        typescript(),
        commonjs(),
    ]
}];
