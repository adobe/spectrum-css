<script>
window.adobeGlobalnavConfig = {
  locale: 'en',
  footer: {
    target: document.getElementById('footer_global'),
    excludeNavigation: true
  },
  callbacks: {
    globalnav_ready: function() {
      document.querySelector('#AdobeFooterNav').style.background = 'var(--spectrum-global-color-gray-50)';
      document.querySelector('.Footernav-disclaimers').style.color = 'var(--spectrum-body-text-color, var(--spectrum-alias-text-color))';
      document.querySelector('.Footernav-region').style.visibility = 'hidden';
    }
  }
}
</script>