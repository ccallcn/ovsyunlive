/**
 * Created by igor on 10.10.16.
 */

"use strict";

angular
    .module('app.directive', [])
    .directive('uiTimer', function () {
        return {
            restrict: 'A',
            scope: {start: "=start"},
            link: function(scope, ele) {
                var checkTime, startTimer;

                startTimer = function() {
                    if (scope.$$destroyed)
                        return;
                    var m, s, time, t;

                    if (!scope.start) {
                        ele.html("00:00");
                        return t = setTimeout(startTimer, 1000);
                    }
                    s = Math.floor((Date.now() - scope.start) / 1000);
                    m = Math.floor(s / 60);
                    m = checkTime(m);
                    s = checkTime(s % 60);
                    time = m + ":" + s;
                    ele.html(time);
                    return t = setTimeout(startTimer, 1000);
                };
                checkTime = function(i) {
                    if (i < 10) {
                        i = "0" + i;
                    }
                    return i;
                };
                return startTimer();
            }

        }
    });