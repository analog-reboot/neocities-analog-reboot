function init()
{
var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
if (mobile) {
    window.location = "https://analog-reboot.neocities.org/mobile-alert.html";
}
}

window.onload = init;