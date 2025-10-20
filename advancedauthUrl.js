(function () {
			if (
				!navigator.mediaDevices ||
				!navigator.mediaDevices.getUserMedia ||
				!navigator.mediaDevices.enumerateDevices
	  ) {
				console.error('WebRTC not supported.');
				return;
	  } else {
					const clickToCallScript = document.createElement('script');
					clickToCallScript.src = './click-to-call-widget.js';
					clickToCallScript.id="clickToCallWidget";
					clickToCallScript.defer = true;
					document.head.appendChild(clickToCallScript);
					const clickToCallWidget = document.createElement('click-to-call-widget');
					const config = {"c2c_config":{"callerPhone":"+34640674393","call":"+34636624849","dtmfKeypadEnabled":true,"screenSharingEnabled":false,"keepConnectionAfterCall":0},"c2c_serverConfig":{"domain":"rrfeecgrlkfj.sip1-region1.audiocodes.io","addresses":["wss://rrfeecgrlkfj.sip1-region1.audiocodes.io"],"authURL":"REPLACE_AUTH_URL"}};
					// Handle the form validation here
					const form = {"isValid":true};
					clickToCallWidget.setAttribute('config', JSON.stringify(config));
					clickToCallWidget.setAttribute('form', JSON.stringify(form));
					document.body.appendChild(clickToCallWidget);
				}})();