const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    console.log('hit');
    console.log("event" + event);
    event.preventDefault();

    // Store the triggered events
    window.defferedPrompt = event;

    // Remove the hidden class from the button
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.defferedPrompt;

    if(!promptEvent){
        return;
    }

    //show prompt
    promptEvent.prompt();

    //reset the deferred prompt variable, it can only be used once
    window.defferedPrompt = null;

    butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('install hit');

    //clear prompt
    window.defferedPrompt = null;
    
});
