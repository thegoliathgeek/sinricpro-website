
i18next
    .use(i18nextXHRBackend)
    .use(i18nextBrowserLanguageDetector)
    .init({
        fallbackLng: 'en',
        debug: false,
        backend: {
            loadPath: 'i18n/{{ns}}.{{lng}}.json',
            crossDomain: true
        }
    }, function (err, t) {
        updateContent();
    });

function updateContent() {
    document.getElementById('title').innerHTML = i18next.t('title', { what: 'i18next' });
    document.getElementById('subtitle').innerHTML = i18next.t('subtitle', { what: 'i18next' });
    document.getElementById('login').innerHTML = i18next.t('login', { what: 'i18next' });
    document.getElementById('signup').innerHTML = i18next.t('signup', { what: 'i18next' });
    document.getElementById('getStartedNow').innerHTML = i18next.t('getStartedNow', { what: 'i18next' });
    document.getElementById('howSinricProWorks').innerHTML = i18next.t('howSinricProWorks', { what: 'i18next' });
    document.getElementById('createYourSinricProAccount').innerHTML = i18next.t('createYourSinricProAccount', { what: 'i18next' });
    document.getElementById('signupForYourVeryOwn').innerHTML = i18next.t('signupForYourVeryOwn', { what: 'i18next' });
    document.getElementById('addSmartHomeDevices').innerHTML = i18next.t('addSmartHomeDevices', { what: 'i18next' });
    document.getElementById('downloadExampleCodeFrom').innerHTML = i18next.t('downloadExampleCodeFrom', { what: 'i18next' });
    document.getElementById('useTheSinricProApp').innerHTML = i18next.t('useTheSinricProApp', { what: 'i18next' });
    document.getElementById('whySinricPro').innerHTML = i18next.t('whySinricPro', { what: 'i18next' });
    document.getElementById('easyToUse').innerHTML = i18next.t('easyToUse', { what: 'i18next' });
    document.getElementById('itTakesLessThan').innerHTML = i18next.t('itTakesLessThan', { what: 'i18next' });
    document.getElementById('step1CreateAnAccount').innerHTML = i18next.t('step1CreateAnAccount', { what: 'i18next' });
    document.getElementById('step2AddANewDevice').innerHTML = i18next.t('step2AddANewDevice', { what: 'i18next' });
    document.getElementById('Step3DownloadTheExample').innerHTML = i18next.t('Step3DownloadTheExample', { what: 'i18next' });
    document.getElementById('Step4ControlUsingApp').innerHTML = i18next.t('Step4ControlUsingApp', { what: 'i18next' });
    document.getElementById('YouCanControlYourDevice').innerHTML = i18next.t('YouCanControlYourDevice', { what: 'i18next' });
    document.getElementById('androidApp').innerHTML = i18next.t('androidApp', { what: 'i18next' });
    document.getElementById('control').innerHTML = i18next.t('control', { what: 'i18next' });

    document.getElementById('supportedDevices').innerHTML = i18next.t('supportedDevices', { what: 'i18next' });
    document.getElementById('smartSwitch').innerHTML = i18next.t('smartSwitch', { what: 'i18next' });
    document.getElementById('smartLightBulb').innerHTML = i18next.t('smartLightBulb', { what: 'i18next' });
    document.getElementById('thermostat').innerHTML = i18next.t('thermostat', { what: 'i18next' });
    document.getElementById('smartTV').innerHTML = i18next.t('smartTV', { what: 'i18next' });
    document.getElementById('windowAcUnit').innerHTML = i18next.t('windowAcUnit', { what: 'i18next' });
    document.getElementById('smartSwitchWithDimmer').innerHTML = i18next.t('smartSwitchWithDimmer', { what: 'i18next' });
    document.getElementById('smartLock').innerHTML = i18next.t('smartLock', { what: 'i18next' });
    document.getElementById('smartSpeaker').innerHTML = i18next.t('smartSpeaker', { what: 'i18next' });
    document.getElementById('temperatureHumiditySensor').innerHTML = i18next.t('temperatureHumiditySensor', { what: 'i18next' });
    document.getElementById('contactSensor').innerHTML = i18next.t('contactSensor', { what: 'i18next' });
    document.getElementById('doorbell').innerHTML = i18next.t('doorbell', { what: 'i18next' });
    document.getElementById('motionSensor').innerHTML = i18next.t('motionSensor', { what: 'i18next' });
    document.getElementById('fan').innerHTML = i18next.t('fan', { what: 'i18next' });
     
    document.getElementById('alexaSmartHomeSkill').innerHTML = i18next.t('alexaSmartHomeSkill', { what: 'i18next' });
    document.getElementById('googleHome').innerHTML = i18next.t('googleHome', { what: 'i18next' });
    document.getElementById('IFTTT').innerHTML = i18next.t('IFTTT', { what: 'i18next' });
    document.getElementById('API').innerHTML = i18next.t('API', { what: 'i18next' });
    document.getElementById('goFarther').innerHTML = i18next.t('goFarther', { what: 'i18next' });
    document.getElementById('SDKsAreAvailableFor').innerHTML = i18next.t('SDKsAreAvailableFor', { what: 'i18next' });
    document.getElementById('APIDocumentation').innerHTML = i18next.t('APIDocumentation', { what: 'i18next' });
    document.getElementById('helpDocumentation').innerHTML = i18next.t('helpDocumentation', { what: 'i18next' });
    document.getElementById('team').innerHTML = i18next.t('team', { what: 'i18next' });
    document.getElementById('readyToGetStarted').innerHTML = i18next.t('readyToGetStarted', { what: 'i18next' });
    document.getElementById('signupNow').innerHTML = i18next.t('signup', { what: 'i18next' });    
    
}

function changeLng(lng) {
    console.log("lang", lng);

    i18next.changeLanguage(lng);
}

function login() {
    //let language = (i18next.language == 'lk' ? 'si' : i18next.language);
    window.location = "https://portal.sinric.pro/login"; // 
}

function signup() {
    // Pass the selected language to the registration page
    //console.log("Selected language: ", i18next.language);
    let language = (i18next.language == 'lk' ? 'si' : i18next.language);
    window.location = "https://portal.sinric.pro/register?lang="+ language;
    //window.location = "http://localhost:4200/register?lang="+ language;
}

i18next.on('languageChanged', () => {
    updateContent();    
});

function langDropDownClicked(lang) {
    i18next.changeLanguage(lang);
}
