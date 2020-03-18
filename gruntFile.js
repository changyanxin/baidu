module.exports = function(grunt) {
    grunt.initConfig({

        htmlmin: {
            options: {
    removeComments:true,
                collapseWhitespace: true
            },
            files: {
                src: "./reg.html",
                dest: "dist/reg.html"
            }
        },
      cssmin: {
            "./dist/reg.css":"./reg.css"
        },
       uglify: {
            "./dist/reg.js":"reg.js"
        }
    })


    grunt.loadNpmTasks("grunt-contrib-htmlmin");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.registerTask("default",["htmlmin","cssmin","uglify"]);
}