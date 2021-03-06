'use strict';
var util = require('util');
var ScriptBase = require('../script-base.js');


var Generator = module.exports = function Generator() {
    ScriptBase.apply(this, arguments);

    // if the controller name is suffixed with ctrl, remove the suffix
    // if the controller name is just "ctrl," don't append/remove "ctrl"
    if (this.name && this.name.toLowerCase() !== 'controller' && this.name.substr(-4).toLowerCase() === 'controller') {
        this.name = this.name.slice(0, -4);
    }
};

util.inherits(Generator, ScriptBase);

Generator.prototype.createControllerFiles = function createControllerFiles() {
    this.generateSourceAndTest(
        'controller',
        'spec/controller',
        'controller',
        this.options['skip-add'] || false
    );
};
