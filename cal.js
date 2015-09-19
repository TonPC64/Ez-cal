angular.module('calApp', [])
  .controller('calController', function () {
    var cal = this

    cal.total = 0
    cal.show = []

    cal.click = function (money) {
      cal.show.push({text: money})
      cal.total += money
    }

    cal.clear = function () {
      cal.show = []
      cal.total = 0
    }

  })
