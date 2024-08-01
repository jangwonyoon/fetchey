import esbuild from 'esbuild';

const baseConfig = {
  entryPoints: ['src/index.ts'], // 컴파일할 파일
  outdir: 'dist', // 컴파일된 파일이 저장될 경로
  bundle: true, // 번들링 여부
  sourcemap: true, // 소스맵 생성 여부
};

Promise.all([
  // common.js
  esbuild.build({
    ...baseConfig,
    format: 'cjs',
    outExtension: {
      '.js': '.cjs',
    },
  }),

  // esm
  esbuild.build({
    ...baseConfig,
    format: 'esm',
  }),
]).catch(() => {
  console.log('Build failed');
  process.exit(1);
});
