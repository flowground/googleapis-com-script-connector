/**
 * Auto-generated action file for "Apps Script" API.
 *
 * Generated at: 2019-05-23T09:13:37.583Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / googleapis-com-script-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'script.processes.listScriptProcesses'
 * Endpoint Path: '/v1/processes:listScriptProcesses'
 * Method: 'get'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "pageSize",
    "pageToken",
    "scriptId",
    "scriptProcessFilter.deploymentId",
    "scriptProcessFilter.endTime",
    "scriptProcessFilter.functionName",
    "scriptProcessFilter.startTime",
    "scriptProcessFilter.statuses",
    "scriptProcessFilter.types",
    "scriptProcessFilter.userAccessLevels",
    "upload_protocol"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "pageSize": "pageSize",
    "pageToken": "pageToken",
    "scriptId": "scriptId",
    "scriptProcessFilter_deploymentId": "scriptProcessFilter.deploymentId",
    "scriptProcessFilter_endTime": "scriptProcessFilter.endTime",
    "scriptProcessFilter_functionName": "scriptProcessFilter.functionName",
    "scriptProcessFilter_startTime": "scriptProcessFilter.startTime",
    "scriptProcessFilter_statuses": "scriptProcessFilter.statuses",
    "scriptProcessFilter_types": "scriptProcessFilter.types",
    "scriptProcessFilter_userAccessLevels": "scriptProcessFilter.userAccessLevels",
    "upload_protocol": "upload_protocol"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = undefined;

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['Oauth2'] = {token: cfg['auth_Oauth2']};

    let callParams = {
        spec: spec,
        operationId: 'script.processes.listScriptProcesses',
        pathName: '/v1/processes:listScriptProcesses',
        method: 'get',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}