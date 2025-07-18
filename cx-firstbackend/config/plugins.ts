module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: env('UPLOAD_PROVIDER', 'local'),
      providerOptions: {
        // ...options spécifiques au provider cloud
      },
    },
  },
});
