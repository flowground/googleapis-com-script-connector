# ![LOGO](logo.png) Apps Script **flow**ground Connector

## Description

A generated **flow**ground connector for the Apps Script API (version v1).

Generated from: https://api.apis.guru/v2/specs/googleapis.com/script/v1/swagger.json<br/>
Generated at: 2019-05-07T17:41:55+03:00

## API Description

Manages and executes Google Apps Script projects.


## Authorization

Supported authorization schemes:
- OAuth2

For OAuth 2.0 you need to specify OAuth Client credentials as environment variables in the connector repository:
* `OAUTH_CLIENT_ID` - your OAuth client id
* `OAUTH_CLIENT_SECRET` - your OAuth client secret

## Actions

### List information about processes made by or on behalf of a user,<br/>
> such as process type and current status.

*Tags:* `processes`

#### Input Parameters
* `pageSize` - _optional_ - The maximum number of returned processes per page of results. Defaults to
50.
* `pageToken` - _optional_ - The token for continuing a previous list request on the next page. This
should be set to the value of `nextPageToken` from a previous response.
* `userProcessFilter.deploymentId` - _optional_ - Optional field used to limit returned processes to those originating from
projects with a specific deployment ID.
* `userProcessFilter.endTime` - _optional_ - Optional field used to limit returned processes to those that completed
on or before the given timestamp.
* `userProcessFilter.functionName` - _optional_ - Optional field used to limit returned processes to those originating from
a script function with the given function name.
* `userProcessFilter.projectName` - _optional_ - Optional field used to limit returned processes to those originating from
projects with project names containing a specific string.
* `userProcessFilter.scriptId` - _optional_ - Optional field used to limit returned processes to those originating from
projects with a specific script ID.
* `userProcessFilter.startTime` - _optional_ - Optional field used to limit returned processes to those that were
started on or after the given timestamp.
* `userProcessFilter.statuses` - _optional_ - Optional field used to limit returned processes to those having one of
the specified process statuses.
* `userProcessFilter.types` - _optional_ - Optional field used to limit returned processes to those having one of
the specified process types.
* `userProcessFilter.userAccessLevels` - _optional_ - Optional field used to limit returned processes to those having one of
the specified user access levels.

### List information about a script's executed processes, such as process type<br/>
> and current status.

*Tags:* `processes`

#### Input Parameters
* `pageSize` - _optional_ - The maximum number of returned processes per page of results. Defaults to
50.
* `pageToken` - _optional_ - The token for continuing a previous list request on the next page. This
should be set to the value of `nextPageToken` from a previous response.
* `scriptId` - _optional_ - The script ID of the project whose processes are listed.
* `scriptProcessFilter.deploymentId` - _optional_ - Optional field used to limit returned processes to those originating from
projects with a specific deployment ID.
* `scriptProcessFilter.endTime` - _optional_ - Optional field used to limit returned processes to those that completed
on or before the given timestamp.
* `scriptProcessFilter.functionName` - _optional_ - Optional field used to limit returned processes to those originating from
a script function with the given function name.
* `scriptProcessFilter.startTime` - _optional_ - Optional field used to limit returned processes to those that were
started on or after the given timestamp.
* `scriptProcessFilter.statuses` - _optional_ - Optional field used to limit returned processes to those having one of
the specified process statuses.
* `scriptProcessFilter.types` - _optional_ - Optional field used to limit returned processes to those having one of
the specified process types.
* `scriptProcessFilter.userAccessLevels` - _optional_ - Optional field used to limit returned processes to those having one of
the specified user access levels.
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Creates a new, empty script project with no script files and a base<br/>
> manifest file.

*Tags:* `projects`

#### Input Parameters
* `$.xgafv` - _optional_ - V1 error format.
    Possible values: 1, 2.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Gets a script project's metadata.

*Tags:* `projects`

#### Input Parameters
* `scriptId` - _required_ - The script project's Drive ID.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Gets the content of the script project, including the code source and<br/>
> metadata for each script file.

*Tags:* `projects`

