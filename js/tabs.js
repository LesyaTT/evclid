document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.work__item-button').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            document.querySelectorAll('.work__item-button').forEach(function(rem) {
                rem.classList.remove('working__link_active')
              })
            
                tabsBtn.classList.add('working__link_active')
            document.querySelectorAll('.work__tabs-container').forEach(function(tabContent) {
                tabContent.classList.remove('tab-content-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
        })
    })
})
