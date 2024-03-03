"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
axios_1.default
    .get('http://webcode.me')
    .then(resp => {
    console.log("Status: " + resp.status, resp.statusText);
    console.log("\nHeaders:\n" + resp.headers);
    console.log("\nData:\n" + resp.data);
});
