
				(function () {
					if (
						!navigator.mediaDevices ||
						!navigator.mediaDevices.getUserMedia ||
						!navigator.mediaDevices.enumerateDevices
			  ) {
						console.error('WebRTC not supported.');
						return;
			  } else {
				    function generateCode(config, payload) {
						return fetch('REPLACE_URL', {});
					}
					window.generateCode = window.generateCode || {};
					window.generateCode = generateCode;
					const clickToCallScript = document.createElement('script');
					clickToCallScript.src = './click-to-call-widget.js';
					clickToCallScript.id="clickToCallWidget";
					clickToCallScript.defer = true;
					document.head.appendChild(clickToCallScript);
					const clickToCallWidget = document.createElement('click-to-call-widget');
					const config = {"c2c_config":{"callerPhone":"+34666666666","call":"+34722527259","dtmfKeypadEnabled":true,"screenSharingEnabled":false,"keepConnectionAfterCall":0},"c2c_serverConfig":{"domain":"rrfeecgrlkfj.sip1-region1.audiocodes.io","addresses":["wss://rrfeecgrlkfj.sip1-region1.audiocodes.io"]}};
					// Handle the form validation here
					const form = {"isValid":true};
		const payload = {};
					clickToCallWidget.setAttribute('config', JSON.stringify(config));
					clickToCallWidget.setAttribute('generateCode', 'generateCode');
					clickToCallWidget.setAttribute('form', JSON.stringify(form));
					clickToCallWidget.setAttribute('payload', JSON.stringify(payload));
					document.body.appendChild(clickToCallWidget);
				}})();