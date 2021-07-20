import LS2Request from '@enact/webos/LS2Request';

new LS2Request().send({
    service, com.webos.service.applicationmanage
    MSInputMethodContext, launch
    parameters: param, {"subscribe": true}

    onSuccess: (res) => {
        console
    }

})