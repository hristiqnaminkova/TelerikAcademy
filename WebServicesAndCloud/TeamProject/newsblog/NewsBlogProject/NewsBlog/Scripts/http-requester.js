﻿/// <reference path="jquery-2.0.3.js" />

var httpRequester = (function () {
    function getJSON(url, success, error) {
        $.ajax({
            url: url,
            type: "GET",
            timeout: 50000,
            contentType: "application/json",
            success: success,
            error: error
        });
    }
    function postJSON(url, data, success, error) {
        $.ajax({
            url: url,
            type: "POST",
            contentType: "application/json",
            timeout: 50000,
            data: JSON.stringify(data),
            success: success,
            error: error
        });        
    }
    function deleteJSON(url, success, error) {
        $.ajax({
            url: url,
            type: "DELETE",
            timeout: 50000,
            success: success,
            error: error
        });
    }
    return {
        getJSON: getJSON,
        postJSON: postJSON,
        deleteJSON: deleteJSON
    };
}());