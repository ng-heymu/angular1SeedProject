module.exports = function (grunt) {
        
    grunt.initConfig({        
        concat : {
            source: {
                src: ['app.js', 'dist/template.js', 'app/**/*.js'],
                dest: 'dist/app.js'
            },
            development: {
                src : ["vendor/managed/jquery/dist/jquery.js",
                       "vendor/managed/bootstrap/dist/js/bootstrap.js",
                       "vendor/managed/angular/angular.js",
                       "vendor/managed/angular-route/angular-route.js",
                       "vendor/managed/angular-bootstrap/ui-bootstrap-tpls.js"],
                dest : 'dist/vendor.js'
            },
            production: {
                src : ["vendor/managed/jquery/dist/jquery.min.js",
                       "vendor/managed/bootstrap/dist/js/bootstrap.min.js",
                       "vendor/managed/angular/angular.min.js",
                       "vendor/managed/angular-route/angular-route.min.js",
                       "vendor/managed/angular-bootstrap/ui-bootstrap-tpls.min.js"],
                dest : 'dist/vendor.js'
            }
        },
        
        ngtemplates : {
            angularSeedProject: {
                src:      'app/**/**.html',
                dest:     'dist/template.js'
              }
        },
        
        clean: {
            dist: {
              src: ['dist/**']
            },
            template : {
              src: ['dist/template.js']
            }
        },
        
        watch: {
            scripts: {
              files: ['app.js','app/**/*.js', 'app/**/**.html'],
              tasks: ['clean:dist','ngtemplates', 'concat', 'clean:template'],
              options: {
                spawn: false
              }
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    grunt.registerTask('default',    ['clean:dist','ngtemplates', 'concat:source', 'concat:development','clean:template']);
    grunt.registerTask('production', ['clean:dist','ngtemplates', 'concat:source', 'concat:production', 'clean:template']);
};


/*
 
     Run your test : Karma
     write your test : jasmine, sinon, spy
     
 */