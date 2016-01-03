/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.exports = function (grunt) {

    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-clean");

    var filesToConcat = [
        'public_html/fibonacci.js',
        'public_html/fizzbuzz.js'
    ];
    var concatFile = 'public_html/dist/concat.js';

    var filesToUglify = [
        'public_html/sort.js'
    ];
    var uglifyFile = 'public_html/dist/uglify.js';

    // Project configuration.
    grunt.initConfig({
        concat: {
            options: {
                sourceMap: true
            },
            dist: {
                src: filesToConcat,
                dest: concatFile
            }
        },
        uglify: {
            options: {
                preserveComments: false,
                sourceMap: true
            },
            dist: {
                src: filesToUglify,
                dest: uglifyFile
            }
        },
        clean: {
            dist: 'public_html/dist'
        }
    });

    grunt.registerTask('default', ['clean', 'concat', 'uglify']);
};
