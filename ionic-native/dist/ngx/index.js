/*
    Copyright 2020-2023. Huawei Technologies Co., Ltd. All rights reserved.

    Licensed under the Apache License, Version 2.0 (the "License")
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        https://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/
import { __extends } from "tslib";

import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var HMSLocation = /** @class */ (function (_super) {
    __extends(HMSLocation, _super);
    function HMSLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSLocation.prototype.getGeofenceService = function () {
        return HMSLocation.getPlugin().getGeofenceService();
    };
    HMSLocation.prototype.getGeocoderService = function (language, country) {
        return HMSLocation.getPlugin().getGeocoderService(language, country);
    };
    HMSLocation.prototype.getFusedLocationProviderClient = function () {
        return HMSLocation.getPlugin().getFusedLocationProviderClient();
    };
    HMSLocation.prototype.getActivityIdentificationService = function () {
        return HMSLocation.getPlugin().getActivityIdentificationService();
    };
    HMSLocation.prototype.getCoordinateConversionService = function () {
        return HMSLocation.getPlugin().getCoordinateConversionService();
    };
    HMSLocation.prototype.addListener = function (event, callback) {
        return HMSLocation.getPlugin().addListener(event, callback);
    };
    HMSLocation.prototype.disableLogger = function () { return cordova(this, "disableLogger", { "otherPromise": true }, arguments); };
    HMSLocation.prototype.enableLogger = function () { return cordova(this, "enableLogger", { "otherPromise": true }, arguments); };
    HMSLocation.pluginName = "HMSLocation";
    HMSLocation.plugin = "cordova-plugin-hms-location";
    HMSLocation.pluginRef = "HMSLocation";
    HMSLocation.repo = "";
    HMSLocation.install = "";
    HMSLocation.installVariables = [];
    HMSLocation.platforms = ["Android"];
    HMSLocation.decorators = [
        { type: Injectable }
    ];
    return HMSLocation;
}(IonicNativePlugin));
export { HMSLocation };
var BackgroundManager = /** @class */ (function () {
    function BackgroundManager() {
    }
    BackgroundManager.notify = function (notificationId, notification) {
    };
    BackgroundManager.makeToast = function (text, duration) {
    };
    return BackgroundManager;
}());
export { BackgroundManager };
export var Events;
(function (Events) {
    Events["ON_LOCATION_RESULT"] = "onLocationResult";
    Events["ACTIVITY_CONVERSION_RESULT"] = "onActivityConversionResult";
    Events["ACTIVITY_IDENTIFICATION_RESULT"] = "onActivityIdentificationResult";
    Events["GEOFENCE_RESULT"] = "onGeofenceResult";
})(Events || (Events = {}));
export var PriorityConstants;
(function (PriorityConstants) {
    PriorityConstants[PriorityConstants["PRIORITY_HIGH_ACCURACY"] = 100] = "PRIORITY_HIGH_ACCURACY";
    PriorityConstants[PriorityConstants["PRIORITY_BALANCED_POWER_ACCURACY"] = 102] = "PRIORITY_BALANCED_POWER_ACCURACY";
    PriorityConstants[PriorityConstants["PRIORITY_LOW_POWER"] = 104] = "PRIORITY_LOW_POWER";
    PriorityConstants[PriorityConstants["PRIORITY_NO_POWER"] = 105] = "PRIORITY_NO_POWER";
    PriorityConstants[PriorityConstants["PRIORITY_HD_ACCURACY"] = 200] = "PRIORITY_HD_ACCURACY";
    PriorityConstants[PriorityConstants["PRIORITY_INDOOR"] = 300] = "PRIORITY_INDOOR";
    PriorityConstants[PriorityConstants["PRIORITY_HIGH_ACCURACY_AND_INDOOR"] = 400] = "PRIORITY_HIGH_ACCURACY_AND_INDOOR";
})(PriorityConstants || (PriorityConstants = {}));
export var NavigationRequestConstants;
(function (NavigationRequestConstants) {
    NavigationRequestConstants[NavigationRequestConstants["OVERPASS"] = 1] = "OVERPASS";
    NavigationRequestConstants[NavigationRequestConstants["IS_SUPPORT_EX"] = 2] = "IS_SUPPORT_EX";
})(NavigationRequestConstants || (NavigationRequestConstants = {}));
export var ActivityType;
(function (ActivityType) {
    ActivityType[ActivityType["VEHICLE"] = 100] = "VEHICLE";
    ActivityType[ActivityType["BIKE"] = 101] = "BIKE";
    ActivityType[ActivityType["FOOT"] = 102] = "FOOT";
    ActivityType[ActivityType["STILL"] = 103] = "STILL";
    ActivityType[ActivityType["OTHERS"] = 104] = "OTHERS";
    ActivityType[ActivityType["WALKING"] = 107] = "WALKING";
    ActivityType[ActivityType["RUNNING"] = 108] = "RUNNING";
})(ActivityType || (ActivityType = {}));
export var ConversionType;
(function (ConversionType) {
    ConversionType[ConversionType["ENTER_ACTIVITY_CONVERSION"] = 0] = "ENTER_ACTIVITY_CONVERSION";
    ConversionType[ConversionType["EXIT_ACTIVITY_CONVERSION"] = 1] = "EXIT_ACTIVITY_CONVERSION";
})(ConversionType || (ConversionType = {}));
export var CoordinateType;
(function (CoordinateType) {
    CoordinateType[CoordinateType["COORDINATE_TYPE_WGS_84"] = 1] = "COORDINATE_TYPE_WGS_84";
    CoordinateType[CoordinateType["COORDINATE_TYPE_GCJ_02"] = 0] = "COORDINATE_TYPE_GCJ_02";
})(CoordinateType || (CoordinateType = {}));
export var GeofenceInitConversionType;
(function (GeofenceInitConversionType) {
    GeofenceInitConversionType[GeofenceInitConversionType["ENTER_INIT_CONVERSION"] = 1] = "ENTER_INIT_CONVERSION";
    GeofenceInitConversionType[GeofenceInitConversionType["EXIT_INIT_CONVERSION"] = 2] = "EXIT_INIT_CONVERSION";
    GeofenceInitConversionType[GeofenceInitConversionType["DWELL_INIT_CONVERSION"] = 4] = "DWELL_INIT_CONVERSION";
})(GeofenceInitConversionType || (GeofenceInitConversionType = {}));
export var GeofenceTriggerType;
(function (GeofenceTriggerType) {
    GeofenceTriggerType[GeofenceTriggerType["ENTER_GEOFENCE_CONVERSION"] = 1] = "ENTER_GEOFENCE_CONVERSION";
    GeofenceTriggerType[GeofenceTriggerType["EXIT_GEOFENCE_CONVERSION"] = 2] = "EXIT_GEOFENCE_CONVERSION";
    GeofenceTriggerType[GeofenceTriggerType["DWELL_GEOFENCE_CONVERSION"] = 4] = "DWELL_GEOFENCE_CONVERSION";
    GeofenceTriggerType[GeofenceTriggerType["GEOFENCE_NEVER_EXPIRE"] = -1] = "GEOFENCE_NEVER_EXPIRE";
})(GeofenceTriggerType || (GeofenceTriggerType = {}));
export var NotificationCategory;
(function (NotificationCategory) {
    NotificationCategory["ALARM"] = "alarm";
    NotificationCategory["CALL"] = "call";
    NotificationCategory["EMAIL"] = "email";
    NotificationCategory["ERROR"] = "err";
    NotificationCategory["EVENT"] = "event";
    NotificationCategory["MESSAGE"] = "msg";
    NotificationCategory["NAVIGATION"] = "navigation";
    NotificationCategory["PROGRESS"] = "progress";
    NotificationCategory["PROMO"] = "promo";
    NotificationCategory["RECOMMENDATION"] = "recommendation";
    NotificationCategory["REMINDER"] = "reminder";
    NotificationCategory["SERVICE"] = "service";
    NotificationCategory["SOCIAL"] = "social";
    NotificationCategory["STATUS"] = "status";
    NotificationCategory["SYSTEM"] = "sys";
    NotificationCategory["TRANSPORT"] = "transport";
})(NotificationCategory || (NotificationCategory = {}));
export var NotificationImportance;
(function (NotificationImportance) {
    NotificationImportance[NotificationImportance["DEFAULT"] = 3] = "DEFAULT";
    NotificationImportance[NotificationImportance["HIGH"] = 4] = "HIGH";
    NotificationImportance[NotificationImportance["LOW"] = 2] = "LOW";
    NotificationImportance[NotificationImportance["MAX"] = 5] = "MAX";
    NotificationImportance[NotificationImportance["MIN"] = 1] = "MIN";
    NotificationImportance[NotificationImportance["NONE"] = 0] = "NONE";
    NotificationImportance[NotificationImportance["UNSPECIFIED"] = -100] = "UNSPECIFIED";
})(NotificationImportance || (NotificationImportance = {}));
export var RequestType;
(function (RequestType) {
    RequestType["LOCATION_CALLBACK"] = "locationCallback";
    RequestType["PENDING_INTENT"] = "pendingIntent";
})(RequestType || (RequestType = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25hdGl2ZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7OztFQWNFO0FBQ0YsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQVl2QywrQkFBaUI7Ozs7SUFFOUMsd0NBQWtCLEdBQWxCO1FBQ0ksT0FBTyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUN4RCxDQUFDO0lBRUQsd0NBQWtCLEdBQWxCLFVBQW1CLFFBQWdCLEVBQUUsT0FBZ0I7UUFDakQsT0FBTyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRCxvREFBOEIsR0FBOUI7UUFDSSxPQUFPLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSxDQUFDO0lBQ3BFLENBQUM7SUFFRCxzREFBZ0MsR0FBaEM7UUFDSSxPQUFPLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsRUFBRSxDQUFDO0lBQ3RFLENBQUM7SUFFRCxvREFBOEIsR0FBOUI7UUFDSSxPQUFPLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSxDQUFDO0lBQ3BFLENBQUM7SUFFRCxpQ0FBVyxHQUFYLFVBQVksS0FBYSxFQUFFLFFBQTJHO1FBQ2xJLE9BQU8sV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUdELG1DQUFhO0lBS2Isa0NBQVk7Ozs7Ozs7OztnQkFqQ2YsVUFBVTs7c0JBM0JYO0VBNEJpQyxpQkFBaUI7U0FBckMs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TyxDQUFBO0lBQ1AsbUVBQVEsQ0FBQTtJQUNSLG9GQUFrQixDQUFBO0FBQ3RCLENBQUMsRUFSVyxzQkFBc0IsS0FBdEIsc0JBQXNCLFFBUWpDO0FBRUQsTUFBTSxDQUFOLElBQVksV0FHWDtBQUhELFdBQVksV0FBVztJQUNuQixxREFBc0MsQ0FBQTtJQUN0QywrQ0FBZ0MsQ0FBQTtBQUNwQyxDQUFDLEVBSFcsV0FBVyxLQUFYLFdBQVcsUUFHdEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICAgIENvcHlyaWdodCAyMDIwLTIwMjMuIEh1YXdlaSBUZWNobm9sb2dpZXMgQ28uLCBMdGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5cbiAgICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpXG4gICAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICAgIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuICAgIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gICAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gICAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICAgIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5AUGx1Z2luKHtcbiAgICBwbHVnaW5OYW1lOiAnSE1TTG9jYXRpb24nLFxuICAgIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1sb2NhdGlvbicsXG4gICAgcGx1Z2luUmVmOiAnSE1TTG9jYXRpb24nLFxuICAgIHJlcG86ICcnLFxuICAgIGluc3RhbGw6ICcnLFxuICAgIGluc3RhbGxWYXJpYWJsZXM6IFtdLFxuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhNU0xvY2F0aW9uIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gICAgZ2V0R2VvZmVuY2VTZXJ2aWNlKCk6IEdlb2ZlbmNlU2VydmljZSB7XG4gICAgICAgIHJldHVybiBITVNMb2NhdGlvbi5nZXRQbHVnaW4oKS5nZXRHZW9mZW5jZVNlcnZpY2UoKTtcbiAgICB9XG5cbiAgICBnZXRHZW9jb2RlclNlcnZpY2UobGFuZ3VhZ2U6IHN0cmluZywgY291bnRyeT86IHN0cmluZyk6IEdlb2NvZGVyU2VydmljZSB7XG4gICAgICAgIHJldHVybiBITVNMb2NhdGlvbi5nZXRQbHVnaW4oKS5nZXRHZW9jb2RlclNlcnZpY2UobGFuZ3VhZ2UsIGNvdW50cnkpO1xuICAgIH1cblxuICAgIGdldEZ1c2VkTG9jYXRpb25Qcm92aWRlckNsaWVudCgpOiBGdXNlZExvY2F0aW9uU2VydmljZSB7XG4gICAgICAgIHJldHVybiBITVNMb2NhdGlvbi5nZXRQbHVnaW4oKS5nZXRGdXNlZExvY2F0aW9uUHJvdmlkZXJDbGllbnQoKTtcbiAgICB9XG5cbiAgICBnZXRBY3Rpdml0eUlkZW50aWZpY2F0aW9uU2VydmljZSgpOiBBY3Rpdml0eUlkZW50aWZpY2F0aW9uU2VydmljZSB7XG4gICAgICAgIHJldHVybiBITVNMb2NhdGlvbi5nZXRQbHVnaW4oKS5nZXRBY3Rpdml0eUlkZW50aWZpY2F0aW9uU2VydmljZSgpO1xuICAgIH1cblxuICAgIGdldENvb3JkaW5hdGVDb252ZXJzaW9uU2VydmljZSgpOiBDb29yZGluYXRlQ29udmVyc2lvblNlcnZpY2Uge1xuICAgICAgICByZXR1cm4gSE1TTG9jYXRpb24uZ2V0UGx1Z2luKCkuZ2V0Q29vcmRpbmF0ZUNvbnZlcnNpb25TZXJ2aWNlKCk7XG4gICAgfVxuICAgIFxuICAgIGFkZExpc3RlbmVyKGV2ZW50OiBFdmVudHMsIGNhbGxiYWNrOiAoZGF0YTogTG9jYXRpb25SZXN1bHQgfCBbXSB8IEFjdGl2aXR5Q29udmVyc2lvblJlc3BvbnNlIHwgQWN0aXZpdHlJZGVudGlmaWNhdGlvblJlc3BvbnNlKSA9PiB2b2lkKSB7XG4gICAgICAgIHJldHVybiBITVNMb2NhdGlvbi5nZXRQbHVnaW4oKS5hZGRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZGlzYWJsZUxvZ2dlcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gICAgZW5hYmxlTG9nZ2VyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBCYWNrZ3JvdW5kTWFuYWdlciB7XG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBzdGF0aWMgbm90aWZ5KG5vdGlmaWNhdGlvbklkOiBudW1iZXIsIG5vdGlmaWNhdGlvbjogc3RyaW5nKSB7XG4gICAgfVxuXG4gICAgc3RhdGljIG1ha2VUb2FzdCh0ZXh0OiBzdHJpbmcsIGR1cmF0aW9uOiBudW1iZXIpIHtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBGdXNlZExvY2F0aW9uU2VydmljZSB7XG4gICAgZGlzYWJsZUJhY2tncm91bmRMb2NhdGlvbigpOiBQcm9taXNlPHZvaWQ+O1xuICAgIGVuYWJsZUJhY2tncm91bmRMb2NhdGlvbihub3RpZmljYXRpb25JZDogbnVtYmVyLCBub3RpZmljYXRpb246IHN0cmluZyk6IFByb21pc2U8dm9pZD47XG4gICAgY2hlY2tMb2NhdGlvblNldHRpbmdzKHJlcXVlc3Q6IExvY2F0aW9uU2V0dGluZ3NSZXF1ZXN0KTogUHJvbWlzZTxMb2NhdGlvblNldHRpbmdzU3RhdGVzPjtcbiAgICBmbHVzaExvY2F0aW9ucygpOiBQcm9taXNlPHZvaWQ+XG4gICAgZ2V0TGFzdExvY2F0aW9uKCk6IFByb21pc2U8TG9jYXRpb24+O1xuICAgIGdldExhc3RMb2NhdGlvbldpdGhBZGRyZXNzKHJlcXVlc3Q6IExvY2F0aW9uUmVxdWVzdCk6IFByb21pc2U8SFdMb2NhdGlvbj47XG4gICAgZ2V0TG9jYXRpb25BdmFpbGFiaWxpdHkoKTogUHJvbWlzZTxib29sZWFuPjtcbiAgICBnZXROYXZpZ2F0aW9uQ29udGV4dFN0YXRlKHJlcXVlc3RUeXBlOiBOYXZpZ2F0aW9uUmVxdWVzdENvbnN0YW50cyk6IFByb21pc2U8TmF2aWdhdGlvblJlc3VsdD47XG4gICAgcmVtb3ZlTG9jYXRpb25VcGRhdGVzKHJlcXVlc3RDb2RlOiBudW1iZXIsIHR5cGU6IFJlcXVlc3RUeXBlKTogUHJvbWlzZTxib29sZWFuPjtcbiAgICByZXF1ZXN0TG9jYXRpb25VcGRhdGVzKHJlcXVlc3RDb2RlOiBudW1iZXIsIHJlcXVlc3Q6IExvY2F0aW9uUmVxdWVzdCwgY2FsbGJhY2s/OiAobG9jYXRpb25SZXN1bHQ6IExvY2F0aW9uUmVzdWx0KSA9PiB2b2lkKTogUHJvbWlzZTxib29sZWFuPjtcbiAgICByZXF1ZXN0TG9jYXRpb25VcGRhdGVzRXgocmVxdWVzdENvZGU6IG51bWJlciwgcmVxdWVzdDogTG9jYXRpb25SZXF1ZXN0KTogUHJvbWlzZTxib29sZWFuPjtcbiAgICBzZXRNb2NrTG9jYXRpb24obGF0TG5nOiBMYXRMbmcpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldE1vY2tNb2RlKG1vZGU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xuICAgIHNldExvZ0NvbmZpZyhsb2dDb25maWdTZXR0aW5nczogTG9nQ29uZmlnU2V0dGluZ3MpOiBQcm9taXNlPHZvaWQ+O1xuICAgIGdldExvZ0NvbmZpZygpOiBQcm9taXNlPExvZ0NvbmZpZ1NldHRpbmdzPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHZW9mZW5jZVNlcnZpY2Uge1xuICAgIGNyZWF0ZUdlb2ZlbmNlTGlzdChyZXF1ZXN0Q29kZTogbnVtYmVyLCBnZW9mZW5jZXM6IEdlb2ZlbmNlW10sIGluaXRDb252ZXJzaW9uczogR2VvZmVuY2VJbml0Q29udmVyc2lvblR5cGUsIGNvb3JkaW5hdGVUeXBlOiBDb29yZGluYXRlVHlwZSwgY2FsbGJhY2s/OiAoZGF0YTogTG9jYXRpb24pID0+IHZvaWQpOiBQcm9taXNlPGJvb2xlYW4+O1xuICAgIGRlbGV0ZUdlb2ZlbmNlTGlzdChyZXF1ZXN0Q29kZTogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHZW9jb2RlclNlcnZpY2Uge1xuICAgIGdldEZyb21Mb2NhdGlvbihnZXRGcm9tTG9jYXRpb25SZXF1ZXN0OiBHZXRGcm9tTG9jYXRpb25SZXF1ZXN0KTogUHJvbWlzZTxIV0xvY2F0aW9uW10+O1xuICAgIGdldEZyb21Mb2NhdGlvbk5hbWUoZ2V0RnJvbUxvY2F0aW9uTmFtZVJlcXVlc3Q6IEdldEZyb21Mb2NhdGlvbk5hbWVSZXF1ZXN0KTogUHJvbWlzZTxIV0xvY2F0aW9uW10+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvb3JkaW5hdGVDb252ZXJzaW9uU2VydmljZSB7XG4gICAgY29udmVydENvb3JkKGxhdGl0dWRlOiBudW1iZXIsIGxvbmdpdHVkZTogbnVtYmVyLCBjb29yZFR5cGU6IG51bWJlcik6IFByb21pc2U8TG9uTGF0Pjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHZXRGcm9tTG9jYXRpb25SZXF1ZXN0IHtcbiAgICBsYXRpdHVkZTogbnVtYmVyO1xuICAgIGxvbmdpdHVkZTogbnVtYmVyO1xuICAgIG1heFJlc3VsdHM6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgR2V0RnJvbUxvY2F0aW9uTmFtZVJlcXVlc3Qge1xuICAgIGxvY2F0aW9uTmFtZTogc3RyaW5nO1xuICAgIG1heFJlc3VsdHM6IG51bWJlcjtcbiAgICBjb3JuZXI/OiBDb3JuZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIENvcm5lciB7XG4gICAgbG93ZXJMZWZ0TGF0aXR1ZGU6IG51bWJlcjtcbiAgICBsb3dlckxlZnRMb25naXR1ZGU6IG51bWJlcjtcbiAgICB1cHBlclJpZ2h0TGF0aXR1ZGU6IG51bWJlcjtcbiAgICB1cHBlclJpZ2h0TG9uZ2l0dWRlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9nQ29uZmlnU2V0dGluZ3Mge1xuICAgIGxvZ0NvbmZpZ1NldHRpbmdzRmlsZT8gOiBMb2dDb25maWdTZXR0aW5nc0ZpbGU7XG4gICAgbG9nUGF0aDogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBMb2dDb25maWdTZXR0aW5nc0ZpbGUge1xuICAgIGZpbGVFeHBpcmVkVGltZTogbnVtYmVyO1xuICAgIGZpbGVOdW06IG51bWJlcjtcbiAgICBmaWxlU2l6ZTogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBBY3Rpdml0eUlkZW50aWZpY2F0aW9uU2VydmljZSB7XG4gICAgY3JlYXRlQWN0aXZpdHlDb252ZXJzaW9uVXBkYXRlcyhyZXF1ZXN0Q29kZTogbnVtYmVyLCBhY3Rpdml0eUNvbnZlcnNpb25SZXF1ZXN0OiBBY3Rpdml0eUNvbnZlcnNpb25JbmZvW10sIGNhbGxiYWNrPzogKGRhdGE6IEFjdGl2aXR5Q29udmVyc2lvblJlc3BvbnNlKSA9PiB2b2lkKTogUHJvbWlzZTxib29sZWFuPjtcbiAgICBjcmVhdGVBY3Rpdml0eUlkZW50aWZpY2F0aW9uVXBkYXRlcyhyZXF1ZXN0Q29kZTogbnVtYmVyLCBpbnRlcnZhbE1pbGxpczogbnVtYmVyLCBjYWxsYmFjaz86IChkYXRhOiBBY3Rpdml0eUlkZW50aWZpY2F0aW9uUmVzcG9uc2UpID0+IHZvaWQpOiBQcm9taXNlPGJvb2xlYW4+O1xuICAgIGRlbGV0ZUFjdGl2aXR5Q29udmVyc2lvblVwZGF0ZXMocmVxdWVzdENvZGU6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj47XG4gICAgZGVsZXRlQWN0aXZpdHlJZGVudGlmaWNhdGlvblVwZGF0ZXMocmVxdWVzdENvZGU6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9jYXRpb24ge1xuICAgIGxhdGl0dWRlOiBudW1iZXIsXG4gICAgbG9uZ2l0dWRlOiBudW1iZXIsXG4gICAgYWx0aXR1ZGU6IG51bWJlcixcbiAgICBzcGVlZDogbnVtYmVyLFxuICAgIGJlYXJpbmc6IG51bWJlcixcbiAgICBhY2N1cmFjeTogbnVtYmVyLFxuICAgIHRpbWU6IG51bWJlcixcbiAgICBmcm9tTW9ja1Byb3ZpZGVyOiBib29sZWFuLFxuICAgIHZlcnRpY2FsQWNjdXJhY3lNZXRlcnM6IG51bWJlcixcbiAgICBiZWFyaW5nQWNjdXJhY3lEZWdyZWVzOiBudW1iZXIsXG4gICAgc3BlZWRBY2N1cmFjeU1ldGVyc1BlclNlY29uZDogbnVtYmVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSFdMb2NhdGlvbiB7XG4gICAgbGF0aXR1ZGU6IG51bWJlcixcbiAgICBsb25naXR1ZGU6IG51bWJlcixcbiAgICBhbHRpdHVkZTogbnVtYmVyLFxuICAgIHNwZWVkOiBudW1iZXIsXG4gICAgYmVhcmluZzogbnVtYmVyLFxuICAgIGFjY3VyYWN5OiBudW1iZXIsXG4gICAgcHJvdmlkZXI6IHN0cmluZyxcbiAgICB0aW1lOiBudW1iZXIsXG4gICAgZWxhcHNlZFJlYWx0aW1lTmFub3M6IG51bWJlcixcbiAgICBjb3VudHJ5TmFtZTogc3RyaW5nLFxuICAgIHN0YXRlOiBzdHJpbmcsXG4gICAgY2l0eTogc3RyaW5nLFxuICAgIGNvdW50eTogc3RyaW5nLFxuICAgIHN0cmVldDogc3RyaW5nLFxuICAgIGZlYXR1cmVOYW1lOiBzdHJpbmcsXG4gICAgcG9zdGFsQ29kZTogc3RyaW5nLFxuICAgIHBob25lOiBzdHJpbmcsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgZXh0cmFJbmZvOiBzdHJpbmcsXG4gICAgdmVydGljYWxBY2N1cmFjeU1ldGVyczogbnVtYmVyLFxuICAgIGJlYXJpbmdBY2N1cmFjeURlZ3JlZXM6IG51bWJlcixcbiAgICBzcGVlZEFjY3VyYWN5TWV0ZXJzUGVyU2Vjb25kOiBudW1iZXIsXG4gICAgY29vcmRpbmF0ZVR5cGU6IG51bWJlcixcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2NhdGlvblNldHRpbmdzU3RhdGVzIHtcbiAgICBpc0JsZVByZXNlbnQ6IGJvb2xlYW5cbiAgICBpc0JsZVVzYWJsZTogYm9vbGVhbixcbiAgICBpc0duc3NQcmVzZW50OiBib29sZWFuLFxuICAgIGlzR25zc1VzYWJsZTogYm9vbGVhbixcbiAgICBpc0xvY2F0aW9uUHJlc2VudDogYm9vbGVhbixcbiAgICBpc0xvY2F0aW9uVXNhYmxlOiBib29sZWFuLFxuICAgIGlzTmV0d29ya0xvY2F0aW9uUHJlc2VudDogYm9vbGVhbixcbiAgICBpc05ldHdvcmtMb2NhdGlvblVzYWJsZTogYm9vbGVhbixcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2NhdGlvblJlcXVlc3Qge1xuICAgIHByaW9yaXR5OiBQcmlvcml0eUNvbnN0YW50cyxcbiAgICBpbnRlcnZhbD86IG51bWJlcixcbiAgICBudW1VcGRhdGVzPzogbnVtYmVyLFxuICAgIGZhc3Rlc3RJbnRlcnZhbD86IG51bWJlcixcbiAgICBleHBpcmF0aW9uVGltZT86IG51bWJlcixcbiAgICBleHBpcmF0aW9uVGltZUR1cmF0aW9uPzogbnVtYmVyLFxuICAgIHNtYWxsZXN0RGlzcGxhY2VtZW50PzogbnVtYmVyLFxuICAgIG1heFdhaXRUaW1lPzogbnVtYmVyLFxuICAgIG5lZWRBZGRyZXNzPzogYm9vbGVhbixcbiAgICBsYW5ndWFnZT86IHN0cmluZyxcbiAgICBjb3VudHJ5Q29kZT86IHN0cmluZyxcbiAgICBjb29yZGluYXRlVHlwZT86IG51bWJlcixcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2NhdGlvblNldHRpbmdzUmVxdWVzdCB7XG4gICAgbG9jYXRpb25SZXF1ZXN0czogTG9jYXRpb25SZXF1ZXN0W10sXG4gICAgbmVlZEJsZTogYm9vbGVhbixcbiAgICBhbHdheXNTaG93OiBib29sZWFuLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExhdExuZyB7XG4gICAgbG9uZ2l0dWRlOiBudW1iZXIsXG4gICAgbGF0aXR1ZGU6IG51bWJlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5hdmlnYXRpb25SZXN1bHQge1xuICAgIHN0YXRlOiBudW1iZXIsXG4gICAgcG9zc2liaWxpdHk6IG51bWJlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGl2aXR5Q29udmVyc2lvbkluZm8ge1xuICAgIGNvbnZlcnNpb25UeXBlOiBDb252ZXJzaW9uVHlwZSxcbiAgICBhY3Rpdml0eVR5cGU6IEFjdGl2aXR5VHlwZVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdlb2ZlbmNlIHtcbiAgICBsb25naXR1ZGU6IG51bWJlcixcbiAgICBsYXRpdHVkZTogbnVtYmVyLFxuICAgIHJhZGl1czogbnVtYmVyLFxuICAgIHVuaXF1ZUlkOiBzdHJpbmcsXG4gICAgY29udmVyc2lvbnM6IEdlb2ZlbmNlVHJpZ2dlclR5cGUsXG4gICAgdmFsaWRDb250aW51ZVRpbWU6IG51bWJlcixcbiAgICBkd2VsbERlbGF5VGltZTogbnVtYmVyLFxuICAgIG5vdGlmaWNhdGlvbkludGVydmFsOiBudW1iZXIsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm90aWZpY2F0aW9uIHtcbiAgICBjb250ZW50VGl0bGU/OiBzdHJpbmcsXG4gICAgY2F0ZWdvcnk6IE5vdGlmaWNhdGlvbkNhdGVnb3J5LFxuICAgIHByaW9yaXR5OiBOb3RpZmljYXRpb25JbXBvcnRhbmNlLFxuICAgIGNoYW5uZWxOYW1lOiBzdHJpbmcsXG4gICAgY29sb3I/OiBudW1iZXIsXG4gICAgY29sb3JpemVkPzogYm9vbGVhbixcbiAgICBjb250ZW50SW5mbz86IHN0cmluZyxcbiAgICBjb250ZW50VGV4dD86IHN0cmluZyxcbiAgICBsYXJnZUljb24/OiBzdHJpbmcsXG4gICAgb25Hb2luZz86IGJvb2xlYW4sXG4gICAgc21hbGxJY29uOiBzdHJpbmcsXG4gICAgc3ViVGV4dD86IHN0cmluZyxcbiAgICBzb3VuZD86IHN0cmluZyxcbiAgICB2aWJyYXRlPzogbnVtYmVyW10sXG4gICAgdmlzaWJpbGl0eT86IG51bWJlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvY2F0aW9uUmVzdWx0IHtcbiAgICBsYXN0TG9jYXRpb246IExvY2F0aW9uLFxuICAgIGh3TG9jYXRpb25zOiBIV0xvY2F0aW9uW10sXG4gICAgbGFzdEhXTG9jYXRpb246IEhXTG9jYXRpb24sXG4gICAgbG9jYXRpb25zOiBMb2NhdGlvbltdXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aXZpdHlDb252ZXJzaW9uRGF0YSB7XG4gICAgYWN0aXZpdHlUeXBlOiBBY3Rpdml0eVR5cGUsXG4gICAgY29udmVyc2lvblR5cGU6IENvbnZlcnNpb25UeXBlLFxuICAgIGVsYXBzZWRUaW1lRnJvbVJlYm9vdDogbnVtYmVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aXZpdHlDb252ZXJzaW9uUmVzcG9uc2Uge1xuICAgIGFjdGl2aXR5Q29udmVyc2lvbkRhdGFMaXN0OiBBY3Rpdml0eUNvbnZlcnNpb25EYXRhW11cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBY3Rpdml0eUlkZW50aWZpY2F0aW9uRGF0YSB7XG4gICAgaWRlbnRpZmljYXRpb25BY3Rpdml0eTogQWN0aXZpdHlUeXBlLFxuICAgIHBvc3NpYmlsaXR5OiBudW1iZXJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBY3Rpdml0eUlkZW50aWZpY2F0aW9uUmVzcG9uc2Uge1xuICAgIGVsYXBzZWRUaW1lRnJvbVJlYm9vdDogbnVtYmVyLFxuICAgIG1vc3RBY3Rpdml0eUlkZW50aWZpY2F0aW9uOiBBY3Rpdml0eUNvbnZlcnNpb25JbmZvLFxuICAgIHRpbWU6IG51bWJlcixcbiAgICBhY3Rpdml0eUlkZW50aWZpY2F0aW9uRGF0YXM6IEFjdGl2aXR5SWRlbnRpZmljYXRpb25EYXRhW11cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb25MYXQge1xuICAgIGxvbmdpdHVkZTogbnVtYmVyLFxuICAgIGxhdGl0dWRlOiBudW1iZXJcbn1cblxuZXhwb3J0IGVudW0gRXZlbnRzIHtcbiAgICBPTl9MT0NBVElPTl9SRVNVTFQgPSAnb25Mb2NhdGlvblJlc3VsdCcsXG4gICAgQUNUSVZJVFlfQ09OVkVSU0lPTl9SRVNVTFQgPSAnb25BY3Rpdml0eUNvbnZlcnNpb25SZXN1bHQnLFxuICAgIEFDVElWSVRZX0lERU5USUZJQ0FUSU9OX1JFU1VMVCA9ICdvbkFjdGl2aXR5SWRlbnRpZmljYXRpb25SZXN1bHQnLFxuICAgIEdFT0ZFTkNFX1JFU1VMVCA9ICdvbkdlb2ZlbmNlUmVzdWx0J1xufVxuXG5leHBvcnQgZW51bSBQcmlvcml0eUNvbnN0YW50cyB7XG4gICAgUFJJT1JJVFlfSElHSF9BQ0NVUkFDWSA9IDEwMCxcbiAgICBQUklPUklUWV9CQUxBTkNFRF9QT1dFUl9BQ0NVUkFDWSA9IDEwMixcbiAgICBQUklPUklUWV9MT1dfUE9XRVIgPSAxMDQsXG4gICAgUFJJT1JJVFlfTk9fUE9XRVIgPSAxMDUsXG4gICAgUFJJT1JJVFlfSERfQUNDVVJBQ1kgPSAyMDAsXG4gICAgUFJJT1JJVFlfSU5ET09SID0gMzAwLFxuICAgIFBSSU9SSVRZX0hJR0hfQUNDVVJBQ1lfQU5EX0lORE9PUiA9IDQwMCxcbn1cblxuZXhwb3J0IGVudW0gTmF2aWdhdGlvblJlcXVlc3RDb25zdGFudHMge1xuICAgIE9WRVJQQVNTID0gMSxcbiAgICBJU19TVVBQT1JUX0VYID0gMixcbn1cblxuZXhwb3J0IGVudW0gQWN0aXZpdHlUeXBlIHtcbiAgICBWRUhJQ0xFID0gMTAwLFxuICAgIEJJS0UgPSAxMDEsXG4gICAgRk9PVCA9IDEwMixcbiAgICBTVElMTCA9IDEwMyxcbiAgICBPVEhFUlMgPSAxMDQsXG4gICAgV0FMS0lORyA9IDEwNyxcbiAgICBSVU5OSU5HID0gMTA4LFxufVxuXG5leHBvcnQgZW51bSBDb252ZXJzaW9uVHlwZSB7XG4gICAgRU5URVJfQUNUSVZJVFlfQ09OVkVSU0lPTiA9IDAsXG4gICAgRVhJVF9BQ1RJVklUWV9DT05WRVJTSU9OID0gMSxcbn1cblxuZXhwb3J0IGVudW0gQ29vcmRpbmF0ZVR5cGUge1xuICAgIENPT1JESU5BVEVfVFlQRV9XR1NfODQgPSAxLFxuICAgIENPT1JESU5BVEVfVFlQRV9HQ0pfMDIgPSAwLFxufVxuXG5leHBvcnQgZW51bSBHZW9mZW5jZUluaXRDb252ZXJzaW9uVHlwZSB7XG4gICAgRU5URVJfSU5JVF9DT05WRVJTSU9OID0gMSxcbiAgICBFWElUX0lOSVRfQ09OVkVSU0lPTiA9IDIsXG4gICAgRFdFTExfSU5JVF9DT05WRVJTSU9OID0gNCxcbn1cblxuZXhwb3J0IGVudW0gR2VvZmVuY2VUcmlnZ2VyVHlwZSB7XG4gICAgRU5URVJfR0VPRkVOQ0VfQ09OVkVSU0lPTiA9IDEsXG4gICAgRVhJVF9HRU9GRU5DRV9DT05WRVJTSU9OID0gMixcbiAgICBEV0VMTF9HRU9GRU5DRV9DT05WRVJTSU9OID0gNCxcbiAgICBHRU9GRU5DRV9ORVZFUl9FWFBJUkUgPSAtMSxcbn1cblxuZXhwb3J0IGVudW0gTm90aWZpY2F0aW9uQ2F0ZWdvcnkge1xuICAgIEFMQVJNID0gJ2FsYXJtJyxcbiAgICBDQUxMID0gJ2NhbGwnLFxuICAgIEVNQUlMID0gJ2VtYWlsJyxcbiAgICBFUlJPUiA9ICdlcnInLFxuICAgIEVWRU5UID0gJ2V2ZW50JyxcbiAgICBNRVNTQUdFID0gJ21zZycsXG4gICAgTkFWSUdBVElPTiA9ICduYXZpZ2F0aW9uJyxcbiAgICBQUk9HUkVTUyA9ICdwcm9ncmVzcycsXG4gICAgUFJPTU8gPSAncHJvbW8nLFxuICAgIFJFQ09NTUVOREFUSU9OID0gJ3JlY29tbWVuZGF0aW9uJyxcbiAgICBSRU1JTkRFUiA9ICdyZW1pbmRlcicsXG4gICAgU0VSVklDRSA9ICdzZXJ2aWNlJyxcbiAgICBTT0NJQUwgPSAnc29jaWFsJyxcbiAgICBTVEFUVVMgPSAnc3RhdHVzJyxcbiAgICBTWVNURU0gPSAnc3lzJyxcbiAgICBUUkFOU1BPUlQgPSAndHJhbnNwb3J0J1xufVxuXG5leHBvcnQgZW51bSBOb3RpZmljYXRpb25JbXBvcnRhbmNlIHtcbiAgICBERUZBVUxUID0gMyxcbiAgICBISUdIID0gNCxcbiAgICBMT1cgPSAyLFxuICAgIE1BWCA9IDUsXG4gICAgTUlOID0gMSxcbiAgICBOT05FID0gMCxcbiAgICBVTlNQRUNJRklFRCA9IC0xMDBcbn1cblxuZXhwb3J0IGVudW0gUmVxdWVzdFR5cGUge1xuICAgIExPQ0FUSU9OX0NBTExCQUNLID0gJ2xvY2F0aW9uQ2FsbGJhY2snLFxuICAgIFBFTkRJTkdfSU5URU5UID0gJ3BlbmRpbmdJbnRlbnQnXG59Il19