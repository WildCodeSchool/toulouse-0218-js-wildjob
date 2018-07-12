module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : "wcs-wildjob",
      script    : "server.js",
      env: {
        PORT: 5004,
        COMMON_VARIABLE: "true"
      },
      env_production : {
        NODE_ENV: "development",
	PORT: 5004
      }
    }
  ]
}

