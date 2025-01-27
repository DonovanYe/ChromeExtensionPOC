var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.addedNodes.length) {
            var adElement = document.querySelector('div.fixed.inset-0.bg-gray-900.bg-opacity-75.flex.items-center.justify-center.z-50.p-4');
            if (adElement) {
                console.log("DEBUG: adElement found by observer, removing it");
                adElement.parentElement.removeChild(adElement);
            }
        }
    });
});

observer.observe(document.body, { childList: true, subtree: true });