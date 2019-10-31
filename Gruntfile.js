'use-strict';
module.exports = function(grunt) {
    // configurations
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        cssmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'assets/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'assets/css',
                    ext: '.min.css'
                }]
            }
        },

        // configuration pour la concaténation
        concat: {
            dist: {
                src: "assets/js/*.min.js",
                dest: 'assets/js/main.js'
            }
        },

        uglify: {
            options: {
                separator: ";",
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: "assets/js",
                    src: ["*.js"],
                    dest: "assets/js",
                    ext: ".min.js"
                }]
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'assets/img',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'assets/img'
                }]
            }
        }
    });

    // import plugin
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // que faire lorsqu'on tape "grunt" dans la console
    grunt.registerTask('default', ['concat:dist', 'uglify:dist', 'cssmin:dist', 'imagemin:dynamic']);
}

