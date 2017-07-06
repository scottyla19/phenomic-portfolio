var gulp = require("gulp");
var path = require("path");

gulp.task("generate-service-worker", function(callback) {
  var swPrecache = require("sw-precache");
  var rootDir = "dist";

  swPrecache.write(
    `${rootDir}/service-worker.js`,
    {
      staticFileGlobs: [
        rootDir + "/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff}",
        rootDir + "/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff}"
      ],
      stripPrefix: rootDir,
      runtimeCaching: [
        {
          urlPattern: /\/blog.*/,
          handler: "networkFirst",
          options: {
            cache: {
              maxEntries: 10,
              name: "blog-cache"
            }
          }
        }
      ]
    },
    callback
  );
});
