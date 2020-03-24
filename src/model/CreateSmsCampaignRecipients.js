/**
 * SendinBlue API
 * SendinBlue provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/sendinblue  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  |   | 406  | Error. Not Acceptable  | 
 *
 * OpenAPI spec version: 3.0.0
 * Contact: contact@sendinblue.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.CreateSmsCampaignRecipients = factory(root.SibApiV3Sdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CreateSmsCampaignRecipients model module.
   * @module model/CreateSmsCampaignRecipients
   * @version 7.2.0
   */

  /**
   * Constructs a new <code>CreateSmsCampaignRecipients</code>.
   * @alias module:model/CreateSmsCampaignRecipients
   * @class
   * @param listIds {Array.<Number>} Lists Ids to send the campaign to. REQUIRED if scheduledAt is not empty
   */
  var exports = function(listIds) {
    var _this = this;

    _this['listIds'] = listIds;

  };

  /**
   * Constructs a <code>CreateSmsCampaignRecipients</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateSmsCampaignRecipients} obj Optional instance to populate.
   * @return {module:model/CreateSmsCampaignRecipients} The populated <code>CreateSmsCampaignRecipients</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('listIds')) {
        obj['listIds'] = ApiClient.convertToType(data['listIds'], ['Number']);
      }
      if (data.hasOwnProperty('exclusionListIds')) {
        obj['exclusionListIds'] = ApiClient.convertToType(data['exclusionListIds'], ['Number']);
      }
    }
    return obj;
  }

  /**
   * Lists Ids to send the campaign to. REQUIRED if scheduledAt is not empty
   * @member {Array.<Number>} listIds
   */
  exports.prototype['listIds'] = undefined;
  /**
   * List ids which have to be excluded from a campaign
   * @member {Array.<Number>} exclusionListIds
   */
  exports.prototype['exclusionListIds'] = undefined;



  return exports;
}));


