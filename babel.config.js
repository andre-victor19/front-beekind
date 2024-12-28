module.exports = {
    plugins: [
      [
        'transform-imports',
        {
          '@mui/material': {
            transform: '@mui/material/${member}',
            preventFullImport: true,
          },
        },
      ],
    ],
  };
  