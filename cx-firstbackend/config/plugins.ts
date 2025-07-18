module.exports = ({ env }) => {
  const provider = env('UPLOAD_PROVIDER', 'local');
  const config = { provider };

  // N'ajoute providerOptions QUE si provider !== 'local'
  if (provider !== 'local') {
    config.providerOptions = {
      // Ne rien mettre ici en local !
    };
  }

  return {
    upload: { config }
  };
};
