module.exports = ({ env }) => {
  const provider = env('UPLOAD_PROVIDER', 'local');
  const config = {
    provider,
  };

  if (provider !== 'local') {
    config.providerOptions = {
      // ...options cloud, mais laisse vide en local
    };
  }

  return {
    upload: { config }
  };
};
