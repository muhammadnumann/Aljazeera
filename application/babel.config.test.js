module.exports = process => {

  const isTestEnv = process.env('test');

  if (isTestEnv) {
    return {
      presets: [
        '@babel/preset-env',
        '@babel/preset-typescript',
        ['@babel/preset-react', { runtime: 'automatic' }]
      ],
    };
  }

  return {
    "presets": [
      [
        "next/babel",
        {
          "preset-env": {},
          "transform-runtime": {},
          "styled-jsx": {},
          "class-properties": {}
        }
      ]
    ],
    "plugins": []
  };
};
