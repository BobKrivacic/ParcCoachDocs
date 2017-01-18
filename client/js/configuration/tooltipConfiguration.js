(function(patientReadmittance) {

  patientReadmittance.config(function ($tooltipProvider) {
    $tooltipProvider.options({
      animation: true,
      popupDelay: 1000,
      trigger: 'mouseenter',
    });
  })
  
})(window.patientReadmittance);