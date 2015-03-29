'use strict';

angular.module('sad.version', [
  'sad.version.interpolate-filter',
  'sad.version.version-directive'
])

.value('version', '0.1');