#### Input Parameters
* `scriptId` - _required_ - The script project's Drive ID.
* `versionNumber` - _optional_ - The version number of the project to retrieve. If not provided, the
project's HEAD version is returned.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Updates the content of the specified script project.<br/>
> This content is stored as the HEAD version, and is used when the script is<br/>
> executed as a trigger, in the script editor, in add-on preview mode, or as<br/>
> a web app or Apps Script API in development mode. This clears all the<br/>
> existing files in the project.

*Tags:* `projects`

#### Input Parameters
* `scriptId` - _required_ - The script project's Drive ID.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Lists the deployments of an Apps Script project.

*Tags:* `projects`

#### Input Parameters
* `pageSize` - _optional_ - The maximum number of deployments on each returned page. Defaults to 50.
* `pageToken` - _optional_ - The token for continuing a previous list request on the next page. This
should be set to the value of `nextPageToken` from a previous response.
* `scriptId` - _required_ - The script project's Drive ID.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Creates a deployment of an Apps Script project.

*Tags:* `projects`

#### Input Parameters
* `scriptId` - _required_ - The script project's Drive ID.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Deletes a deployment of an Apps Script project.

*Tags:* `projects`

#### Input Parameters
* `deploymentId` - _required_ - The deployment ID to be undeployed.
* `scriptId` - _required_ - The script project's Drive ID.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Gets a deployment of an Apps Script project.

*Tags:* `projects`

#### Input Parameters
* `deploymentId` - _required_ - The deployment ID.
* `scriptId` - _required_ - The script project's Drive ID.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Updates a deployment of an Apps Script project.

*Tags:* `projects`

#### Input Parameters
* `deploymentId` - _required_ - The deployment ID for this deployment.
* `scriptId` - _required_ - The script project's Drive ID.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Get metrics data for scripts, such as number of executions and<br/>
> active users.

*Tags:* `projects`

#### Input Parameters
* `metricsFilter.deploymentId` - _optional_ - Optional field indicating a specific deployment to retrieve metrics from.
* `metricsGranularity` - _optional_ - Required field indicating what granularity of metrics are returned.
    Possible values: UNSPECIFIED_GRANULARITY, WEEKLY, DAILY.
* `scriptId` - _required_ - Required field indicating the script to get metrics for.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### List the versions of a script project.

*Tags:* `projects`

#### Input Parameters
* `pageSize` - _optional_ - The maximum number of versions on each returned page. Defaults to 50.
* `pageToken` - _optional_ - The token for continuing a previous list request on the next page. This
should be set to the value of `nextPageToken` from a previous response.
* `scriptId` - _required_ - The script project's Drive ID.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Creates a new immutable version using the current code, with a unique<br/>
> version number.

*Tags:* `projects`

#### Input Parameters
* `scriptId` - _required_ - The script project's Drive ID.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Gets a version of a script project.

*Tags:* `projects`

#### Input Parameters
* `scriptId` - _required_ - The script project's Drive ID.
* `versionNumber` - _required_ - The version number.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Runs a function in an Apps Script project. The script project must be<br/>
> deployed for use with the Apps Script API and the calling application must<br/>
> share the same Cloud Platform project.<br/>
> <br/>
> This method requires authorization with an OAuth 2.0 token that includes at<br/>
> least one of the scopes listed in the [Authorization](#authorization)<br/>
> section; script projects that do not require authorization cannot be<br/>
> executed through this API. To find the correct scopes to include in the<br/>
> authentication token, open the project in the script editor, then select<br/>
> **File > Project properties** and click the **Scopes** tab.<br/>
> <br/>
> The error `403, PERMISSION_DENIED: The caller does not have permission`<br/>
> indicates that the Cloud Platform project used to authorize the request is<br/>
> not the same as the one used by the script.

*Tags:* `scripts`

#### Input Parameters
* `scriptId` - _required_ - The script ID of the script to be executed. To find the script ID, open
the project in the script editor and select **File > Project properties**.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

## License

**flow**ground :- Telekom iPaaS / googleapis-com-script-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
